"""Slice 3 tool tests: search_library and open_chapters on synthetic
data with a real in-memory Qdrant. No LLM, no network."""

from __future__ import annotations

import json
import asyncio
from pathlib import Path

import pytest
from qdrant_client import QdrantClient, models

from weaver.agent.tools import ToolExecutionContext
from weaver.retrieval.library import make_passage_handle
from weaver.retrieval.tools import LibraryService, register_reading_tools


class FakeEmbedder:
    def embed(self, texts):
        import hashlib

        out = []
        for t in texts:
            v = [0.0] * 384
            for token in t.lower().split():
                h = hashlib.sha256(token.encode()).digest()
                v[int.from_bytes(h[:2], "big") % 384] += 1.0
            out.append(v)
        return out


class FakeSparse:
    def __call__(self, text):
        import hashlib
        import re

        seen = {}
        for t in re.findall(r"[a-z0-9']+", text.lower()):
            h = int.from_bytes(hashlib.sha256(t.encode()).digest()[:4], "big")
            seen.setdefault(h, 0)
            seen[h] += 1
        return models.SparseVector(indices=sorted(seen), values=[seen[i] for i in sorted(seen)])


@pytest.fixture()
def service(tmp_path: Path) -> LibraryService:
    novel = tmp_path / "novel"
    (novel / "0001-0100").mkdir(parents=True)
    (novel / "0101-0200").mkdir()
    ch1 = ["Shadow Slave-Chapter 1 - 1: Fake", "the fake knight fights the fake dragon", "", "the dragon breathes fake fire"]
    ch98 = ["Shadow Slave-Chapter 98 - 98: Fake", "the leader of the hunting party sneers", "", "sunny kills the leader with the fake kunai"]
    (novel / "0001-0100" / "chapter-0001.txt").write_text("\n".join(ch1))
    (novel / "0001-0100" / "chapter-0098.txt").write_text("\n".join(ch98))

    nb = tmp_path / "nb"
    for sub in ("people", "places", "powers", "items", "groups", "reading"):
        (nb / sub).mkdir(parents=True)
    (nb / "people" / "person-sunny.md").write_text("<!-- entity-id: person:sunny -->\n<!-- alias: person:mongrel -->\n# Sunny\n")
    rec = {
        "chapter": 98,
        "statements": [
            {
                "id": "statement:chapter-0098:05",
                "kind": "confirmed_fact",
                "statement": "Sunny kills the hunting party leader with a kunai.",
                "chapter": 98,
                "evidence": [{"chapter": 98, "location": {"line_start": 3, "line_end": 4}}],
                "links": ["person:sunny"],
                "first_known_chapter": 98,
            }
        ],
    }
    (nb / "reading" / "0098.json").write_text(json.dumps(rec))
    (nb / "connections.jsonl").write_text(
        json.dumps(
            {
                "id": "conn-0098-01",
                "source": "statement:chapter-0098:05",
                "target": "person:sunny",
                "relation": "links",
                "evidence": [{"chapter": 98}],
                "first_known_chapter": 98,
            }
        )
        + "\n"
    )

    client = QdrantClient(path=str(tmp_path / "qdrant"))
    from weaver.retrieval.experiment import create_novel_collection, create_notebook_collection

    from weaver.retrieval.chunker import chunk_chapter

    chunks = []
    for n in (1, 98):
        chunks.extend(chunk_chapter(n, (novel / ("0001-0100" if n < 100 else "0101-0200") / f"chapter-{n:04d}.txt").read_text()))
    create_novel_collection(client, chunks, FakeEmbedder(), dense_size=384, sparse_encoder=FakeSparse())
    create_notebook_collection(client, json.loads((nb / "reading" / "0098.json").read_text())["statements"], sparse_encoder=FakeSparse())

    svc = LibraryService(novel, nb, client=client, embedder=FakeEmbedder(), sparse_encoder=FakeSparse())
    return svc


def ctx(ceiling: int | None = None) -> ToolExecutionContext:
    return ToolExecutionContext(
        session_id="s", conversation_id="c", turn_id="t", call_id="1",
        cancel_event=asyncio.Event(),
        reader_ceiling=ceiling,
    )


@pytest.mark.asyncio
async def test_search_library_returns_grouped_hits(service: LibraryService):
    res = await service.search_library({"query": "who killed the hunting party leader"}, ctx(ceiling=100))
    assert res["ok"] is True
    result = res["result"]
    assert result["ceiling"] == 100
    chapters = {h["chapter"] for h in result["canonical_hits"]}
    assert 98 in chapters
    for h in result["canonical_hits"]:
        assert h["passage_handle"].startswith("novel:")
    assert any(h["chapter"] == 98 for h in result["notebook_hits"])


@pytest.mark.asyncio
async def test_ceiling_blocks_above(service: LibraryService):
    res = await service.search_library({"query": "fake dragon"}, ctx(ceiling=50))
    assert res["ok"] is True
    for h in res["result"]["canonical_hits"]:
        assert h["chapter"] <= 50


@pytest.mark.asyncio
async def test_model_cannot_widen_ceiling(service: LibraryService):
    res = await service.search_library({"query": "kunai", "chapter_to": 500}, ctx(ceiling=50))
    assert res["ok"] is False
    assert "ceiling" in res["error"]


@pytest.mark.asyncio
async def test_surface_narrowing(service: LibraryService):
    res = await service.search_library({"query": "kunai", "surface": "novel"}, ctx(ceiling=100))
    assert res["result"]["notebook_hits"] == []
    assert res["result"]["canonical_hits"]
    res = await service.search_library({"query": "kunai", "surface": "notebook"}, ctx(ceiling=100))
    assert res["result"]["canonical_hits"] == []
    assert res["result"]["notebook_hits"]


@pytest.mark.asyncio
async def test_open_chapters_opens_novel_only(service: LibraryService):
    handle = make_passage_handle(98, 3, 4)
    res = await service.open_chapters({"handle": handle}, ctx(ceiling=100))
    assert res["ok"] is True
    r = res["result"]
    assert r["chapter"] == 98
    assert "kunai" in r["text"]
    assert len(r["source_hash"]) == 16


@pytest.mark.asyncio
async def test_open_chapters_respects_ceiling(service: LibraryService):
    res = await service.open_chapters({"handle": make_passage_handle(98, 3, 4)}, ctx(ceiling=50))
    assert res["ok"] is False
    assert "ceiling" in res["error"]


@pytest.mark.asyncio
async def test_open_chapters_rejects_bad_handle(service: LibraryService):
    res = await service.open_chapters({"handle": "novel:0098:99-100"}, ctx(ceiling=100))
    assert res["ok"] is False
    res = await service.open_chapters({"handle": "bogus"}, ctx(ceiling=100))
    assert res["ok"] is False


def test_registration(service: LibraryService):
    from weaver.agent.tools import EffectKind, ToolRegistry

    reg = ToolRegistry()
    register_reading_tools(reg, service)
    assert reg.has("search_library")
    assert reg.has("open_chapters")
    schemas = reg.active_schemas(("search_library", "open_chapters"))
    assert [s.name for s in schemas] == ["search_library", "open_chapters"]
    assert reg._tools["search_library"].effect_kind is EffectKind.READ
