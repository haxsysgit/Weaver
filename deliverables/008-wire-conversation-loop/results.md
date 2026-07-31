# Results: Wire the conversation loop

## Status

Implemented 2026-07-31 (Slices 0-4). Pending independent review and owner decision.

## Implementation observations

- **Slice 0 (transaction repair):** all eight coordinator write paths now
  route through the rollback-safe `_tx()` helper (BEGIN IMMEDIATE, commit on
  success, rollback on any exception). `PRAGMA busy_timeout=5000` added.
  Regression test `test_duplicate_tool_result_leaves_session_usable` proves
  a rejected duplicate settle leaves the same session usable. BEGIN IMMEDIATE
  adopted from the Hermes write-contention study (`.firecrawl/hermes-session-storage.md`).
- **Slice 1 (learning gate):** answers re-verified line-by-line; corrections
  recorded in learning.md (async seam, full exit mapping, carve-out, line refs).
- **Slice 2 (runner):** `ConversationRunner` with pinned mapping table
  (`_items_to_messages`/`_message_to_item`), async `_persist_callback` (one
  `ItemRecord` per transaction), and `run_turn_in_run`. Persist seam in
  `agent/turn.py:38,71-84` converted sync→async (the only agent/ change).
- **Slice 3 (send):** `SessionWeave.send()` computes turn sequence, rejects
  interrupted runs with `INTERRUPTED_RUN_EXISTS` (no auto-continue), and
  runs the turn; subprocess-only path unchanged when no model/tool kwargs.
- **Slice 4 (e2e):** `test_send_fake_turn` (real ToolRegistry dispatch,
  exactly 6 items after first send: start owner + owner, assistant,
  tool_call, tool_result, assistant final; single finalization),
  `test_send_restart_projection` (fresh weave replays history, exactly one
  tool role, no re-call, no duplicate projection), and
  `test_send_interrupted_run_no_auto_continue`.

## Failures

- Blanket text replace during Slice 0 corrupted the `_tx` helper itself
  (recursive call + dropped commit); caught by inspection, fixed, and the
  helper is now exercised by every coordinator test. Recorded as evidence;
  no silent retry.
- Three test-authoring failures (miscounted item lists: 5 vs 6, 7 vs 8
  items; run-id assertion; stale user-message index) — each fixed by
  asserting against observed DB truth. The final expectations were verified
  with a live repro script before the suite went green.

## Verification floor (2026-07-31)

- `uv run pytest -q tests/test_conversation.py tests/test_agent_turn.py` — 54 passed
- `uv run pytest -q` — 170 passed (166 baseline + 4 new)
- `uv run ruff check src/weaver tests` — clean
- `uv pip check` — compatible
