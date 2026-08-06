"""Plan 014 slice 2: retrieval experiment tests.

Synthetic story data only: a tiny fake novel (a few chapters of fake
text) and fake notebook statements. No real story content. The dense
embedder is a deterministic fake so tests never download models.
"""

from __future__ import annotations

import json
from pathlib import Path

import pytest
from qdrant_client import QdrantClient, models

from weaver.retrieval.experiment import (
    ArmResult,
    arm_dense_novel,
    arm_exact_novel,
    arm_exact_notebook,
    arm_hybrid,
    arm_notebook_connections,
    bm25_sparse_vector,
    ceiling_filter,
    chunk_chapter,
    create_novel_collection,
    create_notebook_collection,
    load_questions,
    score_arm,
)


class FakeEmbedder:
    """Deterministic bag-of-words dense vectors (384 dims)."""

    def embed(self, texts):
        import hashlib

        out = []
        for t in texts:
            v = [0.0] * 384
            for token in t.lower().split():
                h = hashlib.sha256(token.encode()).digest()
                idx = int.from_bytes(h[:2], "big") % 384
                v[idx] += 1.0
            out.append(v)
        return out


@pytest.fixture()
def novel_text() -> dict[int, str]:
    """Fake chapters 1-4, ~100 lines each, with distinct content.
    Chapter 2 is the only one about a dragon, chapter 3 about a witch."""
    chapters = {}
    subjects = {
        1: "the fake knight of chapter one walks the fake plain",
        2: "the fake knight of chapter two slays the fake dragon with a blade",
        3: "the fake witch of chapter three curses the fake forest",
        4: "the fake farmer of chapter four harvests the fake wheat",
    }
    for n in range(1, 5):
        lines = [f"Shadow Slave-Chapter {n} - Fake Title"]
        for i in range(2, 100):
            lines.append(f"line {i}: {subjects[n]}")
        chapters[n] = "\n".join(lines)
    return chapters


@pytest.fixture()
def notebook_statements() -> list[dict]:
    return [
        {
            "id": "statement:chapter-0002:01",
            "kind": "confirmed_fact",
            "statement": "The fake knight of chapter two defeated the fake dragon.",
            "chapter": 2,
            "first_known_chapter": 2,
            "links": ["person:fake-knight", "power:fake-dragon"],
        },
        {
            "id": "statement:chapter-0003:01",
            "kind": "confirmed_fact",
            "statement": "The fake witch of chapter three cursed the fake forest.",
            "chapter": 3,
            "first_known_chapter": 3,
            "links": ["person:fake-witch"],
        },
    ]


@pytest.fixture()
def client(tmp_path: Path, novel_text: dict[int, str], notebook_statements: list[dict]) -> QdrantClient:
    c = QdrantClient(path=str(tmp_path / "qdrant"))
    chunks = []
    for n, text in sorted(novel_text.items()):
        chunks.extend(chunk_chapter(n, text))
    create_novel_collection(c, chunks, FakeEmbedder())
    create_notebook_collection(c, notebook_statements)
    return c


def test_chunk_chapter_starts_at_line_2():
    """Line 1 is the title heading, never story text."""
    chunks = chunk_chapter(1, "Title line\nbody one\nbody two\nbody three")
    assert chunks[0].line_start == 2
    assert chunks[0].line_end == 4
    assert chunks[0].text == "body one\nbody two\nbody three"


def test_chunk_chapter_splits_into_multiple_chunks():
    # 199 one-line paragraphs separated by blank lines
    text = "Title\n" + "\n\n".join(f"body {i}" for i in range(1, 200))
    chunks = chunk_chapter(1, text, target_lines=60, overlap_lines=0)
    assert len(chunks) == 4
    assert chunks[0].line_start == 2  # line 1 is the title
    assert chunks[0].line_end == 120  # 60 paragraphs, blank separators between
    assert chunks[-1].line_end == 398


def test_bm25_sparse_vector_is_deterministic():
    v1 = bm25_sparse_vector("The fake knight fights the fake dragon")
    v2 = bm25_sparse_vector("The fake knight fights the fake dragon")
    assert v1.indices == v2.indices
    assert v1.values == v2.values
    assert len(v1.indices) == len(set(v1.indices))


def test_ceiling_filter():
    f = ceiling_filter(300)
    assert f == [models.FieldCondition(key="chapter", range=models.Range(lte=300))]
    assert ceiling_filter(None) == []


