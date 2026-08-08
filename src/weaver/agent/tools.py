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
from collections.abc import Awaitable, Callable
from typing import Any, Coroutine

from weaver.agent.errors import (
    CANCELLED,
    EFFECT_NOT_ALLOWED,
    INACTIVE_TOOL,
    INVALID_ARGUMENTS,
    INVALID_OUTPUT,
    MALFORMED_ARGUMENTS,
    TOOL_FAILED,
    UNKNOWN_TOOL,
)

from ..model_layer import ModelToolSchema

logger = logging.getLogger(__name__)


async def _emit_tool_event(
    context: ToolExecutionContext,
    tool_name: str,
    status: str,
    detail: str = "",
    result: dict | None = None,
) -> None:
    """Forward tool activity to the surface callback (UI activity lines).

    Best-effort like deltas (Phase B pattern): a failing callback is
    logged and swallowed so a UI hiccup can never fail a turn.
    """
    callback = context.on_tool_event
    if callback is None:
        return
    try:
        await callback(tool_name, status, detail, result)
    except Exception:
        logger.warning("on_tool_event callback failed", exc_info=True)

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
        # Plan 004 constraint: external effects remain blocked until a
        # later plan builds the approval and undo surface.
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
    conversation_id: str = ""
    # Plan 014 live-trial seam: async (name, status, detail, result)
    # callback the surface uses to show tool activity lines. result is the
    # handler's dict on success (None on start / failure). Best-effort
    # like deltas.
    on_tool_event: Callable[[str, str, str, dict | None], Awaitable[None]] | None = None

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

    def has(self, name: str) -> bool:
        return name in self._tools

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
        """Apply dispatch gates in order: cheap checks before expensive ones.

        Ordering rationale:
        1. Registration/activity — no work if the tool can never run.
        2. Effect permission — security boundary before parsing attacker input.
        3. JSON syntax and shape — parse only after the tool is allowed.
        4. Pre-cancel — skip handler creation when the turn is already done.
        5. Handler race — run handler against cancellation, settle before return.
        """
        tool = self._tools.get(tool_name)
        if tool is None:
            return ToolResult(
                ok=False,
                error_code=UNKNOWN_TOOL,
                error=f"Tool {tool_name!r} is not registered.",
            )

        if tool_name not in active_names:
            return ToolResult(
                ok=False,
                error_code=INACTIVE_TOOL,
                error=f"Tool {tool_name!r} is not active.",
            )

        if not policy.allows(tool.effect_kind):
            return ToolResult(
                ok=False,
                error_code=EFFECT_NOT_ALLOWED,
                error="Tool effect is not allowed in this session.",
            )

        if not raw_arguments.strip():
            return ToolResult(
                ok=False,
                error_code=MALFORMED_ARGUMENTS,
                error="Tool arguments are not valid JSON.",
            )
        try:
            arguments = json.loads(raw_arguments)
        except json.JSONDecodeError:
            return ToolResult(
                ok=False,
                error_code=MALFORMED_ARGUMENTS,
                error="Tool arguments are not valid JSON.",
            )
        if not isinstance(arguments, dict):
            return ToolResult(
                ok=False,
                error_code=INVALID_ARGUMENTS,
                error="Tool arguments must be a JSON object.",
            )

        if context.cancel_event.is_set():
            return ToolResult(
                ok=False,
                error_code=CANCELLED,
                error="Tool call was cancelled.",
            )

        # ── Handler race ──────────────────────────────────────────
        # Two tasks compete: the handler doing real work, and a waiter
        # watching for cancellation.  asyncio.wait(FIRST_COMPLETED)
        # returns when either finishes.
        #
        # Completion-tie rule: if handler_task.done() is True at
        # observation time, the completed result wins even when the
        # cancel event was set during execution.  This avoids
        # discarding work that finished just before cancellation.
        #
        # The finally block always settles both tasks so no
        # weaver-tool-* task leaks.

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

        await _emit_tool_event(context, tool_name, "start")
        try:
            await asyncio.wait(
                {handler_task, cancellation_waiter},
                return_when=asyncio.FIRST_COMPLETED,
            )

            if handler_task.done():
                # Success path: handler finished first.
                # result is defined here and alive through the finally
                # block — all error branches below return early.
                try:
                    result = handler_task.result()
                except asyncio.CancelledError:
                    await _emit_tool_event(context, tool_name, "done", "cancelled")
                    return ToolResult(
                        ok=False,
                        error_code=CANCELLED,
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
                    await _emit_tool_event(context, tool_name, "done", "failed")
                    return ToolResult(
                        ok=False,
                        error_code=TOOL_FAILED,
                        error="Tool execution failed.",
                        started=True,
                    )
                await _emit_tool_event(context, tool_name, "done", "ok", result)
            else:
                # Cancellation won the race.
                handler_task.cancel()
                await self._cancel_and_settle(handler_task)
                await _emit_tool_event(context, tool_name, "done", "cancelled")
                return ToolResult(
                    ok=False,
                    error_code=CANCELLED,
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
                    error_code=INVALID_OUTPUT,
                    error="Tool result exceeds maximum size.",
                    started=True,
                )

        return ToolResult(ok=True, result=result, started=True)
