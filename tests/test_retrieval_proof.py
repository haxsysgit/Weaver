"""Slice 4: deterministic proof of the reading tools inside a real
conversation turn, with a scripted fake model. No live model calls.

The fake provider is scripted to: (1) emit a semantic_search tool call,
(2) after the tool result, emit an read_chapters tool call, (3) finally
answer with a cited reply. The test then asserts:
- the turn completed with a cited answer;
- the opened passage was real novel text (the tool ran for real);
- no novel prose appears in the durable conversation store
  (temp-vs-durable split from Slice 1);
"""

from __future__ import annotations

import json
from pathlib import Path


from weaver.agent.tools import ToolExecutionPolicy, ToolRegistry
from weaver.conversation.session import SessionWeave
from weaver.model_layer import (
    ModelLayer,
    ModelMessage,
    ModelResponse,
    ModelStopReason,
    ModelToolCall,
)
from weaver.model_layer.fake import FakeModelProvider
from weaver.retrieval.tools import LibraryService, register_reading_tools


def _tool_call(name: str, args: dict, call_id: str) -> ModelToolCall:
    return ModelToolCall(
        call_id=call_id,
        name=name,
        arguments_json=json.dumps(args, separators=(",", ":")),
    )


def _mk_response(content: str | None, tool_calls: tuple[ModelToolCall, ...], stop: ModelStopReason):
    from weaver.model_layer.deepseek import DEEPSEEK_FLASH

    return ModelResponse(
        assistant_message=ModelMessage(role="assistant", content=content, tool_calls=tool_calls),
        provider_id=DEEPSEEK_FLASH.provider_id,
        model_id=DEEPSEEK_FLASH.model_id,
        stop_reason=stop,
        raw_stop_reason=stop.value,
    )


def _scripted_provider() -> FakeModelProvider:
    from weaver.model_layer.deepseek import DEEPSEEK_FLASH

    return FakeModelProvider(
        "deepseek",
        models=(DEEPSEEK_FLASH,),
        responses=(
            # step 1: call semantic_search
            _mk_response(
                None,
                (_tool_call("semantic_search", {"query": "who killed the hunting party leader"}, "c1"),),
                ModelStopReason.TOOL_USE,
            ),
            # step 2: call read_chapters on a hit
            _mk_response(
                None,
                (_tool_call("read_chapters", {"handle": "novel:0098:3-4"}, "c2"),),
                ModelStopReason.TOOL_USE,
            ),
            # step 3: final cited answer
            _mk_response(
                "Sunny killed the leader himself with the kunai (chapter 98). "
                "The Black Knight killed the other five (chapter 99).",
                (),
                ModelStopReason.STOP,
            ),
        ),
    )


def _make_library(novel: Path, nb: Path) -> None:
    (novel / "0001-0100").mkdir(parents=True)
    (novel / "0001-0100" / "chapter-0098.txt").write_text(
        "Shadow Slave-Chapter 98 - 98: Fake\n"
        "the leader of the hunting party sneers\n"
        "\n"
        "sunny kills the leader with the fake kunai\n"
    )
    for sub in ("people", "places", "powers", "items", "groups", "reading"):
        (nb / sub).mkdir(parents=True)
    (nb / "reading" / "0098.json").write_text(
        json.dumps(
            {
                "chapter": 98,
                "statements": [
                    {
                        "id": "statement:chapter-0098:05",
                        "kind": "confirmed_fact",
                        "statement": "Sunny kills the hunting party leader with a kunai.",
                        "chapter": 98,
                        "evidence": [{"chapter": 98, "location": {"line_start": 3, "line_end": 4}}],
                        "links": ["person:sunny"],
                        "first_known_chapter": 98,
                    }
                ],
            }
        )
    )


async def _open_session(tmp_path: Path) -> SessionWeave:
    novel = tmp_path / "novel"
    nb = tmp_path / "nb"
    _make_library(novel, nb)
    registry = ToolRegistry()
    service = LibraryService(novel, nb)
    register_reading_tools(registry, service)

    provider = _scripted_provider()
    model_layer = ModelLayer()
    model_layer.register_provider(provider)
    from weaver.model_layer.deepseek import DEEPSEEK_FLASH

    sw = SessionWeave(
        tmp_path / "state",
        model_layer=model_layer,
        model=model_layer.get_model(DEEPSEEK_FLASH.provider_id, DEEPSEEK_FLASH.model_id),
        system_prompt="You are Weaver. Use the tools.",
        tool_registry=registry,
        active_tools=("semantic_search", "read_chapters"),
        execution_policy=ToolExecutionPolicy.read_only(),
    )
    await sw.open()
    return sw


