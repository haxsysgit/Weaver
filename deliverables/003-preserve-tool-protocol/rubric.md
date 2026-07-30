# Acceptance Rubric: Preserve tool protocol

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Pending | Confirmation record |
| Plan 002 closed before execution | Pending | Plan 002 decision |
| Tool calls survive the next provider request | Not tested | Plan 003 tests |
| Multiple calls remain grouped | Not tested | Plan 003 tests |
| Tool-result IDs match calls | Not tested | Plan 003 tests |
| Inactive registered tools cannot run | Not tested | Handler-count test |
| Unknown and inactive errors stay separate | Not tested | Registry tests |
| Empty success remains success | Not tested | Regression test |
| Partial or length-limited calls do not run | Not tested | Finish-reason tests |
| Full deterministic floor passes | Not run | Results |
| No private content or credentials leak | Not checked | Tracked-file scan |
| Two reviews have no blocker | Not started | Review ledger |
| Owner records final decision | Pending | `decision.md` |
