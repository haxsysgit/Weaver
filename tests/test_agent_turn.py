import asyncio

import pytest

from weaver.agent.errors import safe_error
from weaver.agent.messages import (
    AssistantMessage,
    UserMessage,
    ToolCallMessage,
    ToolResultMessage,
)
from weaver.agent.tools import (
    EffectKind,
    ToolDefinition,
    ToolExecutionContext,
    ToolExecutionPolicy,
    ToolRegistry,
)
from weaver.agent.turn import (
    ANSWER_MAX_OUTPUT_TOKENS,
    TOOL_CALL_MAX_OUTPUT_TOKENS,
    TurnExitReason,
    _is_working_note_candidate,
    run_turn,
)
from weaver import (
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelToolCall,
)


def _model_spec() -> ModelSpec:
    return ModelSpec(
        provider_id="test-provider",
        model_id="test-reader",
        api_family="test",
        default_output_tokens=777,
        supports_reasoning=False,
    )


def model_response(
    *,
    stop_reason: ModelStopReason,
    content: str | None = None,
    tool_calls: tuple[ModelToolCall, ...] = (),
    raw_stop_reason: str | None = None,
    error_category: str | None = None,
    reasoning_content: str | None = None,
) -> ModelResponse:
    model = _model_spec()
    return ModelResponse(
        assistant_message=ModelMessage(
            role="assistant",
            content=content,
            tool_calls=tool_calls,
            reasoning_content=reasoning_content,
        ),
        provider_id=model.provider_id,
        model_id=model.model_id,
        stop_reason=stop_reason,
        raw_stop_reason=raw_stop_reason or stop_reason.value,
        error_category=error_category,
    )


def stop_response(text: str) -> ModelResponse:
    return model_response(
        stop_reason=ModelStopReason.STOP,
        content=text,
        raw_stop_reason="stop",
    )


def tool_response(
    *tool_calls: ModelToolCall,
    content: str | None = None,
    reasoning_content: str | None = None,
) -> ModelResponse:
    return model_response(
        stop_reason=ModelStopReason.TOOL_USE,
        content=content,
        tool_calls=tuple(tool_calls),
        raw_stop_reason="tool_calls",
        reasoning_content=reasoning_content,
    )


def tool_call(
    call_id: str,
    name: str,
    arguments_json: str,
) -> ModelToolCall:
    return ModelToolCall(
        call_id=call_id,
        name=name,
        arguments_json=arguments_json,
    )


def scripted_layer(
    *responses: ModelResponse,
) -> tuple[ModelLayer, ModelSpec, FakeModelProvider]:
    model = _model_spec()
    provider = FakeModelProvider(
        model.provider_id,
        models=(model,),
        responses=tuple(responses),
    )
    layer = ModelLayer()
    layer.register_provider(provider)
    return layer, model, provider


def make_registry(
    starts: dict[str, int] | None = None,
) -> ToolRegistry:
    starts = starts if starts is not None else {}

    async def echo_handler(arguments: dict, context) -> dict:
        starts["echo"] = starts.get("echo", 0) + 1
        return {"echo": arguments}

    async def weather_handler(arguments: dict, context) -> dict:
        starts["get_weather"] = starts.get("get_weather", 0) + 1
        city = arguments.get("city", "unknown")
        return {"city": city, "condition": "sunny", "temp": 22}

    async def empty_handler(arguments: dict, context) -> dict:
        starts["empty"] = starts.get("empty", 0) + 1
        return {}

    registry = ToolRegistry()
    registry.register(
        ToolDefinition(
            name="echo",
            description="Echo back arguments",
            parameters={
                "type": "object",
                "properties": {"message": {"type": "string"}},
            },
            handler=echo_handler,
            effect_kind=EffectKind.READ,
        )
    )
    registry.register(
        ToolDefinition(
            name="get_weather",
            description="Get weather for a city",
            parameters={
                "type": "object",
                "properties": {"city": {"type": "string"}},
                "required": ["city"],
            },
            handler=weather_handler,
            effect_kind=EffectKind.READ,
        )
    )
    registry.register(
        ToolDefinition(
            name="empty",
            description="Return an empty result",
            parameters={"type": "object", "properties": {}},
            handler=empty_handler,
            effect_kind=EffectKind.READ,
        )
    )
    return registry


def _async_append(target: list):
    """Async persist callback collecting messages (async seam, plan 008)."""

    async def append(message) -> None:
        target.append(message)

    return append


async def execute_turn(
    layer: ModelLayer,
    model: ModelSpec,
    *,
    session_id: str = "session-1",
    turn_id: str = "turn-1",
    registry: ToolRegistry | None = None,
    active_tools: tuple[str, ...] = (),
    history=None,
    cancel_event: asyncio.Event | None = None,
    persist_message=None,
    max_model_steps: int = 5,
    tool_budget: int | None = None,
    reasoning: str | None = None,
    execution_policy: ToolExecutionPolicy | None = None,
    packet_builder=None,
):
    return await run_turn(
        session_id=session_id,
        turn_id=turn_id,
        model_layer=layer,
        model=model,
        system_prompt="You are Weaver.",
        history=history or [],
        tool_registry=registry or make_registry(),
        active_tools=active_tools,
        execution_policy=execution_policy or ToolExecutionPolicy.read_only(),
        cancel_event=cancel_event or asyncio.Event(),
        persist_message=persist_message,
        max_model_steps=max_model_steps,
        tool_budget=tool_budget,
        reasoning=reasoning,
        packet_builder=packet_builder,
    )


def tool_context() -> ToolExecutionContext:
    return ToolExecutionContext(
        session_id="session",
        turn_id="turn",
        call_id="call",
        cancel_event=asyncio.Event(),
    )


