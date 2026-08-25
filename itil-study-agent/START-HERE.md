# Mobile ITIL Study Agent

This pack turns the repository into a persistent, mobile-friendly ChatGPT study project. It is designed for daily coaching, adaptive quizzes, spaced repetition, and mock-exam readiness.

## Important exam-version check

These files teach **ITIL 4 Foundation** and originate from a 2019 course. PeopleCert now also offers **ITIL Foundation (Version 5)**. Confirm the exact exam name on your booking before beginning. Do not use this ITIL 4 pack as the main source for a Version 5 exam.

For ITIL 4 Foundation, PeopleCert currently lists 40 multiple-choice questions, 60 minutes, closed book, and a 65% passing score. The study agent targets 80% on repeated fresh mocks to provide a safer readiness margin.

## Create the cloud workspace

1. Run `python3 build_study_pack.py` from the repository root (already done if the files exist under `knowledge/`).
2. In ChatGPT, create a project named **ITIL Exam Coach**.
3. Copy the entire contents of `AGENT-INSTRUCTIONS.md` into the project's instructions.
4. Upload these project sources:
   - `knowledge/course-transcript.md`
   - `knowledge/practice-exams.md`
   - `knowledge/course-metadata.md`
   - the original `Study Guide (ITIL 4 Foundation).pdf`
5. Start a new chat inside the project and send: **Start my ITIL diagnostic. Ask one question at a time.**
6. Open the same project in the ChatGPT mobile app each day. Voice can be used when convenient; ask the coach to keep official English terminology visible.

Project files and instructions carry across chats in the project. If a long chat becomes unwieldy, begin a new project chat and paste the most recent `ITIL PROGRESS SNAPSHOT`.

## Daily habit

Use the phrase **Start today — I have 20 minutes**. The coach will choose review and new material based on your weak areas. At the end, keep its Progress Snapshot in the project.

Suggested minimum rhythm:

- Days 1–10: concepts, dimensions, value system, principles, and value chain.
- Days 11–18: continual improvement and syllabus practices.
- Days 19–24: mixed retrieval, weak-area repair, and scenario questions.
- Final phase: at least two fresh timed 40-question mocks at 80%+, then focused repair.

Adjust the schedule to the learner's actual exam date and diagnostic results; mastery, not calendar completion, determines readiness.

## Useful mobile prompts

- `Start today — I have 15 minutes.`
- `Quiz me only on my weakest area, one question at a time.`
- `Explain this in Arabic, but keep the official English ITIL terms.`
- `Give me a five-question commute drill.`
- `Run a closed-book 40-question mock. No feedback until the end.`
- `Show my progress and tell me honestly whether I am exam-ready.`

## Optional reminder

If scheduled tasks are available in your ChatGPT experience, ask: `Remind me every day at 8:00 PM Riyadh time to open my ITIL Exam Coach project and complete a 20-minute session.` Verify the schedule shown by ChatGPT.
