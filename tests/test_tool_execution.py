from __future__ import annotations

import asyncio
from collections.abc import Callable

import pytest

from weaver.agent.tools import (
    EffectKind,
    ToolDefinition,
    ToolExecutionContext,
    ToolExecutionPolicy,
    ToolRegistry,
)


def execution_context() -> ToolExecutionContext:
    return ToolExecutionContext(
        session_id="session-policy",
        turn_id="turn-policy",
        call_id="call-policy",
        cancel_event=asyncio.Event(),
    )


def register_tool(
    registry: ToolRegistry,
    *,
    name: str,
    effect_kind: EffectKind,
    starts: dict[str, int],
) -> None:
    async def handler(arguments: dict, context: ToolExecutionContext) -> dict:
        starts[name] = starts.get(name, 0) + 1
        return {
            "arguments": arguments,
            "session_id": context.session_id,
        }

    registry.register(
        ToolDefinition(
            name=name,
            description=f"Run {name}.",
            parameters={"type": "object", "properties": {}},
            handler=handler,
            effect_kind=effect_kind,
        )
    )


def registry_with_effects(
    starts: dict[str, int],
) -> ToolRegistry:
    registry = ToolRegistry()
    register_tool(
        registry,
        name="read",
        effect_kind=EffectKind.READ,
        starts=starts,
    )
    register_tool(
        registry,
        name="write",
        effect_kind=EffectKind.INTERNAL_WRITE,
        starts=starts,
    )
    register_tool(
        registry,
        name="outside",
        effect_kind=EffectKind.EXTERNAL_EFFECT,
        starts=starts,
    )
    return registry


async def dispatch(
    registry: ToolRegistry,
    tool_name: str,
    *,
    policy: ToolExecutionPolicy,
    raw_arguments: str = "{}",
    active_names: tuple[str, ...] | None = None,
):
    active = active_names if active_names is not None else (tool_name,)
    return await registry.dispatch(
        tool_name,
        raw_arguments,
        active_names=active,
        policy=policy,
        context=execution_context(),
    )


class TestToolExecutionPolicy:
    def test_read_only_policy_allows_reads_only(self) -> None:
        policy = ToolExecutionPolicy.read_only()

        assert policy.allowed_effects == frozenset({EffectKind.READ})

    def test_maintenance_policy_allows_reads_and_internal_writes(self) -> None:
        policy = ToolExecutionPolicy.maintenance()

        assert policy.allowed_effects == frozenset(
            {
                EffectKind.READ,
                EffectKind.INTERNAL_WRITE,
            }
        )

    def test_policy_rejects_outside_effects(self) -> None:
        with pytest.raises(ValueError, match="external effects"):
            ToolExecutionPolicy(allowed_effects=frozenset({EffectKind.EXTERNAL_EFFECT}))

    def test_policy_copies_mutable_effect_input(self) -> None:
        mutable_effects = {EffectKind.READ}
        policy = ToolExecutionPolicy(allowed_effects=mutable_effects)

        mutable_effects.add(EffectKind.EXTERNAL_EFFECT)

        assert policy.allowed_effects == frozenset({EffectKind.READ})
        assert not policy.allows(EffectKind.EXTERNAL_EFFECT)

    def test_policy_rejects_values_outside_effect_enum(self) -> None:
        with pytest.raises(ValueError, match="EffectKind"):
            ToolExecutionPolicy(allowed_effects=frozenset({"read"}))

    def test_tool_definition_requires_an_explicit_effect(self) -> None:
        async def handler(arguments, context):
            return {}

        constructor: Callable[..., ToolDefinition] = ToolDefinition
        with pytest.raises(TypeError):
            constructor(
                name="missing-effect",
                description="Missing effect.",
                parameters={"type": "object"},
                handler=handler,
            )


