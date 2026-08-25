#!/usr/bin/env python3
"""Build text-forward knowledge files for the mobile ITIL study agent."""

from pathlib import Path
import html
import json
import re
from docx import Document

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "itil-study-agent" / "knowledge"
SITE = ROOT / "docs"


def docx_text(path: Path) -> str:
    document = Document(path)
    blocks = []
    for paragraph in document.paragraphs:
        text = paragraph.text.strip()
        if text:
            blocks.append(text)
    for table in document.tables:
        for row in table.rows:
            cells = [cell.text.strip().replace("\n", " ") for cell in row.cells]
            if any(cells):
                blocks.append(" | ".join(cells))
    return "\n\n".join(blocks)


def srt_text(path: Path) -> str:
    raw = path.read_text(encoding="utf-8-sig", errors="replace")
    lines = []
    previous = None
    for line in raw.splitlines():
        line = line.strip()
        if not line or line.isdigit() or "-->" in line:
            continue
        line = html.unescape(re.sub(r"<[^>]+>", "", line))
        if line != previous:
            lines.append(line)
            previous = line
    return " ".join(lines)


def natural_key(path: Path):
    return [int(part) if part.isdigit() else part for part in re.split(r"(\d+)", path.stem)]


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    transcript = [
        "# ITIL 4 Course Transcript",
        "",
        "> Source: caption files in this repository. Generated for retrieval; wording may contain caption errors.",
    ]
    for path in sorted((ROOT / "Subtitles").glob("*.srt"), key=natural_key):
        transcript.extend(["", f"## {path.stem}", "", srt_text(path)])
    (OUT / "course-transcript.md").write_text("\n".join(transcript) + "\n", encoding="utf-8")

    exams = [
        "# Practice Exams",
        "",
        "> Keep answers hidden until the learner commits to an answer. Preserve the source wording.",
    ]
    for filename in (
        "ITIL 4 Foundation (Practice Exam 1).docx",
        "ITIL 4 Foundation (Practice Exam 2).docx",
    ):
        exams.extend(["", f"## {filename}", "", docx_text(ROOT / filename)])
    (OUT / "practice-exams.md").write_text("\n".join(exams) + "\n", encoding="utf-8")

    metadata = docx_text(ROOT / "ITIL 4 Foundation.docx")
    (OUT / "course-metadata.md").write_text(
        "# Course Metadata\n\n" + metadata + "\n", encoding="utf-8"
    )

    questions = []
    for exam_number, filename in enumerate((
        "ITIL 4 Foundation (Practice Exam 1).docx",
        "ITIL 4 Foundation (Practice Exam 2).docx",
    ), start=1):
        document = Document(ROOT / filename)
        paragraphs = [p.text.strip() for p in document.paragraphs if p.text.strip()]
        starts = [i for i, text in enumerate(paragraphs) if re.fullmatch(r"Question \d+:", text)]
        answers = {
            int(row.cells[0].text.strip()): row.cells[1].text.strip().upper()
            for table in document.tables
            for row in table.rows
            if row.cells and row.cells[0].text.strip().isdigit()
        }
        for offset, start in enumerate(starts):
            number = int(re.search(r"\d+", paragraphs[start]).group())
            end = starts[offset + 1] if offset + 1 < len(starts) else len(paragraphs)
            block = [x for x in paragraphs[start + 1:end] if x.lower() != "answer key"]
            if len(block) < 5:
                raise ValueError(f"Could not parse {filename}, question {number}")
            prompt, options = " ".join(block[:-4]), block[-4:]
            key = answers[number]
            questions.append({
                "id": f"e{exam_number}q{number}",
                "exam": exam_number,
                "number": number,
                "prompt": prompt,
                "options": options,
                "answer": ord(key) - ord("A"),
                "topic": classify_topic(prompt + " " + " ".join(options)),
                "legacy": "change control" in (prompt + " " + " ".join(options)).lower(),
            })
    SITE.mkdir(parents=True, exist_ok=True)
    payload = "window.ITIL_QUESTIONS = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"
    (SITE / "questions.js").write_text(payload, encoding="utf-8")

    print(f"Built knowledge pack in {OUT} and {len(questions)} site questions")


def classify_topic(text: str) -> str:
    value = text.lower()
    rules = (
        ("principles", ("guiding principle", "focus on value", "start where", "iteratively", "collaborate", "holistically", "simple and practical", "optimize and automate")),
        ("dimensions", ("four dimension", "organizations and people", "information and technology", "partners and suppliers", "value streams and processes", "pestle")),
        ("continual", ("continual improvement", "improvement register", "where are we", "vision")),
        ("value-chain", ("value chain", "plan activity", "engage activity", "obtain/build", "deliver and support", "design and transition")),
        ("practices", ("practice", "incident", "problem", "service desk", "service request", "service level", "supplier", "information security", "deployment", "release", "configuration", "asset", "monitoring", "event", "availability", "capacity", "continuity")),
        ("svs", ("service value system", "governance", "opportunity", "demand")),
        ("concepts", ("service", "utility", "warranty", "outcome", "output", "value", "risk", "cost", "customer", "sponsor", "user", "service relationship")),
    )
    for topic, keywords in rules:
        if any(keyword in value for keyword in keywords):
            return topic
    return "concepts"


if __name__ == "__main__":
    main()
