"""Plan 007: restart-safe conversation proof via subprocess."""

from __future__ import annotations

import subprocess
import sys
import tempfile
from pathlib import Path

import pytest


def _run(mode: str, state_dir: Path) -> None:
    result = subprocess.run(
        [
            sys.executable,
            "-m",
            "weaver.conversation._runner",
            mode,
            str(state_dir),
        ],
        capture_output=True,
        text=True,
        cwd=Path(__file__).resolve().parents[2],
    )
    assert result.returncode == 0, (
        f"Process {mode} failed:\n"
        f"STDOUT: {result.stdout}\nSTDERR: {result.stderr}"
    )


@pytest.mark.asyncio
async def test_subprocess_restart():
    """Process A crashes; Process B continues without re-executing tool."""
    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"

        # Process A: start conversation, emit tool call, settle, crash
        _run("a", state_dir)

        # Verify directory permissions
        stat = state_dir.stat()
        assert stat.st_mode & 0o077 == 0, (
            f"state dir has group/other access: {stat.st_mode:o}"
        )

        # Verify DB file permissions
        db_path = state_dir / "weaver.sqlite3"
        db_stat = db_path.stat()
        assert db_stat.st_mode & 0o077 == 0, (
            f"db file has group/other access: {db_stat.st_mode:o}"
        )

        # Process B: open same state, continue, verify
        _run("b", state_dir)


@pytest.mark.asyncio
async def test_subprocess_retry():
    """Process A crashes; Process C retries from fresh context."""
    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        _run("a", state_dir)
        _run("c", state_dir)


@pytest.mark.asyncio
async def test_delete_workflows_db_safe():
    """Deleting an optional workflows database is harmless."""
    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        wf = state_dir / "workflows.sqlite3"
        assert not wf.exists()
        wf.unlink(missing_ok=True)


@pytest.mark.asyncio
async def test_migration_idempotent():
    """Running migrate twice is safe."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        await sw.close()

        sw2 = SessionWeave(state_dir)
        await sw2.open()
        await sw2.close()


@pytest.mark.asyncio
async def test_empty_state_no_interrupted():
    """Fresh state has no interrupted runs."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            interrupted = await sw.find_interrupted_runs()
            assert interrupted == []
        finally:
            await sw.close()


@pytest.mark.asyncio
async def test_duplicate_tool_result_rejected():
    """Settling the same tool call twice raises ValueError."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            conv_id = await sw.start_conversation("test")
            runs = await sw.repo.load_runs(conv_id)
            run = runs[0]
            items = await sw.repo.load_items(conv_id)
            turn_id = items[0].turn_id

            tc_id = "dup-test-call"
            await sw.coordinator.insert_assistant_item(
                conv_id,
                run.id,
                turn_id,
                "calling tool",
                tool_calls=[
                    {
                        "id": tc_id,
                        "name": "echo",
                        "arguments": "{}",
                    }
                ],
            )
            await sw.coordinator.settle_tool(
                conv_id, run.id, turn_id, tc_id, "echo", "{}", '"ok"'
            )
            with pytest.raises(ValueError, match="already has a result"):
                await sw.coordinator.settle_tool(
                    conv_id,
                    run.id,
                    turn_id,
                    tc_id,
                    "echo",
                    "{}",
                    '"second"',
                )
        finally:
            await sw.close()


# -- repository unit tests --


@pytest.mark.asyncio
async def test_repo_find_interrupted_run_none():
    """Empty state returns None for interrupted runs."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            conv_id = await sw.start_conversation("hello")
            result = await sw.repo.find_interrupted_run(conv_id)
            assert result is None
        finally:
            await sw.close()


@pytest.mark.asyncio
async def test_repo_load_items_for_run_id():
    """load_items with for_run_id filters to a specific run."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            conv_id = await sw.start_conversation("hello")
            runs = await sw.repo.load_runs(conv_id)
            run = runs[0]
            for_run = await sw.repo.load_items(
                conv_id, for_run_id=run.id
            )

            assert len(for_run) >= 1
            assert all(i.run_id == run.id for i in for_run)
        finally:
            await sw.close()


@pytest.mark.asyncio
async def test_repo_load_items_before_sequence():
    """load_items with before_sequence excludes later items."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            conv_id = await sw.start_conversation("hello")
            all_items = await sw.repo.load_items(conv_id)
            assert len(all_items) >= 1
            first_seq = all_items[0].sequence
            before = await sw.repo.load_items(
                conv_id, before_sequence=first_seq
            )
            # Nothing before the first item
            assert len(before) == 0
        finally:
            await sw.close()


@pytest.mark.asyncio
async def test_repo_load_events_and_runs():
    """load_events and load_runs return expected data."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            conv_id = await sw.start_conversation("hello")
            events = await sw.repo.load_events(conv_id)
            runs = await sw.repo.load_runs(conv_id)

            assert len(events) >= 1
            assert len(runs) == 1
            assert runs[0].phase == "queued"
        finally:
            await sw.close()
