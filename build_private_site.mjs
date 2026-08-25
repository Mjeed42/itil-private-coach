#!/usr/bin/env node
/** Build an encrypted static deployment. The passphrase never enters the output. */

import { chmodSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { randomBytes, pbkdf2Sync, createCipheriv } from "node:crypto";

const source = "docs";
const output = "private-dist";
const passwordFile = "private-password.txt";

if (!existsSync(passwordFile)) {
  const passphrase = [randomBytes(4).toString("hex"), randomBytes(4).toString("hex"), randomBytes(4).toString("hex")].join("-");
  writeFileSync(passwordFile, passphrase + "\n", { mode: 0o600 });
}
chmodSync(passwordFile, 0o600);
const passphrase = readFileSync(passwordFile, "utf8").trim();

let html = readFileSync(`${source}/index.html`, "utf8");
const css = readFileSync(`${source}/styles.css`, "utf8");
const questions = readFileSync(`${source}/questions.js`, "utf8").replaceAll("</script", "<\\/script");
const app = readFileSync(`${source}/app.js`, "utf8").replaceAll("</script", "<\\/script");
const voicePack = readFileSync("itil-study-agent/ITIL-ChatGPT-Voice-Coach.txt").toString("base64");
const icon = encodeURIComponent(readFileSync(`${source}/icon.svg`, "utf8"));
html = html
  .replace('<link rel="manifest" href="manifest.webmanifest">', "")
  .replace('<link rel="apple-touch-icon" href="icon.svg">', `<link rel="apple-touch-icon" href="data:image/svg+xml,${icon}">`)
  .replace('<link rel="stylesheet" href="styles.css">', `<style>${css}</style>`)
  .replace('<script src="questions.js"></script>', `<script>window.ITIL_VOICE_PACK_B64=${JSON.stringify(voicePack)};</script><script>${questions}</script>`)
  .replace('<script src="app.js"></script>', `<script>${app}</script>`);

const salt = randomBytes(16);
const iv = randomBytes(12);
const key = pbkdf2Sync(passphrase, salt, 310000, 32, "sha256");
const cipher = createCipheriv("aes-256-gcm", key, iv);
const encrypted = Buffer.concat([cipher.update(html, "utf8"), cipher.final(), cipher.getAuthTag()]);
const b64 = value => value.toString("base64");
const payload = { salt: b64(salt), iv: b64(iv), data: b64(encrypted), iterations: 310000 };

mkdirSync(output, { recursive: true });
const loader = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#102a43"><meta name="apple-mobile-web-app-capable" content="yes"><title>Private ITIL Coach</title>
<style>*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;padding:20px;color:#102a43;background:#f5f8fb;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.card{width:min(100%,430px);padding:28px;background:white;border:1px solid #d9e2ec;border-radius:24px;box-shadow:0 20px 60px rgba(16,42,67,.14)}.lock{display:grid;place-items:center;width:58px;height:58px;margin-bottom:20px;border-radius:18px;color:white;background:#102a43;font-size:27px}h1{margin:0 0 9px;font-size:28px}p{color:#627d98;line-height:1.5}.field{display:grid;gap:7px;margin:22px 0 13px}label{font-size:12px;font-weight:750}input[type=password]{width:100%;padding:15px;border:1px solid #bcccdc;border-radius:13px;font-size:17px}button{width:100%;padding:15px;border:0;border-radius:13px;color:white;background:#1f6feb;font-weight:800;font-size:16px}.remember{display:flex;align-items:center;gap:8px;margin:13px 0 19px;color:#486581;font-size:13px}.error{min-height:20px;color:#b42318;font-size:13px}.micro{font-size:11px}.hidden{display:none}.spinner{animation:spin .8s linear infinite;display:inline-block}@keyframes spin{to{transform:rotate(360deg)}}</style></head>
<body><main class="card"><div class="lock">🔒</div><h1>Your private ITIL Coach</h1><p>This study app is encrypted. Enter the private passphrase from your ChatGPT conversation.</p><div class="field"><label for="password">Private passphrase</label><input id="password" type="password" autocomplete="current-password" autocapitalize="none" spellcheck="false"></div><label class="remember"><input id="remember" type="checkbox" checked> Remember access on this iPhone</label><div id="error" class="error"></div><button id="unlock">Unlock study app</button><p class="micro">Your study answers and scores remain in this browser and are not uploaded.</p></main>
<script>
const PAYLOAD=${JSON.stringify(payload)};
const KEY_STORE="itil-private-device-key-v1";
const bytes=value=>Uint8Array.from(atob(value),c=>c.charCodeAt(0));
const b64=value=>btoa(String.fromCharCode(...new Uint8Array(value)));
async function decrypt(rawKey){const key=await crypto.subtle.importKey("raw",rawKey,"AES-GCM",false,["decrypt"]);const plain=await crypto.subtle.decrypt({name:"AES-GCM",iv:bytes(PAYLOAD.iv),tagLength:128},key,bytes(PAYLOAD.data));return new TextDecoder().decode(plain)}
async function derive(password){const material=await crypto.subtle.importKey("raw",new TextEncoder().encode(password),"PBKDF2",false,["deriveBits"]);return crypto.subtle.deriveBits({name:"PBKDF2",salt:bytes(PAYLOAD.salt),iterations:PAYLOAD.iterations,hash:"SHA-256"},material,256)}
async function openApp(rawKey,remember){try{const page=await decrypt(rawKey);if(remember)localStorage.setItem(KEY_STORE,b64(rawKey));document.open();document.write(page);document.close()}catch{localStorage.removeItem(KEY_STORE);document.querySelector("#error").textContent="That passphrase is not correct. Please try again.";document.querySelector("#unlock").textContent="Unlock study app";document.querySelector("#unlock").disabled=false}}
document.querySelector("#unlock").onclick=async()=>{const button=document.querySelector("#unlock");button.disabled=true;button.innerHTML='<span class="spinner">◌</span> Unlocking…';const raw=await derive(document.querySelector("#password").value);openApp(raw,document.querySelector("#remember").checked)};
document.querySelector("#password").addEventListener("keydown",event=>{if(event.key==="Enter")document.querySelector("#unlock").click()});
const remembered=localStorage.getItem(KEY_STORE);if(remembered){document.querySelector(".card").classList.add("hidden");openApp(bytes(remembered),true)}
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js");
</script></body></html>`;
writeFileSync(`${output}/index.html`, loader);
writeFileSync(`${output}/sw.js`, `const C="itil-private-${Date.now()}";self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(["./","./index.html"]))));self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));\n`);
writeFileSync(`${output}/README.md`, "# Encrypted ITIL Coach hosting\n\nThe application payload is AES-256-GCM encrypted. No passphrase, course content, answers, or learner progress is stored in this repository.\n");
console.log(`Encrypted deployment written to ${output}. Passphrase remains only in ${passwordFile}.`);
