# Acceptance Rubric: Durable conversation architecture

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Pass | Confirmation record dated 2026-07-30 |
| Three owner corrections recorded | Pass | Learning note and decision |
| Research residue removed safely | Pass | Results scan and cleanup commit |
| Canonical architecture decision written | Pass | `docs/decisions/006-conversation-architecture.md` |
| Direct coordinator is first | Pass | Decision and both comparisons |
| LangGraph remains optional | Pass | Decision and older comparison |
| Canonical SQLite ownership is clear | Pass | Decision storage rules |
| Retry/continue do not replay silently | Pass | Decision recovery traces |
| Every owner message survives | Pass | Steering and FIFO traces |
| Risk-based memory controls exist | Pass | Decision memory table |
| Wiki is private and rebuildable | Pass | Decision projection boundary |
| Plan 007 restart proof is clear | Pass | Unadmitted restart-safe draft |
| No source/runtime dependency change | Pending | Final Git scope audit |
| Diagram source and preview agree | Pass | Validation + visual inspection |
| Two reviews have no blocker | Pass | Review ledger |
| Full verification floor passes | Pass | Results |
| Owner records final decision | Pending | `decision.md` |