class TestToolBudget:
    async def test_tool_budget_guarantees_final_answer(self) -> None:
        layer, model, _ = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            tool_response(tool_call("c2", "echo", '{"message": "b"}')),
            stop_response("Done."),
        )
        starts: dict[str, int] = {}
        result = await execute_turn(
            layer,
            model,
            registry=make_registry(starts),
            active_tools=("echo",),
            tool_budget=2,
        )
        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Done."
        assert starts["echo"] == 2
        assert result.model_steps == 3

    async def test_tool_budget_spent_never_runs_tools_past_the_budget(self) -> None:
        """The model keeps calling tools; the budget must cap dispatches
        and the forced call must fail honestly instead of running them."""
        layer, model, _ = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            tool_response(tool_call("c2", "echo", '{"message": "b"}')),
        )
        starts: dict[str, int] = {}
        result = await execute_turn(
            layer,
            model,
            registry=make_registry(starts),
            active_tools=("echo",),
            tool_budget=2,
        )
        assert result.exit_reason == TurnExitReason.LIMIT_REACHED
        assert starts["echo"] == 2
        assert result.model_steps == 3
        # one assistant-with-tool-calls per dispatched step, none from the
        # forced call (a dangling tool call would break replay)
        tool_assistants = sum(
            1
            for m in result.new_messages
            if isinstance(m, AssistantMessage) and m.tool_calls
        )
        assert tool_assistants == starts["echo"] == 2

    async def test_tool_budget_reminder_is_visible_to_the_model(self) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Done."),
        )
        await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            tool_budget=1,
        )
        reminders = [
            m.content
            for call in provider.calls
            for m in call.request.messages
            if m.role == "system" and m.content and "tool steps" in m.content.lower()
        ]
        assert reminders == [
            "Tool steps remaining: 1 of 1.",
            "Your tool steps are spent. Answer now from what you have gathered. Do not call tools.",
        ]

    async def test_budget_above_old_cap_is_not_clamped(self) -> None:
        """The old 8-step clamp is gone: a big budget really allows many
        tool steps (Plan 15 tiers: awakened 50 / ascended 70 / transcendent
        90 are ceilings, not targets)."""
        responses = [
            tool_response(tool_call(f"c{i}", "echo", '{"message": "a"}'))
            for i in range(1, 11)
        ] + [stop_response("Done.")]
        layer, model, _ = scripted_layer(*responses)
        starts: dict[str, int] = {}
        result = await execute_turn(
            layer,
            model,
            registry=make_registry(starts),
            active_tools=("echo",),
            tool_budget=12,
        )
        assert result.exit_reason == TurnExitReason.COMPLETED
        assert starts["echo"] == 10
        assert result.model_steps == 11

    async def test_budget_reminder_is_silent_while_plenty_remain(self) -> None:
        """At 50+ steps a per-step countdown is noise; reminders only
        appear when 10 or fewer steps remain or on the forced call."""
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            tool_response(tool_call("c2", "echo", '{"message": "b"}')),
            stop_response("Done."),
        )
        await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            tool_budget=50,
        )
        reminders = [
            m.content
            for call in provider.calls
            for m in call.request.messages
            if m.role == "system" and m.content and "tool steps" in m.content.lower()
        ]
        assert reminders == []

    async def test_tool_budget_forced_call_strips_tools(self) -> None:
        """The forced answer call carries no tool schemas, so the model
        physically cannot call a tool on it (hermes-style)."""
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Done."),
        )
        await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            tool_budget=1,
        )
        assert len(provider.calls) == 2
        # the tool step still carries the schema
        assert any(t.name == "echo" for t in provider.calls[0].request.tools)
        # the forced answer call carries no tools at all
        assert provider.calls[1].request.tools == ()

    async def test_candidate_correction_does_not_consume_forced_answer(self) -> None:
        layer, model, provider = scripted_layer(
            stop_response("Let me check the evidence."),
            tool_response(tool_call("c1", "echo", '{"message": "evidence"}')),
            stop_response("Answer from the gathered evidence."),
        )
        starts: dict[str, int] = {}

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(starts),
            active_tools=("echo",),
            tool_budget=1,
        )

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Answer from the gathered evidence."
        assert starts == {"echo": 1}
        assert len(provider.calls) == 3
        assert provider.calls[1].request.tools
        assert provider.calls[2].request.tools == ()


class TestActiveDispatch:
    async def test_unknown_tool_is_checked_first(self) -> None:
        result = await make_registry().dispatch(
            "missing",
            "",
            active_names=(),
            policy=ToolExecutionPolicy.read_only(),
            context=tool_context(),
        )

        assert not result.ok
        assert result.error_code == "unknown_tool"

    async def test_registered_inactive_tool_is_checked_before_json(self) -> None:
        starts = {}
        result = await make_registry(starts).dispatch(
            "echo",
            "",
            active_names=(),
            policy=ToolExecutionPolicy.read_only(),
            context=tool_context(),
        )

        assert not result.ok
        assert result.error_code == "inactive_tool"
        assert starts == {}

    @pytest.mark.parametrize("arguments_json", ["", " ", '{"broken":}'])
    async def test_blank_or_malformed_json_is_rejected(
        self,
        arguments_json,
    ) -> None:
        starts = {}
        result = await make_registry(starts).dispatch(
            "echo",
            arguments_json,
            active_names=("echo",),
            policy=ToolExecutionPolicy.read_only(),
            context=tool_context(),
        )

        assert not result.ok
        assert result.error_code == "malformed_arguments"
        assert starts == {}

    @pytest.mark.parametrize("arguments_json", ["[]", '"text"', "1", "null"])
    async def test_non_object_json_is_rejected(
        self,
        arguments_json,
    ) -> None:
        starts = {}
        result = await make_registry(starts).dispatch(
            "echo",
            arguments_json,
            active_names=("echo",),
            policy=ToolExecutionPolicy.read_only(),
            context=tool_context(),
        )

        assert not result.ok
        assert result.error_code == "invalid_arguments"
        assert starts == {}

    async def test_active_tool_runs_once(self) -> None:
        starts = {}
        result = await make_registry(starts).dispatch(
            "echo",
            '{"message":"hello"}',
            active_names=("echo",),
            policy=ToolExecutionPolicy.read_only(),
            context=tool_context(),
        )

        assert result.ok
        assert result.result == {"echo": {"message": "hello"}}
        assert starts == {"echo": 1}


