"""Plan 007: restart-safe conversation proof via subprocess."""

from __future__ import annotations

import subprocess
import sys
import tempfile
from pathlib import Path

import pytest

from weaver import (
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelToolCall,
)
from weaver.agent.tools import ToolRegistry
from weaver.conversation import SessionWeave


def _run(mode: str, state_dir: Path) -> None:
    result = subprocess.run(
        [
            sys.executable,
            "-m",
            "weaver.conversation._runner",
            mode,
            str(state_dir),
        ],
        capture_output=True,
        text=True,
        cwd=Path(__file__).resolve().parents[2],
    )
    assert result.returncode == 0, (
        f"Process {mode} failed:\n"
        f"STDOUT: {result.stdout}\nSTDERR: {result.stderr}"
    )


@pytest.mark.asyncio
async def test_subprocess_restart():
    """Process A crashes; Process B continues without re-executing tool."""
    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"

        # Process A: start conversation, emit tool call, settle, crash
        _run("a", state_dir)

        # Verify directory permissions
        stat = state_dir.stat()
        assert stat.st_mode & 0o077 == 0, (
            f"state dir has group/other access: {stat.st_mode:o}"
        )

        # Verify DB file permissions
        db_path = state_dir / "weaver.sqlite3"
        db_stat = db_path.stat()
        assert db_stat.st_mode & 0o077 == 0, (
            f"db file has group/other access: {db_stat.st_mode:o}"
        )

        # Process B: open same state, continue, verify
        _run("b", state_dir)


@pytest.mark.asyncio
async def test_subprocess_retry():
    """Process A crashes; Process C retries from fresh context."""
    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        _run("a", state_dir)
        _run("c", state_dir)


@pytest.mark.asyncio
async def test_delete_workflows_db_safe():
    """Deleting an optional workflows database is harmless."""
    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        wf = state_dir / "workflows.sqlite3"
        assert not wf.exists()
        wf.unlink(missing_ok=True)


@pytest.mark.asyncio
async def test_migration_idempotent():
    """Running migrate twice is safe."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        await sw.close()

        sw2 = SessionWeave(state_dir)
        await sw2.open()
        await sw2.close()


@pytest.mark.asyncio
async def test_empty_state_no_interrupted():
    """Fresh state has no interrupted runs."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            interrupted = await sw.find_interrupted_runs()
            assert interrupted == []
        finally:
            await sw.close()


