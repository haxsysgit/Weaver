"""Plan 033.5: the match test and the after-run probes (counts only).

    uv run python deliverables/033.5-meaning-search-keeps-up/tools/match_and_probe.py match
    uv run python deliverables/033.5-meaning-search-keeps-up/tools/match_and_probe.py probe [--index PATH]

match: the pinned settings (weaver.retrieval.meaning_index) reproduce the
stored line spans and dense vectors (cosine >= 0.999 per chunk) of
unchanged chapters spread across the novel. Exit 1 on any mismatch: the
real update must not run.

probe: point count; hybrid searches limited to chapters 3128 to 3232 and
which half found each hit; the top meaning-only chapters for fixed queries
on chapters 1 to 500 (compare a run on the copy taken before the update
with a run on the live index). Prints chapter numbers and counts, never
novel text. The server must be stopped (one process on the index).
"""

from __future__ import annotations

import argparse
import json
import math
import sys
from pathlib import Path

from qdrant_client import QdrantClient, models

from weaver.retrieval.experiment import NOVEL_COLLECTION
from weaver.retrieval.library import ChapterIndex
from weaver.retrieval.meaning_index import DENSE_MODEL, index_chunks

NOVEL = Path("novels/shadow-slave")
NOTEBOOK = Path(".weaver/knowledge/shadow-slave")
LIVE = Path(".weaver/retrieval/index")
MATCH_CHAPTERS = (1, 800, 1600, 2400, 3000, 3046)
# Generic reader phrasings (not novel text).
NEW_RANGE_QUERIES = ("Sunny fights a powerful enemy", "a quiet conversation between friends", "the Spell announces something")
OLD_RANGE_QUERIES = ("Sunny", "a nightmare creature attacks", "Nephis")


def _cosine(a, b) -> float:
    dot = sum(x * y for x, y in zip(a, b, strict=True))
    return dot / (math.sqrt(sum(x * x for x in a)) * math.sqrt(sum(y * y for y in b)))


def match() -> int:
    from fastembed import TextEmbedding

    chapters = ChapterIndex(NOVEL)
    embedder = TextEmbedding(DENSE_MODEL, threads=4)
    client = QdrantClient(path=str(LIVE))
    ok = True
    try:
        for chapter in MATCH_CHAPTERS:
            raw = chapters._path(chapter).read_text(encoding="utf-8")
            chunks = index_chunks(chapters, chapter)
            stored, _ = client.scroll(
                NOVEL_COLLECTION,
                scroll_filter=models.Filter(
                    must=[models.FieldCondition(key="chapter", match=models.MatchValue(value=chapter))]
                ),
                limit=200,
                with_payload=True,
                with_vectors=["dense"],
            )
            by_span = {(p.payload["line_start"], p.payload["line_end"]): p for p in stored}
            spans_ok = sorted(by_span) == sorted((c.line_start, c.line_end) for c in chunks)
            hash_ok = {p.payload["source_hash"] for p in stored} == {chapters.source_hash(chapter)}
            vectors = [list(v) for v in embedder.embed([c.text for c in chunks])]
            cosines = [
                _cosine(vectors[i], by_span[(c.line_start, c.line_end)].vector["dense"])
                for i, c in enumerate(chunks)
                if (c.line_start, c.line_end) in by_span
            ]
            low = min(cosines) if cosines else 0.0
            passed = spans_ok and hash_ok and len(cosines) == len(chunks) and low >= 0.999
            ok &= passed
            print(
                f"chapter {chapter}: chunks {len(chunks)} stored {len(stored)} spans {'same' if spans_ok else 'DIFFER'} "
                f"hash {'same' if hash_ok else 'DIFFER'} min cosine {low:.6f} "
                f"debris-free {chapters.read(chapter) == raw} -> {'PASS' if passed else 'FAIL'}"
            )
    finally:
        client.close()
    print("MATCH", "PASS" if ok else "FAIL")
    return 0 if ok else 1


def probe(index: Path) -> int:
    from fastembed import TextEmbedding

    from weaver.retrieval.tools import LibraryService

    client = QdrantClient(path=str(index))
    try:
        service = LibraryService(
            novel_dir=NOVEL,
            notebook_dir=NOTEBOOK,
            client=client,
            embedder=TextEmbedding(DENSE_MODEL, threads=4),
            sparse_encoder=None,
            index_dir=index,
        )
        out: dict = {"index": str(index), "points": client.count(NOVEL_COLLECTION, exact=True).count}
        new_range = []
        for query in NEW_RANGE_QUERIES:
            hits = service._search_novel(query, 3128, 3232)
            new_range.append(
                {
                    "hits": len(hits),
                    "meaning": sum("meaning" in h["found_by"] for h in hits),
                    "both": sum(set(h["found_by"]) == {"meaning", "words"} for h in hits),
                    "chapters_in_range": all(3128 <= h["chapter"] <= 3232 for h in hits),
                }
            )
        out["new_range"] = new_range
        out["old_range_top_chapters"] = [
            [p.chapter for p in service._meaning_passages(query, 1, 500)[:10]] for query in OLD_RANGE_QUERIES
        ]
    finally:
        client.close()
    print(json.dumps(out))
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("command", choices=["match", "probe"])
    ap.add_argument("--index", type=Path, default=LIVE)
    args = ap.parse_args()
    return match() if args.command == "match" else probe(args.index)


if __name__ == "__main__":
    sys.exit(main())
