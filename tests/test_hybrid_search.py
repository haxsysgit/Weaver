"""Plan 033 round 2: semantic_search is a real hybrid (meaning + words),
its novel hits carry a short preview, and find_text trims instead of
failing. Synthetic chapters, in-memory Qdrant, no model, no network."""

from __future__ import annotations

import asyncio
import json
from pathlib import Path

import pytest
from qdrant_client import QdrantClient

from tests.test_retrieval_tools import FakeEmbedder, FakeSparse
from weaver.agent.tools import ToolExecutionContext, ToolRegistry
from weaver.retrieval.chunker import chunk_chapter
from weaver.retrieval.experiment import create_novel_collection
from weaver.retrieval.tools import QUERY_PREFIX, LibraryService, register_reading_tools


def ctx() -> ToolExecutionContext:
    return ToolExecutionContext(
        session_id="s",
        conversation_id="c",
        turn_id="t",
        call_id="1",
        cancel_event=asyncio.Event(),
    )


CHAPTERS = {
    1: [
        "Shadow Slave-Chapter 1 - 1: One",
        "the knight fights the dragon",
        "",
        "the dragon breathes fire",
    ],
    2: [
        "Shadow Slave-Chapter 2 - 2: Two",
        "a quiet morning by the river",
        "",
        "nothing happens at all",
    ],
    3: [
        "Shadow Slave-Chapter 3 - 3: Three",
        "rain weaves a wire harness from her jacket lining",
        "",
        "the stretcher is easier to pull",
    ],
}


def _write_novel(root: Path) -> Path:
    novel = root / "novel"
    (novel / "0001-0100").mkdir(parents=True)
    for n, lines in CHAPTERS.items():
        (novel / "0001-0100" / f"chapter-{n:04d}.txt").write_text(
            "\n".join(lines), encoding="utf-8"
        )
    return novel


class SpyEmbedder(FakeEmbedder):
    def __init__(self) -> None:
        self.seen: list[str] = []

    def embed(self, texts):
        self.seen.extend(texts)
        return super().embed(texts)


@pytest.fixture()
def hybrid(tmp_path: Path):
    """Dense index holds chapters 1 and 2 only (like the live index that
    stops before the shelf edge); chapter 3 is on the shelf but unembedded."""
    novel = _write_novel(tmp_path)
    client = QdrantClient(path=str(tmp_path / "qdrant"))
    chunks = []
    for n in (1, 2):
        chunks.extend(
            chunk_chapter(
                n,
                (novel / "0001-0100" / f"chapter-{n:04d}.txt").read_text(
                    encoding="utf-8"
                ),
            )
        )
    create_novel_collection(
        client, chunks, FakeEmbedder(), dense_size=384, sparse_encoder=FakeSparse()
    )
    embedder = SpyEmbedder()
    svc = LibraryService(
        novel,
        tmp_path / "nb",
        client=client,
        embedder=embedder,
        sparse_encoder=FakeSparse(),
    )
    yield svc, embedder
    client.close()


@pytest.mark.asyncio
async def test_word_search_reaches_chapters_the_vector_index_lacks(hybrid):
    svc, _ = hybrid
    res = await svc.semantic_search(
        {"query": "wire harness jacket lining", "surface": "novel"}, ctx()
    )
    hits = res["result"]["canonical_hits"]
    assert hits[0]["chapter"] == 3
    assert "words" in hits[0]["found_by"]


@pytest.mark.asyncio
async def test_word_search_works_without_any_vector_index(tmp_path: Path):
    novel = _write_novel(tmp_path)
    svc = LibraryService(novel, tmp_path / "nb")
    res = await svc.semantic_search(
        {"query": "dragon breathes fire", "surface": "novel"}, ctx()
    )
    hits = res["result"]["canonical_hits"]
    assert hits and hits[0]["chapter"] == 1
    assert hits[0]["found_by"] == ["words"]


@pytest.mark.asyncio
async def test_a_chapter_both_halves_find_is_marked_and_ranked_first(hybrid):
    svc, _ = hybrid
    res = await svc.semantic_search(
        {"query": "the knight fights the dragon", "surface": "novel"}, ctx()
    )
    top = res["result"]["canonical_hits"][0]
    assert top["chapter"] == 1
    assert set(top["found_by"]) == {"meaning", "words"}


