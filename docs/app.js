const TOPICS = {
  concepts: "Key concepts",
  dimensions: "Four dimensions",
  svs: "Service value system",
  principles: "Guiding principles",
  "value-chain": "Service value chain",
  continual: "Continual improvement",
  practices: "Management practices"
};

const LESSONS = [
  {
    id: "concepts", title: "Key concepts of service management", time: "12 min",
    summary: "Value, services, utility, warranty, outcomes, costs and risks",
    body: `
      <h3>The purpose</h3><p>Service management is a set of specialized organizational capabilities for enabling value for customers in the form of services. A service enables value co-creation by facilitating outcomes customers want without requiring them to manage specific costs and risks.</p>
      <h3>Know the roles</h3><ul><li><b>Customer:</b> defines service requirements and takes responsibility for outcomes of service consumption.</li><li><b>User:</b> uses the service.</li><li><b>Sponsor:</b> authorizes the budget for service consumption.</li></ul>
      <h3>Value equation</h3><ul><li><b>Utility:</b> what the service does—fit for purpose.</li><li><b>Warranty:</b> assurance it meets agreed requirements—fit for use, including availability, capacity, continuity and security.</li><li><b>Outcome:</b> a result enabled for a stakeholder.</li><li><b>Output:</b> a tangible or intangible deliverable of an activity.</li><li><b>Cost:</b> money spent on an activity or resource.</li><li><b>Risk:</b> an uncertain event that could cause harm or make objectives harder to achieve.</li></ul>
      <p class="contrast"><b>Exam trap:</b> Utility is functionality; warranty is assurance. Outputs are produced by activities; outcomes are the results stakeholders seek.</p>`
  },
  {
    id: "relationships", title: "Products, offerings and relationships", time: "10 min",
    summary: "How providers and consumers co-create value",
    body: `<h3>From resources to value</h3><p>A product is a configuration of an organization's resources designed to offer value. A service offering is a formal description of one or more services for a target consumer group and may include goods, access to resources, and service actions.</p><h3>Relationship model</h3><ul><li><b>Service provision:</b> provider activities and resources used to deliver a service.</li><li><b>Service consumption:</b> consumer activities used to receive and use it.</li><li><b>Service relationship management:</b> joint activities ensuring continual value co-creation.</li></ul><p class="contrast"><b>Remember:</b> the provider does not simply “deliver value.” Provider and consumer co-create value through an active relationship.</p>`
  },
  {
    id: "dimensions", title: "The four dimensions", time: "14 min",
    summary: "A holistic view that prevents one-sided decisions",
    body: `<h3>All four apply to every service</h3><ol><li><b>Organizations and people:</b> culture, roles, competencies, communication and organizational structure.</li><li><b>Information and technology:</b> information, knowledge, applications, infrastructure and technical choices.</li><li><b>Partners and suppliers:</b> relationships with other organizations, contracts, sourcing strategy and dependencies.</li><li><b>Value streams and processes:</b> integrated activities, workflows, controls and procedures used to create value.</li></ol><h3>External factors</h3><p>Use PESTLE: political, economic, social, technological, legal and environmental factors.</p><p class="contrast"><b>Exam trap:</b> A question about skills or culture points to organizations and people; contracts and sourcing point to partners and suppliers.</p>`
  },
  {
    id: "svs", title: "The service value system", time: "12 min",
    summary: "How all components work together to create value",
    body: `<h3>Inputs and outcome</h3><p>The service value system (SVS) describes how all components and activities of an organization work together to facilitate value creation. Opportunity and demand enter; value is the outcome.</p><h3>Five components</h3><ul><li>Guiding principles</li><li>Governance</li><li>Service value chain</li><li>Practices</li><li>Continual improvement</li></ul><h3>Governance</h3><p>The means by which an organization is directed and controlled. Its core activities are evaluate, direct and monitor.</p><p class="contrast"><b>Structure:</b> The SVS is the whole system. The service value chain is its central operating model. Practices supply resources to value-chain work.</p>`
  },
  {
    id: "principles", title: "The seven guiding principles", time: "18 min",
    summary: "Universal recommendations for every situation",
    body: `<ol><li><b>Focus on value:</b> link every activity to value for stakeholders.</li><li><b>Start where you are:</b> assess and reuse what already works; measure objectively.</li><li><b>Progress iteratively with feedback:</b> organize work into manageable sections and learn frequently.</li><li><b>Collaborate and promote visibility:</b> involve the right people and make work and decisions visible.</li><li><b>Think and work holistically:</b> no service or component stands alone; consider the whole system.</li><li><b>Keep it simple and practical:</b> use the minimum steps needed to achieve an objective.</li><li><b>Optimize and automate:</b> optimize before applying technology; use human intervention where it adds value.</li></ol><p class="contrast"><b>Exam trap:</b> The principles interact. “Start where you are” does not mean preserving everything, and “keep it simple” does not mean ignoring controls.</p>`
  },
  {
    id: "value-chain", title: "The six value-chain activities", time: "18 min",
    summary: "Purpose and interaction of plan, improve, engage, design, obtain and deliver",
    body: `<ul><li><b>Plan:</b> shared understanding of vision, current status and improvement direction.</li><li><b>Improve:</b> continual improvement of products, services, practices and all value-chain activities.</li><li><b>Engage:</b> understand stakeholder needs, maintain transparency and good relationships.</li><li><b>Design and transition:</b> ensure products and services continually meet expectations for quality, cost and time to market.</li><li><b>Obtain/build:</b> ensure service components are available when and where needed and meet specifications.</li><li><b>Deliver and support:</b> ensure services are delivered and supported according to agreed specifications and expectations.</li></ul><p class="contrast"><b>Exam trap:</b> These are not sequential lifecycle stages. A value stream combines activities in whatever pattern is appropriate.</p>`
  },
  {
    id: "continual", title: "Continual improvement", time: "14 min",
    summary: "The model, register and improvement at every level",
    body: `<h3>The seven-step model</h3><ol><li>What is the vision?</li><li>Where are we now?</li><li>Where do we want to be?</li><li>How do we get there?</li><li>Take action.</li><li>Did we get there?</li><li>How do we keep the momentum going?</li></ol><h3>Continual improvement register</h3><p>A database or structured document used to record and manage improvement ideas from identification through action. Improvement is everyone's responsibility and applies to the SVS and all products, services, components and relationships.</p><p class="contrast"><b>Sequence clue:</b> Vision aligns direction; baseline establishes the current state; measurable targets define the destination.</p>`
  },
  {
    id: "practices", title: "High-priority service practices", time: "25 min",
    summary: "The practices most often confused in exam scenarios",
    body: `<ul><li><b>Incident management:</b> minimize negative impact by restoring normal service operation quickly.</li><li><b>Problem management:</b> reduce likelihood and impact of incidents by identifying causes and managing workarounds and known errors.</li><li><b>Service desk:</b> capture demand for incident resolution and service requests; be the entry point and single point of contact.</li><li><b>Service request management:</b> handle predefined, user-initiated requests effectively and in a user-friendly manner.</li><li><b>Change enablement:</b> maximize successful changes through risk assessment, authorization and schedule management. Older material may call this “change control.”</li><li><b>Service level management:</b> set clear business-based targets and ensure delivery is assessed, monitored and managed against them.</li><li><b>Relationship management:</b> establish and nurture links between the organization and stakeholders.</li><li><b>Supplier management:</b> manage suppliers and their performance to support seamless provision of quality products and services.</li></ul><p class="contrast"><b>Exam trap:</b> Incident restores service; problem finds and manages causes. Service desk is the communication channel; service request management is the fulfillment practice.</p>`
  },
  {
    id: "practices-wide", title: "The wider practice map", time: "20 min",
    summary: "General, service and technical practices in context",
    body: `<h3>General management examples</h3><p>Architecture, continual improvement, information security, knowledge, measurement and reporting, organizational change, portfolio, project, relationship, risk, service financial, strategy, supplier, and workforce and talent management.</p><h3>Service management examples</h3><p>Availability, business analysis, capacity and performance, change enablement, incident, IT asset, monitoring and event, problem, release, service catalogue, service configuration, service continuity, service design, service desk, service level, service request, and validation and testing.</p><h3>Technical management</h3><p>Deployment management, infrastructure and platform management, and software development and management.</p><p class="contrast"><b>Study efficiently:</b> Know the purpose and key terms of syllabus practices. Do not assume every practice in the framework has equal exam weight.</p>`
  },
  {
    id: "exam", title: "Exam technique", time: "8 min",
    summary: "Turn knowledge into reliable marks",
    body: `<ul><li>Read the final clause first: identify exactly what the question asks.</li><li>Watch qualifiers such as <b>BEST</b>, <b>MOST</b>, <b>NOT</b> and <b>FIRST</b>.</li><li>Eliminate options that belong to a neighboring concept but do not answer the question.</li><li>For scenario questions, map the evidence to the formal purpose or definition.</li><li>Aim for about 75 seconds per question, flag uncertainty, and review afterward.</li><li>Do not change an answer without a concrete reason.</li></ul><p class="contrast"><b>Readiness rule:</b> The pass mark is 65%, but target two fresh timed mock scores of 80% or better with no major topic below 70%.</p>`
  }
];

