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
from weaver.retrieval.tools import LibraryService, WhoIsInput, register_reading_tools


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


# ---------------------------------------------------------------------------
# find_text 'together': a varied story fixture, many different questions
# ---------------------------------------------------------------------------


def _story_chapters(tmp_path: Path) -> LibraryService:
    """A small novel where every chapter answers a different question."""
    novel = tmp_path / "story-novel"
    (novel / "0001-0100").mkdir(parents=True)
    chapters = {
        10: [
            "Shadow Slave-Chapter 10 - 10: The Gates",
            "sunny arrives at the academy gates",
            "the guards say nothing",
            "nephis stands in the courtyard",
        ],
        11: [
            "Shadow Slave-Chapter 11 - 11: Training",
            "sunny trains alone in the hall",
        ]
        + ["noise"] * 80
        + ["nephis walks past the far window"],
        12: [
            "Shadow Slave-Chapter 12 - 12: The Truth",
            "cassie asks about the truth",
            "the wind answers",
            "sunny says nothing",
            "the wind answers again",
            "the wind answers once more",
            "the wind answers yet again",
            "the wind answers forever",
            "nephis watches them",
            "the truth stays buried",
        ],
        20: [
            "Shadow Slave-Chapter 20 - 20: The Weave",
            "weaver wove the spell",
            "the sky split",
            "the spell binds all dreams",
        ],
        21: [
            "Shadow Slave-Chapter 21 - 21: Memories",
            "memories are shaped by the spell",
            "forged from fragments of dreams",
            "created when a nightmare ends",
        ],
        30: [
            "Shadow Slave-Chapter 30 - 30: The Hunt",
            "the mountain king roars",
            "the valley shakes",
            "sunny strikes the mountain king down",
            "the dust settles",
            "effie watches the mountain king die",
            "the mountain king is slain",
        ],
        31: [
            "Shadow Slave-Chapter 31 - 31: Alone",
            "effie hunts alone in the valley",
        ],
        40: [
            "Shadow Slave-Chapter 40 - 40: The Seven",
            "weaver spoke first",
            "nether answered",
            "hope laughed",
            "ariel stayed silent",
            "the rest did not speak",
        ],
        41: [
            "Shadow Slave-Chapter 41 - 41: Alone",
            "weaver speaks of nothing at all",
        ],
        50: [
            "Shadow Slave-Chapter 50 - 50: The Dragon's Lair",
            "the cave is empty",
            "nothing moves",
        ],
        51: [
            "Shadow Slave-Chapter 51 - 51: Quiet",
            "the dragon sleeps beneath the hill",
        ],
        60: [
            "Shadow Slave-Chapter 60 - 60: Dusk",
            "the shadow stretches long",
        ],
    }
    for num, lines in chapters.items():
        (novel / "0001-0100" / f"chapter-{num:04d}.txt").write_text("\n".join(lines))
    return LibraryService(novel_dir=novel, notebook_dir=tmp_path / "empty-nb")


@pytest.fixture()
def story(tmp_path: Path) -> LibraryService:
    return _story_chapters(tmp_path)


async def _together(
    service: LibraryService, args: dict
) -> dict:
    return await service.find_text({"mode": "together", **args}, ctx())


@pytest.mark.asyncio
async def test_together_first_meeting_uses_proximity(story: LibraryService):
    # 'where did sunny and nephis first meet?' - the tight co-occurrence
    # wins; chapters where they are both present but far apart are dropped
    res = await _together(story, {"groups": [["sunny"], ["nephis"]], "within_lines": 4})
    assert res["ok"] is True
    hits = res["result"]["hits"]
    assert [h["chapter"] for h in hits] == [10]
    assert hits[0]["distance"] == 2  # lines 2 and 4
    assert hits[0]["span_start"] == 2
    assert hits[0]["span_end"] == 4


@pytest.mark.asyncio
async def test_together_without_proximity_orders_by_distance(
    story: LibraryService,
):
    # no bound: every co-mention chapter, tightest pair FIRST
    res = await _together(story, {"groups": [["sunny"], ["nephis"]]})
    assert [h["chapter"] for h in res["result"]["hits"]] == [10, 12, 11]
    by_ch = {h["chapter"]: h for h in res["result"]["hits"]}
    assert by_ch[11]["distance"] == 81  # far apart in the same chapter
    by_ch = {h["chapter"]: h for h in res["result"]["hits"]}
    assert by_ch[11]["distance"] == 81  # far apart in the same chapter


@pytest.mark.asyncio
async def test_together_who_was_there_when_it_happened(story: LibraryService):
    # 'who was with sunny when the mountain king died?' - three groups,
    # OR inside the event group
    res = await _together(
        story,
        {"groups": [["sunny"], ["mountain king"], ["died", "killed", "slain", "die"]]},
    )
    assert [h["chapter"] for h in res["result"]["hits"]] == [30]