class TestTurnProtocol:
    async def test_simple_text_response_completes(self) -> None:
        layer, model, provider = scripted_layer(stop_response("Hello, reader."))

        result = await execute_turn(layer, model)

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Hello, reader."
        # A zero-evidence answer candidate gets one bounded confirmation
        # pass, then the second candidate publishes.
        assert result.model_steps == 2
        assert result.tool_starts == 0
        # Plan v1 (2026-08-17): tool-phase calls carry explicit headroom
        # (TOOL_CALL_MAX_OUTPUT_TOKENS), not the model default, so a
        # long thinking trace cannot truncate the call (live incident:
        # "model response was incomplete").
        assert provider.calls[0].max_output_tokens == TOOL_CALL_MAX_OUTPUT_TOKENS
        assert len(result.new_messages) == 1
        assistant = result.new_messages[0]
        assert isinstance(assistant, AssistantMessage)
        assert assistant.content == "Hello, reader."

    async def test_complete_tool_exchange_reaches_second_request(self) -> None:
        call = tool_call(
            "call-weather",
            "get_weather",
            '{"city": "London"}',
        )
        layer, model, provider = scripted_layer(
            tool_response(call),
            stop_response("London is sunny."),
        )

        result = await execute_turn(
            layer,
            model,
            active_tools=("get_weather",),
        )

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.tool_starts == 1
        second_messages = provider.calls[1].request.messages
        assert [message.role for message in second_messages] == [
            "system",
            "assistant",
            "tool",
        ]
        assistant = second_messages[1]
        assert assistant.content is None
        assert assistant.tool_calls == (call,)
        tool_result = second_messages[2]
        assert tool_result.tool_call_id == "call-weather"
        assert tool_result.content == (
            '{"city":"London","condition":"sunny","temp":22}'
        )

    async def test_multiple_calls_stay_under_one_assistant_message(self) -> None:
        first_call = tool_call("call-1", "echo", '{"message":"one"}')
        second_call = tool_call(
            "call-2",
            "get_weather",
            '{"city":"Leeds"}',
        )
        layer, model, provider = scripted_layer(
            tool_response(first_call, second_call, content="Checking both."),
            stop_response("Both checks finished."),
        )

        result = await execute_turn(
            layer,
            model,
            active_tools=("echo", "get_weather"),
        )

        grouped = [
            message
            for message in result.new_messages
            if isinstance(message, AssistantMessage) and message.tool_calls
        ]
        assert len(grouped) == 1
        assert grouped[0].tool_calls == (first_call, second_call)
        second_messages = provider.calls[1].request.messages
        assert [message.role for message in second_messages] == [
            "system",
            "assistant",
            "tool",
            "tool",
        ]
        assert second_messages[1].tool_calls == (first_call, second_call)
        assert second_messages[2].tool_call_id == "call-1"
        assert second_messages[3].tool_call_id == "call-2"

    async def test_empty_successful_dictionary_reaches_model(self) -> None:
        call = tool_call("call-empty", "empty", "{}")
        layer, model, provider = scripted_layer(
            tool_response(call),
            stop_response("Empty result received."),
        )

        result = await execute_turn(
            layer,
            model,
            active_tools=("empty",),
        )

        result_messages = [
            message
            for message in result.new_messages
            if isinstance(message, ToolResultMessage)
        ]
        assert result_messages[0].ok
        assert result_messages[0].result == {}
        projected_result = provider.calls[1].request.messages[2]
        assert projected_result.content == "{}"

    async def test_grouped_assistant_is_persisted_before_call_evidence(
        self,
    ) -> None:
        call = tool_call("call-1", "echo", '{"message":"hello"}')
        layer, model, _ = scripted_layer(
            tool_response(call),
            stop_response("Finished."),
        )
        persisted = []

        await execute_turn(
            layer,
            model,
            active_tools=("echo",),
            persist_message=_async_append(persisted),
        )

        assert [message.kind for message in persisted] == [
            "assistant",
            "tool_call",
            "tool_result",
            "assistant",
        ]
        assert persisted[0].tool_calls == (call,)

    async def test_individual_call_evidence_is_not_projected_twice(
        self,
    ) -> None:
        call = tool_call("call-1", "echo", '{"message":"hello"}')
        history = [
            AssistantMessage(
                message_id="assistant-1",
                turn_id="old-turn",
                content="",
                tool_calls=(call,),
            ),
            ToolCallMessage(
                message_id="evidence-1",
                turn_id="old-turn",
                call_id=call.call_id,
                tool_name=call.name,
                arguments_json=call.arguments_json,
            ),
            ToolResultMessage(
                message_id="result-1",
                turn_id="old-turn",
                call_id=call.call_id,
                tool_name=call.name,
                ok=True,
                result={"echo": {"message": "hello"}},
            ),
        ]
        layer, model, provider = scripted_layer(stop_response("Replayed."))

        await execute_turn(layer, model, history=history)

        projected = provider.calls[0].request.messages
        assistant_messages = [
            message for message in projected if message.role == "assistant"
        ]
        assert len(assistant_messages) == 1
        assert assistant_messages[0].tool_calls == (call,)

