"""Plan 033.5: the meaning index keeps up with the shelf, in place.

The live index is extended chapter by chapter with exactly the settings it
was built with. A chapter is current when its stored source hash equals
the raw file's hash; missing or changed chapters are re-embedded, and
nothing else is touched. The collection itself is never deleted.
"""

from __future__ import annotations

import hashlib
import json
import subprocess
import sys
from pathlib import Path

import pytest
from qdrant_client import QdrantClient, models

from weaver.retrieval.experiment import NOVEL_COLLECTION, bm25_sparse_vector
from weaver.retrieval.library import ChapterIndex
from weaver.retrieval.meaning_index import (
    CHUNK_OVERLAP_LINES,
    CHUNK_TARGET_LINES,
    DENSE_MODEL,
    SPARSE_MODEL,
    check_meaning_index,
    index_chunks,
    stable_point_id,
    update_meaning_index,
    write_coverage,
)
from weaver.shelf import search_coverage

DEBRIS = "This page has been blocked by an extension"


class FakeEmbedder:
    """Deterministic 8-dim vectors; records every text it embeds."""

    def __init__(self) -> None:
        self.texts: list[str] = []

    def embed(self, texts):
        for text in texts:
            self.texts.append(text)
            digest = hashlib.sha256(text.encode("utf-8")).digest()
            yield [b / 255.0 + 0.01 for b in digest[:8]]


def chapter_text(chapter: int, version: str = "a", *, debris: bool = False) -> str:
    lines = [f"Shadow Slave-Chapter {chapter}: Title {chapter}"]
    for paragraph in range(30):
        lines.append(f"Chapter {chapter} {version} paragraph {paragraph} tells of a quiet road.")
        lines.append("")
        if debris and paragraph == 3:
            lines.append(DEBRIS)
            lines.append("")
    return "\n".join(lines) + "\n"


