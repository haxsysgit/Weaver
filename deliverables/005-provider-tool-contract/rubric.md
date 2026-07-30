# Acceptance Rubric: Provider-neutral tool payload contract

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Passed | `learning.md`, 2026-07-30 |
| Plan 004 accepted | Passed | Plan 004 decision |
| Shared Weaver model types stay unchanged | Not checked | Diff and provider review |
| Thinking disabled on both requests | Not tested | SDK payload assertions |
| Test uses the real SDK HTTP path | Not tested | Contract test |
| Two outgoing request bodies captured per model | Not tested | Contract test |
| Tool call and result IDs match | Not tested | Payload assertions |
| Raw argument text survives unchanged | Not tested | Payload assertions |
| Split streaming tool deltas parse | Not tested | SSE fixture |
| Partial and malformed contracts fail safely | Not tested | Negative tests |
| Flash and Pro run in stable order | Not tested | Runner and receipt tests |
| Default suite makes no network call | Not checked | Test setup |
| Fake experiment passes without credentials | Not run | Results |
| Live mode has no fallback | Not checked | CLI tests |
| Missing live key creates no client or receipt | Not tested | CLI test |
| One attempt per live model, four requests maximum | Not run | Live results |
| Both live models pass | Not run | Live results |
| Receipts are private and reasoning-free | Not checked | Receipt audit |
| Draw.io source and preview are linked and inspected | Not started | README and diagram evidence |
| Two reviews have no blocker | Not started | Review ledger |
| Owner records final decision | Pending | `decision.md` |
