# Learning Note

## Gate status

**Admitted 2026-11-03.** The owner admitted the plan as drafted, which confirms owner directions 1 to 7, including the gap answer's wording and the decision rule.

## Amendment (owner, 2026-11-04)

After Part 1 stopped on a one-line test expectation, the owner directed
that the executor get goals and judgement, not a script ("lax your
instruction a bit, you just have to provide the best and general idea for
how to get to the best result"). The runbook became a brief with hard
rules (held-out integrity, blind judging, spend, privacy, git safety, one
index process, honest tests, owner-only decisions) and freedom inside them
(plan direction 8). The planning agent kept the hard rules because they
protect the verdict and the repo, not because of the executor's skill.

## The held-out set (slice 8, 2026-11-04)

- **Frozen** in `.weaver/evaluation/plan033/questions.json` (private) on
  2026-11-04, while Part 1's regression was still running and before any
  held-out answer.
- **Owner approval:** five sample questions (h01 to h05) were shown; the
  owner replied "lets go", taken as approval of their style. The other ten
  follow the same shape.
- **Counts:** 15 questions; 5 from chapters 1 to 1000 and 10 from 1001 to
  3127; volumes 2 (2), 3 (2), 4, 5, 6, 8 (3), 9 (2), 10 (3). Each has one
  expected chapter and 3 required facts, every fact read in the chapter.
  At most one proper name per question (most use only "Sunny" or none).
- **Recipe addition:** draws closer than 30 chapters to an earlier draw
  were skipped, so no two questions share a stretch of story. No draw
  landed in a recap or interlude, so none moved.
- **Overlap check:** no question shares a run of four or more words with
  its expected chapter (`overlap.py`, all 15 OK).

## Root cause of weak vector search (slice 12, 2026-11-04)

Measured directly, no model in the loop, on 53 dev questions (Plan 032's
scene and name questions plus the older retrieval set; never the held-out
15), whole novel 1 to 3127. Chapter-level hit rates:

| Search | hit@1 | hit@5 | hit@8 | hit@20 |
|---|---|---|---|---|
| Live tool (vector only, as shipped) | 0.09 | 0.38 | 0.49 | 0.62 |
| Real BM25 word search, same chunks | 0.28 | 0.45 | 0.57 | 0.72 |
| Blend: vector (with bge query prefix) + BM25, RRF | 0.21 | 0.58 | 0.66 | 0.77 |
| Blend of four (both chunk sizes, both methods) | 0.26 | 0.58 | 0.66 | 0.79 |
| Blend + cross-encoder rerank (bge-reranker-base) | 0.15 | 0.42 | 0.62 | 0.83 |

Observations:

- **The hybrid was never built.** The tool runs vector search and falls
  back to word search only when vector returns nothing, which does not
  happen. The stored word vectors are BM42 with about 48 terms per
  half-chapter chunk, not BM25.
- **Chunks overflow the model.** 6,826 chunks for 3,127 chapters, each
  about 79 lines and 800 tokens; bge-large reads 512, so about a third of
  the text was never embedded. Re-chunking to fit (19,999 chunks, about
  380 tokens; 3.4 minutes on the owner's GPU, vectors match the runtime
  query path at cosine 1.000) lifts vector-only hit@1 from 0.09 to 0.17,
  but blends land within noise of the simple blend.
- **Vector alone loses to word search; blended, it adds about 13 points
  at hit@5** (0.45 to 0.58). The owner's hybrid idea holds.
- **The tool's output hides the evidence.** Novel hits carry only a
  chapter-and-line handle, no text, so judging a hit costs a lookup. The
  description tells the model to read notebook hits first, but the
  notebook stops at chapter 1000.
- **A generic reranker hurts** on this novel's paraphrases. Dropped.
- One question is about 2 points; differences under about 6 points are
  noise at this size.

**Accepted (owner, 2026-11-04): "Simple hybrid".** Built test-first
(`3e31779`): the existing vector index with the bge query prefix, BM25
over every chapter on the shelf, fused by RRF; each hit carries a preview
and `found_by`; `find_text` trims oversized results; the give-up rule
says to read the chapters either side and search in other words first.
Scored through the shipped tool on the same dev questions:

| Tool | hit@1 | hit@5 | hit@8 |
|---|---|---|---|
| Before (vector only) | 0.09 | 0.38 | 0.49 |
| Hybrid (arm A) | 0.21 | 0.58 | 0.66 |
| Word half only (arm W) | 0.25 | 0.42 | 0.57 |

About 0.1 s a warm search. Word search alone ranks the single best
chapter slightly better; the blend wins at five and eight, which is what
the model sees (it gets eight hits with previews).

- **Caveat for round 2's held-out run.** The search design used dev
  questions only. The give-up rule's rewording was prompted by the check
  set and by the pattern of round 1's held-out declines (no question
  text or key fact went into it). The held-out questions are unchanged
  and the product has never been tuned on them, but the planning agent
  had seen round 1's held-out answers.

## Observations (2026-11-03, before admission)

- **No-answer turns are not mostly a lookup budget problem.** In Plan
  032's saved run state, failed turns record `exit_reason: model_failed`
  and the message "The model returned an unsafe response.", with an empty
  `error_category` and `raw_stop_reason`. Some failed after 2 of 4
  lookups. Plan 032's H6 (the lookup budget ends without a forced answer)
  does not explain them.
- **Nine checks give the same message.** In `run_turn`, eight places end a
  turn with that message (publication repair failed twice, wrong model,
  candidate rejected too often, no reading packet, packet build raised,
  unhandled stop reason, missing or unsafe tool calls), plus one where
  the turn ends with no accepted answer. Only two log a warning.
- **The logs name 9 of about 35.** Plan 032's run logs hold nine
  "publication repair failed" warnings (unsupported chapter citations,
  changed or unopened quotes). The rest left no trace.
- **The failure record already has a slot.** `TurnResult.error_category`
  is saved in the `run_failed` event by the runner, so tagging each site
  needs no schema change.
- **The unhandled-stop-reason check is effectively unreachable.** The
  only stop reason it could catch, ABORTED, is handled earlier as an
  interruption (found while pre-testing patch 2).
- **Existing tests pin "fail with no answer"** for unsafe tool calls
  (security tests that also prove no handler ran). The gap answer is
  therefore opt-in on `run_turn`; the product's runner turns it on.
- **Volume 13 ends at 3160.** Chapter 3160 ends with the Spell announcing
  the end of volume thirteen (found in Plan 032 slice 3; the owner
  confirmed the fix in the Plan 032 decision).
- **The 033 diagnosis set:** 33 question-and-arm pairs that gave no answer
  at least once in Plan 032 (A 7, B 12, C 2, D 12).

## Hypotheses (not decisions)

- **H1.** Most silent failures come from the publication checks and the
  reading-packet step, not from the provider.
- **H2.** With the gap answer on, no turn in the regression set ends with
  nothing for the reader, apart from provider errors.
- **H3.** The `<when_you_cannot_find_it>` rule removes most scene
  substitution (at most 1 of 9 check answers) without lowering the
  Foundational Reader Trials (at least 6 of 9 correct).
- **H4.** On fresh paraphrase questions inside vector reach, the full
  toolset (A) beats chapters and exact search (D) by at least 2.0 of 15
  correct per run. Plan 032 saw about 3.3 of 13 on reused questions.
