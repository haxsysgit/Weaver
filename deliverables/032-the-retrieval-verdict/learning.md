# Plan 032 learning note

## Gate status

**Admitted 2026-11-01.** The owner chose "Admit as drafted", which
confirms items 5 to 9 in the plan doc as written. Slice 3 shows the owner
five sample questions with their keys before the rest are written.

## Observations (2026-11-01, before admission)

- **The tools.** The model reads through six tools plus skills:
  `semantic_search` (meaning search over novel passages and notebook
  statements), `read_chapters`, `find_text` (exact phrase and speaker),
  `browse_chapters`, `who_is` and `lore_path` (the story map, built from
  the notebook). The system prompt and the skill catalogue name them.
- **Reach today (measured at Plan 031):** semantic search covers chapters
  1 to 3127; notebook statements in the index stop at 1000; notebook
  files run to 3160; the shelf ends at 3232. Reading and exact search
  reach every chapter.
- **Use today (measured 2026-10-31):** 1,378 chapter reads to 414 vector
  searches across 554 turns.
- **What earlier plans measured.** Plan 014's chunk sweep scored search
  hits only, not answers: the best dense setting found the right chapter
  in the top 5 for 57% of 35 questions (chapters 1 to 1000). Plan 018.5
  deferred the answer-level evaluation. No plan has compared answers with
  and without each part.
- **Reusable material:** `questions-v2` holds 40 questions with expected
  chapters and lines (chapters 17 to 2976, 30 of them paraphrases),
  private under `.weaver/research/retrieval-experiment/`. They were
  written for search, so some may be too easy or too narrow for answers.
- **Cost of rebuilding vector search:** about 5 hours of CPU to re-embed
  the novel (Plan 018.5), plus index state of about 81 MB.

## Hypotheses (not decisions)

- **H1.** Removing `semantic_search` (arm B) costs little on name and
  quote questions and more on paraphrased scene questions.
- **H2.** Removing the notebook (arm C) hurts "who is" and "how do these
  connect" questions most, since the story map answers them in one call.
- **H3.** Arm D is slower and costs more tokens per answer, because it
  must skim and read to locate, but it is never less honest in its
  citations.
- **H4.** After chapter 3127 the arms converge, because vector search
  cannot see those chapters.

## Owner-confirmed direction

Items 5 to 9 in the plan doc, confirmed as drafted on 2026-11-01: the
four arms, the 40-question set (20 reused and re-checked, 20 new with at
least 8 after chapter 3127), one run per arm plus pass^3 on contested
questions, blind judging with an owner spot-check of 10, the decision
rule fixed before the first run, and the $5.00 live cap.

## Slice 3: the question set (2026-11-01)

The answer key was written and frozen before any live run. Question text
and keys stay private in `.weaver/evaluation/plan032/questions.json`; this
note records counts only.

- **Owner gate:** five samples with keys were shown first; the owner
  approved the style ("Yes, write the rest").
- **Set:** 40 questions, 20 reused and 20 new, plus the three Foundational
  Reader Trials (43 runs per arm).
- **Kinds:** scene from a paraphrase 13, exact name or quote 7, who is 7,
  connection 7, time-aware 6.
- **Coverage:** every volume from 1 to 14 has at least one question; 8 sit
  after chapter 3127, past the vector index.
- **Keys:** each lists its expected chapters and the facts a correct
  answer must contain, checked against the chapter text. The notebook was
  used only to point at candidate chapters, never as the key.

### Changes to the reused questions (recorded, not silent)

- Two reused picks (q22, q28) overlap Foundational Reader Trial 1 and were
  swapped for q08 and q18.
- q11 was dropped: its chapter shows the prison but not the reason asked
  for. Replaced by q16.
- q38 was reworded: its premise did not match the chapter.

### Observations (not fixed here)

- **The reused questions are not fully held out.** Plan 029 used this
  question set for retrieval development. Results are therefore reported
  separately for the reused and the new questions, and the new 20 carry
  more weight in the verdict.
