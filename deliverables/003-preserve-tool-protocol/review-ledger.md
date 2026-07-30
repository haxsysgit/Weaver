# Review Ledger: Weaver model layer and preserved tool protocol

## Status

The one accepted repair pass is complete. Both reviewer rechecks are pending.

## Frozen candidates

- Initial implementation: `9a4065c`
- Repaired runtime: `d8a04a2`
- Repaired tree:
  `5d5944b6afa196d2cbe9a8d4c0a118f0ee25c0f5`
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
- Recheck: pending

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
- Recheck: pending

## Repair-pass failures

One repair test initially missed imports for `ModelProtocolError` and
`ModelStreamEvent`. That test run failed before exercising the repaired
branch. The imports were added and the complete command floor passed.

No runtime finding was silently retried or removed from this ledger.

## Final rechecks

Pending. Both reviewers must inspect `d8a04a2` and the recorded evidence before
Plan 003 can return to the owner decision gate.
