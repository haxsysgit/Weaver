"""Stable user-facing error messages for the runtime boundary.

Exception objects and provider/tool payloads are for local logs only.  This
module maps internal failure categories to text that may be returned in a
TurnResult.
"""

# Tool error codes — single source of truth shared with tools.py.
UNKNOWN_TOOL = "unknown_tool"
INACTIVE_TOOL = "inactive_tool"
EFFECT_NOT_ALLOWED = "effect_not_allowed"
MALFORMED_ARGUMENTS = "malformed_arguments"
INVALID_ARGUMENTS = "invalid_arguments"
CANCELLED = "cancelled"
TOOL_FAILED = "tool_failed"
INVALID_OUTPUT = "tool_invalid_output"

_MESSAGES = {
    "user_message_persistence": "user message persistence failed.",
    "history_read": "Session history read failed.",
    "tool_schema": "Active tool schema setup failed.",
    "model": "Model stream failed.",
    "model_protocol": "The model returned an unsafe response.",
    "assistant_persistence": "Assistant message persistence failed.",
    "tool_call_persistence": "Tool call persistence failed.",
    "tool_result_persistence": "Tool result persistence failed.",
    "tool_unavailable": "The requested tool is unavailable.",
    "tool_effect_not_allowed": "The tool effect is not allowed in this session.",
    "tool_invalid_arguments": "The tool request was invalid.",
    "tool_failed": "The tool could not be completed.",
    "tool_invalid_output": "The tool returned an invalid result.",
    "tool_cancelled": "The tool call was cancelled.",
    "interrupted": "The turn was interrupted.",
    "incomplete": "The model response was incomplete.",
    "limit": "The turn reached its execution limit.",
    "turn": "The turn could not be completed.",
}


def safe_error(category: str) -> str:
    """Return stable text for a failure category, never exception text."""
    return _MESSAGES.get(category, _MESSAGES["turn"])


def safe_tool_error(code: str) -> str:
    """Map a tool result code to text safe for events and provider projection."""
    if code in {UNKNOWN_TOOL, INACTIVE_TOOL, "tool_unavailable"}:
        return safe_error("tool_unavailable")
    if code == EFFECT_NOT_ALLOWED:
        return safe_error("tool_effect_not_allowed")
    if code in {MALFORMED_ARGUMENTS, INVALID_ARGUMENTS}:
        return safe_error("tool_invalid_arguments")
    if code == CANCELLED:
        return safe_error("tool_cancelled")
    if code == INVALID_OUTPUT:
        return safe_error("tool_invalid_output")
    return safe_error(TOOL_FAILED)
