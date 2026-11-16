"""Build the chapter-derived name index for who_is (Plan 034).

Usage:
    uv run python scripts/build_name_index.py

Output is private state at .weaver/retrieval/names.json; it never enters a
commit. who_is loads it on first use, rebuilds it when the shelf has grown,
and falls back to building it from the chapters when the file is missing.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from weaver.name_index import build_name_index
from weaver.retrieval.library import ChapterIndex


def parser() -> argparse.ArgumentParser:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--novel-dir", type=Path, default=Path("novels/shadow-slave"))
    ap.add_argument("--out", type=Path, default=Path(".weaver/retrieval/names.json"))
    return ap


def chapters(index: ChapterIndex):
    last = index.last_chapter()
    if last is None:
        return
    for number in range(1, last + 1):
        try:
            yield number, index.read(number)
        except FileNotFoundError:
            continue


def main() -> int:
    args = parser().parse_args()
    if not args.novel_dir.is_dir():
        print(f"no novel at {args.novel_dir}")
        return 1
    index = ChapterIndex(args.novel_dir)
    names = build_name_index(chapters(index))
    names.save(args.out)
    print(
        f"indexed {len(names)} names from chapters 1-{index.last_chapter()} "
        f"-> {args.out}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