@pytest.mark.asyncio
async def test_together_synonym_group_for_unfamiliar_wording(
    story: LibraryService,
):
    # 'where does the story explain how memories are made?' - the exact
    # verb is unknown, so the event group carries synonyms
    res = await _together(
        story, {"groups": [["memories"], ["forge", "crafted", "created"]]}
    )
    assert [h["chapter"] for h in res["result"]["hits"]] == [21]
    assert res["result"]["hits"][0]["distance"] == 1  # lines 2 and 3


@pytest.mark.asyncio
async def test_together_all_groups_must_appear(story: LibraryService):
    # 'which chapter lists the daemons?' - a chapter mentioning only one
    # of the four names must NOT match
    res = await _together(
        story, {"groups": [["weaver"], ["nether"], ["hope"], ["ariel"]]}
    )
    assert [h["chapter"] for h in res["result"]["hits"]] == [40]


@pytest.mark.asyncio
async def test_together_title_only_terms_do_not_count(story: LibraryService):
    # chapter 50 mentions the dragon only in its title heading - line 1
    # is never story text, so it must not match
    res = await _together(story, {"groups": [["dragon"], ["sleeps"]]})
    assert [h["chapter"] for h in res["result"]["hits"]] == [51]


@pytest.mark.asyncio
async def test_together_limit_takes_the_nearest_first(story: LibraryService):
    res = await _together(story, {"groups": [["sunny"], ["nephis"]], "limit": 2})
    assert [h["chapter"] for h in res["result"]["hits"]] == [10, 12]


@pytest.mark.asyncio
async def test_together_usage_loop_opens_the_span(story: LibraryService):
    # the real usage: together locates, then read_chapters opens the
    # tight span - the passage must actually contain both terms
    res = await _together(story, {"groups": [["sunny"], ["nephis"]], "within_lines": 4})
    hit = res["result"]["hits"][0]
    handle = make_passage_handle(hit["chapter"], hit["span_start"], hit["span_end"])
    opened = await story.read_chapters({"handle": handle}, ctx())
    assert opened["ok"] is True
    text = opened["result"]["text"].lower()
    assert "sunny" in text and "nephis" in text


@pytest.mark.asyncio
async def test_together_rejects_whitespace_groups(story: LibraryService):
    res = await _together(story, {"groups": [["   "], ["sunny"]]})
    assert res["ok"] is False
    assert res["error_category"] == "validation"


# ---------------------------------------------------------------------------
# who_is: name resolution only (aliases, incl. multi-word names)
# ---------------------------------------------------------------------------


@pytest.mark.asyncio
async def test_who_is_resolves_multi_word_aliases(tmp_path: Path) -> None:
    nb = tmp_path / "nb"
    for sub in ("people", "places", "powers", "items", "groups", "reading"):
        (nb / sub).mkdir(parents=True)
    (nb / "people" / "person-ariel.md").write_text(
        "<!-- entity-id: person:ariel -->\n"
        "<!-- alias: Demon of Dread -->\n"
        "# Ariel\n"
    )
    (nb / "people" / "person-sunny.md").write_text(
        "<!-- entity-id: person:sunny -->\n"
        "<!-- alias: Lost from Light -->\n"
        "# Sunny\n"
    )
    service = LibraryService(novel_dir=tmp_path / "novel", notebook_dir=nb)

    for name, expected in [
        ("demon of dread", "person:ariel"),
        ("DEMON OF DREAD", "person:ariel"),
        ("ariel", "person:ariel"),
        ("lost from light", "person:sunny"),
        ("sunny", "person:sunny"),
    ]:
        found = service.entities.lookup(name)
        assert found is not None, name
        assert found["entity_id"] == expected, name


@pytest.mark.asyncio
async def test_who_is_is_name_resolution_only(tmp_path: Path) -> None:
    # the tool carries no relation machinery - just the name field
    schema = WhoIsInput.model_json_schema()
    assert list(schema["properties"].keys()) == ["name"]


# ---------------------------------------------------------------------------
# lore_path: shortest connections through the story map
# ---------------------------------------------------------------------------


