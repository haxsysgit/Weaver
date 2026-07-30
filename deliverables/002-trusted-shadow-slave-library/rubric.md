# Acceptance Rubric: Trusted Shadow Slave Library

## Gate

Plan 002 was accepted by the owner on 2026-07-30. The original
complete-through-current requirement was amended so source availability does
not block acceptance of the deterministic library toolset.

| Requirement | State | Evidence |
| --- | --- | --- |
| Five typed async, agent-callable tools | Pass | Explicit Weaver registry and Pydantic schemas |
| Custom Weaver owns tool behavior | Pass | Service and registry are framework-neutral |
| LangGraph limited to a possible later conversation loop | Pass | No corpus rule depends on LangGraph |
| Fixed novel ID, URL, and filesystem derivation | Pass | One `ShadowSlaveSpec`; no arbitrary URL/path inputs |
| Firecrawl only; no Cloudflare bypass or silent fallback | Pass | One no-retry adapter |
| Deterministic HTML cleanup and validation | Pass | Synthetic extraction and normalization tests |
| Valid chapters immutable | Pass | Idempotency and concurrent-conflict tests |
| Proven-invalid replacement is atomic | Pass | 3047 live repair plus injected failure tests |
| URL list updated only after successful save | Pass | Fake-source and live evidence |
| Manifest and receipts contain metadata only | Pass | Receipt guards and tracked-file audit |
| Owner-only permissions | Pass | Final inspection reports zero overly public files |
| URL list structurally sound | Pass | 1–3128, no gaps, duplicates, malformed, or ordered errors |
| 3047 repaired by the tool | Pass | Old/new hashes and canonical placement recorded |
| Required reading packets built | Pass | Three private hash-pinned packets |
| Repeated update skips valid chapters | Pass | Second live updater touched only invalid 2843 |
| Deterministic test floor | Pass | 73 tests |
| Full library contiguous through current published chapter | Deferred by owner | 2843 unprovable; 3128 missing |
| Default updater stops at first genuine unpublished 404 | Deferred by owner | Stops first at invalid 2843 |
| Full TXT, Markdown, and EPUB editions | Deferred by owner | Safe validation refusal |
| Both V4 Pro code rechecks have no blocker | Pass | Same repaired candidate; privacy and tests rechecks clean |
| Owner records the final decision | Pass | Accepted 2026-07-30 in `decision.md` |

## Review rule

The reviewers assessed the same frozen public candidate. If they find an
implementation blocker, Plan 002 permits one accepted repair pass and requires
both reviewers to recheck the repaired candidate. Live-source blockers remain
owner decisions and are not waived by a code-review pass.
