from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Literal

Role = Literal["system", "user", "assistant", "tool"]
ResponseFormat = Literal["text", "json_object"]
ReasoningEffort = Literal["high", "max"]


class ModelStreamEventType(str, Enum):
    TEXT_DELTA = "text_delta"
    THINKING_DELTA = "thinking_delta"
    COMPLETE_TOOL_CALL = "complete_tool_call"
    RESPONSE_COMPLETED = "response_completed"
    RESPONSE_FAILED = "response_failed"


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


@dataclass(frozen=True, slots=True)
class ModelStreamEvent:
    """One event in a streaming model response — provider-neutral."""
    event_type: ModelStreamEventType
    delta: str = ""
    call_id: str | None = None
    tool_name: str | None = None
    tool_arguments: str | None = None
    tool_calls_unsafe: bool = False
    finish_reason: str = ""
    usage: Usage | None = None
    model: str = ""
    provider: str = ""
    error: str = ""
    category: str = ""
