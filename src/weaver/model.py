from dataclasses import dataclass, field
from typing import Any, Literal

Role = Literal["system", "user", "assistant", "tool"]
ResponseFormat = Literal["text", "json_object"]
ReasoningEffort = Literal["high", "max"]


@dataclass(frozen=True, slots=True)
class Message:
    role: Role
    content: str
    name: str | None = None
    tool_call_id: str | None = None


@dataclass(frozen=True, slots=True)
class ToolDefinition:
    name: str
    description: str
    parameters: dict[str, Any]
    strict: bool = False


@dataclass(frozen=True, slots=True)
class ModelRequest:
    model: str
    messages: tuple[Message, ...]
    max_tokens: int = 256
    response_format: ResponseFormat = "text"
    tools: tuple[ToolDefinition, ...] = field(default_factory=tuple)
    tool_choice: str | None = None
    thinking: bool = False
    reasoning_effort: ReasoningEffort | None = None


@dataclass(frozen=True, slots=True)
class ToolCall:
    id: str
    name: str
    arguments: str
    type: str = "function"


@dataclass(frozen=True, slots=True)
class Usage:
    prompt_tokens: int | None = None
    completion_tokens: int | None = None
    total_tokens: int | None = None
    reasoning_tokens: int | None = None
    cache_hit_tokens: int | None = None
    cache_miss_tokens: int | None = None


@dataclass(frozen=True, slots=True)
class ModelResponse:
    model_id: str
    content: str | None
    finish_reason: str | None
    tool_calls: tuple[ToolCall, ...] = field(default_factory=tuple)
    usage: Usage = field(default_factory=Usage)
