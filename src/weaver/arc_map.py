"""The arc map: volumes and arcs with chapter ranges (Plan 034).

Two sources, neither invented here. Arcs come from the private continuity
ledger at ``.weaver/knowledge/shadow-slave/arcs.md``, written from reading
the novel; it has holes and stops short of the shelf. Volumes come from the
chapters themselves: each volume's last chapter carries a marker such as
"[End of volume one: Child of Shadows.]", so the volume map covers the whole
shelf and grows when the weekly refresh adds chapters.
"""

from __future__ import annotations

import re
from collections.abc import Iterable
from dataclasses import dataclass
from pathlib import Path

_HEADING_RE = re.compile(
    r"^##\s+ARC\s+(?P<id>[\d.]+)\s*(?:[—–-]\s*)?(?P<name>[^(]+?)\s*"
    r"\(ch\s*~?(?P<start>\d+)\s*[-–]\s*~?(?P<end>\d+)\)"
    r"(?P<rest>.*)$",
    re.MULTILINE,
)
_VOLUME_RE = re.compile(r"VOLUME\s*(?P<number>\d+)", re.IGNORECASE)
_VOLUME_NAME_RE = re.compile(r"VOLUME\s*\d+\s*:\s*(?P<name>.+)")
_VOLUME_END_RE = re.compile(
    r"^\s*\[End of volume (?P<number>[A-Za-z]+|\d+)\s*:\s*(?P<name>[^\]\n]+?)\.?\s*\]",
    re.IGNORECASE | re.MULTILINE,
)
_NUMBER_WORDS = {
    word: number
    for number, word in enumerate(
        (
            "zero", "one", "two", "three", "four", "five", "six", "seven",
            "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
            "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
        )
    )
}


@dataclass(frozen=True)
class Arc:
    arc_id: str
    name: str
    start: int
    end: int
    volume: int | None = None
    volume_name: str = ""

    @property
    def span(self) -> str:
        return f"{self.start}-{self.end}"


@dataclass(frozen=True)
class VolumeEnd:
    """A volume's closing marker: its number, its name and its last chapter."""

    number: int
    name: str
    chapter: int


def volume_ends(chapters: Iterable[tuple[int, str]]) -> list[VolumeEnd]:
    """The volume-end markers in (chapter number, text) pairs, in order."""
    ends: list[VolumeEnd] = []
    for chapter, text in chapters:
        for match in _VOLUME_END_RE.finditer(text):
            raw = match.group("number").lower()
            number = int(raw) if raw.isdigit() else _NUMBER_WORDS.get(raw)
            if number is None:
                continue
            ends.append(VolumeEnd(number, " ".join(match.group("name").split()), chapter))
    return sorted(ends, key=lambda end: end.chapter)


class ArcMap:
    """Arcs from the ledger and volumes from the chapters, in order."""

    def __init__(
        self,
        arcs: list[Arc],
        *,
        volumes: Iterable[VolumeEnd] = (),
        shelf_edge: int | None = None,
    ) -> None:
        self.arcs = sorted(arcs, key=lambda arc: arc.start)
        self.through = max((arc.end for arc in self.arcs), default=0)
        self.volumes = sorted(volumes, key=lambda end: end.chapter)
        self.shelf_edge = shelf_edge

    def __len__(self) -> int:
        return len(self.arcs)

    def at(self, chapter: int) -> Arc | None:
        """The arc that contains the chapter, or None outside the map."""
        for arc in self.arcs:
            if arc.start <= chapter <= arc.end:
                return arc
        return None

    def prompt_block(self, through_chapter: int | None = None) -> str:
        """A compact map for the model, capped at the reader's chapter.

        Arcs and volumes that start past the cap are left out; one that
        crosses the cap is clipped with its range only, because a name can
        name a future event (a death, a return) and a volume's name is only
        printed at its end.
        """
        lines: list[str] = []
        lines.extend(self._volume_lines(through_chapter))
        lines.extend(self._arc_lines(through_chapter))
        return "\n".join(lines)

    def _arc_lines(self, through_chapter: int | None) -> list[str]:
        if not self.arcs:
            return []
        limit = self.through if through_chapter is None else min(
            through_chapter, self.through
        )
        lines = ["Story arcs so far (chapter ranges):"]
        for arc in self.arcs:
            if arc.start > limit:
                continue
            if arc.end > limit:
                lines.append(f"- {arc.start}-{limit} (continues past this chapter)")
                continue
            volume = f", vol. {arc.volume}" if arc.volume else ""
            lines.append(f"- {arc.start}-{arc.end} {arc.name}{volume}")
        lines.append(f"(mapped through chapter {self.through})")
        return lines

    def _volume_lines(self, through_chapter: int | None) -> list[str]:
        if not self.volumes:
            return []
        edge = self.shelf_edge or self.volumes[-1].chapter
        limit = edge if through_chapter is None else min(through_chapter, edge)
        lines = ["Volumes (chapter ranges):"]
        start, previous = 1, 0
        for end in self.volumes:
            if start > limit:
                break
            if end.chapter > limit:
                lines.append(f"- {start}-{limit} (volume continues past this chapter)")
                return lines
            if end.number - previous > 1:
                lines.append(
                    f"- {start}-{end.chapter} Volumes {previous + 1}-{end.number}: "
                    f"{end.name} (the end of volume {end.number - 1} is not marked)"
                )
            else:
                lines.append(f"- {start}-{end.chapter} Volume {end.number}: {end.name}")
            start, previous = end.chapter + 1, end.number
        if start <= limit:
            if limit < edge:
                lines.append(f"- {start}-{limit} (volume continues past this chapter)")
            else:
                lines.append(f"- {start}-{edge} the latest volume, still running on the shelf")
        return lines


def parse_arc_ledger(text: str) -> ArcMap:
    """Read the arc headings out of the continuity ledger."""
    arcs: list[Arc] = []
    for match in _HEADING_RE.finditer(text):
        rest = match.group("rest")
        volume_match = _VOLUME_RE.search(rest)
        name_match = _VOLUME_NAME_RE.search(rest)
        arcs.append(
            Arc(
                arc_id=match.group("id"),
                name=" ".join(match.group("name").split()),
                start=int(match.group("start")),
                end=int(match.group("end")),
                volume=int(volume_match.group("number")) if volume_match else None,
                volume_name=(
                    " ".join(name_match.group("name").split())
                    if name_match
                    else ""
                ),
            )
        )
    return ArcMap(arcs)


def load_arc_map(
    path: Path,
    *,
    volumes: Iterable[VolumeEnd] = (),
    shelf_edge: int | None = None,
) -> ArcMap:
    """Read the private continuity ledger into a map, with the shelf's volumes."""
    arcs = parse_arc_ledger(path.read_text(encoding="utf-8")).arcs if path.exists() else []
    return ArcMap(arcs, volumes=volumes, shelf_edge=shelf_edge)
