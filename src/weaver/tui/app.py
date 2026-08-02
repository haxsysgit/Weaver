"""Weaver chat TUI.

Plan 010: one App class, thin widgets. The TUI is the attachment point
for later plans (Plan 011, memory plans) — keep it thin: send + render.

Phase A (pi-shaped screen): no Header chrome (pi has none); the mode/model
live in a one-line StatusBar under the input with a spinner while a turn
runs; a single welcome line appears at start and is cleared by the first
submit; the CLI prints a session line at exit.

Phase B: live text deltas render in a hidden stream area while the model
works; the final message lands in the log and the area hides again.

Phase C: multi-line TextArea input (enter submits, shift+enter inserts a
newline, pi-style), markdown rendering for replies, and conversation
resume: ^r opens a picker of recent conversations (switch by selecting),
^n starts a fresh one.

Cancellation contract (Plan 010 §4): Ctrl+C sets the in-flight turn's
cancel event, never task.cancel(). The turn settles through the runner's
interrupt path and the run is marked interrupted.
"""

from __future__ import annotations

import asyncio
import logging

from rich.markdown import Markdown
from rich.markup import escape
from rich.theme import Theme
from textual.app import App, ComposeResult
from textual.binding import Binding
from textual.widgets import RichLog, Static, TextArea

from weaver.agent.turn import TurnResult
from weaver.conversation.session import SessionWeave, TranscriptMessage
from weaver.tui.screens import (
    CancellationRecoveryScreen,
    ConversationPickerScreen,
    KeyHelpScreen,
    RunHistoryScreen,
)
from weaver.tui.widgets import (
    OWNER_LABEL,
    WEAVER_LABEL,
    ChatInput,
    StatusBar,
    welcome_line,
)

logger = logging.getLogger(__name__)

WEAVER_MARKDOWN_THEME = Theme(
    {
        "markdown.h1": "bold underline #d3dcdd",
        "markdown.h2": "bold #d3dcdd",
        "markdown.h3": "bold #b8cacc",
        "markdown.h4": "italic #b8cacc",
        "markdown.h5": "#b8cacc",
        "markdown.h6": "#95a6a8",
    }
)


