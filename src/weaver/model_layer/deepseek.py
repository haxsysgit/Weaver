import asyncio
import json
import logging
from collections.abc import AsyncIterator
from contextvars import ContextVar
from typing import Any

import openai
from openai import AsyncOpenAI

from weaver.config import DEEPSEEK_BASE_URL, DEFAULT_TIMEOUT_SECONDS
from weaver.errors import MissingCredentialError

from .types import (
    ModelMessage,
    ModelRequest,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelStreamEvent,
    ModelStreamEventType,
    ModelToolCall,
    ModelUsage,
)

logger = logging.getLogger(__name__)

# BYOK (plan v1 slice 3): set per web turn by the request layer when the
# browser sends X-Weaver-Key. The provider reads it at call time, so
# concurrent turns in different tasks each use their own key.
current_api_key: ContextVar[str | None] = ContextVar(
    "weaver_current_api_key", default=None
)

DEEPSEEK_FLASH = ModelSpec(
    provider_id="deepseek",
    model_id="deepseek-v4-flash",
    api_family="openai-chat-completions",
    default_output_tokens=4096,
    supports_reasoning=True,
)
DEEPSEEK_MODELS = (DEEPSEEK_FLASH,)


def _field(value: Any, name: str, default: Any = None) -> Any:
    if value is None:
        return default
    if isinstance(value, dict):
        return value.get(name, default)
    return getattr(value, name, default)


def _stable_arguments_json(arguments: Any) -> str:
    if isinstance(arguments, str):
        return arguments
    if arguments is None:
        return ""
    return json.dumps(
        arguments,
        separators=(",", ":"),
        sort_keys=True,
    )


