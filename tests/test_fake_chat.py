import asyncio

from weaver.agent.turn import TurnExitReason
from weaver.chat_runtime import open_chat_runtime


async def _conversation(runtime, prompt: str):
    conversation_id = await runtime.session.start_conversation("")
    activity: list[tuple[str, str]] = []
    deltas: list[str] = []

    async def on_tool(name: str, status: str, _detail: str, _result=None) -> None:
        activity.append((name, status))

    async def on_delta(delta: str) -> None:
        deltas.append(delta)

    result = await runtime.session.send(
        conversation_id,
        prompt,
        cancel_event=asyncio.Event(),
        on_tool_event=on_tool,
        on_delta=on_delta,
        tool_budget=4,
        reasoning="high",
    )
    return conversation_id, result, activity, deltas


async def test_fake_chat_runs_two_synthetic_tools_and_streams_markdown(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        _, result, activity, deltas = await _conversation(runtime, "/fake markdown")

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert activity == [
            ("semantic_search", "start"),
            ("semantic_search", "done"),
            ("read_chapters", "start"),
            ("read_chapters", "done"),
        ]
        assert len(deltas) > 4
        assert "".join(deltas) == result.final_text
        assert "> Synthetic passage for development only." in result.final_text
        assert "```text" in result.final_text
        assert "[safe reference](https://example.com" in result.final_text
        assert runtime.library is None
    finally:
        await runtime.close()


async def test_fake_chat_keeps_multi_turn_continuity(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        conversation_id, first, _, _ = await _conversation(
            runtime,
            "Why did the first choice matter?",
        )
        assert first.exit_reason == TurnExitReason.COMPLETED

        second = await runtime.session.send(
            conversation_id,
            "What changes if the character waits?",
            cancel_event=asyncio.Event(),
            tool_budget=4,
            reasoning="high",
        )

        assert second.exit_reason == TurnExitReason.COMPLETED
        assert "earlier question" in second.final_text
        assert "Why did the first choice matter?" in second.final_text
    finally:
        await runtime.close()


async def test_fake_chat_can_simulate_incomplete_output(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        _, result, _, _ = await _conversation(runtime, "/fake incomplete")
        assert result.exit_reason == TurnExitReason.INCOMPLETE
        assert "ends before" in result.final_text
    finally:
        await runtime.close()


async def test_slow_fake_chat_can_be_cancelled(tmp_path) -> None:
    runtime = await open_chat_runtime(
        tmp_path,
        live=False,
        surface="web",
        fake_delay_seconds=0.5,
    )
    try:
        conversation_id = await runtime.session.start_conversation("")
        cancel_event = asyncio.Event()
        turn = asyncio.create_task(
            runtime.session.send(
                conversation_id,
                "/fake slow",
                cancel_event=cancel_event,
                tool_budget=4,
                reasoning="high",
            )
        )
        await asyncio.sleep(0.05)
        cancel_event.set()
        result = await turn

        assert result.exit_reason == TurnExitReason.INTERRUPTED
    finally:
        await runtime.close()


async def test_fake_chat_stops_publishing_after_a_visible_delta(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        conversation_id = await runtime.session.start_conversation("")
        cancel_event = asyncio.Event()
        deltas: list[str] = []

        async def stop_after_first_delta(delta: str) -> None:
            deltas.append(delta)
            cancel_event.set()

        result = await runtime.session.send(
            conversation_id,
            "/fake long",
            cancel_event=cancel_event,
            on_delta=stop_after_first_delta,
            tool_budget=4,
            reasoning="high",
        )

        assert result.exit_reason == TurnExitReason.INTERRUPTED
        assert len(deltas) == 1
    finally:
        await runtime.close()
