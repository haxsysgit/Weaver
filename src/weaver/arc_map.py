"""The arc map: volumes and arcs with chapter ranges (Plan 034).

The source is the private continuity ledger at
``.weaver/knowledge/shadow-slave/arcs.md``, which was written from reading
the novel. This module only parses and places; it never invents an arc. The
ledger currently reaches chapter 1659, so the map reports that reach and
never claims the shelf beyond it.
"""

from __future__ import annotations

import re
from dataclasses import dataclass

_HEADING_RE = re.compile(
    r"^##\s+ARC\s+(?P<id>[\d.]+)\s*[—–-]\s*(?P<name>[^(]+?)\s*"
    r"\(ch\s*~?(?P<start>\d+)\s*[-–]\s*~?(?P<end>\d+)\)"
    r"(?P<rest>.*)$",
    re.MULTILINE,
)
_VOLUME_RE = re.compile(r"VOLUME\s*(?P<number>\d+)", re.IGNORECASE)
_VOLUME_NAME_RE = re.compile(r"VOLUME\s*\d+\s*:\s*(?P<name>.+)")


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


class ArcMap:
    """Arcs in order, with the chapter ranges the ledger records."""

    def __init__(self, arcs: list[Arc]) -> None:
        self.arcs = sorted(arcs, key=lambda arc: arc.start)
        self.through = max((arc.end for arc in self.arcs), default=0)

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

        Arcs that start past the cap are left out; one that crosses the cap
        is clipped and marked "so far", so the map never reveals an arc the
        reader has not reached.
        """
        limit = self.through if through_chapter is None else min(
            through_chapter, self.through
        )
        lines = ["Story arcs so far (chapter ranges):"]
        for arc in self.arcs:
            if arc.start > limit:
                continue
            end = min(arc.end, limit)
            volume = f", vol. {arc.volume}" if arc.volume else ""
            tail = "" if end == arc.end else " (so far)"
            lines.append(f"- {arc.start}-{end} {arc.name}{volume}{tail}")
        if self.arcs:
            lines.append(f"(mapped through chapter {self.through})")
        return "\n".join(lines)


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
