# Review Ledger: Weaver model layer and preserved tool protocol

## Status

The one accepted repair pass is complete. Both final rechecks passed with no
open blocker.

## Frozen candidates

- Initial implementation: `9a4065c`
- Repaired runtime source: `d8a04a2`
- Repaired candidate with corrected reasoning test: `16957e2`
- Repaired candidate tree:
  `7d9e5951a95cd29bd233cd063896b21385de4a50`
- Repaired verification: 58 focused tests, 116 full tests, clean scoped lint,
  compatible packages, and clean diff

## Review 1: Protocol and capability boundary

- Reviewer: independent protocol reviewer
- Initial verdict: repair required
- Finding 1, high: call IDs could be reused on later model steps or user turns
- Finding 2, medium: a second terminal response was yielded before the layer
  raised a protocol error
- Accepted repairs: global saved-conversation call-ID check and pre-yield
  duplicate-terminal rejection
- First recheck: passed on `d8a04a2`; both findings closed and no new
  protocol blocker
- Final candidate acknowledgement: passed; `16957e2` changes no runtime source
  and introduces no protocol blocker

## Review 2: Tests, privacy, and scope

- Reviewer: independent evidence reviewer
- Initial verdict: changes requested
- Finding 1, blocker: results and rubric evidence were still pending
- Finding 2, medium: direct timeout, connection, usage, and ephemeral-reasoning
  tests were missing from the replacement DeepSeek suite
- Accepted repairs: complete evidence records and restore all four test areas
- Initial independent checks: 52 focused tests, 110 full tests, clean lint,
  compatible packages, clean diff, no old imports, no library changes, and no
  credential or private-source leak
- First recheck: changes still required because the reasoning-only stub chunk
  was dropped before the provider branch ran
- Correction: `16957e2` makes the stub emit that chunk and asserts both the
  ephemeral delta and its absence from the final response
- Final recheck: passed; the reasoning branch emits one ephemeral delta and
  the authoritative response excludes its text

## Repair-pass failures

One repair test initially missed imports for `ModelProtocolError` and
`ModelStreamEvent`. That test run failed before exercising the repaired
branch. The imports were added and the complete command floor passed.

No runtime finding was silently retried or removed from this ledger.

## Final rechecks

### Protocol reviewer

- Candidate: `16957e2`
- Direct repair regression: 1 passed
- Verdict: pass
- Open blockers: none

### Evidence reviewer

- Candidate: `16957e2`
- Corrected provider suite: 11 passed
- Verdict: pass
- Open blockers: none

Plan 003 now returns to the owner decision gate. Passing code and reviews do
not accept the experiment automatically.
