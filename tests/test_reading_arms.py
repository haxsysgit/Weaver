"""Plan 032: the four reading arms of the retrieval verdict.

An arm decides which reading tools the model gets, and the system prompt
names only those tools. The switch is private to the evaluation harness:
no route, setting, header, or environment variable reaches it, and with
no arm the product is unchanged.
"""

from __future__ import annotations

import inspect

import pytest

from weaver.chat_runtime import WEB_ACTIVE_TOOLS, open_chat_runtime, web_system_prompt
from weaver.reading_arms import ARMS, READING_TOOLS
from weaver.web.app import create_app

PERSONALITY = "You are Weaver."


def test_the_four_arms_hold_exactly_their_tools() -> None:
    assert set(ARMS) == {"A", "B", "C", "D"}
    assert ARMS["A"].tools == READING_TOOLS
    assert "semantic_search" not in ARMS["B"].tools
    assert set(ARMS["B"].tools) == set(READING_TOOLS) - {"semantic_search"}
    assert set(ARMS["C"].tools) == set(READING_TOOLS) - {"who_is", "lore_path"}
    assert ARMS["C"].novel_only_search is True
    assert set(ARMS["D"].tools) == {"read_chapters", "find_text", "browse_chapters"}


def test_no_arm_leaves_the_shipped_prompt_unchanged() -> None:
    shipped = web_system_prompt(PERSONALITY, 3232, search_through=3127)
    assert web_system_prompt(PERSONALITY, 3232, search_through=3127, arm=ARMS["A"]) == shipped
    assert web_system_prompt(PERSONALITY, 3232, search_through=3127, arm=None) == shipped


@pytest.mark.parametrize("name", ["A", "B", "C", "D"])
def test_each_prompt_names_only_its_own_tools(name: str) -> None:
    arm = ARMS[name]
    prompt = web_system_prompt(PERSONALITY, 3232, search_through=3127, arm=arm)
    for tool in READING_TOOLS:
        if tool in arm.tools:
            assert tool in prompt, (name, tool)
        else:
            assert tool not in prompt, (name, tool)
    assert "Six tools" not in prompt or name == "A"


@pytest.mark.parametrize("name", ["C", "D"])
def test_arms_without_the_notebook_never_mention_it(name: str) -> None:
    prompt = web_system_prompt(PERSONALITY, 3232, search_through=3127, arm=ARMS[name])
    lowered = prompt.casefold()
    assert "notebook" not in lowered
    assert "story map" not in lowered and "story-map" not in lowered


def test_arms_without_meaning_search_drop_its_coverage_line() -> None:
    for name in ("B", "D"):
        prompt = web_system_prompt(PERSONALITY, 3232, search_through=3127, arm=ARMS[name])
        assert "meaning search" not in prompt.casefold()
        assert "chapters 1-3232" in prompt


@pytest.mark.asyncio
@pytest.mark.parametrize("name", ["A", "B", "C", "D"])
async def test_the_runtime_activates_only_the_arm_tools(tmp_path, name: str) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web", arm=ARMS[name])
    try:
        assert runtime.session._active_tools == ("load_skill", *ARMS[name].tools)
    finally:
        await runtime.close()


@pytest.mark.asyncio
async def test_without_an_arm_the_runtime_is_the_shipped_one(tmp_path, monkeypatch) -> None:
    # No environment variable may pick an arm: only the harness can.
    monkeypatch.setenv("WEAVER_READING_ARM", "D")
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        assert runtime.session._active_tools == WEB_ACTIVE_TOOLS
    finally:
        await runtime.close()


def test_the_web_app_has_no_way_to_pick_an_arm() -> None:
    assert "arm" not in inspect.signature(create_app).parameters
    source = inspect.getsource(create_app)
    assert "reading_arms" not in source and "arm=" not in source


@pytest.mark.asyncio
async def test_arm_c_meaning_search_reads_only_the_novel() -> None:
    from weaver.agent.tools import ToolRegistry
    from weaver.retrieval.tools import register_reading_tools

    seen: list[dict] = []

    class Service:
        async def semantic_search(self, arguments, context):
            seen.append(arguments)
            return {"ok": True, "result": {}}

        async def read_chapters(self, arguments, context):
            return {"ok": True}

        async def find_text(self, arguments, context):
            return {"ok": True}

        async def browse_chapters(self, arguments, context):
            return {"ok": True}

        async def who_is(self, arguments, context):
            return {"ok": True}

        async def lore_path(self, arguments, context):
            return {"ok": True}

    registry = ToolRegistry()
    register_reading_tools(registry, Service(), novel_only_search=True)
    tool = registry._tools["semantic_search"]
    assert "notebook" not in tool.description.casefold()

    class Context:
        max_chapter = None

    await tool.handler({"query": "the tomb", "surface": "both"}, Context())
    assert seen == [{"query": "the tomb", "surface": "novel"}]
