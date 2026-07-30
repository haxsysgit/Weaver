import asyncio
from types import SimpleNamespace

import httpx
import openai
import pytest

from weaver import (
    DEEPSEEK_PRO,
    DeepSeekProvider,
    ModelLayer,
    ModelMessage,
    ModelRequest,
    ModelStopReason,
    ModelStreamEventType,
    ModelToolCall,
    ModelToolSchema,
)


class StubStream:
    def __init__(self, chunks) -> None:
        self._chunks = chunks
        self.closed = False

    def __aiter__(self):
        return self._iterate()

    async def _iterate(self):
        for chunk in self._chunks:
            yield chunk

    async def close(self) -> None:
        self.closed = True


class StubCompletions:
    def __init__(self, chunks, *, error=None) -> None:
        self.stream = StubStream(chunks)
        self.error = error
        self.payload = None
        self.starts = 0

    async def create(self, **payload):
        self.starts += 1
        self.payload = payload
        if self.error is not None:
            raise self.error
        return self.stream


def sdk_with(completions: StubCompletions):
    return SimpleNamespace(chat=SimpleNamespace(completions=completions))


def chunk(
    *,
    content=None,
    tool_calls=None,
    finish_reason=None,
    usage=None,
    reasoning_content=None,
):
    delta = SimpleNamespace(
        content=content,
        reasoning_content=reasoning_content,
        tool_calls=tool_calls,
    )
    choices = []
    if (
        content is not None
        or tool_calls is not None
        or finish_reason is not None
        or reasoning_content is not None
    ):
        choices = [
            SimpleNamespace(
                delta=delta,
                finish_reason=finish_reason,
            )
        ]
    return SimpleNamespace(choices=choices, usage=usage)


def tool_delta(*, index, call_id=None, name=None, arguments=None):
    function = SimpleNamespace(name=name, arguments=arguments)
    return SimpleNamespace(
        index=index,
        id=call_id,
        type="function",
        function=function,
    )


@pytest.mark.asyncio
async def test_payload_conversion_and_exact_tool_json() -> None:
    raw_arguments = '{"value": 1, "unrepaired": }'
    completions = StubCompletions(
        [
            chunk(
                tool_calls=[
                    tool_delta(
                        index=0,
                        call_id="call-1",
                        name="synthetic_tool",
                        arguments=raw_arguments,
                    )
                ]
            ),
            chunk(finish_reason="tool_calls"),
        ]
    )
    provider = DeepSeekProvider(
        "test-only-key",
        sdk_client=sdk_with(completions),
    )
    layer = ModelLayer()
    layer.register_provider(provider)
    request = ModelRequest(
        messages=(
            ModelMessage(
                role="assistant",
                content=None,
                tool_calls=(
                    ModelToolCall(
                        call_id="earlier-call",
                        name="synthetic_tool",
                        arguments_json='{"value":0}',
                    ),
                ),
            ),
            ModelMessage(
                role="tool",
                content='{"ok":true}',
                tool_call_id="earlier-call",
            ),
        ),
        tools=(
            ModelToolSchema(
                name="synthetic_tool",
                description="Synthetic",
                parameters={
                    "type": "object",
                    "properties": {"value": {"type": "integer"}},
                },
            ),
        ),
        tool_choice="synthetic_tool",
        response_format="json_object",
        max_output_tokens=321,
    )

    response = await layer.complete(
        DEEPSEEK_PRO,
        request,
        asyncio.Event(),
    )

    assert completions.payload["model"] == "deepseek-v4-pro"
    assert completions.payload["max_tokens"] == 321
    assert completions.payload["messages"][0]["tool_calls"][0]["function"] == {
        "name": "synthetic_tool",
        "arguments": '{"value":0}',
    }
    assert completions.payload["messages"][1]["tool_call_id"] == "earlier-call"
    assert response.assistant_message.tool_calls[0].arguments_json == raw_arguments
    assert response.stop_reason == ModelStopReason.TOOL_USE
    assert response.raw_stop_reason == "tool_calls"


