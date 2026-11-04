"""Build the persistent library index for the reading tools.

Usage:
    uv run python scripts/build_library_index.py [--ceiling N] [--dense MODEL] [--sparse MODEL]

Builds from scratch: it replaces both collections in the store at
.weaver/retrieval/index/. To bring the live index up to date with new
chapters, run `weaver library index` instead (Plan 033.5), which changes
only the chapters that need it. The defaults are the live index's
settings, and the ceiling defaults to the shelf's last chapter. The index
stores payload metadata only (chapter, lines, hash, kind, ids) and never
novel prose.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from weaver.retrieval.index_settings import DENSE_MODEL, SPARSE_MODEL
from weaver.retrieval.library import build_library_index


def parser() -> argparse.ArgumentParser:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--novel-dir", type=Path, default=Path("novels/shadow-slave"))
    ap.add_argument("--notebook-dir", type=Path, default=Path(".weaver/knowledge/shadow-slave"))
    ap.add_argument("--out", type=Path, default=Path(".weaver/retrieval/index"))
    ap.add_argument("--ceiling", type=int, default=None, help="last chapter (default: the shelf's last)")
    ap.add_argument("--dense", default=DENSE_MODEL,
                    help="dense embedder: a fastembed model id, or 'openai' for the API")
    ap.add_argument("--sparse", default=SPARSE_MODEL)
    ap.add_argument(
        "--replace",
        action="store_true",
        help="allow replacing an existing index (it is deleted and rebuilt)",
    )
    return ap


def main() -> int:
    args = parser().parse_args()
    if args.out.exists() and not args.replace:
        print(
            f"{args.out} already exists. To bring it up to date, run "
            "`weaver library index`. To delete and rebuild it, pass --replace.",
            file=sys.stderr,
        )
        return 1

    from weaver.config import load_startup_config

    load_startup_config()  # .env wins over the shell env (owner decision)

    summary = build_library_index(
        args.novel_dir,
        args.notebook_dir,
        args.out,
        ceiling=args.ceiling,
        dense_model=args.dense,
        sparse_model=args.sparse,
    )
    print(f"index built: {summary}")
    # Plan 031: record how far meaning search reaches, beside the index,
    # so the prompt can say which chapters it covers (weaver.shelf).
    from weaver.retrieval.meaning_index import write_coverage

    coverage = args.out.parent / "coverage.json"
    write_coverage(coverage, summary["ceiling"])
    print(f"coverage recorded: {coverage}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
