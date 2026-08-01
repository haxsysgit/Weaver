"""Plan 010 Phase A + C + D widget tests.

Pure helpers are tested directly; screen behavior is tested with a stub
session through Textual's pilot, so no DB or model layer is involved (the
code path through a real SessionWeave is covered by tests/test_tui.py).

Gated sends can't use pilot.press: press() waits for the screen to go
idle, which never happens while a turn is in flight. Those tests submit
via app.action_submit_turn() and settle with plain sleeps; bindings are
asserted declaratively and, where pump-safe, with pilot.press.
"""

from __future__ import annotations

import asyncio

from textual.widgets import RichLog, Static, TextArea

from weaver.agent.turn import TurnExitReason, TurnResult
from weaver.tui.app import WeaverChat
from weaver.tui.widgets import SPINNER_FRAMES, StatusBar, status_text, welcome_line


def test_spinner_frames_cycle():
    assert len(SPINNER_FRAMES) >= 4
    assert status_text("fake", busy=True, tick=0).count(SPINNER_FRAMES[0]) == 1
    assert SPINNER_FRAMES[1] in status_text("fake", busy=True, tick=1)


def test_status_text_idle_has_dot_mode_and_hints():
    text = status_text("live deepseek-v4-flash", busy=False)
    assert "·" in text
    assert "live deepseek-v4-flash" in text
    assert "^c cancel" in text and "^q quit" in text
    assert all(frame not in text for frame in SPINNER_FRAMES)


def test_welcome_line_mentions_mode_and_hints():
    line = welcome_line("fake")
    assert "fake" in line and "^q quits" in line


class _StubSession:
    """Duck-typed SessionWeave: records sends, streams scripted chunks."""

    def __init__(self) -> None:
        self.sent: list[tuple[str, str]] = []
        self.cancel_events: list[asyncio.Event] = []
        self.gate: asyncio.Event | None = None
        self.stream_chunks: list[str] = []
        self.streamed: list[str] = []
        self.recent_turns: list[dict] = []
        self.conversations: list[dict] = []
        self.started: list[str] = []
        self.scripted = TurnResult(
            turn_id="t-1",
            exit_reason=TurnExitReason.COMPLETED,
            final_text="hello back",
        )

    async def send(self, conv_id, text, cancel_event=None, on_delta=None):
        self.sent.append((conv_id, text))
        self.cancel_events.append(cancel_event)
        if on_delta is not None:
            for chunk in self.stream_chunks:
                self.streamed.append(chunk)
                await on_delta(chunk)
                if self.gate is not None and not self.gate.is_set():
                    await self.gate.wait()
        if self.gate is not None and not self.gate.is_set():
            await self.gate.wait()
        return self.scripted

    async def list_recent_turns(self, conversation_id, limit=12):
        return list(self.recent_turns)

    async def list_conversations(self, limit=12):
        return list(self.conversations)

    async def start_conversation(self, owner_text):
        self.started.append(owner_text)
        return "conv-new"


def _log_text(node) -> str:
    """Plain text of everything currently in the node's RichLog."""
    log = node.query_one(RichLog)
    return " ".join(str(strip.text) for strip in log.lines)


async def _open_chat(stub: _StubSession, mode: str = "fake"):
    app = WeaverChat(stub, "conv-1", mode_label=mode)  # type: ignore[arg-type]
    async with app.run_test() as pilot:
        yield app, pilot


async def _submit(app, text: str) -> asyncio.Task:
    """Submit through the action; when a gate is set, run it as a task so
    the test can observe the in-flight turn, then release the gate."""
    app.query_one("#input", TextArea).text = text
    task = asyncio.create_task(app.action_submit_turn())
    if app._sw.gate is None:
        await task  # completes the whole turn
    else:
        await asyncio.sleep(0.05)  # let the handler reach the gate
    return task


async def test_pilot_welcome_line_shown_then_cleared_by_first_submit():
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        assert "Weaver chat" in _log_text(app)

        await _submit(app, "hi")
        await pilot.pause()

        assert stub.sent == [("conv-1", "hi")]
        log = _log_text(app)
        assert "Weaver chat" not in log  # welcome cleared on first submit
        assert "hi" in log  # no speaker labels: the user line is plain text
        assert "hello back" in log  # reply renders as (plain) markdown


async def test_pilot_status_bar_spins_while_turn_runs_then_rests():
    stub = _StubSession()
    stub.gate = asyncio.Event()
    async for app, pilot in _open_chat(stub):
        task = await _submit(app, "slow one")

        status = app.query_one(StatusBar)
        # Busy is proven observably: a spinner frame replaces the idle dot.
        assert any(frame in str(status.content) for frame in SPINNER_FRAMES)
        assert stub.sent == [("conv-1", "slow one")]

        stub.gate.set()
        await task
        await pilot.pause()  # settle once the send completes

        assert "·" in str(status.content)  # idle dot is back
        assert "hello back" in _log_text(app)


