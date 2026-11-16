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


def test_the_last_resort_trims_quotes_then_sentences_with_unopened_citations() -> None:
    """Review finding 10: the claim goes with its unopened citation, so
    nothing is left standing as canon without a source."""
    from weaver.agent.turn import _fallback_variants

    answer = (
        "The ring closes on him (ch. 2692). He breaks out (ch. 2716).\n"
        "> a long quoted passage\n"
        "That is the whole fight."
    )

    variants = _fallback_variants(answer, (2692,))

    assert len(variants) == 2
    assert "> a long" not in variants[0] and "2716" in variants[0]
    assert variants[1] == "The ring closes on him (ch. 2692).\nThat is the whole fight."
    assert _fallback_variants("Nothing to trim (ch. 2692).", (2692,)) == ()


def test_the_last_resort_drops_an_unopened_quote_instead_of_the_answer() -> None:
    """Plan 034: an unopened quote is repairable without losing the answer.

    The 033.7 fanfic turn failed on an unopened quote after the repair and
    fell back to the gap answer. Dropping just the quote leaves a publishable
    variant.
    """
    from weaver.agent.answer import build_answer_blueprint, inspect_publication
    from weaver.agent.turn import _fallback_variants

    packet = (
        "--- chapter 1 lines 1-12 ---\n"
        "The coffee had cost most of his savings, the real deal.\n\n"
        "--- evidence board ---\n"
        "direct sources: chapter 1 lines 1-12\n"
    )
    answer = (
        'The coffee "had cost most of his savings, the real deal" (ch. 1). '
        'He said "you checked every mirror but the one in your hand" (ch. 1).'
    )
    variants = _fallback_variants(answer, (1,), packet)
    assert variants
    blueprint = build_answer_blueprint(
        question="what did he say?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=packet,
    )
    clean = [variant for variant in variants if not inspect_publication(variant, blueprint, packet)]
    assert clean, variants


def test_the_last_resort_leaves_invented_dialogue_alone_without_the_quote_finding() -> None:
    """Plan 034 review: prose answers skip the unopened-quote check, so the
    quote drop must not run for them or it deletes invented dialogue."""
    from weaver.agent.turn import _fallback_variants

    packet = (
        "--- chapter 1 lines 1-12 ---\n"
        "The coffee had cost most of his savings, the real deal.\n\n"
        "--- evidence board ---\n"
        "direct sources: chapter 1 lines 1-12\n"
    )
    answer = (
        'Invented scene. "You came back after all this time," she said. '
        "He left the room (ch. 9)."
    )
    variants = _fallback_variants(
        answer, (1,), packet, fix_unopened_quote=False
    )
    assert variants
    for variant in variants:
        assert "came back after all this time" in variant


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


def test_a_correction_of_the_private_draft_is_dropped() -> None:
    from weaver.agent.answer import drop_draft_edit_notes

    draft = "Start with ch. 2439. She fights as a Supreme Titan (ch. 2439)."
    final = (
        "Start with ch. 2439. She fights as the Changing Star (ch. 2439).\n\n"
        "Also, small correction on my end: I called her a Supreme Titan there, "
        "so read it with that straight. Every finger is a link."
    )

    cleaned = drop_draft_edit_notes(final, draft)

    assert "correction" not in cleaned
    assert "Supreme Titan" not in cleaned
    assert "Every finger is a link." in cleaned
    assert "Changing Star (ch. 2439)" in cleaned


def test_a_correction_the_draft_already_made_stays() -> None:
    from weaver.agent.answer import drop_draft_edit_notes

    draft = "Correction on my end: earlier I said ch. 118. It is ch. 344."
    final = "Correction on my end: earlier I said ch. 118. It is ch. 344 (ch. 344)."

    assert drop_draft_edit_notes(final, draft) == final


def test_an_answer_with_no_correction_is_unchanged() -> None:
    from weaver.agent.answer import drop_draft_edit_notes

    final = "He said it there, in the hall (ch. 12). She never answered."
    assert drop_draft_edit_notes(final, "draft") == final


