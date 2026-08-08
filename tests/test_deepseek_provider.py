import asyncio
from types import SimpleNamespace

import httpx
import openai
import pytest

from weaver import (
    DEEPSEEK_FLASH,
    DeepSeekProvider,
    ModelLayer,
    ModelMessage,
    ModelReasoning,
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
    def __init__(self, chunks, *, error=None, failures=None) -> None:
        self.stream = StubStream(chunks)
        self.error = error
        self.failures = failures
        self.payload = None
        self.starts = 0

    async def create(self, **payload):
        self.starts += 1
        self.payload = payload
        if self.error is not None and (self.failures is None or self.failures > 0):
            if self.failures is not None:
                self.failures -= 1
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
        DEEPSEEK_FLASH,
        request,
        asyncio.Event(),
    )

    assert completions.payload["model"] == "deepseek-v4-flash"
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
        DEEPSEEK_FLASH,
        ModelRequest(messages=(ModelMessage(role="user", content="synthetic"),)),
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
        # Unknown/absent finish reason: the ERROR default, categorized.
        ("", ModelStopReason.ERROR),
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
        DEEPSEEK_FLASH,
        ModelRequest(messages=(ModelMessage(role="user", content="synthetic"),)),
        asyncio.Event(),
    )

    assert response.stop_reason == expected
    assert response.raw_stop_reason == raw_reason
    if not raw_reason:
        assert response.error_category == "provider_stop"


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
        DEEPSEEK_FLASH,
        ModelRequest(messages=(ModelMessage(role="user", content="synthetic"),)),
        cancel_event,
    )

    assert response.stop_reason == ModelStopReason.ABORTED
    assert response.raw_stop_reason == "cancelled"
    assert completions.starts == 0


@pytest.mark.asyncio
async def test_usage_is_normalized_and_reasoning_is_captured_not_surfaced() -> None:
    # Reasoning deltas are captured onto the assistant message because
    # DeepSeek requires reasoning_content pass-back after tool calls, but
    # they never reach the UI: the turn loop only forwards TEXT_DELTAs.

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
            DEEPSEEK_FLASH,
            ModelRequest(messages=(ModelMessage(role="user", content="synthetic"),)),
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
    # new contract: reasoning is carried for pass-back, never surfaced
    assert response.assistant_message.reasoning_content == "private scratchwork"


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
        (
            openai.APIStatusError(
                "synthetic",
                response=httpx.Response(
                    401,
                    request=httpx.Request(
                        "POST",
                        "https://api.deepseek.com/chat/completions",
                    ),
                ),
                body=None,
            ),
            "authentication",
        ),
        (
            openai.APIStatusError(
                "synthetic",
                response=httpx.Response(
                    429,
                    request=httpx.Request(
                        "POST",
                        "https://api.deepseek.com/chat/completions",
                    ),
                ),
                body=None,
            ),
            "rate_limit",
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
        DEEPSEEK_FLASH,
        ModelRequest(messages=(ModelMessage(role="user", content="synthetic"),)),
        asyncio.Event(),
    )

    assert response.stop_reason == ModelStopReason.ERROR
    assert response.error_category == expected_category


@pytest.mark.asyncio
async def test_mid_stream_cancel_closes_sdk_stream() -> None:
    """The loop-top cancel check closes the SDK stream (deepseek.py:127)."""
    cancel_event = asyncio.Event()

    class SelfCancellingStream(StubStream):
        async def _iterate(self):
            yield self._chunks[0]
            cancel_event.set()
            # A second delivery so the provider's loop-top check fires.
            yield self._chunks[0]

    completions = StubCompletions([])
    completions.stream = SelfCancellingStream([chunk(content="partial")])
    provider = DeepSeekProvider("test-only-key", sdk_client=sdk_with(completions))
    layer = ModelLayer()
    layer.register_provider(provider)

    response = await layer.complete(
        DEEPSEEK_FLASH,
        ModelRequest(messages=(ModelMessage(role="user", content="synthetic"),)),
        cancel_event,
    )

    assert response.stop_reason == ModelStopReason.ABORTED
    assert response.raw_stop_reason == "cancelled"
    assert completions.stream.closed is True


@pytest.mark.asyncio
async def test_task_cancel_closes_sdk_stream() -> None:
    """A CancelledError thrown into the stream still closes it
    (deepseek.py:168-176): cleanup, not a stuck connection."""

    class HangingStream(StubStream):
        async def _iterate(self):
            yield self._chunks[0]
            await asyncio.sleep(3600)

    completions = StubCompletions([])
    completions.stream = HangingStream([chunk(content="partial")])
    provider = DeepSeekProvider("test-only-key", sdk_client=sdk_with(completions))
    layer = ModelLayer()
    layer.register_provider(provider)

    task = asyncio.create_task(
        layer.complete(
            DEEPSEEK_FLASH,
            ModelRequest(messages=(ModelMessage(role="user", content="synthetic"),)),
            asyncio.Event(),
        )
    )
    await asyncio.sleep(0.05)  # let the task reach the hanging stream
    task.cancel()
    # The provider converts the cancellation into an ABORTED terminal
    # response and closes the stream, so the task completes normally.
    response = await task
    assert response.stop_reason == ModelStopReason.ABORTED
    assert response.raw_stop_reason == "cancelled"
    assert completions.stream.closed is True


