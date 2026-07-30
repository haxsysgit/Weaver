# Learning Note: TUI entrypoint

## Gate status

**Unadmitted. Owner confirmation required before implementation.**

Plan 009 must be accepted first. This confirmation admits Plan 010
implementation. It does not accept the future implementation. The final owner
decision remains pending after tests, inspection, and independent review.

## Tiny model

Every plan so far proves something via pytest. The owner cannot talk to
Weaver. A TUI is the cheapest conversation surface: same process, same event
loop, direct `await session.send()`, no HTTP bridge, no serialization.

`weaver chat` opens a Textual window. The owner types a message, presses
Enter, and sees Weaver's response appear. Fake-model mode works without
credentials. The TUI is the attachment point for every downstream experiment.

## The pieces

- `SessionWeave` (`conversation/session.py`, post-Plan 008): has
  `send(conversation_id, user_text) -> TurnResult`. The TUI's only
  interaction point.
- `FakeModelProvider` (`model_layer/fake.py:30-56`): pre-programmed
  responses. TUI default mode when `DEEPSEEK_KEY` is absent.
- `config.py` (`src/weaver/config.py:1-20`): reads `DEEPSEEK_KEY` from the
  process environment. Does NOT auto-load `.env` (fixed in Plan 005 repair).
- `cli.py` (`src/weaver/cli.py`): existing `fire`-based CLI with `library`
  and `experiment` subcommands. Plan 010 adds `chat`.
- `ToolRegistry` (`agent/tools.py`): must have at least the echo tool
  registered for fake-mode chat. Corpus inspection tools registered when
  the `novels/` directory exists.
- Textual (new dependency): `textual>=2.0.0`. Python-native TUI framework
  with async support, widget tree, and keyboard handling. Same event loop as
  `SessionWeave` — no thread or process boundary.
- `run_turn()` (`agent/turn.py:149-280`): returns a `TurnResult` with
  `final_text`. Does NOT stream text deltas to the caller in Plan 001's
  design — `stream()` exists on the model layer but `complete()` is what
  `run_turn()` uses. The TUI blocks during the model call.
- `TurnResult.exit_reason` tells the TUI whether to display a response
  (`COMPLETED`, `INCOMPLETE`) or an error message (`MODEL_FAILED`,
  `INTERRUPTED`, `LIMIT_REACHED`).

## What I understood

1. The TUI is a single-file Textual `App` subclass in
   `src/weaver/tui/app.py`. It has three widgets: `Header`, `RichLog` (chat
   history), and `Input` (message entry). No markdown rendering, no streaming,
   no message editing, no conversation switching.
2. `SessionWeave` is created before the TUI starts and passed into the app.
   `open()` and `start_conversation("")` run during TUI startup. The empty
   string creates a conversation with no owner text — the first real message
   creates the first turn.
3. When the user presses Enter in the `Input` widget, `on_input_submitted`
   fires. It calls `await self._sw.send(self._conv_id, text)`. The TUI
   blocks during this await — no other input is accepted. For a fake model
   this returns in milliseconds. For a live model it may take 5--30 seconds.
4. Cancellation: `Ctrl+C` triggers the Textual `App.action_quit` which calls
   `SessionWeave.cancel()` (to be added in Plan 008 or 010 — setting the
   cancel event). The TUI does NOT implement a "stop" button or mid-turn
   cancel UI.
5. Mode selection: when `DEEPSEEK_KEY` is in the environment, the CLI creates
   a `DeepSeekProvider` and registers it in the model layer. When absent, it
   creates a `FakeModelProvider` with pre-scripted welcome responses. The
   user cannot switch modes during a session.
6. Tool registration: the echo tool is always registered. When the
   `novels/shadow-slave/` directory exists, corpus inspection tools
   (`inspect_novel_corpus`) are registered with `EffectKind.READ`.
   Mutating corpus tools (`fetch_novel_chapters`, `update_novel_corpus`,
   `export_novel`) are NOT registered — the default `read_only()` policy
   would block them anyway, and registering tools the user can't call is
   misleading.
7. The TUI does NOT persist conversations between sessions. Every `weaver
   chat` invocation creates a new `SessionWeave` with a new conversation in
   a temporary or `.weaver/state/` directory. Conversation continuity is
   deferred to a later plan that adds conversation-listing and resumption
   to the TUI.
8. `test_tui_send` in `tests/test_conversation.py` tests the same code path
   the TUI uses: `sw.send(conv_id, "Hello")` with a fake model and echo
   tool. It does NOT test Textual widgets — it proves the integration
   between `SessionWeave.send()` and `run_turn()` works. A full TUI
   integration test (headless Textual, `pilot`) is deferred.
9. The CLI registers `chat` as a `fire` command. `weaver chat --help` shows
   the command exists. `weaver chat` opens the TUI.
10. Textual is added to `pyproject.toml` via `uv add textual`. No other new
    dependencies.

## TUI flow

```text
weaver chat
    |
    +--> check DEEPSEEK_KEY
    |       present → DeepSeekProvider + maintenance policy
    |       absent  → FakeModelProvider + read_only policy
    |
    +--> SessionWeave(state_dir, model_layer, model, ...).open()
    +--> sw.start_conversation("") → conv_id
    +--> WeaverChat(sw, conv_id).run()
            |
            +--> Header: "Weaver"
            +--> RichLog: empty chat history
            +--> Input: "Type a message..."
            |
            user types "Hello" + Enter
            |
            +--> on_input_submitted
            |       RichLog.write("[bold]You:[/bold] Hello")
            |       result = await sw.send(conv_id, "Hello")
            |       if result.final_text:
            |           RichLog.write(f"[bold]Weaver:[/bold] {result.final_text}")
            |       else:
            |           RichLog.write(f"[dim]({result.exit_reason})[/dim]")
            |       Input.clear()
```

## What this plan will prove

- `weaver chat` opens a working Textual TUI.
- `SessionWeave.send()` is called from the TUI's async event loop.
- Fake mode works without credentials.
- Live DeepSeek mode works when `DEEPSEEK_KEY` is present.
- The echo tool responds to user input from within the TUI.
- `test_tui_send` proves the integration path without a terminal.

## What it will not prove

- Streaming text display (TUI blocks during `send()`).
- Markdown rendering, syntax highlighting, or message editing.
- Multi-conversation management (tabs, conversation list).
- Conversation persistence across TUI sessions.
- Full TUI integration tests (headless Textual with `pilot`).
- Corpus mutation tools in conversation.
- Novel reading or literary comprehension.

## Confirmation record

- Owner choice: pending
- Date: pending
- Corrections or added constraints: pending

Confirming approves this interpretation and the TUI design. It does not
accept the future code.
