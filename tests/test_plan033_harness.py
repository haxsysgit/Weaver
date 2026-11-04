"""Plan 033: the harness reads why a turn failed, or was rescued, from
the runtime's state database."""

from __future__ import annotations

import importlib.util
import json
import sqlite3
import sys
from pathlib import Path

_SPEC = importlib.util.spec_from_file_location(
    "retrieval_verdict", Path(__file__).resolve().parents[1] / "scripts" / "retrieval_verdict.py"
)
harness = importlib.util.module_from_spec(_SPEC)
sys.modules["retrieval_verdict"] = harness
_SPEC.loader.exec_module(harness)


def _state_db(path: Path) -> Path:
    db = sqlite3.connect(path)
    db.execute(
        "CREATE TABLE run_event (id TEXT, conversation_id TEXT, sequence INTEGER, "
        "run_id TEXT, kind TEXT, body TEXT, created_at TEXT)"
    )
    rows = [
        ("1", "c1", 1, "r1", "run_queued", "{}"),
        ("2", "c1", 2, "r1", "run_failed", json.dumps({"error_category": "protocol_no_packet"})),
        ("3", "c2", 1, "r2", "run_completed", json.dumps({"reading": {"rescued_from": "protocol_empty_answer"}})),
        ("4", "c3", 1, "r3", "run_completed", json.dumps({"reading": {"lookups": 2}})),
    ]
    db.executemany("INSERT INTO run_event VALUES (?, ?, ?, ?, ?, ?, 't')", rows)
    db.commit()
    db.close()
    return path


def test_the_run_body_and_its_check_are_read_per_conversation(tmp_path) -> None:
    db = _state_db(tmp_path / "weaver.sqlite3")

    failed = harness.read_run_body(db, "c1")
    rescued = harness.read_run_body(db, "c2")
    fine = harness.read_run_body(db, "c3")

    assert failed == {"error_category": "protocol_no_packet", "kind": "run_failed"}
    assert harness.failure_site(failed) == "protocol_no_packet"
    assert harness.failure_site(rescued) == "protocol_empty_answer"
    assert harness.failure_site(fine) == ""


def test_a_missing_database_or_conversation_reads_as_empty(tmp_path) -> None:
    db = _state_db(tmp_path / "weaver.sqlite3")

    assert harness.read_run_body(db, "nope") == {}
    assert harness.read_run_body(tmp_path / "missing.sqlite3", "c1") == {}
