"""One bounded Weaver model and tool turn."""

from __future__ import annotations

import asyncio
import json
import logging
import re
import time
import uuid
from collections.abc import Awaitable
from dataclasses import dataclass, field, replace
from enum import Enum
from typing import Callable

from weaver.agent.errors import CANCELLED, safe_error, safe_tool_error
from weaver.agent.answer import (
    AnswerBlueprint,
    PublicationFinding,
    build_answer_blueprint,
    build_repair_instruction,
    build_spoiler_boundary_answer,
    format_answer_blueprint,
    has_spoiler_finding,
    strip_unsupported_citations,
    cited_chapters,
    drop_draft_edit_notes,
    drop_unsupported_sentences,
    drop_unopened_quotes,
    uncited_recalls,
    inspect_publication,
    unopened_text_claims,
)
from weaver.agent.messages import (
    AssistantMessage,
    ConversationMessage,
    ToolCallMessage,
    ToolResultMessage,
    UserMessage,
    project_messages,
)
from weaver.retrieval.packet import MAX_OPENED_PASSAGES
from weaver.agent.tools import (
    ToolExecutionContext,
    ToolExecutionPolicy,
    ToolRegistry,
    ToolResult,
)
from ..model_layer import (
    ModelLayer,
    ModelMessage,
    ModelReasoning,
    ModelRequest,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelStreamEventType,
    ModelToolCall,
)
from ..skills import (
    MAX_TOOL_BUDGET,
    format_skill_brief,
    plan_for_ids,
    plan_for_turn,
)
from ..model_layer.layer import ModelProtocolError
from ..model_layer.types import ReasoningEffort

logger = logging.getLogger(__name__)

# Plan 15 (2026-08-07): the tier budgets are ceilings, not targets. The
# absolute guardrail sits above all three tiers so a runaway loop can never
# exceed it; hermes uses 90 iterations, pi uses no cap at all.
_MAX_MODEL_STEPS = 100

# Plan 033.6: time limits. The provider client's timeout bounds each network
# read, so a stream that keeps sending a little never trips it (one 033.5
# turn ran 8 h 16 min). The slowest healthy whole turn on record took 111 s.
MODEL_CALL_DEADLINE_SECONDS = 120
TURN_DEADLINE_SECONDS = 240
# A silent stall gets this long past the call deadline to close the stream
# cooperatively before the task is cancelled.
_CALL_CLOSE_GRACE_SECONDS = 0.25


class _TurnBudget:
    """A tool budget the model can raise by loading a bigger skill."""

    def __init__(self, limit: int | None) -> None:
        self.limit = limit

    def raise_to(self, floor: int) -> None:
        if self.limit is None:
            return
        self.limit = max(self.limit, floor)


# Each skill names a thinking tier; Weaver picks it per question, the reader
# never does. DeepSeek's API only supports high and max for answers
# (low/medium clamp up to high), so ascended gets high and transcendent max.
# Plan 15 (owner 2026-08-08): search/locate steps do not need the tier's
# full reasoning effort. Thinking stays on for every call, but tool-call
# steps (and a no-packet final answer) drop to low so the search loop is
# fast; the final reading call keeps the tier effort (high/max).
# DeepSeek flash documents reasoning_effort low/high/max.
LOCATE_REASONING_EFFORT: ReasoningEffort = "low"

REASONING_TIERS: dict[str, ReasoningEffort] = {
    "ascended": "high",
    "transcendent": "max",
}
_EFFORT_RANK: dict[str | None, int] = {None: 0, "low": 1, "medium": 2, "high": 3, "max": 4}


def _deeper_effort(
    first: ReasoningEffort | None,
    second: ReasoningEffort | None,
) -> ReasoningEffort | None:
    """The deeper of two thinking efforts; None means thinking off."""
    return first if _EFFORT_RANK[first] >= _EFFORT_RANK[second] else second

# Per-step countdown reminders are noise at 50-90 step budgets; they only
# appear when the budget is running low or on the forced answer call.
BUDGET_REMINDER_THRESHOLD = 10

# Plan 008 carve-out (contract §2): the persist seam is async end-to-end.
# A sync callback that returns a coroutine would be treated as success by
# _persist and every message would silently never persist.
PersistCallback = Callable[[ConversationMessage], Awaitable[None]]

# Plan 010 Phase B seam: the turn loop can forward live text deltas to an
# async callback while still persisting only the final assistant message.
# Deltas are best-effort preview: a callback failure is logged and
# swallowed so a UI hiccup can never fail a turn.
DeltaCallback = Callable[[str], Awaitable[None]]
PacketBuilder = Callable[[list[ToolResult], str], Awaitable[str | None]]

# Plan 014 live-trial seam: the dispatch forwards tool activity
# (name, status, detail) so the surface can render search/open lines
# instead of the model narrating its steps. Best-effort like deltas.
ToolEventCallback = Callable[[str, str, str], Awaitable[None]]


@dataclass(frozen=True, slots=True)
class TurnBrief:
    """Ephemeral projection over canonical conversation messages."""

    actual_ask: str
    ask_message_id: str
    prior_reader_position: str
    prior_reader_message_id: str
    prior_weaver_position: str
    prior_weaver_message_id: str
    needs_prior_context: bool
    version_signals: tuple[str, ...]
    reader_challenges_prior_answer: bool
    # The reader's earlier messages, oldest first, so a short follow-up
    # ("huh", "prove it") is read against the question it follows.
    earlier_asks: tuple[str, ...] = ()


VERSION_SIGNAL_RE = re.compile(
    r"\b(current|prime|before|after|chapter\s+\d+\+?|at that point|back then)\b",
    re.IGNORECASE,
)
FOLLOW_UP_PREFIXES = (
    "and ",
    "but ",
    "how about ",
    "what about ",
    "why then ",
)
EARLIER_ASKS_KEPT = 6
DISAGREEMENT_MARKERS = (
    "you're wrong",
    "you are wrong",
    "i disagree",
    "that's wrong",
    "that is wrong",
    "no,",
)


def _compact_position(content: str, *, limit: int = 2_000) -> str:
    text = content.strip()
    if len(text) <= limit:
        return text
    half = limit // 2
    return text[:half].rstrip() + " [...] " + text[-half:].lstrip()


# Plan 033.7: the publishing call used to carry the current reader message
# alone, so on turn 2 it could not see the top ten it published on turn 0 and
# answered about a different turn's argument (Trial 9). It now carries the
# thread's own published exchanges, bounded: enough for a callback several
# turns back, small enough to stay a window rather than a transcript.
FINAL_HISTORY_TURNS = 4
FINAL_HISTORY_ANSWER_CHARS = 4_000
FINAL_HISTORY_ASK_CHARS = 1_000


def _final_history(
    history: list[ConversationMessage],
    current: ConversationMessage | None,
) -> list[ConversationMessage]:
    """The reader's asks and Weaver's published answers, oldest first.

    Only what the reader saw: tool calls and their results stay out, because
    their positions and evidence are already projected into the reading
    packet and the turn brief.
    """
    if current is None:
        return []
    published = [
        message
        for message in history
        if isinstance(message, (UserMessage, AssistantMessage))
        and message.content.strip()
        and not (isinstance(message, AssistantMessage) and message.tool_calls)
        and message.message_id != current.message_id
    ]
    # An exchange starts with the reader. A window cut mid-exchange would
    # open the publishing call with an answer to a question it cannot see.
    kept = published[-(FINAL_HISTORY_TURNS * 2) :]
    while kept and not isinstance(kept[0], UserMessage):
        kept = kept[1:]
    bounded = [
        replace(
            message,
            content=_compact_position(
                message.content,
                limit=(
                    FINAL_HISTORY_ASK_CHARS
                    if isinstance(message, UserMessage)
                    else FINAL_HISTORY_ANSWER_CHARS
                ),
            ),
        )
        for message in kept
    ]
    return [*bounded, current]


