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

Three layers of the map feed the judge:
- statement labels (ch 1-1000), loaded from <notebook>/spoiler-labels.json
  (absent-tolerant: the judge works on volume rules alone)
- the beat map (<notebook>/spoiler-beats.json): curated story beats -
  "culminations" - each with a chapter range, a heavy label and a plain
  summary. A citation whose chapter falls inside a beat's range inherits
  the beat's label when no statement label applies, so protection
  extends beyond the labeled statements to the whole beat span.
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
# ch2261-2720, Vol 11 The Song of Ariadne ch2721-3000, Vol 12 ch3001-3127,
# Vol 13 Prelude to Apocalypse ch3128-3160 (2026-08-17).
VOLUME_ENDS = (95, 350, 600, 750, 1060, 1230, 1590, 1840, 2260, 2720, 3000, 3127, 3160)


def volume_of(chapter: int) -> int:
    """Volume number containing the chapter (1-13)."""
    for i, end in enumerate(VOLUME_ENDS):
        if chapter <= end:
            return i + 1
    # Past the last known end: stay in the final volume rather than
    # inventing a volume that does not exist yet.
    return len(VOLUME_ENDS)


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
    def __init__(
        self,
        labels: dict[str, str] | None = None,
        beats: list[dict] | None = None,
    ):
        self._labels = labels or {}
        for sid, label in self._labels.items():
            if label not in ALL_LABELS:
                raise ValueError(f"unknown spoiler label {label!r} for {sid}")
        self._beats = beats or []
        seen: set[str] = set()
        for beat in self._beats:
            if beat.get("label") not in HEAVY_LABELS:
                raise ValueError(f"unknown beat label {beat.get('label')!r}")
            start, end = beat.get("chapter_start"), beat.get("chapter_end")
            if not (isinstance(start, int) and isinstance(end, int) and start <= end):
                raise ValueError(f"invalid beat chapter range {start}-{end}")
            if beat.get("id") in seen:
                raise ValueError(f"duplicate beat id {beat.get('id')!r}")
            seen.add(beat.get("id"))

    def beats_for(self, chapter: int) -> list[dict]:
        """Beats whose chapter range contains the chapter, oldest first."""
        return [
            beat for beat in self._beats
            if beat["chapter_start"] <= chapter <= beat["chapter_end"]
        ]

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
            if label is None:
                # no statement label at all: does the chapter fall inside a
                # beat? An explicit label (even safe_lore) overrides beats.
                for beat in self.beats_for(c.chapter):
                    label = beat["label"]
                    break
            if label == "safe_lore":
                continue
            if label in HEAVY_LABELS:
                article = "an" if label.startswith(("a", "e", "i", "o")) else "a"
                reasons.append(
                    f"{c.statement_id or ('chapter ' + str(c.chapter))} "
                    f"is {article} {label} beyond chapter {user_chapter}"
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


def load_beats(notebook_dir: Path) -> list[dict]:
    """Load <notebook_dir>/spoiler-beats.json; missing file = empty list."""
    path = notebook_dir / "spoiler-beats.json"
    if not path.exists():
        return []
    data = json.loads(path.read_text(encoding="utf-8"))
    beats = data.get("beats") if isinstance(data, dict) else None
    if not isinstance(beats, list):
        raise ValueError("spoiler-beats.json must hold a beats list")
    # validate eagerly so a broken file fails at load, not at verdict time
    SpoilerJudge(beats=beats)
    return beats
