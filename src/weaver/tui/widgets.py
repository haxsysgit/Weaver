"""Status bar and welcome line for the chat TUI (Plan 010 Phase A).

Pure helpers here are unit-tested in tests/test_tui_widgets.py; the widget
stays thin composition. The design mirrors pi's chat screen: no top chrome,
one bottom status line (mode + spinner while a turn runs), a single
welcome line that disappears on the first submit, and a session line at
exit (printed by the CLI, not here).
"""

from __future__ import annotations

from rich.markup import escape
from textual.widgets import Static

# pi uses a spinner in its status area while the model works; we mirror
# that with a small braille frame set, ~10 fps.
SPINNER_FRAMES = ("⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏")

_IDLE_DOT = "·"


def spinner_frame(tick: int) -> str:
    """Frame for the busy indicator; idle text when not busy is the dot."""
    return SPINNER_FRAMES[tick % len(SPINNER_FRAMES)]


def status_text(mode_label: str, busy: bool, tick: int = 0) -> str:
    """One-line status bar: spinner (or dot) + mode + key hints.

    Example (busy): ``⠋ live deepseek-v4-flash · ^c cancel · ^q quit``
    """
    indicator = spinner_frame(tick) if busy else _IDLE_DOT
    return (
        f"[dim]{indicator}[/dim] [bold]{escape(mode_label)}[/bold]"
        f"[dim] · ^c cancel · ^q quit[/dim]"
    )


def welcome_line(mode_label: str) -> str:
    """Single startup line, pi-style (minimal, no banner)."""
    return (
        f"[dim]Weaver chat · [/dim]{escape(mode_label)}"
        f"[dim] · ^c cancels the running turn, ^q quits[/dim]"
    )


class StatusBar(Static):
    """One-line status bar under the input; spinner while a turn runs."""

    def __init__(self, mode_label: str) -> None:
        super().__init__("")
        self._mode_label = mode_label
        self._busy = False
        self._tick = 0
        self._interval = None

    def on_mount(self) -> None:
        self._refresh()

    def _refresh(self) -> None:
        self.update(status_text(self._mode_label, self._busy, self._tick))

    def set_busy(self, busy: bool) -> None:
        """Show the spinner while a turn is in flight; stop when idle."""
        if busy == self._busy:
            return
        self._busy = busy
        if busy:
            self._interval = self.set_interval(0.1, self._on_tick)
        else:
            if self._interval is not None:
                self._interval.stop()
                self._interval = None
        self._refresh()

    def _on_tick(self) -> None:
        self._tick += 1
        self._refresh()
