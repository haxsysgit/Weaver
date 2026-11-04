"""Keep the meaning index level with the shelf, in place (Plan 033.5).

The meaning half of search reads one Qdrant collection, `novel_chunks`.
This module extends it chapter by chapter with exactly the settings it was
built with, and never deletes or recreates the collection:

- a chapter is current when every stored point for it carries the raw
  chapter file's hash (`ChapterIndex.source_hash`, the hash citations use);
- a chapter that is missing, or whose stored hash differs, has its old
  points removed by a `chapter` filter (whatever their ids) and new points
  written with stable ids;
- current chapters are never re-embedded, so a second run writes nothing.

Chunk text is the chapter as Weaver reads it (scrape debris blanked, line
numbers unchanged), so the vectors match what the reading tools open.
Coverage is the highest chapter N such that every chapter 1 to N is on the
shelf and current; the prompt's reach line reads it from coverage.json.
"""

from __future__ import annotations

import dataclasses
import json
from collections import defaultdict
from collections.abc import Callable
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

from qdrant_client import models

from .chunker import Chunk, chunk_chapter
from .experiment import NOVEL_COLLECTION, _point_id
from .index_settings import (
    CHUNK_OVERLAP_LINES,
    CHUNK_TARGET_LINES,
    DENSE_MODEL,
    SPARSE_MODEL,
)
from .library import ChapterIndex

__all__ = [
    "CHUNK_OVERLAP_LINES",
    "CHUNK_TARGET_LINES",
    "DENSE_MODEL",
    "SPARSE_MODEL",
    "IndexBusy",
    "IndexCheck",
    "check_meaning_index",
    "index_chunks",
    "load_models",
    "open_index",
    "refresh_meaning_index",
    "stable_point_id",
    "update_meaning_index",
    "write_coverage",
]
# Chapters embedded per write; about three chunks each.
CHAPTERS_PER_BATCH = 16


@dataclass(frozen=True)
class IndexCheck:
    """What an update would do. Counts and chapter numbers only."""

    shelf: int
    missing: list[int]
    changed: list[int]
    current: int
    coverage: int

    def as_dict(self) -> dict[str, Any]:
        return {
            "shelf": self.shelf,
            "missing": len(self.missing),
            "changed": len(self.changed),
            "current": self.current,
            "coverage": self.coverage,
            "first_missing": self.missing[0] if self.missing else None,
            "first_changed": self.changed[0] if self.changed else None,
        }


def stable_point_id(chapter: int, line_start: int) -> int:
    """The same id in every process (Python's hash() is not)."""
    return _point_id(f"{chapter}:{line_start}")


def index_chunks(chapters: ChapterIndex, chapter: int) -> list[Chunk]:
    """One chapter's chunks with the pinned settings and the raw file hash."""
    raw_hash = chapters.source_hash(chapter)
    return [
        dataclasses.replace(chunk, source_hash=raw_hash)
        for chunk in chunk_chapter(
            chapter,
            chapters.read(chapter),
            target_lines=CHUNK_TARGET_LINES,
            overlap_lines=CHUNK_OVERLAP_LINES,
        )
    ]


def _stored_hashes(client) -> dict[int, set[str]]:
    stored: dict[int, set[str]] = defaultdict(set)
    if not client.collection_exists(NOVEL_COLLECTION):
        return stored
    offset = None
    while True:
        batch, offset = client.scroll(
            NOVEL_COLLECTION,
            limit=2000,
            offset=offset,
            with_payload=["chapter", "source_hash"],
            with_vectors=False,
        )
        for point in batch:
            payload = point.payload or {}
            stored[int(payload["chapter"])].add(str(payload.get("source_hash", "")))
        if offset is None:
            return stored


def check_meaning_index(client, chapters: ChapterIndex) -> IndexCheck:
    """Compare the index with the shelf. Reads only."""
    stored = _stored_hashes(client)
    shelf = chapters.last_chapter()
    missing: list[int] = []
    changed: list[int] = []
    current = 0
    coverage = 0
    contiguous = True
    for chapter in range(1, shelf + 1):
        if not chapters._path(chapter).exists():
            contiguous = False
            continue
        hashes = stored.get(chapter)
        if not hashes:
            missing.append(chapter)
            contiguous = False
        elif hashes != {chapters.source_hash(chapter)}:
            changed.append(chapter)
            contiguous = False
        else:
            current += 1
            if contiguous:
                coverage = chapter
    return IndexCheck(shelf=shelf, missing=missing, changed=changed, current=current, coverage=coverage)


def _ensure_collection(client, dense_size: int) -> None:
    """Create the collection only when it does not exist. Never drop it."""
    if client.collection_exists(NOVEL_COLLECTION):
        return
    client.create_collection(
        collection_name=NOVEL_COLLECTION,
        vectors_config={"dense": models.VectorParams(size=dense_size, distance=models.Distance.COSINE)},
        sparse_vectors_config={
            "bm25": models.SparseVectorParams(
                index=models.SparseIndexParams(on_disk=False),
                modifier=models.Modifier.IDF,
            ),
        },
    )


def _chapter_filter(chapter: int) -> models.FilterSelector:
    return models.FilterSelector(
        filter=models.Filter(
            must=[models.FieldCondition(key="chapter", match=models.MatchValue(value=chapter))]
        )
    )


