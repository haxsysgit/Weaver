# Acceptance Rubric: Restart-safe conversation proof

| Requirement | State | Evidence |
| --- | --- | --- |
| Plan 006 finally accepted | Pass | `deliverables/006-durable-conversation-architecture/decision.md` |
| Owner confirmed Plan 007 learning | Pending | Owner gate |
| Empty-state migration works | Pass | `tests/test_conversation.py:test_migration_idempotent` |
| Exact items survive subprocess restart | Pass | `tests/test_conversation.py:test_subprocess_restart` + `_runner.py:_process_b` assertions |
| Interrupted work is visible | Pass | `session.py:find_interrupted_runs` + `repository.py:find_interrupted_run` |
| Continue does not replay settled tool result | Pass | `_runner.py:112-114`: `assert len(tool_calls) == 1` |
| Retry excludes failed-attempt output | Not built | Retry deferred beyond first proof; `RunCoordinator` has building blocks |
| No duplicate item IDs | Pass | `_runner.py:125-126`: `assert len(item_ids) == len(set(item_ids))` |
| Direct coordinator owns the proof | Pass | Zero LangGraph imports; `RunCoordinator` calls aiosqlite directly |
| No live model or private-library access | Pass | `_runner.py` uses hardcoded fake model behavior; no `novels/` references |
| Owner-only permissions pass | Pass | `test_conversation.py:33-34`: directory `0o700`; `session.py:55`: file `0o600` |
| Diagram source and preview agree | Not applicable | Plan 007 has no diagram |
| Two reviews have no blocker | See ledger | Review 1 (Plan 006), Review 2 (Plan 007) below |
| Owner records final decision | Pending | `decision.md` |
