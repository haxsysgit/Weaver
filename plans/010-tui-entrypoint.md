# Plan 010: TUI entrypoint

> **Executor instructions:** Execute only after Plan 009 is accepted. Read this
> plan, the accepted Plan 009 results, and every file in "Current state" before
> editing. Run each verification gate and record failures.

## Status

- **State:** Planned; learning gate required
- **Priority:** P2
- **Effort:** M
- **Risk:** Medium (new dependency, first UI surface)
- **Depends on:** Plan 009 accepted
- **Category:** DX and entrypoint
- **Planned at:** commit `e523383`, 2026-07-30
- **Learning gate:** `deliverables/010-tui-entrypoint/learning.md`
- **Final decision:** pending

## Goal

Give the owner a working chat window to talk to Weaver during development.

After this plan, `weaver chat` opens a Textual TUI. The owner types a
message, presses Enter, and sees Weaver's streaming response appear in a
scrollable conversation pane. Fake-model mode works without credentials.
Cancellation via Ctrl+C sets the turn's cancel event.

## Why this matters

Every plan so far proves a property via pytest. The owner cannot actually
talk to Weaver. A TUI is the cheapest conversation surface: same process,
same event loop, direct `await session.send()`, no HTTP bridge, no
serialization. It makes testing downstream work (corpus tools, literary
understanding) feel like a real conversation instead of an assertion.

The owner deferred TUI development to Plan 007 (`plans/007-restart-safe-conversation-proof.md:27`).
Plan 007 is complete. The TUI attachment point exists.

## Current state

### `src/weaver/cli.py:1-30` — Weaver CLI

Existing CLI uses `fire` (already in dependencies). Has `corpus`/`library`
subcommands and `experiment` commands. No `chat` subcommand.

### `src/weaver/conversation/session.py` — SessionWeave (post-Plan 008)

Has `send(conversation_id, user_text) -> TurnResult`. Plan 008 adds this.

### `pyproject.toml:8-20` — dependencies

```
dependencies = [
    "beautifulsoup4>=4.15.0",
    "ebooklib>=0.20",
    "firecrawl-py>=4.33.1",
    "langchain>=1.3.14",
    "langchain-text-splitters>=1.1.2",
    "lxml>=6.1.1",
    "openai>=2.11.0",
    "pydantic>=2.13.4",
    "python-dotenv>=1.1.1",
    "tiktoken>=0.13.0",
]
```

Textual is NOT in dependencies. It must be added.

### `src/weaver/config.py:1-20` — config

Reads `DEEPSEEK_KEY` from process environment. Does not auto-load `.env`
(after Plan 005 repair). Fake mode works with no key.

### `src/weaver/model_layer/fake.py` — FakeModelProvider

Used in tests and experiments. The TUI's default mode uses fake responses
when no live key is present.

## Implementation slices

### 1. Confirm the learning gate

Answer three questions in `deliverables/010-tui-entrypoint/learning.md`:

1. Textual integration: how does an async Textual app share the event loop
   with SessionWeave, and where does cancellation (Ctrl+C) set the cancel
   event?
2. Streaming: does `run_turn()` stream text deltas that can appear in the
   TUI character by character, or does it return the full response at once?
   If the latter, how should the TUI handle 5--30 second model waits?
3. Mode selection: how does the CLI decide between fake, live-DeepSeek, and
   live-other-provider modes based on available credentials?

Commit: `plan 010: learning gate answers`

### 2. Add Textual dependency

Add `textual>=2.0.0` to `pyproject.toml` dependencies. Run `uv lock`.

```bash
uv add textual
```

Commit: `plan 010: add textual dependency`

### 3. Build the TUI

Create `src/weaver/tui/` with `__init__.py` and `app.py`.

```python
# src/weaver/tui/app.py
from textual.app import App, ComposeResult
from textual.widgets import Header, Footer, Input, RichLog

class WeaverChat(App):
    def __init__(self, session_weave, conversation_id, **kwargs):
        super().__init__(**kwargs)
        self._sw = session_weave
        self._conv_id = conversation_id

    def compose(self) -> ComposeResult:
        yield Header()
        yield RichLog(id="chat-log", highlight=True, markup=True)
        yield Input(id="input", placeholder="Type a message...")
        yield Footer()

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
```