const STORAGE_KEY = "itil-coach-progress-v1";
const today = () => new Date().toISOString().slice(0, 10);
const emptyState = () => ({ version: null, answers: {}, topics: {}, reviewed: [], mocks: [], streak: 0, lastStudy: null });
let state = loadState();
let quiz = null;
let pendingQuizMode = null;

function loadState() {
  try { return { ...emptyState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; }
  catch { return emptyState(); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); renderDashboard(); }
function shuffle(values) {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
  return copy;
}
function touchStudyDay() {
  const now = today(); if (state.lastStudy === now) return;
  const prior = new Date(); prior.setDate(prior.getDate() - 1);
  state.streak = state.lastStudy === prior.toISOString().slice(0, 10) ? state.streak + 1 : 1;
  state.lastStudy = now;
}

function navigate(id) {
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === id));
  document.querySelectorAll(".nav-button").forEach(b => b.classList.toggle("active", b.dataset.view === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (id === "progress") renderTopicProgress();
  if (id === "exam") renderMockHistory();
}

function topicStats(topic) { return state.topics[topic] || { correct: 0, total: 0 }; }
function topicPercent(topic) { const s = topicStats(topic); return s.total ? Math.round(s.correct / s.total * 100) : 0; }
function overallMastery() {
  const attempts = Object.values(state.topics).reduce((a, x) => a + x.total, 0);
  const correct = Object.values(state.topics).reduce((a, x) => a + x.correct, 0);
  return attempts ? Math.round(correct / attempts * 100) : 0;
}
function renderDashboard() {
  const attempts = Object.values(state.topics).reduce((a, x) => a + x.total, 0);
  const mastery = overallMastery();
  const best = state.mocks.length ? Math.max(...state.mocks.map(x => x.score)) : null;
  document.querySelector("#streak").textContent = state.streak;
  document.querySelector("#mastery").textContent = `${mastery}%`;
  document.querySelector("#answered").textContent = attempts;
  document.querySelector("#bestMock").textContent = best == null ? "—" : `${best}%`;
  document.querySelector("#overallBar").style.width = `${mastery}%`;
  const ready = state.mocks.filter(x => x.score >= 80).length >= 2 && mastery >= 80;
  document.querySelector("#readinessBadge").textContent = ready ? "Exam-ready evidence" : attempts < 12 ? "Building foundation" : "Training toward 80%";
  document.querySelector("#readinessText").textContent = ready ? "You have reached the app's readiness threshold. Repair any topic below 70% before exam day." : best == null ? "Complete the diagnostic, work through the lessons, then begin timed mocks." : `Best mock: ${best}%. Reach 80% twice on fresh mocks for a safer readiness margin.`;
  document.querySelector("#todayLabel").textContent = new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric" }).format(new Date()).toUpperCase();
  const warning = document.querySelector("#versionWarning");
  if (state.version === "itil5") { warning.classList.remove("hidden"); warning.innerHTML = `<b>Stop:</b> this course is for ITIL 4 Foundation, not Version 5. Use current official Version 5 training before practicing here. <a href="https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-5-foundation-version-50-4154" target="_blank" rel="noopener">Open PeopleCert</a>.`; }
  else warning.classList.add("hidden");
}

function renderModules() {
  const list = document.querySelector("#moduleList"); list.replaceChildren();
  LESSONS.forEach((lesson, index) => {
    const button = document.createElement("button"); button.className = `module ${state.reviewed.includes(lesson.id) ? "reviewed" : ""}`;
    button.innerHTML = `<span class="module-number">${state.reviewed.includes(lesson.id) ? "✓" : index + 1}</span><span><strong>${lesson.title}</strong><span>${lesson.summary} · ${lesson.time}</span></span><span class="chevron">›</span>`;
    button.addEventListener("click", () => openLesson(lesson)); list.appendChild(button);
  });
}
function openLesson(lesson) {
  const content = document.querySelector("#lessonContent");
  content.innerHTML = `<p class="eyebrow">${lesson.time.toUpperCase()} LESSON</p><h2>${lesson.title}</h2><div class="lesson-body">${lesson.body}</div>`;
  document.querySelector("#lessonDialog").dataset.lesson = lesson.id;
  document.querySelector("#lessonDialog").showModal();
}

function weightedQuestions(count) {
  return shuffle(window.ITIL_QUESTIONS).sort((a, b) => {
    const aSeen = state.answers[a.id]?.count || 0, bSeen = state.answers[b.id]?.count || 0;
    const aWeak = topicPercent(a.topic), bWeak = topicPercent(b.topic);
    return (aSeen * 25 + aWeak) - (bSeen * 25 + bWeak);
  }).slice(0, count);
}
function diagnosticQuestions() {
  const picked = [];
  Object.keys(TOPICS).forEach(topic => { const item = shuffle(window.ITIL_QUESTIONS.filter(q => q.topic === topic))[0]; if (item) picked.push(item); });
  const remaining = shuffle(window.ITIL_QUESTIONS.filter(q => !picked.includes(q))).slice(0, 12 - picked.length);
  return shuffle([...picked, ...remaining]);
}
function startQuiz(mode) {
  if (state.version === "itil5") { navigate("home"); return; }
  const size = mode === "diagnostic" ? 12 : mode === "quick" ? 5 : mode === "mock" ? 40 : 10;
  const questions = mode === "diagnostic" ? diagnosticQuestions() : mode === "mock" ? shuffle(window.ITIL_QUESTIONS).slice(0, size) : weightedQuestions(size);
  quiz = { mode, questions, index: 0, correct: 0, responses: [], started: Date.now() };
  navigate(mode === "mock" ? "coach" : "coach");
  document.querySelector("#coachSetup").classList.add("hidden"); document.querySelector("#quizResult").classList.add("hidden"); document.querySelector("#quizArea").classList.remove("hidden");
  document.querySelector("#coachIntro").textContent = mode === "mock" ? "Mock mode: feedback is held until all 40 answers are submitted." : "One question at a time. Commit first; then study the correction.";
  renderQuestion();
}
function renderQuestion() {
  const q = quiz.questions[quiz.index], total = quiz.questions.length;
  document.querySelector("#quizProgress").textContent = `Question ${quiz.index + 1} of ${total}`;
  document.querySelector("#quizScore").textContent = quiz.mode === "mock" ? "Feedback at end" : `${quiz.correct} correct`;
  document.querySelector("#quizBar").style.width = `${quiz.index / total * 100}%`;
  document.querySelector("#questionTopic").textContent = TOPICS[q.topic] || "Key concepts";
  document.querySelector("#questionText").textContent = q.prompt;
  document.querySelector("#legacyNote").classList.toggle("hidden", !q.legacy);
  const options = document.querySelector("#answerOptions"); options.replaceChildren();
  q.options.forEach((text, index) => {
    const button = document.createElement("button"); button.className = "answer";
    const letter = document.createElement("span"); letter.className = "answer-letter"; letter.textContent = "ABCD"[index];
    const label = document.createElement("span"); label.textContent = text;
    button.append(letter, label); button.addEventListener("click", () => answerQuestion(index)); options.appendChild(button);
  });
  document.querySelector("#feedback").className = "feedback hidden"; document.querySelector("#nextQuestion").classList.add("hidden");
}
function answerQuestion(selected) {
  const q = quiz.questions[quiz.index], correct = selected === q.answer;
  quiz.responses.push({ q, selected, correct }); if (correct) quiz.correct++;
  document.querySelectorAll(".answer").forEach((button, index) => {
    button.disabled = true;
    if (quiz.mode === "mock") { if (index === selected) button.classList.add("selected"); return; }
    if (index === q.answer) button.classList.add("correct");
    if (index === selected && !correct) button.classList.add("wrong");
  });
  if (quiz.mode !== "mock") {
    recordAnswer(q, correct);
    const feedback = document.querySelector("#feedback"); feedback.className = `feedback ${correct ? "good" : "bad"}`;
    feedback.innerHTML = correct ? `<b>Correct.</b> You matched the formal ITIL concept.` : `<b>Not this time.</b> The best answer is <b>${"ABCD"[q.answer]}: ${q.options[q.answer]}</b>. Compare its wording with the purpose or definition in the ${TOPICS[q.topic]} lesson.`;
  }
  const next = document.querySelector("#nextQuestion"); next.textContent = quiz.index + 1 === quiz.questions.length ? "Finish session" : "Next question"; next.classList.remove("hidden");
}
function recordAnswer(q, correct) {
  const old = state.answers[q.id] || { count: 0, correct: 0 };
  state.answers[q.id] = { count: old.count + 1, correct: old.correct + (correct ? 1 : 0), last: today(), lastCorrect: correct };
  const topic = topicStats(q.topic); state.topics[q.topic] = { correct: topic.correct + (correct ? 1 : 0), total: topic.total + 1 };
}
function nextQuestion() {
  quiz.index++;
  if (quiz.index < quiz.questions.length) renderQuestion(); else finishQuiz();
}
function finishQuiz() {
  if (quiz.mode === "mock") quiz.responses.forEach(x => recordAnswer(x.q, x.correct));
  touchStudyDay(); const score = Math.round(quiz.correct / quiz.questions.length * 100);
  if (quiz.mode === "mock") state.mocks.push({ date: today(), score, correct: quiz.correct, seconds: Math.round((Date.now() - quiz.started) / 1000) });
  saveState();
  document.querySelector("#quizArea").classList.add("hidden");
  const result = document.querySelector("#quizResult"); result.classList.remove("hidden");
  const weak = Object.keys(TOPICS).sort((a,b) => topicPercent(a) - topicPercent(b)).slice(0,2).map(x => TOPICS[x]).join(" and ");
  result.innerHTML = `<p class="eyebrow">SESSION COMPLETE</p><h2>${score}% · ${quiz.correct}/${quiz.questions.length}</h2><p>${score >= 80 ? "Strong result. Keep testing it on a separate day." : score >= 65 ? "A pass-level result, but not yet the safer readiness target." : "This is useful evidence: repair the gaps before another mock."}</p><p class="muted">Current priorities: ${weak}.</p><button class="primary full" id="resultHome">Return to Today</button>`;
  result.querySelector("#resultHome").addEventListener("click", () => { document.querySelector("#coachSetup").classList.remove("hidden"); document.querySelector("#quizResult").classList.add("hidden"); navigate("home"); });
}

function renderTopicProgress() {
  const container = document.querySelector("#topicProgress"); container.innerHTML = `<p class="eyebrow">TOPIC MASTERY</p><h2>Accuracy by area</h2>`;
  Object.entries(TOPICS).forEach(([id, name]) => { const stats = topicStats(id), pct = topicPercent(id); const row = document.createElement("div"); row.className = "topic-row"; row.innerHTML = `<div class="topic-head"><strong>${name}</strong><span>${stats.correct}/${stats.total} · ${pct}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>`; container.appendChild(row); });
}
function renderMockHistory() {
  const container = document.querySelector("#mockHistory"); container.innerHTML = `<p class="eyebrow">MOCK HISTORY</p><h2>Evidence over time</h2>`;
  if (!state.mocks.length) { container.innerHTML += `<p class="muted">No completed mock exams yet. Build your foundation first.</p>`; return; }
  [...state.mocks].reverse().forEach(mock => { container.innerHTML += `<div class="history-row"><span>${mock.date}</span><strong>${mock.score}% · ${mock.correct}/40</strong></div>`; });
}
function askChatGPT() {
  const weak = Object.keys(TOPICS).sort((a,b) => topicPercent(a) - topicPercent(b)).slice(0,3).map(x => `${TOPICS[x]} (${topicPercent(x)}%)`).join(", ");
  const prompt = `Act as my ITIL 4 Foundation exam coach. My weakest areas are ${weak}. Quiz me with five new exam-style questions, one at a time. Do not reveal an answer until I respond. After each response, explain the formal ITIL distinction and correct me directly.`;
  window.open(`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`, "_blank", "noopener");
}
function voicePackFile() {
  if (!window.ITIL_VOICE_PACK_B64) return null;
  const binary = atob(window.ITIL_VOICE_PACK_B64), bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new File([bytes], "ITIL-ChatGPT-Voice-Coach.txt", { type: "text/plain" });
}
async function shareVoicePack() {
  const file = voicePackFile(), status = document.querySelector("#voicePackStatus");
  if (!file) return;
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: "Private ITIL Voice Coach", text: "Attach this file to my private ITIL study chat." });
      status.textContent = "Choose ChatGPT in the share sheet, then keep that chat for daily voice study.";
      return;
    } catch (error) { if (error.name === "AbortError") return; }
  }
  downloadVoicePack();
}
function downloadVoicePack() {
  const file = voicePackFile(), status = document.querySelector("#voicePackStatus"); if (!file) return;
  const link = document.createElement("a"); link.href = URL.createObjectURL(file); link.download = file.name; link.click(); setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  status.textContent = "Saved. In ChatGPT, create an ITIL project and add this file as a Source.";
}
async function copyActivation() {
  const phrase = "Start my ITIL 4 diagnostic using the Voice Coach pack. Ask one question at a time.";
  await navigator.clipboard.writeText(phrase);
  document.querySelector("#voicePackStatus").textContent = "Activation phrase copied. Paste or say it in ChatGPT.";
}
function addCalendarReminder() {
  const [hour, minute] = document.querySelector("#reminderTime").value.split(":").map(Number);
  const start = new Date(); start.setHours(hour, minute, 0, 0); if (start < new Date()) start.setDate(start.getDate() + 1);
  const end = new Date(start.getTime() + 20 * 60 * 1000);
  const stamp = value => `${value.getFullYear()}${String(value.getMonth()+1).padStart(2,"0")}${String(value.getDate()).padStart(2,"0")}T${String(value.getHours()).padStart(2,"0")}${String(value.getMinutes()).padStart(2,"0")}00`;
  const calendar = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//ITIL Coach//Daily Study//EN","CALSCALE:GREGORIAN","BEGIN:VEVENT",`UID:itil-daily-${Date.now()}@mjeed42.github.io`,`DTSTART;TZID=Asia/Riyadh:${stamp(start)}`,`DTEND;TZID=Asia/Riyadh:${stamp(end)}`,"RRULE:FREQ=DAILY","SUMMARY:Study with ITIL Exam Coach","DESCRIPTION:Open the ITIL Coach and complete today's focused session.","BEGIN:VALARM","TRIGGER:-PT5M","ACTION:DISPLAY","DESCRIPTION:Your ITIL study session starts in 5 minutes.","END:VALARM","END:VEVENT","END:VCALENDAR"].join("\r\n");
  const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([calendar], { type: "text/calendar" })); link.download = "ITIL-daily-study.ics"; link.click(); setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

