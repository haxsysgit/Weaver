# Results

## Status

Slices 1 to 7 done 2026-11-03, apart from the owner's spot-check of 10
answers and the owner's decision. Live runs, blind judging, the
independent review, and the decision-rule tables are complete.

Metadata only. Question text, answer keys, answers, and verdict notes stay
private in `.weaver/evaluation/plan032/`.

## What ran

| Batch | Answers | Questions | Arms | Live spend (meter) |
|---|---|---|---|---|
| Smoke (slice 4) | 2 | 1 | A, B | $0.010 |
| Pass 1 | 172 | 43 (40 + 3 trials) | A, B, C, D | $0.938 |
| Passes 2 and 3, first wave | 176 | 22 contested | A, B, C, D | $1.018 |
| Arm C re-run, pass 1 | 43 | 43 | C | $0.214 |
| Arm C re-run, passes 2 and 3 | 50 | 25 contested | C | $0.24 |
| Newly contested, passes 2 and 3 | 18 | 3 | A, B, D | $0.10 |
| **Total** | **461** | | | **$2.55 of the $5.00 cap** |

- **Arm C's first runs are invalid** (review finding 1). In the first
  two batches every one of arm C's `semantic_search` calls failed: the
  arms ran in one process and arm A's embedded index was never released.
  Those 87 answers are kept privately as evidence, are not judged into
  any table, and their spend is in the total. Arm C was re-run after a
  test-first harness fix (below).
- **Official answers:** 93 per arm (43 in pass 1, plus 2 more runs of
  each contested question), 372 in all.
- A question is contested when the arms disagree on "correct" in pass 1.
  With valid arm C answers, 25 questions are contested (22 before, plus
  3). All four arms ran passes 2 and 3 of every contested question; the
  plan said "the arms that disagree" (a recorded departure).
- The arm C re-run was stopped by the owner part way through pass 2 (10
  of 25 answers in) to save session usage. Nothing was re-run: the
  remaining 15 ran in a new batch. The total meter reading includes
  $0.011 of headroom added for an answer in flight when it stopped, so
  $2.55 is an upper bound.
- No answer used a tool outside its arm (0 of 372). The arm switch is
  reachable only from the harness (16 tests in `tests/test_reading_arms.py`).
- After the fix, every arm C answer records its reading-tool failures:
  0 of 93. The search probe returned 8 hits before each arm that searches.

## Judging

- Every official answer was judged blind (arm hidden, tool traces
  stripped, shuffled with a fixed seed) against the frozen key and the
  chapter text. Verdicts: correct (core fact and at least two thirds of
  the required facts, no material error), partial, wrong, declined (says
  honestly it cannot confirm), none (no answer reached the reader).
- **Two judges.** The evaluator judged run 1 (A, B, D), the first wave
  of passes 2 and 3 (A, B, D), and arm C's re-run pass 1: 304 answers.
  The last 68 official answers (arm C's passes 2 and 3, and the three
  newly contested questions) were judged by a smaller model, `deepseek-flash`,
  from a written runbook, to save the owner's session usage. The same
  rubric, the same earlier rulings per question, and the chapters were
  available to both.
- **Consistency gates.** Each later judging batch mixed in decoys:
  answers already judged, unlabelled. The evaluator's re-judging matched
  42 of 43 decoys on correct or not; the smaller model matched 20 of 22
  (91%, bar 86%). The evaluator then re-read 13 of the smaller model's
  answers against the key and agreed with every correct or not-correct
  call; one label (declined, where the rubric says wrong) changes no
  count.
- **Citation honesty:** every quote in the 372 official answers (128:
  A 38, B 26, C 32, D 32) was checked automatically against the chapters
  the answer cites. 126 are verbatim in a cited chapter. The two misses: one answer (arm A) repeats the reader's own question in
  quote marks, which is not a novel quote; one answer (arm C) puts a
  four-word paraphrase in quote marks as the way a character "got
  remembered". The paraphrase is true in substance (a later chapter says
  the same in other words), but it is not the novel's wording. No arm
  invented a scene or misplaced a quote to the wrong chapter.

- **Owner spot-check (2026-11-03):** 10 official answers picked at
  random (seed 32032) from all four judges' batches. The owner agreed
  with all 10 verdicts. On one (judged wrong), the owner noted the answer
  looked like it could not locate the scene. That is the cause: it
  missed the right chapter and presented a different, later scene as the
  answer, with a hedge. It commits to an answer, so the rubric keeps it
  wrong; either label counts as not correct.

## Accuracy (correct answers)

`pass^3`: a contested question counts only if all three runs were
correct. `mean`: correct runs divided by runs, summed over questions
(expected correct per run). `pass 1`: the first run only.

