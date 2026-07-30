# Acceptance Rubric: Weaver model layer and preserved tool protocol

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Passed | Confirmed 2026-07-30 |
| Plan 002 closed before execution | Passed | Plan 002 owner decision |
| Exact provider and model lookup | Passed | Model-layer tests |
| Agent has no provider knowledge | Passed | Shared-core search |
| One final response is authoritative | Passed after repair | Duplicate-terminal test |
| Tool calls survive the next request | Passed | Agent protocol tests |
| Later replay preserves the exchange | Passed | Session replay test |
| Multiple calls remain grouped | Passed | Grouping and projection tests |
| Call IDs stay unique across history | Passed after repair | Cross-step and history tests |
| Tool-result IDs match calls | Passed | Second-request assertions |
| Inactive registered tools cannot run | Passed | Zero-start dispatch test |
| Unknown and inactive stay separate | Passed | Ordered dispatch tests |
| Blank and malformed JSON is rejected | Passed | Dispatch and protocol tests |
| Non-object JSON is rejected | Passed | Dispatch and protocol tests |
| Empty success remains success | Passed | `{}` regression test |
| All five stop reasons are safe | Passed | Provider and turn tests |
| Fake mode avoids live construction | Passed | CLI regression test |
| Receipts stay private and safe | Passed | Receipt regression tests |
| Full deterministic floor passes | Passed | 116 tests and clean lint |
| No private content or credentials leak | Passed | Candidate scans |
| Two reviews have no blocker | Recheck pending | Review ledger |
| Owner records final decision | Pending | `decision.md` |
