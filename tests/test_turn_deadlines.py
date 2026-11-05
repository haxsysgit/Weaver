"""Plan 033.6 slice 3: every model call and every turn has a time limit.

The stalling provider behaves like the DeepSeek provider: it checks the
cancel event between chunks and, when cancelled mid-read, closes the
stream and reports an aborted response instead of raising. A turn that
ran out of time must not look like a reader who pressed stop.
"""

import asyncio
import time

import pytest

from weaver import (
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelToolCall,
)
from weaver.agent.errors import safe_error
from weaver.agent.tools import (
    EffectKind,
    ToolDefinition,
    ToolExecutionPolicy,
    ToolRegistry,
)
from weaver.agent.turn import TurnExitReason, run_turn
from weaver.model_layer.types import ModelStreamEvent, ModelStreamEventType

GAP = "I couldn't pin that down in the chapters I opened."


def _spec() -> ModelSpec:
    return ModelSpec(
        provider_id="test-provider",
        model_id="test-reader",
        api_family="test",
        default_output_tokens=777,
        supports_reasoning=False,
    )


def _response(stop: ModelStopReason, content=None, tool_calls=()) -> ModelResponse:
    model = _spec()
    return ModelResponse(
        assistant_message=ModelMessage(
            role="assistant", content=content, tool_calls=tuple(tool_calls)
        ),
        provider_id=model.provider_id,
        model_id=model.model_id,
        stop_reason=stop,
        raw_stop_reason={
            ModelStopReason.STOP: "stop",
            ModelStopReason.TOOL_USE: "tool_calls",
            ModelStopReason.ABORTED: "cancelled",
        }[stop],
        error_category="cancelled" if stop == ModelStopReason.ABORTED else None,
    )


def stop(text: str) -> ModelResponse:
    return _response(ModelStopReason.STOP, content=text)


def echo_call() -> ModelResponse:
    return _response(
        ModelStopReason.TOOL_USE,
        tool_calls=(ModelToolCall("c1", "echo", '{"message": "a"}'),),
    )


TRICKLE = "trickle"  # a stream that keeps sending a little, forever
SILENT = "silent"  # a stream that sends nothing, forever
OPENING = "opening"  # stuck before the stream opens; a stop raises, as in DeepSeek


class StallingProvider(FakeModelProvider):
    """Scripted calls; a TRICKLE or SILENT entry stalls that call."""

    def __init__(self, *script) -> None:
        model = _spec()
        super().__init__(model.provider_id, models=(model,))
        self.script = list(script)

    async def stream(self, model, request, cancel_event, *, max_output_tokens):
        index = len(self.calls)
        await anext_call(self, model, request, max_output_tokens)
        entry = self.script[min(index, len(self.script) - 1)]
        if isinstance(entry, ModelResponse):
            if entry.assistant_message.content:
                yield ModelStreamEvent(
                    event_type=ModelStreamEventType.TEXT_DELTA,
                    delta=entry.assistant_message.content,
                )
            yield ModelStreamEvent(
                event_type=ModelStreamEventType.RESPONSE_COMPLETE, response=entry
            )
            return
        if entry == OPENING:
            await asyncio.sleep(3600)
        try:
            while True:
                if cancel_event.is_set():
                    break
                if entry == TRICKLE:
                    await asyncio.sleep(0.005)
                    yield ModelStreamEvent(
                        event_type=ModelStreamEventType.REASONING_DELTA, delta="."
                    )
                else:
                    await asyncio.sleep(3600)
        except asyncio.CancelledError:
            pass
        yield ModelStreamEvent(
            event_type=ModelStreamEventType.RESPONSE_COMPLETE,
            response=_response(ModelStopReason.ABORTED),
        )


async def anext_call(provider, model, request, max_output_tokens) -> None:
    from weaver.model_layer.fake import FakeModelCall

    provider.calls.append(
        FakeModelCall(model=model, request=request, max_output_tokens=max_output_tokens)
    )


def _registry() -> ToolRegistry:
    async def echo(arguments, context):
        return {"echo": arguments}

    registry = ToolRegistry()
    registry.register(
        ToolDefinition(
            name="echo",
            description="Echo back arguments",
            parameters={"type": "object", "properties": {"message": {"type": "string"}}},
            handler=echo,
            effect_kind=EffectKind.READ,
        )
    )
    return registry


async def _turn(provider, *, call_deadline, turn_deadline, cancel_event=None, **kwargs):
    layer = ModelLayer()
    layer.register_provider(provider)
    return await run_turn(
        session_id="s",
        turn_id="t",
        model_layer=layer,
        model=_spec(),
        system_prompt="You are Weaver.",
        history=[],
        tool_registry=_registry(),
        active_tools=("echo",),
        execution_policy=ToolExecutionPolicy.read_only(),
        cancel_event=cancel_event or asyncio.Event(),
        call_deadline_seconds=call_deadline,
        turn_deadline_seconds=turn_deadline,
        **kwargs,
    )


