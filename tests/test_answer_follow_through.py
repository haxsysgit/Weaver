"""Plan 033.6 slice 4: Weaver answers from what the conversation already read.

History in these tests goes through the real save and reload path
(`message_to_item` then `items_to_messages`), because the 033.5 failure was
a credit function tested only on the in-memory shape: on stored history it
credited 0 of 204 reads.
"""

import asyncio

from weaver import (
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelToolCall,
)
from weaver.agent.messages import (
    AssistantMessage,
    ToolCallMessage,
    ToolResultMessage,
    UserMessage,
)
from weaver.agent.tools import (
    EffectKind,
    ToolDefinition,
    ToolExecutionPolicy,
    ToolRegistry,
)
from weaver.agent.turn import (
    TurnExitReason,
    _earlier_evidence,
    _earlier_opened_chapters,
    run_turn,
)
from weaver.conversation.items import items_to_messages, message_to_item


def _evidence(chapter: int, start: int = 1, end: int = 40, kind: str = "novel") -> dict:
    return {
        "source_kind": kind,
        "chapter": chapter,
        "line_start": start,
        "line_end": end,
        "source_hash": f"hash-{chapter}",
        "passage_handle": f"{kind}:{chapter:04d}:{start}-{end}",
    }


def _read(call_id: str, evidence: dict, *, ok: bool = True) -> list:
    """One earlier read, as the turn records it in memory."""
    return [
        AssistantMessage(
            turn_id="earlier",
            content="",
            tool_calls=(ModelToolCall(call_id, "read_chapters", "{}"),),
        ),
        ToolCallMessage(
            turn_id="earlier",
            call_id=call_id,
            tool_name="read_chapters",
            arguments_json="{}",
        ),
        ToolResultMessage(
            turn_id="earlier",
            call_id=call_id,
            tool_name="read_chapters",
            ok=ok,
            result={"durable_evidence": evidence, "result": {"text": "private"}},
        ),
    ]


def stored(messages: list) -> list:
    """Save and reload, exactly as the conversation runner does."""
    items = [
        message_to_item(
            message,
            conversation_id="c",
            run_id="r",
            turn_id=getattr(message, "turn_id", None) or "earlier",
            sequence=index,
            created_at="2026-11-05T00:00:00+00:00",
        )
        for index, message in enumerate(messages)
    ]
    return items_to_messages(items)


def test_earlier_reads_are_credited_on_stored_history() -> None:
    history = stored(
        [
            UserMessage(turn_id="earlier", content="who was the tomb for?"),
            *_read("c1", _evidence(116)),
            *_read("c2", _evidence(592)),
            *_read("c3", _evidence(2487)),
            *_read("c4", _evidence(800, kind="notebook")),
            AssistantMessage(turn_id="earlier", content="It was for him (ch. 116)."),
        ]
    )

    assert _earlier_opened_chapters(history, None) == (116, 592, 2487)
    assert _earlier_opened_chapters(history, 1000) == (116, 592)


def test_a_failed_earlier_read_is_not_credited() -> None:
    messages = _read("c1", _evidence(116))
    failed = messages[-1]
    messages[-1] = ToolResultMessage(
        turn_id="earlier",
        call_id=failed.call_id,
        tool_name="read_chapters",
        ok=False,
        result={},
        error_code="tool_failed",
        error="The tool could not be completed.",
    )

    assert _earlier_opened_chapters(stored(messages), None) == ()


def test_earlier_evidence_keeps_the_passage_records() -> None:
    history = stored([*_read("c1", _evidence(116, 3, 81)), *_read("c2", _evidence(116, 3, 81))])

    records = _earlier_evidence(history, None)

    assert [record["passage_handle"] for record in records] == ["novel:0116:3-81"]


def _spec() -> ModelSpec:
    return ModelSpec(
        provider_id="test-provider",
        model_id="test-reader",
        api_family="test",
        default_output_tokens=777,
        supports_reasoning=False,
    )