async def test_pilot_ctrl_c_bound_and_sets_cancel_event():
    stub = _StubSession()
    stub.gate = asyncio.Event()
    async for app, pilot in _open_chat(stub):
        # Declarative wiring: ctrl+c must dispatch to the cancel action and
        # win over the focused Input's ctrl+c copy binding (priority).
        bound = app.active_bindings["ctrl+c"].binding
        assert bound.action == "cancel_turn"
        assert bound.priority

        task = await _submit(app, "cancel me")

        app.action_cancel_turn()
        assert stub.cancel_events[0] is not None
        assert stub.cancel_events[0].is_set()
        assert "(cancelling…)" in _log_text(app)

        stub.gate.set()
        await task
        await pilot.pause()


async def test_pilot_ctrl_c_idle_clears_the_input():
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        input_widget = app.query_one("#input", TextArea)
        input_widget.text = "half typed"
        # Real keypress: proves the app's priority ctrl+c binding beats the
        # focused TextArea's own ctrl+c copy binding.
        await pilot.press("ctrl+c")
        assert input_widget.text == ""


async def test_pilot_stream_deltas_render_live_then_final_in_log():
    """Phase B: chunks appear in the stream area mid-turn, the final
    message lands in the log, and the stream area hides afterwards."""
    stub = _StubSession()
    stub.stream_chunks = ["hello ", "back"]
    stub.gate = asyncio.Event()
    async for app, pilot in _open_chat(stub):
        task = await _submit(app, "hi")

        stream = app.query_one("#stream", Static)
        assert stream.display is True
        assert "hello " in str(stream.content)  # markup source, text is plain
        assert stub.streamed == ["hello "]  # mid-turn: send not done

        stub.gate.set()
        await task
        await pilot.pause()

        log = _log_text(app)
        assert "hi" in log  # user line has no label
        assert "hello back" in log
        assert stream.display is False


async def test_pilot_empty_submit_ignored_and_log_stays():
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        await _submit(app, "   ")
        await pilot.pause()

        assert stub.sent == []
        assert "Weaver chat" in _log_text(app)


async def test_pilot_second_submit_while_busy_shows_still_thinking():
    """A second submit raced into the same pump cycle must not send.

    The pilot cannot reproduce this via queued submits (Textual pumps
    messages sequentially, so the second handler only runs after the first
    turn settles), so the handler is driven directly with a gated send.
    """
    stub = _StubSession()
    stub.gate = asyncio.Event()
    async for app, pilot in _open_chat(stub):
        input_widget = app.query_one("#input", TextArea)
        input_widget.text = "first"
        first = asyncio.create_task(app.action_submit_turn())
        await asyncio.sleep(0.1)  # first handler reaches the gate

        input_widget.text = "second"
        await app.action_submit_turn()

        assert stub.sent == [("conv-1", "first")]  # second was refused
        assert "(still thinking…)" in _log_text(app)
        assert input_widget.text == "second"  # typed text is not lost

        stub.gate.set()
        await first
        await pilot.pause()


# ---------------------------------------------------------------------------
# Plan 010 Phase D: context meter + run history screen.
# ---------------------------------------------------------------------------


def test_ctx_text_formats():
    from weaver.tui.widgets import ctx_text

    assert ctx_text(0, 0) == ""
    assert ctx_text(900, 0) == "900"
    assert ctx_text(1234, 0) == "1.2k"
    assert ctx_text(4000, 10000) == "40%"
    assert ctx_text(9999, 10000) == "99%"


def test_status_text_includes_context_and_history_hint():
    from weaver.tui.widgets import status_text

    text = status_text("live deepseek-v4-flash", busy=False, context="40%")
    assert "ctx 40%" in text
    assert "^h history" in text


async def test_pilot_footer_shows_context_after_send():
    stub = _StubSession()
    stub.scripted = TurnResult(
        turn_id="t-1",
        exit_reason=TurnExitReason.COMPLETED,
        final_text="hello back",
        token_count=1234,
        token_budget=0,
    )
    async for app, pilot in _open_chat(stub):
        await _submit(app, "hi")
        await pilot.pause()
        status = app.query_one(StatusBar)
        assert "ctx 1.2k" in str(status.content)


async def test_pilot_ctrl_h_opens_history_screen_and_esc_closes():
    from weaver.tui.screens import RunHistoryScreen

    stub = _StubSession()
    stub.recent_turns = [
        {
            "run_id": "r-2",
            "created_at": "2026-07-31T16:05:00",
            "status": "completed",
            "owner_text": "second hello",
        },
        {
            "run_id": "r-1",
            "created_at": "2026-07-31T16:00:00",
            "status": "—",
            "owner_text": "first hello",
        },
    ]
    async for app, pilot in _open_chat(stub):
        # Real keypress: proves ctrl+h dispatches to show_history.
        await pilot.press("ctrl+h")
        await pilot.pause()

        assert isinstance(app.screen, RunHistoryScreen)
        text = _log_text(app.screen)
        assert "completed" in text and "second hello" in text
        assert "first hello" in text

        await pilot.press("escape")
        await pilot.pause()
        assert not isinstance(app.screen, RunHistoryScreen)