| Set | Metric | A full | B no vector search | C no notebook or story map | D chapters + exact only |
|---|---|---|---|---|---|
| All 40 | pass^3 | 10 | 10 | 10 | 10 |
| All 40 | mean | 17.3 | 16.3 | **17.7** | 15.7 |
| All 40 | pass 1 | **19** | 18 | 17 | 15 |
| Reused 20 | pass^3 | **7** | 6 | 6 | 5 |
| Reused 20 | mean | **10.3** | 8.7 | 9.0 | 7.3 |
| New 20 | pass^3 | 3 | 4 | 4 | **5** |
| New 20 | mean | 7.0 | 7.7 | **8.7** | 8.3 |
| After chapter 3127 (8 of the 40) | mean | 3.0 | 3.0 | 3.3 | 3.7 |
| Foundational trials (3) | mean | **2.3** | 1.7 | 1.3 | 1.7 |

By kind (mean, all 40):

| Kind | n (reused + new) | A | B | C | D |
|---|---|---|---|---|---|
| Scene from a paraphrase | 13 (12 + 1) | **7.0** | 4.0 | 5.0 | 3.7 |
| Exact name or quote | 7 (4 + 3) | 4.3 | 4.0 | 4.3 | 3.7 |
| Connection | 7 (0 + 7) | 2.7 | 3.3 | 3.7 | 3.7 |
| Who is | 7 (4 + 3) | 1.7 | **3.7** | 3.0 | 2.7 |
| Time-aware | 6 (0 + 6) | 1.7 | 1.3 | 1.7 | 2.0 |

All verdicts, every official answer (93 per arm, 40 questions plus the
trials):

| Arm | correct | partial | wrong | declined | none |
|---|---|---|---|---|---|
| A | 47 | 23 | 8 | 8 | 7 |
| B | 42 | 26 | 9 | 4 | 12 |
| C | 45 | 18 | **19** | 9 | **2** |
| D | 40 | 23 | 6 | 10 | **14** |

Wrong answers in pass 1, all judged by the evaluator: A 6, B 3, C 12,
D 4. Without the notebook and story map, arm C almost never ends with no
answer, and is wrong about twice as often as the full toolset.

## Cost, speed, and tool calls (per answer, all 93 official answers per arm)

| Arm | Mean cost | Median cost | Mean time | Median time | Tool calls |
|---|---|---|---|---|---|
| A | $0.0052 | $0.0039 | 12.2 s | 8.1 s | 5.80 |
| B | $0.0062 | $0.0039 | 15.2 s | 8.7 s | 6.42 |
| C | $0.0050 | $0.0042 | 12.4 s | 8.9 s | 6.29 |
| D | $0.0054 | $0.0043 | 12.6 s | 8.4 s | 5.95 |

From the run records. The story-map tools were rarely called where they
were offered (31 calls in the first 174 answers that had them).

## No-answer failures

35 of 372 official answers never reached the reader: A 7, B 12, C 2,
D 14. By pass: A 3, 1, 3; B 10, 0, 2; C 1, 0, 1; D 10, 2, 2. The
independent review traced 8 of the first 48 (which included the broken
arm C runs) to the publication guard rejecting a draft, and the rest to
turns that ended after their lookups with no final answer. The final 35
were not re-traced. In every arm this is a product bug: a turn should
always answer, even if only to say it could not confirm. Recorded; not
fixed mid-run.

## The decision rule (fixed before the first run)

A component is kept if removing it costs at least 3 of 40 correct
answers, or any citation honesty, or it saves at least 30% of cost or
time per answer at equal accuracy. Primary metric: pass^3 on all 40.

| Component | Comparison | Correct lost (pass^3 / mean / pass 1) | Citations | Cost and time it saves | Rule outcome |
|---|---|---|---|---|---|
| Vector search (passages and notebook statements) | A vs B | 0 / 1.0 / 1 | no change | 16% cost, 20% time | below the bar |
| Notebook statements + story map | A vs C | 0 / -0.4 / 2 | one paraphrase in quote marks without them | none (A is 4% dearer, 2% faster) | below the bar on accuracy; touches the citation clause |
| All three | A vs D | 0 / 1.6 / 4 | no change | 4% cost, 3% time | below the bar |
| (for reference) Passage vectors alone | C vs D | 0 / 2.0 / 2 | one paraphrase in quote marks with them | 7% cost, 2% time | below the bar |

Read literally, the rule proposes retiring all three components, with
one caveat: the citation clause says "any", and the only quote slip came
from the arm without the notebook. The evaluator reads that as one slip
in 32 of arm C's quotes, true in substance; the owner decides whether it
counts.

## Verdict and recommendation (evaluator, for the owner to decide)

Observed:

1. **The primary metric cannot separate the arms.** All four score 10
   of 40 on pass^3. On the mean and on pass 1, the gaps are 1 to 4
   correct answers, at or below the noise between runs of the same arm.
2. **Vector search clearly helps one kind of question: "find the scene I
   describe".** On the 13 paraphrase questions: A 7.0, C 5.0, B 4.0,
   D 3.7. Passage vectors add about 1.3 (C over D), and notebook-statement
   vectors about 2 more (A over C). This is the most reader-like way of
   asking, and it is the one kind where any arm doubles another.
3. **But the held-out half cannot test it.** 12 of the 13 paraphrase
   questions are reused from the set Plan 029 developed retrieval
   against; the new 20 hold one. On the new 20, the full toolset is the
   lowest arm (7.0 against 7.7 to 8.7). This is a flaw in the question
   mix, recorded as such.