class TestUnsafeModelResponses:
    @pytest.mark.parametrize(
        "unsafe_call",
        [
            tool_call("", "echo", "{}"),
            tool_call("  ", "echo", "{}"),
            tool_call("call-1", "", "{}"),
            tool_call("call-1", "  ", "{}"),
            tool_call("call-1", "echo", ""),
            tool_call("call-1", "echo", " "),
            tool_call("call-1", "echo", '{"broken":}'),
            tool_call("call-1", "echo", "[]"),
        ],
    )
    async def test_incomplete_or_invalid_call_starts_no_handler(
        self,
        unsafe_call,
    ) -> None:
        starts = {}
        # A valid follow-up is scripted so that, if a validation gate were
        # removed, the turn would COMPLETE and the asserts below would fail.
        # (With only the malformed response scripted, the fake provider
        # repeats the last response, masking a removed gate via the
        # known-call-id rejection instead.)
        layer, model, _ = scripted_layer(
            tool_response(unsafe_call),
            stop_response("Recovered."),
        )

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(starts),
            active_tools=("echo",),
        )

        assert result.exit_reason == TurnExitReason.MODEL_FAILED
        assert result.safe_failure == safe_error("model_protocol")
        assert starts == {}
        assert result.tool_starts == 0
        assert result.model_steps == 1  # never re-asks after a bad call

    async def test_duplicate_call_ids_start_no_handler(self) -> None:
        starts = {}
        first = tool_call("same-id", "echo", '{"message":"one"}')
        second = tool_call("same-id", "echo", '{"message":"two"}')
        layer, model, _ = scripted_layer(tool_response(first, second))

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(starts),
            active_tools=("echo",),
        )

        assert result.exit_reason == TurnExitReason.MODEL_FAILED
        assert result.safe_failure == safe_error("model_protocol")
        assert starts == {}
        assert result.tool_starts == 0

    async def test_call_id_reused_on_later_model_step_is_rejected(
        self,
    ) -> None:
        starts = {}
        first = tool_call("same-id", "echo", '{"message":"one"}')
        reused = tool_call("same-id", "echo", '{"message":"two"}')
        layer, model, _ = scripted_layer(
            tool_response(first),
            tool_response(reused),
        )

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(starts),
            active_tools=("echo",),
        )

        assert result.exit_reason == TurnExitReason.MODEL_FAILED
        assert result.safe_failure == safe_error("model_protocol")
        assert starts == {"echo": 1}
        call_evidence = [
            message.call_id
            for message in result.new_messages
            if isinstance(message, ToolCallMessage)
        ]
        assert call_evidence == ["same-id"]

    async def test_call_id_reused_from_history_is_rejected(self) -> None:
        starts = {}
        old_call = tool_call("old-id", "echo", '{"message":"old"}')
        history = [
            AssistantMessage(
                message_id="assistant-old",
                turn_id="turn-old",
                tool_calls=(old_call,),
            )
        ]
        layer, model, _ = scripted_layer(
            tool_response(tool_call("old-id", "echo", '{"message":"new"}'))
        )

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(starts),
            active_tools=("echo",),
            history=history,
        )

        assert result.exit_reason == TurnExitReason.MODEL_FAILED
        assert result.tool_starts == 0
        assert starts == {}

    async def test_stop_with_tool_calls_fails_safely(self) -> None:
        call = tool_call("call-1", "echo", "{}")
        response = model_response(
            stop_reason=ModelStopReason.STOP,
            tool_calls=(call,),
            raw_stop_reason="stop",
        )
        layer, model, _ = scripted_layer(response)

        result = await execute_turn(
            layer,
            model,
            active_tools=("echo",),
        )

        assert result.exit_reason == TurnExitReason.MODEL_FAILED
        assert result.tool_starts == 0

    async def test_tool_use_without_calls_fails_safely(self) -> None:
        layer, model, _ = scripted_layer(
            model_response(
                stop_reason=ModelStopReason.TOOL_USE,
                raw_stop_reason="tool_calls",
            )
        )

        result = await execute_turn(layer, model)

        assert result.exit_reason == TurnExitReason.MODEL_FAILED
        assert result.tool_starts == 0

    async def test_length_saves_interrupted_text_and_runs_no_tools(
        self,
    ) -> None:
        starts = {}
        call = tool_call("partial-call", "echo", '{"message":"partial"}')
        layer, model, _ = scripted_layer(
            model_response(
                stop_reason=ModelStopReason.LENGTH,
                content="A partial answer",
                tool_calls=(call,),
                raw_stop_reason="length",
            )
        )

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(starts),
            active_tools=("echo",),
        )

        assert result.exit_reason == TurnExitReason.INCOMPLETE
        assert result.final_text == "A partial answer"
        assert result.tool_starts == 0
        assert starts == {}
        assert len(result.new_messages) == 1
        assistant = result.new_messages[0]
        assert isinstance(assistant, AssistantMessage)
        assert assistant.status == "interrupted"
        assert assistant.tool_calls == ()

    async def test_error_returns_model_failed(self) -> None:
        layer, model, _ = scripted_layer(
            model_response(
                stop_reason=ModelStopReason.ERROR,
                raw_stop_reason="provider_error",
                error_category="provider",
            )
        )

        result = await execute_turn(layer, model)

        assert result.exit_reason == TurnExitReason.MODEL_FAILED
        assert result.safe_failure == safe_error("model")

    async def test_aborted_returns_interrupted(self) -> None:
        layer, model, _ = scripted_layer(
            model_response(
                stop_reason=ModelStopReason.ABORTED,
                raw_stop_reason="cancelled",
                error_category="cancelled",
            )
        )

        result = await execute_turn(layer, model)

        assert result.exit_reason == TurnExitReason.INTERRUPTED
        assert result.safe_failure == safe_error("interrupted")


class TestTurnBoundaries:
    async def test_pre_cancelled_turn_is_interrupted(self) -> None:
        layer, model, provider = scripted_layer(stop_response("unused"))
        cancel_event = asyncio.Event()
        cancel_event.set()

        result = await execute_turn(
            layer,
            model,
            cancel_event=cancel_event,
        )

        assert result.exit_reason == TurnExitReason.INTERRUPTED
        assert provider.calls == []

    async def test_repeated_tool_calls_reach_step_limit(self) -> None:
        layer, model, _ = scripted_layer(
            tool_response(tool_call("call-1", "echo", '{"message":"hi"}')),
            tool_response(tool_call("call-2", "echo", '{"message":"hi"}')),
            tool_response(tool_call("call-3", "echo", '{"message":"hi"}')),
        )

        result = await execute_turn(
            layer,
            model,
            active_tools=("echo",),
            max_model_steps=3,
        )

        assert result.exit_reason == TurnExitReason.LIMIT_REACHED
        assert result.model_steps == 3

    async def test_model_selection_stays_outside_agent_request(self) -> None:
        layer, model, provider = scripted_layer(stop_response("Selected."))

        await execute_turn(layer, model)

        request = provider.calls[0].request
        assert not hasattr(request, "model")
        assert provider.calls[0].model == model

