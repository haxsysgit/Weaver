# Results: TUI entrypoint

## Status

Implemented 2026-07-31 (Slices 1-4); one repair pass applied after two
clean reviews (both rechecks PASS). Awaiting owner decision.

## Executed commands

- `uv add "textual>=2.0.0"` → `textual==8.2.8` added; `uv.lock` updated;
  import verified on Python 3.11 (`from weaver.tui import WeaverChat`).
- `uv run python -c "from weaver.tui import WeaverChat; print('import ok')"`
  → `import ok`.
- `uv run weaver chat --help` → help shows `chat` and `--fake`; no `corpus`
  wording.
- `uv run pytest -q tests/test_tui.py tests/test_conversation.py -k "tui or
  send"` → 11 passed.
- `uv run pytest -q` → **185 passed** (178 baseline + 7 new).
- `uv run ruff check src/weaver tests` → clean (one F401 in test_tui.py
  auto-fixed by `ruff check --fix`).
- `uv pip check` → all 73 packages compatible.

## Implemented

- `src/weaver/tui/app.py` + `__init__.py`: `WeaverChat(App)` with Header
  (mode label in `sub_title`), RichLog (markup, wrap, escaped user text),
  Input, Footer. `BINDINGS` rebinds `ctrl+c` → `action_cancel_turn`
  (overrides Textual's base `ctrl+c -> help_quit`; `ctrl+q` quit stays as
  the base priority binding). `on_input_submitted` calls
  `sw.send(conv_id, text, cancel_event=...)` with a submit guard against
  concurrent turns; exit reasons render as `(interrupted)` /
  `(reason: safe_failure)`.
- `src/weaver/cli.py`: `chat` subcommand (argparse style); live default
  (`DeepSeekProvider` + `deepseek-v4-flash`); `--fake` opts into
  (`FakeModelProvider` + scripted friendly STOP response); live without
  `DEEPSEEK_KEY` exits 2 before any call or receipt, verified no
  state dir is created; `_chat_state_dir()` = `$WEAVER_STATE_DIR` or
  `.weaver/state`; `_chat_tool_registry()` = echo (READ) + the three
  chat-safe library tools via `register_chat_tools`; policy
  `maintenance()`; `_build_chat_session`/`_run_chat` split keeps the whole
  session+app on one event loop (`await app.run_async()`, then
  `await sw.close()`).
- `src/weaver/conversation/session.py`: `send()` gains optional
  `cancel_event: asyncio.Event | None = None` — the Plan 010 seam (learning
  draft anticipated it); `None` is byte-identical to Plan 008/009.
- `src/weaver/corpus/tools.py`: `register_chat_tools` registers only
  inspect/build/export with Weaver-worded descriptions and truthful
  INTERNAL_WRITE effect kinds; fetch/update are never registered.
- `tests/test_tui.py` (7 tests): import check; fake session never
  constructs `DeepSeekProvider`; registry set assertion (fetch/update
  absent); `chat --help` exit 0 without `corpus`; default chat without key
  exits 2 and creates no state dir; full send turn (3 items persisted:
  start owner, "Hello" owner, assistant final); deterministic mid-turn
  cancel (gated fake provider, `cancel_event` set while blocked, settles
  INTERRUPTED, interrupted run recorded).

## Design corrections (owner-authorized, recorded in learning.md)

1. `send(cancel_event=...)` seam — the plan's learning draft anticipated a
   `SessionWeave.cancel()`; a kwarg is the minimal version. Only
   `conversation/` change.
2. `maintenance()` policy instead of `read_only()`: Contract §2's own tool
   list (inspect/build/export) is classified `INTERNAL_WRITE`
   (`corpus/tools.py:194-201`); read_only would register tools that can
   never execute. fetch/update stay out of the registry entirely — not
   registered is stronger than policy-blocked.