@pytest.mark.asyncio
async def test_duplicate_tool_result_rejected():
    """Settling the same tool call twice raises ValueError."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            conv_id = await sw.start_conversation("test")
            runs = await sw.repo.load_runs(conv_id)
            run = runs[0]
            items = await sw.repo.load_items(conv_id)
            turn_id = items[0].turn_id

            tc_id = "dup-test-call"
            await sw.coordinator.insert_assistant_item(
                conv_id,
                run.id,
                turn_id,
                "calling tool",
                tool_calls=[
                    {
                        "id": tc_id,
                        "name": "echo",
                        "arguments": "{}",
                    }
                ],
            )
            await sw.coordinator.settle_tool(
                conv_id, run.id, turn_id, tc_id, "echo", "{}", '"ok"'
            )
            with pytest.raises(ValueError, match="already has a result"):
                await sw.coordinator.settle_tool(
                    conv_id,
                    run.id,
                    turn_id,
                    tc_id,
                    "echo",
                    "{}",
                    '"second"',
                )
        finally:
            await sw.close()


@pytest.mark.asyncio
async def test_duplicate_tool_result_leaves_session_usable():
    """After a rejected settle rolls back, the session still works.

    Regression for the dangling-transaction defect: an exception inside a
    coordinator transaction (duplicate tool result, UNIQUE violation)
    without a rollback left the connection unusable for every later
    operation ("cannot start a transaction within a transaction").
    """
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            conv_id = await sw.start_conversation("test")
            runs = await sw.repo.load_runs(conv_id)
            run = runs[0]
            items = await sw.repo.load_items(conv_id)
            turn_id = items[0].turn_id

            tc_id = "dup-test-call"
            await sw.coordinator.insert_assistant_item(
                conv_id,
                run.id,
                turn_id,
                "calling tool",
                tool_calls=[
                    {
                        "id": tc_id,
                        "name": "echo",
                        "arguments": "{}",
                    }
                ],
            )
            await sw.coordinator.settle_tool(
                conv_id, run.id, turn_id, tc_id, "echo", "{}", '"ok"'
            )
            with pytest.raises(ValueError, match="already has a result"):
                await sw.coordinator.settle_tool(
                    conv_id,
                    run.id,
                    turn_id,
                    tc_id,
                    "echo",
                    "{}",
                    '"second"',
                )

            # The same session must remain usable after the rejected settle.
            turn2_id, run2_id = await sw.coordinator.start_turn(
                conv_id, "follow-up", turn_sequence=2
            )
            await sw.coordinator.insert_assistant_item(
                conv_id, run2_id, turn2_id, "more"
            )
            items_after = await sw.repo.load_items(conv_id)
            # turn1: owner, assistant, tool_call, tool_result; turn2: owner, assistant
            assert len(items_after) == 6
            assert all(i.turn_id in (turn_id, turn2_id) for i in items_after)
        finally:
            await sw.close()


# -- repository unit tests --


@pytest.mark.asyncio
async def test_repo_find_interrupted_run_none():
    """Empty state returns None for interrupted runs."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            conv_id = await sw.start_conversation("hello")
            result = await sw.repo.find_interrupted_run(conv_id)
            assert result is None
        finally:
            await sw.close()


@pytest.mark.asyncio
async def test_repo_load_items_for_run_id():
    """load_items with for_run_id filters to a specific run."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            conv_id = await sw.start_conversation("hello")
            runs = await sw.repo.load_runs(conv_id)
            run = runs[0]
            for_run = await sw.repo.load_items(
                conv_id, for_run_id=run.id
            )

            assert len(for_run) >= 1
            assert all(i.run_id == run.id for i in for_run)
        finally:
            await sw.close()


@pytest.mark.asyncio
async def test_repo_load_items_before_sequence():
    """load_items with before_sequence excludes later items."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            conv_id = await sw.start_conversation("hello")
            all_items = await sw.repo.load_items(conv_id)
            assert len(all_items) >= 1
            first_seq = all_items[0].sequence
            before = await sw.repo.load_items(
                conv_id, before_sequence=first_seq
            )
            # Nothing before the first item
            assert len(before) == 0
        finally:
            await sw.close()


@pytest.mark.asyncio
async def test_repo_load_events_and_runs():
    """load_events and load_runs return expected data."""
    from weaver.conversation import SessionWeave

    with tempfile.TemporaryDirectory() as tmp:
        state_dir = Path(tmp) / ".weaver" / "state"
        sw = SessionWeave(state_dir)
        await sw.open()
        try:
            conv_id = await sw.start_conversation("hello")
            events = await sw.repo.load_events(conv_id)
            runs = await sw.repo.load_runs(conv_id)

            assert len(events) >= 1
            assert len(runs) == 1
            assert runs[0].phase == "queued"
        finally:
            await sw.close()


# -- Plan 008: wired loop tests --


def _echo_registry() -> ToolRegistry:
    from weaver.agent.tools import EffectKind, ToolDefinition, ToolRegistry

    async def echo_handler(arguments: dict, context) -> dict:
        return {"echo": arguments}

    registry = ToolRegistry()
    registry.register(
        ToolDefinition(
            name="echo",
            description="Echo back arguments",
            parameters={
                "type": "object",
                "properties": {"message": {"type": "string"}},
            },
            handler=echo_handler,
            effect_kind=EffectKind.READ,
        )
    )
    return registry