def test_arm_exact_novel_finds_chapter(client: QdrantClient):
    hits = arm_exact_novel(client, "fake knight defeats fake dragon", ceiling=4)
    assert hits
    assert hits[0]["chapter"] == 2
    assert hits[0]["line_start"] >= 2


def test_arm_exact_novel_ceiling_blocks_higher_chapters(client: QdrantClient):
    hits = arm_exact_novel(client, "fake knight defeats fake dragon", ceiling=1)
    assert all(h["chapter"] <= 1 for h in hits)


def test_arm_dense_novel_finds_chapter(client: QdrantClient):
    hits = arm_dense_novel(client, FakeEmbedder(), "knight slays the dragon", ceiling=4)
    assert hits[0]["chapter"] == 2


def test_arm_exact_notebook_finds_statement(client: QdrantClient):
    hits = arm_exact_notebook(client, "fake knight defeated the fake dragon", ceiling=4)
    assert hits
    assert hits[0]["statement_id"] == "statement:chapter-0002:01"
    assert hits[0]["kind"] == "confirmed_fact"


def test_arm_hybrid_rrf_and_dbsf(client: QdrantClient):
    q = "fake knight defeated the fake dragon"
    rrf = arm_hybrid(client, FakeEmbedder(), q, ceiling=4, fusion=models.Fusion.RRF)
    dbsf = arm_hybrid(client, FakeEmbedder(), q, ceiling=4, fusion=models.Fusion.DBSF)
    assert rrf and dbsf
    assert rrf[0]["chapter"] == 2
    assert dbsf[0]["chapter"] == 2


def test_arm_notebook_connections_follows_links(client: QdrantClient):
    connections = {
        "statement:chapter-0002:01": ["statement:chapter-0003:01", "person:fake-knight"],
        "statement:chapter-0003:01": ["person:fake-witch"],
    }
    hits = arm_notebook_connections(
        client, "fake knight defeated the fake dragon", connections, ceiling=4
    )
    chapters = [h["chapter"] for h in hits]
    assert 2 in chapters  # seed statement
    assert 3 in chapters  # connected statement


def test_arm_notebook_connections_depth_cap(client: QdrantClient):
    connections = {
        "statement:chapter-0002:01": ["statement:chapter-0003:01"],
        "statement:chapter-0003:01": ["statement:chapter-0004:01"],
    }
    # chapter 4 has no statement in the notebook, so depth cap just stops
    hits = arm_notebook_connections(
        client, "fake knight defeated the fake dragon", connections, ceiling=4, depth=2
    )
    assert hits


def test_score_arm_hit_at_k_and_misses(client: QdrantClient):
    from weaver.retrieval.experiment import Question

    questions = [
        Question(
            id="q1",
            text="fake knight defeated the fake dragon",
            expected_chapter=2,
            expected_lines=(5, 20),
            statement_id="statement:chapter-0002:01",
            paraphrase=False,
        ),
        Question(
            id="q2",
            text="totally unrelated question about the fake ocean",
            expected_chapter=4,
            expected_lines=(5, 20),
            statement_id=None,
            paraphrase=True,
        ),
    ]
    results = [
        ArmResult(arm="a", question_id="q1", hits=[{"chapter": 2, "line_start": 10, "line_end": 15, "score": 1.0}]),
        ArmResult(arm="a", question_id="q2", hits=[{"chapter": 1, "line_start": 2, "line_end": 99, "score": 0.5}]),
    ]
    score = score_arm(results, questions)
    assert score.hit_at_1 == 0.5
    assert score.hit_at_5 == 0.5
    assert score.mrr == 0.5
    assert score.misses == ["q2"]


def _write_json(path: Path, data) -> Path:
    path.mkdir(parents=True, exist_ok=True)
    p = path / "questions.json"
    p.write_text(json.dumps(data))
    return p


def test_load_questions_round_trip(tmp_path: Path):
    p = _write_json(
        tmp_path,
        [
            {
                "id": "q1",
                "text": "who did it",
                "expected_chapter": 5,
                "expected_lines": [1, 2],
                "statement_id": "statement:chapter-0005:01",
                "paraphrase": True,
            }
        ],
    )
    questions = load_questions(p)
    assert questions[0].id == "q1"
    assert questions[0].paraphrase is True
    assert questions[0].expected_lines == (1, 2)