class DeepSeekProvider:
    provider_id = "deepseek"
    models = DEEPSEEK_MODELS

    # pi-style transient retry (pi-ai utils/retry.js): retry overload /
    # rate limit / 5xx / network with exponential backoff; never retry
    # auth, balance, invalid-request, or cancellation.
    RETRY_MAX_ATTEMPTS = 3
    RETRY_BASE_DELAY_SECONDS = 2.0
    RETRYABLE_CATEGORIES = frozenset(
        {"rate_limit", "timeout", "connection", "provider"}
    )

    def __init__(
        self,
        api_key: str | None,
        *,
        timeout_seconds: float = DEFAULT_TIMEOUT_SECONDS,
        sdk_client: Any | None = None,
    ) -> None:
        if not api_key or not api_key.strip():
            raise MissingCredentialError()
        self._client = sdk_client or AsyncOpenAI(
            api_key=api_key,
            base_url=DEEPSEEK_BASE_URL,
            timeout=timeout_seconds,
            max_retries=0,
        )
        # BYOK (plan v1 slice 3): a per-request key may arrive after
        # construction. It lives in a contextvar (per task, so concurrent
        # turns keep their own key) and is read at call time. Clients are
        # cached per key so the common case (one key per browser) builds
        # a single client; the construction-time key is the fallback.
        self._api_key = api_key
        self._timeout_seconds = timeout_seconds
        self._clients: dict[str, Any] = {api_key: self._client}

    def _client_for(self, key: str) -> Any:
        """Return the sdk client for a key, building it on first use."""
        client = self._clients.get(key)
        if client is None:
            client = AsyncOpenAI(
                api_key=key,
                base_url=DEEPSEEK_BASE_URL,
                timeout=self._timeout_seconds,
                max_retries=0,
            )
            self._clients[key] = client
        return client

    async def _create_with_retry(
        self,
        payload: dict[str, Any],
        cancel_event: asyncio.Event,
    ) -> tuple[Any, str | None]:
        """Open the stream, retrying transient failures with backoff.

        Returns (stream, None) on success or (None, category) on a
        non-retryable failure or when the budget is exhausted. Only the
        connection opening is retried; a mid-stream drop is never retried
        because partial output cannot be safely resumed.
        """
        attempt = 0
        while True:
            key = current_api_key.get() or self._api_key
            client = self._client_for(key)
            try:
                return await client.chat.completions.create(**payload), None
            except openai.APITimeoutError:
                category = "timeout"
            except openai.APIConnectionError:
                category = "connection"
            except openai.APIStatusError as error:
                category = self._status_category(error.status_code)
            except Exception:
                category = "provider"

            if (
                category not in self.RETRYABLE_CATEGORIES
                or attempt >= self.RETRY_MAX_ATTEMPTS - 1
            ):
                return None, category
            attempt += 1
            delay = self.RETRY_BASE_DELAY_SECONDS * (2 ** (attempt - 1))
            try:
                await asyncio.wait_for(cancel_event.wait(), timeout=delay)
            except asyncio.TimeoutError:
                continue
            return None, "cancelled"

    async def stream(
        self,
        model: ModelSpec,
        request: ModelRequest,
        cancel_event: asyncio.Event,
        *,
        max_output_tokens: int,
    ) -> AsyncIterator[ModelStreamEvent]:
        if cancel_event.is_set():
            yield self._terminal_event(
                model=model,
                stop_reason=ModelStopReason.ABORTED,
                raw_stop_reason="cancelled",
                error_category="cancelled",
            )
            return

        payload = self._request_payload(
            model,
            request,
            max_output_tokens=max_output_tokens,
        )
        stream, error_category = await self._create_with_retry(
            payload,
            cancel_event,
        )
        if error_category is not None:
            yield self._error_event(model, error_category)
            return

        content_parts: list[str] = []
        reasoning_parts: list[str] = []
        tool_buffers: dict[int, dict[str, Any]] = {}
        raw_stop_reason = ""
        usage = ModelUsage()

        try:
            async for chunk in stream:
                if cancel_event.is_set():
                    await self._close_stream(stream)
                    yield self._terminal_event(
                        model=model,
                        stop_reason=ModelStopReason.ABORTED,
                        raw_stop_reason="cancelled",
                        error_category="cancelled",
                    )
                    return

                choices = _field(chunk, "choices", ()) or ()
                # DeepSeek sends usage on the FINAL chunk, which also
                # carries a choice (finish_reason). Read it regardless
                # of choices so receipts see cache hit/miss tokens.
                raw_usage = _field(chunk, "usage")
                if raw_usage is not None:
                    usage = self._normalize_usage(raw_usage)
                if not choices:
                    continue

                choice = choices[0]
                finish_reason = _field(choice, "finish_reason")
                if finish_reason:
                    raw_stop_reason = str(finish_reason)
                delta = _field(choice, "delta")

                content = _field(delta, "content")
                if content:
                    content_text = str(content)
                    content_parts.append(content_text)
                    yield ModelStreamEvent(
                        event_type=ModelStreamEventType.TEXT_DELTA,
                        delta=content_text,
                    )

                reasoning = _field(delta, "reasoning_content")
                if reasoning:
                    reasoning_text = str(reasoning)
                    reasoning_parts.append(reasoning_text)
                    yield ModelStreamEvent(
                        event_type=ModelStreamEventType.REASONING_DELTA,
                        delta=reasoning_text,
                    )

                tool_deltas = _field(delta, "tool_calls", ()) or ()
                for tool_delta in tool_deltas:
                    self._add_tool_delta(tool_buffers, tool_delta)
        except asyncio.CancelledError:
            await self._close_stream(stream)
            yield self._terminal_event(
                model=model,
                stop_reason=ModelStopReason.ABORTED,
                raw_stop_reason="cancelled",
                error_category="cancelled",
            )
            return
        except Exception:
            yield self._error_event(model, "provider")
            return

        tool_calls = self._build_tool_calls(tool_buffers)
        stop_reason = self._normalize_stop_reason(raw_stop_reason)
        error_category = None
        if stop_reason == ModelStopReason.ERROR:
            error_category = "provider_stop"
        response = ModelResponse(
            assistant_message=ModelMessage(
                role="assistant",
                content="".join(content_parts) or None,
                reasoning_content="".join(reasoning_parts) or None,
                tool_calls=tool_calls,
            ),
            provider_id=self.provider_id,
            model_id=model.model_id,
            stop_reason=stop_reason,
            raw_stop_reason=raw_stop_reason,
            usage=usage,
            error_category=error_category,
        )
        yield ModelStreamEvent(
            event_type=ModelStreamEventType.RESPONSE_COMPLETE,
            response=response,
        )

    @staticmethod
    def _request_payload(
        model: ModelSpec,
        request: ModelRequest,
        *,
        max_output_tokens: int,
    ) -> dict[str, Any]:
        payload: dict[str, Any] = {
            "model": model.model_id,
            "messages": [
                DeepSeekProvider._message_payload(
                    message,
                    include_reasoning=model.supports_reasoning,
                )
                for message in request.messages
            ],
            "max_tokens": max_output_tokens,
            "stream": True,
            "stream_options": {"include_usage": True},
            "extra_body": {
                "thinking": {
                    "type": (
                        "enabled"
                        if request.reasoning.enabled
                        else "disabled"
                    ),
                }
            },
        }
        if request.reasoning.effort is not None:
            payload["extra_body"]["reasoning_effort"] = (
                request.reasoning.effort
            )
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
        return payload

    @staticmethod
    def _message_payload(
        message: ModelMessage,
        *,
        include_reasoning: bool,
    ) -> dict[str, Any]:
        payload: dict[str, Any] = {
            "role": message.role,
            "content": message.content,
        }
        if message.name is not None:
            payload["name"] = message.name
        if message.tool_call_id is not None:
            payload["tool_call_id"] = message.tool_call_id
        if include_reasoning and message.role == "assistant":
            # DeepSeek 400s with "The reasoning_content in the thinking
            # mode must be passed back to the API." when an assistant
            # message lacks the field after tool calls (thinking mode).
            # An empty string satisfies the presence check (pi's exact
            # fallback). Gated on the model's capability, not the
            # per-request thinking toggle, matching pi's compat flag.
            payload["reasoning_content"] = message.reasoning_content or ""
        elif message.reasoning_content is not None:
            payload["reasoning_content"] = message.reasoning_content
        if message.tool_calls:
            payload["tool_calls"] = [
                {
                    "id": tool_call.call_id,
                    "type": "function",
                    "function": {
                        "name": tool_call.name,
                        "arguments": tool_call.arguments_json,
                    },
                }
                for tool_call in message.tool_calls
            ]
        return payload

    @staticmethod
    def _add_tool_delta(
        buffers: dict[int, dict[str, Any]],
        tool_delta: Any,
    ) -> None:
        index = int(_field(tool_delta, "index", 0))
        buffer = buffers.setdefault(
            index,
            {
                "call_id": "",
                "name": "",
                "argument_parts": [],
                "structured_arguments": None,
            },
        )
        call_id = _field(tool_delta, "id")
        if call_id:
            buffer["call_id"] = str(call_id)

        function = _field(tool_delta, "function")
        name = _field(function, "name")
        if name:
            buffer["name"] += str(name)
        arguments = _field(function, "arguments")
        if isinstance(arguments, str):
            buffer["argument_parts"].append(arguments)
        elif arguments is not None:
            buffer["structured_arguments"] = arguments

    @staticmethod
    def _build_tool_calls(
        buffers: dict[int, dict[str, Any]],
    ) -> tuple[ModelToolCall, ...]:
        calls: list[ModelToolCall] = []
        for index in sorted(buffers):
            buffer = buffers[index]
            argument_parts = buffer["argument_parts"]
            if argument_parts:
                arguments_json = "".join(argument_parts)
            else:
                arguments_json = _stable_arguments_json(
                    buffer["structured_arguments"]
                )
            calls.append(
                ModelToolCall(
                    call_id=buffer["call_id"],
                    name=buffer["name"],
                    arguments_json=arguments_json,
                )
            )
        return tuple(calls)

    @staticmethod
    def _normalize_stop_reason(raw_reason: str) -> ModelStopReason:
        if raw_reason == "stop":
            return ModelStopReason.STOP
        if raw_reason in {"tool_calls", "function_call"}:
            return ModelStopReason.TOOL_USE
        if raw_reason == "length":
            return ModelStopReason.LENGTH
        return ModelStopReason.ERROR

    @staticmethod
    def _normalize_usage(raw_usage: Any) -> ModelUsage:
        details = _field(raw_usage, "completion_tokens_details")
        return ModelUsage(
            input_tokens=_field(raw_usage, "prompt_tokens"),
            output_tokens=_field(raw_usage, "completion_tokens"),
            total_tokens=_field(raw_usage, "total_tokens"),
            reasoning_tokens=_field(details, "reasoning_tokens"),
            cache_hit_tokens=_field(raw_usage, "prompt_cache_hit_tokens"),
            cache_miss_tokens=_field(raw_usage, "prompt_cache_miss_tokens"),
        )

    @staticmethod
    def _terminal_event(
        *,
        model: ModelSpec,
        stop_reason: ModelStopReason,
        raw_stop_reason: str,
        error_category: str | None,
    ) -> ModelStreamEvent:
        response = ModelResponse(
            assistant_message=ModelMessage(
                role="assistant",
                content=None,
            ),
            provider_id=model.provider_id,
            model_id=model.model_id,
            stop_reason=stop_reason,
            raw_stop_reason=raw_stop_reason,
            error_category=error_category,
        )
        return ModelStreamEvent(
            event_type=ModelStreamEventType.RESPONSE_COMPLETE,
            response=response,
        )

    @staticmethod
    def _error_event(
        model: ModelSpec,
        error_category: str,
    ) -> ModelStreamEvent:
        return DeepSeekProvider._terminal_event(
            model=model,
            stop_reason=ModelStopReason.ERROR,
            raw_stop_reason="provider_error",
            error_category=error_category,
        )

    @staticmethod
    async def _close_stream(stream: Any) -> None:
        try:
            await stream.close()
        except (AttributeError, NotImplementedError):
            pass

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
        return "provider"