def update_meaning_index(
    client,
    chapters: ChapterIndex,
    *,
    embedder,
    sparse_encoder: Callable[[str], models.SparseVector],
    on_batch: Callable[[list[int]], None] | None = None,
) -> dict[str, Any]:
    """Bring the index level with the shelf. Returns counts only."""
    before = check_meaning_index(client, chapters)
    todo = sorted(before.missing + before.changed)
    written = 0
    if todo:
        if not client.collection_exists(NOVEL_COLLECTION):
            _ensure_collection(client, len(next(iter(embedder.embed(["probe"])))))
        for start in range(0, len(todo), CHAPTERS_PER_BATCH):
            group = todo[start : start + CHAPTERS_PER_BATCH]
            chunks = [chunk for chapter in group for chunk in index_chunks(chapters, chapter)]
            dense = [list(vector) for vector in embedder.embed([c.text for c in chunks])]
            # Remove a chapter's old points only once its new vectors exist.
            for chapter in group:
                client.delete(NOVEL_COLLECTION, points_selector=_chapter_filter(chapter), wait=True)
            client.upsert(
                NOVEL_COLLECTION,
                [
                    models.PointStruct(
                        id=stable_point_id(chunk.chapter, chunk.line_start),
                        vector={"dense": dense[i], "bm25": sparse_encoder(chunk.text)},
                        payload={
                            "chapter": chunk.chapter,
                            "line_start": chunk.line_start,
                            "line_end": chunk.line_end,
                            "source_hash": chunk.source_hash,
                            "source_kind": "novel",
                        },
                    )
                    for i, chunk in enumerate(chunks)
                ],
                wait=True,
            )
            written += len(chunks)
            if on_batch is not None:
                on_batch(group)
    after = check_meaning_index(client, chapters) if todo else before
    return {
        "embedded_chapters": todo,
        "points_written": written,
        "before": before.as_dict(),
        "after": after.as_dict(),
        "coverage": after.coverage,
    }


def write_coverage(path: Path, coverage: int, *, now: datetime | None = None) -> None:
    """Record how far meaning search reaches (read by weaver.shelf)."""
    now = now or datetime.now(UTC)
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(".tmp")
    temporary.write_text(
        json.dumps({"novel_chunks_through": coverage, "measured": now.isoformat()}) + "\n",
        encoding="utf-8",
    )
    temporary.replace(path)


# ---------------------------------------------------------------------------
# The job: `weaver library index [--check]` and the weekly refresh step
# ---------------------------------------------------------------------------

NOVEL_ID = "shadow-slave"


class IndexBusy(Exception):
    """Another process (usually the running server) holds the index."""


def index_dir(project_root: Path) -> Path:
    return project_root / ".weaver" / "retrieval" / "index"


def coverage_path(project_root: Path) -> Path:
    return project_root / ".weaver" / "retrieval" / "coverage.json"


def open_index(path: Path):
    from qdrant_client import QdrantClient

    try:
        return QdrantClient(path=str(path))
    except RuntimeError as exc:
        if "already accessed" in str(exc):
            raise IndexBusy from None
        raise


def load_models():
    """The live index's embedders, on CPU (about 1.3 GB for bge-large)."""
    from fastembed import SparseTextEmbedding, TextEmbedding

    from .experiment import splade_encoder

    return TextEmbedding(DENSE_MODEL, threads=4), splade_encoder(SparseTextEmbedding(SPARSE_MODEL))


def refresh_meaning_index(
    project_root: Path,
    *,
    check_only: bool = False,
    models: Callable[[], tuple[Any, Any]] | None = None,
    progress: Callable[[list[int]], None] | None = None,
) -> dict[str, Any]:
    """Bring the meaning index level with the shelf. Counts only.

    States: checked (`check_only`), current, updated, waiting (another
    process holds the index; `reaches` is the recorded coverage), and
    no_index (this machine has no index; building one is the build
    script's job).
    """
    from weaver.shelf import search_coverage

    path = index_dir(project_root)
    if not path.is_dir():
        return {"state": "no_index"}
    try:
        client = open_index(path)
    except IndexBusy:
        return {"state": "waiting", "reaches": search_coverage(project_root)}
    try:
        chapters = ChapterIndex(project_root / "novels" / NOVEL_ID)
        check = check_meaning_index(client, chapters)
        recorded = search_coverage(project_root)
        if check_only:
            return {"state": "checked", **check.as_dict(), "recorded_coverage": recorded}
        if not check.missing and not check.changed:
            if recorded != check.coverage:
                write_coverage(coverage_path(project_root), check.coverage)
            return {"state": "current", "embedded": 0, "coverage": check.coverage, "points_written": 0}
        embedder, sparse_encoder = (models or load_models)()
        try:
            report = update_meaning_index(
                client, chapters, embedder=embedder, sparse_encoder=sparse_encoder, on_batch=progress
            )
        finally:
            # Even a run that stops part-way records how far search reaches.
            coverage = check_meaning_index(client, chapters).coverage
            write_coverage(coverage_path(project_root), coverage)
        return {
            "state": "updated",
            "embedded": len(report["embedded_chapters"]),
            "coverage": coverage,
            "points_written": report["points_written"],
        }
    finally:
        client.close()
