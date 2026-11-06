# Learning Note

## Gate status

**Admitted 2026-11-05 (owner: "Admit 033.6").** Admission confirms the owner
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

## Slice 2 observations (2026-11-05, no model spend)

- H1 is supported: all three gap answers failed `unsupported_chapter`, and
  credit for chapters opened in earlier turns never worked on stored
  history (204 reads, 0 credited). Details in `results.md`.
- Deadlines: per-call times are not recorded, and the slowest healthy
  whole turn was 111 s, so the per-call bound starts at 120 s instead of
  the proposed 90 s; the turn bound stays at 4 minutes (planning agent's
  call under direction 2).

## Outcomes (planning agent, 2026-11-06; evidence, not decisions)

- **H1 supported.** All three 033.5 gap answers came from
  `unsupported_chapter` on chapters opened in earlier turns; with earlier
  reads credited and re-opened, the live run gave no gap answer.
- **H2 supported in waking time.** No waking call passed 104 s; the bound
  turned a provider error into a clean failure the harness retried. Sleep
  defeats any in-process timer; that is an environment fact.
- **H3 not supported.** 10 of 12 Reader Trials pass on the evaluator
  record (long thread and confusing fight fail); the check set did not get
  worse (4 of 9, from 3 of 9).

