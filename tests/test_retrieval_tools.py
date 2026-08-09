"""Slice 3 tool tests: semantic_search and read_chapters on synthetic
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
    ch3 = ["Shadow Slave-Chapter 3 - 3: Fake", "the fake knight sneaks through the ruins"]
    ch98 = ["Shadow Slave-Chapter 98 - 98: Fake", "the leader of the hunting party sneers", "", "sunny kills the leader with the fake kunai"]
    (novel / "0001-0100" / "chapter-0001.txt").write_text("\n".join(ch1))
    (novel / "0001-0100" / "chapter-0003.txt").write_text("\n".join(ch3))
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


def ctx() -> ToolExecutionContext:
    return ToolExecutionContext(
        session_id="s", conversation_id="c", turn_id="t", call_id="1",
        cancel_event=asyncio.Event(),
    )


@pytest.mark.asyncio
async def test_semantic_search_returns_grouped_hits(service: LibraryService):
    res = await service.semantic_search({"query": "who killed the hunting party leader"}, ctx())
    assert res["ok"] is True
    result = res["result"]
    chapters = {h["chapter"] for h in result["canonical_hits"]}
    assert 98 in chapters
    for h in result["canonical_hits"]:
        assert h["passage_handle"].startswith("novel:")
    assert any(h["chapter"] == 98 for h in result["notebook_hits"])


@pytest.mark.asyncio
async def test_surface_narrowing(service: LibraryService):
    res = await service.semantic_search({"query": "kunai", "surface": "novel"}, ctx())
    assert res["result"]["notebook_hits"] == []
    assert res["result"]["canonical_hits"]
    res = await service.semantic_search({"query": "kunai", "surface": "notebook"}, ctx())
    assert res["result"]["canonical_hits"] == []
    assert res["result"]["notebook_hits"]


@pytest.mark.asyncio
async def test_read_chapters_opens_novel_only(service: LibraryService):
    handle = make_passage_handle(98, 3, 4)
    res = await service.read_chapters({"handle": handle}, ctx())
    assert res["ok"] is True
    r = res["result"]
    assert r["chapter"] == 98
    assert "kunai" in r["text"]
    assert len(r["source_hash"]) == 16


@pytest.mark.asyncio
async def test_read_chapters_rejects_bad_handle(service: LibraryService):
    res = await service.read_chapters({"handle": "novel:0098:99-100"}, ctx())
    assert res["ok"] is False
    res = await service.read_chapters({"handle": "bogus"}, ctx())
    assert res["ok"] is False


def test_registration(service: LibraryService):
    from weaver.agent.tools import EffectKind, ToolRegistry

    reg = ToolRegistry()
    register_reading_tools(reg, service)
    expected = ["semantic_search", "read_chapters", "find_text", "browse_chapters", "who_is"]
    for name in expected:
        assert reg.has(name), name
    schemas = reg.active_schemas(tuple(expected))
    assert [s.name for s in schemas] == expected
    assert reg._tools["semantic_search"].effect_kind is EffectKind.READ


class _EmptySparse:
    """Sparse that never matches: canonical hits can then only come from
    the dense arm (the notebook arm still runs sparse - BM42 at runtime -
    so a raising spy would explode there, not in the novel arm)."""

    def __call__(self, text):
        return models.SparseVector(indices=[], values=[])


@pytest.mark.asyncio
async def test_dense_first_when_embedder_present(service: LibraryService):
    svc = LibraryService(
        service.novel_dir,
        service.notebook_dir,
        client=service.client,
        embedder=FakeEmbedder(),
        sparse_encoder=_EmptySparse(),
    )
    res = await svc.semantic_search({"query": "who killed the hunting party leader"}, ctx())
    assert res["ok"] is True
    hits = res["result"]["canonical_hits"]
    assert hits, "novel hits must come from the dense arm when sparse never matches"
    assert hits[0]["chapter"] == 98


@pytest.mark.asyncio
async def test_find_text_phrase_mode(service: LibraryService):
    res = await service.find_text({"query": "fake kunai", "mode": "phrase"}, ctx())
    assert res["ok"] is True
    hits = res["result"]["hits"]
    assert any(h["chapter"] == 98 and h["text"] == "sunny kills the leader with the fake kunai" for h in hits)
    # durable evidence carries pointers, never prose
    for h in res["durable_evidence"]["hits"]:
        assert h["passage_handle"].startswith("novel:")
        assert h["source_hash"]
    assert "kunai" not in str(res["durable_evidence"])


@pytest.mark.asyncio
async def test_find_text_phrase_skips_title_line(service: LibraryService):
    res = await service.find_text({"query": "Fake", "mode": "phrase"}, ctx())
    hits = res["result"]["hits"]
    assert all(h["line"] != 1 for h in hits)


@pytest.mark.asyncio
async def test_find_text_speaker_mode(service: LibraryService):
    # the fixture chapter has "the leader of the hunting party sneers"
    res = await service.find_text({"query": "hunting party", "mode": "speaker"}, ctx())
    assert res["ok"] is True
    assert res["result"]["mode"] == "speaker"


@pytest.mark.asyncio
async def test_browse_chapters_returns_titles_and_previews(service: LibraryService):
    res = await service.browse_chapters({"start": 1, "end": 3}, ctx())
    assert res["ok"] is True
    chapters = res["result"]["chapters"]
    assert [c["chapter"] for c in chapters] == [1, 3]  # missing chapters skipped
    assert chapters[0]["title"] == "Fake"
    assert "knight" in chapters[0]["preview"]
    assert res["durable_evidence"]["kind"] == "browse_chapters"


@pytest.mark.asyncio
async def test_browse_chapters_rejects_wide_range(service: LibraryService):
    res = await service.browse_chapters({"start": 1, "end": 100}, ctx())
    assert res["ok"] is False
    assert "50" in res["error"]


@pytest.mark.asyncio
async def test_who_is_resolves_alias_and_title(service: LibraryService):
    res = await service.who_is({"name": "Mongrel"}, ctx())
    assert res["ok"] is True
    entity = res["result"]["entity"]
    assert entity["entity_id"] == "person:sunny"
    assert "person:mongrel" in entity["aliases"]
    res = await service.who_is({"name": "Sunny"}, ctx())
    assert res["result"]["entity"]["entity_id"] == "person:sunny"


@pytest.mark.asyncio
async def test_who_is_unknown_name_suggests(service: LibraryService):
    res = await service.who_is({"name": "Sunnykins"}, ctx())
    assert res["ok"] is True
    assert res["result"]["found"] is False
    assert "person:sunny" in res["result"]["suggestions"]


@pytest.mark.asyncio
async def test_find_text_phrase_is_case_insensitive(service: LibraryService):
    # Plan 15 (2026-08-09): a reader says "noctis" lowercase and must
    # still find "Noctis" in the text (the novel capitalizes names).
    upper = await service.find_text({"query": "FAKE KUNAI", "mode": "phrase"}, ctx())
    lower = await service.find_text({"query": "fake kunai", "mode": "phrase"}, ctx())
    mixed = await service.find_text({"query": "FaKe KuNaI", "mode": "phrase"}, ctx())
    assert upper["result"]["hits"] == lower["result"]["hits"]
    assert lower["result"]["hits"] == mixed["result"]["hits"]
    assert any(
        h["text"] == "sunny kills the leader with the fake kunai"
        for h in lower["result"]["hits"]
    )


@pytest.mark.asyncio
async def test_find_text_hit_carries_the_next_line(service: LibraryService):
    # the novel writes dialogue on its own line with the attribution on
    # the NEXT line, so hits must carry the following line
    res = await service.find_text({"query": "kunai", "mode": "phrase"}, ctx())
    hit = [h for h in res["result"]["hits"] if h["chapter"] == 98][0]
    assert hit["text"] == "sunny kills the leader with the fake kunai"
    assert hit["next_text"] == ""  # last line of the chapter


@pytest.mark.asyncio
async def test_find_text_together_finds_chapters_where_all_groups_match(
    service: LibraryService,
):
    # groups are AND across, OR inside: [["sunny"], ["kunai"]] -> ch98
    res = await service.find_text(
        {"mode": "together", "groups": [["sunny"], ["kunai"]]}, ctx()
    )
    assert res["ok"] is True
    hits = res["result"]["hits"]
    assert [h["chapter"] for h in hits] == [98]
    hit = hits[0]
    assert hit["distance"] == 0  # same line
    assert hit["span_start"] == hit["span_end"]
    # durable evidence carries the span handle, never prose
    for h in res["durable_evidence"]["hits"]:
        assert h["passage_handle"].startswith("novel:0098:")


@pytest.mark.asyncio
async def test_find_text_together_or_inside_a_group_and_proximity(
    service: LibraryService,
    tmp_path: Path,
):
    # a fresh chapter: weaver at the top, death far below - the closest
    # cross-group pair is 28 lines apart
    novel = tmp_path / "novel" / "0001-0100"
    novel.mkdir(parents=True, exist_ok=True)
    lines = ["Shadow Slave-Chapter 55 - 55: Fake"]
    lines += ["Weaver spoke to Noctis by the fire"] + ["noise"] * 27
    lines += ["He died there, a death of sparks"] + ["the crow watched"]
    (novel / "chapter-0055.txt").write_text("\n".join(lines))

    # OR inside the group: any death word counts
    res = await service.find_text(
        {
            "mode": "together",
            "groups": [["weaver"], ["died", "death", "killed"]],
        },
        ctx(),
    )
    assert res["ok"] is True
    ch55 = [h for h in res["result"]["hits"] if h["chapter"] == 55][0]
    assert ch55["distance"] == 28  # line 2 (weaver) to line 30 (death)
    assert ch55["span_start"] == 2
    assert ch55["span_end"] == 30

    # within_lines drops chapters where the closest mentions are far apart
    res = await service.find_text(
        {
            "mode": "together",
            "groups": [["weaver"], ["death"]],
            "within_lines": 5,
        },
        ctx(),
    )
    hits55 = [h for h in res["result"]["hits"] if h["chapter"] == 55]
    assert hits55 == []  # 28 > 5, so the chapter is dropped


@pytest.mark.asyncio
async def test_find_text_together_is_case_insensitive(service: LibraryService):
    res = await service.find_text(
        {"mode": "together", "groups": [["WEAVER"], ["NOCTIS"]]}, ctx()
    )
    assert res["ok"] is True
    # the fixture has no weaver/noctis chapter; shape must still validate
    assert isinstance(res["result"]["hits"], list)


@pytest.mark.asyncio
async def test_find_text_together_requires_groups(service: LibraryService):
    res = await service.find_text({"mode": "together"}, ctx())
    assert res["ok"] is False
    assert res["error_category"] == "validation"


@pytest.mark.asyncio
async def test_browse_titles_only_covers_a_whole_volume(service: LibraryService):
    res = await service.browse_chapters(
        {"start": 1, "end": 98, "titles_only": True}, ctx()
    )
    assert res["ok"] is True
    titles = {c["chapter"]: c["title"] for c in res["result"]["titles"]}
    assert titles[1] == "Fake"
    assert titles[98] == "Fake"
    assert 3 in titles  # missing chapters are simply absent
    # durable evidence carries pointers only, never title text
    assert all("chapter" in h for h in res["durable_evidence"]["chapters"])
    assert "Fake" not in str(res["durable_evidence"])


@pytest.mark.asyncio
async def test_who_is_related_lists_graph_neighbors(tmp_path: Path) -> None:
    nb = tmp_path / "nb"
    for sub in ("people", "places", "powers", "items", "groups", "reading"):
        (nb / sub).mkdir(parents=True)
    (nb / "people" / "person-noctis.md").write_text(
        "<!-- entity-id: person:noctis -->\n# Noctis\n"
    )
    (nb / "people" / "person-weaver.md").write_text(
        "<!-- entity-id: person:weaver -->\n# Weaver\n"
    )
    rec = {
        "chapter": 650,
        "statements": [
            {
                "id": "statement:chapter-0650:01",
                "kind": "confirmed_fact",
                "statement": "Noctis and Weaver talk by the fire.",
                "chapter": 650,
                "evidence": [{"chapter": 650, "location": {"line_start": 2, "line_end": 6}}],
                "links": ["person:noctis", "person:weaver"],
                "first_known_chapter": 650,
            }
        ],
    }
    (nb / "reading" / "0650.json").write_text(json.dumps(rec))
    conns = []
    for target in ("person:noctis", "person:weaver"):
        conns.append(
            {
                "id": f"conn-0650-{target.split(':')[1]}",
                "source": "statement:chapter-0650:01",
                "target": target,
                "relation": "links",
                "evidence": [{"chapter": 650}],
                "first_known_chapter": 650,
            }
        )
    (nb / "connections.jsonl").write_text(
        "\n".join(json.dumps(c) for c in conns)
    )

    service = LibraryService(
        novel_dir=tmp_path / "novel",
        notebook_dir=nb,
    )
    res = await service.who_is({"name": "noctis", "related": True}, ctx())
    assert res["ok"] is True
    result = res["result"]
    assert result["found"] is True
    related = {e["entity_id"] for e in result["related_entities"]}
    assert "person:weaver" in related

    plain = await service.who_is({"name": "noctis"}, ctx())
    assert "related_entities" not in plain["result"]
