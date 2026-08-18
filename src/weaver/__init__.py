"""Weaver, a synthetic lifelong reader."""

# Single source of truth for the package version. pyproject.toml reads
# it via [tool.hatch.version] path (hatchling), so bumping the version
# is one edit here, then tag + release with the same number.
__version__ = "1.0.0"

from .model_layer import (
    DEEPSEEK_FLASH,
    DEEPSEEK_MODELS,
    DeepSeekProvider,
    DuplicateProviderError,
    FakeModelCall,
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelProtocolError,
    ModelProvider,
    ModelReasoning,
    ModelRequest,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelStreamEvent,
    ModelStreamEventType,
    ModelToolCall,
    ModelToolSchema,
    ModelUsage,
    UnknownModelError,
    UnknownProviderError,
)

__all__ = [
    "DEEPSEEK_FLASH",
    "DEEPSEEK_MODELS",
    "DeepSeekProvider",
    "DuplicateProviderError",
    "FakeModelCall",
    "FakeModelProvider",
    "ModelLayer",
    "ModelMessage",
    "ModelProtocolError",
    "ModelProvider",
    "ModelReasoning",
    "ModelRequest",
    "ModelResponse",
    "ModelSpec",
    "ModelStopReason",
    "ModelStreamEvent",
    "ModelStreamEventType",
    "ModelToolCall",
    "ModelToolSchema",
    "ModelUsage",
    "UnknownModelError",
    "UnknownProviderError",
]
