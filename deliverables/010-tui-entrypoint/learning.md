# Learning Note: TUI entrypoint

## Gate status

**Confirmed by owner 2026-07-31.**

Owner's words: "okay now ive confirmed plan 10 learning.md, start implementing".

This confirmation admits Plan 010 implementation. It does not accept the
future implementation. The final owner decision remains pending after tests,
inspection, and independent review.

## Tiny model

Every plan so far proves something via pytest. The owner cannot talk to
Weaver. A TUI is the cheapest conversation surface: same process, same event
loop, direct `await session.send()`, no HTTP bridge, no serialization.

`weaver chat` opens a Textual window. The owner types a message, presses
Enter, and sees Weaver's response appear. Live DeepSeek mode is the
default (owner-directed correction 2026-07-31: live is the default; fake is
opt-in via `--fake`) and requires a `DEEPSEEK_KEY`. Fake mode works without
credentials and never constructs a live client. Ctrl+C sets the turn's
cancel event instead of killing the app. The TUI is the attachment point
for every downstream experiment.

## The pieces (re-verified 2026-07-31, post-Plan 009)

- `SessionWeave.send()` at `conversation/session.py:112-149`: creates an
  internal `asyncio.Event()` and passes it to
  `run_turn_in_run`. **Plan 010 seam (design correction): `send()` gains an
  optional `cancel_event: asyncio.Event | None = None` kwarg.** When None,
  behavior is byte-identical to Plan 008/009 (internal event). When the TUI
  passes its own event, Ctrl+C can set it. This is the only
  `conversation/` change in the plan, and it is what Contract §4 requires —
  the plan's own learning draft anticipated "SessionWeave.cancel() (to be
  added in Plan 008 or 010 — setting the cancel event)".
- `FakeModelProvider` (`model_layer/fake.py:26-56`): pre-programmed
  responses; checks `cancel_event` at stream start and yields an ABORTED
  response when set. TUI default mode. `_default_response` (no scripted
  responses) would emit a tool call when tools exist — so chat fake mode
  MUST pass scripted responses.
- `config.py` (`src/weaver/config.py:1-20`): reads `DEEPSEEK_KEY` from the
  process environment. Does NOT auto-load `.env`. Fake mode needs no key.
- `cli.py` (`src/weaver/cli.py:1-118`): argparse-based CLI (not `fire`) with
  `doctor`, `experiment`, `library` subcommands. No `chat` yet. The fake/live
  split pattern at `cli.py:146-165` (mutually exclusive flags, exit 2 before
  any call or receipt when the key is missing) is the pattern `chat` mirrors.
- `ToolExecutionPolicy` (`agent/tools.py:44-78`): `read_only()` = {READ};
  `maintenance()` = {READ, INTERNAL_WRITE}. `EXTERNAL_EFFECT` is
  unconstructible (Plan 004).
- `register_corpus_tools` (`corpus/tools.py:149-205`): registers ALL FIVE
  library tools with `effect_kind=EffectKind.INTERNAL_WRITE`
  (`corpus/tools.py:194-201`), `retry_safe=True` for
  inspect/build/export. **Plan 010 design correction: a new
  `register_chat_tools(registry, service)` registers only
  inspect/build_packet/export with Weaver-language descriptions; fetch/update
  stay out entirely (never registered = cannot be called, which is stronger
  than policy-blocking and closes audit finding B2).** Chat sessions use
  `ToolExecutionPolicy.maintenance()` so the three INTERNAL_WRITE library
  tools can actually run — `read_only()` would register tools that can never
  execute, contradicting Contract §2's own list. The plan text said
  "read_only" in Slice 4 and "maintenance policy" in this learning draft's
  flow; the flow diagram was right.
- `ToolRegistry` (`agent/tools.py:124-`): explicit registration, no
  discovery; `active_schemas` is the set shown to the model.
