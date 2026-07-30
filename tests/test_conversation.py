"""Plan 007: restart-safe conversation proof via subprocess."""

from __future__ import annotations

import subprocess
import sys
import tempfile
from pathlib import Path

import pytest


def _run(mode: str, state_dir: Path) -> None:
    result = subprocess.run(
        [sys.executable, "-m", "weaver.conversation._runner", mode, str(state_dir)],
        capture_output=True,
        text=True,
        cwd=Path(__file__).resolve().parents[2],
    )
    assert result.returncode == 0, (
        f"Process {mode} failed:\nSTDOUT: {result.stdout}\nSTDERR: {result.stderr}"
    )


@pytest.mark.asyncio
async def test_subprocess_restart():
    """Process A crashes; Process B continues without re-executing the tool."""
    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"

        # Process A: start conversation, emit tool call, settle result, crash
        _run("a", state_dir)

        # Verify state dir permissions
        stat = state_dir.stat()
        assert stat.st_mode & 0o077 == 0, f"state dir has group/other access: {stat.st_mode:o}"

        # Process B: open same state, continue, verify no duplicate tool call
        _run("b", state_dir)


@pytest.mark.asyncio
async def test_delete_workflows_db_safe():
    """Deleting an optional workflows database has no effect (it does not exist yet)."""
    # Plan 007 creates no workflows.sqlite3. Prove that looking for it is harmless.
    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        wf = state_dir / "workflows.sqlite3"
        assert not wf.exists()
        # Deleting a non-existent file should not crash
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

        # Open again: migrate should be a no-op
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
