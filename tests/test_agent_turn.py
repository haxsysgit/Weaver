"""Tests for the Weaver agent turn runtime."""

import asyncio

import pytest

from weaver.agent.errors import safe_error
from weaver.agent.messages import (
    AssistantMessage,
    ToolCallMessage,
    ToolResultMessage,
    UserMessage,
)
from weaver.agent.tools import EffectKind, ToolDefinition, ToolRegistry
from weaver.agent.turn import TurnExitReason, run_turn
from weaver.fake import FakeModelClient
from weaver.model import ModelStreamEvent, ModelStreamEventType


# ── Helpers ──


def _text_step(text: str, model: str = "test-model") -> list[ModelStreamEvent]:
    """One model step: text delta + completion."""
    return [
        ModelStreamEvent(event_type=ModelStreamEventType.TEXT_DELTA, delta=text),
        ModelStreamEvent(
            event_type=ModelStreamEventType.RESPONSE_COMPLETED,
            finish_reason="stop",
            model=model,
        ),
    ]


def _tool_step(
    tool_name: str,
    arguments: str,
    model: str = "test-model",
) -> list[ModelStreamEvent]:
    """One model step: tool call + completion."""
    return [
        ModelStreamEvent(
            event_type=ModelStreamEventType.COMPLETE_TOOL_CALL,
            call_id="call-001",
            tool_name=tool_name,
            tool_arguments=arguments,
            model=model,
        ),
        ModelStreamEvent(
            event_type=ModelStreamEventType.RESPONSE_COMPLETED,
            finish_reason="tool_calls",
            model=model,
        ),
    ]


# ── Tools for testing ──


async def _echo_handler(arguments: dict, ctx) -> dict:
    return {"echo": arguments}


async def _weather_handler(arguments: dict, ctx) -> dict:
    city = arguments.get("city", "unknown")
    return {"city": city, "temp": 22, "condition": "sunny"}


def _make_registry() -> ToolRegistry:
    registry = ToolRegistry()
    registry.register(
        ToolDefinition(
            name="echo",
            description="Echo back arguments",
            parameters={
                "type": "object",
                "properties": {"message": {"type": "string"}},
            },
            handler=_echo_handler,
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
            handler=_weather_handler,
            effect_kind=EffectKind.READ,
        )
    )
    return registry


# ── Tests ──


