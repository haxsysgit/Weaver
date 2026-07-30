# Acceptance Rubric: Cancellation and side effects

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Passed | Confirmed 2026-07-30 |
| Plan 003 accepted | Passed | Plan 003 decision |
| Read is the normal-session effect | Passed | Policy tests |
| Maintenance admits reads and Weaver-owned writes | Passed | Policy tests |
| Outside effects stay blocked | Passed | Constructor and dispatch tests |
| Every tool states its effect | Passed | Required constructor field |
| Ordered dispatch gates stay exact | Passed | Priority and malformed-argument tests |
| Blocked handlers never start | Passed | `ToolResult.started` and start-count tests |
| Running cooperative handler receives cancellation | Passed | Event-driven registry and session tests |
| Handler cleanup settles before turn return | Passed | Cleanup ordering test |
| Completed handler wins a cancellation tie | Passed | Same-race completion test |
| Swallowed cancellation still settles as cancelled | Passed | Cancellation result test |
| Remaining batch calls receive linked results | Passed | Four-call cancellation test |
| No later handler or model request after cancellation | Passed | Four-call cancellation test |
| Real session, turn, and call IDs reach handlers | Passed | Session execution-context test |
| Cancelled, blocked, failed, and completed remain distinct | Passed | Turn result-evidence tests |
| No silent retry | Passed | Attempt-count test |
| Editable architecture and rendered preview exist | Passed | Diagram deliverables |
| Architecture validates and render is inspected | Passed | Diagram checks |
| Full deterministic floor passes | Passed | 142 tests and clean scoped lint |
| No private content or credentials leak | Passed | Candidate scans |
| Two reviews have no blocker | Passed | Both final rechecks passed |
| Owner records final decision | Pending | `decision.md` |
