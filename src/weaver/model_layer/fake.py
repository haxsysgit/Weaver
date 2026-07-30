import asyncio
import json
from collections.abc import AsyncIterator
from dataclasses import dataclass

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


@dataclass(frozen=True, slots=True)
class FakeModelCall:
    model: ModelSpec
    request: ModelRequest
    max_output_tokens: int


class FakeModelProvider:
    def __init__(
        self,
        provider_id: str,
        *,
        models: tuple[ModelSpec, ...],
        responses: tuple[ModelResponse, ...] = (),
    ) -> None:
        self.provider_id = provider_id
        self.models = models
        self.calls: list[FakeModelCall] = []
        self._responses = responses

    async def stream(
        self,
        model: ModelSpec,
        request: ModelRequest,
        cancel_event: asyncio.Event,
        *,
        max_output_tokens: int,
    ) -> AsyncIterator[ModelStreamEvent]:
        self.calls.append(
            FakeModelCall(
                model=model,
                request=request,
                max_output_tokens=max_output_tokens,
            )
        )

        if cancel_event.is_set():
            response = self._aborted_response(model)
        elif self._responses:
            response_index = min(
                len(self.calls) - 1,
                len(self._responses) - 1,
            )
            response = self._responses[response_index]
        else:
            response = self._default_response(model, request)

        content = response.assistant_message.content
        if content:
            yield ModelStreamEvent(
                event_type=ModelStreamEventType.TEXT_DELTA,
                delta=content,
            )
        yield ModelStreamEvent(
            event_type=ModelStreamEventType.RESPONSE_COMPLETE,
            response=response,
        )

    @staticmethod
    def _default_response(
        model: ModelSpec,
        request: ModelRequest,
    ) -> ModelResponse:
        usage = ModelUsage(
            input_tokens=24,
            output_tokens=16,
            total_tokens=40,
            reasoning_tokens=0,
            cache_hit_tokens=0,
            cache_miss_tokens=24,
        )
        if request.tools:
            selected_name = request.tool_choice or request.tools[0].name
            arguments_json = json.dumps(
                {"count": 1, "label": "foundation"},
                separators=(",", ":"),
                sort_keys=True,
            )
            assistant_message = ModelMessage(
                role="assistant",
                content=None,
                tool_calls=(
                    ModelToolCall(
                        call_id="fake-tool-call-001",
                        name=selected_name,
                        arguments_json=arguments_json,
                    ),
                ),
            )
            return ModelResponse(
                assistant_message=assistant_message,
                provider_id=model.provider_id,
                model_id=model.model_id,
                stop_reason=ModelStopReason.TOOL_USE,
                raw_stop_reason="tool_calls",
                usage=usage,
            )

        if request.response_format == "json_object":
            content = json.dumps(
                {
                    "experiment": "model-smoke",
                    "scope": "synthetic",
                    "status": "ok",
                },
                separators=(",", ":"),
                sort_keys=True,
            )
        else:
            content = "Synthetic fake response."

        return ModelResponse(
            assistant_message=ModelMessage(
                role="assistant",
                content=content,
            ),
            provider_id=model.provider_id,
            model_id=model.model_id,
            stop_reason=ModelStopReason.STOP,
            raw_stop_reason="stop",
            usage=usage,
        )

    @staticmethod
    def _aborted_response(model: ModelSpec) -> ModelResponse:
        return ModelResponse(
            assistant_message=ModelMessage(
                role="assistant",
                content=None,
            ),
            provider_id=model.provider_id,
            model_id=model.model_id,
            stop_reason=ModelStopReason.ABORTED,
            raw_stop_reason="cancelled",
            error_category="cancelled",
        )
