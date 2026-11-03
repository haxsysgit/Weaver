"""Plan 033 patch 2: every "unsafe response" failure names the check that
stopped it, and the harness records it per answer.

Run from the repository root:

    uv run python deliverables/033-every-turn-answers/patches/p2_failure_sites.py

All or nothing: every old text must match exactly once.

Why: 35 of 372 Plan 032 turns gave the reader nothing with the same
message ("The model returned an unsafe response."), which nine different
checks in `run_turn` produce, and the failure record kept no detail. The
tag goes in the existing `error_category` field, which the runner already
saves in the `run_failed` event. Reader-facing text does not change.
"""

from __future__ import annotations

EDITS: list[tuple[str, str, str]] = []
NEW_FILES: dict[str, str] = {}
TURN = "src/weaver/agent/turn.py"


def edit(path: str, old: str, new: str) -> None:
    EDITS.append((path, old, new))


# Site 1: publication repair failed (the single-line join).
edit(
    TURN,
    """                logger.warning(
                    "publication repair failed: %s",
                    ", ".join(finding.code for finding in fallback_findings),
                )
                exit_reason = TurnExitReason.MODEL_FAILED
                safe_failure = safe_error("model_protocol")
""",
    """                logger.warning(
                    "publication repair failed: %s",
                    ", ".join(finding.code for finding in fallback_findings),
                )
                exit_reason = TurnExitReason.MODEL_FAILED
                error_category = "protocol_publication_repair_1"
                safe_failure = safe_error("model_protocol")
""",
)
# Site 2: publication repair failed (the multi-line join).
edit(
    TURN,
    """                    logger.warning(
                        "publication repair failed: %s",
                        ", ".join(
                            finding.code for finding in fallback_findings
                        ),
                    )
                    exit_reason = TurnExitReason.MODEL_FAILED
                    safe_failure = safe_error("model_protocol")
""",
    """                    logger.warning(
                        "publication repair failed: %s",
                        ", ".join(
                            finding.code for finding in fallback_findings
                        ),
                    )
                    exit_reason = TurnExitReason.MODEL_FAILED
                    error_category = "protocol_publication_repair_2"
                    safe_failure = safe_error("model_protocol")
""",
)
# Site 3: the reply did not come from the requested model.
edit(
    TURN,
    """        if not _response_matches_model(response, model):
            exit_reason = TurnExitReason.MODEL_FAILED
            safe_failure = safe_error("model_protocol")
""",
    """        if not _response_matches_model(response, model):
            exit_reason = TurnExitReason.MODEL_FAILED
            error_category = "protocol_model_mismatch"
            safe_failure = safe_error("model_protocol")
""",
)
# Site 4: the candidate answer was rejected too many times.
edit(
    TURN,
    """                    logger.warning(
                        "candidate rejected %d times (last stop=%s)",
                        candidate_rejections,
                        last_stop_reason,
                    )
                    exit_reason = TurnExitReason.MODEL_FAILED
                    safe_failure = safe_error("model_protocol")
""",
    """                    logger.warning(
                        "candidate rejected %d times (last stop=%s)",
                        candidate_rejections,
                        last_stop_reason,
                    )
                    exit_reason = TurnExitReason.MODEL_FAILED
                    error_category = "protocol_candidate_rejected"
                    safe_failure = safe_error("model_protocol")
""",
)
# Site 5: no reading packet for the final pass.
edit(
    TURN,
    """                if not packet:
                    exit_reason = TurnExitReason.MODEL_FAILED
                    safe_failure = safe_error("model_protocol")
""",
    """                if not packet:
                    exit_reason = TurnExitReason.MODEL_FAILED
                    error_category = "protocol_no_packet"
                    safe_failure = safe_error("model_protocol")
""",
)
# Site 6: the reading packet build raised.
edit(
    TURN,
    """            if packet_builder is not None and packet_build_failed:
                exit_reason = TurnExitReason.MODEL_FAILED
                safe_failure = safe_error("model_protocol")
""",
    """            if packet_builder is not None and packet_build_failed:
                exit_reason = TurnExitReason.MODEL_FAILED
                error_category = "protocol_packet_build_failed"
                safe_failure = safe_error("model_protocol")
""",
)
# Site 7: a stop reason the loop does not handle.
edit(
    TURN,
    """            ModelStopReason.TOOL_USE,
            ModelStopReason.STOP,
        ):
            exit_reason = TurnExitReason.MODEL_FAILED
            safe_failure = safe_error("model_protocol")
""",
    """            ModelStopReason.TOOL_USE,
            ModelStopReason.STOP,
        ):
            exit_reason = TurnExitReason.MODEL_FAILED
            error_category = "protocol_stop_reason"
            raw_stop_reason = response.raw_stop_reason or ""
            safe_failure = safe_error("model_protocol")
""",
)
# Site 8: no tool calls, or tool calls that fail the safety check.
edit(
    TURN,
    """        if not tool_calls or not _tool_calls_are_safe(
            tool_calls,
            known_call_ids,
        ):
            exit_reason = TurnExitReason.MODEL_FAILED
            safe_failure = safe_error("model_protocol")
""",
    """        if not tool_calls or not _tool_calls_are_safe(
            tool_calls,
            known_call_ids,
        ):
            exit_reason = TurnExitReason.MODEL_FAILED
            error_category = (
                "protocol_unsafe_tool_calls" if tool_calls else "protocol_no_tool_calls"
            )
            raw_stop_reason = response.raw_stop_reason or ""
            safe_failure = safe_error("model_protocol")
""",
)
# Site 9: the turn ended with no accepted answer.
edit(
    TURN,
    """        exit_reason = TurnExitReason.MODEL_FAILED
        safe_failure = safe_error("empty_answer")
""",
    """        exit_reason = TurnExitReason.MODEL_FAILED
        error_category = "protocol_empty_answer"
        safe_failure = safe_error("empty_answer")
""",
)

