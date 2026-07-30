"""Explicit tool registry — no auto-discovery or plugins.

Tools are registered by name. Dispatch receives the active set, enforces
membership, and passes execution context.
"""

from __future__ import annotations

import asyncio
import json
import logging
from dataclasses import dataclass
from enum import Enum
from typing import Any, Callable, Coroutine

from ..model_layer import ModelToolSchema

logger = logging.getLogger(__name__)

HandlerFunc = Callable[
    [Any, "ToolExecutionContext"],
    Coroutine[Any, Any, dict[str, Any]],
]


class EffectKind(str, Enum):
    READ = "read"
    INTERNAL_WRITE = "internal_write"
    EXTERNAL_EFFECT = "external_effect"


@dataclass
class ToolExecutionContext:
    """Domain-free context passed to every tool handler."""

    session_id: str
    turn_id: str
    call_id: str
    cancel_event: asyncio.Event


@dataclass
class ToolDefinition:
    """One registered tool — name, schema, handler, and policy metadata."""

    name: str
    description: str
    parameters: dict[str, Any]  # JSON Schema for the tool's input
    handler: HandlerFunc
    max_result_chars: int = 12_000
    effect_kind: EffectKind = EffectKind.READ
    retry_safe: bool = False


@dataclass
class ToolResult:
    """Result of executing one tool call."""

    ok: bool
    result: dict[str, Any] | None = None
    error_code: str | None = None
    error: str | None = None


class ToolRegistry:
    """Explicit registry — no import-time discovery.

    Tools are registered by name. Duplicate registration raises ValueError.
    """

    def __init__(self) -> None:
        self._tools: dict[str, ToolDefinition] = {}

    def register(self, tool: ToolDefinition) -> None:
        if tool.name in self._tools:
            raise ValueError(f"duplicate tool name: {tool.name}")
        self._tools[tool.name] = tool

    def active_schemas(
        self,
        active_names: tuple[str, ...],
    ) -> list[ModelToolSchema]:
        """Return ordered schemas for active tools."""
        schemas: list[ModelToolSchema] = []
        for name in active_names:
            if name not in self._tools:
                raise ValueError(f"unknown active tool: {name}")
            tool = self._tools[name]
            schemas.append(
                ModelToolSchema(
                    name=tool.name,
                    description=tool.description,
                    parameters=tool.parameters,
                )
            )
        return schemas

    async def dispatch(
        self,
        tool_name: str,
        raw_arguments: str,
        context: ToolExecutionContext,
    ) -> ToolResult:
        """Parse arguments, enforce membership, and execute the tool."""
        tool = self._tools.get(tool_name)
        if tool is None:
            return ToolResult(
                ok=False,
                error_code="unknown_tool",
                error=f"Tool {tool_name!r} is not registered.",
            )

        try:
            arguments = json.loads(raw_arguments) if raw_arguments.strip() else {}
        except json.JSONDecodeError:
            return ToolResult(
                ok=False,
                error_code="malformed_arguments",
                error="Tool arguments are not valid JSON.",
            )

        try:
            result = await tool.handler(arguments, context)
        except Exception as exc:
            logger.warning("tool %r failed: %s", tool_name, exc, exc_info=True)
            return ToolResult(
                ok=False,
                error_code="tool_failed",
                error="Tool execution failed.",
            )

        # Truncate overly large results
        if tool.max_result_chars > 0:
            serialized = json.dumps(result)
            if len(serialized) > tool.max_result_chars:
                return ToolResult(
                    ok=False,
                    error_code="tool_invalid_output",
                    error="Tool result exceeds maximum size.",
                )

        return ToolResult(ok=True, result=result)
