"""Slice 3 machinery tests: chapter index, handles, entity map,
connection traversal, notebook reader. Synthetic data only."""

from __future__ import annotations

import json
from pathlib import Path

import pytest

from weaver.retrieval.library import (
    ChapterIndex,
    ConnectionGraph,
    EntityMap,
    NotebookReader,
    make_passage_handle,
    parse_passage_handle,
)


@pytest.fixture()
def novel_dir(tmp_path: Path) -> Path:
    d = tmp_path / "novel"
    (d / "0001-0100").mkdir(parents=True)
    (d / "0101-0200").mkdir()
    lines = ["Shadow Slave-Chapter 1 - 1: Fake Title", "body one", "", "body two", "body three"]
    (d / "0001-0100" / "chapter-0001.txt").write_text("\n".join(lines))
    (d / "0101-0200" / "chapter-0150.txt").write_text("Shadow Slave-Chapter 150 - 150: Fake\nline two\nline three")
    return d


@pytest.fixture()
def notebook_dir(tmp_path: Path) -> Path:
    d = tmp_path / "nb"
    for sub in ("people", "places", "powers", "items", "groups", "reading"):
        (d / sub).mkdir(parents=True)
    (d / "people" / "person-sunny.md").write_text(
        "<!-- entity-id: person:sunny -->\n<!-- alias: person:mongrel -->\n# Sunny\n"
    )
    (d / "places" / "place-castle.md").write_text("<!-- entity-id: place:castle -->\n# Castle\n")
    rec = {
        "chapter": 98,
        "statements": [
            {
                "id": "statement:chapter-0098:05",
                "kind": "confirmed_fact",
                "statement": "Sunny kills the leader.",
                "evidence": [{"chapter": 98, "location": {"line_start": 143, "line_end": 157}}],
                "links": ["person:sunny", "person:mongrel"],
                "first_known_chapter": 98,
            }
        ],
    }
    (d / "reading" / "0098.json").write_text(json.dumps(rec))
    (d / "connections.jsonl").write_text(
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
    return d


def test_chapter_index_resolves_layout_and_hashes(novel_dir: Path):
    idx = ChapterIndex(novel_dir)
    assert idx.source_hash(1) == idx.source_hash(1)
    assert len(idx.source_hash(1)) == 16
    assert idx.source_hash(150) != idx.source_hash(1)


def test_open_lines_skips_title_and_clamps(novel_dir: Path):
    idx = ChapterIndex(novel_dir)
    p = idx.open_lines(1, 2, 4)
    assert p.text == "body one\n\nbody two"
    assert p.line_start == 2 and p.line_end == 4
    # line 1 is the title, never evidence
    p = idx.open_lines(1, 1, 1)
    assert "Fake Title" in p.text  # clamped, but callers must not cite line 1
    with pytest.raises(ValueError):
        idx.open_lines(1, 99, 100)


def test_passage_handle_round_trip():
    h = make_passage_handle(98, 143, 157)
    assert h == "novel:0098:143-157"
    assert parse_passage_handle(h) == (98, 143, 157)
    assert parse_passage_handle("novel:98:10-5") is None  # end < start
    assert parse_passage_handle("bogus") is None
    assert parse_passage_handle("novel:0098:1") is None


def test_open_handle(novel_dir: Path):
    idx = ChapterIndex(novel_dir)
    p = idx.open_handle("novel:0001:2-2")
    assert p.text == "body one"


def test_entity_map_resolves_aliases(notebook_dir: Path):
    em = EntityMap(notebook_dir)
    assert em.resolve("person:mongrel") == "person:sunny"
    assert em.resolve("person:sunny") == "person:sunny"
    assert em.resolve("place:castle") == "place:castle"
    assert em.resolve("power:nonexistent") == "power:nonexistent"  # unchanged
    assert em.is_known("person:mongrel")
    assert not em.is_known("power:nonexistent")


def test_connection_graph_bfs(notebook_dir: Path):
    g = ConnectionGraph(notebook_dir)
    reached = g.reachable(["statement:chapter-0098:05"], depth=2)
    assert "person:sunny" in reached


def test_notebook_reader_loads_all_statements(notebook_dir: Path):
    r = NotebookReader(notebook_dir)
    assert len(r.statements) == 1
    assert r.statement_chapter("statement:chapter-0098:05") == 98
