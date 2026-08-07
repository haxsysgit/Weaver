import asyncio

import pytest

from weaver.agent.errors import safe_error
from weaver.agent.messages import (
    AssistantMessage,
    ToolCallMessage,
    ToolResultMessage,
    UserMessage,
)
from weaver.agent.session import AgentSession
from weaver.agent.tools import (
    EffectKind,
    ToolDefinition,
    ToolExecutionContext,
    ToolExecutionPolicy,
    ToolRegistry,
)
from weaver.agent.turn import TurnExitReason, run_turn
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
) -> ModelResponse:
    model = _model_spec()
    return ModelResponse(
        assistant_message=ModelMessage(
            role="assistant",
            content=content,
            tool_calls=tool_calls,
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
) -> ModelResponse:
    return model_response(
        stop_reason=ModelStopReason.TOOL_USE,
        content=content,
        tool_calls=tuple(tool_calls),
        raw_stop_reason="tool_calls",
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
    execution_policy: ToolExecutionPolicy | None = None,
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
        assert result.model_steps == 1
        assert result.tool_starts == 0
        assert provider.calls[0].max_output_tokens == 777
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

    async def test_later_user_turn_replays_the_complete_exchange(
        self,
    ) -> None:
        call = tool_call("call-1", "echo", '{"message":"hello"}')
        layer, model, provider = scripted_layer(
            tool_response(call),
            stop_response("First answer."),
            stop_response("Second answer."),
        )
        session = AgentSession(
            session_id="session-1",
            model_layer=layer,
            model=model,
            system_prompt="You are Weaver.",
            tool_registry=make_registry(),
            execution_policy=ToolExecutionPolicy.read_only(),
            active_tools=("echo",),
        )

        first = await session.send("First question")
        second = await session.send("Second question")

        assert first.exit_reason == TurnExitReason.COMPLETED
        assert second.exit_reason == TurnExitReason.COMPLETED
        replay = provider.calls[2].request.messages
        assert [message.role for message in replay] == [
            "system",
            "user",
            "assistant",
            "tool",
            "assistant",
            "user",
        ]
        assert replay[2].tool_calls == (call,)
        assert replay[3].tool_call_id == "call-1"


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

    async def test_session_accumulates_history(self) -> None:
        layer, model, _ = scripted_layer(
            stop_response("First response."),
            stop_response("Second response."),
        )
        session = AgentSession(
            session_id="session-2",
            model_layer=layer,
            model=model,
            system_prompt="You are Weaver.",
            tool_registry=make_registry(),
            execution_policy=ToolExecutionPolicy.read_only(),
        )

        await session.send("Message 1")
        await session.send("Message 2")

        assert session.turn_count == 2
        assert len(session.history) == 4
        assert isinstance(session.history[0], UserMessage)


class TestToolExecutionEvidence:
    async def test_session_turn_and_call_ids_reach_handler(self) -> None:
        received_ids: list[tuple[str, str, str]] = []

        async def handler(arguments, context):
            received_ids.append(
                (
                    context.session_id,
                    context.turn_id,
                    context.call_id,
                )
            )
            return {"state": "read"}

        registry = ToolRegistry()
        registry.register(
            ToolDefinition(
                name="inspect",
                description="Inspect state.",
                parameters={"type": "object"},
                handler=handler,
                effect_kind=EffectKind.READ,
            )
        )
        call = tool_call("call-context", "inspect", "{}")
        layer, model, _ = scripted_layer(
            tool_response(call),
            stop_response("Inspection finished."),
        )
        session = AgentSession(
            session_id="session-real",
            model_layer=layer,
            model=model,
            system_prompt="You are Weaver.",
            tool_registry=registry,
            execution_policy=ToolExecutionPolicy.read_only(),
            active_tools=("inspect",),
        )

        result = await session.send("Inspect")

        assert received_ids == [("session-real", result.turn_id, "call-context")]

    async def test_session_cancel_reaches_running_handler(self) -> None:
        handler_started = asyncio.Event()
        cleanup_finished = asyncio.Event()

        async def handler(arguments, context):
            handler_started.set()
            try:
                await asyncio.Event().wait()
            except asyncio.CancelledError:
                cleanup_finished.set()
                raise

        registry = ToolRegistry()
        registry.register(
            ToolDefinition(
                name="waiting-read",
                description="Wait for cancellation.",
                parameters={"type": "object"},
                handler=handler,
                effect_kind=EffectKind.READ,
            )
        )
        layer, model, provider = scripted_layer(
            tool_response(tool_call("call-session-cancel", "waiting-read", "{}"))
        )
        session = AgentSession(
            session_id="session-cancel",
            model_layer=layer,
            model=model,
            system_prompt="You are Weaver.",
            tool_registry=registry,
            execution_policy=ToolExecutionPolicy.read_only(),
            active_tools=("waiting-read",),
        )
        send_task = asyncio.create_task(session.send("Wait"))

        await handler_started.wait()
        session.cancel()
        result = await send_task

        assert cleanup_finished.is_set()
        assert result.exit_reason == TurnExitReason.INTERRUPTED
        assert result.tool_starts == 1
        assert len(provider.calls) == 1

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