def _build_turn_brief(history: list[ConversationMessage]) -> TurnBrief:
    user_messages = [
        message
        for message in history
        if isinstance(message, UserMessage) and message.content.strip()
    ]
    assistant_messages = [
        message
        for message in history
        if isinstance(message, AssistantMessage) and message.content.strip()
    ]
    current = user_messages[-1] if user_messages else UserMessage()
    prior_reader = user_messages[-2] if len(user_messages) > 1 else UserMessage()
    prior_weaver = assistant_messages[-1] if assistant_messages else AssistantMessage()
    ask_casefolded = current.content.strip().casefold()
    reader_challenges = any(
        marker in ask_casefolded for marker in DISAGREEMENT_MARKERS
    )
    version_signals = tuple(
        dict.fromkeys(
            match.group(0).casefold()
            for match in VERSION_SIGNAL_RE.finditer(current.content)
        )
    )
    return TurnBrief(
        actual_ask=_compact_position(current.content),
        ask_message_id=current.message_id,
        prior_reader_position=_compact_position(prior_reader.content),
        prior_reader_message_id=prior_reader.message_id,
        prior_weaver_position=_compact_position(prior_weaver.content),
        prior_weaver_message_id=prior_weaver.message_id,
        needs_prior_context=(
            reader_challenges
            or ask_casefolded.startswith(FOLLOW_UP_PREFIXES)
            or any(prefix in ask_casefolded for prefix in FOLLOW_UP_PREFIXES)
        ),
        version_signals=version_signals,
        reader_challenges_prior_answer=reader_challenges,
        earlier_asks=tuple(
            _compact_position(message.content)
            for message in user_messages[:-1][-EARLIER_ASKS_KEPT:]
        ),
    )


def _earlier_evidence(
    history: list[ConversationMessage],
    max_chapter: int | None,
) -> tuple[dict, ...]:
    """Novel passages this conversation already opened, within the cap.

    Plan 033.6: a stored tool result holds only its evidence record, not the
    in-memory wrapper (`conversation/items.py`), and history is always
    reloaded from storage. Both shapes are read here; reading only the
    wrapper credited 0 of 204 reads in the 033.5 trials.
    """
    records: list[dict] = []
    seen: set[str] = set()
    for message in history:
        if not isinstance(message, ToolResultMessage) or not message.ok:
            continue
        result = message.result or {}
        evidence = result.get("durable_evidence", result)
        if not isinstance(evidence, dict) or evidence.get("source_kind") != "novel":
            continue
        try:
            chapter = int(evidence["chapter"])
        except (KeyError, TypeError, ValueError):
            continue
        if max_chapter is not None and chapter > max_chapter:
            continue
        key = str(evidence.get("passage_handle") or f"chapter:{chapter}")
        if key in seen:
            continue
        seen.add(key)
        records.append(evidence)
    return tuple(records)


def _earlier_opened_chapters(
    history: list[ConversationMessage],
    max_chapter: int | None,
) -> tuple[int, ...]:
    """Novel chapters this conversation already opened, within the cap."""
    return tuple(
        sorted({int(record["chapter"]) for record in _earlier_evidence(history, max_chapter)})
    )


MAX_RECALLED_PASSAGES = 4


def _recalled_results(
    earlier: tuple[dict, ...],
    candidate: str,
    opened_now: list[ToolResult],
) -> list[ToolResult]:
    """Earlier passages the candidate cites, re-opened for this turn's packet.

    The packet builder re-reads each passage from the library by its record,
    so the checks and the final reread see the text itself, not a credit.
    """
    cited = set(cited_chapters(candidate))
    if not cited:
        return []
    open_handles = {
        str(result.result["durable_evidence"].get("passage_handle"))
        for result in opened_now
        if isinstance(result.result, dict)
        and isinstance(result.result.get("durable_evidence"), dict)
    }
    recalled = [
        ToolResult(ok=True, result={"durable_evidence": dict(record)})
        for record in earlier
        if record.get("passage_handle")
        and int(record["chapter"]) in cited
        and str(record["passage_handle"]) not in open_handles
    ]
    # Newest earlier reads first; this turn's own reads keep their room.
    room = min(MAX_RECALLED_PASSAGES, max(0, MAX_OPENED_PASSAGES - len(open_handles)))
    return recalled[::-1][:room][::-1]


def _may_use_spoiler_boundary(
    blueprint: AnswerBlueprint,
    findings: tuple[PublicationFinding, ...],
) -> bool:
    """A guarded turn may fall back to the safe line on a real spoiler leak."""
    if blueprint.spoiler_mode not in {"guarded", "ask_first", "protect"}:
        return False
    return has_spoiler_finding(findings)


def _format_turn_brief(brief: TurnBrief) -> str:
    version_signals = "; ".join(brief.version_signals) or "none explicit"
    prior_reader = brief.prior_reader_position or "none"
    prior_weaver = brief.prior_weaver_position or "none"
    return (
        "--- turn brief ---\n"
        f"actual ask: {brief.actual_ask}\n"
        f"prior reader position: {prior_reader}\n"
        f"prior Weaver position: {prior_weaver}\n"
        f"needs prior context: {'yes' if brief.needs_prior_context else 'no'}\n"
        f"version signals: {version_signals}\n"
        "reader challenges prior answer: "
        f"{'yes' if brief.reader_challenges_prior_answer else 'no'}\n"
        "answer obligation: answer the actual ask and address any visible "
        "challenge without silently changing the earlier position. An earlier "
        "claim missing from this turn's passages is not wrong: withdraw it "
        "only when an opened passage contradicts it."
    )


async def _complete_buffered_stream(
    model_layer: ModelLayer,
    model: ModelSpec,
    request: ModelRequest,
    cancel_event: asyncio.Event,
    preview: DeltaCallback | None = None,
) -> tuple[ModelResponse, tuple[str, ...]]:
    """Drain a model stream, optionally previewing the deltas live.

    The full text is still buffered for validation. The preview lets the
    reader see the answer as it is written; a failed validation replaces
    it with the repair or the recovery panel.
    """
    final_response: ModelResponse | None = None
    text_deltas: list[str] = []
    async for event in model_layer.stream(model, request, cancel_event):
        if event.event_type == ModelStreamEventType.TEXT_DELTA and event.delta:
            text_deltas.append(event.delta)
            if preview is not None and not cancel_event.is_set():
                try:
                    await preview(event.delta)
                except Exception:
                    logger.warning("delta preview failed", exc_info=True)
        elif event.event_type == ModelStreamEventType.RESPONSE_COMPLETE:
            final_response = event.response
    if final_response is None:
        raise ModelProtocolError(
            "A model stream completed without a final response."
        )
    return final_response, tuple(text_deltas)


async def _bounded_call(
    call: Callable[[asyncio.Event], Awaitable[tuple[ModelResponse, tuple[str, ...]]]],
    seconds: float,
    cancel_event: asyncio.Event,
) -> tuple[ModelResponse | None, tuple[str, ...], bool]:
    """Run one model call inside a time limit.

    The call gets its own cancel event, set when the reader stops the turn
    or the limit passes. Providers close the stream and report an aborted
    response when cancelled, so the limit is tracked with its own flag: a
    call that ran out of time must not read as the reader pressing stop.
    Returns the response, its text deltas, and whether the limit passed.
    """
    if seconds <= 0:
        return None, (), True
    call_cancel = asyncio.Event()
    timed_out = False

    def expire() -> None:
        nonlocal timed_out
        timed_out = True
        call_cancel.set()

    async def relay() -> None:
        await cancel_event.wait()
        call_cancel.set()

    loop = asyncio.get_running_loop()
    timer = loop.call_later(seconds, expire)
    relay_task = asyncio.ensure_future(relay())
    try:
        response, deltas = await asyncio.wait_for(
            call(call_cancel), seconds + _CALL_CLOSE_GRACE_SECONDS
        )
    except TimeoutError:
        timed_out = True
        response, deltas = None, ()
    finally:
        timer.cancel()
        relay_task.cancel()
    if timed_out and not cancel_event.is_set():
        return None, (), True
    return response, deltas, False


async def _publish_deltas(
    deltas: tuple[str, ...],
    on_delta: DeltaCallback | None,
    cancel_event: asyncio.Event,
) -> bool:
    if on_delta is None:
        return True
    for delta in deltas:
        if cancel_event.is_set():
            return False
        try:
            await on_delta(delta)
        except Exception:
            logger.warning("delta callback failed", exc_info=True)
        if cancel_event.is_set():
            return False
    return True


