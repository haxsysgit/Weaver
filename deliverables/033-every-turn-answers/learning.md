# Learning Note

## Gate status

**Unadmitted.**

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