document.querySelectorAll(".nav-button").forEach(b => b.addEventListener("click", () => navigate(b.dataset.view)));
document.querySelectorAll(".choice-card").forEach(b => b.addEventListener("click", () => startQuiz(b.dataset.mode)));
document.querySelector("#startDaily").addEventListener("click", () => {
  const mode = Object.keys(state.answers).length < 12 ? "diagnostic" : "adaptive";
  const nextLesson = LESSONS.find(lesson => !state.reviewed.includes(lesson.id));
  if (nextLesson) { pendingQuizMode = mode; openLesson(nextLesson); }
  else startQuiz(mode);
});
document.querySelector("#startMock").addEventListener("click", () => startQuiz("mock"));
document.querySelector("#nextQuestion").addEventListener("click", nextQuestion);
document.querySelector("#askCoach").addEventListener("click", askChatGPT);
document.querySelector("#addReminder").addEventListener("click", addCalendarReminder);
document.querySelector("#shareVoicePack").addEventListener("click", shareVoicePack);
document.querySelector("#downloadVoicePack").addEventListener("click", downloadVoicePack);
document.querySelector("#copyActivation").addEventListener("click", copyActivation);
document.querySelector("#closeLesson").addEventListener("click", () => { const dialog = document.querySelector("#lessonDialog"); if (!state.reviewed.includes(dialog.dataset.lesson)) state.reviewed.push(dialog.dataset.lesson); touchStudyDay(); saveState(); dialog.close(); renderModules(); if (pendingQuizMode) { const mode = pendingQuizMode; pendingQuizMode = null; startQuiz(mode); } });
document.querySelector("#resetProgress").addEventListener("click", () => { if (confirm("Reset all lessons, answers, streak and mock scores on this device?")) { const version = state.version; state = { ...emptyState(), version }; saveState(); renderModules(); renderTopicProgress(); renderMockHistory(); } });

const versionDialog = document.querySelector("#versionDialog");
versionDialog.addEventListener("close", () => { if (versionDialog.returnValue) { state.version = versionDialog.returnValue; saveState(); } });
if (!state.version) versionDialog.showModal();
if (window.ITIL_VOICE_PACK_B64) document.querySelector("#voicePackPanel").classList.remove("hidden");
renderModules(); renderDashboard(); renderMockHistory();
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