def _answer_without_blockquotes(answer: str) -> str:
    """Drop blockquoted lines so a long quote cannot kill the turn."""
    kept = [
        line for line in answer.splitlines() if not line.lstrip().startswith(">")
    ]
    return "\n".join(kept).strip()


def _opened_novel_chapters(results: list[ToolResult]) -> set[int]:
    chapters: set[int] = set()
    for result in results:
        evidence = (result.result or {}).get("durable_evidence")
        if isinstance(evidence, dict) and evidence.get("source_kind") == "novel":
            try:
                chapters.add(int(evidence["chapter"]))
            except (KeyError, TypeError, ValueError):
                continue
    return chapters


def _chapter_to_read_next(
    answer: str,
    opened: set[int],
    max_chapter: int | None,
) -> int | None:
    """The next chapter, when a draft calls the outcome unshown too early."""
    if not opened or not _UNRESOLVED_RE.search(answer):
        return None
    cited_and_opened = set(cited_chapters(answer)) & opened
    next_chapter = max(cited_and_opened or opened) + 1
    if max_chapter is not None and next_chapter > max_chapter:
        return None
    return next_chapter


def _fallback_variants(
    answer: str,
    allowed_chapters: tuple[int, ...],
    evidence_packet: str | None = None,
    *,
    reader_text: str = "",
    fix_unopened_quote: bool = True,
) -> tuple[str, ...]:
    """Last-resort trims of a failed answer, gentlest first.

    The unopened quote goes first, so the claim and its citation stay (Plan
    034: the 033.7 fanfic turn failed on an unopened quote after the repair
    and fell back to the gap answer). The drop only runs when the findings
    actually include an unopened quote: prose answers opt out of that check,
    and their invented dialogue must not be stripped for another finding.
    Then without the block quotes; then also without the sentences that cite
    unopened chapters. The sentence goes, not just its citation, so no claim
    stays standing without its source.
    """
    if fix_unopened_quote:
        without_unopened = drop_unopened_quotes(
            answer, evidence_packet, reader_text=reader_text
        )
    else:
        without_unopened = answer
    without_quotes = _answer_without_blockquotes(without_unopened)
    without_both = _answer_without_blockquotes(
        drop_unsupported_sentences(without_unopened, allowed_chapters)
    )
    # Plan 033.6: a recalled scene with no chapter goes before the gap answer.
    without_recalls = without_both
    for sentence in uncited_recalls(without_both):
        without_recalls = without_recalls.replace(sentence, "")
    without_recalls = re.sub(r"[ \t]{2,}", " ", without_recalls).strip()
    variants: list[str] = []
    for variant in (without_unopened, without_quotes, without_both, without_recalls):
        if variant and variant != answer and variant not in variants:
            variants.append(variant)
    return tuple(variants)


# Plan 15 (owner 2026-08-08): the answer call must never truncate. The
# model writes long answers while thinking is on, and DeepSeek counts
# reasoning tokens against max_tokens, so the default 4096 cap cut the
# daemons answer mid-sentence (finish_reason="length", the run marked
# interrupted). Tool-call calls keep the 4096 default (their outputs are
# short and bounded thinking keeps the locate loop fast); the answer
# calls get headroom.
#
# Plan v1 (2026-08-17, live incident): the 4096 default ALSO truncates
# tool-call/locate calls. A complex locate call spends most of the
# budget on the thinking trace (reasoning counts against max_tokens)
# and gets cut with finish_reason="length" before emitting any tool
# call, which the harness marks as exit_reason="incomplete" ("The model
# response was incomplete.", surfaced as "thread broke"). Truncation is
# worse than a slower locate loop, so tool-call calls now get explicit
# headroom too; the answer call keeps the bigger budget.
ANSWER_MAX_OUTPUT_TOKENS = 16384
TOOL_CALL_MAX_OUTPUT_TOKENS = 8192

# A thinking model sometimes slips out of the structured tool-call
# protocol and writes its call as prose ('<tool calls>' plus a JSON
# block). That text is never an answer: the harness corrects the model
# and re-runs, at most this many times, and never persists the slip.
TEXT_TOOL_SLIP_LIMIT = 2
TEXT_TOOL_CORRECTION = (
    "Your previous message wrote a tool call as plain text. Tool calls "
    "are structured, never text: to call a tool use the tool-call "
    "mechanism attached to your reply, or, if you have enough to "
    "answer, write the answer directly."
)
WORKING_NOTE_CORRECTION = (
    "Your previous message was a placeholder or narrated work you had not "
    "done. Call a tool now if you need evidence, or answer the user fully "
    "and directly."
)
UNOPENED_TEXT_CORRECTION = (
    "Your answer cites, quotes, or describes chapters you have not opened, "
    "so it is written from memory. Search results are not the text. Open "
    "the chapter with read_chapters before you cite, quote, or describe it, "
    "or remove those claims."
)
READ_TO_RESOLUTION_CORRECTION = (
    "Your answer says the outcome is not shown, but your reading stopped at "
    "chapter {last}. A scene that breaks off at a chapter's end goes on in the "
    "next one. Open chapter {next} and keep reading until the scene resolves "
    "before you say how it ends, who won, or that it does not happen."
)
# A draft that concludes the text leaves the outcome open. Phrases, not
# trial wording: they mark "I stopped reading and called it unresolved".
_UNRESOLVED_RE = re.compile(
    r"no verdict|the passage stops|stops right there|cliffhanger"
    r"|doesn'?t say who|does not say who|never happens|doesn'?t happen"
    r"|does not happen"
    r"|\b(?:no|not|isn'?t|never)\b[^.\n]{0,60}\bon (?:the page|screen)\b",
    re.IGNORECASE,
)
ZERO_EVIDENCE_CORRECTION = (
    "You answered without opening any evidence this turn. The library is the "
    "only source of truth: run at least one search or read, or say honestly "
    "that the library does not cover it. If this is not a lore question, just "
    "answer directly."
)
# Plan 033: what the reader sees when a turn read but could not publish
# an answer (owner-approved wording; no em dash).
HONEST_GAP_ANSWER = (
    "I couldn't pin that down in the chapters I opened, and I'd rather not "
    "guess. Tell me roughly when it happens, or a name from the scene, and "
    "I'll look again."
)
FINAL_ANSWER_INSTRUCTION = (
    "This is the final answer phase. The evidence packet above is complete and "
    "no tools are available. Answer the user directly. Before returning the "
    "answer, silently inspect each factual claim: it must follow from the opened "
    "passages and carry its supporting chapter citation beside it. A synthesis "
    "that needs several chapters must cite all of them. Remove or qualify claims "
    "with incomplete support. Keep interpretations and invented branches labelled. "
    "Do not name or describe searches, tool calls, or work you plan to do. "
    "The private draft above was never shown to the reader, so never "
    "mention it, compare against it, or announce what you changed in it (no "
    "'small fix to my phrasing', no 'as I said', no 'earlier I told you'). "
    "Only earlier turns of the conversation are things the reader saw."
)
PRIVATE_DRAFT_HEADER = (
    "--- private draft: written this turn, never shown to the reader ---\n"
)
WORKING_NOTE_MARKERS = (
    "one moment",
    "give me a moment",
    "let me look",
    "let me search",
    "let me check",
    "i'll search",
    "i'll look",
    "i'll check",
    "i'll trace",
    "i'll open",
    "i need to verify",
    "reaching into the",
    "searching the library",
)
FINAL_REFUSAL_MARKERS = (
    "i can't answer",
    "i cannot answer",
    "i'm unable to answer",
    "i am unable to answer",
)
KNOWN_READING_TOOL_NAMES = frozenset(
    {
        "semantic_search",
        "read_chapters",
        "find_text",
        "browse_chapters",
        "who_is",
        "lore_path",
    }
)


def _is_textual_tool_call(content: str, tool_names: tuple[str, ...]) -> bool:
    """True when the model wrote a tool call as prose instead of using
    the structured tool-call mechanism."""
    stripped = content.lstrip()
    if stripped.startswith("<tool calls>") or stripped.startswith("<tool_calls>"):
        return True
    if "```json" in content and '"name"' in content and '"arguments"' in content:
        return True

    known_tool_names = KNOWN_READING_TOOL_NAMES.union(tool_names)
    for line in content.splitlines():
        tag = line.strip()
        if not tag.startswith("<") or not tag.endswith(">"):
            continue
        tag_name = tag[1:-1].split(":", 1)[0].split(None, 1)[0]
        if tag_name in known_tool_names:
            return True
    return False