class WeaverChat(App[None]):
    """Pi-shaped chat window: RichLog history, TextArea, one-line StatusBar.

    Small role labels and spacing keep owner messages separate from Weaver
    replies. Replies render as markdown and status lines stay dim.
    """

    CSS = """
    Screen {
        background: #101719;
    }
    #chat-log {
        height: 1fr;
        padding: 1 0;
        background: #101719;
        scrollbar-color: #5f858a;
        scrollbar-color-hover: #7da6ab;
        scrollbar-color-active: #8fb8bd;
    }
    #stream {
        height: auto;
        max-height: 6;
        margin: 1 2 0 2;
        padding: 0 1;
        color: #d3dcdd;
    }
    #input {
        height: 3;
        min-height: 3;
        max-height: 8;
        border: round #34484c;
        background: #182225;
        color: #e0e7e8;
        scrollbar-color: #5f858a;
    }
    #input:focus {
        border: round #8fb8bd;
        background: #1b282b;
    }
    StatusBar {
        height: 1;
        padding: 0 1;
        color: #95a6a8;
        background: #101719;
    }
    """

    BINDINGS = [
        # Plan 010 §4: Ctrl+C cancels the in-flight turn instead of quitting.
        # priority=True so it beats the focused Input's ctrl+c copy binding
        # (copy stays available via the terminal's own ctrl+shift+c).
        # Overrides Textual's base ctrl+c -> help_quit; ctrl+q stays as the
        # priority quit binding from the App base class.
        Binding("ctrl+c", "cancel_turn", "Cancel", show=False, priority=True),
        Binding("ctrl+t", "show_history", "History", show=False),
        # Plan 010 Phase C: resume (^r) and new conversation (^n).
        Binding("ctrl+r", "resume", "Resume", show=False),
        Binding("ctrl+n", "new_conversation", "New", show=False),
        # Enter submits. Non-priority: ChatInput never consumes enter (its
        # _on_key lets it bubble), so the app binding fires on the chat
        # screen; on the picker screen the focused ListView's enter binding
        # wins because non-priority bindings are checked from the focused
        # widget up.
        Binding("enter", "submit_turn", "Send", show=False),
        # Ctrl+J is the distinct raw terminal byte for a guaranteed newline.
        Binding("ctrl+j", "newline", "New line", show=False, priority=True),
        # Shift+Enter inserts a newline instead of submitting; terminals
        # without the extended keyboard protocol can't report it, in which
        # case the binding simply never fires (same tradeoff as pi).
        Binding("shift+enter", "newline", "New line", show=False),
        Binding("f1", "show_help", "Help", show=False),
        Binding("ctrl+q", "quit", "Quit", show=False, priority=True),
    ]

    def __init__(
        self,
        session_weave: SessionWeave,
        conversation_id: str,
        mode_label: str = "fake",
    ) -> None:
        super().__init__()
        self._sw = session_weave
        self._conv_id = conversation_id
        self._mode_label = mode_label
        self._cancel_event: asyncio.Event | None = None
        self._send_in_flight = False
        self._welcome_shown = False

    def compose(self) -> ComposeResult:
        yield RichLog(id="chat-log", highlight=True, markup=True, wrap=True)
        # Phase B: live text deltas render here while the model streams;
        # on completion the final message lands in the log and this area
        # hides again (it never holds persisted state).
        stream = Static(id="stream", markup=True)
        stream.display = False
        yield stream
        # Phase C: multi-line input. Enter submits (App binding), shift+
        # enter inserts a newline (see BINDINGS and ChatInput).
        yield ChatInput(id="input")
        yield StatusBar(self._mode_label)

    async def on_mount(self) -> None:
        self.console.push_theme(WEAVER_MARKDOWN_THEME)
        self.query_one("#input", TextArea).focus()
        await self._redraw_current_transcript()

    def action_cancel_turn(self) -> None:
        """Ctrl+C: cancel the in-flight turn, or clear the input when idle.

        pi-style: with nothing running, ctrl+c clears the editor (pi's
        app.clear); with a turn in flight it sets the cancel event and the
        turn settles cooperatively.
        """
        if self._cancel_event is not None and not self._cancel_event.is_set():
            self._cancel_event.set()
            self._log("(cancelling…)")
            return
        self.query_one("#input", TextArea).clear()

    async def action_submit_turn(self) -> None:
        """Enter: submit the input, or ignore when empty or already busy.

        The guard returns before touching the input, so text typed while a
        turn runs is never lost (same contract as Phase A).
        """
        textarea = self.query_one("#input", TextArea)
        if self.focused is not textarea:
            # Enter elsewhere (e.g. the history screen) must not submit.
            # Note: widget.has_focus is per-screen (a hidden widget keeps
            # its screen's focus slot), so the global app.focused is the
            # right check.
            return
        text = textarea.text.strip()
        if not text:
            return
        if self._send_in_flight:
            self._log("(still thinking…)")
            return
        textarea.clear()
        welcome_was_shown = self._welcome_shown
        if welcome_was_shown:
            # pi-style: the startup line disappears with the first submit.
            self.query_one("#chat-log", RichLog).clear()
            self._welcome_shown = False

        # Keep the owner message visually distinct from the model response.
        # Raw provider reasoning is never part of this presentation path.
        self._start_role("owner", add_spacing=not welcome_was_shown)
        self._log(f"[dim italic]{escape(text)}[/dim italic]")
        self._send_in_flight = True
        self._cancel_event = asyncio.Event()
        self._stream_text = ""
        self._stream_widget().display = False
        self.query_one(StatusBar).set_busy(True)
        try:
            result = await self._sw.send(
                self._conv_id,
                text,
                cancel_event=self._cancel_event,
                on_delta=self._on_delta,
            )
            self._show_result(result)
            # Phase D: context meter on the footer after each turn.
            self.query_one(StatusBar).set_context(
                result.token_count, result.token_budget
            )
            if result.exit_reason == "interrupted" and result.turn_id:
                await self.push_screen(
                    CancellationRecoveryScreen(),
                    callback=self._on_recovery_choice,
                )
        finally:
            self._send_in_flight = False
            self._cancel_event = None
            self.query_one(StatusBar).set_busy(False)
            self._stream_text = ""
            self._stream_widget().display = False
            self.query_one("#input", TextArea).focus()

    def action_newline(self) -> None:
        """Shift+Enter: insert a newline without submitting (pi-style)."""
        textarea = self.query_one("#input", TextArea)
        if self.focused is textarea:
            textarea.insert("\n")

    async def action_resume(self) -> None:
        """Ctrl+R: pick a recent conversation to switch to."""
        if self._send_in_flight:
            return
        entries = await self._sw.list_conversations(limit=12)
        await self.push_screen(
            ConversationPickerScreen(entries, current_id=self._conv_id),
            callback=self._on_pick_conversation,
        )

    async def _on_pick_conversation(self, conv_id: str | None) -> None:
        """Switch the active conversation; ignore no-op or cancelled picks."""
        if conv_id is None:
            self._focus_composer()
            return
        if not await self._sw.conversation_exists(conv_id):
            self._log("[dim]that chat no longer exists[/dim]")
            self._focus_composer()
            return
        self._conv_id = conv_id
        await self._redraw_current_transcript()
        self._focus_composer()

    async def action_new_conversation(self) -> None:
        """Ctrl+N: start a fresh conversation and switch to it."""
        if self._send_in_flight:
            return
        await self._start_new_conversation()

    async def _start_new_conversation(self) -> None:
        conv_id = await self._sw.start_conversation("")
        self._conv_id = conv_id
        await self._redraw_current_transcript()
        self._focus_composer()

    async def action_show_history(self) -> None:
        """Ctrl+T: fetch recent runs and show them; escape/q closes."""
        if self._send_in_flight:
            return
        entries = await self._sw.list_recent_turns(self._conv_id, limit=12)
        await self.push_screen(
            RunHistoryScreen(entries),
            callback=self._on_overlay_closed,
        )

    async def action_show_help(self) -> None:
        """F1: show the complete terminal-safe key reference."""
        await self.push_screen(KeyHelpScreen(), callback=self._on_overlay_closed)

    async def _on_recovery_choice(self, choice: str | None) -> None:
        if choice == "new":
            await self._start_new_conversation()
        elif choice == "choose":
            await self.action_resume()
        else:
            self._focus_composer()

    def _on_overlay_closed(self, _: None) -> None:
        self._focus_composer()

    def _focus_composer(self) -> None:
        self.query_one("#input", TextArea).focus()

    async def _redraw_current_transcript(self) -> None:
        transcript = await self._sw.load_transcript(self._conv_id)
        log = self.query_one("#chat-log", RichLog)
        log.clear()
        if not transcript:
            self._log(welcome_line(self._mode_label))
            self._welcome_shown = True
            return

        self._welcome_shown = False
        self._draw_transcript(transcript)

    def _draw_transcript(self, transcript: list[TranscriptMessage]) -> None:
        for index, message in enumerate(transcript):
            self._start_role(message["role"], add_spacing=index > 0)
            if message["role"] == "owner":
                self._log(
                    f"[dim italic]{escape(message['content'])}[/dim italic]"
                )
            else:
                self._log(Markdown(message["content"]))

    async def _on_delta(self, delta: str) -> None:
        """Append a live chunk to the stream area (preview only)."""
        self._stream_text += delta
        # ponytail: re-escaping the whole buffer per chunk is O(n²) in
        # reply length; fine at chat scale, switch to a text object with
        # append if long replies ever show up.
        widget = self._stream_widget()
        widget.display = True
        widget.update(f"{WEAVER_LABEL}\n{escape(self._stream_text)}")

    def _stream_widget(self) -> Static:
        return self.query_one("#stream", Static)

    def _show_result(self, result: TurnResult) -> None:
        self._start_role("weaver")
        if result.final_text:
            # Phase C: replies render as markdown (plain text renders as
            # plain text, so fake-mode scripted replies look the same).
            self._log(Markdown(result.final_text))
        elif result.exit_reason == "interrupted" and result.turn_id:
            # Real cancel: turn_id is set. A refused send (interrupted run
            # exists) carries an empty turn_id and must show its message.
            self._log("(cancelled)")
        elif result.safe_failure:
            self._log(f"({result.exit_reason}: {escape(result.safe_failure)})")
        else:
            self._log(f"({result.exit_reason})")

    def _log(self, text: str | Markdown) -> None:
        self.query_one("#chat-log", RichLog).write(text)

    def _start_role(self, role: str, *, add_spacing: bool = True) -> None:
        """Open a clearly labelled transcript block for one speaker."""
        if add_spacing:
            self._log("")
        label = OWNER_LABEL if role == "owner" else WEAVER_LABEL
        self._log(label)
