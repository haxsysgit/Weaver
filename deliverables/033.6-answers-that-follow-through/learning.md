# Learning Note

## Gate status

**Drafted 2026-11-05, awaiting admission.** Admission confirms the owner
directions and the evidence in the plan, and approves one run of all
twelve Reader Experience Trials plus the Plan 033 check set in arm A
(slice 7).

## Observations (Plan 033.5 run, no new model spend)

- 3 of 12 Reader Trials failed: vague ask (invented canon stated as fact),
  confusing fight (stopped at ch. 2699, before the fight it denied), fanfic
  spark (gap answer to the fit question after an 8 h 16 min retry).
- The gap answer appeared 3 times, twice on the push the trial exists to
  test; one record says the answer failed publication repair twice.
- Chapters opened in earlier turns already count as opened.
- The model client's timeout is per read; nothing bounds a call or a turn.

## Hypotheses (not decisions)

- **H1.** Most gap answers come from one or two publication checks
  rejecting answers grounded in text the conversation already opened.
- **H2.** A per-call and per-turn deadline turns every stall into a clean,
  retryable failure within four minutes, without failing any turn that
  passed in 033.5.
- **H3.** With the causes fixed, the build passes all twelve Reader
  Experience Trials on the evaluator record, and the check set's what-if
  answers do not get worse (3 of 9 at Plan 033).
