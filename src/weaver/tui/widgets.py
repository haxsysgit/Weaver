"""Status bar and welcome line for the chat TUI (Plan 010 Phase A + D).

Pure helpers here are unit-tested in tests/test_tui_widgets.py; the widget
stays thin composition. The design mirrors pi's chat screen: no top chrome,
one bottom status line (mode + spinner while a turn runs + context meter),
a single welcome line that disappears on the first submit, and a session
line at exit (printed by the CLI, not here).

Phase D adds the context meter: tokens used, or % of budget when one is
set (see ctx_text).
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


def ctx_text(token_count: int, token_budget: int) -> str:
    """Context meter fragment: '1.2k' tokens, '40%' of budget, or ''.

    token_budget 0 means unbounded (no budget configured).
    """
    if token_count <= 0:
        return ""
    if token_budget > 0:
        return f"{int(100 * token_count / token_budget)}%"
    if token_count >= 1000:
        return f"{token_count / 1000:.1f}k"
    return str(token_count)


def status_text(
    mode_label: str,
    busy: bool,
    tick: int = 0,
    context: str = "",
) -> str:
    """One-line status bar: spinner (or dot) + mode + context + hints.

    Example (busy): ``⠋ live deepseek-v4-flash · ctx 40% · ^c cancel · ^q quit``
    """
    indicator = spinner_frame(tick) if busy else _IDLE_DOT
    ctx = f"[dim] · ctx {escape(context)}[/dim]" if context else ""
    return (
        f"[dim]{indicator}[/dim] [bold]{escape(mode_label)}[/bold]{ctx}"
        f"[dim] · ^c cancel · ^h history · ^q quit[/dim]"
    )


def welcome_line(mode_label: str) -> str:
    """Single startup line, pi-style (minimal, no banner)."""
    return (
        f"[dim]Weaver chat · [/dim]{escape(mode_label)}"
        f"[dim] · ^c cancels, ^h history, ^q quits[/dim]"
    )


class StatusBar(Static):
    """One-line status bar under the input; spinner while a turn runs.

    NOTE: attribute names must never shadow MessagePump methods (e.g. a
    `_context` attribute would break the pump's `_context()`); the meter
    lives in `_meter`.
    """

    def __init__(self, mode_label: str) -> None:
        super().__init__("")
        self._mode_label = mode_label
        self._busy = False
        self._tick = 0
        self._meter = ""
        self._interval = None

    def on_mount(self) -> None:
        self._refresh()

    def set_context(self, token_count: int, token_budget: int) -> None:
        """Show the context meter (tokens used, % when a budget is set)."""
        self._meter = ctx_text(token_count, token_budget)
        self._refresh()

    def _refresh(self) -> None:
        self.update(
            status_text(self._mode_label, self._busy, self._tick, self._meter)
        )

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