class TestToolExecutionEvidence:
    async def test_turn_counts_only_handlers_that_started(self) -> None:
        starts: dict[str, int] = {}

        async def complete_handler(arguments, context):
            starts["complete"] = starts.get("complete", 0) + 1
            return {"state": "complete"}

        async def blocked_handler(arguments, context):
            starts["blocked"] = starts.get("blocked", 0) + 1
            return {"state": "blocked"}

        async def failed_handler(arguments, context):
            starts["failed"] = starts.get("failed", 0) + 1
            raise RuntimeError("expected test failure")

        registry = ToolRegistry()
        for name, handler, effect_kind in (
            ("complete", complete_handler, EffectKind.READ),
            ("blocked", blocked_handler, EffectKind.INTERNAL_WRITE),
            ("failed", failed_handler, EffectKind.READ),
        ):
            registry.register(
                ToolDefinition(
                    name=name,
                    description=f"Run {name}.",
                    parameters={"type": "object"},
                    handler=handler,
                    effect_kind=effect_kind,
                )
            )
        calls = (
            tool_call("call-complete", "complete", "{}"),
            tool_call("call-blocked", "blocked", "{}"),
            tool_call("call-failed", "failed", "{}"),
        )
        layer, model, _ = scripted_layer(
            tool_response(*calls),
            stop_response("Batch settled."),
        )

        result = await execute_turn(
            layer,
            model,
            registry=registry,
            active_tools=("complete", "blocked", "failed"),
        )

        results = [
            message
            for message in result.new_messages
            if isinstance(message, ToolResultMessage)
        ]
        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.tool_starts == 2
        assert starts == {"complete": 1, "failed": 1}
        assert [
            (message.call_id, message.ok, message.error_code) for message in results
        ] == [
            ("call-complete", True, None),
            ("call-blocked", False, "effect_not_allowed"),
            ("call-failed", False, "tool_failed"),
        ]

    async def test_cancelled_batch_settles_every_linked_call(self) -> None:
        first_started = asyncio.Event()
        first_cleanup_finished = asyncio.Event()
        cancel_event = asyncio.Event()
        starts: dict[str, int] = {}

        async def first_handler(arguments, context):
            starts["first"] = starts.get("first", 0) + 1
            first_started.set()
            try:
                await asyncio.Event().wait()
            except asyncio.CancelledError:
                first_cleanup_finished.set()
                raise

        async def later_handler(arguments, context):
            starts["later"] = starts.get("later", 0) + 1
            return {"state": "should not run"}

        registry = ToolRegistry()
        registry.register(
            ToolDefinition(
                name="first",
                description="Wait for cancellation.",
                parameters={"type": "object"},
                handler=first_handler,
                effect_kind=EffectKind.READ,
            )
        )
        registry.register(
            ToolDefinition(
                name="blocked",
                description="Blocked by effect policy.",
                parameters={"type": "object"},
                handler=later_handler,
                effect_kind=EffectKind.INTERNAL_WRITE,
            )
        )
        registry.register(
            ToolDefinition(
                name="inactive",
                description="Registered but inactive.",
                parameters={"type": "object"},
                handler=later_handler,
                effect_kind=EffectKind.READ,
            )
        )
        calls = (
            tool_call("call-first", "first", "{}"),
            tool_call("call-blocked", "blocked", "{}"),
            tool_call("call-inactive", "inactive", "{}"),
            tool_call("call-unknown", "missing", "{}"),
        )
        layer, model, provider = scripted_layer(tool_response(*calls))
        turn_task = asyncio.create_task(
            execute_turn(
                layer,
                model,
                registry=registry,
                active_tools=("first", "blocked"),
                cancel_event=cancel_event,
            )
        )

        await first_started.wait()
        cancel_event.set()
        result = await turn_task

        result_messages = [
            message
            for message in result.new_messages
            if isinstance(message, ToolResultMessage)
        ]
        call_messages = [
            message
            for message in result.new_messages
            if isinstance(message, ToolCallMessage)
        ]
        assert first_cleanup_finished.is_set()
        assert result.exit_reason == TurnExitReason.INTERRUPTED
        assert result.tool_starts == 1
        assert starts == {"first": 1}
        assert len(provider.calls) == 1
        assert [message.call_id for message in call_messages] == [
            "call-first",
            "call-blocked",
            "call-inactive",
            "call-unknown",
        ]
        assert [
            (message.call_id, message.error_code) for message in result_messages
        ] == [
            ("call-first", "cancelled"),
            ("call-blocked", "cancelled"),
            ("call-inactive", "cancelled"),
            ("call-unknown", "cancelled"),
        ]


class TestReasoningTiers:
    async def test_locate_steps_use_low_effort_while_thinking_stays_on(
        self,
    ) -> None:
        # Owner decision 2026-08-08: search/locate steps do not need the
        # tier's full reasoning effort. Thinking stays on everywhere, but
        # tool-call steps (and a no-packet final answer) drop to low so
        # the search loop is fast.
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Done."),
        )
        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            reasoning="max",
        )
        assert result.exit_reason == TurnExitReason.COMPLETED
        assert len(provider.calls) == 2
        for call in provider.calls:
            assert call.request.reasoning.enabled is True
            assert call.request.reasoning.effort == "low"

    async def test_no_reasoning_keeps_thinking_disabled(self) -> None:
        layer, model, provider = scripted_layer(stop_response("Done."))
        result = await execute_turn(layer, model)
        assert result.exit_reason == TurnExitReason.COMPLETED
        assert provider.calls[0].request.reasoning.enabled is False
        assert provider.calls[0].request.reasoning.effort is None

    def test_tiers_keep_thinking_on_and_only_vary_effort(self) -> None:
        from weaver.agent.turn import REASONING_TIERS

        # Owner decision 2026-08-07: thinking is always on for all three
        # tiers; only the tool budget and the reasoning effort differ.
        assert REASONING_TIERS == {
            "awakened": "high",
            "ascended": "high",
            "transcendent": "max",
        }