def _response(stop: ModelStopReason, content=None, tool_calls=()) -> ModelResponse:
    return ModelResponse(
        assistant_message=ModelMessage(
            role="assistant", content=content, tool_calls=tuple(tool_calls)
        ),
        provider_id="test-provider",
        model_id="test-reader",
        stop_reason=stop,
        raw_stop_reason="stop" if stop == ModelStopReason.STOP else "tool_calls",
    )


def _reader_registry() -> ToolRegistry:
    async def read_chapters(arguments, context):
        chapter = int(arguments["chapter"])
        return {
            "ok": True,
            "durable_evidence": _evidence(chapter),
            "result": {"text": "private passage"},
        }

    registry = ToolRegistry()
    registry.register(
        ToolDefinition(
            name="read_chapters",
            description="Open a chapter passage",
            parameters={
                "type": "object",
                "properties": {"chapter": {"type": "integer"}},
                "required": ["chapter"],
            },
            handler=read_chapters,
            effect_kind=EffectKind.READ,
        )
    )
    return registry


async def test_a_cited_earlier_passage_is_reopened_into_the_packet() -> None:
    history = stored(
        [
            UserMessage(turn_id="earlier", content="paint the arena for me"),
            *_read("c1", _evidence(2692, 3, 81)),
            AssistantMessage(turn_id="earlier", content="The arena is a ring (ch. 2692)."),
        ]
    )
    provider = FakeModelProvider(
        "test-provider",
        models=(_spec(),),
        responses=(
            _response(
                ModelStopReason.TOOL_USE,
                tool_calls=(ModelToolCall("t1", "read_chapters", '{"chapter": 2697}'),),
            ),
            _response(
                ModelStopReason.STOP,
                content="The ring from before (ch. 2692) is where it ends (ch. 2697).",
            ),
        ),
    )
    layer = ModelLayer()
    layer.register_provider(provider)
    packets: list[list[int]] = []

    async def packet_builder(results, draft):
        packets.append(
            sorted(
                int(result.result["durable_evidence"]["chapter"])
                for result in results
                if result.result and "durable_evidence" in result.result
            )
        )
        return (
            "--- chapter 2692, lines 3-81 ---\nThe ring.\n\n"
            "--- chapter 2697, lines 1-40 ---\nThe end.\n\n"
            "--- evidence board ---\n"
            "direct sources: chapter 2692 lines 3-81; chapter 2697 lines 1-40\n"
        )

    result = await run_turn(
        session_id="s",
        turn_id="now",
        model_layer=layer,
        model=_spec(),
        system_prompt="You are Weaver.",
        history=[*history, UserMessage(turn_id="now", content="i still can't picture it")],
        tool_registry=_reader_registry(),
        active_tools=("read_chapters",),
        execution_policy=ToolExecutionPolicy.read_only(),
        cancel_event=asyncio.Event(),
        packet_builder=packet_builder,
        final_pass=False,
    )

    assert result.exit_reason == TurnExitReason.COMPLETED
    assert packets and packets[0] == [2692, 2697]


async def test_an_uncited_earlier_passage_is_not_reopened() -> None:
    history = stored([*_read("c1", _evidence(116)), *_read("c2", _evidence(2692))])
    provider = FakeModelProvider(
        "test-provider",
        models=(_spec(),),
        responses=(
            _response(
                ModelStopReason.TOOL_USE,
                tool_calls=(ModelToolCall("t1", "read_chapters", '{"chapter": 2697}'),),
            ),
            _response(ModelStopReason.STOP, content="It ends here (ch. 2697)."),
        ),
    )
    layer = ModelLayer()
    layer.register_provider(provider)
    packets: list[list[int]] = []

    async def packet_builder(results, draft):
        packets.append(
            sorted(
                int(result.result["durable_evidence"]["chapter"])
                for result in results
                if result.result and "durable_evidence" in result.result
            )
        )
        return (
            "--- chapter 2697, lines 1-40 ---\nThe end.\n\n"
            "--- evidence board ---\ndirect sources: chapter 2697 lines 1-40\n"
        )

    await run_turn(
        session_id="s",
        turn_id="now",
        model_layer=layer,
        model=_spec(),
        system_prompt="You are Weaver.",
        history=[*history, UserMessage(turn_id="now", content="how does it end?")],
        tool_registry=_reader_registry(),
        active_tools=("read_chapters",),
        execution_policy=ToolExecutionPolicy.read_only(),
        cancel_event=asyncio.Event(),
        packet_builder=packet_builder,
        final_pass=False,
    )

    assert packets[0] == [2697]


