from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Literal

ModelRole = Literal["system", "user", "assistant", "tool"]
ResponseFormat = Literal["text", "json_object"]
ReasoningEffort = Literal["low", "high", "max"]


class ModelStopReason(str, Enum):
    STOP = "stop"
    TOOL_USE = "tool_use"
    LENGTH = "length"
    ERROR = "error"
    ABORTED = "aborted"


class ModelStreamEventType(str, Enum):
    TEXT_DELTA = "text_delta"
    REASONING_DELTA = "reasoning_delta"
    RESPONSE_COMPLETE = "response_complete"


@dataclass(frozen=True, slots=True)
class ModelSpec:
    provider_id: str
    model_id: str
    api_family: str
    default_output_tokens: int
    supports_reasoning: bool


@dataclass(frozen=True, slots=True)
class ModelToolCall:
    call_id: str
    name: str
    arguments_json: str


@dataclass(frozen=True, slots=True)
class ModelMessage:
    role: ModelRole
    content: str | None
    name: str | None = None
    tool_call_id: str | None = None
    tool_calls: tuple[ModelToolCall, ...] = field(default_factory=tuple)
    # DeepSeek thinking mode: when a request carries tools, the assistant's
    # reasoning_content must be passed back in every subsequent request or
    # the API returns a 400 (api-docs.deepseek.com/guides/thinking_mode).
    reasoning_content: str | None = None
    # DeepSeek thinking mode requires reasoning_content on assistant
    # messages sent back after tool calls (pi's catalog flag
    # requiresReasoningContentOnAssistantMessages). None = never captured.
    reasoning_content: str | None = None


@dataclass(frozen=True, slots=True)
class ModelToolSchema:
    name: str
    description: str
    parameters: dict[str, Any]
    strict: bool = False


@dataclass(frozen=True, slots=True)
class ModelReasoning:
    enabled: bool = False
    effort: ReasoningEffort | None = None


@dataclass(frozen=True, slots=True)
class ModelRequest:
    messages: tuple[ModelMessage, ...]
    tools: tuple[ModelToolSchema, ...] = field(default_factory=tuple)
    response_format: ResponseFormat = "text"
    max_output_tokens: int | None = None
    tool_choice: str | None = None
    reasoning: ModelReasoning = field(default_factory=ModelReasoning)


@dataclass(frozen=True, slots=True)
class ModelUsage:
    input_tokens: int | None = None
    output_tokens: int | None = None
    total_tokens: int | None = None
    reasoning_tokens: int | None = None
    cache_hit_tokens: int | None = None
    cache_miss_tokens: int | None = None


@dataclass(frozen=True, slots=True)
class ModelResponse:
    assistant_message: ModelMessage
    provider_id: str
    model_id: str
    stop_reason: ModelStopReason
    raw_stop_reason: str
    usage: ModelUsage = field(default_factory=ModelUsage)
    error_category: str | None = None


@dataclass(frozen=True, slots=True)
class ModelStreamEvent:
    event_type: ModelStreamEventType
    delta: str = ""
    response: ModelResponse | None = None