def _is_working_note_candidate(content: str) -> bool:
    """True when a plain reply only promises or narrates future work."""
    for raw_line in content.splitlines():
        line = raw_line.strip().casefold()
        if not line or line.startswith(('"', "'")):
            continue
        line = line.lstrip("-*• ").lstrip("<[")
        for marker in WORKING_NOTE_MARKERS:
            if not line.startswith(marker):
                continue
            if marker != "one moment":
                return True

            remainder = line[len(marker) :].lstrip(" ,.!:;>]")
            working_remainders = (
                "please",
                "hold",
                "while i",
                "let me",
                "i'll",
                "i will",
                "i need",
                "i'm",
                "i am",
                "to ",
            )
            if not remainder or remainder.startswith(working_remainders):
                return True
    return False


def _candidate_rejection_note(
    content: str,
    tool_names: tuple[str, ...],
) -> str | None:
    if _is_textual_tool_call(content, tool_names):
        return TEXT_TOOL_CORRECTION
    if not content.strip() or _is_working_note_candidate(content):
        return WORKING_NOTE_CORRECTION
    return None


def _is_final_phase_refusal(content: str) -> bool:
    """True for a direct refusal produced while enhancing a valid answer."""
    casefolded = content.strip().casefold()
    return any(casefolded.startswith(marker) for marker in FINAL_REFUSAL_MARKERS)


class TurnExitReason(str, Enum):
    COMPLETED = "completed"
    INCOMPLETE = "incomplete"
    MODEL_FAILED = "model_failed"
    LIMIT_REACHED = "limit_reached"
    INTERRUPTED = "interrupted"
    PERSISTENCE_FAILED = "persistence_failed"


@dataclass
class TurnResult:
    turn_id: str
    exit_reason: TurnExitReason
    final_text: str = ""
    model_steps: int = 0
    tool_starts: int = 0
    new_messages: list[ConversationMessage] = field(default_factory=list)
    safe_failure: str = ""
    model_name: str = ""
    provider_name: str = ""
    input_characters: int = 0
    # Plan 15: failure details recorded so a failed turn is diagnosable
    # later (persisted as a run_event by the runner).
    error_category: str = ""
    raw_stop_reason: str = ""
    # Plan 033: the check a failing turn was rescued from by the gap
    # answer (recorded in the run_completed reading).
    rescued_from: str = ""
    # Plan 010 Phase D: context meter surfaced from the assembler snapshot
    # (0 = no snapshot; token_budget 0 = unbounded).
    token_count: int = 0
    token_budget: int = 0
    # How deep the turn read: the routed and loaded skills, the lookups it
    # made, its lookup limit, and the deepest thinking effort it asked for.
    # Recorded on the run so under- and over-reading show up in real use.
    skill_ids: tuple[str, ...] = ()
    tool_steps: int = 0
    tool_limit: int | None = None
    thinking: str | None = None
    # Plan 033.6: how long each model call took, in seconds.
    call_seconds: tuple[float, ...] = ()

    def reading(self) -> dict:
        return {
            "skills": list(self.skill_ids),
            "lookups": self.tool_steps,
            "lookup_limit": self.tool_limit,
            "thinking": self.thinking,
            "call_seconds": list(self.call_seconds),
            **({"rescued_from": self.rescued_from} if self.rescued_from else {}),
        }


def _message_id() -> str:
    return uuid.uuid4().hex[:12]


def _without_private_reasoning(
    message: ConversationMessage,
) -> ConversationMessage:
    if isinstance(message, AssistantMessage) and message.reasoning_content:
        return replace(message, reasoning_content="")
    return message


async def _persist(
    message: ConversationMessage,
    callback: PersistCallback | None,
) -> bool:
    if callback is None:
        return True
    try:
        await callback(_without_private_reasoning(message))
        return True
    except Exception:
        logger.warning(
            "persist failed for %s",
            message.kind,
            exc_info=True,
        )
        return False


def _input_characters(messages: list[ModelMessage]) -> int:
    return sum(len(message.content or "") for message in messages)


def _response_matches_model(
    response: ModelResponse,
    model: ModelSpec,
) -> bool:
    return (
        response.provider_id == model.provider_id
        and response.model_id == model.model_id
        and response.assistant_message.role == "assistant"
        and response.assistant_message.name is None
        and response.assistant_message.tool_call_id is None
    )


def _tool_calls_are_safe(
    tool_calls: tuple[ModelToolCall, ...],
    known_call_ids: set[str],
) -> bool:
    seen_call_ids: set[str] = set()
    for tool_call in tool_calls:
        if not tool_call.call_id.strip():
            return False
        if tool_call.call_id in known_call_ids:
            return False
        if tool_call.call_id in seen_call_ids:
            return False
        seen_call_ids.add(tool_call.call_id)

        if not tool_call.name.strip():
            return False
        if not tool_call.arguments_json.strip():
            return False
        try:
            arguments = json.loads(tool_call.arguments_json)
        except json.JSONDecodeError:
            return False
        if not isinstance(arguments, dict):
            return False
    return True


def _known_call_ids(
    history: list[ConversationMessage],
) -> set[str]:
    call_ids: set[str] = set()
    for message in history:
        if isinstance(message, AssistantMessage):
            call_ids.update(
                tool_call.call_id
                for tool_call in message.tool_calls
            )
        elif isinstance(message, ToolCallMessage):
            call_ids.add(message.call_id)
    return call_ids


def _assistant_message(
    *,
    turn_id: str,
    response_message: ModelMessage,
    status: str = "complete",
    include_tool_calls: bool = True,
) -> AssistantMessage:
    tool_calls = response_message.tool_calls if include_tool_calls else ()
    return AssistantMessage(
        message_id=_message_id(),
        turn_id=turn_id,
        content=response_message.content or "",
        tool_calls=tool_calls,
        status=status,
        reasoning_content=response_message.reasoning_content or "",
    )


