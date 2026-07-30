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
            ToolExecutionPolicy(
                allowed_effects=frozenset({EffectKind.EXTERNAL_EFFECT})
            )

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

    async def test_unknown_tool_keeps_first_priority(self) -> None:
        result = await dispatch(
            ToolRegistry(),
            "missing",
            policy=ToolExecutionPolicy.read_only(),
            raw_arguments="",
            active_names=(),
        )

        assert result.error_code == "unknown_tool"
        assert not result.started

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
