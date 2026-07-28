from typing import Protocol

from .model import ModelRequest, ModelResponse


class ModelClient(Protocol):
    async def complete(self, request: ModelRequest) -> ModelResponse:
        """Complete one non-streaming model request."""

        ...