4. **The notebook and story map lower the error rate.** Without them
   (C), answers are wrong twice as often (12 against 6 in pass 1, same
   judge), though C almost never fails to answer. The full toolset has
   the fewest answers that are wrong or missing (A 15, B 21, C 21, D 20
   of 93).
5. **"Who is" questions do not need the full toolset.** B (story map,
   no vectors) is best there (3.7 of 7); A is the weakest (1.7).
6. **Chapters after 3127 converge**, as H4 predicted (3.0 to 3.7 of 8).
   Nothing saves 30% of cost or time; the arms cost the same within a
   fifth of a cent.

Recommendation (inference, labelled):

- **Retire nothing now.** The rule's 3-of-40 bar on pass^3 could not see
  any component, and the secondary measures point both ways: vector
  search doubles the paraphrase score, and the notebook halves wrong
  answers, but both on evidence that is partly reused. Retiring a part
  means rebuilding it later if this was a measurement miss; keeping the
  current pipeline costs nothing at run time.
- **Do not extend anything yet either.** Plan 033 should not re-embed
  chapters past 3127 (about 5 hours of CPU) or index notebook statements
  past 1000 until one small, held-out test settles the paraphrase
  effect: about 15 new "find the scene I describe" questions across the
  novel, arms A and D, three runs each (about $0.50). If A's lead holds,
  extend vector search; if not, retire it.
- **Fix the no-answer failure first**, in every arm: 35 of 372 turns
  ended with nothing for the reader.
- **A cheap follow-up for "who is":** the full toolset is weakest there.
  Worth a look at whether the prompt steers it away from the story map.

The literal rule and this recommendation disagree. The owner decides
which one Plan 033 follows.

## Hypotheses (from `learning.md`)

| | Hypothesis | Result |
|---|---|---|
| H1 | No vector search costs little on names and quotes, more on paraphrased scenes | Supported, on reused questions: names 4.3 vs 4.0; paraphrases 7.0 vs 4.0 |
| H2 | No notebook hurts "who is" and "connection" most | Refuted: without it, "who is" 3.0 vs 1.7 and connection 3.7 vs 2.7, both higher; it hurts the error rate instead |
| H3 | D is slower and costs more, but never less honest | Partly refuted: D costs and takes the same as A; honesty equal (no quote slips) |
| H4 | After chapter 3127 the arms converge | Supported: 3.0, 3.0, 3.3, 3.7 |
| H5 | Notebook-statement vectors are what lift A on paraphrased scenes | Partly supported: they add about 2 of 13, passage vectors about 1.3; reused questions only |
| H6 | No-answer failures come from the lookup budget ending without a forced answer | Open: the review found some are the publication guard; arm C almost never fails, unexplained. Plan 033 |

## Findings recorded, not fixed (rule: no tuning mid-run)

- No answer after lookups or a guard rejection (above). Plan 033.
- When a lookup misses, some answers present a different scene they
  could find as the answer, with only a soft hedge (seen in several
  arms on one reveal question, and in the owner's spot-check). Better to
  say the scene was not found. Plan 033, with the no-answer fix.
- `ChatRuntime.close()` leaves the library's search index open; a second
  runtime in the same process then fails every search. The harness
  works around it (`release_library`); the product should close it.
- Arm B's prompt still mentions notebook statements though B has no
  statement search; the shipped `semantic_search` description is missing
  a word that arm C's novel-only description has.
- Volume 14 starts at chapter 3161; Weaver's volume table calls every
  chapter after 3127 volume 13. Volume 13 is 3128 to 3160.
- Two questions turned out ambiguous on reading the answers: one scene
  description also matches an earlier, similar tunnel, and one name is
  also a place. Their verdicts stand as keyed; they are flagged for any
  reuse.
- The 4-lookup budget for quick recall was tuned on arm A's toolset. It
  was not changed for the other arms.

## Commands

```bash
UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python uv run pytest tests/test_reading_arms.py tests/test_retrieval_verdict_harness.py -q
UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python uv run python scripts/retrieval_verdict.py --questions .weaver/evaluation/plan032/questions.json --out .weaver/evaluation/plan032/runs --arm C --live --cap 5.0 --spent 0
UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python uv run python .weaver/evaluation/plan032/analyze.py
```

The last two need the private question set and the server stopped. Run
one arm per command when possible; the harness now releases the index
between arms and probes search before an arm that uses it.

Floor at close (2026-11-03): 839 backend tests passed (4 skipped), 183
frontend tests, `tsc` clean, ruff clean on the changed files.

## Budget, measured

- Live model: $2.55 of the $5.00 cap and the $2.50 to $4.00 estimate,
  including $0.49 on arm C's invalid runs. 461 answers against the
  200 to 240 estimated: contested questions turned out more numerous,
  and arm C ran twice.
- Agent context: within the 0.8M to 1.4M estimate for writing the
  questions and judging, plus a runbook hand-off for the last 68
  judgements; not metered to the token.
