# Acceptance Rubric: Provider-neutral tool payload contract

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Passed | `learning.md`, 2026-07-30 |
| Plan 004 accepted | Passed | Plan 004 decision |
| Shared Weaver model types stay unchanged | Passed | Plan 005 commits and focused diff |
| Thinking disabled on both requests | Passed | Real SDK payload assertions |
| Test uses the real SDK HTTP path | Passed | `AsyncOpenAI` 2.49 with `MockTransport` |
| Two outgoing request bodies captured per model | Passed | Parameterized SDK contract test |
| Tool call and result IDs match | Passed | Exact second-request payload assertions |
| Raw argument text survives unchanged | Passed | Split delta and second-request assertions |
| Split streaming tool deltas parse | Passed | Standards-shaped SSE fixture |
| Partial and malformed contracts fail safely | Passed | Negative runner tests |
| Flash and Pro run in stable order | Passed | Runner and receipt tests |
| Default suite makes no network call | Passed | Mock transport and fake-provider tests |
| Fake experiment passes without credentials | Passed | Fake CLI run and private receipt |
| Live mode has no fallback | Passed | CLI dispatch and provider settings |
| Missing live key creates no client or receipt | Passed | CLI test and command evidence |
| One attempt per live model, four requests maximum | Passed | Admitted live receipt |
| Both live models pass | Passed | Flash and Pro live records |
| Receipts are private and reasoning-free | Passed | Permissions and content audit |
| Draw.io source and preview are linked and inspected | Passed | README, XML validation, SVG render inspection |
| Two reviews have no blocker | Passed | Review ledger |
| Owner records final decision | Passed | `decision.md`, 2026-07-30 |