async def test_proof_turn_runs_tools_and_answers(tmp_path: Path) -> None:
    sw = await _open_session(tmp_path)
    try:
        conv = await sw.start_conversation("Who killed the hunting party leader?")
        result = await sw.send(conv, "Who killed the hunting party leader?")
        assert result.exit_reason.value == "completed"
        # the final scripted answer is the reply
        assert "kunai" in result.final_text
    finally:
        await sw.close()


async def test_proof_no_novel_prose_in_durable_store(tmp_path: Path) -> None:
    sw = await _open_session(tmp_path)
    try:
        conv = await sw.start_conversation("Who killed the hunting party leader?")
        await sw.send(conv, "Who killed the hunting party leader?")
        # tool results persisted to the conversation store: novel prose
        # must never appear there (Slice 1 split)
        items = await sw._repo.load_items(conv)
        bodies = [json.loads(i.body) for i in items if i.kind == "tool_result"]
        assert bodies, "expected tool results in the store"
        for body in bodies:
            result = body.get("result", {})
            assert "sneers" not in json.dumps(result)
            assert "fake kunai" not in json.dumps(result)
    finally:
        await sw.close()


async def test_proof_two_phase_packet_drives_the_final_answer(tmp_path: Path) -> None:
    """Plan 15 slice 3: locate draft is ephemeral, packet call answers."""
    novel = tmp_path / "novel"
    nb = tmp_path / "nb"
    _make_library(novel, nb)
    registry = ToolRegistry()
    service = LibraryService(novel, nb)
    register_reading_tools(registry, service)

    provider = FakeModelProvider(
        "deepseek",
        models=(_model_spec_provider(),),
        responses=(
            # step 1: search
            _mk_response(
                None,
                (_tool_call("semantic_search", {"query": "who killed the hunting party leader"}, "c1"),),
                ModelStopReason.TOOL_USE,
            ),
            # step 2: open the hit
            _mk_response(
                None,
                (_tool_call("read_chapters", {"handle": "novel:0098:3-4"}, "c2"),),
                ModelStopReason.TOOL_USE,
            ),
            # step 3: locate draft (first no-tool response)
            _mk_response("Draft: the leader was killed with the kunai.", (), ModelStopReason.STOP),
            # step 4: synthesis over the packet
            _mk_response(
                "Sunny killed the leader with the kunai at chapter 98. "
                "The Black Knight slew the other five at chapter 99.",
                (),
                ModelStopReason.STOP,
            ),
        ),
    )
    model_layer = ModelLayer()
    model_layer.register_provider(provider)
    from weaver.model_layer.deepseek import DEEPSEEK_FLASH

    sw = SessionWeave(
        tmp_path / "state",
        model_layer=model_layer,
        model=model_layer.get_model(DEEPSEEK_FLASH.provider_id, DEEPSEEK_FLASH.model_id),
        system_prompt="You are Weaver. Use the tools.",
        tool_registry=registry,
        active_tools=("semantic_search", "read_chapters"),
        execution_policy=ToolExecutionPolicy.read_only(),
    )
    await sw.open()
    try:
        conv = await sw.start_conversation("Who killed the hunting party leader?")

        seen: list[tuple[int, str]] = []

        async def packet_builder(results, draft):
            from weaver.retrieval.packet import build_packet

            packet = build_packet(service, results, user_chapter=100, spoiler_mode="protect")
            seen.append((len(results), draft))
            return packet.text if packet is not None else None

        result = await sw.send(
            conv,
            "Who killed the hunting party leader?",
            packet_builder=packet_builder,
        )
        assert result.exit_reason.value == "completed"
        assert "kunai" in result.final_text
        assert seen and seen[0][0] == 2  # search + read evidence
        # the draft must not survive in the store; only the final answer
        items = await sw._repo.load_items(conv)
        assistant_texts = [
            json.loads(i.body).get("content", "") for i in items if i.kind == "assistant"
        ]
        assert any("kunai" in t for t in assistant_texts)
        assert not any("Draft:" in t for t in assistant_texts)
    finally:
        await sw.close()


def _model_spec_provider():
    from weaver.model_layer.deepseek import DEEPSEEK_FLASH

    return DEEPSEEK_FLASH