class TestFinalReadingPhase:
    """Plan 15: validated candidates get one fail-soft reading pass."""

    async def test_final_reading_call_writes_the_answer(self) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Draft: I found the passage."),
            stop_response("Final: Saint came from chapter 104."),
        )
        calls = []
        persisted = []

        async def packet_builder(results, draft):
            calls.append((len(results), draft))
            return "PACKET: chapter 104 prose"

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            persist_message=_async_append(persisted),
            packet_builder=packet_builder,
        )
        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Final: Saint came from chapter 104."
        assert calls == [(1, "Draft: I found the passage.")]
        assert len(provider.calls) == 3
        # The candidate is ephemeral: only the final answer is persisted.
        assert [m.kind for m in persisted] == [
            "assistant",
            "tool_call",
            "tool_result",
            "assistant",
        ]
        assert persisted[-1].content == "Final: Saint came from chapter 104."
        final_request = provider.calls[-1].request
        assert final_request.tools == ()
        assert final_request.tool_choice is None
        assert any(
            "PACKET: chapter 104 prose" in (message.content or "")
            for message in final_request.messages
        )

    async def test_final_reading_call_keeps_the_tier_effort(self) -> None:
        # The tier effort (high / max) belongs to the heavy final reading
        # answer call; locate steps drop to low (thinking still on).
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Draft: located."),
            stop_response("Final: answer."),
        )

        async def packet_builder(results, draft):
            return "PACKET: prose"

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            reasoning="max",
            packet_builder=packet_builder,
        )
        assert result.exit_reason == TurnExitReason.COMPLETED
        assert len(provider.calls) == 3
        # Locate steps (the tool call and candidate) use low effort.
        assert provider.calls[0].request.reasoning.effort == "low"
        assert provider.calls[1].request.reasoning.effort == "low"
        # The final reading call keeps the tier effort.
        assert provider.calls[2].request.reasoning.effort == "max"
        for call in provider.calls:
            assert call.request.reasoning.enabled is True

    async def test_final_reading_keeps_recent_exchanges_drops_old_ones(self) -> None:
        # The "7 daemons" bug: the WHOLE conversation history dominated
        # the final reading call, so the model answered the previous question
        # instead of the one just asked. The window keeps the last few
        # exchanges (continuity: follow-ups must know the previous Q&A)
        # and drops everything older than that.
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Draft: located daemon statements."),
            stop_response("Final: the daemons are children of the unknown."),
        )
        old_answer = "No, Anvil gets cooked. " * 200
        ancient_answer = "The dark sea swallowed Nephis. " * 100
        history = [
            UserMessage(
                message_id="q-1",
                turn_id="t-1",
                content="who is the shadow god",
            ),
            AssistantMessage(message_id="a-1", turn_id="t-1", content=ancient_answer),
            UserMessage(
                message_id="q0",
                turn_id="t0",
                content="what happened on the forgotten shore",
            ),
            AssistantMessage(message_id="a0", turn_id="t0", content="the shore had a colossus."),
            UserMessage(
                message_id="q1",
                turn_id="t1",
                content="can anvil beat the vile thieving bird",
            ),
            AssistantMessage(message_id="a1", turn_id="t1", content=old_answer),
            UserMessage(message_id="q2", turn_id="t2", content="list the 7 daemons"),
        ]

        async def packet_builder(results, draft):
            return "PACKET: daemon statements"

        await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            history=history,
            packet_builder=packet_builder,
        )
        final_request = provider.calls[-1].request
        joined = " ".join((m.content or "") for m in final_request.messages)
        assert "PACKET: daemon statements" in joined
        assert "list the 7 daemons" in joined
        # continuity: the previous exchange stays in the window
        assert "Anvil gets cooked" in joined
        # the exchange before that is beyond the window and must not leak
        assert "dark sea swallowed Nephis" not in joined
        assert final_request.tools == ()

    async def test_final_reading_request_carries_the_answer_token_cap(self) -> None:
        # The daemons answer was cut mid-sentence at finish_reason=
        # "length": the final call sent the default 4096 max_tokens
        # while thinking is on, and DeepSeek counts reasoning tokens
        # against it. Answer calls must carry headroom; tool-call calls
        # keep the model default.
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Draft: located daemon statements."),
            stop_response("Final: the daemons are children of the unknown."),
        )

        async def packet_builder(results, draft):
            return "PACKET: daemon statements"

        await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            packet_builder=packet_builder,
        )
        assert len(provider.calls) == 3
        # first call: a locate tool step, gets tool-call headroom so a
        # long thinking trace cannot truncate it (Plan v1 2026-08-17)
        assert (
            provider.calls[0].request.max_output_tokens
            == TOOL_CALL_MAX_OUTPUT_TOKENS
        )
        # Last call: the final reading answer must have headroom.
        assert (
            provider.calls[-1].request.max_output_tokens
            == ANSWER_MAX_OUTPUT_TOKENS
        )

    async def test_builder_none_keeps_the_candidate(self) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Draft answer."),
        )
        persisted = []

        async def packet_builder(results, draft):
            return None

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            persist_message=_async_append(persisted),
            packet_builder=packet_builder,
        )
        assert result.final_text == "Draft answer."
        assert len(provider.calls) == 2
        assert [m.kind for m in persisted][-1] == "assistant"

    async def test_zero_evidence_candidate_gets_one_reprompt_then_publishes(
        self,
    ) -> None:
        layer, model, provider = scripted_layer(
            stop_response("First direct answer."),
            stop_response("Second direct answer."),
        )
        called = []

        async def packet_builder(results, draft):
            called.append((results, draft))
            return None

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            packet_builder=packet_builder,
        )
        assert result.final_text == "Second direct answer."
        assert called == [([], "Second direct answer.")]
        assert len(provider.calls) == 2
        assert all(call.request.tools for call in provider.calls)
        assert any(
            "without opening any evidence" in (message.content or "")
            for message in provider.calls[1].request.messages
        )

    async def test_no_final_reading_after_forced_answer(self) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Forced answer."),
        )
        called = []

        async def packet_builder(results, draft):
            called.append(draft)
            return "PACKET"

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            tool_budget=1,
            packet_builder=packet_builder,
        )
        assert result.final_text == "Forced answer."
        assert called == []
        assert len(provider.calls) == 2

    async def test_tool_use_in_final_phase_falls_back_to_candidate(self) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Draft."),
            tool_response(tool_call("c2", "echo", '{"message": "b"}')),
        )

        async def packet_builder(results, draft):
            return "PACKET"

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            packet_builder=packet_builder,
        )
        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Draft."
        assert len(provider.calls) == 3
        assert provider.calls[-1].request.tools == ()
        assert all(call.request.tool_choice is None for call in provider.calls)

    async def test_final_request_never_carries_orphaned_tool_drafts(self) -> None:
        # Plan 15 thread-break (2026-08-08): the final request kept the
        # locate tool-use drafts, which carry tool_calls but no following
        # tool messages. DeepSeek 400s that (invalid_request/provider_error,
        # reproduced live). The final reading wire must contain only the
        # content-bearing final locate draft: no assistant message with
        # tool_calls, no empty-content assistant message.
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Draft: found it."),
            stop_response("Final: chapter 104."),
        )

        async def packet_builder(results, draft):
            return "PACKET: prose"

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            packet_builder=packet_builder,
        )
        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Final: chapter 104."
        final_messages = provider.calls[-1].request.messages
        for m in final_messages:
            if m.role == "assistant":
                assert not m.tool_calls, "orphaned tool_calls in final request"
                assert m.content, "empty assistant message in final request"
        candidates = [m for m in final_messages if m.role == "assistant"]
        assert [m.content for m in candidates] == ["Draft: found it."]

    async def test_final_window_drops_previous_tool_use_assistants(self) -> None:
        # Multi-turn thread-broke (2026-08-09): the recent window kept the
        # previous turn's tool-use assistant messages (tool_calls, empty
        # content) but skipped their tool results, so the synthesis request
        # carried orphaned tool_calls and DeepSeek 400'd
        # (invalid_request/provider_error) exactly when holding a
        # conversation. The window must keep only user messages and
        # content-bearing assistant answers.
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Draft: found the passage."),
            stop_response("Final: chapter 2729."),
        )
        history = [
            UserMessage(message_id="q0", turn_id="t0", content="who told noctis the gods cant kill daemons"),
            AssistantMessage(
                message_id="a0-search",
                turn_id="t0",
                content="",
                tool_calls=(tool_call("c0a", "echo", '{"q": "weaver noctis"}'),),
            ),
            AssistantMessage(
                message_id="a0",
                turn_id="t0",
                content="Weaver told Noctis that Sun God cannot kill Hope.",
            ),
            UserMessage(message_id="q1", turn_id="t1", content="youre wrong, it was chapter 2729"),
        ]

        async def packet_builder(results, draft):
            return "PACKET: ch2729"

        await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            history=history,
            packet_builder=packet_builder,
        )
        final_request = provider.calls[-1].request
        for m in final_request.messages:
            if m.role == "assistant":
                assert not m.tool_calls, "previous turn tool calls leaked into final request"
        joined = " ".join((m.content or "") for m in final_request.messages)
        assert "Weaver told Noctis" in joined  # continuity kept
        assert "chapter 2729" in joined


    @pytest.mark.parametrize(
        "final_response",
        [
            stop_response(""),
            stop_response("   \n"),
            stop_response("I can't answer that from the packet."),
            model_response(
                stop_reason=ModelStopReason.ERROR,
                error_category="provider_error",
            ),
        ],
        ids=["empty", "whitespace", "refusal", "provider-error"],
    )
    async def test_bad_final_phase_output_publishes_validated_candidate(
        self,
        final_response: ModelResponse,
    ) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Candidate grounded in chapter 104."),
            final_response,
        )
        persisted: list = []

        async def packet_builder(results, draft):
            return "PACKET: chapter 104"

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            persist_message=_async_append(persisted),
            packet_builder=packet_builder,
        )

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Candidate grounded in chapter 104."
        assert persisted[-1].content == "Candidate grounded in chapter 104."
        assert len(provider.calls) == 3

    async def test_packet_builder_failure_publishes_validated_candidate(
        self,
    ) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Candidate grounded in chapter 104."),
        )

        async def packet_builder(results, draft):
            raise RuntimeError("packet unavailable")

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            packet_builder=packet_builder,
        )

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Candidate grounded in chapter 104."
        assert len(provider.calls) == 2

    async def test_final_phase_provider_exception_publishes_candidate(
        self,
        monkeypatch: pytest.MonkeyPatch,
    ) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Candidate grounded in chapter 104."),
        )
        original_stream = provider.stream

        async def fail_final_call(*args, **kwargs):
            if len(provider.calls) == 2:
                raise RuntimeError("provider unavailable")
            async for event in original_stream(*args, **kwargs):
                yield event

        monkeypatch.setattr(provider, "stream", fail_final_call)

        async def packet_builder(results, draft):
            return "PACKET: chapter 104"

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            packet_builder=packet_builder,
        )

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Candidate grounded in chapter 104."

    async def test_cancellation_wins_over_final_phase_provider_failure(
        self,
        monkeypatch: pytest.MonkeyPatch,
    ) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Candidate grounded in chapter 104."),
        )
        cancel_event = asyncio.Event()
        original_stream = provider.stream

        async def cancel_during_final_call(*args, **kwargs):
            if len(provider.calls) == 2:
                cancel_event.set()
                raise RuntimeError("provider stopped during cancellation")
            async for event in original_stream(*args, **kwargs):
                yield event

        monkeypatch.setattr(provider, "stream", cancel_during_final_call)
        persisted: list = []

        async def packet_builder(results, draft):
            return "PACKET: chapter 104"

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            cancel_event=cancel_event,
            persist_message=_async_append(persisted),
            packet_builder=packet_builder,
        )

        assert result.exit_reason == TurnExitReason.INTERRUPTED
        assert result.final_text == ""
        assert [message.kind for message in persisted] == [
            "assistant",
            "tool_call",
            "tool_result",
        ]


