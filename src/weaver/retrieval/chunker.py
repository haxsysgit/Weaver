"""Shadow Slave aware chunker: paragraph-safe, dialogue-sticky chunks.

Splits a chapter into chunks that respect the novel's actual structure
instead of blind line counts:

- Line 1 is the title heading, never story text, so chunks start at 2.
- Paragraphs are unambiguous (blank-line separated) and never split.
- Bracket blocks ([Name: ...] [Description: ...] memory/attribute text)
  stay whole, no matter how long. These are question magnets.
- Dialogue runs stay sticky: a run of quote lines is one unit, so a
  question about a conversation retrieves the whole exchange.
- Chunks merge units up to a target size with overlap, cutting only
  between paragraphs, so evidence ranges that straddle a boundary stay
  inside at least one chunk.

Each chunk carries chapter, line range, source hash, and flags
(memory-block, dialogue) for later filtering.
"""

from __future__ import annotations

import hashlib
import re
from dataclasses import dataclass, field

TARGET_LINES = 40
OVERLAP_LINES = 10

_QUOTE_RE = re.compile(r"^\s*[\"']")


@dataclass(frozen=True)
class _Unit:
    """One atomic piece of a chapter: a paragraph, bracket block, or
    dialogue run. Never split across a unit boundary."""

    line_start: int
    line_end: int
    text: str
    is_bracket: bool = False
    is_dialogue: bool = False


@dataclass(frozen=True)
class Chunk:
    """A self-contained line range of one chapter."""

    chapter: int
    line_start: int
    line_end: int
    text: str
    source_hash: str
    flags: frozenset[str] = field(default_factory=frozenset)


def _is_blank(line: str) -> bool:
    return not line.strip()


def _is_bracket(line: str) -> bool:
    return bool(line.strip().startswith("["))


def _is_quote(line: str) -> bool:
    return bool(_QUOTE_RE.match(line))


def split_units(lines: list[str]) -> list[_Unit]:
    """Group lines into atomic units: paragraphs (never split),
    bracket blocks (whole), and dialogue runs (sticky)."""
    units: list[_Unit] = []
    start = None
    block_type = None  # None | "bracket" | "dialogue" | "plain"

    def flush(end: int) -> None:
        nonlocal start, block_type
        if start is None:
            return
        is_bracket = block_type == "bracket"
        is_dialogue = block_type == "dialogue"
        text = "\n".join(lines[start - 1 : end])
        units.append(_Unit(start, end, text, is_bracket, is_dialogue))
        start = None
        block_type = None

    for idx, line in enumerate(lines, start=1):
        if _is_blank(line):
            flush(idx - 1)
            continue
        if _is_bracket(line):
            if block_type != "bracket":
                flush(idx - 1)
                start, block_type = idx, "bracket"
        elif _is_quote(line):
            if block_type != "dialogue":
                flush(idx - 1)
                start, block_type = idx, "dialogue"
        else:
            if block_type != "plain":
                flush(idx - 1)
                start, block_type = idx, "plain"
    flush(len(lines))
    return units


def merge_units(
    chapter: int,
    units: list[_Unit],
    *,
    target_lines: int = TARGET_LINES,
    overlap_lines: int = OVERLAP_LINES,
    source_hash: str = "",
) -> list[Chunk]:
    """Merge atomic units into chunks of roughly target_lines, keeping
    overlap_lines of trailing lines so straddling evidence survives.

    A single unit longer than the target stays whole (bracket blocks
    and long paragraphs are never split, whatever the cost). Overlap is
    applied at unit granularity: units are only ever added whole, so a
    chunk boundary never splits a paragraph.
    """
    chunks: list[Chunk] = []
    current: list[_Unit] = []
    current_lines = 0
    overlap_tail: list[_Unit] = []

    def emit() -> None:
        nonlocal current, current_lines, overlap_tail
        if not current:
            return
        text = "\n\n".join(u.text for u in current)
        flags = set()
        if any(u.is_bracket for u in current):
            flags.add("memory-block")
        if any(u.is_dialogue for u in current):
            flags.add("dialogue")
        chunks.append(
            Chunk(
                chapter=chapter,
                line_start=current[0].line_start,
                line_end=current[-1].line_end,
                text=text,
                source_hash=source_hash,
                flags=frozenset(flags),
            )
        )
        # Keep trailing units totaling at least overlap_lines for the
        # next chunk, so evidence straddling the boundary is duplicated.
        overlap_tail = []
        if overlap_lines > 0:
            tail_lines = 0
            for unit in reversed(current):
                tail_lines += unit.line_end - unit.line_start + 1
                overlap_tail.append(unit)
                if tail_lines >= overlap_lines:
                    break
            overlap_tail.reverse()
        current = []
        current_lines = 0

    for unit in units:
        if current and current_lines + (unit.line_end - unit.line_start + 1) > target_lines:
            emit()
            current = list(overlap_tail)
            current_lines = sum(u.line_end - u.line_start + 1 for u in current)
        current.append(unit)
        current_lines += unit.line_end - unit.line_start + 1
    emit()
    return chunks


def chunk_chapter(chapter: int, text: str, *, target_lines: int = TARGET_LINES, overlap_lines: int = OVERLAP_LINES) -> list[Chunk]:
    """Chunk one chapter with the Shadow Slave aware strategy."""
    lines = text.splitlines()
    body = lines[1:] if len(lines) > 1 else []  # line 1 is the title
    source_hash = hashlib.sha256(text.encode("utf-8")).hexdigest()[:16]
    units = split_units(body)
    # split_units works on 1-indexed lines of its input; body starts at
    # line 2 of the chapter, so shift unit line numbers back by one.
    shifted: list[_Unit] = []
    for u in units:
        shifted.append(
            _Unit(
                u.line_start + 1,
                u.line_end + 1,
                u.text,
                u.is_bracket,
                u.is_dialogue,
            )
        )
    chunks = merge_units(
        chapter,
        shifted,
        target_lines=target_lines,
        overlap_lines=overlap_lines,
        source_hash=source_hash,
    )
    return chunks