3. `register_chat_tools` lives in `corpus/tools.py` (one home for tool
   registration) and uses Weaver-language descriptions (no "corpus" word,
   Contract §1).

## Owner-directed correction (2026-07-31): live is the default

Owner asked why chat is fake by default, directed live-first, and asked to
verify the model id against the DeepSeek API docs. Changes in commit
`d5fd8b7`:

- `weaver chat` now runs **live DeepSeek by default**; fake is opt-in via
  `--fake` (flag inverted from `--live`).
- No key + no flag: exits 2 before any call or receipt, message says set
  `DEEPSEEK_KEY` or pass `--fake`. No state dir created.
- Model id verified against https://api-docs.deepseek.com/: `deepseek-v4-flash`
  is a real current model (docs: updated to DeepSeek-V4-Flash-0731, call
  method unchanged) — the code already used the correct id, no change needed.
- Fake-mode reply text updated (no stale `--live` mention). Tests updated:
  default-no-key exits 2; help shows `--fake`.
- Full suite 185 passed, ruff clean, `uv pip check` clean.

## Owner-directed correction 2 (2026-07-31): startup config (commit a4267ea)

Owner asked for `.env` support (his key lives there) and a private `.weaver`
config file loaded at startup.

- `.env` (cwd) parsed without a dependency; `.weaver/config.toml` via stdlib
  `tomllib`. Precedence: real env > `.env` > config file; values injected
  into `os.environ` (DEEPSEEK_KEY, WEAVER_CHAT_MODEL) so existing readers
  keep working.
- Config schema: `[api] key` (DeepSeek key), `[chat] model` (alias `flash`/
  `pro` or full id, default `deepseek-v4-flash`; validated, unknown ids
  rejected with a clear error).
- No-key default chat still exits 2 before any call, receipt, or state dir;
  message now suggests `--fake` or the config file.
- Old test pinning ".env must NOT be loaded" rewritten to the new contract:
  tests run in clean tmp cwds; precedence is covered in tests/test_config.py.
- `.weaver/config.toml` template created locally (gitignored; the key stays
  in `.env` for now, config is the documented fallback).
- Verified live: `uv run weaver chat` from the repo root loads `.env` and
  opens the real Textual TUI in live mode (no message sent, no API call).
- 9 new tests; full suite 194 passed; ruff clean.
- Recorded failure: `monkeypatch.delenv(key)` in teardown records a restore
  for a polluted value, so undo re-applied it to later tests (fake provider
  saw WEAVER_CHAT_MODEL=deepseek-v4-pro and reported model_failed). Fixed
  with direct `os.environ.pop` in teardown; documented in test_config.py.

## Phase A: pi-shaped screen (2026-07-31)

Owner directed: stay in plan 10 for a while, study pi's TUI, mirror its
look little by little, separate concerns. TUI stays; web UI deferred with
explicit triggers recorded in the plan.

Shipped (new files src/weaver/tui/widgets.py, tests/test_tui_widgets.py;
app.py and cli.py edits):

- No Header (pi has no top chrome); one-line StatusBar under the input:
  spinner or dot + mode + `^c cancel · ^q quit`.
