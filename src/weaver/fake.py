import asyncio
import json
from collections.abc import AsyncIterator

from .config import resolve_model
from .model import (
    ModelRequest,
    ModelResponse,
    ModelStreamEvent,
    ModelStreamEventType,
    ToolCall,
    Usage,
)


class FakeModelClient:
    """Deterministic, network-free model used by tests.

    stream_events: one list of events per model call. Call N > len(stream_events)
    repeats the last list.
    """

    def __init__(
        self,
        stream_events: list[list[ModelStreamEvent]] | None = None,
    ) -> None:
        self._stream_events = stream_events or [[]]
        self.requests: list[ModelRequest] = []
        self._stream_call = 0

    async def complete(self, request: ModelRequest) -> ModelResponse:
        self.requests.append(request)
        model_id = resolve_model(request.model)
        usage = Usage(
            prompt_tokens=24,
            completion_tokens=16,
            total_tokens=40,
            reasoning_tokens=0,
            cache_hit_tokens=0,
            cache_miss_tokens=24,
        )
        if request.tools:
            selected = request.tool_choice or request.tools[0].name
            arguments = json.dumps(
                {"count": 1, "label": "foundation"},
                separators=(",", ":"),
                sort_keys=True,
            )
            return ModelResponse(
                model_id=model_id,
                content=None,
                finish_reason="tool_calls",
                tool_calls=(
                    ToolCall(
                        id="fake-tool-call-001",
                        name=selected,
                        arguments=arguments,
                    ),
                ),
                usage=usage,
            )

        content = (
            json.dumps(
                {
                    "experiment": "model-smoke",
                    "scope": "synthetic",
                    "status": "ok",
                },
                separators=(",", ":"),
                sort_keys=True,
            )
            if request.response_format == "json_object"
            else "Synthetic fake response."
        )
        return ModelResponse(
            model_id=model_id,
            content=content,
            finish_reason="stop",
            usage=usage,
        )

    async def stream(
        self,
        request: ModelRequest,
        cancel_event: asyncio.Event,
    ) -> AsyncIterator[ModelStreamEvent]:
        """Yield one scripted event list per call. Repeats the last list if
        called more times than configured event lists."""
        self.requests.append(request)
        idx = min(self._stream_call, len(self._stream_events) - 1)
        events = self._stream_events[idx]
        self._stream_call += 1
        for event in events:
            if cancel_event.is_set():
                yield ModelStreamEvent(
                    event_type=ModelStreamEventType.RESPONSE_FAILED,
                    error="cancelled",
                    category="cancelled",
                )
                return
            yield event
