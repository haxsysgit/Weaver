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

from rich.color import ColorTriplet
from textual._xterm_parser import XTermParser
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
    assert "enter send" in text
    assert "^j newline" in text
    assert "f1 help" in text
    assert all(frame not in text for frame in SPINNER_FRAMES)


def test_welcome_line_mentions_mode_and_hints():
    line = welcome_line("fake")
    assert "fake" in line
    assert "enter sends" in line
    assert "f1 shows every key" in line


def test_status_text_busy_has_cancel_hint():
    text = status_text("fake", busy=True)
    assert "^c cancel" in text
    assert "^q quit" in text
    assert "enter send" not in text


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
        self.transcripts: dict[str, list[dict]] = {
            "conv-1": [],
            "conv-new": [],
        }
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

    async def load_transcript(self, conversation_id):
        return list(self.transcripts[conversation_id])

    async def conversation_exists(self, conversation_id):
        return conversation_id in self.transcripts


def _log_text(node) -> str:
    """Plain text of everything currently in the node's RichLog."""
    log = node.query_one(RichLog)
    return " ".join(str(strip.text) for strip in log.lines)


def _log_lines(node) -> list[str]:
    """Rendered transcript lines, including deliberate blank spacing."""
    log = node.query_one(RichLog)
    return [str(strip.text).rstrip() for strip in log.lines]


def _chat_log_lines(app: WeaverChat) -> list[str]:
    """Main transcript lines even when a recovery overlay is active."""
    log = app.query_one("#chat-log", RichLog)
    return [str(strip.text).rstrip() for strip in log.lines]


async def _open_chat(stub: _StubSession, mode: str = "fake"):
    app = WeaverChat(stub, "conv-1", mode_label=mode)  # type: ignore[arg-type]
    async with app.run_test() as pilot:
        yield app, pilot


def _raw_key_names(raw_input: str) -> list[str]:
    """Parse the same bytes a terminal driver gives Textual."""
    parser = XTermParser()
    messages = [*parser.feed(raw_input), *parser.tick()]
    return [message.key for message in messages if hasattr(message, "key")]


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
        assert "OWNER" in log
        assert "hi" in log
        assert "WEAVER" in log
        assert "hello back" in log

        rendered_lines = _log_lines(app)
        assert rendered_lines.index("OWNER") < rendered_lines.index("hi")
        assert rendered_lines.index("hi") < rendered_lines.index("WEAVER")
        assert rendered_lines.index("WEAVER") < rendered_lines.index("hello back")
        assert "" in rendered_lines[
            rendered_lines.index("hi") + 1 : rendered_lines.index("WEAVER")
        ]


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
        await pilot.pause()
        assert input_widget.region.height == 3


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
        assert "WEAVER" in str(stream.content)
        assert "hello " in str(stream.content)  # markup source, text is plain
        assert stub.streamed == ["hello "]  # mid-turn: send not done

        stub.gate.set()
        await task
        await pilot.pause()

        log = _log_text(app)
        assert "OWNER" in log
        assert "hi" in log
        assert "WEAVER" in log
        assert "hello back" in log
        assert stream.display is False


async def test_persisted_transcript_keeps_roles_clear_at_supported_sizes():
    transcript = [
        {
            "message_id": "m-owner",
            "turn_id": "t-1",
            "role": "owner",
            "content": "owner message",
            "created_at": "2026-08-02T10:00:00",
        },
        {
            "message_id": "m-weaver",
            "turn_id": "t-1",
            "role": "weaver",
            "content": "Weaver response",
            "created_at": "2026-08-02T10:00:01",
        },
    ]

    for terminal_size in ((80, 24), (120, 36)):
        stub = _StubSession()
        stub.transcripts["conv-1"] = transcript
        app = WeaverChat(stub, "conv-1")  # type: ignore[arg-type]

        async with app.run_test(size=terminal_size) as pilot:
            await pilot.pause()
            rendered_lines = _log_lines(app)

            assert rendered_lines.index("OWNER") < rendered_lines.index(
                "owner message"
            )
            assert rendered_lines.index("owner message") < rendered_lines.index(
                "WEAVER"
            )
            assert rendered_lines.index("WEAVER") < rendered_lines.index(
                "Weaver response"
            )
            assert "" in rendered_lines[
                rendered_lines.index("owner message")
                + 1 : rendered_lines.index("WEAVER")
            ]