# ---------------------------------------------------------------------------
# Plan 010 Phase C: multi-line input, markdown replies, resume picker.
# ---------------------------------------------------------------------------


async def test_pilot_enter_binding_submits_not_newlines():
    """Enter must submit (App binding) and never insert a newline, even
    though TextArea natively maps enter to a newline."""
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        bound = app.active_bindings["enter"].binding
        assert bound.action == "submit_turn"

        app.query_one("#input", TextArea).text = "hi"
        await pilot.press("enter")
        await pilot.pause()

        assert stub.sent == [("conv-1", "hi")]
        assert app.query_one("#input", TextArea).text == ""


async def test_pilot_shift_enter_inserts_newline():
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        bound = app.active_bindings["shift+enter"].binding
        assert bound.action == "newline"

        textarea = app.query_one("#input", TextArea)
        textarea.text = "line one"
        textarea.move_cursor((0, len("line one")))  # cursor where typing puts it
        await pilot.press("shift+enter")
        await pilot.pause()

        assert textarea.text == "line one\n"
        assert stub.sent == []  # nothing submitted


async def test_multiline_submit_sends_full_text_and_clears():
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        await _submit(app, "line one\nline two\n")
        await pilot.pause()

        assert stub.sent == [("conv-1", "line one\nline two")]
        assert app.query_one("#input", TextArea).text == ""


async def test_markdown_reply_renders_in_log():
    stub = _StubSession()
    stub.scripted = TurnResult(
        turn_id="t-1",
        exit_reason=TurnExitReason.COMPLETED,
        final_text="**bold** reply with `code`",
    )
    async for app, pilot in _open_chat(stub):
        await _submit(app, "hi")
        await pilot.pause()

        log = _log_text(app)
        assert "bold reply with code" in log  # markers stripped, text kept
        assert "*bold*" not in log


async def test_pilot_ctrl_r_picker_picks_and_switches():
    from weaver.tui.screens import ConversationPickerScreen

    stub = _StubSession()
    stub.conversations = [
        {
            "conversation_id": "conv-2",
            "created_at": "2026-07-31T17:00:00",
            "last_owner_text": "second chat",
        },
        {
            "conversation_id": "conv-1",
            "created_at": "2026-07-31T16:00:00",
            "last_owner_text": "first chat",
        },
    ]
    async for app, pilot in _open_chat(stub):
        bound = app.active_bindings["ctrl+r"].binding
        assert bound.action == "resume"

        await pilot.press("ctrl+r")
        await pilot.pause()

        assert isinstance(app.screen, ConversationPickerScreen)
        labels = [
            str(item.children[0].content) for item in app.screen.query("ListItem")
        ]
        assert "second chat" in labels[0] and "first chat" in labels[1]

        await pilot.press("enter")  # selects the focused (first) item
        await pilot.pause()

        assert "switched to conversation conv-2" in _log_text(app)
        # Routing is observable: the next submit goes to the switched
        # conversation, not conv-1.
        await _submit(app, "hello again")
        await pilot.pause()
        assert stub.sent == [("conv-2", "hello again")]


async def test_pilot_ctrl_r_picker_escape_cancels():
    from weaver.tui.screens import ConversationPickerScreen

    stub = _StubSession()
    stub.conversations = [
        {
            "conversation_id": "conv-2",
            "created_at": "2026-07-31T17:00:00",
            "last_owner_text": "second chat",
        },
    ]
    async for app, pilot in _open_chat(stub):
        await pilot.press("ctrl+r")
        await pilot.pause()
        assert isinstance(app.screen, ConversationPickerScreen)

        await pilot.press("escape")
        await pilot.pause()

        assert not isinstance(app.screen, ConversationPickerScreen)
        assert "switched" not in _log_text(app)
        # Routing is observable: an escape keeps the current conversation.
        await _submit(app, "still here")
        await pilot.pause()
        assert stub.sent == [("conv-1", "still here")]


async def test_pilot_ctrl_n_starts_new_conversation():
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        bound = app.active_bindings["ctrl+n"].binding
        assert bound.action == "new_conversation"

        await pilot.press("ctrl+n")
        await pilot.pause()

        assert stub.started == [""]
        assert "new conversation conv-new" in _log_text(app)
        # Routing is observable: the next submit goes to the fresh
        # conversation.
        await _submit(app, "fresh start")
        await pilot.pause()
        assert stub.sent == [("conv-new", "fresh start")]


async def test_pilot_turn_separator_between_turns():
    """Checkpoint pilot: each turn is separated by a dim line (red first)."""
    from weaver.tui.widgets import TURN_SEPARATOR

    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        await _submit(app, "first turn")
        await pilot.pause()
        await _submit(app, "second turn")
        await pilot.pause()
        assert _log_text(app).count(TURN_SEPARATOR) == 2
