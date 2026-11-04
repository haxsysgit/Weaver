"""Plan 033.5: `weaver library index [--check]` and the busy-index case.

The command brings the meaning index level with the shelf; `--check`
reports counts and writes nothing. When another process (the running
server) holds the embedded index, the step reports that it is waiting
and how far search reaches, instead of failing.
"""

from __future__ import annotations

import json

from qdrant_client import QdrantClient

from tests.test_meaning_index import FakeEmbedder, shelve
from weaver import cli
from weaver.retrieval.experiment import bm25_sparse_vector
from weaver.retrieval.meaning_index import refresh_meaning_index
from weaver.shelf import search_coverage


def fake_models():
    return FakeEmbedder(), bm25_sparse_vector


def make_project(tmp_path, chapters=(1, 2, 3)):
    novel = tmp_path / "novels" / "shadow-slave"
    for chapter in chapters:
        shelve(novel, chapter)
    (tmp_path / ".weaver" / "retrieval" / "index").mkdir(parents=True)
    return tmp_path


def test_the_update_brings_the_index_level_and_records_coverage(tmp_path) -> None:
    root = make_project(tmp_path)

    result = refresh_meaning_index(root, models=fake_models)

    assert result["state"] == "updated"
    assert (result["embedded"], result["coverage"]) == (3, 3)
    assert search_coverage(root) == 3
    again = refresh_meaning_index(root, models=fake_models)
    assert again == {"state": "current", "embedded": 0, "coverage": 3, "points_written": 0}


def test_the_check_reports_counts_and_writes_nothing(tmp_path) -> None:
    root = make_project(tmp_path)

    def no_models():
        raise AssertionError("the check must not load models")

    result = refresh_meaning_index(root, check_only=True, models=no_models)

    assert result["state"] == "checked"
    assert (result["missing"], result["changed"], result["current"], result["coverage"]) == (3, 0, 0, 0)
    assert search_coverage(root) is None


def test_a_busy_index_reports_waiting_and_how_far_search_reaches(tmp_path) -> None:
    root = make_project(tmp_path)
    refresh_meaning_index(root, models=fake_models)
    shelve(root / "novels" / "shadow-slave", 4)
    holder = QdrantClient(path=str(root / ".weaver" / "retrieval" / "index"))
    try:
        result = refresh_meaning_index(root, models=fake_models)
    finally:
        holder.close()
    assert result == {"state": "waiting", "reaches": 3}


def test_no_index_on_this_machine_is_left_alone(tmp_path) -> None:
    shelve(tmp_path / "novels" / "shadow-slave", 1)
    result = refresh_meaning_index(tmp_path, models=fake_models)
    assert result == {"state": "no_index"}
    assert not (tmp_path / ".weaver" / "retrieval" / "index").exists()


def test_the_command_checks_and_updates(tmp_path, monkeypatch, capsys) -> None:
    root = make_project(tmp_path)
    monkeypatch.setenv("WEAVER_PROJECT_ROOT", str(root))
    monkeypatch.setattr("weaver.retrieval.meaning_index.load_models", fake_models)

    assert cli.run(["library", "index", "--check"]) == 0
    checked = json.loads(capsys.readouterr().out)
    assert (checked["state"], checked["missing"]) == ("checked", 3)

    assert cli.run(["library", "index"]) == 0
    updated = json.loads(capsys.readouterr().out)
    assert (updated["state"], updated["coverage"]) == ("updated", 3)


def test_the_command_says_the_index_is_busy(tmp_path, monkeypatch, capsys) -> None:
    root = make_project(tmp_path)
    monkeypatch.setenv("WEAVER_PROJECT_ROOT", str(root))
    monkeypatch.setattr("weaver.retrieval.meaning_index.load_models", fake_models)
    holder = QdrantClient(path=str(root / ".weaver" / "retrieval" / "index"))
    try:
        assert cli.run(["library", "index"]) == 1
    finally:
        holder.close()
    assert "in use" in capsys.readouterr().err
