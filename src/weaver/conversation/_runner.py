"""Subprocess runner for Plan 007 restart-safety proof."""

from __future__ import annotations

import asyncio
import sys
from pathlib import Path

from .common import uid


async def _process_a(state_dir: Path) -> None:
    from weaver.conversation import SessionWeave

    sw = SessionWeave(state_dir)
    await sw.open()
    try:
        conv_id = await sw.start_conversation("Call the echo tool.")
        coordinator = sw.coordinator
        repo = sw.repo

        # Find the run created by start_conversation
        runs = await repo.load_runs(conv_id)
        run = runs[0]
        items = await repo.load_items(conv_id)
        turn_id = items[0].turn_id

        # Fake model emits one tool call
        tc_id = uid()
        await coordinator.insert_assistant_item(
            conv_id,
            run.id,
            turn_id,
            "Let me call the echo tool.",
            tool_calls=[
                {
                    "id": tc_id,
                    "name": "echo",
                    "arguments": '{"message":"hello world"}',
                }
            ],
        )

        # Tool settles (simulated handler)
        await coordinator.settle_tool(
            conv_id,
            run.id,
            turn_id,
            tc_id,
            "echo",
            '{"message":"hello world"}',
            '"hello world"',
        )

        # Crash before next model call
        await coordinator.mark_interrupted(run.id)

        # Record conversation_id for process B to discover
        marker = state_dir / "conversation_id.txt"
        marker.write_text(conv_id)
    finally:
        await sw.close()


async def _process_b(state_dir: Path) -> None:
    from weaver.conversation import SessionWeave

    sw = SessionWeave(state_dir)
    await sw.open()
    try:
        marker = state_dir / "conversation_id.txt"
        conv_id = marker.read_text().strip()

        interrupted = await sw.repo.find_interrupted_run(conv_id)
        assert interrupted is not None, "expected interrupted run"
        assert interrupted.phase == "interrupted"

        # Continue
        new_run_id = await sw.continue_interrupted(conv_id)
        assert new_run_id is not None

        # The interrupted run's settled items should be visible
        settled = await sw.repo.load_items(
            conv_id, for_run_id=interrupted.id
        )
        tool_results = [i for i in settled if i.kind == "tool_result"]
        assert (
            len(tool_results) == 1
        ), f"expected 1 tool_result, got {len(tool_results)}"

        # Fake model sees the tool result and does NOT call the tool again
        runs = await sw.repo.load_runs(conv_id)
        new_run = [r for r in runs if r.id == new_run_id][0]

        coordinator = sw.coordinator
        await coordinator.insert_assistant_item(
            conv_id,
            new_run_id,
            new_run.turn_id,
            "The echo tool returned: hello world. No need to call it again.",
            tool_calls=None,
        )
        await coordinator.complete_run(
            conv_id,
            new_run_id,
            new_run.turn_id,
            "The echo tool returned: hello world. No need to call it again.",
        )

        # Verify: exactly one tool_call item across all runs
        all_items = await sw.repo.load_items(conv_id)
        tool_calls = [i for i in all_items if i.kind == "tool_call"]
        assert len(tool_calls) == 1, (
            f"expected exactly 1 tool_call, got {len(tool_calls)}"
        )
        tool_results_all = [
            i for i in all_items if i.kind == "tool_result"
        ]
        assert len(tool_results_all) == 1, (
            f"expected exactly 1 tool_result, got {len(tool_results_all)}"
        )

        # Verify run states
        runs = await sw.repo.load_runs(conv_id)
        run_states = {r.id: r.phase for r in runs}
        assert run_states[interrupted.id] == "interrupted"
        assert run_states[new_run_id] == "completed"

        # Verify no duplicate IDs
        item_ids = [i.id for i in all_items]
        assert len(item_ids) == len(set(item_ids)), "duplicate item IDs"
        sequences = [i.sequence for i in all_items]
        assert sequences == sorted(sequences), (
            "item sequences not ordered"
        )
    finally:
        await sw.close()


async def _process_c(state_dir: Path) -> None:
    """Retry test: same pattern as A but then retry instead of continue."""
    from weaver.conversation import SessionWeave

    sw = SessionWeave(state_dir)
    await sw.open()
    try:
        marker = state_dir / "conversation_id.txt"
        conv_id = marker.read_text().strip()

        interrupted = await sw.repo.find_interrupted_run(conv_id)
        assert interrupted is not None, "expected interrupted run for retry"

        # Retry
        new_run_id = await sw.retry_interrupted(conv_id)
        assert new_run_id is not None

        # Items from interrupted run exist but are NOT in the new run's scope
        interrupted_items = await sw.repo.load_items(
            conv_id, for_run_id=interrupted.id
        )
        assert len(interrupted_items) >= 1, (
            "interrupted run should have items"
        )

        # Fake model starts fresh: does NOT see the tool result
        runs = await sw.repo.load_runs(conv_id)
        new_run = [r for r in runs if r.id == new_run_id][0]
        coordinator = sw.coordinator

        await coordinator.insert_assistant_item(
            conv_id,
            new_run_id,
            new_run.turn_id,
            "Starting fresh: the echo tool hasn't been called yet.",
            tool_calls=None,
        )
        await coordinator.complete_run(
            conv_id,
            new_run_id,
            new_run.turn_id,
            "Starting fresh: the echo tool hasn't been called yet.",
        )

        # Verify run states
        runs = await sw.repo.load_runs(conv_id)
        run_states = {r.id: r.phase for r in runs}
        assert run_states[interrupted.id] == "interrupted"
        assert run_states[new_run_id] == "completed"

        # Verify retry didn't duplicate items from the interrupted run
        all_items = await sw.repo.load_items(conv_id)
        tool_calls = [i for i in all_items if i.kind == "tool_call"]
        assert len(tool_calls) == 1, (
            f"retry should not duplicate tool_call, got {len(tool_calls)}"
        )
    finally:
        await sw.close()


def main() -> None:
    if len(sys.argv) != 3:
        print(
            "usage: python -m weaver.conversation._runner <a|b|c> <state_dir>",
            file=sys.stderr,
        )
        sys.exit(1)
    mode = sys.argv[1]
    state_dir = Path(sys.argv[2])
    if mode == "a":
        asyncio.run(_process_a(state_dir))
    elif mode == "b":
        asyncio.run(_process_b(state_dir))
    elif mode == "c":
        asyncio.run(_process_c(state_dir))
    else:
        print(f"unknown mode: {mode}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