class TestPolicyDispatch:
    async def test_read_only_policy_runs_read_handler(self) -> None:
        starts: dict[str, int] = {}
        registry = registry_with_effects(starts)

        result = await dispatch(
            registry,
            "read",
            policy=ToolExecutionPolicy.read_only(),
        )

        assert result.ok
        assert result.started
        assert starts == {"read": 1}

    @pytest.mark.parametrize("tool_name", ["read", "write"])
    async def test_maintenance_policy_runs_weaver_effects(
        self,
        tool_name: str,
    ) -> None:
        starts: dict[str, int] = {}
        registry = registry_with_effects(starts)

        result = await dispatch(
            registry,
            tool_name,
            policy=ToolExecutionPolicy.maintenance(),
        )

        assert result.ok
        assert result.started
        assert starts == {tool_name: 1}

    @pytest.mark.parametrize(
        ("tool_name", "policy"),
        [
            ("write", ToolExecutionPolicy.read_only()),
            ("outside", ToolExecutionPolicy.read_only()),
            ("outside", ToolExecutionPolicy.maintenance()),
        ],
    )
    async def test_policy_blocks_unapproved_effects(
        self,
        tool_name: str,
        policy: ToolExecutionPolicy,
    ) -> None:
        starts: dict[str, int] = {}
        registry = registry_with_effects(starts)

        result = await dispatch(
            registry,
            tool_name,
            policy=policy,
        )

        assert not result.ok
        assert not result.started
        assert result.error_code == "effect_not_allowed"
        assert starts == {}

    async def test_effect_is_checked_before_json_parsing(self) -> None:
        starts: dict[str, int] = {}
        registry = registry_with_effects(starts)

        result = await dispatch(
            registry,
            "write",
            policy=ToolExecutionPolicy.read_only(),
            raw_arguments='{"broken":}',
        )

        assert result.error_code == "effect_not_allowed"
        assert not result.started
        assert starts == {}

    async def test_inactive_tool_keeps_priority_over_effect(self) -> None:
        starts: dict[str, int] = {}
        registry = registry_with_effects(starts)

        result = await dispatch(
            registry,
            "write",
            policy=ToolExecutionPolicy.read_only(),
            raw_arguments="",
            active_names=(),
        )

        assert result.error_code == "inactive_tool"
        assert not result.started
        assert starts == {}


