"""Plan 035: the memory tools and snapshot inside the real web runtime."""

from __future__ import annotations

import asyncio
import json
from types import SimpleNamespace

from weaver.agent.tools import EffectKind, ToolExecutionContext
from weaver.chat_runtime import WEB_ACTIVE_TOOLS, open_chat_runtime, web_system_prompt
from weaver.memory_keeper import MEMORY_WRITE_POLICY
from weaver.memory_tools import MEMORY_TOOLS
from weaver.prompts import load_personality
from weaver.web.app import _memory_block


def test_the_reading_turn_cannot_write_memory() -> None:
    assert not set(MEMORY_TOOLS) & set(WEB_ACTIVE_TOOLS)


def test_the_web_prompt_explains_the_memory_without_promising_it() -> None:
    prompt = web_system_prompt(load_personality("lorekeeper"), 3160)
    assert "<memory>" in prompt
    assert "never overrides the chapters" in prompt
    assert "never promise to remember" in prompt
    for name in MEMORY_TOOLS:
        assert name not in prompt


async def test_a_memory_write_lands_on_the_owning_device_and_reaches_its_turn(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        session = runtime.session
        assert not session._execution_policy.allows(EffectKind.INTERNAL_WRITE)
        mine = await session.start_conversation("hi, i'm Ari", device_id="device-a")
        theirs = await session.start_conversation("hello", device_id="device-b")
        result = await session._tool_registry.dispatch(
            "remember_reader",
            json.dumps({"field": "name", "value": "Ari", "reader_words": "i'm Ari"}),
            active_names=MEMORY_TOOLS,
            policy=MEMORY_WRITE_POLICY,
            context=ToolExecutionContext(
                session_id=mine,
                turn_id="t",
                call_id="c",
                cancel_event=asyncio.Event(),
                conversation_id=mine,
            ),
        )
        assert result.ok and result.result["kept"] is True
        prefs = SimpleNamespace(reader_chapter=3160, spoiler_mode="protect")
        assert '"Ari"' in await _memory_block(runtime, "device-a", prefs, mine)
        assert await _memory_block(runtime, "device-b", prefs, theirs) == ""
        assert await _memory_block(runtime, None, prefs, mine) == ""
    finally:
        await runtime.close()


async def test_the_developer_surface_has_no_reader_memory(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="developer")
    try:
        assert runtime.memory is None
    finally:
        await runtime.close()
