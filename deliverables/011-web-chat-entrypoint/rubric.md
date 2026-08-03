# Acceptance Rubric: Local browser chat entrypoint

| Requirement | State | Evidence |
| --- | --- | --- |
| Plan 010 accepted and closed | Passed | Plan 010 decision record |
| Checkpoint 001 to 010 complete | Passed | `docs/process/checkpoint-001-010.md` |
| Repeatable private ChatGPT appraisal completed | Passed | `learning.md`, private capture path |
| Observation and adopt/defer/reject tables completed | Passed | `analysis.md` |
| Owner accepts appraisal behaviour decisions | Passed | `decision.md`, 2026-08-02 and boundary clarification 2026-08-03 |
| Shared developer and web runtime profiles proven | Passed | `tests/test_chat_runtime.py` |
| Missing credentials open no state and bind no socket | Passed | `tests/test_web_server.py` |
| Delta arrives before completion | Passed | `test_turn_streams_delta_before_completed` |
| Cancellation, disconnect, and shutdown settle without model `task.cancel()` | Passed | lifecycle tests and real disconnect proof |
| Reload returns the canonical transcript without duplicates | Passed | ephemeral Uvicorn proof in `results.md` |
| Invalid input, unknown IDs, idle cancel, and concurrent turns match contract | Passed | `tests/test_web.py` |
| Private canaries never reach public surfaces | Passed | `test_private_protocol_canaries_never_reach_web_surfaces` and scans |
| Ephemeral Uvicorn HTTP and SSE flow passes | Passed | integration proof in `results.md` |
| Desktop and phone widths remain usable | Passed | inspected 1440 x 900 and 390 x 844 evidence |
| Editable and rendered architecture and state-map diagrams are inspected | Passed | four diagram files and review ledger |
| Full command floor and dependency audit pass | Passed | `results.md`, 2026-08-03 repair recheck |
| Two independent reviews have no blocker | Passed | `review-ledger.md` |
| Owner records the final decision | Passed | `decision.md`, 2026-08-03 |
