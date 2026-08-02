"""Shared chat runtime for `weaver chat` and `weaver web`.

Extracted from cli.py (Plan 011 Gate 2): provider, prompt, model, tool
profile, and SessionWeave construction now live here. Opening the runtime
never creates a conversation; callers start one.

Surface profiles:
- "developer": the Plan 010 tool set (echo + library inspect tools under
  the maintenance policy), used by `weaver chat`.
- "web": an empty tool registry, no active tools, a read-only policy, and
  a prompt that does not claim library access. The browser surface has no
  tools until a later owner-approved plan.
"""

import dataclasses
import os
from pathlib import Path
from typing import Literal

from .agent.tools import (
    EffectKind,
    ToolDefinition,
    ToolExecutionPolicy,
    ToolRegistry,
)
from .config import DEFAULT_TIMEOUT_SECONDS
from .conversation.session import SessionWeave
from .corpus.tools import register_chat_tools, service_from_environment
from .model_layer import (
    DEEPSEEK_FLASH,
    DEEPSEEK_MODELS,
    DeepSeekProvider,
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelResponse,
    ModelStopReason,
)

Surface = Literal["developer", "web"]

# Developer surface system prompt (Weaver words only, never "corpus").
DEVELOPER_SYSTEM_PROMPT = (
    "You are Weaver, a lifelong reader with a private library of novels. "
    "Keep replies plain and honest. You can inspect the library, build "
    "reading packets, and export editions. You cannot fetch or update the "
    "library from chat."
)

# Web surface system prompt: no library claim, no tools.
WEB_SYSTEM_PROMPT = (
    "You are Weaver, a plain and honest writing companion. Keep replies "
    "short and direct. This surface has no tools; answer from your own "
    "knowledge only."
)

WEB_ACTIVE_TOOLS: tuple[str, ...] = ()

# Scripted fake-mode reply: friendly, non-streamed, honest about being fake.
# Surface-neutral text: it must not advertise a command that only one of
# the two surfaces knows (independent review finding, 2026-08-02).
FAKE_RESPONSES = (
    ModelResponse(
        assistant_message=ModelMessage(
            role="assistant",
            content=(
                "I read you. This is a fake-mode reply (--fake), no real "
                "model is running. Set DEEPSEEK_KEY and start again to talk "
                "to the real Weaver."
            ),
        ),
        provider_id=DEEPSEEK_FLASH.provider_id,
        model_id=DEEPSEEK_FLASH.model_id,
        stop_reason=ModelStopReason.STOP,
        raw_stop_reason="stop",
    ),
)


def _developer_tool_registry() -> ToolRegistry:
    """Echo + library inspection tools only (Plan 010 Contract §2)."""
    registry = ToolRegistry()

    async def echo_handler(arguments: dict, context) -> dict:
        return {"echo": arguments}

    registry.register(
        ToolDefinition(
            name="echo",
            description="Echo back arguments (development tool).",
            parameters={
                "type": "object",
                "properties": {"message": {"type": "string"}},
            },
            handler=echo_handler,
            effect_kind=EffectKind.READ,
        )
    )
    register_chat_tools(registry, service_from_environment(live_source=False))
    return registry


def _web_tool_registry() -> ToolRegistry:
    """Empty registry: the web surface has no tools (Plan 011 contract)."""
    return ToolRegistry()


class ChatRuntime:
    """Owns the open session, mode label, and close lifecycle."""

    def __init__(
        self,
        session: SessionWeave,
        *,
        surface: Surface,
        mode_label: str,
    ) -> None:
        self.session = session
        self.surface = surface
        self.mode_label = mode_label

    async def close(self) -> None:
        await self.session.close()


async def open_chat_runtime(
    state_dir: Path,
    *,
    live: bool,
    surface: Surface,
) -> ChatRuntime:
    """Build the exact chat session for a surface (test seam).

    Opens the session without creating a conversation. Raises ValueError
    for missing live credentials before any state directory is created.
    """
    if surface not in ("developer", "web"):
        raise ValueError(f"unknown surface: {surface}")

    # Config [chat] model (alias or id) picks the model; flash is the default.
    model_id = os.environ.get("WEAVER_CHAT_MODEL") or DEEPSEEK_FLASH.model_id

    if live:
        api_key = os.environ.get("DEEPSEEK_KEY")
        if not api_key:
            raise ValueError("live chat requires DEEPSEEK_KEY")
        provider = DeepSeekProvider(
            api_key,
            timeout_seconds=DEFAULT_TIMEOUT_SECONDS,
        )
    else:
        # The scripted response carries the requested model id so
        # [chat] model = pro no longer fails every fake turn.
        provider = FakeModelProvider(
            "deepseek",
            models=DEEPSEEK_MODELS,
            responses=(
                dataclasses.replace(
                    FAKE_RESPONSES[0],
                    model_id=model_id,
                ),
            ),
        )

    mode_label = f"live {model_id}" if live else "fake"

    model_layer = ModelLayer()
    model_layer.register_provider(provider)
    model = model_layer.get_model(
        DEEPSEEK_FLASH.provider_id,
        model_id,
    )

    if surface == "developer":
        registry = _developer_tool_registry()
        active_tools: tuple[str, ...] = (
            "echo",
            "inspect_novel_corpus",
            "build_novel_packet",
            "export_novel",
        )
        system_prompt = DEVELOPER_SYSTEM_PROMPT
        execution_policy = ToolExecutionPolicy.maintenance()
    else:
        registry = _web_tool_registry()
        active_tools = WEB_ACTIVE_TOOLS
        system_prompt = WEB_SYSTEM_PROMPT
        execution_policy = ToolExecutionPolicy.read_only()

    sw = SessionWeave(
        state_dir,
        model_layer=model_layer,
        model=model,
        system_prompt=system_prompt,
        tool_registry=registry,
        active_tools=active_tools,
        execution_policy=execution_policy,
    )
    await sw.open()
    return ChatRuntime(sw, surface=surface, mode_label=mode_label)
