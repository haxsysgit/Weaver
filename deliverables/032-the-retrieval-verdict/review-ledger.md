# Review Ledger

## Status

Independent review done 2026-11-01 by a separate agent with no write
access, over the harness, the arm switch, the private run records and
judgements, and the first draft of `results.md`. Verdict: **one blocker**,
two major and several minor findings. The blocker invalidated arm C; the
harness was fixed test-first, arm C was re-run in full (2026-11-01 to
2026-11-03), and every table was rebuilt from valid answers only.

## Findings

| # | Severity | Finding | Outcome |
|---|---|---|---|
| 1 | Blocker | Every `semantic_search` call in arm C failed (107 of 107, all passes): the arms ran in one process, and arm A's embedded search index was never released, so C could not open it. C was really "D plus a broken tool", and every conclusion resting on C was invalid. | Fixed in the harness, test-first: `release_library` closes the index after each arm, a search probe must return hits before an arm that relies on search, and logged tool failures are counted per answer (`tool_errors`) and stop the run. Reproduced and proved on the real index with no model calls (second arm errors without the release, 8 hits with it). Arm C re-run in full; the broken records are kept privately as evidence. Product note for Plan 033: `ChatRuntime.close()` leaves the library's index client open. |
| 2 | Major | The no-answer section was wrong: C's no-answers came from its failed searches; 8 of the 48 were the publication guard rejecting a draft, not running out of lookups; "the pass-1 gap did not repeat" mixed contested and uncontested questions. | Rewritten in `results.md` from the valid runs; the guard share is reported for the first 48 only, as traced by the reviewer. |
| 3 | Major | The harness checked only tools outside the arm; nothing caught a tool failing on every call. | Fixed with finding 1 (`tool_errors`, stop on any). |
| 4 | Minor | Two figures carried the wrong set label (13 paraphrase questions against the 12 reused ones). | Fixed: every figure names its set. |
| 5 | Minor | The pass-2/3 spend in the table was the meter's, the analysis summed the run records ($0.0097 apart). | Fixed: the table says which source each figure uses. |
| 6 | Minor | "Cost and time are level" undersold that A was cheapest and fastest; C's time included failed calls. | Rewritten on the rebuilt tables: A and C cheapest, B slowest, nothing near 30%. |
| 7 | Minor | `learning.md` named a detail of one answer key. | Generalised. The earlier wording is in a local, unpushed commit. |
| 8 | Nit | The plan said to re-run contested questions "in the arms that disagree"; all four arms were re-run. | Recorded as a departure in `results.md`. |
| 9 | Nit | Arm B's prompt still mentions notebook statements though B has no statement search; the shipped `semantic_search` description is missing a word that arm C's novel-only description has. | Recorded for Plan 033. |

## Re-judging

- **Reviewer, blind:** 12 answers picked with seed 7, judged against the
  chapters before seeing any verdict. Agreed on 10 of 12. One answer the
  reviewer called wrong was judged partial (no count changes). One answer
  judged correct was borderline by the rubric; it was changed to partial.
- **Evaluator, while judging arm C's re-run pass 1:** 43 earlier-judged
  answers from arms A, B and D were mixed in blind as decoys. 42 of 43
  matched the earlier verdict on correct or not. The official verdicts
  stay the earlier ones.
- **Second judge, arm C's passes 2 and 3 and the three newly contested
  questions (68 official answers):** judged by `deepseek-flash` from a
  written runbook, to save the owner's session usage. 22 decoys mixed in
  blind; it matched 20 of 22 on correct or not (91%, bar 86%). The
  official verdict files were checksummed before and after and did not
  change; git status was unchanged.
- **Evaluator audit of the second judge:** 13 of its answers re-read
  against the key and, where needed, the chapter. Every correct or
  not-correct call agreed. One answer it labelled declined contradicts
  the key while hedging, so the rubric says wrong; no count changes, and
  the verdict was left as recorded.
- **Corrections found on reading the source:** one pass-2 answer judged
  wrong was correct once the chapter was re-read (the chapter names the
  character the way the answer did), and answers that identify the same
  character by other true details were made consistent (correct). Three pass-2 verdicts on the
  same question had been more generous than run 1; all are now under the
  same rule.
- **The one non-verbatim quote** in the final batch (arm C) was checked
  against the chapters: a four-word paraphrase in quote marks, true in
  substance (a later chapter says it in other words), not the novel's
  wording. Recorded under citation honesty in `results.md`.

## Checked and fine (reviewer)

- `analyze.py` reproduced every number in the first draft; totals matched
  the logs (calls, tokens, metered spend).
- The decision-rule differences and percentages were right.
- `blind_shuffle` and `join_arms` are one-to-one and check the question.
- The arm is reachable only through `open_chat_runtime(arm=)`, called only
  from the harness; no route, header, setting, or environment variable.
- Privacy: no question text, answer text, or novel quote in the
  deliverables apart from finding 7; nothing under `novels/`, `.weaver/`,
  or `.env` staged or tracked.
