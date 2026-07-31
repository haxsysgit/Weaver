"""Weaver chat TUI.

Plan 010: one file, one App class, three widgets, no streaming, no
markdown. The TUI is the attachment point for later plans (Plan 011,
memory plans) — keep it thin: send + render.

Cancellation contract (Plan 010 §4): Ctrl+C sets the in-flight turn's
cancel event, never task.cancel(). The turn settles through the runner's
interrupt path and the run is marked interrupted.
"""

from __future__ import annotations

import asyncio
import logging

from rich.markup import escape
from textual.app import App, ComposeResult
from textual.binding import Binding
from textual.widgets import Footer, Header, Input, RichLog

from weaver.agent.turn import TurnResult
from weaver.conversation.session import SessionWeave

logger = logging.getLogger(__name__)


class WeaverChat(App[None]):
    """Minimal chat window: Header, RichLog history, Input, Footer."""

    BINDINGS = [
        # Plan 010 §4: Ctrl+C cancels the in-flight turn instead of quitting.
        # Overrides Textual's base ctrl+c -> help_quit; ctrl+q stays as the
        # priority quit binding from the App base class.
        Binding("ctrl+c", "cancel_turn", "Cancel", show=False),
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

    def compose(self) -> ComposeResult:
        yield Header(show_clock=True)
        yield RichLog(id="chat-log", highlight=True, markup=True, wrap=True)
        yield Input(id="input", placeholder="Type a message...")
        yield Footer()

    def on_mount(self) -> None:
        self.sub_title = f"Weaver — {self._mode_label}"
        self.query_one("#input", Input).focus()

    def action_cancel_turn(self) -> None:
        """Ctrl+C: set the cancel event; the turn settles cooperatively."""
        if self._cancel_event is not None and not self._cancel_event.is_set():
            self._cancel_event.set()
            self._log("(cancelling…)")

    async def on_input_submitted(self, event: Input.Submitted) -> None:
        text = event.value.strip()
        if not text:
            return
        if self._send_in_flight:
            # One turn at a time: the input stays enabled so typing is not
            # lost, but a second Enter must not race the in-flight send.
            self._log("(still thinking…)")
            return
        event.input.clear()

        self._log(f"[bold]You:[/bold] {escape(text)}")
        self._send_in_flight = True
        self._cancel_event = asyncio.Event()
        try:
            result = await self._sw.send(
                self._conv_id,
                text,
                cancel_event=self._cancel_event,
            )
            self._show_result(result)
        finally:
            self._send_in_flight = False
            self._cancel_event = None
            self.query_one("#input", Input).focus()

    def _show_result(self, result: TurnResult) -> None:
        if result.final_text:
            self._log(f"[bold]Weaver:[/bold] {escape(result.final_text)}")
        elif result.exit_reason == "interrupted" and result.turn_id:
            # Real cancel: turn_id is set. A refused send (interrupted run
            # exists) carries an empty turn_id and must show its message.
            self._log("(cancelled)")
        elif result.safe_failure:
            self._log(f"({result.exit_reason}: {escape(result.safe_failure)})")
        else:
            self._log(f"({result.exit_reason})")

    def _log(self, text: str) -> None:
        self.query_one("#chat-log", RichLog).write(text)
