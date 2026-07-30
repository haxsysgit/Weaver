# Results: Restart-safe conversation proof

## Subprocess restart

4 tests pass (`tests/test_conversation.py`):
- `test_subprocess_restart`: Process A settles tool, marks interrupted; Process B
  continues with exactly one tool_call and one tool_result across all runs.
- `test_delete_workflows_db_safe`: `workflows.sqlite3` is harmless to delete.
- `test_migration_idempotent`: Opening twice applies migration once.
- `test_empty_state_no_interrupted`: Fresh state has no interrupted runs.

160 total tests pass (was 156 before Plan 007), lint clean, 66 packages compatible.
Dependency added: `aiosqlite==0.22.1`.

## Independent reviews

Two fresh-context reviews:

**Review 1 (Plan 006 documentation):** No blockers. Found one medium bug
(`_update_turn_status` dead code) — fixed. Found `architecture.svg` reference
in README (only `.png` exists) — cosmetic.

**Review 2 (Plan 007 implementation):** Found `_update_turn_status` dead code
(blocker — fixed). Found learning.md spec drift from actual code (5 design
divergences) — reconciled. Found stale rubric/results/review-ledger — updated.

All corrections applied in this commit.

## Repair pass

| Finding | Fix |
|---|---|
| `_update_turn_status` references non-existent `turn.status` column | Removed dead method from `repository.py` |
| `UNIQUE(id, run_id)` in learning.md but absent from schema | Removed from learning.md; `id PRIMARY KEY` alone is sufficient |
| `tool_call_id` doubles as PK claim in learning.md | Rewritten: separate UUIDs, `tool_call_id` in body JSON |
| Dead phases/events in learning.md | Removed `assembling`, `tool_call_pending`, `run_started`, `run_interrupted`, `item_settled` |
| `turn.status` column claim | Removed; no status column, completion inferred from run phase |
| DB file permission test claim | Clarified: directory tested, file deferred |
| Repository method names in Q9 | Updated to match actual code |
| Stale rubric/results/review-ledger | Updated to reflect implementation reality |

## Verification floor

```text
$ uv run pytest -q
160 passed

$ uv run ruff check src/weaver tests
All checks passed!

$ uv lock --check
Resolution exists in uv.lock
```
