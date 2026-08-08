"""Spoiler judge: deterministic answer-mode gate (Plan 15 slice 1).

The reader ceiling is dead (owner 2026-08-08): the whole novel is always
searchable and spoiler care happens only in answer framing. Given the
citations an answer would use, the user's position, and the spoiler knob,
the judge returns one of three modes:

- full: every citation is at or before the position, or safe_lore, or
  no-spoiler mode is on (or no position is set: no gate).
- guarded: beyond-position material that is not a heavy beat. Answer but
  protect the beats.
- ask_first: heavy beats (reveal / twist / death / arc_payoff) beyond the
  position, unless the question itself targets the future (asks_beyond),
  which downgrades to guarded.

Two layers of the map feed the judge:
- statement labels (ch 1-1000), loaded from <notebook>/spoiler-labels.json
  (absent-tolerant: the judge works on volume rules alone)
- canonical volume boundaries, the coarse safety net for everything,
  including chapters beyond notebook coverage

The judge is machinery: pure, deterministic, testable. The synthesis
model applies the chosen framing. Position and mode are user preferences,
never model arguments and never retrieval filters.
"""

from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path
from typing import Literal

ALL_LABELS = frozenset({"safe_lore", "reveal", "twist", "death", "arc_payoff"})
HEAVY_LABELS = frozenset({"reveal", "twist", "death", "arc_payoff"})

# Canonical volume ends, verified from the novel source (2026-08-04):
# Vol 1 Child of Shadows ch1-95, Vol 2 Demon of Change ch96-350,
# Vol 3 Prince of Nothing ch351-600, Vol 4 Chain Breaker ch601-750,
# Vol 5 Dread Night ch751-1060, Vol 6 All the Devils Are Here ch1061-1230,
# Vol 7 The Tomb of Ariel ch1231-1590, Vol 8 Lord of Shadows ch1591-1840,
# Vol 9 Throne of War ch1841-2260, Vol 10 Dark Lord's Dreadful Travelogue
# ch2261-2720, Vol 11 The Song of Ariadne ch2721-3000, Vol 12 ch3001+.
VOLUME_ENDS = (95, 350, 600, 750, 1060, 1230, 1590, 1840, 2260, 2720, 3000)


def volume_of(chapter: int) -> int:
    """Volume number containing the chapter (1-12)."""
    for i, end in enumerate(VOLUME_ENDS):
        if chapter <= end:
            return i + 1
    return len(VOLUME_ENDS) + 1


@dataclass(frozen=True)
class Citation:
    """One passage or statement an answer would cite."""

    chapter: int
    statement_id: str | None = None


@dataclass(frozen=True)
class Verdict:
    mode: Literal["full", "guarded", "ask_first"]
    reasons: tuple[str, ...] = ()


class SpoilerJudge:
    def __init__(self, labels: dict[str, str] | None = None):
        self._labels = labels or {}
        for sid, label in self._labels.items():
            if label not in ALL_LABELS:
                raise ValueError(f"unknown spoiler label {label!r} for {sid}")

    def decide(
        self,
        citations: list[Citation],
        *,
        user_chapter: int | None = None,
        no_spoilers: bool = False,
        asks_beyond: bool = False,
    ) -> Verdict:
        """Gate the answer mode.

        user_chapter is the reader's position (soft preference). None or
        no_spoilers disables the gate. asks_beyond means the question
        itself targets future content (what-if, "what happens later"),
        which downgrades ask_first to guarded.
        """
        if no_spoilers or user_chapter is None:
            return Verdict("full")
        reasons: list[str] = []
        worst: Literal["full", "guarded", "ask_first"] = "full"
        for c in citations:
            if c.chapter <= user_chapter:
                continue
            label = self._labels.get(c.statement_id or "")
            if label == "safe_lore":
                continue
            if label in HEAVY_LABELS:
                reasons.append(
                    f"{c.statement_id or ('chapter ' + str(c.chapter))} "
                    f"is a {label} beyond chapter {user_chapter}"
                )
                worst = "ask_first"
            elif worst == "full":
                reasons.append(f"chapter {c.chapter} is beyond chapter {user_chapter}")
                worst = "guarded"
        if worst == "ask_first" and asks_beyond:
            return Verdict("guarded", tuple(reasons))
        return Verdict(worst, tuple(reasons))


def load_labels(notebook_dir: Path) -> dict[str, str]:
    """Load <notebook_dir>/spoiler-labels.json; missing file = empty map."""
    path = notebook_dir / "spoiler-labels.json"
    if not path.exists():
        return {}
    data = json.loads(path.read_text(encoding="utf-8"))
    labels = {str(sid): str(label) for sid, label in data.items()}
    # validate eagerly so a broken file fails at load, not at verdict time
    SpoilerJudge(labels)
    return labels