def _path_notebook(tmp_path: Path) -> Path:
    nb = tmp_path / "nb"
    for sub in ("people", "places", "powers", "items", "groups", "reading"):
        (nb / sub).mkdir(parents=True)
    (nb / "people" / "person-noctis.md").write_text(
        "<!-- entity-id: person:noctis -->\n# Noctis\n"
    )
    (nb / "people" / "person-weaver.md").write_text(
        "<!-- entity-id: person:weaver -->\n# Weaver\n"
    )
    (nb / "people" / "person-sunny.md").write_text(
        "<!-- entity-id: person:sunny -->\n# Sunny\n"
    )
    (nb / "people" / "person-cassie.md").write_text(
        "<!-- entity-id: person:cassie -->\n# Cassie\n"
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
            },
            {
                "id": "statement:chapter-0650:02",
                "kind": "confirmed_fact",
                "statement": "Sunny listens to the fire talk.",
                "chapter": 650,
                "evidence": [{"chapter": 650, "location": {"line_start": 8, "line_end": 9}}],
                "links": ["person:sunny", "person:weaver"],
                "first_known_chapter": 650,
            },
            {
                "id": "statement:chapter-0650:03",
                "kind": "confirmed_fact",
                "statement": "Cassie waits outside.",
                "chapter": 650,
                "evidence": [{"chapter": 650, "location": {"line_start": 11, "line_end": 12}}],
                "links": ["person:cassie"],
                "first_known_chapter": 650,
            },
        ],
    }
    (nb / "reading" / "0650.json").write_text(json.dumps(rec))
    conns = []
    for i, (source, target) in enumerate(
        [
            ("statement:chapter-0650:01", "person:noctis"),
            ("statement:chapter-0650:01", "person:weaver"),
            ("statement:chapter-0650:02", "person:sunny"),
            ("statement:chapter-0650:02", "person:weaver"),
            ("statement:chapter-0650:03", "person:cassie"),
        ]
    ):
        conns.append(
            {
                "id": f"conn-0650-{i}",
                "source": source,
                "target": target,
                "relation": "links",
                "evidence": [{"chapter": 650}],
                "first_known_chapter": 650,
            }
        )
    (nb / "connections.jsonl").write_text("\n".join(json.dumps(c) for c in conns))
    return nb


@pytest.mark.asyncio
async def test_lore_path_shortest_chain_with_connecting_statements(
    tmp_path: Path,
) -> None:
    nb = _path_notebook(tmp_path)
    service = LibraryService(novel_dir=tmp_path / "novel", notebook_dir=nb)
    res = await service.lore_path({"from_name": "noctis", "to_name": "weaver"}, ctx())
    assert res["ok"] is True
    result = res["result"]
    assert result["found"] is True
    assert result["hops"] == 2
    assert result["path"] == [
        "person:noctis",
        "statement:chapter-0650:01",
        "person:weaver",
    ]
    # the connecting statement text is in the steps, so the model can
    # judge whether the relation is meaningful or incidental
    step_text = [s for s in result["steps"] if s["kind"] == "statement"][0]
    assert step_text["text"] == "Noctis and Weaver talk by the fire."
    assert step_text["chapter"] == 650


@pytest.mark.asyncio
async def test_lore_path_longer_chain(tmp_path: Path) -> None:
    nb = _path_notebook(tmp_path)
    service = LibraryService(novel_dir=tmp_path / "novel", notebook_dir=nb)
    # sunny -> weaver -> noctis is 4 hops through two statements
    res = await service.lore_path({"from_name": "sunny", "to_name": "noctis"}, ctx())
    assert res["result"]["found"] is True
    assert res["result"]["hops"] == 4
    assert res["result"]["path"] == [
        "person:sunny",
        "statement:chapter-0650:02",
        "person:weaver",
        "statement:chapter-0650:01",
        "person:noctis",
    ]


@pytest.mark.asyncio
async def test_lore_path_no_connection_and_unresolved_names(
    tmp_path: Path,
) -> None:
    nb = _path_notebook(tmp_path)
    service = LibraryService(novel_dir=tmp_path / "novel", notebook_dir=nb)
    # cassie has no shared statements: no path
    res = await service.lore_path({"from_name": "cassie", "to_name": "sunny"}, ctx())
    assert res["result"]["found"] is False
    assert "no connection" in res["result"]["note"]
    # a name the story map does not know at all
    res = await service.lore_path({"from_name": "noctis", "to_name": "mordret"}, ctx())
    assert res["result"]["found"] is False
    assert "not in the story map" in res["result"]["note"]


@pytest.mark.asyncio
async def test_lore_path_max_hops_bound(tmp_path: Path) -> None:
    nb = _path_notebook(tmp_path)
    service = LibraryService(novel_dir=tmp_path / "novel", notebook_dir=nb)
    # the 4-hop sunny->noctis chain is rejected under max_hops 2
    res = await service.lore_path(
        {"from_name": "sunny", "to_name": "noctis", "max_hops": 2}, ctx()
    )
    assert res["result"]["found"] is False
    assert "within 2 hops" in res["result"]["note"]