@pytest.mark.parametrize("stall", [TRICKLE, SILENT])
async def test_a_stalled_call_is_retried_once_and_the_turn_answers(stall) -> None:
    provider = StallingProvider(stall, stop("Saint came from the tomb."))

    started = time.monotonic()
    result = await _turn(provider, call_deadline=0.1, turn_deadline=2.0, final_pass=False)

    assert result.exit_reason == TurnExitReason.COMPLETED
    assert result.final_text == "Saint came from the tomb."
    # The stalled call and its retry; later calls are the turn's own checks.
    assert len(provider.calls) >= 2
    assert result.reading()["call_seconds"][0] >= 0.05
    assert time.monotonic() - started < 1.0


@pytest.mark.parametrize("stall", [TRICKLE, SILENT])
async def test_a_turn_that_keeps_stalling_ends_cleanly_and_retryably(stall) -> None:
    provider = StallingProvider(stall)

    started = time.monotonic()
    result = await _turn(
        provider, call_deadline=0.1, turn_deadline=2.0, gap_answer=GAP
    )

    assert time.monotonic() - started < 1.0
    assert result.exit_reason == TurnExitReason.MODEL_FAILED
    assert result.error_category == "model_timeout"
    assert result.safe_failure == safe_error("model_timeout")
    # A timeout is not a reading gap: the reader is told to try again,
    # never given the "couldn't pin that down" answer.
    assert result.final_text != GAP
    assert len(provider.calls) == 2


async def test_the_turn_limit_bounds_every_call_including_the_retry() -> None:
    provider = StallingProvider(TRICKLE)

    started = time.monotonic()
    result = await _turn(provider, call_deadline=0.3, turn_deadline=0.4)
    elapsed = time.monotonic() - started

    assert result.error_category == "model_timeout"
    assert elapsed < 0.7


async def test_a_call_after_tools_gets_only_the_time_left() -> None:
    provider = StallingProvider(echo_call(), TRICKLE)

    started = time.monotonic()
    result = await _turn(provider, call_deadline=0.2, turn_deadline=0.25)

    assert result.error_category == "model_timeout"
    assert result.tool_starts == 1
    assert time.monotonic() - started < 0.5


async def test_a_stalled_final_reread_publishes_the_checked_draft() -> None:
    provider = StallingProvider(
        echo_call(),
        stop("Saint came from the tomb (ch. 104)."),
        TRICKLE,
    )

    async def packet_builder(results, draft):
        return "--- chapter 104, lines 1-2 ---\nSaint came from the tomb."

    result = await _turn(
        provider,
        call_deadline=0.1,
        turn_deadline=2.0,
        packet_builder=packet_builder,
    )

    assert result.exit_reason == TurnExitReason.COMPLETED
    assert result.final_text == "Saint came from the tomb (ch. 104)."


async def test_the_reader_pressing_stop_is_still_an_interruption() -> None:
    provider = StallingProvider(TRICKLE)
    cancel = asyncio.Event()
    asyncio.get_running_loop().call_later(0.05, cancel.set)

    result = await _turn(
        provider, call_deadline=5.0, turn_deadline=10.0, cancel_event=cancel
    )

    assert result.exit_reason == TurnExitReason.INTERRUPTED
    assert result.error_category != "model_timeout"


async def test_each_call_duration_is_recorded_on_the_run() -> None:
    provider = StallingProvider(SILENT, echo_call(), stop("Done (ch. 104)."))

    result = await _turn(provider, call_deadline=0.1, turn_deadline=2.0, final_pass=False)

    seconds = result.reading()["call_seconds"]
    assert len(seconds) == len(provider.calls)
    assert seconds[0] >= 0.05
    assert all(isinstance(value, float) for value in seconds)


def test_the_default_limits_fit_the_measured_turns() -> None:
    from weaver.agent.turn import MODEL_CALL_DEADLINE_SECONDS, TURN_DEADLINE_SECONDS

    # Slowest healthy whole turn on record: 111 s (Plan 030 fanfic).
    assert MODEL_CALL_DEADLINE_SECONDS == 120
    assert TURN_DEADLINE_SECONDS == 240


async def test_the_reader_stopping_a_call_that_never_opened_is_an_interruption() -> None:
    provider = StallingProvider(OPENING)
    cancel = asyncio.Event()
    asyncio.get_running_loop().call_later(0.05, cancel.set)

    result = await _turn(
        provider, call_deadline=0.2, turn_deadline=2.0, cancel_event=cancel
    )

    assert result.exit_reason == TurnExitReason.INTERRUPTED


async def test_a_call_that_never_opens_still_times_out() -> None:
    provider = StallingProvider(OPENING)

    result = await _turn(provider, call_deadline=0.1, turn_deadline=2.0)

    assert result.error_category == "model_timeout"


async def test_a_stalled_final_reread_is_not_retried() -> None:
    provider = StallingProvider(
        echo_call(),
        stop("Saint came from the tomb (ch. 104)."),
        TRICKLE,
    )

    async def packet_builder(results, draft):
        return "--- chapter 104, lines 1-2 ---\nSaint came from the tomb."

    result = await _turn(
        provider,
        call_deadline=0.1,
        turn_deadline=2.0,
        packet_builder=packet_builder,
    )

    assert result.final_text == "Saint came from the tomb (ch. 104)."
    assert len(provider.calls) == 3
