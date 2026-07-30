import asyncio
from collections.abc import AsyncIterator
from dataclasses import dataclass
from typing import Any, Protocol, runtime_checkable

from .model import ModelRequest, ModelResponse, ModelStreamEvent


@dataclass(frozen=True, slots=True)
class ToolSchema:
    """A tool definition ready to send to the model provider."""
    name: str
    description: str
    input_schema: dict[str, Any]


@runtime_checkable
class ModelClient(Protocol):
    """What agent_core sees — a sealed provider boundary.

    Implementations: DeepSeekClient (live), FakeModelClient (tests).
    """

    async def complete(self, request: ModelRequest) -> ModelResponse: ...

    def stream(
        self,
        request: ModelRequest,
        cancel_event: asyncio.Event,
    ) -> AsyncIterator[ModelStreamEvent]: ...