async def run_turn(
    *,
    session_id: str,
    turn_id: str,
    model_layer: ModelLayer,
    model: ModelSpec,
    system_prompt: str,
    history: list[ConversationMessage],
    tool_registry: ToolRegistry,
    active_tools: tuple[str, ...],
    execution_policy: ToolExecutionPolicy,
    cancel_event: asyncio.Event,
    persist_message: PersistCallback | None = None,
    on_delta: DeltaCallback | None = None,
    on_tool_event: ToolEventCallback | None = None,
    max_model_steps: int = 5,
    tool_budget: int | None = None,
    reasoning: ReasoningEffort | None = None,
    # Plan 15 final reading seam: called after a candidate passes the
    # mechanical checks. Returns the reading packet text, or None when
    # there is no evidence to re-read. The candidate remains ephemeral
    # until the final reading call succeeds or falls back to it.
    packet_builder: PacketBuilder | None = None,
    final_pass: bool = True,
    domain: str = "canon",
    reader_note: str = "",
    max_chapter: int | None = None,
    # Plan 033: when set, a turn that would fail on a protocol check or a
    # step limit publishes this text instead (see the end of the loop).
    gap_answer: str | None = None,
    # Plan 033.6: every model call and the whole turn are time-limited.
    call_deadline_seconds: float = MODEL_CALL_DEADLINE_SECONDS,
    turn_deadline_seconds: float = TURN_DEADLINE_SECONDS,
) -> TurnResult:
    turn_started = time.monotonic()
    call_seconds: list[float] = []
    timeout_retry_used = False
    max_steps = min(max(max_model_steps, 1), _MAX_MODEL_STEPS)
    budget = _TurnBudget(tool_budget)
    if tool_budget is not None:
        # Plan 15 two-budget split: tool calls are capped at tool_budget
        # and the final answer call is always guaranteed. Candidate
        # corrections and the one zero-evidence check are bounded overhead;
        # they must not consume either the tool ceiling or answer slot.
        # Plan 030: the model loop must allow the largest skill budget,
        # because loading a bigger skill raises the ceiling mid-turn.
        correction_steps = TEXT_TOOL_SLIP_LIMIT + 1
        loop_ceiling = max(tool_budget, MAX_TOOL_BUDGET)
        max_steps = min(
            loop_ceiling + 1 + correction_steps,
            _MAX_MODEL_STEPS,
        )
    new_messages: list[ConversationMessage] = []
    turn_tool_results: list[ToolResult] = []
    model_steps = 0
    tool_starts = 0
    tool_steps_used = 0
    loaded_skills: list[str] = []

    def note_skills_loaded(skill_ids: tuple[str, ...]) -> None:
        for skill_id in skill_ids:
            if skill_id not in loaded_skills:
                loaded_skills.append(skill_id)
        budget.raise_to(plan_for_ids(loaded_skills).tool_budget)

    # Stepping up mid-turn: a loaded skill raises the reading budget, and it
    # also raises the thinking effort and turns the final reread on, so a
    # turn that started as small talk can become a real read.
    def turn_reasoning() -> ReasoningEffort | None:
        if not loaded_skills:
            return reasoning
        tier = plan_for_ids(loaded_skills).reasoning_tier
        loaded_effort = REASONING_TIERS[tier] if tier is not None else None
        return _deeper_effort(reasoning, loaded_effort)

    def turn_final_pass() -> bool:
        if final_pass or not loaded_skills:
            return final_pass
        return plan_for_ids(loaded_skills).final_pass

    final_text = ""
    safe_failure = ""
    error_category = ""
    raw_stop_reason = ""
    model_name = ""
    provider_name = ""
    completed_response = False
    exit_reason = TurnExitReason.COMPLETED
    final_packet: str | None = None
    validated_candidate: AssistantMessage | None = None
    validated_candidate_deltas: tuple[str, ...] = ()
    answer_blueprint: AnswerBlueprint | None = None
    publication_draft: AssistantMessage | None = None
    publication_findings: tuple[PublicationFinding, ...] = ()
    publication_repair_attempted = False
    candidate_rejections = 0
    candidate_note: str | None = None
    # One last attempt with the tools stripped when the model keeps
    # returning an empty or planning-only candidate.
    stripped_retry = False
    strip_tools_next = False
    last_stop_reason = ""
    zero_evidence_reprompted = False
    unopened_text_reprompted = False
    resolution_reprompted = False
    deepest_thinking: ReasoningEffort | None = None

    try:
        tool_schemas = tool_registry.active_schemas(active_tools)
    except ValueError as error:
        logger.warning("active tool schema setup failed: %s", error)
        return TurnResult(
            turn_id=turn_id,
            exit_reason=TurnExitReason.MODEL_FAILED,
            safe_failure=safe_error("tool_schema"),
        )

    initial_messages = project_messages(
        system_prompt=system_prompt,
        history=history,
    )
    turn_brief = _build_turn_brief(history)
    earlier_evidence = _earlier_evidence(history, max_chapter)
    earlier_opened = _earlier_opened_chapters(history, max_chapter)
    routed_plan = plan_for_turn(
        turn_brief.actual_ask,
        earlier_asks=turn_brief.earlier_asks,
        domain=domain,
    )
    input_characters = _input_characters(initial_messages)
    known_call_ids = _known_call_ids(history)

    async def persist_answer(
        answer: AssistantMessage,
        deltas: tuple[str, ...],
    ) -> tuple[bool, bool]:
        if not (answer.content or "").strip():
            logger.warning("empty answer rejected")
            return False, False
        new_messages.append(answer)
        persisted = await _persist(answer, persist_message)
        if not persisted:
            return False, False
        published = await _publish_deltas(deltas, on_delta, cancel_event)
        return True, published

    async def persist_spoiler_boundary(
        candidate: AssistantMessage,
        blueprint: AnswerBlueprint,
    ) -> tuple[bool, bool]:
        boundary = replace(
            candidate,
            content=build_spoiler_boundary_answer(blueprint),
            tool_calls=(),
            reasoning_content="",
        )
        return await persist_answer(boundary, ())

    while model_steps < max_steps:
        if cancel_event.is_set():
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break

        model_steps += 1
        # Plan 15: the budget is visible to the model so it can plan, and
        # the call after the last tool step is forced to be the answer.
        in_final_phase = final_packet is not None and validated_candidate is not None
        forced_answer = (
            not in_final_phase
            and budget.limit is not None
            and tool_steps_used >= budget.limit
        )
        turn_system_prompt = system_prompt
        if not in_final_phase:
            turn_plan = routed_plan
            if loaded_skills:
                turn_plan = plan_for_ids([*turn_plan.ids, *loaded_skills])
            skill_brief = format_skill_brief(turn_plan)
            if skill_brief:
                # The skill shapes this answer, so it belongs in the system
                # prompt on every call, not only the final reading pass.
                turn_system_prompt = system_prompt + "\n\n" + skill_brief
        if reader_note:
            turn_system_prompt = turn_system_prompt + "\n\n" + reader_note
        request_messages = project_messages(
            system_prompt=turn_system_prompt,
            history=history + new_messages,
        )
        if in_final_phase:
            # The packet is ephemeral context for one fail-soft final
            # reading call. This call carries the thread's own published
            # exchanges (Plan 033.7: without them it could not see a list it
            # gave two turns ago), but never this turn's tool transcripts:
            # their positions and evidence are already in the packet and the
            # turn brief.
            current_owner = next(
                (
                    message
                    for message in reversed(history)
                    if isinstance(message, UserMessage)
                ),
                None,
            )
            if answer_blueprint is None:
                answer_blueprint = build_answer_blueprint(
                    question=turn_brief.actual_ask,
                    prior_weaver_position=turn_brief.prior_weaver_position,
                    reader_challenges_prior_answer=(
                        turn_brief.reader_challenges_prior_answer
                    ),
                    evidence_packet=final_packet,
                    extra_skill_ids=tuple(loaded_skills),
                    domain=domain,
                    earlier_asks=turn_brief.earlier_asks,
                    earlier_opened_chapters=earlier_opened,
                )
            # The draft is not part of the conversation: shown as an
            # assistant message, the model took it for something the reader
            # had seen and corrected it out loud. It rides in the private
            # instructions instead, labelled as never shown.
            final_history = _final_history(history, current_owner)
            draft = publication_draft or validated_candidate
            request_messages = project_messages(
                system_prompt=system_prompt,
                history=final_history,
            )
            final_instructions = (
                _format_turn_brief(turn_brief)
                + "\n\n"
                + final_packet
                + "\n\n"
                + format_answer_blueprint(answer_blueprint)
                + "\n\n"
                + PRIVATE_DRAFT_HEADER
                + (draft.content or "")
                + "\n\n"
                + FINAL_ANSWER_INSTRUCTION
            )
            if publication_findings:
                final_instructions += (
                    "\n\n" + build_repair_instruction(publication_findings)
                )
            request_messages = [
                *request_messages,
                ModelMessage(
                    role="system",
                    content=final_instructions,
                ),
            ]
        if budget.limit is not None and not in_final_phase:
            remaining = budget.limit - tool_steps_used
            if forced_answer or remaining <= BUDGET_REMINDER_THRESHOLD:
                reminder = (
                    "Your tool steps are spent. Answer now from what you "
                    "have gathered. Do not call tools."
                    if forced_answer
                    else f"Tool steps remaining: {remaining} of {budget.limit}."
                )
                request_messages = [
                    *request_messages,
                    ModelMessage(role="system", content=reminder),
                ]
        if candidate_note is not None:
            request_messages = [
                *request_messages,
                ModelMessage(role="system", content=candidate_note),
            ]
            candidate_note = None
        request_tools = (
            ()
            if (forced_answer or in_final_phase or strip_tools_next)
            else tuple(tool_schemas)
        )
        strip_tools_next = False
        step_reasoning = turn_reasoning()
        deepest_thinking = _deeper_effort(deepest_thinking, step_reasoning)
        request = ModelRequest(
            messages=tuple(request_messages),
            # Plan 15: on the forced call the tools are stripped from the
            # request (hermes-style), so the model physically cannot call
            # one and must write the answer. A candidate rejected twice gets
            # the same treatment, so it has to speak instead of plan.
            tools=request_tools,
            # Plan 15: answer calls get headroom so a long answer with a
            # long thinking trace never truncates (see the daemons turn);
            # Plan v1 (2026-08-17): tool-call calls get explicit headroom
            # too (TOOL_CALL_MAX_OUTPUT_TOKENS) because reasoning tokens
            # count against max_tokens and a long locate thinking trace
            # truncated at the 4096 default (live incident: "model
            # response was incomplete").
            max_output_tokens=(
                ANSWER_MAX_OUTPUT_TOKENS
                if (in_final_phase or forced_answer)
                else TOOL_CALL_MAX_OUTPUT_TOKENS
            ),
            # Plan 15 (owner 2026-08-07): thinking stays on for every
            # tier; the tier only picks the reasoning effort. None keeps
            # the pre-tier behavior (thinking disabled, no effort).
            # Plan 15 (owner 2026-08-08): final reading and forced answer
            # calls keep the tier effort; locate steps drop to low.
            reasoning=(
                ModelReasoning(
                    enabled=True,
                    effort=(
                        step_reasoning
                        if (in_final_phase or forced_answer)
                        else LOCATE_REASONING_EFFORT
                    ),
                )
                if step_reasoning is not None
                else ModelReasoning()
            ),
        )

        response: ModelResponse | None = None
        response_deltas: tuple[str, ...] = ()

        async def call_model(
            call_cancel: asyncio.Event,
            request: ModelRequest = request,
        ) -> tuple[ModelResponse, tuple[str, ...]]:
            if on_delta is None:
                # Plan 008 behavior: drain the stream, no live preview.
                return (
                    await model_layer.complete(model, request, call_cancel),
                    (),
                )
            # Plan 030: the reader only ever sees the validated answer.
            # Candidate tokens stay buffered until validation chooses the
            # one answer that may reach the public callback.
            return await _complete_buffered_stream(
                model_layer,
                model,
                request,
                call_cancel,
                preview=None,
            )

        call_timed_out = False
        try:
            while True:
                remaining = turn_deadline_seconds - (time.monotonic() - turn_started)
                call_started = time.monotonic()
                response, response_deltas, call_timed_out = await _bounded_call(
                    call_model,
                    min(call_deadline_seconds, remaining),
                    cancel_event,
                )
                if remaining > 0:
                    call_seconds.append(round(time.monotonic() - call_started, 2))
                if not call_timed_out:
                    break
                logger.warning("model call ran past its time limit")
                # One retry per turn, inside what is left of the turn. A
                # stalled final reread is not retried: a checked draft waits.
                still_left = turn_deadline_seconds - (time.monotonic() - turn_started)
                if in_final_phase or timeout_retry_used or still_left <= 0:
                    break
                timeout_retry_used = True
        except asyncio.CancelledError:
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break
        except Exception:
            logger.warning("model request failed", exc_info=True)
            if cancel_event.is_set():
                exit_reason = TurnExitReason.INTERRUPTED
                safe_failure = safe_error("interrupted")
                break
            if not in_final_phase:
                exit_reason = TurnExitReason.MODEL_FAILED
                safe_failure = safe_error("model")
                break

        if response is None and not call_timed_out and cancel_event.is_set():
            # The reader stopped the turn while the call was still opening.
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break

        if call_timed_out and not in_final_phase:
            # Out of time with nothing checked to publish: a clean failure the
            # reader can retry. A stalled final reread falls through to the
            # checked draft below.
            exit_reason = TurnExitReason.MODEL_FAILED
            error_category = "model_timeout"
            safe_failure = safe_error("model_timeout")
            break

        if response is None:
            # The final reading pass only enhances an answer that already
            # passed validation. A provider failure cannot erase it.
            assert validated_candidate is not None
            assert answer_blueprint is not None
            fallback_findings = inspect_publication(
                validated_candidate.content,
                answer_blueprint,
                final_packet,
            )
            if (
                fallback_findings
                and not publication_repair_attempted
                and model_steps < max_steps
            ):
                publication_draft = validated_candidate
                publication_findings = fallback_findings
                publication_repair_attempted = True
                continue
            if fallback_findings:
                if _may_use_spoiler_boundary(
                    answer_blueprint,
                    fallback_findings,
                ):
                    persisted, published = await persist_spoiler_boundary(
                        validated_candidate,
                        answer_blueprint,
                    )
                    if not persisted:
                        exit_reason = TurnExitReason.PERSISTENCE_FAILED
                        safe_failure = safe_error("assistant_persistence")
                        break
                    if not published:
                        exit_reason = TurnExitReason.INTERRUPTED
                        safe_failure = safe_error("interrupted")
                        break
                    final_text = build_spoiler_boundary_answer(answer_blueprint)
                    completed_response = True
                    break
                logger.warning(
                    "publication repair failed: %s",
                    ", ".join(finding.code for finding in fallback_findings),
                )
                exit_reason = TurnExitReason.MODEL_FAILED
                error_category = "protocol_publication_repair_1"
                safe_failure = safe_error("model_protocol")
                break
            persisted, published = await persist_answer(
                validated_candidate,
                validated_candidate_deltas,
            )
            if not persisted:
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("assistant_persistence")
                break
            if not published:
                exit_reason = TurnExitReason.INTERRUPTED
                safe_failure = safe_error("interrupted")
                break
            final_text = validated_candidate.content
            completed_response = True
            break

        model_name = response.model_id
        provider_name = response.provider_id
        last_stop_reason = response.stop_reason.value

        if in_final_phase:
            if (
                response.stop_reason == ModelStopReason.ABORTED
                or cancel_event.is_set()
            ):
                exit_reason = TurnExitReason.INTERRUPTED
                safe_failure = safe_error("interrupted")
                break

            assert validated_candidate is not None
            assert answer_blueprint is not None
            proposed_answer = validated_candidate
            proposed_deltas = validated_candidate_deltas
            if _response_matches_model(response, model):
                response_message = response.assistant_message
                rejection_note = _candidate_rejection_note(
                    response_message.content or "",
                    active_tools,
                )
                valid_final = (
                    response.stop_reason == ModelStopReason.STOP
                    and not response_message.tool_calls
                    and (response_message.content or "").strip() != ""
                    and rejection_note is None
                    and not _is_final_phase_refusal(response_message.content or "")
                )
                if valid_final:
                    proposed_answer = _assistant_message(
                        turn_id=turn_id,
                        response_message=response_message,
                    )
                    proposed_deltas = response_deltas
                    # Plan 033.6: the reader never saw the draft, so a
                    # "correction" of it is dropped, not published. A reader
                    # who challenged the last answer may be owed one.
                    cleaned = (
                        proposed_answer.content
                        if turn_brief.reader_challenges_prior_answer
                        else drop_draft_edit_notes(
                            proposed_answer.content,
                            validated_candidate.content,
                        )
                    )
                    if not cleaned:
                        proposed_answer = validated_candidate
                        proposed_deltas = validated_candidate_deltas
                    elif cleaned != proposed_answer.content:
                        proposed_answer = replace(proposed_answer, content=cleaned)
                        proposed_deltas = (cleaned,)

            findings = inspect_publication(
                proposed_answer.content,
                answer_blueprint,
                final_packet,
            )
            if (
                findings
                and not publication_repair_attempted
                and model_steps < max_steps
            ):
                publication_draft = proposed_answer
                publication_findings = findings
                publication_repair_attempted = True
                continue

            answer = proposed_answer
            answer_deltas = proposed_deltas
            if findings:
                fallback_findings = inspect_publication(
                    validated_candidate.content,
                    answer_blueprint,
                    final_packet,
                )
                if fallback_findings:
                    citation_clean = strip_unsupported_citations(
                        validated_candidate.content,
                        answer_blueprint.allowed_chapters,
                    )
                    if citation_clean != validated_candidate.content and not inspect_publication(
                        citation_clean,
                        answer_blueprint,
                        final_packet,
                    ):
                        stripped_citation = replace(
                            validated_candidate,
                            content=citation_clean,
                            tool_calls=(),
                            reasoning_content="",
                        )
                        persisted, published = await persist_answer(
                            stripped_citation,
                            (citation_clean,),
                        )
                        if not persisted:
                            exit_reason = TurnExitReason.PERSISTENCE_FAILED
                            safe_failure = safe_error("assistant_persistence")
                            break
                        if not published:
                            exit_reason = TurnExitReason.INTERRUPTED
                            safe_failure = safe_error("interrupted")
                            break
                        final_text = citation_clean
                        completed_response = True
                        break
                    if _may_use_spoiler_boundary(
                        answer_blueprint,
                        fallback_findings,
                    ):
                        persisted, published = await persist_spoiler_boundary(
                            validated_candidate,
                            answer_blueprint,
                        )
                        if not persisted:
                            exit_reason = TurnExitReason.PERSISTENCE_FAILED
                            safe_failure = safe_error("assistant_persistence")
                            break
                        if not published:
                            exit_reason = TurnExitReason.INTERRUPTED
                            safe_failure = safe_error("interrupted")
                            break
                        final_text = build_spoiler_boundary_answer(answer_blueprint)
                        completed_response = True
                        break
                    for stripped_source, stripped_content in (
                        (source, variant)
                        for source in (proposed_answer, validated_candidate)
                        for variant in _fallback_variants(
                            source.content,
                            answer_blueprint.allowed_chapters,
                            final_packet,
                            reader_text=answer_blueprint.question,
                            fix_unopened_quote=any(
                                finding.code == "unopened_quote"
                                for finding in fallback_findings
                            ),
                        )
                    ):
                        stripped_findings = inspect_publication(
                            stripped_content,
                            answer_blueprint,
                            final_packet,
                        )
                        if stripped_findings:
                            continue
                        stripped = replace(
                            stripped_source,
                            content=stripped_content,
                            tool_calls=(),
                            reasoning_content="",
                        )
                        persisted, published = await persist_answer(
                            stripped,
                            (stripped_content,),
                        )
                        if not persisted:
                            exit_reason = TurnExitReason.PERSISTENCE_FAILED
                            safe_failure = safe_error("assistant_persistence")
                            break
                        if not published:
                            exit_reason = TurnExitReason.INTERRUPTED
                            safe_failure = safe_error("interrupted")
                            break
                        final_text = stripped_content
                        completed_response = True
                        break
                    if completed_response or exit_reason != TurnExitReason.COMPLETED:
                        break
                    logger.warning(
                        "publication repair failed: %s",
                        ", ".join(
                            finding.code for finding in fallback_findings
                        ),
                    )
                    exit_reason = TurnExitReason.MODEL_FAILED
                    error_category = "protocol_publication_repair_2"
                    safe_failure = safe_error("model_protocol")
                    break
                answer = validated_candidate
                answer_deltas = validated_candidate_deltas
            persisted, published = await persist_answer(
                answer, answer_deltas
            )
            if not persisted:
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("assistant_persistence")
                break
            if not published:
                exit_reason = TurnExitReason.INTERRUPTED
                safe_failure = safe_error("interrupted")
                break
            final_text = answer.content
            completed_response = True
            break

        if not _response_matches_model(response, model):
            exit_reason = TurnExitReason.MODEL_FAILED
            error_category = "protocol_model_mismatch"
            safe_failure = safe_error("model_protocol")
            break

        response_message = response.assistant_message
        tool_calls = response_message.tool_calls

        if response.stop_reason == ModelStopReason.ABORTED:
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break

        if response.stop_reason == ModelStopReason.ERROR:
            exit_reason = TurnExitReason.MODEL_FAILED
            safe_failure = safe_error("model")
            error_category = response.error_category or ""
            raw_stop_reason = response.raw_stop_reason
            break

        if response.stop_reason == ModelStopReason.LENGTH:
            interrupted = _assistant_message(
                turn_id=turn_id,
                response_message=response_message,
                status="interrupted",
                include_tool_calls=False,
            )
            new_messages.append(interrupted)
            if not await _persist(interrupted, persist_message):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("assistant_persistence")
                break
            published = await _publish_deltas(
                response_deltas,
                on_delta,
                cancel_event,
            )
            if not published:
                exit_reason = TurnExitReason.INTERRUPTED
                final_text = interrupted.content
                safe_failure = safe_error("interrupted")
                break
            exit_reason = TurnExitReason.INCOMPLETE
            final_text = interrupted.content
            safe_failure = safe_error("incomplete")
            break

        if response.stop_reason == ModelStopReason.STOP and not tool_calls:
            assistant = _assistant_message(
                turn_id=turn_id,
                response_message=response_message,
            )
            rejection_note = _candidate_rejection_note(
                assistant.content,
                active_tools,
            )
            if rejection_note is not None:
                if forced_answer:
                    exit_reason = TurnExitReason.LIMIT_REACHED
                    safe_failure = safe_error("limit")
                    break
                if candidate_rejections >= TEXT_TOOL_SLIP_LIMIT:
                    if not stripped_retry:
                        stripped_retry = True
                        strip_tools_next = True
                        candidate_note = WORKING_NOTE_CORRECTION
                        continue
                    logger.warning(
                        "candidate rejected %d times (last stop=%s)",
                        candidate_rejections,
                        last_stop_reason,
                    )
                    exit_reason = TurnExitReason.MODEL_FAILED
                    error_category = "protocol_candidate_rejected"
                    safe_failure = safe_error("model_protocol")
                    break
                candidate_rejections += 1
                candidate_note = rejection_note
                logger.debug(
                    "candidate rejected (%d chars): %s",
                    len(assistant.content or ""),
                    (assistant.content or "")[:40],
                )
                continue

            if forced_answer:
                if packet_builder is None:
                    persisted, published = await persist_answer(
                        assistant,
                        response_deltas,
                    )
                    if not persisted:
                        exit_reason = TurnExitReason.PERSISTENCE_FAILED
                        safe_failure = safe_error("assistant_persistence")
                        break
                    if not published:
                        exit_reason = TurnExitReason.INTERRUPTED
                        safe_failure = safe_error("interrupted")
                        break
                    final_text = assistant.content
                    completed_response = True
                    break

                try:
                    packet = await packet_builder(
                        [
                            *_recalled_results(
                                earlier_evidence,
                                assistant.content,
                                turn_tool_results,
                            ),
                            *turn_tool_results,
                        ],
                        assistant.content,
                    )
                except Exception:
                    logger.warning("reading packet build failed", exc_info=True)
                    packet = None
                if not packet:
                    exit_reason = TurnExitReason.MODEL_FAILED
                    error_category = "protocol_no_packet"
                    safe_failure = safe_error("model_protocol")
                    break
                validated_candidate = assistant
                validated_candidate_deltas = response_deltas
                final_packet = packet
                if not turn_final_pass() and answer_blueprint is None:
                    answer_blueprint = build_answer_blueprint(
                        question=turn_brief.actual_ask,
                        prior_weaver_position=turn_brief.prior_weaver_position,
                        reader_challenges_prior_answer=(
                            turn_brief.reader_challenges_prior_answer
                        ),
                        evidence_packet=packet,
                        extra_skill_ids=tuple(loaded_skills),
                        domain=domain,
                        earlier_asks=turn_brief.earlier_asks,
                        earlier_opened_chapters=earlier_opened,
                    )
                if not turn_final_pass() and answer_blueprint is not None:
                    findings = inspect_publication(
                        assistant.content,
                        answer_blueprint,
                        packet,
                    )
                    if not findings:
                        persisted, published = await persist_answer(
                            assistant,
                            response_deltas,
                        )
                        if not persisted:
                            exit_reason = TurnExitReason.PERSISTENCE_FAILED
                            safe_failure = safe_error("assistant_persistence")
                            break
                        if not published:
                            exit_reason = TurnExitReason.INTERRUPTED
                            safe_failure = safe_error("interrupted")
                            break
                        final_text = assistant.content
                        completed_response = True
                        break
                continue

            if tool_steps_used == 0 and not zero_evidence_reprompted:
                zero_evidence_reprompted = True
                candidate_note = ZERO_EVIDENCE_CORRECTION
                continue

            # Plan 033.6: a draft that says the outcome is not shown, having
            # stopped at a chapter break, reads on once before it concludes.
            next_chapter = (
                None
                if resolution_reprompted
                or domain == "fanfic"
                or (budget.limit is not None and tool_steps_used >= budget.limit)
                else _chapter_to_read_next(
                    assistant.content,
                    _opened_novel_chapters(turn_tool_results),
                    max_chapter,
                )
            )
            if next_chapter is not None:
                resolution_reprompted = True
                candidate_note = READ_TO_RESOLUTION_CORRECTION.format(
                    last=next_chapter - 1,
                    next=next_chapter,
                )
                continue

            packet: str | None = None
            packet_build_failed = False
            if packet_builder is not None:
                try:
                    packet = await packet_builder(
                        [
                            *_recalled_results(
                                earlier_evidence,
                                assistant.content,
                                turn_tool_results,
                            ),
                            *turn_tool_results,
                        ],
                        assistant.content,
                    )
                except Exception:
                    logger.warning("reading packet build failed", exc_info=True)
                    packet_build_failed = True

            if packet and model_steps < max_steps:
                validated_candidate = assistant
                validated_candidate_deltas = response_deltas
                final_packet = packet
                if not turn_final_pass() and answer_blueprint is None:
                    answer_blueprint = build_answer_blueprint(
                        question=turn_brief.actual_ask,
                        prior_weaver_position=turn_brief.prior_weaver_position,
                        reader_challenges_prior_answer=(
                            turn_brief.reader_challenges_prior_answer
                        ),
                        evidence_packet=packet,
                        extra_skill_ids=tuple(loaded_skills),
                        domain=domain,
                        earlier_asks=turn_brief.earlier_asks,
                        earlier_opened_chapters=earlier_opened,
                    )
                if not turn_final_pass() and answer_blueprint is not None:
                    findings = inspect_publication(
                        assistant.content,
                        answer_blueprint,
                        packet,
                    )
                    if not findings:
                        persisted, published = await persist_answer(
                            assistant,
                            response_deltas,
                        )
                        if not persisted:
                            exit_reason = TurnExitReason.PERSISTENCE_FAILED
                            safe_failure = safe_error("assistant_persistence")
                            break
                        if not published:
                            exit_reason = TurnExitReason.INTERRUPTED
                            safe_failure = safe_error("interrupted")
                            break
                        final_text = assistant.content
                        completed_response = True
                        break
                continue

            if packet_builder is not None and packet_build_failed:
                exit_reason = TurnExitReason.MODEL_FAILED
                error_category = "protocol_packet_build_failed"
                safe_failure = safe_error("model_protocol")
                break
            # Tools were used but produced nothing citable. Failing the turn
            # would punish the reader for a dry search, so the answer stands
            # with its own honesty about the gap. A quote or an opening-line
            # claim is not honesty about a gap: send it back once to open the
            # lines or drop the claim.
            # A chapter citation with nothing opened (this turn or earlier in
            # the conversation) is memory dressed as evidence.
            memory_citations = [
                chapter
                for chapter in cited_chapters(assistant.content)
                if chapter not in earlier_opened
            ]
            if (
                domain != "fanfic"
                and not unopened_text_reprompted
                and (
                    memory_citations
                    or unopened_text_claims(
                        assistant.content,
                        None,
                        reader_text=turn_brief.actual_ask,
                    )
                )
            ):
                unopened_text_reprompted = True
                candidate_note = UNOPENED_TEXT_CORRECTION
                continue
            

            persisted, published = await persist_answer(
                    assistant, response_deltas
                )
            if not persisted:
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("assistant_persistence")
                break
            if not published:
                exit_reason = TurnExitReason.INTERRUPTED
                safe_failure = safe_error("interrupted")
                break
            final_text = assistant.content
            completed_response = True
            break

        # Some providers label a tool-call turn as STOP. The calls are
        # structured and the arguments are parsed like any other, so run
        # them instead of failing the reader's turn on a label.
        if response.stop_reason not in (
            ModelStopReason.TOOL_USE,
            ModelStopReason.STOP,
        ):
            exit_reason = TurnExitReason.MODEL_FAILED
            error_category = "protocol_stop_reason"
            raw_stop_reason = response.raw_stop_reason or ""
            safe_failure = safe_error("model_protocol")
            break
        if forced_answer:
            # The final call must answer; a tool call here means the model
            # refused, and running it would starve the answer again.
            exit_reason = TurnExitReason.LIMIT_REACHED
            safe_failure = safe_error("limit")
            break
        if not tool_calls or not _tool_calls_are_safe(
            tool_calls,
            known_call_ids,
        ):
            exit_reason = TurnExitReason.MODEL_FAILED
            error_category = (
                "protocol_unsafe_tool_calls" if tool_calls else "protocol_no_tool_calls"
            )
            raw_stop_reason = response.raw_stop_reason or ""
            safe_failure = safe_error("model_protocol")
            break
        tool_steps_used += 1
        known_call_ids.update(
            tool_call.call_id
            for tool_call in tool_calls
        )

        assistant = _assistant_message(
            turn_id=turn_id,
            response_message=response_message,
        )
        new_messages.append(assistant)
        if not await _persist(assistant, persist_message):
            exit_reason = TurnExitReason.PERSISTENCE_FAILED
            safe_failure = safe_error("assistant_persistence")
            break

        batch_cancelled = cancel_event.is_set()
        for tool_call in tool_calls:
            call_evidence = ToolCallMessage(
                message_id=_message_id(),
                turn_id=turn_id,
                call_id=tool_call.call_id,
                tool_name=tool_call.name,
                arguments_json=tool_call.arguments_json,
            )
            new_messages.append(call_evidence)
            if not await _persist(call_evidence, persist_message):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("tool_call_persistence")
                break

            if batch_cancelled or cancel_event.is_set():
                tool_result = ToolResult(
                    ok=False,
                    error_code=CANCELLED,
                    error="Tool call was cancelled.",
                )
            else:
                context = ToolExecutionContext(
                    session_id=session_id,
                    turn_id=turn_id,
                    call_id=tool_call.call_id,
                    cancel_event=cancel_event,
                    on_tool_event=on_tool_event,
                    on_skills_loaded=note_skills_loaded,
                    max_chapter=max_chapter,
                )
                tool_result = await tool_registry.dispatch(
                    tool_call.name,
                    tool_call.arguments_json,
                    active_names=active_tools,
                    policy=execution_policy,
                    context=context,
                )
            if tool_result.started:
                tool_starts += 1
            turn_tool_results.append(tool_result)
            if (
                tool_result.error_code == CANCELLED
                or cancel_event.is_set()
            ):
                batch_cancelled = True

            result_evidence = ToolResultMessage(
                message_id=_message_id(),
                turn_id=turn_id,
                call_id=tool_call.call_id,
                tool_name=tool_call.name,
                ok=tool_result.ok,
                result=tool_result.result,
                error_code=tool_result.error_code,
                error=(
                    None
                    if tool_result.ok
                    else tool_result.error
                    or safe_tool_error(
                        tool_result.error_code or "tool_failed"
                    )
                ),
            )
            new_messages.append(result_evidence)
            if not await _persist(result_evidence, persist_message):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("tool_result_persistence")
                break

        if exit_reason != TurnExitReason.COMPLETED:
            break
        if batch_cancelled:
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break

    if (
        model_steps >= max_steps
        and exit_reason == TurnExitReason.COMPLETED
        and not completed_response
    ):
        exit_reason = TurnExitReason.LIMIT_REACHED
        safe_failure = safe_error("limit")
    elif exit_reason == TurnExitReason.COMPLETED and not completed_response:
        # A turn that ends without an accepted answer must never report a
        # completed turn: the reader would get a silent empty reply and no
        # retry affordance. Fail honestly instead.
        logger.warning(
            "turn ended without an accepted answer "
            "(steps=%d tools=%d rejections=%d last_stop=%s)",
            model_steps,
            tool_starts,
            candidate_rejections,
            last_stop_reason,
        )
        exit_reason = TurnExitReason.MODEL_FAILED
        error_category = "protocol_empty_answer"
        safe_failure = safe_error("empty_answer")

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
        final_text=final_text,
        model_steps=model_steps,
        tool_starts=tool_starts,
        new_messages=[
            _without_private_reasoning(message)
            for message in new_messages
        ],
        safe_failure=safe_failure,
        model_name=model_name,
        provider_name=provider_name,
        input_characters=input_characters,
        error_category=error_category,
        raw_stop_reason=raw_stop_reason,
        rescued_from=rescued_from,
        skill_ids=tuple(dict.fromkeys([*routed_plan.ids, *loaded_skills])),
        tool_steps=tool_steps_used,
        tool_limit=budget.limit,
        thinking=deepest_thinking,
        call_seconds=tuple(call_seconds),
    )
