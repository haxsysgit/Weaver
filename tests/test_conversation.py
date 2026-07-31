"""Plan 007: restart-safe conversation proof via subprocess."""

from __future__ import annotations

import json
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
        f"Process {mode} failed:\nSTDOUT: {result.stdout}\nSTDERR: {result.stderr}"
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
            for_run = await sw.repo.load_items(conv_id, for_run_id=run.id)

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
            before = await sw.repo.load_items(conv_id, before_sequence=first_seq)
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
        _items_to_messages(
            [item({"tool_calls": [{"id": "c1"}]})]
        )  # missing name/arguments
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


# -- Plan 009: context assembler tests --


def _assemble_item(kind: str, sequence: int, body: dict):
    from weaver.conversation.repository import ItemRecord

    return ItemRecord(
        id=f"item-{sequence:04d}",
        conversation_id="conv-1",
        sequence=sequence,
        turn_id=f"turn-{sequence}",
        run_id="run-1",
        kind=kind,
        body=json.dumps(body),
        created_at="2026-07-31T00:00:00",
    )


def _chat_items(pairs: int, word: str = "apple") -> list:
    """pairs owner+assistant item pairs, oldest first."""
    items = []
    for i in range(pairs):
        items.append(
            _assemble_item("owner", len(items) + 1, {"content": f"{word} {i}?"})
        )
        items.append(
            _assemble_item("assistant", len(items) + 1, {"content": f"{word} {i}!"})
        )
    return items


@pytest.mark.asyncio
async def test_context_assembler_all_fit():
    """All items fit: first_item_id None, item_count equals input length."""
    from weaver.conversation import ContextAssembler

    items = _chat_items(3)
    assembler = ContextAssembler("You are Weaver.", 100_000)
    kept, snapshot = await assembler.assemble(items)

    assert kept == items
    assert snapshot.first_item_id is None
    assert snapshot.last_item_id == items[-1].id
    assert snapshot.item_count == 6
    assert snapshot.token_count <= snapshot.token_budget


@pytest.mark.asyncio
async def test_context_assembler_budget_drops_oldest_keeps_pin():
    """Tight budget: strict subset, oldest dropped first, newest owner kept."""
    from weaver.conversation import ContextAssembler

    items = _chat_items(20)
    assembler = ContextAssembler("You are Weaver.", 50)
    kept, snapshot = await assembler.assemble(items)

    assert len(kept) < len(items)  # strict subset
    assert snapshot.first_item_id == kept[0].id
    assert snapshot.last_item_id == items[-1].id
    assert snapshot.item_count == len(kept)
    assert snapshot.token_count <= snapshot.token_budget
    # newest owner message survives
    newest_owner = next(item for item in reversed(items) if item.kind == "owner")
    assert newest_owner.id in {item.id for item in kept}
    # oldest item dropped first (the kept list starts somewhere later)
    assert kept[0].id != items[0].id


@pytest.mark.asyncio
async def test_context_assembler_pin_alone_exceeds_budget():
    """Pin alone over budget: returns it alone, token_count > budget, no raise."""
    from weaver.conversation import ContextAssembler

    items = _chat_items(2)
    assembler = ContextAssembler("You are Weaver.", 5)
    kept, snapshot = await assembler.assemble(items)

    assert kept == [items[-2]]  # pinned owner alone, no assistant reply
    assert snapshot.item_count == 1
    assert snapshot.token_count > snapshot.token_budget
    assert snapshot.first_item_id == items[-2].id