@pytest.mark.asyncio
async def test_structured_arguments_become_stable_json() -> None:
    completions = StubCompletions(
        [
            chunk(
                tool_calls=[
                    tool_delta(
                        index=0,
                        call_id="call-1",
                        name="synthetic_tool",
                        arguments={"z": 2, "a": 1},
                    )
                ]
            ),
            chunk(finish_reason="function_call"),
        ]
    )
    provider = DeepSeekProvider(
        "test-only-key",
        sdk_client=sdk_with(completions),
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    response = await layer.complete(
        DEEPSEEK_PRO,
        ModelRequest(
            messages=(ModelMessage(role="user", content="synthetic"),)
        ),
        asyncio.Event(),
    )

    call = response.assistant_message.tool_calls[0]
    assert call.arguments_json == '{"a":1,"z":2}'
    assert response.stop_reason == ModelStopReason.TOOL_USE


@pytest.mark.asyncio
@pytest.mark.parametrize(
    ("raw_reason", "expected"),
    [
        ("stop", ModelStopReason.STOP),
        ("tool_calls", ModelStopReason.TOOL_USE),
        ("function_call", ModelStopReason.TOOL_USE),
        ("length", ModelStopReason.LENGTH),
        ("content_filter", ModelStopReason.ERROR),
    ],
)
async def test_stop_reason_mapping(raw_reason, expected) -> None:
    completions = StubCompletions([chunk(finish_reason=raw_reason)])
    provider = DeepSeekProvider(
        "test-only-key",
        sdk_client=sdk_with(completions),
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    response = await layer.complete(
        DEEPSEEK_PRO,
        ModelRequest(
            messages=(ModelMessage(role="user", content="synthetic"),)
        ),
        asyncio.Event(),
    )

    assert response.stop_reason == expected
    assert response.raw_stop_reason == raw_reason


@pytest.mark.asyncio
async def test_cancellation_is_aborted_before_sdk_start() -> None:
    completions = StubCompletions([])
    provider = DeepSeekProvider(
        "test-only-key",
        sdk_client=sdk_with(completions),
    )
    layer = ModelLayer()
    layer.register_provider(provider)
    cancel_event = asyncio.Event()
    cancel_event.set()

    response = await layer.complete(
        DEEPSEEK_PRO,
        ModelRequest(
            messages=(ModelMessage(role="user", content="synthetic"),)
        ),
        cancel_event,
    )

    assert response.stop_reason == ModelStopReason.ABORTED
    assert response.raw_stop_reason == "cancelled"
    assert completions.starts == 0


@pytest.mark.asyncio
async def test_usage_is_normalized_and_reasoning_text_stays_ephemeral() -> None:
    usage = SimpleNamespace(
        prompt_tokens=30,
        completion_tokens=12,
        total_tokens=42,
        prompt_cache_hit_tokens=20,
        prompt_cache_miss_tokens=10,
        completion_tokens_details=SimpleNamespace(reasoning_tokens=7),
    )
    completions = StubCompletions(
        [
            chunk(reasoning_content="private scratchwork"),
            chunk(content="Safe answer."),
            chunk(finish_reason="stop"),
            chunk(usage=usage),
        ]
    )
    provider = DeepSeekProvider(
        "test-only-key",
        sdk_client=sdk_with(completions),
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    events = [
        event
        async for event in layer.stream(
            DEEPSEEK_PRO,
            ModelRequest(
                messages=(
                    ModelMessage(role="user", content="synthetic"),
                )
            ),
            asyncio.Event(),
        )
    ]
    reasoning_events = [
        event
        for event in events
        if event.event_type == ModelStreamEventType.REASONING_DELTA
    ]
    final_events = [
        event
        for event in events
        if event.event_type == ModelStreamEventType.RESPONSE_COMPLETE
    ]
    response = final_events[0].response

    assert len(reasoning_events) == 1
    assert reasoning_events[0].delta == "private scratchwork"
    assert response is not None
    assert response.assistant_message.content == "Safe answer."
    assert response.usage.input_tokens == 30
    assert response.usage.output_tokens == 12
    assert response.usage.total_tokens == 42
    assert response.usage.reasoning_tokens == 7
    assert response.usage.cache_hit_tokens == 20
    assert response.usage.cache_miss_tokens == 10
    assert "private scratchwork" not in repr(response)


@pytest.mark.asyncio
@pytest.mark.parametrize(
    ("provider_error", "expected_category"),
    [
        (
            openai.APITimeoutError(
                request=httpx.Request(
                    "POST",
                    "https://api.deepseek.com/chat/completions",
                )
            ),
            "timeout",
        ),
        (
            openai.APIConnectionError(
                request=httpx.Request(
                    "POST",
                    "https://api.deepseek.com/chat/completions",
                )
            ),
            "connection",
        ),
    ],
)
async def test_provider_failures_are_safely_classified(
    provider_error,
    expected_category,
) -> None:
    completions = StubCompletions([], error=provider_error)
    provider = DeepSeekProvider(
        "test-only-key",
        sdk_client=sdk_with(completions),
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    response = await layer.complete(
        DEEPSEEK_PRO,
        ModelRequest(
            messages=(ModelMessage(role="user", content="synthetic"),)
        ),
        asyncio.Event(),
    )

    assert response.stop_reason == ModelStopReason.ERROR
    assert response.error_category == expected_category