# The harness reads why each turn failed (or was rescued) from the state DB.
HARNESS = "scripts/retrieval_verdict.py"
edit(
    HARNESS,
    """def parse_stream(text: str) -> tuple[list[tuple[str, dict[str, Any]]], str, str]:""",
    '''def read_run_body(db_path: Path, conversation_id: str) -> dict[str, Any]:
    """The last run_completed or run_failed event body for a conversation.

    Plan 033: the answer stream does not say which check failed a turn, or
    whether the gap answer rescued it; the runtime's state database does.
    Read-only; returns {} when there is no database or no such event.
    """
    import sqlite3

    if not db_path.exists():
        return {}
    db = sqlite3.connect(f"file:{db_path.as_posix()}?mode=ro", uri=True)
    try:
        row = db.execute(
            "SELECT kind, body FROM run_event WHERE conversation_id = ? "
            "AND kind IN ('run_completed', 'run_failed') "
            "ORDER BY sequence DESC LIMIT 1",
            (conversation_id,),
        ).fetchone()
    finally:
        db.close()
    if row is None:
        return {}
    body = json.loads(row[1] or "{}")
    body["kind"] = row[0]
    return body


def failure_site(run_body: dict[str, Any]) -> str:
    """The check that failed the turn, or that the gap answer rescued."""
    reading = run_body.get("reading") or {}
    return run_body.get("error_category") or reading.get("rescued_from") or ""


def parse_stream(text: str) -> tuple[list[tuple[str, dict[str, Any]]], str, str]:''',
)
edit(
    HARNESS,
    """                tool_errors = failures.take()
""",
    """                tool_errors = failures.take()
                run_body = read_run_body(state / "weaver.sqlite3", conversation)
                site = failure_site(run_body)
""",
)
edit(
    HARNESS,
    """                    "tool_errors": tool_errors,
""",
    """                    "tool_errors": tool_errors,
                    "run_body": run_body,
                    "site": site,
""",
)
edit(
    HARNESS,
    """                    f"{' TOOL ERRORS ' + str(tool_errors) if tool_errors else ''}",
""",
    """                    f"{' TOOL ERRORS ' + str(tool_errors) if tool_errors else ''}"
                    f"{' SITE ' + site if site else ''}",
""",
)

NEW_FILES["tests/test_turn_failure_sites.py"] = '''"""Plan 033: a failed turn names the check that stopped it."""

from __future__ import annotations

from tests.test_agent_turn import (
    execute_turn,
    make_registry,
    scripted_layer,
    tool_call,
    tool_response,
)
from weaver.agent.turn import TurnExitReason


async def test_duplicate_call_ids_name_the_unsafe_tool_calls_check() -> None:
    starts = {}
    first = tool_call("same-id", "echo", '{"message":"one"}')
    second = tool_call("same-id", "echo", '{"message":"two"}')
    layer, model, _ = scripted_layer(tool_response(first, second))

    result = await execute_turn(
        layer, model, registry=make_registry(starts), active_tools=("echo",)
    )

    assert result.exit_reason == TurnExitReason.MODEL_FAILED
    assert result.error_category == "protocol_unsafe_tool_calls"
    assert result.raw_stop_reason == "tool_calls"
    assert starts == {}


async def test_a_tool_use_stop_with_no_calls_names_its_check() -> None:
    layer, model, _ = scripted_layer(tool_response())

    result = await execute_turn(layer, model, active_tools=("echo",))

    assert result.exit_reason == TurnExitReason.MODEL_FAILED
    assert result.error_category == "protocol_no_tool_calls"

'''

NEW_FILES["tests/test_plan033_harness.py"] = '''"""Plan 033: the harness reads why a turn failed, or was rescued, from
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
'''


if __name__ == "__main__":
    from _apply import run

    run(EDITS, NEW_FILES)
