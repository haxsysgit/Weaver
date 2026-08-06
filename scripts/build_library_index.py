"""Build the persistent library index for the reading tools.

Usage:
    uv run python scripts/build_library_index.py [--ceiling N] [--dense MODEL] [--sparse MODEL]

Writes the Qdrant store to .weaver/retrieval/index/ (owner-only dirs).
The web runtime loads this index when present. Deterministic machinery;
run once per library state. The index stores payload metadata only
(chapter, lines, hash, kind, ids) and never novel prose.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from weaver.retrieval.library import build_library_index

DEFAULT_CEILING = 1000


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--novel-dir", type=Path, default=Path("novels/shadow-slave"))
    ap.add_argument("--notebook-dir", type=Path, default=Path(".weaver/knowledge/shadow-slave"))
    ap.add_argument("--out", type=Path, default=Path(".weaver/retrieval/index"))
    ap.add_argument("--ceiling", type=int, default=DEFAULT_CEILING)
    ap.add_argument("--dense", default="BAAI/bge-large-en-v1.5",
                    help="dense embedder: a fastembed model id, or 'openai' for the API")
    ap.add_argument("--sparse", default="Qdrant/bm42-all-minilm-l6-v2-attentions")
    args = ap.parse_args()

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
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
