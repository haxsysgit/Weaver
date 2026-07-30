"""Explicit tool registry with no auto-discovery or plugins.

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


@dataclass(frozen=True, slots=True)
class ToolExecutionPolicy:
    """Effect classes one Weaver session may start."""

    allowed_effects: frozenset[EffectKind]

    def __post_init__(self) -> None:
        normalized_effects = frozenset(self.allowed_effects)
        if any(
            not isinstance(effect_kind, EffectKind)
            for effect_kind in normalized_effects
        ):
            raise ValueError("allowed effects must be EffectKind values")
        if EffectKind.EXTERNAL_EFFECT in normalized_effects:
            raise ValueError("external effects cannot be admitted in Plan 004")
        object.__setattr__(self, "allowed_effects", normalized_effects)

    @classmethod
    def read_only(cls) -> ToolExecutionPolicy:
        return cls(allowed_effects=frozenset({EffectKind.READ}))

    @classmethod
    def maintenance(cls) -> ToolExecutionPolicy:
        return cls(
            allowed_effects=frozenset(
                {
                    EffectKind.READ,
                    EffectKind.INTERNAL_WRITE,
                }
            )
        )

    def allows(self, effect_kind: EffectKind) -> bool:
        return effect_kind in self.allowed_effects


@dataclass
class ToolExecutionContext:
    """Domain-free context passed to every tool handler."""

    session_id: str
    turn_id: str
    call_id: str
    cancel_event: asyncio.Event

    def raise_if_cancelled(self) -> None:
        """Stop at a cooperative handler checkpoint.

        Handlers check before expensive work, after long waits, and before
        committing or atomically replacing Weaver-owned state.
        """
        if self.cancel_event.is_set():
            raise asyncio.CancelledError


@dataclass
class ToolDefinition:
    """One registered tool with its schema, handler, and policy metadata."""

    name: str
    description: str
    parameters: dict[str, Any]  # JSON Schema for the tool's input
    handler: HandlerFunc
    effect_kind: EffectKind
    max_result_chars: int = 12_000
    retry_safe: bool = False


@dataclass
class ToolResult:
    """Result of executing one tool call."""

    ok: bool
    result: dict[str, Any] | None = None
    error_code: str | None = None
    error: str | None = None
    started: bool = False


class ToolRegistry:
    """Explicit registry with no import-time discovery.

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

    @staticmethod
    async def _cancel_and_settle(task: asyncio.Task[Any]) -> None:
        if not task.done():
            task.cancel()
        try:
            await task
        except asyncio.CancelledError:
            pass
        except Exception:
            logger.warning(
                "task %r failed during cancellation cleanup",
                task.get_name(),
                exc_info=True,
            )

    async def dispatch(
        self,
        tool_name: str,
        raw_arguments: str,
        *,
        active_names: tuple[str, ...],
        policy: ToolExecutionPolicy,
        context: ToolExecutionContext,
    ) -> ToolResult:
        """Apply dispatch gates before parsing and execution."""
        tool = self._tools.get(tool_name)
        if tool is None:
            return ToolResult(
                ok=False,
                error_code="unknown_tool",
                error=f"Tool {tool_name!r} is not registered.",
            )

        if tool_name not in active_names:
            return ToolResult(
                ok=False,
                error_code="inactive_tool",
                error=f"Tool {tool_name!r} is not active.",
            )

        if not policy.allows(tool.effect_kind):
            return ToolResult(
                ok=False,
                error_code="effect_not_allowed",
                error="Tool effect is not allowed in this session.",
            )

        if not raw_arguments.strip():
            return ToolResult(
                ok=False,
                error_code="malformed_arguments",
                error="Tool arguments are not valid JSON.",
            )
        try:
            arguments = json.loads(raw_arguments)
        except json.JSONDecodeError:
            return ToolResult(
                ok=False,
                error_code="malformed_arguments",
                error="Tool arguments are not valid JSON.",
            )
        if not isinstance(arguments, dict):
            return ToolResult(
                ok=False,
                error_code="invalid_arguments",
                error="Tool arguments must be a JSON object.",
            )

        if context.cancel_event.is_set():
            return ToolResult(
                ok=False,
                error_code="cancelled",
                error="Tool call was cancelled.",
            )

        handler_task = asyncio.create_task(
            tool.handler(arguments, context),
            name=(
                f"weaver-tool-handler:{context.turn_id}:{context.call_id}"
            ),
        )
        cancellation_waiter = asyncio.create_task(
            context.cancel_event.wait(),
            name=(
                f"weaver-tool-cancellation:{context.turn_id}:"
                f"{context.call_id}"
            ),
        )

        try:
            await asyncio.wait(
                {handler_task, cancellation_waiter},
                return_when=asyncio.FIRST_COMPLETED,
            )

            if handler_task.done():
                try:
                    result = handler_task.result()
                except asyncio.CancelledError:
                    return ToolResult(
                        ok=False,
                        error_code="cancelled",
                        error="Tool call was cancelled.",
                        started=True,
                    )
                except Exception as exc:
                    logger.warning(
                        "tool %r failed: %s",
                        tool_name,
                        exc,
                        exc_info=True,
                    )
                    return ToolResult(
                        ok=False,
                        error_code="tool_failed",
                        error="Tool execution failed.",
                        started=True,
                    )
            else:
                handler_task.cancel()
                await self._cancel_and_settle(handler_task)
                return ToolResult(
                    ok=False,
                    error_code="cancelled",
                    error="Tool call was cancelled.",
                    started=True,
                )
        finally:
            await self._cancel_and_settle(cancellation_waiter)
            if not handler_task.done():
                await self._cancel_and_settle(handler_task)

        if tool.max_result_chars > 0:
            serialized = json.dumps(result)
            if len(serialized) > tool.max_result_chars:
                return ToolResult(
                    ok=False,
                    error_code="tool_invalid_output",
                    error="Tool result exceeds maximum size.",
                    started=True,
                )

        return ToolResult(ok=True, result=result, started=True)