Keep it minimal: no streaming (TUI blocks during model call), no markdown
rendering, no message editing, no scroll-to-bottom. One file, one class,
three widgets.

Commit: `plan 010: build minimal Textual TUI`

### 4. Add `weaver chat` CLI

Add a `chat` subcommand to `src/weaver/cli.py`:

```python
def chat():
    """Open the Weaver conversation TUI."""
    import asyncio
    from weaver.conversation import SessionWeave
    from weaver.model_layer import FakeModelProvider, ModelLayer, ModelSpec
    from weaver.agent.tools import ToolExecutionPolicy, ToolRegistry
    from weaver.tui.app import WeaverChat

    state_dir = Path(".weaver/state")
    sw = SessionWeave(
        state_dir,
        model_layer=..., model=..., system_prompt=...,
        tool_registry=ToolRegistry(),
        execution_policy=ToolExecutionPolicy.read_only(),
    )

    async def run():
        await sw.open()
        conv_id = await sw.start_conversation("")
        app = WeaverChat(sw, conv_id)
        await app.run_async()

    asyncio.run(run())
```

Fake mode when `DEEPSEEK_KEY` is absent. Live DeepSeek when the key is
present (using the existing `config.py` check). Register the echo tool and
corpus inspection tools when the corpus directory exists.

Commit: `plan 010: add weaver chat CLI`

### 5. Deterministic TUI test

Add `test_tui_send` to `tests/test_conversation.py` (or a new test file):

- Create a `SessionWeave` with fake model, echo tool, and maintenance policy.
- Call `sw.send(conv_id, "Hello")`.
- Assert the result is a completed turn with a non-empty `final_text`.
- Assert items appear in the database.

This tests the same code path the TUI uses without requiring a terminal.

Commit: `plan 010: TUI code-path test`

## Verification floor

```bash
uv run pytest -q
uv run ruff check src/weaver/tui src/weaver/cli.py tests
uv run python -c "from weaver.tui import WeaverChat; print('import ok')"
uv run weaver chat --help  # confirms CLI registers
```

Expected: full suite passes, lint clean, imports work, CLI help shows `chat`.

## Independent review

1. Reviewer 1 checks TUI event-loop integration, cancellation plumbing, and
   that the TUI doesn't leak tasks or connections.
2. Reviewer 2 checks CLI mode selection, credential handling, and scope
   (no novel access, no corpus mutation via TUI).
3. One repair pass allowed.
4. Both reviewers recheck the repaired candidate.

## Done criteria

- [ ] Owner confirmed Plan 010 learning gate.
- [ ] Plan 009 is accepted.
- [ ] `textual` added to dependencies, `uv.lock` updated.
- [ ] `src/weaver/tui/app.py` exists with `WeaverChat` class.
- [ ] `weaver chat` CLI command exists.
- [ ] Fake mode works without `DEEPSEEK_KEY`.
- [ ] Full tests and lint pass.
- [ ] No changes to `agent/`, `conversation/` internals, or `model_layer/`.
- [ ] Two independent reviews have no open blocker.
- [ ] Owner records Plan 010 final decision.

## STOP conditions

- Textual >= 2.0.0 is not installable on Python 3.11.
- `run_turn()` does not return within 30 seconds for a 2-step fake turn
  (the TUI blocks the event loop during `send()`).
- `DEEPSEEK_KEY` is accidentally sent to a non-DeepSeek provider.
- The TUI imports `novels/` or corpus mutation tools.

## Deferred work

- Streaming text display (character-by-character in TUI).
- Markdown rendering, syntax highlighting, scroll-to-bottom.
- Multi-conversation TUI (tabs, conversation list).
- Direct-reading baseline (Plan 011) and compiled memory experiments use
  this TUI as their interface.