@pytest.mark.asyncio
async def test_novel_hits_carry_a_short_preview_with_the_matching_line(hybrid):
    svc, _ = hybrid
    res = await svc.semantic_search(
        {"query": "stretcher easier to pull", "surface": "novel"}, ctx()
    )
    # The fake vectors rank chapters arbitrarily; only words can find chapter 3.
    top = next(h for h in res["result"]["canonical_hits"] if h["chapter"] == 3)
    assert "stretcher" in top["preview"]
    assert 0 < len(top["preview"]) <= 300
    assert top["passage_handle"].startswith("novel:0003:")


@pytest.mark.asyncio
async def test_meaning_query_uses_the_bge_query_prefix(hybrid):
    svc, embedder = hybrid
    await svc.semantic_search({"query": "dragon", "surface": "novel"}, ctx())
    assert embedder.seen == [QUERY_PREFIX + "dragon"]


@pytest.mark.asyncio
async def test_word_only_search_never_embeds(hybrid):
    svc, embedder = hybrid
    reg = ToolRegistry()
    register_reading_tools(reg, svc, word_only_search=True)
    tool = reg._tools["semantic_search"]
    res = await tool.handler(
        {"query": "the knight fights the dragon", "surface": "novel"}, ctx()
    )
    assert embedder.seen == []
    assert all(h["found_by"] == ["words"] for h in res["result"]["canonical_hits"])
    assert "word search" in tool.description.lower()


@pytest.mark.asyncio
async def test_word_search_honours_the_chapter_range(hybrid):
    svc, _ = hybrid
    res = await svc.semantic_search(
        {
            "query": "dragon river harness",
            "surface": "novel",
            "chapter_from": 2,
            "chapter_to": 2,
        },
        ctx(),
    )
    assert {h["chapter"] for h in res["result"]["canonical_hits"]} == {2}


def test_search_description_puts_novel_hits_first_and_names_notebook_reach(hybrid):
    svc, _ = hybrid
    reg = ToolRegistry()
    register_reading_tools(reg, svc)
    text = reg._tools["semantic_search"].description
    assert "notebook statements first" not in text
    assert "1-1000" in text
    assert "preview" in text


@pytest.mark.asyncio
async def test_find_text_trims_a_huge_result_instead_of_failing(tmp_path: Path):
    novel = tmp_path / "novel" / "0001-0100"
    novel.mkdir(parents=True)
    for n in range(1, 41):
        lines = [f"Shadow Slave-Chapter {n} - {n}: Many"]
        lines += [
            f"Sunny walks and Sunny talks, line {i} of a long stretch of prose " * 3
            for i in range(60)
        ]
        (novel / f"chapter-{n:04d}.txt").write_text("\n".join(lines), encoding="utf-8")
    svc = LibraryService(tmp_path / "novel", tmp_path / "nb")
    reg = ToolRegistry()
    register_reading_tools(reg, svc)
    limit = reg._tools["find_text"].max_result_chars
    res = await svc.find_text({"query": "Sunny", "limit": 50}, ctx())
    assert res["ok"] is True
    assert len(json.dumps(res)) <= limit
    assert res["result"]["trimmed"] is True
    assert "narrow" in res["result"]["note"]
    assert len(res["durable_evidence"]["hits"]) == len(res["result"]["hits"])


def test_give_up_rule_says_keep_looking_first():
    from weaver.chat_runtime import web_system_prompt

    prompt = web_system_prompt("", 3232)
    block = prompt.split("<when_you_cannot_find_it>")[1].split(
        "</when_you_cannot_find_it>"
    )[0]
    assert "before and after" in block
    assert "different words" in block
    assert block.index("keep looking") < block.index("could not find")


def test_arm_w_has_every_tool_with_word_only_search():
    from weaver.reading_arms import ARMS, READING_TOOLS

    w = ARMS["W"]
    assert w.tools == READING_TOOLS
    assert w.word_only_search is True
    assert ARMS["A"].word_only_search is False
