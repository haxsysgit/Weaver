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
