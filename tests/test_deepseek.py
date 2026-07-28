from types import SimpleNamespace

import httpx
import openai
import pytest

from weaver.deepseek import DeepSeekClient
from weaver.errors import (
    InvalidModelAliasError,
    ModelProviderError,
    ModelTimeoutError,
)
from weaver.model import Message, ModelRequest, ToolDefinition


class StubCompletions:
    def __init__(self, response=None, error: Exception | None = None) -> None:
        self.response = response
        self.error = error
        self.payload = None

    async def create(self, **payload):
        self.payload = payload
        if self.error is not None:
            raise self.error
        return self.response


def sdk_with(completions: StubCompletions):
    return SimpleNamespace(chat=SimpleNamespace(completions=completions))


def response_with(
    *,
    content='{"status":"ok"}',
    arguments='{"value": 1}',
):
    return SimpleNamespace(
        model="deepseek-v4-pro",
        choices=[
            SimpleNamespace(
                finish_reason="tool_calls",
                message=SimpleNamespace(
                    content=content,
                    reasoning_content="must never be normalized",
                    tool_calls=[
                        SimpleNamespace(
                            id="call-1",
                            type="function",
                            function=SimpleNamespace(
                                name="synthetic_tool",
                                arguments=arguments,
                            ),
                        )
                    ],
                ),
            )
        ],
        usage=SimpleNamespace(
            prompt_tokens=30,
            completion_tokens=12,
            total_tokens=42,
            prompt_cache_hit_tokens=20,
            prompt_cache_miss_tokens=10,
            completion_tokens_details=SimpleNamespace(reasoning_tokens=7),
        ),
    )


@pytest.mark.asyncio
async def test_request_response_and_usage_are_normalized() -> None:
    raw_arguments = '{"value": 1, "unrepaired": }'
    completions = StubCompletions(
        response=response_with(arguments=raw_arguments)
    )
    client = DeepSeekClient(
        "test-only-key",
        sdk_client=sdk_with(completions),
    )
    tool = ToolDefinition(
        name="synthetic_tool",
        description="Synthetic",
        parameters={
            "type": "object",
            "properties": {"value": {"type": "integer"}},
            "required": ["value"],
        },
    )
    request = ModelRequest(
        model="pro",
        messages=(Message(role="user", content="Use JSON and the tool."),),
        response_format="json_object",
        tools=(tool,),
        tool_choice="synthetic_tool",
        thinking=False,
    )

    response = await client.complete(request)

    assert completions.payload["model"] == "deepseek-v4-pro"
    assert completions.payload["response_format"] == {"type": "json_object"}
    assert completions.payload["tool_choice"] == {
        "type": "function",
        "function": {"name": "synthetic_tool"},
    }
    assert completions.payload["extra_body"] == {
        "thinking": {"type": "disabled"}
    }
    assert response.content == '{"status":"ok"}'
    assert response.finish_reason == "tool_calls"
    assert response.tool_calls[0].arguments == raw_arguments
    assert response.usage.prompt_tokens == 30
    assert response.usage.completion_tokens == 12
    assert response.usage.total_tokens == 42
    assert response.usage.reasoning_tokens == 7
    assert response.usage.cache_hit_tokens == 20
    assert response.usage.cache_miss_tokens == 10
    assert not hasattr(response, "reasoning_content")


@pytest.mark.asyncio
async def test_invalid_alias_fails_before_sdk_call() -> None:
    completions = StubCompletions(response=response_with())
    client = DeepSeekClient("test-only-key", sdk_client=sdk_with(completions))

    with pytest.raises(InvalidModelAliasError):
        await client.complete(
            ModelRequest(
                model="unknown",
                messages=(Message(role="user", content="synthetic"),),
            )
        )

    assert completions.payload is None


@pytest.mark.asyncio
async def test_timeout_is_safely_classified() -> None:
    request = httpx.Request("POST", "https://api.deepseek.com/chat/completions")
    completions = StubCompletions(error=openai.APITimeoutError(request=request))
    client = DeepSeekClient("test-only-key", sdk_client=sdk_with(completions))

    with pytest.raises(ModelTimeoutError) as captured:
        await client.complete(
            ModelRequest(
                model="flash",
                messages=(Message(role="user", content="synthetic"),),
            )
        )

    assert captured.value.category == "timeout"


@pytest.mark.asyncio
async def test_connection_failure_is_safely_classified() -> None:
    request = httpx.Request("POST", "https://api.deepseek.com/chat/completions")
    completions = StubCompletions(
        error=openai.APIConnectionError(request=request)
    )
    client = DeepSeekClient("test-only-key", sdk_client=sdk_with(completions))

    with pytest.raises(ModelProviderError) as captured:
        await client.complete(
            ModelRequest(
                model="flash",
                messages=(Message(role="user", content="synthetic"),),
            )
        )

    assert captured.value.category == "connection"