class TestCandidateValidation:
    WORKING_NOTE_CASES = [
        (
            "One moment, please.",
            "One moment, Sunny stood beside Nephis; the next, he was gone (ch. 500).",
        ),
        (
            "Give me a moment to confirm.",
            'Sunny said "give me a moment" before leaving (ch. 12).',
        ),
        (
            "Let me look through the chapters.",
            'The line begins "let me look at you" (ch. 12).',
        ),
        (
            "Let me search for that name.",
            'The quote "let me search" belongs to the scene in chapter 12.',
        ),
        (
            "Let me check the exact wording.",
            'Sunny says "let me check" before opening the door (ch. 12).',
        ),
        (
            "I'll search the later chapters.",
            'The promise "I\'ll search" appears in chapter 12.',
        ),
        (
            "I'll look for the scene.",
            'His reply was "I\'ll look for it" (ch. 12).',
        ),
        (
            "I'll check the passage.",
            'The exact reply is "I\'ll check" (ch. 12).',
        ),
        (
            "I'll trace the name first.",
            'Auro says "I\'ll trace it" in chapter 12.',
        ),
        (
            "I'll open the best result.",
            'The line "I\'ll open it" appears in chapter 12.',
        ),
        (
            "I need to verify that claim.",
            'He admits "I need to verify it" in chapter 12.',
        ),
        (
            "Reaching into the story map now.",
            "Sunny was reaching into the shadows when it happened (ch. 12).",
        ),
        (
            "Searching the library now.",
            "Cassie was searching the library during that scene (ch. 12).",
        ),
    ]

    @pytest.mark.parametrize(
        ("working_note", "legitimate_answer"),
        WORKING_NOTE_CASES,
    )
    def test_working_note_markers_are_tight(
        self,
        working_note: str,
        legitimate_answer: str,
    ) -> None:
        assert _is_working_note_candidate(working_note)
        assert not _is_working_note_candidate(legitimate_answer)

    @pytest.mark.parametrize(
        "rejected",
        [
            "<echo: exact name>",
            '<tool calls>\n```json\n[{"name":"echo","arguments":{}}]\n```',
            "I'll trace the exact name first.",
            "Give me a moment to check.",
            "   \n",
        ],
        ids=["angle-bracket", "json", "narration", "placeholder", "empty"],
    )
    async def test_rejected_candidate_keeps_tools_and_can_dispatch_next_tool(
        self,
        rejected: str,
    ) -> None:
        layer, model, provider = scripted_layer(
            stop_response(rejected),
            tool_response(tool_call("c1", "echo", '{"message": "evidence"}')),
            stop_response("Grounded answer from chapter 12."),
        )
        starts: dict[str, int] = {}
        persisted: list = []

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(starts),
            active_tools=("echo",),
            persist_message=_async_append(persisted),
        )

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Grounded answer from chapter 12."
        assert starts == {"echo": 1}
        assert provider.calls[1].request.tools
        assert [message.kind for message in persisted] == [
            "assistant",
            "tool_call",
            "tool_result",
            "assistant",
        ]
        rejected_text = rejected.strip()
        if rejected_text:
            assert all(
                rejected_text not in (getattr(message, "content", "") or "")
                for message in persisted
            )

    async def test_repeated_tool_calls_keep_reasoning_content_in_context(
        self,
    ) -> None:
        layer, model, provider = scripted_layer(
            tool_response(
                tool_call("c1", "echo", '{"message": "first"}'),
                reasoning_content="first private reasoning",
            ),
            tool_response(
                tool_call("c2", "echo", '{"message": "second"}'),
                reasoning_content="second private reasoning",
            ),
            stop_response("Grounded answer."),
        )

        persisted: list = []
        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            persist_message=_async_append(persisted),
        )

        assert result.exit_reason == TurnExitReason.COMPLETED
        second_request_reasoning = [
            message.reasoning_content
            for message in provider.calls[1].request.messages
            if message.role == "assistant" and message.tool_calls
        ]
        final_candidate_reasoning = [
            message.reasoning_content
            for message in provider.calls[2].request.messages
            if message.role == "assistant" and message.tool_calls
        ]
        assert second_request_reasoning == ["first private reasoning"]
        assert final_candidate_reasoning == [
            "first private reasoning",
            "second private reasoning",
        ]
        assert all(
            not getattr(message, "reasoning_content", "")
            for message in persisted
        )
        assert all(
            not getattr(message, "reasoning_content", "")
            for message in result.new_messages
        )

    async def test_working_note_rejection_limit_fails_without_persisting(
        self,
    ) -> None:
        layer, model, _ = scripted_layer(
            stop_response("Let me check."),
            stop_response("I'll search."),
            stop_response("One moment."),
        )
        persisted: list = []

        result = await execute_turn(
            layer,
            model,
            active_tools=("echo",),
            persist_message=_async_append(persisted),
        )

        assert result.exit_reason == TurnExitReason.MODEL_FAILED
        assert result.model_steps == 3
        assert persisted == []


