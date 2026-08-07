"""Plan 011 Gate 2: shared chat runtime profile tests.

The runtime keeps separate developer and web profiles. Opening the runtime
must not create a conversation, and both profiles keep their exact tool and
policy boundaries even though the old terminal entrypoint is gone.
"""

import pytest

from weaver.agent.tools import EffectKind, ToolExecutionPolicy
from weaver.chat_runtime import open_chat_runtime
from weaver.conversation.session import SessionWeave


async def test_open_developer_runtime_starts_no_conversation(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="developer")
    try:
        assert runtime.surface == "developer"
        conversations = await runtime.session.repo.load_conversations()
        assert conversations == []
    finally:
        await runtime.close()


async def test_developer_profile_keeps_plan_010_tool_set(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="developer")
    try:
        assert runtime.session._active_tools == (
            "echo",
            "inspect_novel_corpus",
            "build_novel_packet",
            "export_novel",
        )
        policy = runtime.session._execution_policy
        assert policy.allows(EffectKind.READ)
        assert policy.allows(EffectKind.INTERNAL_WRITE)
        assert not policy.allows(EffectKind.EXTERNAL_EFFECT)
        registry = runtime.session._tool_registry
        assert registry.has("echo")
        assert not registry.has("fetch_novel_chapters")
        assert not registry.has("update_novel_corpus")
    finally:
        await runtime.close()


async def test_web_profile_has_reading_tools_and_read_only_policy(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        assert runtime.surface == "web"
        assert runtime.session._active_tools == (
            "search_story",
            "read_chapters",
            "find_text",
            "browse_chapters",
            "who_is",
        )
        registry = runtime.session._tool_registry
        assert registry.has("search_story")
        assert registry.has("read_chapters")
        assert registry.has("find_text")
        assert registry.has("browse_chapters")
        assert registry.has("who_is")
        assert not registry.has("echo")
        policy = runtime.session._execution_policy
        assert policy == ToolExecutionPolicy.read_only()
    finally:
        await runtime.close()


async def test_web_prompt_makes_library_claim_with_truth_rule(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        prompt = runtime.session._system_prompt
        assert "search_story" in prompt
        assert "read_chapters" in prompt
        assert "find_text" in prompt
        assert "who_is" in prompt
        assert "source of truth" in prompt
    finally:
        await runtime.close()


async def test_unknown_surface_is_rejected(tmp_path) -> None:
    with pytest.raises(ValueError):
        await open_chat_runtime(tmp_path, live=False, surface="tui")


async def test_developer_mode_label_is_fake_in_fake_mode(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="developer")
    try:
        assert runtime.mode_label == "fake"
    finally:
        await runtime.close()


async def test_live_without_key_raises_before_state(tmp_path) -> None:
    # The runtime raises for missing credentials without creating the
    # state dir, so a caller can exit 2 before state or a socket exists.
    state_dir = tmp_path / "state"
    with pytest.raises(ValueError):
        await open_chat_runtime(state_dir, live=True, surface="web")
    assert not state_dir.exists()


async def test_web_runtime_is_a_session_weave(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        assert isinstance(runtime.session, SessionWeave)
    finally:
        await runtime.close()
