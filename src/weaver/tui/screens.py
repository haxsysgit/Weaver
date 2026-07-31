"""Screens for the chat TUI (Plan 010 Phase C + D).

Both screens are dumb views: they receive already-fetched entries and
render them, and never touch the repository. The app fetches through the
session seam (list_recent_turns / list_conversations).
"""

from __future__ import annotations

from rich.markup import escape
from textual.app import ComposeResult
from textual.binding import Binding
from textual.screen import Screen
from textual.widgets import Header, Label, ListItem, ListView, RichLog


class ConversationPickerScreen(Screen[str | None]):
    """Recent conversations; enter picks one, escape/q closes.

    Dismisses with the picked conversation id (or None when cancelled).
    The current conversation is marked with a leading dot.
    """

    BINDINGS = [
        Binding("escape", "dismiss", "Close", show=False),
        Binding("q", "dismiss", "Close", show=False),
    ]

    def __init__(self, entries: list[dict], current_id: str | None = None) -> None:
        super().__init__()
        self._entries = entries
        self._current_id = current_id

    def compose(self) -> ComposeResult:
        yield Header(show_clock=False)
        if not self._entries:
            yield ListView(ListItem(Label("[dim]no conversations yet[/dim]")))
            return
        items = []
        for entry in self._entries:
            conv_id = entry["conversation_id"]
            when = entry["created_at"][11:19]
            preview = entry.get("last_owner_text", "")[:60]
            marker = "· " if conv_id == self._current_id else ""
            label = escape(f"{preview}") if preview else "[dim](empty)[/dim]"
            items.append(ListItem(Label(f"[dim]{marker}{when}[/dim] {label}")))
        yield ListView(*items)

    def on_mount(self) -> None:
        """Grab focus so enter/escape go to the list, not the chat input."""
        self.query_one(ListView).focus()

    def on_list_view_selected(self, event: ListView.Selected) -> None:
        """Enter or mouse click on an item: dismiss with its id."""
        index = event.list_view.index
        if index is None or index >= len(self._entries):
            self.dismiss(None)
            return
        self.dismiss(self._entries[index]["conversation_id"])


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