@pytest.mark.asyncio
async def test_context_assembler_exchange_atomicity():
    """A budget that would split assistant(tool_calls)+tool_call+tool_result
    instead drops the whole exchange: no orphaned tool role, no unpaired
    call_id in the surviving projection."""
    import tiktoken

    from weaver.agent.messages import project_messages
    from weaver.conversation import ContextAssembler
    from weaver.conversation.items import items_to_messages

    items = [
        _assemble_item("owner", 1, {"content": "oldest question"}),
        _assemble_item(
            "assistant",
            2,
            {
                "content": "",
                "tool_calls": [
                    {"id": "call-1", "name": "echo", "arguments": '{"message":"hi"}'}
                ],
            },
        ),
        _assemble_item(
            "tool_call",
            3,
            {"tool_call_id": "call-1", "name": "echo", "arguments": '{"message":"hi"}'},
        ),
        _assemble_item(
            "tool_result",
            4,
            {"tool_call_id": "call-1", "name": "echo", "result": {"echo": "hi"}},
        ),
        _assemble_item("assistant", 5, {"content": "final answer"}),
        _assemble_item("owner", 6, {"content": "newest question"}),
    ]

    # Budget that fits the final owner + its reply but not the tool exchange
    # group: the boundary would land inside the exchange if blocks were
    # split. The assembler must drop the whole exchange instead.
    encoding = tiktoken.get_encoding("cl100k_base")
    system_tokens = len(encoding.encode("You are Weaver."))
    last_owner_tokens = len(encoding.encode("newest question"))
    last_reply_tokens = len(encoding.encode("final answer"))
    budget = system_tokens + last_owner_tokens + last_reply_tokens + 1

    assembler = ContextAssembler("You are Weaver.", budget)
    kept, snapshot = await assembler.assemble(items)

    kept_kinds = [item.kind for item in kept]
    # The tool exchange (block 0-1) is dropped whole; the newest assistant
    # reply and the pinned owner fit and survive.
    assert kept_kinds == ["assistant", "owner"]
    assert all(item.id != "item-0002" for item in kept)  # exchange group gone
    assert snapshot.token_count <= snapshot.token_budget

    # Projection invariants: exactly the pinned owner + reply, one tool role
    # would exist if the exchange were split — it must be absent, and no
    # assistant carries tool_calls without its tool results.
    messages = items_to_messages(kept)
    projected = project_messages(system_prompt="", history=messages)
    tool_roles = [m for m in projected if m.role == "tool"]
    assert tool_roles == []
    for message in projected:
        assert not message.tool_calls  # no orphaned tool call either


@pytest.mark.asyncio
async def test_context_assembler_deterministic():
    """Same items + same budget -> same selection and token_count."""
    from weaver.conversation import ContextAssembler

    items = _chat_items(20)
    a1 = ContextAssembler("You are Weaver.", 50)
    a2 = ContextAssembler("You are Weaver.", 50)
    kept1, snap1 = await a1.assemble(items)
    kept2, snap2 = await a2.assemble(items)

    assert [i.id for i in kept1] == [i.id for i in kept2]
    assert snap1.token_count == snap2.token_count
    assert snap1.first_item_id == snap2.first_item_id
    assert snap1.last_item_id == snap2.last_item_id


@pytest.mark.asyncio
async def test_send_with_token_budget_drops_oldest_keeps_pin():
    """Runner integration: a bounded-budget send drops older items while
    the pinned owner message (the current user text) survives."""
    from weaver.agent.tools import ToolExecutionPolicy

    with tempfile.TemporaryDirectory() as tmp:
        layer, model, provider = _fake_layer(
            _stop_response("One."),
            _stop_response("Two."),
        )
        registry = _echo_registry()
        sw = SessionWeave(
            Path(tmp) / ".weaver" / "state",
            model_layer=layer,
            model=model,
            system_prompt="You are Weaver.",
            tool_registry=registry,
            active_tools=("echo",),
            execution_policy=ToolExecutionPolicy.read_only(),
            token_budget=8,
        )
        await sw.open()
        try:
            conv_id = await sw.start_conversation("first hello")
            r1 = await sw.send(conv_id, "second hello")
            assert r1.exit_reason == "completed"

            # The next send sees only items that fit the tiny budget:
            # the newest owner message must be there, the oldest dropped.
            r2 = await sw.send(conv_id, "third hello")
            assert r2.exit_reason == "completed"

            last_request = provider.calls[-1].request
            contents = [m.content or "" for m in last_request.messages]
            assert "third hello" in contents  # pinned owner
            assert "first hello" not in contents  # oldest dropped
        finally:
            await sw.close()


