"""Plan 033 patch 3: a turn that read but could not publish still answers
the reader honestly, and the prompt says to admit a scene it cannot find.

Run from the repository root, after patch 2:

    uv run python deliverables/033-every-turn-answers/patches/p3_gap_answer.py

All or nothing: every old text must match exactly once.

What changes for the reader:
- A turn that would end with "The model returned an unsafe response." or
  a step limit now publishes HONEST_GAP_ANSWER instead. Provider errors,
  persistence errors, interruptions, and a reply from the wrong model
  still fail as before. The run is recorded as completed, with
  `rescued_from` naming the check, so it stays countable.
- The web prompt gains <when_you_cannot_find_it>: say first that the
  scene was not found; never present a different scene as the answer.

`run_turn` takes the gap answer as an opt-in parameter (default None), so
every existing failure test keeps its meaning; the product's runner turns
it on.
"""

from __future__ import annotations

EDITS: list[tuple[str, str, str]] = []
NEW_FILES: dict[str, str] = {}
TURN = "src/weaver/agent/turn.py"


def edit(path: str, old: str, new: str) -> None:
    EDITS.append((path, old, new))


# The reader-facing text (owner approves it at admission). No em dash.
edit(
    TURN,
    """FINAL_ANSWER_INSTRUCTION = (""",
    """# Plan 033: what the reader sees when a turn read but could not publish
# an answer (owner-approved wording; no em dash).
HONEST_GAP_ANSWER = (
    "I couldn't pin that down in the chapters I opened, and I'd rather not "
    "guess. Tell me roughly when it happens, or a name from the scene, and "
    "I'll look again."
)
FINAL_ANSWER_INSTRUCTION = (""",
)
edit(
    TURN,
    """    error_category: str = ""
    raw_stop_reason: str = ""
""",
    """    error_category: str = ""
    raw_stop_reason: str = ""
    # Plan 033: the check a failing turn was rescued from by the gap
    # answer (recorded in the run_completed reading).
    rescued_from: str = ""
""",
)
edit(
    TURN,
    """            "thinking": self.thinking,
        }
""",
    """            "thinking": self.thinking,
            **({"rescued_from": self.rescued_from} if self.rescued_from else {}),
        }
""",
)
edit(
    TURN,
    """    max_chapter: int | None = None,
) -> TurnResult:
""",
    """    max_chapter: int | None = None,
    # Plan 033: when set, a turn that would fail on a protocol check or a
    # step limit publishes this text instead (see the end of the loop).
    gap_answer: str | None = None,
) -> TurnResult:
""",
)
edit(
    TURN,
    """
    return TurnResult(
        turn_id=turn_id,
        exit_reason=exit_reason,
""",
    """
    # Plan 033: a turn that read but could not publish still answers the
    # reader honestly (35 of 372 Plan 032 turns gave the reader nothing).
    # Provider, persistence, and interruption failures, and a reply from
    # the wrong model, are never covered over.
    rescued_from = ""
    if (
        gap_answer
        and not cancel_event.is_set()
        and (
            exit_reason == TurnExitReason.LIMIT_REACHED
            or (
                exit_reason == TurnExitReason.MODEL_FAILED
                and error_category.startswith("protocol_")
                and error_category != "protocol_model_mismatch"
            )
        )
    ):
        gap = AssistantMessage(
            message_id=_message_id(),
            turn_id=turn_id,
            content=gap_answer,
            tool_calls=(),
            status="complete",
            reasoning_content="",
        )
        persisted, published = await persist_answer(gap, (gap_answer,))
        if persisted and published:
            rescued_from = error_category or exit_reason.value
            logger.warning("turn rescued with the gap answer (from %s)", rescued_from)
            exit_reason = TurnExitReason.COMPLETED
            safe_failure = ""
            final_text = gap_answer
            completed_response = True

    return TurnResult(
        turn_id=turn_id,
        exit_reason=exit_reason,
""",
)
edit(
    TURN,
    """        error_category=error_category,
        raw_stop_reason=raw_stop_reason,
        skill_ids=""",
    """        error_category=error_category,
        raw_stop_reason=raw_stop_reason,
        rescued_from=rescued_from,
        skill_ids=""",
)

# The product's runner turns the gap answer on.
RUNNER = "src/weaver/conversation/runner.py"
edit(
    RUNNER,
    """from weaver.agent.turn import (
    DeltaCallback,
""",
    """from weaver.agent.turn import (
    HONEST_GAP_ANSWER,
    DeltaCallback,
""",
)
edit(
    RUNNER,
    """            packet_builder=packet_builder,
            final_pass=final_pass,
        )
""",
    """            packet_builder=packet_builder,
            final_pass=final_pass,
            gap_answer=HONEST_GAP_ANSWER,
        )
""",
)

# The prompt: admit a scene you cannot find; never answer with another one.
edit(
    "src/weaver/chat_runtime.py",
    """    "evidence; never drop it because its chapters are not open this turn, "
    "re-open them instead.\\n"
    "</your_own_words>\\n"
    "\\n"
""",
    """    "evidence; never drop it because its chapters are not open this turn, "
    "re-open them instead.\\n"
    "</your_own_words>\\n"
    "\\n"
    "<when_you_cannot_find_it>\\n"
    "When the reader describes a scene and the passages you opened do not "
    "show it, say so first and plainly: you could not find that scene. Never "
    "offer a different scene as the answer to theirs, even a similar or a "
    "later one. You may mention a near match only after that, labelled as a "
    "guess (for example: not sure this is it, but...), and ask one short "
    "question that would help you find theirs, such as roughly when it "
    "happens or a name in it.\\n"
    "</when_you_cannot_find_it>\\n"
    "\\n"
""",
)