def shelve(novel_dir: Path, chapter: int, version: str = "a", *, debris: bool = False) -> None:
    lo = ((chapter - 1) // 100) * 100 + 1
    path = novel_dir / f"{lo:04d}-{lo + 99:04d}" / f"chapter-{chapter:04d}.txt"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(chapter_text(chapter, version, debris=debris), encoding="utf-8", newline="\n")


@pytest.fixture
def novel_dir(tmp_path) -> Path:
    path = tmp_path / "novels" / "shadow-slave"
    for chapter in (1, 2, 3):
        shelve(path, chapter)
    return path


@pytest.fixture
def client(tmp_path):
    c = QdrantClient(path=str(tmp_path / "index"))
    yield c
    c.close()


def update(client, novel_dir, embedder=None):
    return update_meaning_index(
        client,
        ChapterIndex(novel_dir),
        embedder=embedder or FakeEmbedder(),
        sparse_encoder=bm25_sparse_vector,
    )


def points(client) -> dict[int, dict]:
    out: dict[int, dict] = {}
    offset = None
    while True:
        batch, offset = client.scroll(NOVEL_COLLECTION, limit=500, offset=offset, with_payload=True)
        out.update({p.id: p.payload for p in batch})
        if offset is None:
            return out


def test_the_pinned_settings_are_the_ones_the_live_index_was_built_with() -> None:
    assert (CHUNK_TARGET_LINES, CHUNK_OVERLAP_LINES) == (40, 19)
    assert DENSE_MODEL == "BAAI/bge-large-en-v1.5"
    assert SPARSE_MODEL == "Qdrant/bm42-all-minilm-l6-v2-attentions"


def test_new_chapters_are_added_with_the_raw_file_hash(client, novel_dir) -> None:
    report = update(client, novel_dir)

    assert report["embedded_chapters"] == [1, 2, 3]
    stored = points(client)
    index = ChapterIndex(novel_dir)
    assert {p["chapter"] for p in stored.values()} == {1, 2, 3}
    for payload in stored.values():
        assert payload["source_hash"] == index.source_hash(payload["chapter"])
        assert payload["source_kind"] == "novel"
        assert set(payload) == {"chapter", "line_start", "line_end", "source_hash", "source_kind"}
    check = check_meaning_index(client, index)
    assert (check.missing, check.changed, check.current, check.coverage) == ([], [], 3, 3)


def test_a_changed_chapter_is_replaced_and_no_other_is_embedded(client, novel_dir) -> None:
    update(client, novel_dir)
    before = points(client)
    shelve(novel_dir, 2, "b")
    index = ChapterIndex(novel_dir)
    assert check_meaning_index(client, index).changed == [2]

    embedder = FakeEmbedder()
    report = update(client, novel_dir, embedder)

    assert report["embedded_chapters"] == [2]
    assert all("Chapter 2 b" in text for text in embedder.texts)
    after = points(client)
    assert {i: p for i, p in after.items() if p["chapter"] != 2} == {
        i: p for i, p in before.items() if p["chapter"] != 2
    }
    hashes = {p["source_hash"] for p in after.values() if p["chapter"] == 2}
    assert hashes == {index.source_hash(2)}


def test_old_points_of_a_chapter_go_whatever_their_ids(client, novel_dir) -> None:
    update(client, novel_dir)
    # A point left by the old build: an id from Python's per-process hash().
    client.upsert(
        NOVEL_COLLECTION,
        [
            models.PointStruct(
                id=123456789,
                vector={"dense": [0.5] * 8, "bm25": bm25_sparse_vector("old")},
                payload={"chapter": 3, "line_start": 2, "line_end": 9, "source_hash": "stale", "source_kind": "novel"},
            )
        ],
    )
    update(client, novel_dir)
    assert 123456789 not in points(client)


def test_a_second_run_embeds_and_writes_nothing(client, novel_dir) -> None:
    update(client, novel_dir)
    before = points(client)
    embedder = FakeEmbedder()

    report = update(client, novel_dir, embedder)

    assert report["embedded_chapters"] == []
    assert report["points_written"] == 0
    assert embedder.texts == []
    assert points(client) == before


def test_point_ids_are_the_same_in_two_processes() -> None:
    code = "from weaver.retrieval.meaning_index import stable_point_id; print(stable_point_id(3128, 42))"
    runs = {
        subprocess.run([sys.executable, "-c", code], capture_output=True, text=True, check=True).stdout.strip()
        for _ in range(2)
    }
    assert runs == {str(stable_point_id(3128, 42))}
    assert 0 <= stable_point_id(3128, 42) < 2**63


def test_coverage_stops_below_the_first_missing_or_stale_chapter(client, novel_dir) -> None:
    for chapter in (4, 5):
        shelve(novel_dir, chapter)
    update(client, novel_dir)
    client.delete(
        NOVEL_COLLECTION,
        points_selector=models.FilterSelector(
            filter=models.Filter(must=[models.FieldCondition(key="chapter", match=models.MatchValue(value=3))])
        ),
    )
    index = ChapterIndex(novel_dir)
    check = check_meaning_index(client, index)
    assert (check.missing, check.coverage, check.current) == ([3], 2, 4)

    shelve(novel_dir, 2, "b")
    check = check_meaning_index(client, ChapterIndex(novel_dir))
    assert (check.changed, check.coverage) == ([2], 1)


def test_coverage_stops_below_a_gap_on_the_shelf(client, novel_dir) -> None:
    shelve(novel_dir, 5)
    update(client, novel_dir)
    check = check_meaning_index(client, ChapterIndex(novel_dir))
    assert (check.shelf, check.coverage, check.missing) == (5, 3, [])


class WatchedClient:
    """Wraps a client and fails the test on any write."""

    def __init__(self, inner) -> None:
        self.inner = inner

    def __getattr__(self, name):
        if name in {"upsert", "delete", "delete_collection", "recreate_collection", "create_collection"}:
            raise AssertionError(f"check must not call {name}")
        return getattr(self.inner, name)


def test_the_check_writes_nothing(client, novel_dir) -> None:
    update(client, novel_dir)
    shelve(novel_dir, 4)
    shelve(novel_dir, 1, "b")

    check = check_meaning_index(WatchedClient(client), ChapterIndex(novel_dir))

    assert (check.missing, check.changed, check.coverage) == ([4], [1], 0)


class NoDropClient:
    """Wraps a client and fails the test if the collection is dropped."""

    def __init__(self, inner) -> None:
        self.inner = inner

    def __getattr__(self, name):
        if name in {"delete_collection", "recreate_collection"}:
            raise AssertionError(f"update must never call {name}")
        return getattr(self.inner, name)


def test_the_update_never_drops_the_collection(client, novel_dir) -> None:
    update(NoDropClient(client), novel_dir)
    shelve(novel_dir, 2, "b")
    shelve(novel_dir, 4)
    report = update(NoDropClient(client), novel_dir)
    assert report["embedded_chapters"] == [2, 4]


def test_chunk_text_is_what_weaver_reads_and_the_hash_is_the_raw_file(tmp_path) -> None:
    novel = tmp_path / "novels" / "shadow-slave"
    shelve(novel, 7, debris=True)
    index = ChapterIndex(novel)

    chunks = index_chunks(index, 7)

    assert chunks
    assert all(DEBRIS not in c.text for c in chunks)
    assert {c.source_hash for c in chunks} == {index.source_hash(7)}
    raw_lines = index._path(7).read_text(encoding="utf-8").splitlines()
    # Line numbers still match the raw file: debris lines are blanked.
    assert max(c.line_end for c in chunks) <= len(raw_lines)


def test_coverage_is_written_where_the_prompt_reads_it(tmp_path) -> None:
    path = tmp_path / ".weaver" / "retrieval" / "coverage.json"
    write_coverage(path, 3232)
    assert search_coverage(tmp_path) == 3232
    assert json.loads(path.read_text(encoding="utf-8"))["novel_chunks_through"] == 3232


def test_the_full_build_uses_the_pinned_settings_and_the_whole_shelf() -> None:
    import importlib.util
    import inspect

    from weaver.retrieval.library import build_library_index

    params = inspect.signature(build_library_index).parameters
    assert params["chunk_target"].default == CHUNK_TARGET_LINES
    assert params["chunk_overlap"].default == CHUNK_OVERLAP_LINES
    assert params["dense_model"].default == DENSE_MODEL
    assert params["sparse_model"].default == SPARSE_MODEL
    assert params["ceiling"].default is None  # None means the shelf's last chapter

    spec = importlib.util.spec_from_file_location("build_library_index_script", "scripts/build_library_index.py")
    script = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(script)
    args = script.parser().parse_args([])
    assert args.ceiling is None
    assert (args.dense, args.sparse) == (DENSE_MODEL, SPARSE_MODEL)