- Textual (new dependency, `textual>=2.0.0`, verified against official docs
  https://textual.textualize.io on 2026-07-31): `App.run()` blocks and owns
  its own loop; **`App.run_async()` is a coroutine that shares the caller's
  loop** — this is what `weaver chat` uses so the aiosqlite connection
  opened by `SessionWeave.open()` stays on the same loop. `run_test()` +
  `Pilot` provide headless testing (deferred for full UI tests). `BINDINGS`
  on a subclass override base-class bindings for the same key; App's base
  `ctrl+q` quit is a priority binding and stays available.
- `run_turn()` (`agent/turn.py:169-`): returns a `TurnResult` with
  `final_text` and `exit_reason`. No streaming to callers. Checks
  `cancel_event.is_set()` at the top of the loop (`turn.py:213`) and maps
  ABORTED/`CancelledError` to `INTERRUPTED`. The TUI blocks during `send()`.
- `TurnResult.exit_reason` tells the TUI whether to display a response
  (`COMPLETED`, `INCOMPLETE`) or a message (`MODEL_FAILED`, `INTERRUPTED`,
  `LIMIT_REACHED`, `PERSISTENCE_FAILED`).

## What I understood (corrected against code)

1. The TUI is a single-file Textual `App` subclass in
   `src/weaver/tui/app.py`, exported from `src/weaver/tui/__init__.py`.
   Widgets: `Header` (shows mode label via `sub_title`), `RichLog` (chat
   history), `Input` (message entry), `Footer` (shows bindings). No markdown
   rendering, no streaming, no message editing, no conversation switching.
2. `SessionWeave` is created and opened BEFORE the app runs, in the same
   event loop: `asyncio.run(_run_chat(...))` where `_run_chat` does
   `await sw.open()`, `conv_id = await sw.start_conversation("")`, then
   `await WeaverChat(sw, conv_id, mode_label).run_async()`, then
   `await sw.close()`. One loop for DB + UI.
3. `start_conversation("")` creates the relationship + conversation + first
   turn with an empty owner item. The first `send()` then writes the real
   owner message as a new turn. Known edge: the empty owner item is part of
   history (harmless for fake mode; a future plan may filter empty-content
   owner items for live providers).
4. Enter in the `Input` widget fires `on_input_submitted`. It calls
   `await sw.send(conv_id, text, cancel_event=...)`. The TUI blocks during
   this await; a submit guard ignores Enter while a send is in flight
   ("still thinking…") so two turns cannot race on the same conversation.
   User text is escaped (`rich.markup.escape`) before being written to the
   markup-enabled RichLog so `[bold]`-style input cannot break rendering.
5. Cancellation: `BINDINGS = [Binding("ctrl+c", "cancel_turn", "Cancel",
   show=False)]` overrides Textual's default Ctrl+C quit. The action sets
   the in-flight turn's cancel event and writes "cancelling…". The turn
   settles through the runner's interrupt path; the run is marked
   interrupted and the next send returns `INTERRUPTED_RUN_EXISTS`, which the
   TUI displays. The TUI never calls `task.cancel()`.
6. Chat tool set (Contract §2): echo (READ, defined in `cli.py`) +
   `inspect_novel_corpus`, `build_novel_packet`, `export_novel` (their true
   INTERNAL_WRITE kind), registered by `register_chat_tools` in
   `corpus/tools.py` with Weaver-language descriptions (no "corpus" word).
   `fetch_novel_chapters` and `update_novel_corpus` are NOT registered.
   Policy is `maintenance()`; `active_tools` names exactly the registered
   set. The TUI itself never imports `novels/` and never writes library
   files; it only registers tools that may touch them.
7. Mode selection: `weaver chat` defaults to live; without `DEEPSEEK_KEY`
   it exits 2 before any call or receipt (no state dir created), suggesting
   `--fake`. Fake mode constructs `FakeModelProvider("deepseek",
   models=DEEPSEEK_MODELS, responses=CHAT_FAKE_RESPONSES)` with a scripted
   friendly STOP response; live constructs `DeepSeekProvider(api_key,
   timeout_seconds=DEFAULT_TIMEOUT_SECONDS)`. The mode label ("fake" or
   "live deepseek-v4-flash") is passed to the app and shown as
   `sub_title = "Weaver — {mode}"` in the Header (Contract §3).
8. State dir: `WEAVER_STATE_DIR` if set, else `.weaver/state` (Plan 010
   §7). The DB is `weaver.sqlite3` in that dir; conversations persist
   between runs (the DB is durable), but the TUI has no conversation-list
   or resume UI yet — each `weaver chat` starts a fresh conversation.
9. Tests (`tests/test_tui.py`) cover the same code path the TUI uses:
   import check, `sw.send` with fake model + chat registry (completed turn,
   items in DB, non-empty final_text), fake-never-constructs-DeepSeek
   (`NetworkMustNotBeConstructed` pattern), registry excludes fetch/update,
   `chat --help` exit 0 with no "corpus" wording, default chat without key
   exits 2 without creating state, and a deterministic cancel test (gated
   fake provider; setting the event mid-turn settles INTERRUPTED, no
   sleeps). Full headless Textual pilot tests are deferred.
10. Textual is added via `uv add textual`; nothing else. `weaver` console
    script already points at `weaver.cli:main` (`pyproject.toml`).

## TUI flow

```text
weaver chat (live by default) / weaver chat --fake
    |
    +--> live? (no --fake flag)
    |       DEEPSEEK_KEY present? no → exit 2 (no call, no receipt)
    |       yes → DeepSeekProvider + "live deepseek-v4-flash"
    |       --fake → FakeModelProvider + scripted responses + "fake"
    |
    +--> asyncio.run(_run_chat)
            |   SessionWeave(state_dir, model_layer, model,
            |                chat registry, maintenance policy, chat prompt)
            |   .open() → start_conversation("") → WeaverChat(sw, conv_id, mode)
            +--> await app.run_async()          # same event loop as the DB
                    |
                    +--> Header: "Weaver — fake" / "Weaver — live deepseek-v4-flash"
                    +--> RichLog: empty chat history
                    +--> Input: "Type a message..."
                    |
                    user types "Hello" + Enter
                    |
                    +--> on_input_submitted
                    |       RichLog.write("You: Hello")         # escaped
                    |       cancel_event = asyncio.Event()
                    |       result = await sw.send(conv_id, "Hello", cancel_event)
                    |       if result.final_text:
                    |           RichLog.write(f"Weaver: {result.final_text}")
                    |       elif result.exit_reason == "interrupted":
                    |           RichLog.write("(cancelled)")
                    |       else:
                    |           RichLog.write(f"({result.exit_reason}: {result.safe_failure})")
                    |       Input.clear()
                    |
                    Ctrl+C while waiting
                    |
                    +--> action_cancel_turn → cancel_event.set()
                    |       RichLog.write("cancelling…")
                    +--> send() returns INTERRUPTED; run marked interrupted
                    +--> next send shows INTERRUPTED_RUN_EXISTS message
```

## What this plan will prove

- `weaver chat` opens a working Textual TUI.
- `SessionWeave.send()` is called from the TUI's async event loop.
- Fake mode works without credentials and never constructs a live client.
- Live mode is the default; fake is opt-in via `--fake`; no key fails fast.
- Ctrl+C cancels cooperatively via the cancel event; no `task.cancel()`.
- Chat tool set is exactly echo + inspect/build/export; fetch/update absent.
- `test_tui_send` proves the integration path without a terminal.

## What it will not prove

- Streaming text display (TUI blocks during `send()`).
- Markdown rendering, syntax highlighting, or message editing.
- Multi-conversation management (tabs, conversation list, resume).
- Full headless Textual pilot tests of the widget tree.
- Live DeepSeek end-to-end (needs a key; empty first owner item is a known
  live-mode edge, see point 3).
- Corpus mutation tools in chat (fetch/update stay unregistered).

## Confirmation record

- Owner choice: confirmed learning gate and admitted Plan 010 implementation
- Date: 2026-07-31
- Corrections or added constraints: owner authorized on-the-fly corrections
  to the plan's architecture/design ("you can change any of the former
  plans on the fly and correct the codes, correct the architecture,
  design, also go online and search about textual official docs"). Applied:
  `send(cancel_event=...)` seam, `maintenance()` policy instead of
  `read_only()`, `register_chat_tools` in `corpus/tools.py`, echo defined in
  `cli.py`, Textual docs consulted for `run_async`, `BINDINGS`, `escape`.

Confirming approves this interpretation and the TUI design. It does not
accept the future code.