async def test_markdown_reply_wraps_without_horizontal_scroll_at_supported_sizes():
    long_reply = (
        "Weaver keeps the complete response readable when the terminal wraps "
        "this deliberately long model sentence without clipping any words."
    )

    for terminal_size in ((80, 24), (120, 36)):
        stub = _StubSession()
        stub.scripted = TurnResult(
            turn_id="t-wrap",
            exit_reason=TurnExitReason.COMPLETED,
            final_text=long_reply,
        )
        app = WeaverChat(stub, "conv-1")  # type: ignore[arg-type]

        async with app.run_test(size=terminal_size) as pilot:
            await _submit(app, "wrap this reply")
            await pilot.pause()

            transcript = app.query_one("#chat-log", RichLog)
            assert transcript.max_scroll_x == 0
            assert "without clipping any words." in _log_text(app)


async def test_markdown_heading_uses_readable_weaver_colour():
    stub = _StubSession()
    stub.scripted = TurnResult(
        turn_id="t-heading",
        exit_reason=TurnExitReason.COMPLETED,
        final_text="## Visible heading\n\nBody text",
    )
    app = WeaverChat(stub, "conv-1")  # type: ignore[arg-type]

    async with app.run_test(size=(80, 24)) as pilot:
        await _submit(app, "heading contrast check")
        await pilot.pause()

        transcript = app.query_one("#chat-log", RichLog)
        heading_line = next(
            line for line in transcript.lines if str(line.text).strip() == "Visible heading"
        )
        heading_segment = next(
            segment for segment in heading_line._segments if segment.text.strip()
        )
        assert heading_segment.style.color is not None
        assert heading_segment.style.color.triplet == ColorTriplet(211, 220, 221)
        assert heading_segment.style.bold


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


def test_status_text_includes_context_and_idle_hints():
    from weaver.tui.widgets import status_text

    text = status_text("live deepseek-v4-flash", busy=False, context="40%")
    assert "ctx 40%" in text
    assert "enter send" in text
    assert "^j newline" in text
    assert "f1 help" in text


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


def test_raw_terminal_control_bytes_map_to_audited_keys():
    assert _raw_key_names("\x0a") == ["ctrl+j"]
    assert _raw_key_names("\x14") == ["ctrl+t"]
    assert _raw_key_names("\x08") == ["backspace"]
    assert _raw_key_names("\x12") == ["ctrl+r"]
    assert _raw_key_names("\x0e") == ["ctrl+n"]
    assert _raw_key_names("\x03") == ["ctrl+c"]
    assert _raw_key_names("\x11") == ["ctrl+q"]
    assert _raw_key_names("\x1bOP") == ["f1"]


async def test_pilot_ctrl_t_opens_history_screen_and_esc_closes():
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
        # Real keypress: proves ctrl+t dispatches to show_history.
        await pilot.press("ctrl+t")
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


async def test_pilot_ctrl_j_inserts_guaranteed_newline():
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        bound = app.active_bindings["ctrl+j"].binding
        assert bound.action == "newline"

        textarea = app.query_one("#input", TextArea)
        textarea.text = "line one"
        textarea.move_cursor((0, len("line one")))
        await pilot.press("ctrl+j")
        await pilot.pause()

        assert textarea.text == "line one\n"
        assert stub.sent == []