- **Volume 14 exists.** Chapter 3160 ends with the Spell announcing the end
  of volume thirteen, so chapters 3161 and later belong to volume 14.
  Weaver's volume table (`spoilers/judge.py`, `lib/volumes.ts`) ends
  volume 12 at 3127 and calls everything after it volume 13. A small fix
  for a later plan: volume 13 is 3128 to 3160.

## Slices 4 to 7: harness, live runs, blind judging, review (2026-11-01 to 2026-11-03)

Numbers and tables are in `results.md`. What was learned:

### Observations

- **Smoke and dry run.** Every arm ran every question in fake mode with
  no network; one live question per arm (A and B) cost $0.0096. No answer
  in any pass used a tool outside its arm.
- **A broken arm looked like a working one.** The independent review
  found that every arm C search had failed: the arms shared one process
  and the first arm kept the embedded index open. The answer stream says
  a tool started and finished, never whether it worked, so nothing in
  the records looked wrong. The first draft's conclusions about arm C
  ("passage vectors add nothing") were wrong. Lesson: a harness that
  compares toolsets must prove each tool works in each arm (a probe) and
  count tool failures per answer. Both are now in the harness, test-first.
- **Live runs.** 461 answers, $2.55. 372 are official (93 per arm); 87
  invalid arm C answers are kept as evidence.
- **No-answer failures.** 35 of 372 official turns gave the reader
  nothing (A 7, B 12, C 2, D 14). A product bug in every arm.
- **Citations.** 126 of 128 quotes verbatim in a cited chapter; one
  false positive (the reader's own question) and one paraphrase in quote
  marks (arm C).
- **The question mix hid the main effect from the held-out half.** The
  paraphrase effect (A 7.0, C 5.0, B 4.0, D 3.7 of 13) sits on 12 reused
  questions; only 1 of the 20 new questions is a paraphrase. Lesson for
  future verdicts: balance kinds across the held-out and reused halves,
  and weight the kind the component exists for.
- **pass^3 saturates.** With 25 contested questions, every arm scored 10
  of 40 on pass^3. A primary metric that ties every arm cannot drive a
  keep-or-retire rule; the mean per run carried the information.
- **Removing the notebook trades no-answers for wrong answers.** Arm C
  answered almost every time but was wrong twice as often as arm A in
  pass 1 (same judge).
- **A smaller judge, gated.** The last 68 official answers were judged
  by `deepseek-flash` from a written runbook, with decoys from earlier
  judging mixed in blind; it matched 20 of 22, and an evaluator audit of
  13 found no correct-or-not disagreement. A cheap judge is usable when
  a decoy gate and an audit back it.
- **Judging corrections.** One run-1 verdict moved from wrong to partial
  on re-reading the chapter (a later name for the same item); one pass-2
  verdict moved from wrong to correct after the chapter confirmed the
  answer. Two questions are ambiguous on reflection; flagged for reuse.

### Hypotheses after the runs (not decisions)

- **H5 (revised).** Both kinds of vectors lift paraphrased scenes:
  passages about 1.3 of 13 (C over D), notebook statements about 2 more
  (A over C). Reused questions only. Plan 033 should settle it on about
  15 new paraphrase questions, arms A and D, before re-embedding.
- **H6.** No-answer turns come from the lookup budget ending without a
  forced answer and from the publication guard rejecting a draft. Arm C
  almost never failed, which neither explains. To check in Plan 033.
- **H7.** The full toolset's weakness on "who is" questions (A 1.7, B
  3.7 of 7) comes from the prompt steering it to vector search over the
  story map. Untested.

### The decision rule, applied

No component clears the fixed accuracy bar (3 of 40 on pass^3; every arm
ties at 10); none saves 30%. The citation clause is touched by one
paraphrase in quote marks from the arm without the notebook. The
evaluator recommends retiring nothing and extending nothing until a
held-out paraphrase test runs; the literal rule proposes retiring all
three. Both are in `results.md`; the owner decides.
