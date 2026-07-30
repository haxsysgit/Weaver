import asyncio
from collections.abc import AsyncIterator
from typing import Protocol, runtime_checkable

from .types import (
    ModelRequest,
    ModelSpec,
    ModelStreamEvent,
)


@runtime_checkable
class ModelProvider(Protocol):
    provider_id: str
    models: tuple[ModelSpec, ...]

    def stream(
        self,
        model: ModelSpec,
        request: ModelRequest,
        cancel_event: asyncio.Event,
        *,
        max_output_tokens: int,
    ) -> AsyncIterator[ModelStreamEvent]: ...
