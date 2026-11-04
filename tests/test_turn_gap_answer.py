"""Plan 033: a turn that read but could not publish answers honestly
instead of failing, and never hides a provider error, a cancel, or a reply
from the wrong model."""

from __future__ import annotations

import asyncio
import inspect
from dataclasses import replace

from tests.test_agent_turn import (
    _async_append,
    execute_turn,
    make_registry,
    model_response,
    scripted_layer,
    stop_response,
    tool_call,
    tool_response,
)
from weaver import ModelStopReason
from weaver.agent.errors import safe_error
from weaver.agent.turn import HONEST_GAP_ANSWER, TurnExitReason
from weaver.chat_runtime import web_system_prompt
from weaver.conversation.runner import ConversationRunner

GAP = "I could not find that scene."


def _duplicate_call_ids():
    first = tool_call("same-id", "echo", '{"message":"one"}')
    second = tool_call("same-id", "echo", '{"message":"two"}')
    return tool_response(first, second)


async def test_a_turn_that_cannot_publish_answers_with_the_gap_answer() -> None:
    starts = {}
    persisted = []
    layer, model, _ = scripted_layer(_duplicate_call_ids())

    result = await execute_turn(
        layer,
        model,
        registry=make_registry(starts),
        active_tools=("echo",),
        persist_message=_async_append(persisted),
        gap_answer=GAP,
    )

    assert result.exit_reason == TurnExitReason.COMPLETED
    assert result.final_text == GAP
    assert result.safe_failure == ""
    assert result.rescued_from == "protocol_unsafe_tool_calls"
    assert result.reading()["rescued_from"] == "protocol_unsafe_tool_calls"
    assert persisted[-1].content == GAP
    assert starts == {}  # the unsafe calls still never ran


async def test_without_a_gap_answer_the_turn_still_fails() -> None:
    layer, model, _ = scripted_layer(_duplicate_call_ids())

    result = await execute_turn(layer, model, active_tools=("echo",))

    assert result.exit_reason == TurnExitReason.MODEL_FAILED
    assert result.safe_failure == safe_error("model_protocol")
    assert "rescued_from" not in result.reading()


async def test_a_provider_error_is_never_covered_by_the_gap_answer() -> None:
    layer, model, _ = scripted_layer(
        model_response(stop_reason=ModelStopReason.ERROR, error_category="rate_limit")
    )

    result = await execute_turn(layer, model, gap_answer=GAP)

    assert result.exit_reason == TurnExitReason.MODEL_FAILED
    assert result.safe_failure == safe_error("model")
    assert result.final_text != GAP


async def test_a_cancelled_turn_is_never_covered_by_the_gap_answer() -> None:
    cancel = asyncio.Event()
    cancel.set()
    layer, model, _ = scripted_layer(stop_response("Hello."))

    result = await execute_turn(layer, model, cancel_event=cancel, gap_answer=GAP)

    assert result.exit_reason == TurnExitReason.INTERRUPTED
    assert result.final_text != GAP


async def test_a_reply_from_another_model_is_never_covered_by_the_gap_answer() -> None:
    layer, model, _ = scripted_layer(
        replace(stop_response("Hello."), model_id="another-model")
    )

    result = await execute_turn(layer, model, gap_answer=GAP)

    assert result.exit_reason == TurnExitReason.MODEL_FAILED
    assert result.error_category == "protocol_model_mismatch"
    assert result.final_text != GAP


def test_the_product_runner_turns_the_gap_answer_on() -> None:
    assert "gap_answer=HONEST_GAP_ANSWER" in inspect.getsource(ConversationRunner)


def test_the_gap_answer_is_honest_and_has_no_em_dash() -> None:
    assert "couldn't pin that down" in HONEST_GAP_ANSWER
    assert "\u2014" not in HONEST_GAP_ANSWER


def test_the_prompt_says_to_admit_a_scene_it_cannot_find() -> None:
    prompt = web_system_prompt("You are Weaver.", 3232, search_through=3127)
    assert "<when_you_cannot_find_it>" in prompt
    assert "Never offer a different scene as the answer to theirs" in prompt
