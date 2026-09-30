"""Deterministic conversation simulator for Weaver's development mode."""

from __future__ import annotations

import asyncio
import hashlib
import json
import re
from collections.abc import AsyncIterator
from contextvars import ContextVar

from .fake import FakeModelCall
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


FAKE_HELP = """## Fake Weaver scenarios

Use these prompts while running `weaver web --fake`:

- `/fake normal` for a normal two-tool conversation
- `/fake markdown` for blockquotes, lists, code, and links
- `/fake long` for a long scrolling answer
- `/fake slow` for slow reading and streaming that can be stopped
- `/fake error model` for the unavailable-model recovery state
- `/fake incomplete` for an answer that ends before completion

Every passage and claim in this mode is synthetic development material."""


current_fake_retry: ContextVar[bool] = ContextVar(
    "weaver_current_fake_retry",
    default=False,
)


MARKDOWN_ANSWER = """## The simulated answer

> This quotation is synthetic. It exists to test Weaver's blockquote treatment.

The fixture supports **one direct reading** and *one competing interpretation*.

1. The first clue appears in Chapter 184.
2. The later scene changes how that clue reads.

- inline code: `thread.state = "woven"`
- a [safe reference](https://example.com/weaver-fixture)
- an unsafe link that must remain text: [blocked](javascript:alert(1))

```text
the hidden thread listens
the interface keeps the line breaks
```

My take: the second interpretation is stronger, but the fixture leaves enough
space for a proper argument.

*Development fixture. This is not novel canon.*"""


def _latest_user_messages(request: ModelRequest) -> list[str]:
    return [
        message.content
        for message in request.messages
        if message.role == "user" and message.content
    ]


def _tool_results_after_latest_user(request: ModelRequest) -> list[ModelMessage]:
    latest_user_index = -1
    for index, message in enumerate(request.messages):
        if message.role == "user":
            latest_user_index = index
    return [
        message
        for message in request.messages[latest_user_index + 1 :]
        if message.role == "tool"
    ]


def _scenario(prompt: str) -> str:
    command = prompt.strip().lower()
    if command.startswith("/fake markdown"):
        return "markdown"
    if command.startswith("/fake long"):
        return "long"
    if command.startswith("/fake slow"):
        return "slow"
    if command.startswith("/fake error model"):
        return "model-error"
    if command.startswith("/fake incomplete"):
        return "incomplete"
    if command.startswith("/fake help"):
        return "help"
    return "normal"


def _safe_excerpt(text: str, limit: int = 120) -> str:
    collapsed = re.sub(r"\s+", " ", text).strip()
    if len(collapsed) <= limit:
        return collapsed
    return collapsed[: limit - 1].rstrip() + "..."


def _normal_answer(current_prompt: str, previous_prompt: str | None) -> str:
    continuity = ""
    if previous_prompt:
        continuity = (
            "You are pulling on the same thread as your earlier question about "
            f"*{_safe_excerpt(previous_prompt, 70)}*.\n\n"
        )
    return (
        f"{continuity}The simulated reading points to a choice with two plausible "
        "interpretations.\n\n"
        "> The first fixture passage makes the character's intent look certain.\n\n"
        "The later fixture complicates that certainty. My read is that the action "
        "was deliberate, while the result went further than the character expected.\n\n"
        f"For your question, *{_safe_excerpt(current_prompt)}*, I would keep the "
        "distinction between intent and outcome at the centre of the discussion. "
        "That gives us something real to argue about instead of flattening the scene "
        "into one verdict.\n\n"
        "*Development fixture. This is not novel canon.*"
    )


def _long_answer(current_prompt: str) -> str:
    sections = [
        "## Long-answer fixture",
        (
            f"This simulated answer stress-tests scrolling and selection for "
            f"*{_safe_excerpt(current_prompt)}*."
        ),
    ]
    for index in range(1, 9):
        sections.append(
            f"### Thread {index}\n\n"
            "The synthetic passage establishes a motive, then a later scene adds a "
            "cost the character did not anticipate. The answer keeps both facts in "
            "view so the conclusion remains readable across several paragraphs.\n\n"
            f"> Synthetic quotation {index}: the thread bends, but it does not break."
        )
    sections.append("*Development fixture. This is not novel canon.*")
    return "\n\n".join(sections)


def _answer_for(request: ModelRequest, scenario: str) -> str:
    user_messages = _latest_user_messages(request)
    current_prompt = user_messages[-1] if user_messages else "the current question"
    previous_prompt = user_messages[-2] if len(user_messages) > 1 else None
    if scenario == "help":
        return FAKE_HELP
    if scenario == "markdown":
        return MARKDOWN_ANSWER
    if scenario == "long":
        return _long_answer(current_prompt)
    return _normal_answer(current_prompt, previous_prompt)


def _content_chunks(content: str, target_size: int = 28) -> tuple[str, ...]:
    chunks: list[str] = []
    current = ""
    for token in re.split(r"(\s+)", content):
        current += token
        if len(current) >= target_size or "\n\n" in current:
            chunks.append(current)
            current = ""
    if current:
        chunks.append(current)
    return tuple(chunks)


def _call_id(request: ModelRequest, tool_name: str) -> str:
    fingerprint = [tool_name]
    for message in request.messages:
        fingerprint.extend(
            [message.role, message.content or "", message.tool_call_id or ""]
        )
    digest = hashlib.sha256("\x1f".join(fingerprint).encode()).hexdigest()[:20]
    return f"fake-{tool_name}-{digest}"


async def _wait(seconds: float, cancel_event: asyncio.Event) -> bool:
    remaining = seconds
    while remaining > 0:
        if cancel_event.is_set():
            return False
        interval = min(0.05, remaining)
        await asyncio.sleep(interval)
        remaining -= interval
    return not cancel_event.is_set()