def _fake_layer(
    *responses: ModelResponse,
) -> tuple[ModelLayer, ModelSpec, FakeModelProvider]:
    model = ModelSpec(
        provider_id="test-provider",
        model_id="test-reader",
        api_family="test",
        default_output_tokens=777,
        supports_reasoning=False,
    )
    provider = FakeModelProvider(
        model.provider_id,
        models=(model,),
        responses=tuple(responses),
    )
    layer = ModelLayer()
    layer.register_provider(provider)
    return layer, model, provider


def _tool_use_response(call_id: str) -> ModelResponse:
    return ModelResponse(
        assistant_message=ModelMessage(
            role="assistant",
            content="",
            tool_calls=(
                ModelToolCall(
                    call_id=call_id,
                    name="echo",
                    arguments_json='{"message":"hello"}',
                ),
            ),
        ),
        provider_id="test-provider",
        model_id="test-reader",
        stop_reason=ModelStopReason.TOOL_USE,
        raw_stop_reason="tool_calls",
    )


def _stop_response(text: str) -> ModelResponse:
    return ModelResponse(
        assistant_message=ModelMessage(role="assistant", content=text),
        provider_id="test-provider",
        model_id="test-reader",
        stop_reason=ModelStopReason.STOP,
        raw_stop_reason="stop",
    )


def _open_woven(tmp: Path, layer, model, registry) -> SessionWeave:
    from weaver.agent.tools import ToolExecutionPolicy

    sw = SessionWeave(
        Path(tmp) / ".weaver" / "state",
        model_layer=layer,
        model=model,
        system_prompt="You are Weaver.",
        tool_registry=registry,
        active_tools=("echo",),
        execution_policy=ToolExecutionPolicy.read_only(),
    )
    return sw


@pytest.mark.asyncio

def test_items_to_messages_assistant_tool_calls_guard():
    """Contract §4: corrupted assistant tool_calls entries raise ValueError
    with the item id instead of a bare KeyError/TypeError."""
    from weaver.conversation.repository import ItemRecord
    from weaver.conversation.runner import _items_to_messages

    def item(body: dict) -> ItemRecord:
        return ItemRecord(
            id="itm12345678ab",
            conversation_id="conv1",
            run_id="run1",
            turn_id="turn1",
            sequence=1,
            kind="assistant",
            body=__import__("json").dumps(body),
            created_at="2026-07-31T00:00:00",
        )

    with pytest.raises(ValueError, match="itm12345678ab"):
        _items_to_messages([item({"tool_calls": [{"id": "c1"}]})])  # missing name/arguments
    with pytest.raises(ValueError, match="itm12345678ab"):
        _items_to_messages([item({"tool_calls": ["nope"]})])  # non-dict entry
    with pytest.raises(ValueError, match="itm12345678ab"):
        _items_to_messages([item({"tool_calls": "nope"})])  # not a list


async def test_send_fake_turn():
    """Full wired turn: real ToolRegistry dispatch, 5-item sequence."""
    with tempfile.TemporaryDirectory() as tmp:
        layer, model, provider = _fake_layer(
            _tool_use_response("call-1"),
            _stop_response("Done."),
        )
        sw = _open_woven(Path(tmp), layer, model, _echo_registry())
        await sw.open()
        try:
            conv_id = await sw.start_conversation("hi")
            result = await sw.send(conv_id, "Echo hello")

            assert result.exit_reason == "completed"
            assert result.model_steps == 2
            assert result.tool_starts == 1
            assert result.final_text == "Done."
            user_msgs = [
                m for m in provider.calls[0].request.messages if m.role == "user"
            ]
            assert user_msgs[-1].content == "Echo hello"

            items = await sw.repo.load_items(conv_id)
            # turn1 owner ("hi", start_conversation) + turn2 exchange
            assert [i.kind for i in items] == [
                "owner",
                "owner",
                "assistant",
                "tool_call",
                "tool_result",
                "assistant",
            ]
            seqs = [i.sequence for i in items]
            assert seqs == sorted(seqs)
            assert len({i.id for i in items}) == 6
            # the send's exchange items share one run; the "hi" owner
            # belongs to the start_conversation run
            assert items[0].run_id != items[1].run_id
            assert all(i.run_id == items[1].run_id for i in items[1:])

            runs = await sw.repo.load_runs(conv_id)
            assert runs[-1].phase == "completed"
            assert runs[0].phase == "queued"

            # single finalization: exactly one assistant item with content
            assistants = [i for i in items if i.kind == "assistant"]
            assert len(assistants) == 2
            final = assistants[1]
            import json as _json

            assert _json.loads(final.body)["content"] == "Done."
        finally:
            await sw.close()


