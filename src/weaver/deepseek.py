from typing import Any

import openai
from openai import AsyncOpenAI

from .config import DEEPSEEK_BASE_URL, DEFAULT_TIMEOUT_SECONDS, resolve_model
from .errors import (
    MissingCredentialError,
    ModelProviderError,
    ModelTimeoutError,
)
from .model import ModelRequest, ModelResponse, ToolCall, Usage


def _field(value: Any, name: str, default: Any = None) -> Any:
    if value is None:
        return default
    if isinstance(value, dict):
        return value.get(name, default)
    return getattr(value, name, default)


class DeepSeekClient:
    """Thin DeepSeek adapter over OpenAI-compatible Chat Completions."""

    def __init__(
        self,
        api_key: str | None,
        *,
        timeout_seconds: float = DEFAULT_TIMEOUT_SECONDS,
        sdk_client: Any | None = None,
    ) -> None:
        if not api_key or not api_key.strip():
            raise MissingCredentialError()
        self.timeout_seconds = timeout_seconds
        self._client = sdk_client or AsyncOpenAI(
            api_key=api_key,
            base_url=DEEPSEEK_BASE_URL,
            timeout=timeout_seconds,
            max_retries=0,
        )

    async def complete(self, request: ModelRequest) -> ModelResponse:
        model_id = resolve_model(request.model)
        payload: dict[str, Any] = {
            "model": model_id,
            "messages": [self._message_payload(message) for message in request.messages],
            "max_tokens": request.max_tokens,
            "stream": False,
            "extra_body": {
                "thinking": {
                    "type": "enabled" if request.thinking else "disabled",
                }
            },
        }
        if request.reasoning_effort is not None:
            payload["extra_body"]["reasoning_effort"] = request.reasoning_effort
        if request.response_format == "json_object":
            payload["response_format"] = {"type": "json_object"}
        if request.tools:
            payload["tools"] = [
                {
                    "type": "function",
                    "function": {
                        "name": tool.name,
                        "description": tool.description,
                        "parameters": tool.parameters,
                        "strict": tool.strict,
                    },
                }
                for tool in request.tools
            ]
        if request.tool_choice is not None:
            payload["tool_choice"] = {
                "type": "function",
                "function": {"name": request.tool_choice},
            }

        try:
            response = await self._client.chat.completions.create(**payload)
        except openai.APITimeoutError as exc:
            raise ModelTimeoutError() from exc
        except openai.APIConnectionError as exc:
            raise ModelProviderError("connection") from exc
        except openai.APIStatusError as exc:
            raise ModelProviderError(
                self._status_category(exc.status_code),
                status_code=exc.status_code,
            ) from exc

        choices = _field(response, "choices", ())
        if not choices:
            raise ModelProviderError("invalid_response")
        choice = choices[0]
        message = _field(choice, "message")
        raw_tool_calls = _field(message, "tool_calls", ()) or ()
        tool_calls = tuple(
            ToolCall(
                id=str(_field(tool_call, "id", "")),
                type=str(_field(tool_call, "type", "function")),
                name=str(_field(_field(tool_call, "function"), "name", "")),
                arguments=str(
                    _field(_field(tool_call, "function"), "arguments", "")
                ),
            )
            for tool_call in raw_tool_calls
        )
        return ModelResponse(
            model_id=str(_field(response, "model", model_id)),
            content=_field(message, "content"),
            finish_reason=_field(choice, "finish_reason"),
            tool_calls=tool_calls,
            usage=self._normalize_usage(_field(response, "usage")),
        )

    @staticmethod
    def _message_payload(message: Any) -> dict[str, Any]:
        payload: dict[str, Any] = {
            "role": message.role,
            "content": message.content,
        }
        if message.name is not None:
            payload["name"] = message.name
        if message.tool_call_id is not None:
            payload["tool_call_id"] = message.tool_call_id
        return payload

    @staticmethod
    def _normalize_usage(raw_usage: Any) -> Usage:
        details = _field(raw_usage, "completion_tokens_details")
        return Usage(
            prompt_tokens=_field(raw_usage, "prompt_tokens"),
            completion_tokens=_field(raw_usage, "completion_tokens"),
            total_tokens=_field(raw_usage, "total_tokens"),
            reasoning_tokens=_field(details, "reasoning_tokens"),
            cache_hit_tokens=_field(raw_usage, "prompt_cache_hit_tokens"),
            cache_miss_tokens=_field(raw_usage, "prompt_cache_miss_tokens"),
        )

    @staticmethod
    def _status_category(status_code: int) -> str:
        if status_code == 401:
            return "authentication"
        if status_code == 402:
            return "balance"
        if status_code == 429:
            return "rate_limit"
        if status_code in {400, 422}:
            return "invalid_request"
        if status_code >= 500:
            return "provider"
        return "provider"