def test_the_last_resort_trims_quotes_then_quotes_and_unopened_citations() -> None:
    from weaver.agent.turn import _fallback_variants

    answer = (
        "The ring closes on him (ch. 2692) and he breaks out (ch. 2716).\n"
        "> a long quoted passage\n"
        "That is the whole fight."
    )

    variants = _fallback_variants(answer, (2692,))

    assert len(variants) == 2
    assert "> a long" not in variants[0] and "2716" in variants[0]
    assert "> a long" not in variants[1] and "2716" not in variants[1]
    assert "(ch. 2692)" in variants[1]
    assert _fallback_variants("Nothing to trim (ch. 2692).", (2692,)) == ()


def test_a_draft_that_stops_at_a_break_is_sent_to_the_next_chapter() -> None:
    from weaver.agent.turn import _chapter_to_read_next

    opened = {2689, 2693, 2694, 2699}

    assert _chapter_to_read_next("No verdict on the page (ch. 2699).", opened, None) == 2700
    assert _chapter_to_read_next("The passage stops right there.", opened, None) == 2700
    assert _chapter_to_read_next("The fight never happens on screen.", opened, None) == 2700
    # A finished account, or a reader boundary, does not send it on.
    assert _chapter_to_read_next("He wins it (ch. 2699).", opened, None) is None
    assert _chapter_to_read_next("No verdict on the page.", opened, 2699) is None
    assert _chapter_to_read_next("No verdict on the page.", set(), None) is None


async def test_the_turn_reads_on_once_before_saying_the_outcome_is_not_shown() -> None:
    provider = FakeModelProvider(
        "test-provider",
        models=(_spec(),),
        responses=(
            _response(
                ModelStopReason.TOOL_USE,
                tool_calls=(ModelToolCall("t1", "read_chapters", '{"chapter": 2699}'),),
            ),
            _response(ModelStopReason.STOP, content="No verdict on the page (ch. 2699)."),
            _response(
                ModelStopReason.TOOL_USE,
                tool_calls=(ModelToolCall("t2", "read_chapters", '{"chapter": 2700}'),),
            ),
            _response(ModelStopReason.STOP, content="He wins it (ch. 2700)."),
        ),
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    async def packet_builder(results, draft):
        return (
            "--- chapter 2700, lines 1-40 ---\nHe wins.\n\n"
            "--- evidence board ---\ndirect sources: chapter 2699 lines 1-40; "
            "chapter 2700 lines 1-40\n"
        )

    result = await run_turn(
        session_id="s",
        turn_id="now",
        model_layer=layer,
        model=_spec(),
        system_prompt="You are Weaver.",
        history=[UserMessage(turn_id="now", content="who won the fight?")],
        tool_registry=_reader_registry(),
        active_tools=("read_chapters",),
        execution_policy=ToolExecutionPolicy.read_only(),
        cancel_event=asyncio.Event(),
        packet_builder=packet_builder,
        final_pass=False,
        tool_budget=4,
    )

    assert result.final_text == "He wins it (ch. 2700)."
    notes = [
        message.content or ""
        for message in provider.calls[2].request.messages
        if message.role in ("user", "system")
    ]
    assert any("chapter 2700" in note for note in notes)