# The test helper passes the new parameter through (default keeps old tests).
edit(
    "tests/test_agent_turn.py",
    """    packet_builder=None,
    final_pass: bool = True,
):
    return await run_turn(""",
    """    packet_builder=None,
    final_pass: bool = True,
    gap_answer: str | None = None,
):
    return await run_turn(""",
)
edit(
    "tests/test_agent_turn.py",
    """        packet_builder=packet_builder,
        final_pass=final_pass,
    )


async def test_reader_boundary_note_reaches_every_model_call() -> None:""",
    """        packet_builder=packet_builder,
        final_pass=final_pass,
        gap_answer=gap_answer,
    )


async def test_reader_boundary_note_reaches_every_model_call() -> None:""",
)

NEW_FILES["tests/test_turn_gap_answer.py"] = '''"""Plan 033: a turn that read but could not publish answers honestly
instead of failing, and never hides a provider error, a cancel, or a reply
from the wrong model."""

from __future__ import annotations

import asyncio
import inspect
from dataclasses import replace

from tests.test_agent_turn import (
    _async_append,
    execute_turn,
    make_registry,
    model_response,
    scripted_layer,
    stop_response,
    tool_call,
    tool_response,
)
from weaver import ModelStopReason
from weaver.agent.errors import safe_error
from weaver.agent.turn import HONEST_GAP_ANSWER, TurnExitReason
from weaver.chat_runtime import web_system_prompt
from weaver.conversation.runner import ConversationRunner

GAP = "I could not find that scene."


def _duplicate_call_ids():
    first = tool_call("same-id", "echo", '{"message":"one"}')
    second = tool_call("same-id", "echo", '{"message":"two"}')
    return tool_response(first, second)


async def test_a_turn_that_cannot_publish_answers_with_the_gap_answer() -> None:
    starts = {}
    persisted = []
    layer, model, _ = scripted_layer(_duplicate_call_ids())

    result = await execute_turn(
        layer,
        model,
        registry=make_registry(starts),
        active_tools=("echo",),
        persist_message=_async_append(persisted),
        gap_answer=GAP,
    )

    assert result.exit_reason == TurnExitReason.COMPLETED
    assert result.final_text == GAP
    assert result.safe_failure == ""
    assert result.rescued_from == "protocol_unsafe_tool_calls"
    assert result.reading()["rescued_from"] == "protocol_unsafe_tool_calls"
    assert persisted[-1].content == GAP
    assert starts == {}  # the unsafe calls still never ran


async def test_without_a_gap_answer_the_turn_still_fails() -> None:
    layer, model, _ = scripted_layer(_duplicate_call_ids())

    result = await execute_turn(layer, model, active_tools=("echo",))

    assert result.exit_reason == TurnExitReason.MODEL_FAILED
    assert result.safe_failure == safe_error("model_protocol")
    assert "rescued_from" not in result.reading()


async def test_a_provider_error_is_never_covered_by_the_gap_answer() -> None:
    layer, model, _ = scripted_layer(
        model_response(stop_reason=ModelStopReason.ERROR, error_category="rate_limit")
    )

    result = await execute_turn(layer, model, gap_answer=GAP)

    assert result.exit_reason == TurnExitReason.MODEL_FAILED
    assert result.safe_failure == safe_error("model")
    assert result.final_text != GAP


async def test_a_cancelled_turn_is_never_covered_by_the_gap_answer() -> None:
    cancel = asyncio.Event()
    cancel.set()
    layer, model, _ = scripted_layer(stop_response("Hello."))

    result = await execute_turn(layer, model, cancel_event=cancel, gap_answer=GAP)

    assert result.exit_reason == TurnExitReason.INTERRUPTED
    assert result.final_text != GAP


async def test_a_reply_from_another_model_is_never_covered_by_the_gap_answer() -> None:
    layer, model, _ = scripted_layer(
        replace(stop_response("Hello."), model_id="another-model")
    )

    result = await execute_turn(layer, model, gap_answer=GAP)

    assert result.exit_reason == TurnExitReason.MODEL_FAILED
    assert result.error_category == "protocol_model_mismatch"
    assert result.final_text != GAP


def test_the_product_runner_turns_the_gap_answer_on() -> None:
    assert "gap_answer=HONEST_GAP_ANSWER" in inspect.getsource(ConversationRunner)


def test_the_gap_answer_is_honest_and_has_no_em_dash() -> None:
    assert "couldn't pin that down" in HONEST_GAP_ANSWER
    assert "\\u2014" not in HONEST_GAP_ANSWER


def test_the_prompt_says_to_admit_a_scene_it_cannot_find() -> None:
    prompt = web_system_prompt("You are Weaver.", 3232, search_through=3127)
    assert "<when_you_cannot_find_it>" in prompt
    assert "Never offer a different scene as the answer to theirs" in prompt
'''


if __name__ == "__main__":
    from _apply import run

    run(EDITS, NEW_FILES)