- Welcome line, pi-minimal, cleared by the first submit.
- Busy spinner (braille frames, 10fps) while a turn runs.
- Ctrl+C is now a priority binding: it beats the focused Input's copy
  binding (verified from source: Input binds ctrl+c -> copy). With a turn
  in flight it cancels; idle it clears the input (pi's app.clear). Copy
  stays available via the terminal's own ctrl+shift+c.
- Exit prints `session saved: <id> -> <state dir>/weaver.sqlite3` (resume flag is Phase C).
- Pi chat-screen anatomy and the mappings recorded in pi-tui-deep-dive.md.

Recorded failures (test authoring): pilot.press() waits for screen idle,
so gated sends must be driven via Input.action_submit() + sleeps; Textual
pumps messages sequentially, so the still-thinking guard can't be hit via
queued submits and is tested by driving the handler directly; Static
content lives in `status.content`, not `renderable`; Input.action_submit
is async and must be awaited.

9 new tests (3 pure, 6 pilot with a stub session, no DB/model layer);
full suite 203 passed; ruff clean.

## Phase B: streaming deltas (2026-07-31, commit d135ac6)

- The provider and ModelLayer already streamed TEXT_DELTA events; the
  turn loop was buffering them. Seam: run_turn gains on_delta (async
  callback), threaded through SessionWeave.send. Deltas are preview only;
  the final assistant message persists exactly as before. A failing delta
  callback is logged and swallowed so a UI hiccup can't fail a turn.
- TUI: a hidden Static stream area appears while the model streams and
  hides when the final message lands in the log.
- 3 new tests: a chunked gated provider proves deltas arrive mid-turn
  before completion; the default send still buffers; a pilot test proves
  live rendering then final-in-log. Suite 206 green.

## Phase D: observability (2026-07-31, commit 0ec98fb)

- Context meter: ContextAssembler gains count-only mode (token_budget
  None = no truncation, still counts); the runner always assembles and
  surfaces snapshot numbers on TurnResult (token_count/token_budget, 0
  defaults preserve all existing behavior); the footer shows `ctx 1.2k`
  or `ctx 40%` after each turn.
- Run history: SessionWeave.list_recent_turns() returns recent runs
  (time, status, owner text) through the session seam; ^h pushes a
  RunHistoryScreen, escape/q closes.
- Recorded failure (real root cause found by bisection): the meter
  attribute was named `_context`, which shadows Textual's
  MessagePump._context() method; the pump crashed with
  "str object is not callable", the screen never went idle, and
  pilot.pause() timed out at 30s. Renamed to `_meter`; noted in the
  widget docstring so it cannot regress silently.
- Recorded failure: the stub session's gate reverted to the pre-fix form
  during a git stash/pop cycle, making the gated pilot tests pass without
  gating; re-fixed and the committed version is now the reference.
- Receipts peek deliberately skipped: chat turns persist to the SQLite
  notebook, not to .weaver/runs receipts (those cover experiments); a
  dashboard plan can read both later.
- 8 new tests; suite 214 green; ruff clean.

## Repair pass (commit 2c0792b)

Both reviewers passed with no blockers; one repair pass applied:

- MINOR-1: `_build_chat_session` now closes the session if
  `start_conversation` raises after `open()` (no lingering aiosqlite worker
  on the failure path).
- NIT-1: `_show_result` `(cancelled)` branch was dead — interrupted turns
  always carry `safe_failure`. Now a real cancel (`turn_id` set) shows
  `(cancelled)`; a refused send (empty `turn_id`) shows the refusal message.
- Both rechecks: PASS, no blockers. 185 tests still green, ruff clean.

## Verification floor

- Focused: 11 passed (`-k "tui or send"`).
- Full: 185 passed (178 baseline + 7 new).
- Ruff: clean. `uv pip check`: compatible.
- Plan 010 in-scope files changed: `pyproject.toml`, `uv.lock`,
  `src/weaver/tui/`, `src/weaver/cli.py`, `src/weaver/corpus/tools.py`,
  `src/weaver/conversation/session.py`, `tests/test_tui.py`, plan +
  deliverables. No `agent/` or `model_layer/` changes.

## Recorded failures

- Test-authoring miscount: `test_tui_send_completed_turn_persists_items`
  first asserted `len(items) >= 4`; the scripted chat reply performs no
  tool calls, so the correct count is 3 (`owner, owner, assistant`).
  Corrected the assertion; the code was right.
- Ruff F401 (unused `Path` import) in the new test file — auto-fixed.
- `shadow_friend.md` was found truncated to one line in the working tree
  (225 lines removed, unrelated to this plan); restored from HEAD, left
  out of the plan 010 commits.