class TestTextToolCallSlips:
    """A thinking model can slip out of the structured tool-call protocol
    and write its call as prose ('<tool calls>' + a JSON block). That text
    is never an answer: the harness corrects the model and re-runs, and
    never persists the slip."""

    SLIP = (
        "<tool calls>\n```json\n"
        '[{"name": "echo", "arguments": {"message": "x"}}]\n```'
    )
    ANGLE_BRACKET_SLIP = (
        "<reaching into the story map...>\n\n"
        '<find_text: "Auro of the Nine", exact phrase>\n\n'
        "I'll trace the name through the manuscript first."
    )

    async def test_text_tool_call_draft_is_corrected_not_answered(self) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response(self.SLIP),
            stop_response("Real answer."),
        )
        persisted: list = []

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            persist_message=_async_append(persisted),
        )
        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Real answer."
        # the corrective call still has tools available
        corrective = provider.calls[2].request
        assert corrective.tools != ()
        assert any(
            "wrote a tool call as plain text" in (m.content or "")
            for m in corrective.messages
        )
        # the slip never reached the store, the real answer did
        assert [m.kind for m in persisted] == [
            "assistant",
            "tool_call",
            "tool_result",
            "assistant",
        ]
        assert persisted[-1].content == "Real answer."
        assert all(
            "tool calls>" not in (getattr(m, "content", "") or "")
            for m in persisted
        )

    async def test_text_tool_call_in_final_phase_falls_back_to_candidate(
        self,
    ) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response("Candidate: found."),
            stop_response(self.SLIP),
        )
        persisted: list = []

        async def packet_builder(results, draft):
            return "PACKET: prose"

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            persist_message=_async_append(persisted),
            packet_builder=packet_builder,
        )
        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Candidate: found."
        assert len(provider.calls) == 3
        final_request = provider.calls[2].request
        assert final_request.tools == ()
        assert any(
            "PACKET: prose" in (m.content or "")
            for m in final_request.messages
        )
        # The final-phase slip is never persisted and never gets a retry.
        assert [m.kind for m in persisted] == [
            "assistant",
            "tool_call",
            "tool_result",
            "assistant",
        ]
        assert persisted[-1].content == "Candidate: found."

    async def test_angle_bracket_tool_narration_in_final_phase_uses_candidate(
        self,
    ) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "auro"}')),
            stop_response("Auro was one of the Nine."),
            stop_response(self.ANGLE_BRACKET_SLIP),
        )
        persisted: list = []

        async def packet_builder(results, draft):
            return "PACKET: evidence only"

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            persist_message=_async_append(persisted),
            packet_builder=packet_builder,
        )

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Auro was one of the Nine."
        assert len(provider.calls) == 3
        assert provider.calls[2].request.tools == ()
        assert all(
            "find_text" not in (getattr(message, "content", "") or "")
            for message in persisted
        )

    async def test_text_tool_call_slip_limit_fails_honestly(self) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response(self.SLIP),
            stop_response(self.SLIP),
            stop_response(self.SLIP),
        )
        persisted: list = []

        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            persist_message=_async_append(persisted),
        )
        # two corrections are allowed; the third slip fails the turn
        assert result.exit_reason == TurnExitReason.MODEL_FAILED
        assert result.model_steps == 4
        # no slip text ever reached the store
        assert all(
            "tool calls>" not in (getattr(m, "content", "") or "")
            for m in persisted
        )
        assert [m.kind for m in persisted] == [
            "assistant",
            "tool_call",
            "tool_result",
        ]

    async def test_text_tool_call_on_forced_call_is_a_refusal(self) -> None:
        layer, model, provider = scripted_layer(
            tool_response(tool_call("c1", "echo", '{"message": "a"}')),
            stop_response(self.SLIP),
        )
        result = await execute_turn(
            layer,
            model,
            registry=make_registry(),
            active_tools=("echo",),
            tool_budget=1,
        )
        # the forced call already told the model its steps are spent; a
        # text tool call there is a refusal, not an answer
        assert result.exit_reason == TurnExitReason.LIMIT_REACHED
        assert result.model_steps == 2
