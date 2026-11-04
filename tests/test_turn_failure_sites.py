"""Plan 033: a failed turn names the check that stopped it."""

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

