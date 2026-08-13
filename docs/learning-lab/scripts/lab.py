"""Lab tour helpers: narration, pauses, source printing, and timing.

Used by the capture scripts to teach as they run. In autopilot mode
(WEAVER_LAB_AUTOPILOT=1 or --autopilot) every prompt auto-advances with
its default, so automation and CI get the same run as a human tour.
"""

import json
import os
import sys
import time
from pathlib import Path

AUTOPILOT = "--autopilot" in sys.argv or os.environ.get("WEAVER_LAB_AUTOPILOT") == "1"

SRC = Path(__file__).resolve().parent.parent.parent.parent / "src" / "weaver"


def banner(title: str) -> None:
    print("\n" + "=" * 74)
    print(f"{title}")
    print("=" * 74)


def section(title: str) -> None:
    print("\n" + "-" * 74)
    print(f"> {title}")
    print("-" * 74)


def code(ref: str, stop: int | None = None) -> None:
    """Print the real source at src/weaver/<ref>, e.g. "turn.py:454-477"."""
    path, _, span = ref.partition(":")
    if not span:
        print(f"\n  CODE  src/weaver/{ref}")
        return
    start, end = (int(x) for x in span.split("-"))
    path = path.replace("src/weaver/", "")
    lines = (SRC / path).read_text(encoding="utf-8").splitlines()
    print(f"\n  CODE src/weaver/{ref}")
    for number, line in enumerate(lines[start - 1 : end], start=start):
        print(f"  {number}  {line}")


def show(label: str, obj) -> None:
    """Pretty-print a dict/list, or a string, indented for the terminal."""
    if isinstance(obj, (dict, list)):
        text = json.dumps(obj, indent=2)
    else:
        text = str(obj)
    print(f"\n  {label}:")
    for line in text.splitlines():
        print(f"  {line}")


def note(text: str) -> None:
    print(f"  - {text}")


def explain(text: str) -> None:
    """A design beat: what this code does, and why this way. Plain prose."""
    print()
    for line in text.splitlines():
        print(f"  {line}")


def think(question: str, reveal: str) -> None:
    """Design beat: pose a question, wait for the learner to predict,
    then reveal the rationale. Autopilot reveals immediately."""
    print(f"\n  THINK: {question}")
    if AUTOPILOT:
        print("  (autopilot) [think] -> reveal")
    else:
        try:
            input("  (think about it, then Enter to reveal) ")
        except EOFError:
            pass
    for line in reveal.splitlines():
        print(f"  > {line}")


def pause(prompt: str = "[Enter] continue, [q] quit: ") -> bool:
    """Wait for the learner. q exits the tour."""
    if AUTOPILOT:
        print(f"  (autopilot) {prompt.rstrip()} -> continue")
        return True
    try:
        answer = input(f"  {prompt}").strip().lower()
    except EOFError:
        return True
    if answer == "q":
        print("  quitting the tour")
        sys.exit(0)
    return True


def ask(prompt: str, default: str) -> str:
    """Ask for input with a default; autopilot always returns the default."""
    if AUTOPILOT:
        print(f"  (autopilot) {prompt} [default: {default!r}] -> {default!r}")
        return default
    try:
        raw = input(f"  {prompt} [default: {default!r}] ").strip()
    except EOFError:
        return default
    return raw or default


class stopwatch:
    """Simple timing: lab.timed() after lab.stopwatch() at step start."""

    def __init__(self) -> None:
        self.start = time.perf_counter()

    def elapsed(self, label: str) -> None:
        print(f"  elapsed for {label}: {time.perf_counter() - self.start:.3f}s")