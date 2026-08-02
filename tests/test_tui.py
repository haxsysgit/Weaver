"""Plan 010 TUI code-path tests (no terminal required).

These tests exercise the same code path the Textual TUI runs: the chat
session built by cli._build_chat_session plus SessionWeave.send().
Headless widget tests (Textual pilot) live in test_tui_widgets.py.
"""

import asyncio
import json

import pytest

from weaver import cli
from weaver.model_layer import FakeModelProvider, ModelSpec
from weaver.tui import WeaverChat


def test_tui_import() -> None:
    """Import check (no terminal): the plan's verification floor item 1."""
    assert WeaverChat is not None


async def test_chat_session_fake_never_constructs_live_client(tmp_path) -> None:
    """Fake mode never constructs DeepSeekProvider (test_cli pattern)."""

    class NetworkMustNotBeConstructed:
        def __init__(self, *args, **kwargs):
            raise AssertionError("fake mode attempted to construct live client")

    import weaver.cli as cli_module

    monkeypatch = pytest.MonkeyPatch()
    monkeypatch.setattr(cli_module, "DeepSeekProvider", NetworkMustNotBeConstructed)
    try:
        sw, conv_id, mode_label = await cli._build_chat_session(
            tmp_path / "state",
            live=False,
        )
        await sw.close()
    finally:
        monkeypatch.undo()

    assert mode_label == "fake"


async def test_chat_tool_registry_excludes_fetch_update() -> None:
    """Chat registry: echo + inspect/build/export only (Contract §2)."""
    registry = cli._chat_tool_registry()
    names = set(registry._tools)
    assert names == {
        "echo",
        "inspect_novel_corpus",
        "build_novel_packet",
        "export_novel",
    }
    assert "fetch_novel_chapters" not in names
    assert "update_novel_corpus" not in names


def test_chat_help_exits_zero_without_corpus_wording(
    capsys,
) -> None:
    """`weaver chat --help` exits 0, no corpus wording, live by default."""
    with pytest.raises(SystemExit) as excinfo:
        cli.run(["chat", "--help"])
    assert excinfo.value.code == 0
    out = capsys.readouterr().out
    assert "chat" in out
    assert "--fake" in out
    assert "corpus" not in out.lower()


def test_chat_live_without_key_exits_2_without_state(
    tmp_path,
    monkeypatch,
    capsys,
) -> None:
    """Default (live) chat without DEEPSEEK_KEY exits 2 before any call."""
    monkeypatch.chdir(tmp_path)  # clean cwd: no repo .env to load
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    state_path = tmp_path / "state"
    monkeypatch.setenv("WEAVER_STATE_DIR", str(state_path))

    exit_code = cli.run(["chat"])

    out = capsys.readouterr().out
    assert exit_code == 2
    assert "requires DEEPSEEK_KEY" in out
    assert "--fake" in out
    assert not state_path.exists()


async def test_tui_send_completed_turn_persists_items(tmp_path) -> None:
    """Full wired chat turn: fake model, completed, items in the DB."""
    sw, conv_id, mode_label = await cli._build_chat_session(
        tmp_path / "state",
        live=False,
    )
    try:
        result = await sw.send(conv_id, "Hello")
        assert result.exit_reason == "completed"
        assert result.final_text
        assert "\N{EM DASH}" not in result.final_text
        assert mode_label == "fake"
        items = await sw.repo.load_items(conv_id)
        assert len(items) == 3  # start owner, "Hello" owner, assistant final
        kinds = [item.kind for item in items]
        assert kinds == ["owner", "owner", "assistant"]
    finally:
        await sw.close()


class _GatedProvider(FakeModelProvider):
    """Fake provider that blocks until released — deterministic cancel test."""

    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)
        self.started = asyncio.Event()
        self.release = asyncio.Event()

    async def stream(self, model, request, cancel_event, *, max_output_tokens):
        self.started.set()
        await self.release.wait()
        async for event in super().stream(
            model,
            request,
            cancel_event,
            max_output_tokens=max_output_tokens,
        ):
            yield event


