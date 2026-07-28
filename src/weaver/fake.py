import json

from .config import resolve_model
from .model import ModelRequest, ModelResponse, ToolCall, Usage


class FakeModelClient:
    """Deterministic, network-free model used by tests and dry experiments."""

    async def complete(self, request: ModelRequest) -> ModelResponse:
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
