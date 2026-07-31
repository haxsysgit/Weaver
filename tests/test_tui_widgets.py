"""Plan 010 Phase A: status bar, welcome line, and pi-shaped screen tests.

Pure helpers are tested directly; screen behavior is tested with a stub
session through Textual's pilot, so no DB or model layer is involved (the
code path through a real SessionWeave is covered by tests/test_tui.py).

Gated sends can't use pilot.press: press() waits for the screen to go
idle, which never happens while a turn is in flight. Those tests submit
via Input.action_submit() and settle with plain sleeps; the ctrl+c binding
wiring is asserted declaratively.
"""

from __future__ import annotations

import asyncio

from textual.widgets import Input, RichLog, Static

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


def _log_text(app) -> str:
    """Plain text of everything currently in the chat log."""
    log = app.query_one("#chat-log", RichLog)
    return " ".join(str(strip.text) for strip in log.lines)


async def _open_chat(stub: _StubSession, mode: str = "fake"):
    app = WeaverChat(stub, "conv-1", mode_label=mode)  # type: ignore[arg-type]
    async with app.run_test() as pilot:
        yield app, pilot


async def _submit(app, text: str) -> None:
    """Submit text through the input widget without waiting for idle."""
    input_widget = app.query_one("#input", Input)
    input_widget.value = text
    await input_widget.action_submit()


async def test_pilot_welcome_line_shown_then_cleared_by_first_submit():
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        assert "Weaver chat" in _log_text(app)

        await _submit(app, "hi")
        await pilot.pause()

        assert stub.sent == [("conv-1", "hi")]
        log = _log_text(app)
        assert "Weaver chat" not in log  # welcome cleared on first submit
        assert "You: hi" in log
        assert "Weaver: hello back" in log


async def test_pilot_status_bar_spins_while_turn_runs_then_rests():
    stub = _StubSession()
    stub.gate = asyncio.Event()
    async for app, pilot in _open_chat(stub):
        await _submit(app, "slow one")
        await asyncio.sleep(0.1)  # let the submit handler reach the gate

        status = app.query_one(StatusBar)
        assert status._busy
        assert any(frame in str(status.content) for frame in SPINNER_FRAMES)
        assert stub.sent == [("conv-1", "slow one")]

        stub.gate.set()
        await pilot.pause()  # settle once the send completes

        assert not status._busy
        assert "·" in str(status.content)
        assert "Weaver: hello back" in _log_text(app)


async def test_pilot_ctrl_c_bound_and_sets_cancel_event():
    stub = _StubSession()
    stub.gate = asyncio.Event()
    async for app, pilot in _open_chat(stub):
        # Declarative wiring: ctrl+c must dispatch to the cancel action and
        # win over the focused Input's ctrl+c copy binding (priority).
        bound = app.active_bindings["ctrl+c"].binding
        assert bound.action == "cancel_turn"
        assert bound.priority

        await _submit(app, "cancel me")
        await asyncio.sleep(0.1)

        app.action_cancel_turn()
        assert stub.cancel_events[0] is not None
        assert stub.cancel_events[0].is_set()
        assert "(cancelling…)" in _log_text(app)

        stub.gate.set()
        await pilot.pause()


async def test_pilot_ctrl_c_idle_clears_the_input():
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        input_widget = app.query_one("#input", Input)
        input_widget.value = "half typed"
        app.action_cancel_turn()
        assert input_widget.value == ""


async def test_pilot_stream_deltas_render_live_then_final_in_log():
    """Phase B: chunks appear in the stream area mid-turn, the final
    message lands in the log, and the stream area hides afterwards."""
    stub = _StubSession()
    stub.stream_chunks = ["hello ", "back"]
    stub.gate = asyncio.Event()
    async for app, pilot in _open_chat(stub):
        await _submit(app, "hi")
        await asyncio.sleep(0.1)  # first chunk delivered, then gated

        stream = app.query_one("#stream", Static)
        assert stream.display is True
        assert "hello " in str(stream.content)  # markup source, text is plain
        assert stub.streamed == ["hello "]  # mid-turn: send not done

        stub.gate.set()
        await pilot.pause()

        log = _log_text(app)
        assert "You: hi" in log
        assert "Weaver: hello back" in log
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
        input_widget = app.query_one("#input", Input)
        first = asyncio.create_task(
            app.on_input_submitted(Input.Submitted(input_widget, "first"))
        )
        await asyncio.sleep(0.1)  # first handler reaches the gate

        await app.on_input_submitted(Input.Submitted(input_widget, "second"))

        assert stub.sent == [("conv-1", "first")]  # second was refused
        assert "(still thinking…)" in _log_text(app)

        stub.gate.set()
        await first
        await pilot.pause()
