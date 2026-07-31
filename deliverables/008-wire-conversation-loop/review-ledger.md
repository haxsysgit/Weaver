# Review Ledger: Wire the conversation loop

## Status

Review 1 and Review 2 completed; one repair pass applied; both rechecks pass.

## Review 1: Adapter, transactions, and phase lifecycle

- Reviewer: reviewer subagent (fresh context, review-only)
- Frozen candidate: implementation as of 2026-07-31 12:05
- Findings:
  - Scope 1 (mapping table): correct — lossless round-trip verified for all
    four kinds; tool_call items never folded into assistant tool_calls;
    exactly one tool role on replay.
  - Scope 2 (rollback): correct — all eight write paths via `_tx()`;
    duplicate-settle repro green; CancelledError/RuntimeError injection
    rolls back with session reusable.
  - Scope 3 (single finalization): correct — flag path skips the assistant
    insert, keeps run_completed + phase flip; only runner uses the flag.
  - Scope 4 (sequence invariants): correct — MAX+1 in tx, UNIQUE constraint,
    strictly increasing sequences; busy_timeout present.
  - **MINOR-1**: assistant tool_calls entries missing id/name/arguments (or
    non-dict) raised a bare KeyError/TypeError without the item id —
    violated contract §4. **Repaired** (runner.py assistant branch guard +
    `test_items_to_messages_assistant_tool_calls_guard`).
  - NIT: `session.py` assert in constructor; NIT: unexpected run_turn
    exception leaves phase `queued` (note for later plan).
- Verdict: pass-with-fixes (MINOR-1)

## Review 2: End-to-end test, cancellation, and scope

- Reviewer: reviewer subagent (fresh context, review-only)
- Frozen candidate: implementation as of 2026-07-31 12:05
- Findings:
  - Carve-out audit: pass — only `agent/turn.py` (12+/8-), every hunk inside
    the seam surface (Awaitable import, PersistCallback, `_persist`,
    five await call sites); `model_layer/` zero diff.
  - Persist seam: pass — swallow semantics preserved; no silent coroutine
    drop remains (await None fails loudly).
  - Interrupted-run policy: pass — `INTERRUPTED_RUN_EXISTS`, no auto-continue,
    explicit continue/retry intact.
  - busy_timeout / WAL: pass. Cancellation: pass — no task.cancel() on model
    calls; cancel_event cooperative-only.
  - NIT: Awaitable import beyond literal seam lines (required, behavior-neutral).
  - NIT: refused-send TurnResult carries `turn_id=""` (documented).
  - Note: `_persist` catches Exception not BaseException (latent only).
- Verdict: pass

## Repair and recheck

- Repair applied 2026-07-31 (one pass): runner.py assistant tool_calls guard
  (absent key = no tool calls; non-list / non-dict / missing keys raise
  ValueError with item id) + regression test covering all three corruption
  shapes. Full suite 170 → 171.
- Recheck 1: pass-with-fixes — repair correct; both flagged that `.gitignore`
  pattern `weaver/` (owner-session change) matched `src/weaver/` at any
  depth, making `git add` silently skip the new runner. **Fixed**: pattern
  anchored to `/weaver/`; `git check-ignore` confirms top-level private
  wiki still ignored and runner now visible. Stray `@pytest.mark.asyncio`
  on the sync guard test dropped.
- Recheck 2: pass — carve-out unchanged (mtime evidence), repair confined
  to runner.py + test, all scope features intact.
- Final gates: `uv run pytest -q` 171 passed, ruff clean, `uv pip check` clean.

## Open items for the owner

- Commit plan for Plan 008 (scope fence + `git add -f` no longer needed;
  anchored ignore keeps runner visible).
- `_runner.py` (subprocess proof driver) is now dead code — delete in a
  later plan, not 008 scope.
- R2 note: `_persist` catches Exception, not BaseException — revisit when a
  plan introduces cancellation of a running send.