class TestTurnRuntime:
    """Deterministic turn runtime tests using FakeModelClient."""

    async def test_simple_text_response(self):
        """A turn with a text-only model response returns COMPLETED."""
        client = FakeModelClient(
            stream_events=[_text_step("Hello, reader.")]
        )
        result = await run_turn(
            turn_id="turn-1",
            model=client,
            system_prompt="You are Weaver.",
            history=[],
            tool_registry=_make_registry(),
            active_tools=(),
            cancel_event=asyncio.Event(),
        )

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert result.final_text == "Hello, reader."
        assert result.model_steps == 1
        assert result.tool_starts == 0
        assert len(result.new_messages) == 1
        assert isinstance(result.new_messages[0], AssistantMessage)
        assert result.new_messages[0].content == "Hello, reader."

    async def test_tool_call_and_response(self):
        """A turn with tool call -> tool result -> text response."""
        client = FakeModelClient(
            stream_events=[
                _tool_step("get_weather", '{"city": "London"}'),
                _text_step("The weather in London is sunny, 22C."),
            ]
        )
        result = await run_turn(
            turn_id="turn-2",
            model=client,
            system_prompt="You are Weaver.",
            history=[],
            tool_registry=_make_registry(),
            active_tools=("get_weather",),
            cancel_event=asyncio.Event(),
        )

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert "sunny" in result.final_text
        assert result.model_steps == 2
        assert result.tool_starts == 1

        kinds = [m.kind for m in result.new_messages]
        assert "tool_call" in kinds
        assert "tool_result" in kinds
        assert "assistant" in kinds

    async def test_cancellation(self):
        """Cancellation mid-stream returns INTERRUPTED."""
        client = FakeModelClient(
            stream_events=[
                [
                    ModelStreamEvent(
                        event_type=ModelStreamEventType.TEXT_DELTA,
                        delta="I think the answer is...",
                    ),
                ]
            ]
        )
        cancel_event = asyncio.Event()
        cancel_event.set()

        result = await run_turn(
            turn_id="turn-3",
            model=client,
            system_prompt="You are Weaver.",
            history=[],
            tool_registry=_make_registry(),
            active_tools=(),
            cancel_event=cancel_event,
        )

        assert result.exit_reason == TurnExitReason.INTERRUPTED

    async def test_limit_reached(self):
        """If the model keeps calling tools, limit_reached after max steps."""
        client = FakeModelClient(
            stream_events=[_tool_step("echo", '{"message": "hi"}')] * 10
        )

        result = await run_turn(
            turn_id="turn-4",
            model=client,
            system_prompt="You are Weaver.",
            history=[],
            tool_registry=_make_registry(),
            active_tools=("echo",),
            cancel_event=asyncio.Event(),
            max_model_steps=3,
        )

        assert result.exit_reason == TurnExitReason.LIMIT_REACHED
        assert result.model_steps == 3

    async def test_model_failure(self):
        """A RESPONSE_FAILED event returns MODEL_FAILED."""
        client = FakeModelClient(
            stream_events=[
                [
                    ModelStreamEvent(
                        event_type=ModelStreamEventType.RESPONSE_FAILED,
                        error="provider error",
                        category="provider_error",
                    ),
                ]
            ]
        )

        result = await run_turn(
            turn_id="turn-5",
            model=client,
            system_prompt="You are Weaver.",
            history=[],
            tool_registry=_make_registry(),
            active_tools=(),
            cancel_event=asyncio.Event(),
        )

        assert result.exit_reason == TurnExitReason.MODEL_FAILED
        assert result.safe_failure == safe_error("model")

    async def test_unknown_tool_returns_error(self):
        """Dispatching an unregistered tool returns a tool result error."""
        client = FakeModelClient(
            stream_events=[
                _tool_step("nonexistent_tool", "{}"),
                _text_step("I tried but that tool does not exist."),
            ]
        )

        result = await run_turn(
            turn_id="turn-6",
            model=client,
            system_prompt="You are Weaver.",
            history=[],
            tool_registry=_make_registry(),
            active_tools=("echo",),
            cancel_event=asyncio.Event(),
        )

        tool_results = [
            m for m in result.new_messages if isinstance(m, ToolResultMessage)
        ]
        assert len(tool_results) == 1
        assert not tool_results[0].ok
        assert tool_results[0].error_code == "unknown_tool"

    async def test_persist_callback_receives_messages(self):
        """The persist callback receives each message."""
        persisted: list = []

        client = FakeModelClient(
            stream_events=[_text_step("Short reply.")]
        )

        result = await run_turn(
            turn_id="turn-7",
            model=client,
            system_prompt="You are Weaver.",
            history=[],
            tool_registry=_make_registry(),
            active_tools=(),
            cancel_event=asyncio.Event(),
            persist_message=persisted.append,
        )

        assert len(persisted) == 1
        assert persisted[0].kind == "assistant"
        assert persisted[0].content == "Short reply."

    async def test_user_history_included_in_context(self):
        """Messages in history appear in the model request."""
        client = FakeModelClient(
            stream_events=[_text_step("I remember that.")]
        )

        history = [
            UserMessage(
                message_id="u1",
                turn_id="t0",
                content="What is Sunny's aspect?",
            ),
            AssistantMessage(
                message_id="a1",
                turn_id="t0",
                content="Sunny's aspect is Shadow related.",
                status="complete",
            ),
        ]

        await run_turn(
            turn_id="turn-8",
            model=client,
            system_prompt="You are Weaver.",
            history=history,
            tool_registry=_make_registry(),
            active_tools=(),
            cancel_event=asyncio.Event(),
        )

        assert len(client.requests) == 1
        messages = client.requests[0].messages
        assert len(messages) >= 2


class TestAgentSession:
    """Integration tests through AgentSession."""

    async def test_session_basic_conversation(self):
        """A session sends a message and gets a response."""
        from weaver.agent.session import AgentSession

        client = FakeModelClient(
            stream_events=[_text_step("Hello! What can I help with?")]
        )
        session = AgentSession(
            session_id="sess-1",
            model=client,
            system_prompt="You are Weaver, a literary reader.",
            tool_registry=_make_registry(),
        )

        result = await session.send("Tell me about the novel.")

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert len(session.history) == 2  # user + assistant
        assert session.turn_count == 1

    async def test_session_history_accumulates(self):
        """History grows across turns."""
        from weaver.agent.session import AgentSession

        client = FakeModelClient(
            stream_events=[
                _text_step("First response."),
                _text_step("Second response."),
            ]
        )
        session = AgentSession(
            session_id="sess-2",
            model=client,
            system_prompt="You are Weaver.",
            tool_registry=_make_registry(),
        )

        await session.send("Message 1")
        await session.send("Message 2")

        assert session.turn_count == 2
        assert len(session.history) == 4  # 2 user + 2 assistant

    async def test_session_with_tool(self):
        """A session where the model calls a tool and responds."""
        from weaver.agent.session import AgentSession

        client = FakeModelClient(
            stream_events=[
                _tool_step("get_weather", '{"city": "London"}'),
                _text_step("London: sunny, 22C."),
            ]
        )
        session = AgentSession(
            session_id="sess-3",
            model=client,
            system_prompt="You are Weaver.",
            tool_registry=_make_registry(),
            active_tools=("get_weather",),
        )

        result = await session.send("What's the weather in London?")

        assert result.exit_reason == TurnExitReason.COMPLETED
        assert "sunny" in result.final_text
        assert result.tool_starts == 1