async def test_send_cancel_event_settles_interrupted(tmp_path) -> None:
    """Ctrl+C path: setting the cancel event mid-turn settles INTERRUPTED."""
    from weaver.agent.tools import ToolExecutionPolicy
    from weaver.conversation.session import SessionWeave
    from weaver.model_layer import ModelLayer

    model = ModelSpec(
        provider_id="test-provider",
        model_id="test-reader",
        api_family="test",
        default_output_tokens=777,
        supports_reasoning=False,
    )
    provider = _GatedProvider(model.provider_id, models=(model,))
    layer = ModelLayer()
    layer.register_provider(provider)

    from tests.test_conversation import _echo_registry

    sw = SessionWeave(
        tmp_path / "state",
        model_layer=layer,
        model=model,
        system_prompt="You are Weaver.",
        tool_registry=_echo_registry(),
        active_tools=("echo",),
        execution_policy=ToolExecutionPolicy.read_only(),
    )
    await sw.open()
    try:
        conv_id = await sw.start_conversation("hi")
        cancel_event = asyncio.Event()
        task = asyncio.create_task(sw.send(conv_id, "Echo hello", cancel_event))
        await provider.started.wait()
        cancel_event.set()
        provider.release.set()
        result = await task

        assert result.exit_reason == "interrupted"
        # The interrupted run is recorded; next send refuses to auto-continue.
        interrupted = await sw.repo.find_interrupted_run(conv_id)
        assert interrupted is not None
    finally:
        await sw.close()


async def test_session_transcript_filters_private_protocol_records(tmp_path) -> None:
    """The TUI seam returns only owner/Weaver prose, never tool protocol."""
    from weaver.conversation.session import SessionWeave

    sw = SessionWeave(tmp_path / "state")
    await sw.open()
    try:
        conv_id = await sw.start_conversation("")
        assert await sw.conversation_exists(conv_id)
        assert not await sw.conversation_exists("unknown-conversation")

        opener_items = await sw.repo.load_items(conv_id)
        opener_runs = await sw.repo.load_runs(conv_id)
        opener = opener_items[0]
        opener_run = opener_runs[0]
        await sw.coordinator.insert_assistant_item(
            conv_id,
            opener_run.id,
            opener.turn_id,
            "PRIVATE_ASSISTANT_CANARY",
            tool_calls=[
                {
                    "id": "private-call",
                    "name": "echo",
                    "arguments": json.dumps({"message": "PRIVATE_ARGUMENT_CANARY"}),
                }
            ],
        )
        await sw.coordinator.settle_tool(
            conv_id,
            opener_run.id,
            opener.turn_id,
            "private-call",
            "echo",
            json.dumps({"message": "PRIVATE_ARGUMENT_CANARY"}),
            "PRIVATE_RESULT_CANARY",
        )
        await sw.coordinator.complete_run(
            conv_id,
            opener_run.id,
            opener.turn_id,
            "First visible reply",
        )

        turn_id, run_id = await sw.coordinator.start_turn(
            conv_id,
            "Owner follow-up",
            turn_sequence=2,
        )
        await sw.coordinator.insert_assistant_item(
            conv_id,
            run_id,
            turn_id,
            "",
        )
        await sw.coordinator.complete_run(
            conv_id,
            run_id,
            turn_id,
            "Second visible reply",
        )

        transcript = await sw.load_transcript(conv_id)

        assert [message["role"] for message in transcript] == [
            "weaver",
            "owner",
            "weaver",
        ]
        assert [message["content"] for message in transcript] == [
            "First visible reply",
            "Owner follow-up",
            "Second visible reply",
        ]
        assert all(
            set(message)
            == {"message_id", "turn_id", "role", "content", "created_at"}
            for message in transcript
        )
        serialized = json.dumps(transcript)
        assert "PRIVATE_ARGUMENT_CANARY" not in serialized
        assert "PRIVATE_ASSISTANT_CANARY" not in serialized
        assert "PRIVATE_RESULT_CANARY" not in serialized
    finally:
        await sw.close()
