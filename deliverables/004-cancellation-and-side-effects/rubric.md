# Acceptance Rubric: Cancellation and side effects

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Pending | Confirmation record |
| Plan 003 accepted | Pending | Plan 003 decision |
| Read is the default allowed effect | Not tested | Policy tests |
| Internal and external effects default to blocked | Not tested | Policy tests |
| Blocked handlers never start | Not tested | Start-count tests |
| Running cooperative handler receives cancellation | Not tested | Event-driven test |
| Handler cleanup settles before turn return | Not tested | Ordering test |
| Cancelled, failed, and complete remain distinct | Not tested | Result tests |
| No silent retry | Not tested | Attempt-count test |
| Full deterministic floor passes | Not run | Results |
| Two reviews have no blocker | Not started | Review ledger |
| Owner records final decision | Pending | `decision.md` |