@pytest.mark.asyncio
async def test_send_restart_projection():
    """A fresh weave replays history; no re-call, exactly one tool role."""
    with tempfile.TemporaryDirectory() as tmp:
        layer, model, provider = _fake_layer(
            _tool_use_response("call-1"),
            _stop_response("Done."),
        )
        sw = _open_woven(Path(tmp), layer, model, _echo_registry())
        await sw.open()
        try:
            conv_id = await sw.start_conversation("hi")
            first = await sw.send(conv_id, "Echo hello")
            assert first.exit_reason == "completed"
        finally:
            await sw.close()

        # Fresh weave, fresh provider with only a stop response: the model
        # must see the replayed exchange (exactly one tool role, the
        # assistant tool_calls projected exactly once) and must not be
        # asked to run the tool again.
        layer2, model2, provider2 = _fake_layer(_stop_response("Again."))
        sw2 = _open_woven(Path(tmp), layer2, model2, _echo_registry())
        await sw2.open()
        try:
            result2 = await sw2.send(conv_id, "Again")
            assert result2.exit_reason == "completed"
            assert result2.model_steps == 1
            assert result2.tool_starts == 0

            messages = provider2.calls[0].request.messages
            roles = [m.role for m in messages]
            assert roles.count("tool") == 1
            tool_msg = next(m for m in messages if m.role == "tool")
            assert tool_msg.tool_call_id == "call-1"
            assert tool_msg.content == '{"echo":{"message":"hello"}}'

            assistant_msgs = [m for m in messages if m.role == "assistant"]
            with_tools = [m for m in assistant_msgs if m.tool_calls]
            assert len(with_tools) == 1
            assert with_tools[0].tool_calls[0].call_id == "call-1"

            items = await sw2.repo.load_items(conv_id)
            # turn1 owner ("hi", start_conversation) + turn2 exchange + turn3
            assert [i.kind for i in items] == [
                "owner",
                "owner",
                "assistant",
                "tool_call",
                "tool_result",
                "assistant",
                "owner",
                "assistant",
            ]
        finally:
            await sw2.close()


@pytest.mark.asyncio
async def test_send_interrupted_run_no_auto_continue():
    """send() refuses to auto-continue an interrupted run."""
    with tempfile.TemporaryDirectory() as tmp:
        layer, model, provider = _fake_layer(
            _tool_use_response("call-1"),
            _stop_response("Done."),
        )
        sw = _open_woven(Path(tmp), layer, model, _echo_registry())
        await sw.open()
        try:
            conv_id = await sw.start_conversation("hi")
            await sw.send(conv_id, "Echo hello")

            # Simulate an interrupted run (as a crash would leave it).
            run = (await sw.repo.load_runs(conv_id))[-1]
            await sw.coordinator.mark_interrupted(run.id)

            result = await sw.send(conv_id, "next")
            assert result.exit_reason == "interrupted"
            assert "interrupted run" in result.safe_failure

            # No new turn/run was created by the refused send (2 = the
            # start_conversation run + the completed send run).
            runs = await sw.repo.load_runs(conv_id)
            assert len(runs) == 2
        finally:
            await sw.close()