class FakeChatProvider:
    """A prompt-aware fake that runs Weaver's real agent loop without a network."""

    def __init__(
        self,
        provider_id: str,
        *,
        models: tuple[ModelSpec, ...],
        delay_seconds: float = 0,
    ) -> None:
        self.provider_id = provider_id
        self.models = models
        self.delay_seconds = max(0, delay_seconds)
        self.calls: list[FakeModelCall] = []

    async def stream(
        self,
        model: ModelSpec,
        request: ModelRequest,
        cancel_event: asyncio.Event,
        *,
        max_output_tokens: int,
    ) -> AsyncIterator[ModelStreamEvent]:
        from .deepseek import current_sponsored_turn

        self.calls.append(
            FakeModelCall(
                model=model,
                request=request,
                max_output_tokens=max_output_tokens,
            )
        )
        prompts = _latest_user_messages(request)
        prompt = prompts[-1] if prompts else ""
        scenario = _scenario(prompt)
        if current_fake_retry.get() and scenario in {"model-error", "incomplete"}:
            scenario = "normal"
        sponsored_turn = current_sponsored_turn.get()
        if sponsored_turn is not None:
            if cancel_event.is_set():
                yield self._terminal(self._aborted_response(model))
                return
            payload = {
                "model": model.model_id,
                "messages": [
                    {"role": message.role, "content": message.content}
                    for message in request.messages
                ],
                "max_tokens": max_output_tokens,
                "extra_body": {},
            }
            await sponsored_turn.before_call(
                payload,
                has_tools=bool(request.tools),
            )
        response_delay = 1.2 if scenario == "slow" else self.delay_seconds
        if not await _wait(response_delay, cancel_event):
            if sponsored_turn is not None:
                await sponsored_turn.record_usage(None)
            yield self._terminal(self._aborted_response(model))
            return

        response = self._response(model, request, scenario)
        content = response.assistant_message.content
        if content:
            for chunk in _content_chunks(content):
                if cancel_event.is_set():
                    if sponsored_turn is not None:
                        await sponsored_turn.record_usage(None)
                    yield self._terminal(self._aborted_response(model))
                    return
                yield ModelStreamEvent(
                    event_type=ModelStreamEventType.TEXT_DELTA,
                    delta=chunk,
                )
        if sponsored_turn is not None:
            await sponsored_turn.record_usage(response.usage)
        yield self._terminal(response)

    def _response(
        self,
        model: ModelSpec,
        request: ModelRequest,
        scenario: str,
    ) -> ModelResponse:
        usage = ModelUsage(
            input_tokens=64,
            output_tokens=96,
            total_tokens=160,
            reasoning_tokens=24,
            cache_hit_tokens=0,
            cache_miss_tokens=64,
        )
        if scenario == "model-error":
            return ModelResponse(
                assistant_message=ModelMessage(role="assistant", content=None),
                provider_id=model.provider_id,
                model_id=model.model_id,
                stop_reason=ModelStopReason.ERROR,
                raw_stop_reason="simulated_model_error",
                usage=usage,
                error_category="simulated_model",
            )
        if scenario == "incomplete":
            return ModelResponse(
                assistant_message=ModelMessage(
                    role="assistant",
                    content="This simulated answer ends before the thread can settle...",
                ),
                provider_id=model.provider_id,
                model_id=model.model_id,
                stop_reason=ModelStopReason.LENGTH,
                raw_stop_reason="length",
                usage=usage,
            )

        tool_results = _tool_results_after_latest_user(request)
        if request.tools and len(tool_results) == 0:
            return self._tool_response(
                model,
                request,
                "semantic_search",
                {"query": _latest_user_messages(request)[-1], "surface": "both"},
                usage,
            )
        if request.tools and len(tool_results) == 1:
            return self._tool_response(
                model,
                request,
                "read_chapters",
                {"handle": "fixture:0184:1-12"},
                usage,
            )

        return ModelResponse(
            assistant_message=ModelMessage(
                role="assistant",
                content=_answer_for(request, scenario),
            ),
            provider_id=model.provider_id,
            model_id=model.model_id,
            stop_reason=ModelStopReason.STOP,
            raw_stop_reason="stop",
            usage=usage,
        )

    def _tool_response(
        self,
        model: ModelSpec,
        request: ModelRequest,
        tool_name: str,
        arguments: dict[str, object],
        usage: ModelUsage,
    ) -> ModelResponse:
        tool_call = ModelToolCall(
            call_id=_call_id(request, tool_name),
            name=tool_name,
            arguments_json=json.dumps(arguments, separators=(",", ":"), sort_keys=True),
        )
        return ModelResponse(
            assistant_message=ModelMessage(
                role="assistant",
                content=None,
                tool_calls=(tool_call,),
            ),
            provider_id=model.provider_id,
            model_id=model.model_id,
            stop_reason=ModelStopReason.TOOL_USE,
            raw_stop_reason="tool_calls",
            usage=usage,
        )

    @staticmethod
    def _aborted_response(model: ModelSpec) -> ModelResponse:
        return ModelResponse(
            assistant_message=ModelMessage(role="assistant", content=None),
            provider_id=model.provider_id,
            model_id=model.model_id,
            stop_reason=ModelStopReason.ABORTED,
            raw_stop_reason="aborted",
        )

    @staticmethod
    def _terminal(response: ModelResponse) -> ModelStreamEvent:
        return ModelStreamEvent(
            event_type=ModelStreamEventType.RESPONSE_COMPLETE,
            response=response,
        )
