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
- q38 was reworded: its premise was wrong. In the chapter, Azarax's undead
  army travels with the Shadow Legion; the Deathless are the hunters.

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