@pytest.mark.asyncio
async def test_runner_unbounded_default_preserves_plan008():
    """No token_budget -> assembler absent, full history reaches the model."""
    with tempfile.TemporaryDirectory() as tmp:
        layer, model, provider = _fake_layer(
            _stop_response("One."),
            _stop_response("Two."),
        )
        sw = _open_woven(Path(tmp), layer, model, _echo_registry())
        await sw.open()
        try:
            conv_id = await sw.start_conversation("first hello")
            await sw.send(conv_id, "second hello")
            await sw.send(conv_id, "third hello")

            last_request = provider.calls[-1].request
            contents = [m.content or "" for m in last_request.messages]
            assert "first hello" in contents
            assert "second hello" in contents
            assert "third hello" in contents
        finally:
            await sw.close()


# ---------------------------------------------------------------------------
# Plan 010 Phase B: live text deltas through send(on_delta=...).
# Deltas are a preview; the final assistant message is what persists.
# ---------------------------------------------------------------------------


class _ChunkedFake(FakeModelProvider):
    """Yields the scripted response as multiple TEXT_DELTA chunks, with an
    optional gate after the first chunk so tests can observe mid-turn
    streaming deterministically."""

    def __init__(self, model, response, *, chunk_size: int, gate=None):
        super().__init__(model.provider_id, models=(model,), responses=(response,))
        self._chunk_size = chunk_size
        self._gate = gate

    async def stream(self, model, request, cancel_event, *, max_output_tokens):
        from weaver.model_layer.types import (
            ModelStreamEvent,
            ModelStreamEventType,
        )

        if cancel_event.is_set():
            response = self._aborted_response(model)
        elif self._responses:
            response = self._responses[0]
        else:
            response = self._default_response(model, request)
        content = response.assistant_message.content or ""
        first = True
        for i in range(0, len(content), self._chunk_size):
            if not first and self._gate is not None:
                await self._gate.wait()
            first = False
            yield ModelStreamEvent(
                event_type=ModelStreamEventType.TEXT_DELTA,
                delta=content[i : i + self._chunk_size],
            )
        yield ModelStreamEvent(
            event_type=ModelStreamEventType.RESPONSE_COMPLETE,
            response=response,
        )


def _chunked_layer(response, *, chunk_size: int, gate=None):
    model = ModelSpec(
        provider_id="test-provider",
        model_id="test-reader",
        api_family="test",
        default_output_tokens=777,
        supports_reasoning=False,
    )
    provider = _ChunkedFake(model, response, chunk_size=chunk_size, gate=gate)
    layer = ModelLayer()
    layer.register_provider(provider)
    return layer, model, provider


@pytest.mark.asyncio
async def test_send_on_delta_streams_chunks_before_completion(tmp_path):
    """Deltas arrive chunk by chunk while the send is still running."""
    import asyncio

    received: list[str] = []

    async def collect(delta: str) -> None:
        received.append(delta)

    gate = asyncio.Event()
    layer, model, provider = _chunked_layer(
        _stop_response("Hello World."),
        chunk_size=6,
        gate=gate,
    )
    sw = _open_woven(Path(tmp_path), layer, model, _echo_registry())
    await sw.open()
    try:
        conv_id = await sw.start_conversation("hi")
        task = asyncio.create_task(sw.send(conv_id, "hello", on_delta=collect))
        await asyncio.sleep(0.05)  # let the turn reach the mid-stream gate

        # Mid-turn: the first chunk is already rendered, the send is not
        # done yet.
        assert received == ["Hello "]
        assert not task.done()

        gate.set()
        result = await task
        assert received == ["Hello ", "World."]
        assert result.exit_reason == "completed"
        assert result.final_text == "Hello World."
    finally:
        await sw.close()


@pytest.mark.asyncio
async def test_send_on_delta_none_still_buffers(tmp_path):
    """Default send() drains the stream with no delta callbacks."""
    received: list[str] = []
    layer, model, provider = _fake_layer(_stop_response("Done."))
    sw = _open_woven(Path(tmp_path), layer, model, _echo_registry())
    await sw.open()
    try:
        conv_id = await sw.start_conversation("hi")
        result = await sw.send(conv_id, "hello")
        assert result.exit_reason == "completed"
        assert result.final_text == "Done."
        assert received == []
    finally:
        await sw.close()