class TestReasoningPassbackAndRetry:
    """Plan 15 (2026-08-08): the good LLM layer.

    DeepSeek's thinking-mode docs: for requests carrying the tools
    parameter, reasoning_content must be fully passed back in all
    subsequent requests or the API returns a 400. And transient provider
    failures are retried with exponential backoff (pi's
    retryAssistantCall pattern); auth/balance/invalid requests fail fast.
    """

    @pytest.mark.asyncio
    async def test_request_passes_reasoning_content_back(self) -> None:
        completions = StubCompletions([chunk(content="final")])
        provider = DeepSeekProvider(
            "test-only-key",
            sdk_client=sdk_with(completions),
        )
        request = ModelRequest(
            messages=(
                ModelMessage(
                    role="assistant",
                    content=None,
                    tool_calls=(
                        ModelToolCall(
                            call_id="call_1",
                            name="echo",
                            arguments_json='{"message": "a"}',
                        ),
                    ),
                    reasoning_content="the user wants the weather",
                ),
                ModelMessage(
                    role="tool",
                    content="result",
                    tool_call_id="call_1",
                ),
            ),
        )
        events = [
            event
            async for event in provider.stream(
                DEEPSEEK_FLASH,
                request,
                asyncio.Event(),
                max_output_tokens=512,
            )
        ]
        assert events[-1].event_type == ModelStreamEventType.RESPONSE_COMPLETE
        assistant_payload = completions.payload["messages"][0]
        assert assistant_payload["reasoning_content"] == "the user wants the weather"

    @pytest.mark.asyncio
    async def test_stream_response_carries_joined_reasoning_content(
        self,
    ) -> None:
        completions = StubCompletions(
            [
                chunk(reasoning_content="think "),
                chunk(reasoning_content="more"),
                chunk(content="final"),
                chunk(finish_reason="stop"),
            ]
        )
        provider = DeepSeekProvider(
            "test-only-key",
            sdk_client=sdk_with(completions),
        )
        events = [
            event
            async for event in provider.stream(
                DEEPSEEK_FLASH,
                ModelRequest(messages=()),
                asyncio.Event(),
                max_output_tokens=512,
            )
        ]
        response = events[-1].response
        assert response is not None
        assert response.assistant_message.reasoning_content == "think more"
        assert response.assistant_message.content == "final"

    @pytest.mark.asyncio
    async def test_transient_error_is_retried_with_backoff_then_succeeds(
        self,
    ) -> None:
        completions = StubCompletions(
            [chunk(content="ok"), chunk(finish_reason="stop")],
            error=openai.APIStatusError(
                "synthetic rate limit",
                response=httpx.Response(
                    429,
                    request=httpx.Request(
                        "POST",
                        "https://api.deepseek.com/chat/completions",
                    ),
                ),
                body=None,
            ),
            failures=1,
        )
        provider = DeepSeekProvider(
            "test-only-key",
            sdk_client=sdk_with(completions),
        )
        events = [
            event
            async for event in provider.stream(
                DEEPSEEK_FLASH,
                ModelRequest(messages=()),
                asyncio.Event(),
                max_output_tokens=512,
            )
        ]
        assert completions.starts == 2
        assert events[-1].event_type == ModelStreamEventType.RESPONSE_COMPLETE
        assert events[-1].response is not None
        assert events[-1].response.stop_reason != ModelStopReason.ERROR
        assert events[-1].response.error_category is None

    @pytest.mark.asyncio
    async def test_invalid_request_is_not_retried(self) -> None:
        completions = StubCompletions(
            [chunk(content="ok")],
            error=openai.APIStatusError(
                "synthetic 400",
                response=httpx.Response(
                    400,
                    request=httpx.Request(
                        "POST",
                        "https://api.deepseek.com/chat/completions",
                    ),
                ),
                body=None,
            ),
            failures=5,
        )
        provider = DeepSeekProvider(
            "test-only-key",
            sdk_client=sdk_with(completions),
        )
        events = [
            event
            async for event in provider.stream(
                DEEPSEEK_FLASH,
                ModelRequest(messages=()),
                asyncio.Event(),
                max_output_tokens=512,
            )
        ]
        assert completions.starts == 1
        assert events[-1].response is not None
        assert events[-1].response.stop_reason == ModelStopReason.ERROR
        assert events[-1].response.error_category == "invalid_request"



def test_request_payload_sends_reasoning_content_back() -> None:
    """Assistant messages sent to DeepSeek with thinking on always carry
    reasoning_content (real value, or "" when never captured)."""
    provider = DeepSeekProvider("test-only-key")
    request = ModelRequest(
        messages=(
            ModelMessage(
                role="assistant",
                content=None,
                reasoning_content="the stored thinking",
                tool_calls=(
                    ModelToolCall(
                        call_id="c1",
                        name="search_story",
                        arguments_json='{"query":"x"}',
                    ),
                ),
            ),
            ModelMessage(role="tool", content="ok", tool_call_id="c1"),
            ModelMessage(
                role="assistant",
                content="draft",
                reasoning_content="",
            ),
        ),
        reasoning=ModelReasoning(enabled=True, effort="low"),
    )
    payload = provider._request_payload(
        DEEPSEEK_FLASH, request, max_output_tokens=4096
    )
    assistant_messages = [
        m for m in payload["messages"] if m["role"] == "assistant"
    ]
    assert assistant_messages[0]["reasoning_content"] == "the stored thinking"
    assert assistant_messages[1]["reasoning_content"] == ""
    assert "reasoning_content" not in payload["messages"][1]  # tool role

    # gated on the model capability: still sent (as "") for a reasoning
    # model even when the per-request thinking toggle is off, matching pi.
    off = provider._request_payload(
        DEEPSEEK_FLASH,
        ModelRequest(messages=request.messages),
        max_output_tokens=4096,
    )
    assistant_off = [
        m for m in off["messages"] if m["role"] == "assistant"
    ]
    assert assistant_off[0]["reasoning_content"] == "the stored thinking"
    assert assistant_off[1]["reasoning_content"] == ""