class TestCooperativeCancellation:
    async def test_pre_cancelled_call_does_not_start_handler(self) -> None:
        starts: dict[str, int] = {}
        registry = registry_with_effects(starts)
        context = execution_context()
        context.cancel_event.set()

        result = await registry.dispatch(
            "read",
            "{}",
            active_names=("read",),
            policy=ToolExecutionPolicy.read_only(),
            context=context,
        )

        assert not result.ok
        assert not result.started
        assert result.error_code == "cancelled"
        assert starts == {}

    async def test_running_handler_cleans_up_before_dispatch_returns(
        self,
    ) -> None:
        handler_started = asyncio.Event()
        cancellation_seen = asyncio.Event()
        allow_cleanup = asyncio.Event()
        cleanup_finished = asyncio.Event()
        context = execution_context()

        async def handler(arguments, handler_context):
            handler_started.set()
            try:
                await asyncio.Event().wait()
            except asyncio.CancelledError:
                cancellation_seen.set()
                await allow_cleanup.wait()
                cleanup_finished.set()
                raise

        registry = ToolRegistry()
        registry.register(
            ToolDefinition(
                name="waiting-read",
                description="Wait until cancelled.",
                parameters={"type": "object"},
                handler=handler,
                effect_kind=EffectKind.READ,
            )
        )
        dispatch_task = asyncio.create_task(
            registry.dispatch(
                "waiting-read",
                "{}",
                active_names=("waiting-read",),
                policy=ToolExecutionPolicy.read_only(),
                context=context,
            )
        )

        await handler_started.wait()
        context.cancel_event.set()
        await cancellation_seen.wait()

        assert not dispatch_task.done()
        assert not cleanup_finished.is_set()

        allow_cleanup.set()
        result = await dispatch_task

        assert cleanup_finished.is_set()
        assert not result.ok
        assert result.started
        assert result.error_code == "cancelled"

    async def test_completed_handler_wins_cancellation_tie(self) -> None:
        context = execution_context()

        async def handler(arguments, handler_context):
            handler_context.cancel_event.set()
            return {"state": "complete"}

        registry = ToolRegistry()
        registry.register(
            ToolDefinition(
                name="instant-read",
                description="Finish while requesting cancellation.",
                parameters={"type": "object"},
                handler=handler,
                effect_kind=EffectKind.READ,
            )
        )

        result = await registry.dispatch(
            "instant-read",
            "{}",
            active_names=("instant-read",),
            policy=ToolExecutionPolicy.read_only(),
            context=context,
        )

        assert result.ok
        assert result.started
        assert result.result == {"state": "complete"}

    async def test_swallowed_task_cancellation_still_reports_cancelled(
        self,
    ) -> None:
        handler_started = asyncio.Event()
        context = execution_context()

        async def handler(arguments, handler_context):
            handler_started.set()
            try:
                await asyncio.Event().wait()
            except asyncio.CancelledError:
                return {"state": "returned after cancellation"}

        registry = ToolRegistry()
        registry.register(
            ToolDefinition(
                name="swallowing-read",
                description="Catch task cancellation.",
                parameters={"type": "object"},
                handler=handler,
                effect_kind=EffectKind.READ,
            )
        )
        dispatch_task = asyncio.create_task(
            registry.dispatch(
                "swallowing-read",
                "{}",
                active_names=("swallowing-read",),
                policy=ToolExecutionPolicy.read_only(),
                context=context,
            )
        )

        await handler_started.wait()
        context.cancel_event.set()
        result = await dispatch_task

        assert not result.ok
        assert result.started
        assert result.error_code == "cancelled"
        assert result.result is None

    async def test_retry_safe_handler_is_never_retried(self) -> None:
        starts = 0

        async def handler(arguments, context):
            nonlocal starts
            starts += 1
            raise RuntimeError("expected test failure")

        registry = ToolRegistry()
        registry.register(
            ToolDefinition(
                name="retry-safe-read",
                description="Fail once.",
                parameters={"type": "object"},
                handler=handler,
                effect_kind=EffectKind.READ,
                retry_safe=True,
            )
        )

        result = await registry.dispatch(
            "retry-safe-read",
            "{}",
            active_names=("retry-safe-read",),
            policy=ToolExecutionPolicy.read_only(),
            context=execution_context(),
        )

        assert not result.ok
        assert result.started
        assert result.error_code == "tool_failed"
        assert starts == 1

    async def test_completed_dispatch_leaves_no_waiter_task(self) -> None:
        starts: dict[str, int] = {}
        registry = registry_with_effects(starts)

        result = await dispatch(
            registry,
            "read",
            policy=ToolExecutionPolicy.read_only(),
        )

        pending_weaver_tasks = [
            task.get_name()
            for task in asyncio.all_tasks()
            if task.get_name().startswith("weaver-tool-")
        ]
        assert result.ok
        assert pending_weaver_tasks == []

    async def test_checkpoint_stops_before_simulated_commit(self) -> None:
        checkpoint_ready = asyncio.Event()
        continue_to_checkpoint = asyncio.Event()
        committed = asyncio.Event()
        context = execution_context()

        async def handler() -> None:
            checkpoint_ready.set()
            await continue_to_checkpoint.wait()
            context.raise_if_cancelled()
            committed.set()

        handler_task = asyncio.create_task(handler())
        await checkpoint_ready.wait()
        context.cancel_event.set()
        continue_to_checkpoint.set()

        with pytest.raises(asyncio.CancelledError):
            await handler_task
        assert not committed.is_set()
