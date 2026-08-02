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
from textual import events
from textual.widgets import Static, TextArea

# pi uses a spinner in its status area while the model works; we mirror
# that with a small braille frame set, ~10 fps.
SPINNER_FRAMES = ("⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏")

OWNER_LABEL = "[bold #95a6a8]OWNER[/]"
WEAVER_LABEL = "[bold #8fb8bd]WEAVER[/]"

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
    if busy:
        hints = " · ^c cancel · ^q quit"
    else:
        hints = " · enter send · ^j newline · f1 help"
    return (
        f"[dim]{indicator}[/dim] [bold]{escape(mode_label)}[/bold]{ctx}"
        f"[dim]{hints}[/dim]"
    )


def welcome_line(mode_label: str) -> str:
    """Single startup line, pi-style (minimal, no banner)."""
    return (
        f"[dim]Weaver chat · [/dim]{escape(mode_label)}"
        f"[dim] · enter sends, ^j adds a line, f1 shows every key[/dim]"
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
        self.update(status_text(self._mode_label, self._busy, self._tick, self._meter))

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


class ChatInput(TextArea):
    """Multi-line input where enter NEVER inserts a newline.

    TextArea natively consumes enter in _on_key (inserts \n). This
    subclass lets it bubble instead: the app's non-priority enter binding
    submits (pi model), and shift+enter hits the app's newline binding.
    """

    MIN_HEIGHT = 3
    MAX_HEIGHT = 8

    def on_mount(self) -> None:
        self._fit_to_content()

    def on_resize(self) -> None:
        self.call_after_refresh(self._fit_to_content)

    def on_text_area_changed(self, event: TextArea.Changed) -> None:
        if event.text_area is self:
            self.call_after_refresh(self._fit_to_content)

    def _fit_to_content(self) -> None:
        """Fit visible wrapped lines, then let TextArea scroll at the cap."""
        content_rows = max(1, self.wrapped_document.height)
        height = content_rows + 2
        self.styles.height = max(self.MIN_HEIGHT, min(self.MAX_HEIGHT, height))

    async def _on_key(self, event: events.Key) -> None:
        if event.key == "enter":
            # prevent_default() suppresses TextArea's base handler (which
            # would insert a newline and stop the event); leaving the
            # event un-stopped lets it bubble to the app's submit binding.
            event.prevent_default()
            return
        await super()._on_key(event)
