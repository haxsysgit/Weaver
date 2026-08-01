# Plan 010: TUI entrypoint

> **Executor instructions:** Execute only after Plan 009 is accepted. Read this
> plan, the accepted Plan 009 results, and every file in "Current state" before
> editing. Run each verification gate and record failures.

## Status

- **State:** Accepted 2026-07-31; **reopened by owner 2026-07-31 for UI
  sharpening** (stay-open directive: "keep it open, i'll probably be in plan
  10 for a while"). Original acceptance stands for the chat core; new UI
  phases amend this plan and get their own review before the owner gate.
- **UI sharpening phases (owner discussion 2026-07-31):** A quick wins
  (footer status bar, startup card, resume line, reply styling); B streaming
  deltas (model-layer seam, review like the persist carve-out); C capability
  (multi-line input, markdown replies, conversation resume, live context
  meter); D observability (token/context per turn, run history, receipts
  peek). TUI stays; web UI deferred with explicit triggers (remote access,
  dashboards, non-dev users, HaxJobs product stage).
- **Phase A status:** Accepted by owner 2026-07-31 (decision.md addendum);
  pushed. 9 new tests (pure helpers + Textual pilot with a stub session),
  203 green, ruff clean, two independent PASS reviews.
- **Phase B status:** Implemented (commit d135ac6): live text deltas flow
  from the provider stream through run_turn(on_delta=...) and
  SessionWeave.send(on_delta=...) into a hidden stream area that appears
  while the model works; deltas are preview only, the final message
  persists as before; callback failures are logged and swallowed. The
  agent/turn.py change is a documented seam like the persist carve-out.
- **Phase D status:** Implemented (commit 0ec98fb): context meter on the
  footer (count-only assembler mode, snapshot numbers surfaced on
  TurnResult, 'ctx 1.2k' / 'ctx 40%') and a run-history screen (^h) fed
  by SessionWeave.list_recent_turns(). Debugged root cause: StatusBar
  `_context` attribute shadowed MessagePump._context() and crashed the
  pump; renamed to `_meter`.
- **Phase C status:** Implemented (commit 2a8be00): multi-line TextArea
  input (enter submits, shift+enter newline via a ChatInput subclass that
  prevent_default()s the base enter handler), markdown rendering for
  replies, and conversation resume (^r picker of recent conversations,
  ^n starts a fresh one, SessionWeave.list_conversations).
- **Priority:** P2
- **Effort:** M
- **Risk:** Medium (new dependency, first UI surface, cooperative-only cancellation)
- **Depends on:** Plan 009 accepted
- **Category:** DX and entrypoint
- **Planned at:** commit `e523383`, 2026-07-30
- **Audited at:** 2026-07-31 — current-state claims corrected (argparse CLI,
  no `fire`, real tool signatures); cancellation contract pinned as
  cooperative-only after a live repro of sticky task cancellation
- **Learning gate:** `deliverables/010-tui-entrypoint/learning.md`
- **Final decision:** pending
- **Executor corrections (owner-authorized, 2026-07-31):** `SessionWeave.send()`
  gains an optional `cancel_event` kwarg (Contract §4 needs the TUI to set it;
  `None` preserves Plan 008/009 behavior); chat sessions use
  `ToolExecutionPolicy.maintenance()` because Contract §2's own tool list
  (inspect/build/export) is classified `INTERNAL_WRITE` in
  `corpus/tools.py:194-201` and `read_only()` would register tools that can
  never execute — fetch/update stay out of the registry entirely (stronger
  than policy-blocking); a new `register_chat_tools` in `corpus/tools.py`
  registers only the three safe tools with Weaver-language descriptions.

## Goal

Give the owner a working chat window to talk to Weaver during development.

After this plan, `weaver chat` opens a Textual TUI. The owner types a
message, presses Enter, and sees Weaver's response appear in a scrollable
conversation pane. Live DeepSeek mode is the default (owner-directed
correction, 2026-07-31: live is the default; fake is opt-in via `--fake`).
Fake-model mode works without credentials. Ctrl+C sets the turn's cancel
event instead of killing the app.

## Why this matters

Every plan so far proves a property via pytest. The owner cannot actually
talk to Weaver. A TUI is the cheapest conversation surface: same process,
same event loop, direct `await session.send()`, no HTTP bridge, no
serialization. It makes testing downstream work (corpus tools, literary
understanding) feel like a real conversation instead of an assertion.

The owner deferred TUI development to Plan 007 (`plans/007-restart-safe-conversation-proof.md:27`).
Plan 007 is complete. The TUI attachment point exists.

## Current state

### `src/weaver/cli.py:17-118` — Weaver CLI (corrected)

Argparse-based CLI (no `fire`; `fire` is **not** in `pyproject.toml` — the
earlier plan text was wrong). Subcommands: `doctor`, `experiment
<name> --fake|--live`, and `library` with `inspect|fetch|update|packet|export`.
No `chat` subcommand. The fake/live split is the canonical pattern
(`cli.py:146-165`): mutually exclusive required flags, missing key in live
mode exits 2 before any call or receipt, fake mode never constructs
`DeepSeekProvider` (asserted via `tests/test_cli.py:8-24`).

### `src/weaver/conversation/session.py` — SessionWeave (post-Plan 008)

Has `send(conversation_id, user_text) -> TurnResult`, optional model/tool
kwargs, `interrupted_run_exists` error for interrupted runs. State lives in
`state_dir/weaver.sqlite3` (0700 dir, 0600 db).

### `pyproject.toml:8-20` — dependencies

Includes `aiosqlite>=0.22.1`, `tiktoken`, `openai`, `pydantic`, etc.
Textual is **not** present — it must be added (`uv add textual`,
network operation, updates `uv.lock`).

### `src/weaver/config.py:1-20` — config

Reads `DEEPSEEK_KEY` from process environment only. Does **not** auto-load
`.env` (Plan 005 repair; tests assert a `.env` in cwd is ignored). Fake mode
works with no key.

### `src/weaver/model_layer/deepseek.py` — DeepSeek provider

Cancellation is cooperative via `cancel_event` (`deepseek.py:60-66,128-135`).
True task cancellation (`task.cancel()`, `asyncio.wait_for` timeouts) hits a
sticky-cancellation path where the ABORTED terminal and stream cleanup are
skipped (`deepseek.py:151-157`) — reproduced live. **The TUI must never rely
on task cancellation** (see Contract §4).

### `src/weaver/corpus/tools.py:149-201` — library tools

Five tools registered: `inspect_novel_corpus`, `fetch_novel_chapters`,
`update_novel_corpus`, `build_novel_packet`, `export_novel`. All five are
registered `INTERNAL_WRITE` (audit finding B2): fetch/update are
**network-backed** (Firecrawl) but classified internal. The chat tool set
must not expose them (Contract §2).

### Verified baseline (2026-07-31)

- `uv run pytest -q` → 166 passed; `uv run ruff check src/weaver tests` → clean.
- Textual: not installed. `uv add textual` is required before the TUI can import.

## Contract to prove

### 1. Weaver language

User-facing chat copy and tool names use Weaver words: `library`, `chapters`,
`reading packet`, `edition`, `inspect`, `add`, `refresh`. No `corpus` appears
in the TUI, the `chat` help text, or the system prompt. Internal
`_novel_corpus` tool names, where shown at all, are described as "Weaver's
private library".

### 2. Tool set for chat

The TUI registers only: the echo/dev tool used in tests and the library
**inspection** tools (`inspect_novel_corpus`, `build_novel_packet`,
`export_novel` — read or packet-building only). **`fetch_novel_chapters` and
`update_novel_corpus` are NOT registered** in the chat session: they are
network-backed and currently classified `INTERNAL_WRITE` without an
external-effect gate (audit finding B2). A future plan may re-classify them
as `EXTERNAL_EFFECT` and add an approval path before exposing them to chat.

The TUI itself never imports `novels/`, never calls `_require_novel`, and
never writes library files.

### 3. Mode selection (no silent fallback)

- Default: **live mode** — `DeepSeekProvider` + `deepseek-v4-flash`. `--fake`
  opts into `FakeModelProvider` with a scripted response set that produces a
  friendly non-streamed reply; fake mode must never construct
  `DeepSeekProvider` (reuse the `NetworkMustNotBeConstructed` test pattern).
- `weaver chat` (default, live): requires `DEEPSEEK_KEY`; absent → exit 2
  before any
  call or receipt (same as the experiment commands).
- The active mode is displayed in the TUI header (e.g. `Weaver — fake` /
  `Weaver — live deepseek-v4-flash`) so the owner is never unsure which mode
  is running.

### 4. Cancellation contract (cooperative-only)

- Ctrl+C is rebound from Textual's default (quit) to setting the turn's
  `cancel_event`.
- `cancel_event` is the **only** cancellation lever. The TUI must never
  `task.cancel()` the `send()` task: sticky asyncio cancellation can skip the
  ABORTED terminal and SDK stream cleanup (`deepseek.py:151-157`, reproduced),
  and Plan 008's runner treats a cancelled turn as interrupted, not
  completed.
- `run_turn()`'s cooperative checkpoints
  (`tools.py` `raise_if_cancelled`, `deepseek.py:128-135`) are what stop the
  work; the TUI may show "cancelling…" until the turn settles.

### 5. Blocking model call

`run_turn()` returns the full response; there is no streaming API on
`SessionWeave`. The TUI blocks during `send()` (5-30s live). Acceptable for
this slice; the input stays enabled so typing is not lost, and the model
reply is written when the turn returns.

### 6. Event loop

Textual's `app.run_async()` shares the process event loop with
`SessionWeave`; `on_input_submitted` awaits `sw.send(...)` directly. No
threads, no `asyncio.run()` inside the app, no background tasks beyond
Textual's own.

### 7. State path

The conversation state dir defaults to `$WEAVER_STATE_DIR` (the existing
env convention used by corpus tools and receipts) with a `.weaver/state`
fallback; it is never hardcoded into the TUI module.

## Scope

### In scope

- `pyproject.toml` + `uv.lock` (add `textual>=2.0.0`)
- `src/weaver/tui/` (new: `__init__.py`, `app.py`)
- `src/weaver/cli.py` (`chat` subcommand, argparse style)
- `src/weaver/config.py` only if the mode-selection helper needs a tiny
  shared function (prefer reusing existing `resolve_model`/env checks)
- `tests/` (TUI code-path test; CLI test for `chat --help` and mode flags)
- Plan 010 deliverables and `plans/README.md`

### Out of scope

- `agent/`, `conversation/` internals, `model_layer/`
- streaming text display, markdown rendering, scroll-to-bottom
- multi-conversation TUI, message editing, history browsing
- exposing fetch/update corpus tools to chat (see Contract §2)
- live-provider changes, `.env` loading

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Add dependency | `uv add textual` | `textual>=2.0.0` in pyproject + uv.lock |
| Import check | `uv run python -c "from weaver.tui import WeaverChat; print('import ok')"` | `import ok` |
| CLI check | `uv run weaver chat --help` | Help text shows `chat`; no `corpus` wording |
| Focused tests | `uv run pytest -q tests/test_tui.py tests/test_conversation.py -k "tui or send"` | All pass |
| Full tests | `uv run pytest -q` | All pass (178 baseline; 185 expected) |
| Lint in scope | `uv run ruff check src/weaver/tui src/weaver/cli.py tests` | Exit 0 |
| Package check | `uv pip check` | Compatible |

## Steps

### Slice 1: Confirm the learning gate

Answer three questions in `deliverables/010-tui-entrypoint/learning.md`:

1. Textual integration: how does an async Textual app share the event loop
   with SessionWeave, and where does Ctrl+C set the cancel event (Contract
   §4, §6)?
2. Streaming: `run_turn()` returns the full response at once — how should the
   TUI handle 5-30 second model waits (Contract §5)?
3. Mode selection: how does the CLI decide between fake and live modes based
   on credentials, and how is the active mode shown (Contract §3)?

The drafted answers (2026-07-30) contain stale claims (`fire`-based CLI) —
**re-verify every cited line** against the current argparse CLI at admission.

Commit: `plan 010: learning gate answers`

### Slice 2: Add Textual dependency

`uv add textual`, verify the lockfile change and that Textual imports on
Python 3.11.

**Verify:** `uv run python -c "import textual; print(textual.__version__)"`.

### Slice 3: Build the TUI

Create `src/weaver/tui/__init__.py` and `app.py`:

```python
# src/weaver/tui/app.py
from textual.app import App, ComposeResult
from textual.widgets import Header, Footer, Input, RichLog

class WeaverChat(App):
    def __init__(self, session_weave, conversation_id, mode_label="fake", **kwargs):
        super().__init__(**kwargs)
        self._sw = session_weave
        self._conv_id = conversation_id
        self._mode_label = mode_label

    def compose(self) -> ComposeResult:
        yield Header(show_clock=True)
        yield RichLog(id="chat-log", highlight=True, markup=True)
        yield Input(id="input", placeholder="Type a message...")
        yield Footer()

    def on_mount(self) -> None:
        self.sub_title = f"Weaver — {self._mode_label}"

    async def on_input_submitted(self, event: Input.Submitted) -> None:
        text = event.value.strip()
        if not text:
            return
        log = self.query_one("#chat-log", RichLog)
        log.write(f"[bold]You:[/bold] {text}")
        result = await self._sw.send(self._conv_id, text)
        if result.final_text:
            log.write(f"[bold]Weaver:[/bold] {result.final_text}")
        event.input.clear()

    def on_key(self, event) -> None:
        if event.key == "ctrl+c":
            # cooperative cancel: set the turn's cancel_event, never task.cancel()
            ...
```

Keep it minimal: one file, one class, three widgets, no streaming, no
markdown. The Ctrl+C binding must follow Contract §4 (set the event; the
turn settles through the runner's interrupt path).

Commit: `plan 010: build minimal Textual TUI`

### Slice 4: Add `weaver chat` CLI

Add a `chat` subcommand to `src/weaver/cli.py` in argparse style, mirroring
the existing `--fake|--live` pattern:

- default live; `--fake` opts into scripted mode; live requires
  `DEEPSEEK_KEY` (exit 2 if absent, message suggests `--fake`);
- state dir from `WEAVER_STATE_DIR` (fallback `.weaver/state`);
- register echo + library inspection tools only (Contract §2);
- `ToolExecutionPolicy.maintenance()` (READ + INTERNAL_WRITE) for both modes
  — corrected from `read_only()`: the registered library tools are
  classified INTERNAL_WRITE and must be executable; fetch/update are simply
  not registered, which is the actual safety boundary;
- mode label passed to the app (Contract §3).

Commit: `plan 010: add weaver chat CLI`

### Slice 5: Deterministic TUI test

Add `test_tui_send` to `tests/test_conversation.py` (or a new
`tests/test_tui.py`):

- Create a `SessionWeave` with fake model, echo tool, and read-only policy.
- Call `sw.send(conv_id, "Hello")`.
- Assert completed turn with non-empty `final_text`; assert items in the DB.
- Assert fake mode never constructs `DeepSeekProvider`
  (`NetworkMustNotBeConstructed` pattern).
- Assert the chat tool registry does not contain fetch/update tools.
- Assert `weaver chat --help` exits 0 and contains no `corpus` wording.

This tests the same code path the TUI uses without requiring a terminal.

Commit: `plan 010: TUI code-path test`

## Test plan

1. Import check (no terminal): `from weaver.tui import WeaverChat` succeeds
   after `uv add textual`.
2. Code-path send: fake-mode turn completes; items persisted; exit_reason
   completed.
3. No-live-client-in-fake assertion (pattern from `tests/test_cli.py:8-24`).
4. Tool set: fetch/update absent from the chat registry.
5. CLI: `chat --help` exit 0, no `corpus` wording; `chat` without
   key exits 2 before any call, receipt, or state dir; `chat --fake` is
   the scripted mode. Startup loads `.env` then `.weaver/config.toml`
   (`[api] key`, `[chat] model`); precedence real env > `.env` > config;
   `DEEPSEEK_KEY` exits 2 before any call.
6. Ctrl+C binding unit: setting the cancel event while a scripted slow fake
   turn runs settles the turn as interrupted (deterministic via events, no
   sleeps — reuse the Plan 004 test style).

## Independent review

1. Reviewer 1 (event loop/cancellation): Ctrl+C → cancel_event only; no
   task.cancel of the model call; no task or connection leaks; blocking
   send() does not lose input.
2. Reviewer 2 (mode/scope/credentials): fake/live selection, key handling
   (exit 2, no receipt), tool set excludes fetch/update, scope fence, no
   `corpus` wording.
3. One repair pass is allowed.
4. Both reviewers recheck the repaired candidate.

## Done criteria

- [x] Owner confirmed Plan 010 learning gate (stale `fire` claims removed).
- [x] Plan 009 is accepted.
- [x] `textual>=2.0.0` added; `uv.lock` updated; import verified on Python 3.11.
- [x] `src/weaver/tui/app.py` exists with `WeaverChat`.
- [x] `weaver chat` CLI exists; live is default; `--fake` opts into fake.
- [x] Startup config: `.env` + `.weaver/config.toml` load before dispatch
  (owner-directed 2026-07-31; config.py, tests/test_config.py).
- [x] Ctrl+C sets cancel_event; no task.cancel of model calls.
- [x] Chat tool set excludes fetch/update; TUI never touches `novels/`.
- [x] Full tests and lint pass.
- [x] No changes to `agent/`, `model_layer/`; `conversation/` change is the
  sanctioned `send(cancel_event=...)` seam only.
- [ ] Two independent reviews have no open blocker.
- [ ] Owner records Plan 010 final decision.

## STOP conditions

Stop and report if:

- Textual >= 2.0.0 is not installable on Python 3.11;
- `run_turn()` does not return within 30 seconds for a 2-step fake turn
  (the TUI blocks the event loop during `send()`);
- cancellation requires `task.cancel()` on the model call to work — the
  cooperative contract (Contract §4) is a hard requirement;
- `DEEPSEEK_KEY` is sent to a non-DeepSeek provider;
- the TUI imports `novels/` or registers corpus mutation tools;
- fake mode constructs a live client, or live mode proceeds without a key;
- private prose, credentials, or raw reasoning enter evidence.

## Maintenance notes

- Streaming (text deltas into the TUI) requires a streaming seam in
  `SessionWeave`/`run_turn` first — a future plan, not a TUI workaround.
- Exposing `fetch`/`update` to chat later requires re-classifying them as
  `EXTERNAL_EFFECT` with an approval path (audit finding B2) — do not
  shortcut this by registering them in a maintenance policy.
- The TUI is the integration surface for Plan 011 and the memory plans; keep
  `WeaverChat` thin (send + render) so those plans can attach views without
  rewriting it.
- Textual versions move fast; the import check in the verification floor is
  the guard, and `uv.lock` pins the tested version.

## Deferred work

- Streaming text display (character-by-character in TUI).
- Markdown rendering, syntax highlighting, scroll-to-bottom.
- Multi-conversation TUI (tabs, conversation list).
- Direct-reading baseline (Plan 011) and compiled memory experiments use
  this TUI as their interface.
- Exposing network-backed library tools to chat (with an external-effect
  gate).

## Checkpoint audit corrections (2026-08-01)

Spec-vs-code audit results. 26/26 claims verified, 24 aligned, 2
partial. One reproducible bug, fixed. Doc fixes:

1. FIXED — `weaver chat --fake` with `[chat] model = pro` failed every
   turn with MODEL_FAILED: the scripted fake response was pinned to
   flash and failed model matching. Commit 9ffb0ab makes the fake stand
   in for the requested model. Regression test added.
2. DOC — stale deepseek.py line cites in "Current state" (cancel checks
   now at ~90 and ~127-133; the cited sticky path at 151-157 does not
   exist — cleanup closes the stream and yields ABORTED on cancel).
3. DOC — Contract §3 "displayed in the TUI header" is self-amended by
   Phase A: mode/model live in the one-line StatusBar. Wording updated.
4. DOC — "no Header/Footer chrome" is scoped to the main chat screen;
   the picker and history overlays yield a Header deliberately.
5. NOTE — a cancelled conversation is a dead end in the TUI: the next
   send refuses with INTERRUPTED_RUN_EXISTS and the TUI never calls
   continue/retry; only ^n/^r escape. Wiring retry into resume is
   future work.
6. NOTE — invalid TOML or [chat] model surfaces as a raw traceback
   (cli.run does not catch load_startup_config's ValueError). Cosmetic;
   a clean ERROR line is future work.