async def test_the_final_reread_never_announces_fixing_the_draft() -> None:
    provider = FakeModelProvider(
        "test-provider",
        models=(_spec(),),
        responses=(
            _response(
                ModelStopReason.TOOL_USE,
                tool_calls=(ModelToolCall("t1", "read_chapters", '{"chapter": 104}'),),
            ),
            _response(ModelStopReason.STOP, content="He was a Saint (ch. 104)."),
            _response(
                ModelStopReason.STOP,
                content=(
                    "He was a Shadow (ch. 104). Small correction on my end: "
                    "I called him a Saint there. Read it again."
                ),
            ),
        ),
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    async def packet_builder(results, draft):
        return (
            "--- chapter 104, lines 1-40 ---\nHe was a Shadow.\n\n"
            "--- evidence board ---\ndirect sources: chapter 104 lines 1-40\n"
        )

    result = await run_turn(
        session_id="s",
        turn_id="now",
        model_layer=layer,
        model=_spec(),
        system_prompt="You are Weaver.",
        history=[UserMessage(turn_id="now", content="what was he?")],
        tool_registry=_reader_registry(),
        active_tools=("read_chapters",),
        execution_policy=ToolExecutionPolicy.read_only(),
        cancel_event=asyncio.Event(),
        packet_builder=packet_builder,
        final_pass=True,
    )

    assert result.exit_reason == TurnExitReason.COMPLETED
    assert result.final_text == "He was a Shadow (ch. 104). Read it again."


def test_the_last_resort_can_drop_an_uncited_recall() -> None:
    from weaver.agent.turn import _fallback_variants

    answer = (
        "The mechanic is refusal (ch. 2439). Now think back to the first "
        "Nightmare, back when the sky was full of hands. That is the fun part."
    )

    variants = _fallback_variants(answer, (2439,))

    assert variants[-1] == "The mechanic is refusal (ch. 2439). That is the fun part."


def test_recalled_passages_go_first_and_are_capped() -> None:
    """Review finding 4: the packet trims from the front, so this turn's
    reads come last and keep their room."""
    from weaver.agent.tools import ToolResult
    from weaver.agent.turn import MAX_RECALLED_PASSAGES, _recalled_results

    earlier = tuple(_evidence(2692, start, start + 20) for start in range(1, 200, 21))
    now = [ToolResult(ok=True, result={"durable_evidence": _evidence(2697)})]

    recalled = _recalled_results(earlier, "It ends here (ch. 2692).", now)

    assert len(recalled) == MAX_RECALLED_PASSAGES
    # The newest earlier windows are the ones kept.
    assert recalled[-1].result["durable_evidence"] == earlier[-1]


def test_read_on_starts_after_the_chapter_the_answer_is_about() -> None:
    """Review finding 9: scattered reads must not send it to the wrong place."""
    from weaver.agent.turn import _chapter_to_read_next

    assert _chapter_to_read_next("No verdict on the page (ch. 5).", {5, 2000}, None) == 6


def test_an_answer_that_is_only_a_draft_note_empties() -> None:
    from weaver.agent.answer import drop_draft_edit_notes

    final = "I misspoke there. He wins it (ch. 900)."
    assert drop_draft_edit_notes(final, "He wins it (ch. 900).") == "He wins it (ch. 900)."
    assert drop_draft_edit_notes("I misspoke.", "draft") == ""


async def test_a_correction_stays_when_the_reader_challenged_the_last_answer() -> None:
    """Review finding 5: a pushback turn may owe the reader a correction."""
    provider = FakeModelProvider(
        "test-provider",
        models=(_spec(),),
        responses=(
            _response(
                ModelStopReason.TOOL_USE,
                tool_calls=(ModelToolCall("t1", "read_chapters", '{"chapter": 104}'),),
            ),
            _response(ModelStopReason.STOP, content="He was a Shadow (ch. 104)."),
            _response(
                ModelStopReason.STOP,
                content="Fair push, I misspoke there. He was a Shadow (ch. 104).",
            ),
        ),
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    async def packet_builder(results, draft):
        return (
            "--- chapter 104, lines 1-40 ---" + chr(10) + "He was a Shadow." + chr(10) * 2
            + "--- evidence board ---" + chr(10) + "direct sources: chapter 104 lines 1-40" + chr(10)
        )

    history = [
        UserMessage(turn_id="earlier", content="what was he?"),
        AssistantMessage(turn_id="earlier", content="He was a Saint (ch. 104)."),
        UserMessage(turn_id="now", content="that's wrong, he was not a saint"),
    ]
    result = await run_turn(
        session_id="s",
        turn_id="now",
        model_layer=layer,
        model=_spec(),
        system_prompt="You are Weaver.",
        history=history,
        tool_registry=_reader_registry(),
        active_tools=("read_chapters",),
        execution_policy=ToolExecutionPolicy.read_only(),
        cancel_event=asyncio.Event(),
        packet_builder=packet_builder,
        final_pass=True,
    )

    assert result.final_text == "Fair push, I misspoke there. He was a Shadow (ch. 104)."


def test_a_capitalised_citation_does_not_split_a_recall() -> None:
    """Review finding 6."""
    from weaver.agent.answer import uncited_recalls

    assert uncited_recalls("Back when he was a slave, he lied (Ch. 900).") == ()
    assert (
        uncited_recalls("He lied (ch. 900). I remember when I first read that scene.")
        == ()
    )