async def test_multiline_submit_sends_full_text_and_clears():
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        await _submit(app, "line one\nline two\n")
        await pilot.pause()

        assert stub.sent == [("conv-1", "line one\nline two")]
        assert app.query_one("#input", TextArea).text == ""
        assert app.query_one("#input", TextArea).region.height == 3


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
    stub.transcripts["conv-1"] = [
        {
            "message_id": "m-1",
            "turn_id": "t-1",
            "role": "owner",
            "content": "old visible chat",
            "created_at": "2026-07-31T16:00:00",
        }
    ]
    stub.transcripts["conv-2"] = [
        {
            "message_id": "m-2",
            "turn_id": "t-2",
            "role": "owner",
            "content": "selected owner message",
            "created_at": "2026-07-31T17:00:00",
        },
        {
            "message_id": "m-3",
            "turn_id": "t-2",
            "role": "weaver",
            "content": "selected Weaver reply",
            "created_at": "2026-07-31T17:00:01",
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

        visible_log = _log_text(app)
        assert "selected owner message" in visible_log
        assert "selected Weaver reply" in visible_log
        assert "old visible chat" not in visible_log
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


async def test_pilot_ctrl_r_current_chat_redraws_canonical_transcript():
    stub = _StubSession()
    stub.conversations = [
        {
            "conversation_id": "conv-1",
            "created_at": "2026-07-31T16:00:00",
            "last_owner_text": "canonical owner message",
        }
    ]
    stub.transcripts["conv-1"] = [
        {
            "message_id": "m-canonical",
            "turn_id": "t-canonical",
            "role": "owner",
            "content": "canonical owner message",
            "created_at": "2026-07-31T16:00:00",
        }
    ]
    async for app, pilot in _open_chat(stub):
        app._log("TRANSIENT_UI_CANARY")
        assert "TRANSIENT_UI_CANARY" in _log_text(app)

        await pilot.press("ctrl+r")
        await pilot.pause()
        await pilot.press("enter")
        await pilot.pause()

        assert "canonical owner message" in _log_text(app)
        assert "TRANSIENT_UI_CANARY" not in _log_text(app)


async def test_pilot_ctrl_n_starts_new_conversation():
    stub = _StubSession()
    stub.transcripts["conv-1"] = [
        {
            "message_id": "m-old",
            "turn_id": "t-old",
            "role": "weaver",
            "content": "old reply must disappear",
            "created_at": "2026-07-31T16:00:00",
        }
    ]
    async for app, pilot in _open_chat(stub):
        bound = app.active_bindings["ctrl+n"].binding
        assert bound.action == "new_conversation"

        await pilot.press("ctrl+n")
        await pilot.pause()

        assert stub.started == [""]
        visible_log = _log_text(app)
        assert "old reply must disappear" not in visible_log
        assert "Weaver chat" in visible_log
        # Routing is observable: the next submit goes to the fresh
        # conversation.
        await _submit(app, "fresh start")
        await pilot.pause()
        assert stub.sent == [("conv-new", "fresh start")]


async def test_composer_grows_wraps_clamps_and_clears_at_both_sizes():
    for terminal_size in ((80, 24), (120, 36)):
        stub = _StubSession()
        app = WeaverChat(stub, "conv-1")  # type: ignore[arg-type]
        async with app.run_test(size=terminal_size) as pilot:
            composer = app.query_one("#input", TextArea)
            assert composer.region.height == 3

            composer.text = "one\ntwo\nthree"
            await pilot.pause()
            assert composer.region.height == 5

            composer.text = "\n".join(f"line {index}" for index in range(12))
            await pilot.pause()
            assert composer.region.height == 8
            assert composer.virtual_size.height > composer.content_size.height

            composer.clear()
            await pilot.pause()
            assert composer.region.height == 3

            wrap_width = composer.wrap_width
            composer.text = "x" * (wrap_width + 4)
            await pilot.pause()
            assert composer.region.height == 4


async def test_f1_opens_complete_key_help_and_returns_focus():
    from weaver.tui.screens import KeyHelpScreen

    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        await pilot.press("f1")
        await pilot.pause()

        assert isinstance(app.screen, KeyHelpScreen)
        help_text = _log_text(app.screen)
        for expected in (
            "Enter",
            "Ctrl+J",
            "Ctrl+T",
            "Ctrl+R",
            "Ctrl+N",
            "Ctrl+C",
            "Ctrl+Q",
            "F1",
            "Escape",
            "q            close overlay",
        ):
            assert expected in help_text

        await pilot.press("escape")
        await pilot.pause()
        assert app.focused is app.query_one("#input", TextArea)


async def test_cancelled_turn_opens_recovery_actions_without_retry():
    from weaver.tui.screens import CancellationRecoveryScreen

    stub = _StubSession()
    stub.scripted = TurnResult(
        turn_id="t-interrupted",
        exit_reason=TurnExitReason.INTERRUPTED,
        final_text="",
    )
    async for app, pilot in _open_chat(stub):
        await _submit(app, "cancelled owner message")
        await pilot.pause()

        assert isinstance(app.screen, CancellationRecoveryScreen)
        transcript_lines = _chat_log_lines(app)
        assert transcript_lines.index("OWNER") < transcript_lines.index(
            "cancelled owner message"
        )
        assert transcript_lines.index(
            "cancelled owner message"
        ) < transcript_lines.index("WEAVER")
        assert transcript_lines.index("WEAVER") < transcript_lines.index(
            "(cancelled)"
        )
        recovery_text = _log_text(app.screen)
        assert "Start new chat" in recovery_text
        assert "Choose another chat" in recovery_text
        assert "Escape" in recovery_text
        assert "retry" not in recovery_text.lower()
        assert "continue" not in recovery_text.lower()

        await pilot.press("escape")
        await pilot.pause()
        assert app._conv_id == "conv-1"
        assert app.focused is app.query_one("#input", TextArea)


async def test_safe_failure_renders_inside_a_weaver_role_block():
    stub = _StubSession()
    stub.scripted = TurnResult(
        turn_id="t-failed",
        exit_reason=TurnExitReason.MODEL_FAILED,
        safe_failure="model unavailable",
    )

    async for app, pilot in _open_chat(stub):
        await _submit(app, "owner failure check")
        await pilot.pause()

        transcript_lines = _chat_log_lines(app)
        assert transcript_lines.index("OWNER") < transcript_lines.index(
            "owner failure check"
        )
        owner_message_index = transcript_lines.index("owner failure check")
        weaver_label_index = transcript_lines.index("WEAVER")
        safe_failure_index = transcript_lines.index(
            "(TurnExitReason.MODEL_FAILED: model unavailable)"
        )
        assert owner_message_index < weaver_label_index
        assert weaver_label_index < safe_failure_index


async def test_recovery_start_new_chat_clears_interrupted_transcript():
    from weaver.tui.screens import CancellationRecoveryScreen

    stub = _StubSession()
    stub.scripted = TurnResult(
        turn_id="t-interrupted",
        exit_reason=TurnExitReason.INTERRUPTED,
        final_text="",
    )
    async for app, pilot in _open_chat(stub):
        await _submit(app, "interrupted message")
        await pilot.pause()
        assert isinstance(app.screen, CancellationRecoveryScreen)

        await pilot.press("enter")
        await pilot.pause()

        assert stub.started == [""]
        assert app._conv_id == "conv-new"
        assert "interrupted message" not in _log_text(app)
        assert "Weaver chat" in _log_text(app)


async def test_overlays_fit_and_return_focus_at_supported_terminal_sizes():
    from weaver.tui.screens import ConversationPickerScreen, KeyHelpScreen

    for terminal_size in ((80, 24), (120, 36)):
        stub = _StubSession()
        stub.conversations = [
            {
                "conversation_id": "conv-1",
                "created_at": "2026-07-31T16:00:00",
                "last_owner_text": "current chat",
            }
        ]
        app = WeaverChat(stub, "conv-1")  # type: ignore[arg-type]
        async with app.run_test(size=terminal_size) as pilot:
            await pilot.press("ctrl+r")
            await pilot.pause()
            assert isinstance(app.screen, ConversationPickerScreen)
            assert app.screen.region.size == terminal_size

            await pilot.press("escape")
            await pilot.pause()
            assert app.focused is app.query_one("#input", TextArea)

            await pilot.press("f1")
            await pilot.pause()
            assert isinstance(app.screen, KeyHelpScreen)
            assert app.screen.region.size == terminal_size
            assert "Ctrl+J" in _log_text(app.screen)

            await pilot.press("escape")
            await pilot.pause()
            assert app.focused is app.query_one("#input", TextArea)


async def test_overlay_panels_fit_content_instead_of_filling_height_cap():
    from weaver.tui.screens import CancellationRecoveryScreen, KeyHelpScreen

    for terminal_size in ((80, 24), (120, 36)):
        stub = _StubSession()
        stub.recent_turns = [
            {
                "run_id": "r-1",
                "created_at": "2026-07-31T16:00:00",
                "status": "completed",
                "owner_text": "one short turn",
            }
        ]
        app = WeaverChat(stub, "conv-1")  # type: ignore[arg-type]
        async with app.run_test(size=terminal_size) as pilot:
            await app.push_screen(KeyHelpScreen())
            await pilot.pause()
            assert app.screen.query_one(".overlay-panel").region.height <= 18

            await pilot.press("escape")
            await pilot.press("ctrl+t")
            await pilot.pause()
            assert app.screen.query_one(".overlay-panel").region.height <= 9

            await pilot.press("escape")
            await app.push_screen(CancellationRecoveryScreen())
            await pilot.pause()
            assert app.screen.query_one(".overlay-panel").region.height <= 12


async def test_pilot_role_labels_separate_consecutive_turns():
    stub = _StubSession()
    async for app, pilot in _open_chat(stub):
        await _submit(app, "first turn")
        await pilot.pause()
        await _submit(app, "second turn")
        await pilot.pause()

        visible_log = _log_text(app)
        assert visible_log.count("OWNER") == 2
        assert visible_log.count("WEAVER") == 2
