"""Compact overlays for the Plan 010 developer console.

Both screens are dumb views: they receive already-fetched entries and
render them, and never touch the repository. The app fetches through the
session seam (list_recent_turns / list_conversations).
"""

from __future__ import annotations

from rich.markup import escape
from textual.app import ComposeResult
from textual.binding import Binding
from textual.screen import Screen
from textual.containers import Vertical
from textual.widgets import Label, ListItem, ListView, RichLog


OVERLAY_CSS = """
Screen {
    align: center middle;
    background: $background 70%;
}

.overlay-panel {
    width: 76;
    max-width: 92%;
    height: auto;
    max-height: 80%;
    border: round #5f858a;
    background: $surface;
    padding: 1 2;
}

.overlay-title {
    color: #8fb8bd;
    text-style: bold;
    margin-bottom: 1;
}

.overlay-list {
    height: auto;
    max-height: 16;
}

.overlay-log {
    height: auto;
    max-height: 16;
}
"""


class ConversationPickerScreen(Screen[str | None]):
    """Recent conversations; enter picks one, escape/q closes.

    Dismisses with the picked conversation id (or None when cancelled).
    The current conversation is marked with a leading dot.
    """

    BINDINGS = [
        Binding("escape", "dismiss", "Close", show=False),
        Binding("q", "dismiss", "Close", show=False),
    ]
    CSS = OVERLAY_CSS

    def __init__(self, entries: list[dict], current_id: str | None = None) -> None:
        super().__init__()
        self._entries = entries
        self._current_id = current_id

    def compose(self) -> ComposeResult:
        items: list[ListItem] = []
        if not self._entries:
            items.append(ListItem(Label("[dim]no chats yet[/dim]")))
        for entry in self._entries:
            conv_id = entry["conversation_id"]
            when = entry["created_at"][11:19]
            preview = entry.get("last_owner_text", "")[:60]
            marker = "· " if conv_id == self._current_id else ""
            label = escape(preview) if preview else "[dim](empty)[/dim]"
            items.append(ListItem(Label(f"[dim]{marker}{when}[/dim] {label}")))
        with Vertical(classes="overlay-panel"):
            yield Label("Choose chat", classes="overlay-title")
            yield ListView(*items, classes="overlay-list")

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
    CSS = OVERLAY_CSS

    def __init__(self, entries: list[dict]) -> None:
        super().__init__()
        self._entries = entries

    def compose(self) -> ComposeResult:
        log = RichLog(
            highlight=False,
            markup=True,
            wrap=True,
            classes="overlay-log",
        )
        if not self._entries:
            log.write("[dim]no runs yet[/dim]")
        for entry in self._entries:
            log.write(
                f"[dim]{entry['created_at'][11:19]}[/dim] "
                f"{entry['status']} · {escape(entry['owner_text'][:60])}"
            )
        with Vertical(classes="overlay-panel"):
            yield Label("Turn history", classes="overlay-title")
            yield log


class KeyHelpScreen(Screen[None]):
    """Complete key reference for the developer console."""

    BINDINGS = [
        Binding("escape", "dismiss", "Close", show=False),
        Binding("q", "dismiss", "Close", show=False),
        Binding("f1", "dismiss", "Close", show=False),
    ]
    CSS = OVERLAY_CSS

    def compose(self) -> ComposeResult:
        log = RichLog(
            highlight=False,
            markup=True,
            wrap=True,
            classes="overlay-log",
        )
        for line in (
            "[bold]Enter[/bold]       send",
            "[bold]Ctrl+J[/bold]      newline (terminal-safe)",
            "[bold]Shift+Enter[/bold] newline alias when supported",
            "[bold]Ctrl+T[/bold]      turn history",
            "[bold]Ctrl+R[/bold]      choose chat",
            "[bold]Ctrl+N[/bold]      new chat",
            "[bold]Ctrl+C[/bold]      cancel while busy, clear while idle",
            "[bold]Ctrl+Q[/bold]      quit",
            "[bold]F1[/bold]          show or close this help",
            "[bold]Escape[/bold]      close overlay",
            "[bold]q[/bold]            close overlay",
        ):
            log.write(line)
        with Vertical(classes="overlay-panel"):
            yield Label("Weaver keys", classes="overlay-title")
            yield log


class CancellationRecoveryScreen(Screen[str | None]):
    """Safe routes away from a cooperatively interrupted chat."""

    BINDINGS = [
        Binding("escape", "back", "Back", show=False),
        Binding("q", "back", "Back", show=False),
    ]
    CSS = OVERLAY_CSS

    def compose(self) -> ComposeResult:
        message = RichLog(
            highlight=False,
            markup=True,
            wrap=True,
            classes="overlay-log",
        )
        message.write("[bold]The turn stopped safely.[/bold]")
        message.write("Start new chat or Choose another chat.")
        message.write("[dim]Escape returns to the interrupted chat.[/dim]")
        choices = ListView(
            ListItem(Label("Start new chat")),
            ListItem(Label("Choose another chat")),
            classes="overlay-list",
        )
        with Vertical(classes="overlay-panel"):
            yield Label("Turn interrupted", classes="overlay-title")
            yield message
            yield choices

    def on_mount(self) -> None:
        self.query_one(ListView).focus()

    def on_list_view_selected(self, event: ListView.Selected) -> None:
        if event.list_view.index == 0:
            self.dismiss("new")
        elif event.list_view.index == 1:
            self.dismiss("choose")

    def action_back(self) -> None:
        self.dismiss(None)
