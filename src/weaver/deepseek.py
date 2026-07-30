import asyncio
from collections.abc import AsyncIterator
from typing import Any

import openai
from openai import AsyncOpenAI

from .config import DEEPSEEK_BASE_URL, DEFAULT_TIMEOUT_SECONDS, resolve_model
from .errors import (
    MissingCredentialError,
    ModelProviderError,
    ModelTimeoutError,
)
from .model import (
    ModelRequest,
    ModelResponse,
    ModelStreamEvent,
    ModelStreamEventType,
    ToolCall,
    Usage,
)


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

    async def stream(
        self,
        request: ModelRequest,
        cancel_event: asyncio.Event,
    ) -> AsyncIterator[ModelStreamEvent]:
        """Stream model response — yields provider-neutral events."""
        model_id = resolve_model(request.model)
        payload: dict[str, Any] = {
            "model": model_id,
            "messages": [self._message_payload(m) for m in request.messages],
            "max_tokens": request.max_tokens,
            "stream": True,
            "stream_options": {"include_usage": True},
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
                        "name": t.name,
                        "description": t.description,
                        "parameters": t.parameters,
                        "strict": t.strict,
                    },
                }
                for t in request.tools
            ]

        try:
            stream = await self._client.chat.completions.create(**payload)
        except openai.APITimeoutError as exc:
            yield ModelStreamEvent(
                event_type=ModelStreamEventType.RESPONSE_FAILED,
                error=str(exc),
                category="timeout",
                model=model_id,
            )
            return
        except openai.APIStatusError as exc:
            yield ModelStreamEvent(
                event_type=ModelStreamEventType.RESPONSE_FAILED,
                error=str(exc),
                category=self._status_category(exc.status_code),
                model=model_id,
            )
            return
        except Exception as exc:
            yield ModelStreamEvent(
                event_type=ModelStreamEventType.RESPONSE_FAILED,
                error=str(exc),
                category="provider_error",
                model=model_id,
            )
            return

        # ── Accumulate tool call deltas ──
        tool_call_buffers: dict[int, dict[str, Any]] = {}
        finish_reason = ""
        usage: Usage | None = None

        try:
            async for chunk in stream:
                if cancel_event.is_set():
                    try:
                        await stream.close()
                    except (AttributeError, NotImplementedError):
                        pass
                    yield ModelStreamEvent(
                        event_type=ModelStreamEventType.RESPONSE_FAILED,
                        error="cancelled",
                        category="cancelled",
                        model=model_id,
                    )
                    return

                if not chunk.choices:
                    if chunk.usage:
                        usage = self._normalize_usage(chunk.usage)
                    continue

                choice = chunk.choices[0]
                delta = choice.delta

                if choice.finish_reason:
                    finish_reason = choice.finish_reason

                # Text delta
                if delta.content:
                    yield ModelStreamEvent(
                        event_type=ModelStreamEventType.TEXT_DELTA,
                        delta=delta.content,
                        model=model_id,
                    )

                # Reasoning delta (DeepSeek thinking)
                reasoning = getattr(delta, "reasoning_content", None)
                if reasoning:
                    yield ModelStreamEvent(
                        event_type=ModelStreamEventType.THINKING_DELTA,
                        delta=reasoning,
                        model=model_id,
                    )

                # Tool call deltas
                if delta.tool_calls:
                    for tc_delta in delta.tool_calls:
                        idx = tc_delta.index
                        if idx not in tool_call_buffers:
                            tool_call_buffers[idx] = {
                                "call_id": tc_delta.id or "",
                                "name": "",
                                "arguments": "",
                            }
                        buf = tool_call_buffers[idx]
                        if tc_delta.id:
                            buf["call_id"] = tc_delta.id
                        if tc_delta.function:
                            if tc_delta.function.name:
                                buf["name"] += tc_delta.function.name
                            if tc_delta.function.arguments:
                                buf["arguments"] += tc_delta.function.arguments

        except asyncio.CancelledError:
            try:
                await stream.close()
            except (AttributeError, NotImplementedError):
                pass
            yield ModelStreamEvent(
                event_type=ModelStreamEventType.RESPONSE_FAILED,
                error="cancelled",
                category="cancelled",
                model=model_id,
            )
            return

        # Emit assembled tool calls
        for buf in tool_call_buffers.values():
            if buf["name"]:
                yield ModelStreamEvent(
                    event_type=ModelStreamEventType.COMPLETE_TOOL_CALL,
                    call_id=buf["call_id"],
                    tool_name=buf["name"],
                    tool_arguments=buf["arguments"],
                    tool_calls_unsafe=(finish_reason == "length"),
                    model=model_id,
                )

        # Emit completion
        yield ModelStreamEvent(
            event_type=ModelStreamEventType.RESPONSE_COMPLETED,
            finish_reason=finish_reason or "stop",
            usage=usage,
            model=model_id,
            provider="deepseek",
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
