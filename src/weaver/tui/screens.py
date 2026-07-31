"""Run history screen for the chat TUI (Plan 010 Phase D).

A dumb view: it receives already-fetched entries and renders them.
Escape or q closes. The app fetches entries through the session seam
(list_recent_turns), so this module never touches the repository.
"""

from __future__ import annotations

from rich.markup import escape
from textual.app import ComposeResult
from textual.binding import Binding
from textual.screen import Screen
from textual.widgets import Header, RichLog


class RunHistoryScreen(Screen[None]):
    """Recent runs of the current conversation."""

    BINDINGS = [
        Binding("escape", "dismiss", "Close", show=False),
        Binding("q", "dismiss", "Close", show=False),
    ]

    def __init__(self, entries: list[dict]) -> None:
        super().__init__()
        self._entries = entries

    def compose(self) -> ComposeResult:
        yield Header(show_clock=False)
        log = RichLog(highlight=False, markup=True, wrap=True)
        if not self._entries:
            log.write("[dim]no runs yet[/dim]")
        for entry in self._entries:
            log.write(
                f"[dim]{entry['created_at'][11:19]}[/dim] "
                f"{entry['status']} · {escape(entry['owner_text'][:60])}"
            )
        yield log
