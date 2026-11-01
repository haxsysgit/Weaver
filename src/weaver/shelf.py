"""The shelf edge: the last chapter Weaver can open (Plan 031).

One source of truth for the whole app. The edge is the highest chapter
file on the shelf, rescanned on a short cache so a running server sees
chapters a refresh adds without a restart. Reader boundaries, the system
prompt, and the frontend (through /api/library) all follow it.
"""

from __future__ import annotations

import json
import time
from collections.abc import Callable
from pathlib import Path

# A sanity ceiling for reader boundaries when no shelf is present (fake
# development without the private library). Four-digit chapters only.
NO_SHELF_CEILING = 9999


class ShelfEdge:
    def __init__(
        self,
        novel_dir: Path,
        *,
        ttl_seconds: float = 30.0,
        clock: Callable[[], float] = time.monotonic,
    ) -> None:
        self.novel_dir = novel_dir
        self._ttl_seconds = ttl_seconds
        self._clock = clock
        self._expires_at = 0.0
        self._cached: int | None = None

    def last_chapter(self) -> int | None:
        """The highest chapter on the shelf, or None without a shelf."""
        now = self._clock()
        if now >= self._expires_at:
            self._cached = self._scan()
            self._expires_at = now + self._ttl_seconds
        return self._cached

    def ceiling(self) -> int:
        """The highest chapter a reader boundary may name."""
        return self.last_chapter() or NO_SHELF_CEILING

    def _scan(self) -> int | None:
        if not self.novel_dir.is_dir():
            return None
        highest = 0
        for bucket in self.novel_dir.iterdir():
            if not bucket.is_dir():
                continue
            for chapter_file in bucket.glob("chapter-*.txt"):
                number = chapter_file.stem.removeprefix("chapter-")
                if number.isdigit():
                    highest = max(highest, int(number))
        return highest or None


def search_coverage(project_root: Path) -> int | None:
    """The last chapter the meaning-search index covers, if recorded.

    Written beside the index by scripts/build_library_index.py. The index
    lags the shelf until it is rebuilt (Plan 033).
    """
    path = project_root / ".weaver" / "retrieval" / "coverage.json"
    try:
        value = json.loads(path.read_text(encoding="utf-8")).get("novel_chunks_through")
    except (OSError, ValueError, AttributeError):
        return None
    return value if isinstance(value, int) and value > 0 else None