# ---------------------------------------------------------------------------
# Plan 010 Phase D: observability (context meter + run history).
# ---------------------------------------------------------------------------


@pytest.mark.asyncio
async def test_assembler_no_budget_counts_only(tmp_path):
    """token_budget=None: no truncation, full token_count reported."""
    from weaver.conversation import ContextAssembler

    items = _chat_items(3)
    assembler = ContextAssembler("You are Weaver.", None)
    kept, snapshot = await assembler.assemble(items)

    assert kept == items  # count-only: nothing dropped
    assert snapshot.token_budget is None
    assert snapshot.token_count > 0
    assert snapshot.item_count == len(items)


@pytest.mark.asyncio
async def test_send_reports_token_count_without_budget(tmp_path):
    """Default chat (no token_budget) still gets a context meter."""
    layer, model, provider = _fake_layer(_stop_response("Done."))
    sw = _open_woven(Path(tmp_path), layer, model, _echo_registry())
    await sw.open()
    try:
        conv_id = await sw.start_conversation("hi")
        result = await sw.send(conv_id, "hello")
        assert result.exit_reason == "completed"
        assert result.token_count > 0
        assert result.token_budget == 0  # unbounded
    finally:
        await sw.close()


@pytest.mark.asyncio
async def test_send_token_budget_reports_percent_math(tmp_path):
    """With a budget, the result carries the same numbers the assembler used."""
    from weaver.agent.tools import ToolExecutionPolicy

    layer, model, provider = _fake_layer(_stop_response("Done."))
    sw = SessionWeave(
        Path(tmp_path) / ".weaver" / "state",
        model_layer=layer,
        model=model,
        system_prompt="You are Weaver.",
        tool_registry=_echo_registry(),
        active_tools=("echo",),
        execution_policy=ToolExecutionPolicy.read_only(),
        token_budget=8,
    )
    await sw.open()
    try:
        conv_id = await sw.start_conversation("hi")
        result = await sw.send(conv_id, "hello")
        assert result.exit_reason == "completed"
        assert result.token_budget == 8
        assert result.token_count > 0
        assert result.token_count <= result.token_budget  # chat fits, no drop
    finally:
        await sw.close()


@pytest.mark.asyncio
async def test_list_recent_turns_returns_runs_newest_first(tmp_path):
    """History screen data: two turns, owner texts, completed status."""
    layer, model, provider = _fake_layer(
        _stop_response("One."),
        _stop_response("Two."),
    )
    sw = _open_woven(Path(tmp_path), layer, model, _echo_registry())
    await sw.open()
    try:
        conv_id = await sw.start_conversation("first hello")
        await sw.send(conv_id, "second hello")

        entries = await sw.list_recent_turns(conv_id)
        assert [e["owner_text"] for e in entries] == ["second hello", "first hello"]
        assert [e["status"] for e in entries] == ["completed", "—"]
        assert all(e["run_id"] for e in entries)

        entries = await sw.list_recent_turns(conv_id, limit=1)
        assert [e["owner_text"] for e in entries] == ["second hello"]
    finally:
        await sw.close()


@pytest.mark.asyncio
async def test_send_on_delta_raising_callback_does_not_fail_turn(tmp_path):
    """A broken preview callback is logged and swallowed; the turn lives."""

    async def explode(delta: str) -> None:
        raise RuntimeError("preview widget exploded")

    layer, model, provider = _fake_layer(_stop_response("Done."))
    sw = _open_woven(Path(tmp_path), layer, model, _echo_registry())
    await sw.open()
    try:
        conv_id = await sw.start_conversation("hi")
        result = await sw.send(conv_id, "hello", on_delta=explode)
        assert result.exit_reason == "completed"
        assert result.final_text == "Done."
    finally:
        await sw.close()
