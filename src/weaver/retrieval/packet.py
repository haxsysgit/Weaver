"""Reading-packet assembly for Plan 15's final reading phase.

After the open reading loop produces a validated answer candidate, this
module assembles one ephemeral reading packet from the turn's evidence:

- every passage the model opened via read_chapters, re-opened with an
  expanded window (the dominant retrieval miss was the answer landing
  just below the cutoff, so each passage grows by EXPAND_LINES)
- the top notebook statements the searches surfaced (they often carry
  the answer text)
- the spoiler judge's verdict for the answer framing, from the user's
  position and knob (never a model argument)

The packet is plain text appended to the final toolless reading call and
is never persisted. One shared cap bounds every request path.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, replace

from weaver.spoilers.judge import Citation, SpoilerJudge, Verdict

# Lines added above and below each opened passage when re-reading it.
EXPAND_LINES = 20

# One evidence budget for sponsored and BYOK turns. The sponsored request
# boundary is 120 KiB, so 24K leaves room for the prompt, compact turn brief,
# candidate answer, tool schema framing, and JSON overhead.
PACKET_CHAR_CAP = 24_000

MAX_NOTEBOOK_STATEMENTS = 5
MAX_OPENED_PASSAGES = 12

VERDICT_FRAMING = {
    "full": (
        "The reader is at chapter {chapter}; all cited material is at or "
        "before it, so answer completely."
    ),
    "guarded": (
        "The reader is at chapter {chapter}, and parts of this material "
        "come from later in the story. Answer the question but protect "
        "the story beats: hint, do not state the payoff, and close with "
        "an offer to give the full spoil if they ask."
    ),
    "ask_first": (
        "The reader is at chapter {chapter}, and answering would spoil a "
        "major story beat (a death, reveal, twist, or arc payoff). Warn "
        "them and ask whether they want the spoil before answering."
    ),
}


@dataclass(frozen=True)
class Packet:
    text: str
    verdict: Verdict
    board: "EvidenceBoard"


@dataclass(frozen=True)
class EvidenceSource:
    chapter: int
    line_start: int
    line_end: int
    chapter_end_reached: bool | None


@dataclass(frozen=True)
class ClaimEvidence:
    index: int
    cited_chapters: tuple[int, ...]
    unsupported_chapters: tuple[int, ...]
    citation_coverage: str


@dataclass(frozen=True)
class EvidenceBoard:
    """Ephemeral candidate-to-source map for the final reading call."""

    direct_sources: tuple[EvidenceSource, ...]
    lead_chapters: tuple[int, ...]
    cited_chapters: tuple[int, ...]
    unsupported_chapters: tuple[int, ...]
    uncited_claims: tuple[int, ...]
    claims: tuple[ClaimEvidence, ...]


CITATION_RE = re.compile(
    r"\bch(?:apter)?\.?\s*(\d{1,5})(?:\s*[-\u2013]\s*(\d{1,5}))?",
    re.IGNORECASE,
)
CLAIM_SPLIT_RE = re.compile(
    r"(?<!\bch\.)(?<!chapter\.)(?<=[.!?])\s+|\n+",
    re.IGNORECASE,
)


def _beat_lines(judge: SpoilerJudge | None, chapter: int) -> str:
    """One 'beat: <title>' line per story beat covering the chapter."""
    if judge is None:
        return ""
    lines = [f"beat: {beat['title']}" for beat in judge.beats_for(chapter)]
    return "\n".join(lines) + ("\n" if lines else "")


def _collect_evidence(tool_results: list) -> tuple[list[tuple[int, int, int]], list[dict]]:
    """Handles the model opened plus notebook hits it surfaced."""
    handles: list[tuple[int, int, int]] = []
    notebook_hits: list[dict] = []
    seen: set[str] = set()
    for tr in tool_results:
        result = tr.result or {}
        if tr.error_code is not None:
            continue
        evidence = result.get("durable_evidence")
        if isinstance(evidence, dict):
            if evidence.get("source_kind") == "novel" and evidence.get("passage_handle"):
                key = str(evidence["passage_handle"])
                if key not in seen:
                    seen.add(key)
                    # durable evidence carries chapter/line_start/line_end
                    handles.append(
                        (
                            int(evidence["chapter"]),
                            int(evidence["line_start"]),
                            int(evidence["line_end"]),
                        )
                    )
        hits = result.get("notebook_hits") or result.get("hits") or []
        if result.get("notebook_hits") is not None:
            for h in hits:
                if h.get("statement_id") and h["statement_id"] not in seen:
                    seen.add(h["statement_id"])
                    notebook_hits.append(h)
    return handles, notebook_hits


def _candidate_chapters(candidate: str) -> tuple[int, ...]:
    chapters: set[int] = set()
    for match in CITATION_RE.finditer(candidate):
        start = int(match.group(1))
        end_text = match.group(2)
        if end_text is None:
            chapters.add(start)
            continue
        end = int(end_text)
        if end < start or end - start > 20:
            chapters.update((start, end))
            continue
        chapters.update(range(start, end + 1))
    return tuple(sorted(chapters))


def _candidate_claims(candidate: str) -> tuple[str, ...]:
    return tuple(
        claim.strip()
        for claim in CLAIM_SPLIT_RE.split(candidate.strip())
        if claim.strip()
    )


def _build_evidence_board(
    tool_results: list,
    candidate: str,
    notebook_hits: list[dict],
) -> EvidenceBoard:
    direct_sources: list[EvidenceSource] = []
    seen_sources: set[tuple[int, int, int]] = set()
    for tool_result in tool_results:
        payload = tool_result.result or {}
        evidence = payload.get("durable_evidence")
        if not isinstance(evidence, dict) or not evidence.get("passage_handle"):
            continue
        key = (
            int(evidence["chapter"]),
            int(evidence["line_start"]),
            int(evidence["line_end"]),
        )
        if key in seen_sources:
            continue
        seen_sources.add(key)
        opened_result = payload.get("result")
        chapter_end_reached = None
        if isinstance(opened_result, dict):
            value = opened_result.get("end_of_chapter")
            if isinstance(value, bool):
                chapter_end_reached = value
        direct_sources.append(
            EvidenceSource(
                chapter=key[0],
                line_start=key[1],
                line_end=key[2],
                chapter_end_reached=chapter_end_reached,
            )
        )

    opened_chapters = {source.chapter for source in direct_sources}
    claims: list[ClaimEvidence] = []
    for index, claim in enumerate(_candidate_claims(candidate), start=1):
        claim_chapters = _candidate_chapters(claim)
        unsupported_claim_chapters = tuple(
            chapter for chapter in claim_chapters if chapter not in opened_chapters
        )
        if not claim_chapters:
            citation_coverage = "missing_citation"
        elif unsupported_claim_chapters:
            citation_coverage = "unopened_chapter"
        else:
            citation_coverage = "citation_covered"
        claims.append(
            ClaimEvidence(
                index=index,
                cited_chapters=claim_chapters,
                unsupported_chapters=unsupported_claim_chapters,
                citation_coverage=citation_coverage,
            )
        )
    cited_chapters = tuple(
        sorted({chapter for claim in claims for chapter in claim.cited_chapters})
    )
    unsupported = tuple(
        sorted(
            {
                chapter
                for claim in claims
                for chapter in claim.unsupported_chapters
            }
        )
    )
    uncited_claims = tuple(
        claim.index
        for claim in claims
        if claim.citation_coverage == "missing_citation"
    )
    lead_chapters = tuple(
        sorted(
            {
                int(hit["chapter"])
                for hit in notebook_hits
                if hit.get("chapter") is not None
            }
        )
    )
    return EvidenceBoard(
        direct_sources=tuple(direct_sources),
        lead_chapters=lead_chapters,
        cited_chapters=cited_chapters,
        unsupported_chapters=unsupported,
        uncited_claims=uncited_claims,
        claims=tuple(claims),
    )


def _format_evidence_board(board: EvidenceBoard) -> str:
    direct = ", ".join(
        f"chapter {source.chapter} lines {source.line_start}-{source.line_end}"
        for source in board.direct_sources
    ) or "none"
    leads = ", ".join(f"chapter {chapter}" for chapter in board.lead_chapters) or "none"
    citations = ", ".join(
        f"chapter {chapter}" for chapter in board.cited_chapters
    ) or "none"
    gap_parts = [
        f"claim {index} has no chapter citation" for index in board.uncited_claims
    ]
    if board.unsupported_chapters:
        gap_parts.extend(
            f"chapter {chapter} was not opened"
            for chapter in board.unsupported_chapters
        )
    gaps = ", ".join(gap_parts) or "none"
    claim_map = ", ".join(
        f"claim {claim.index}: {claim.citation_coverage}"
        for claim in board.claims
    ) or "none"
    boundaries = ", ".join(
        f"chapter {source.chapter}: "
        + (
            "chapter end reached"
            if source.chapter_end_reached is True
            else "more chapter text remains"
            if source.chapter_end_reached is False
            else "chapter boundary unknown"
        )
        for source in board.direct_sources
    ) or "none"
    return (
        "--- evidence board ---\n"
        f"direct sources: {direct}\n"
        f"notebook leads: {leads}\n"
        f"candidate citations: {citations}\n"
        f"citation coverage: {claim_map}\n"
        f"citation gaps: {gaps}\n"
        f"scene boundaries: {boundaries}\n"
        "citation coverage: does not prove that the opened lines support a claim\n"
        "scene resolution: requires reading judgment; a chapter boundary is not proof\n"
        "Use direct sources for canon. Leads only locate. Keep gaps visible."
    )


def _board_with_kept_sources(
    board: EvidenceBoard,
    sources: tuple[EvidenceSource, ...],
) -> EvidenceBoard:
    opened_chapters = {source.chapter for source in sources}
    claims = tuple(
        replace(
            claim,
            unsupported_chapters=tuple(
                chapter
                for chapter in claim.cited_chapters
                if chapter not in opened_chapters
            ),
            citation_coverage=(
                "missing_citation"
                if not claim.cited_chapters
                else "unopened_chapter"
                if any(
                    chapter not in opened_chapters
                    for chapter in claim.cited_chapters
                )
                else "citation_covered"
            ),
        )
        for claim in board.claims
    )
    unsupported = tuple(
        sorted(
            {
                chapter
                for claim in claims
                for chapter in claim.unsupported_chapters
            }
        )
    )
    return replace(
        board,
        direct_sources=sources,
        unsupported_chapters=unsupported,
        claims=claims,
    )


def build_packet(
    service,
    tool_results: list,
    *,
    candidate: str = "",
    user_chapter: int | None = None,
    spoiler_mode: str = "protect",
    judge: SpoilerJudge | None = None,
    cap_override: int | None = None,
) -> Packet | None:
    """Assemble the reading packet from the turn's evidence.

    Returns None when the turn produced no evidence (the candidate stands
    as the answer). Deterministic: same evidence, same packet.
    """
    handles, notebook_hits = _collect_evidence(tool_results)
    if not handles and not notebook_hits:
        return None

    board = _build_evidence_board(tool_results, candidate, notebook_hits)

    cap = cap_override or PACKET_CHAR_CAP
    parts: list[str] = []
    citations: list[Citation] = []

    # 1. Opened passages, expanded windows, oldest first so trimming
    # drops the earliest reads. Beat lines give the final reading call the
    # semantic shape of the story around the passage.
    source_by_handle = {
        (source.chapter, source.line_start, source.line_end): source
        for source in board.direct_sources
    }
    opened: list[tuple[EvidenceSource, str]] = []
    for chapter, start, end in handles[:MAX_OPENED_PASSAGES]:
        passage = service.index.open_lines(
            chapter,
            max(2, start - EXPAND_LINES),
            end + EXPAND_LINES,
        )
        original_source = source_by_handle[(chapter, start, end)]
        expanded_source = replace(
            original_source,
            line_start=passage.line_start,
            line_end=passage.line_end,
        )
        opened.append(
            (
                expanded_source,
                f"--- chapter {chapter}, lines {passage.line_start}-{passage.line_end} ---\n"
                f"{_beat_lines(judge, chapter)}{passage.text}",
            )
        )
        citations.append(Citation(chapter=chapter))
    # 2. Top notebook statements surfaced by the searches.
    statements = []
    for h in notebook_hits[:MAX_NOTEBOOK_STATEMENTS]:
        st = service.notebook.by_id.get(h.get("statement_id", ""), {})
        text = st.get("statement", "") or h.get("text", "")
        if not text:
            continue
        statements.append(
            f"--- notebook statement {h.get('statement_id')} "
            f"[{h.get('kind') or st.get('kind', '')}] ch {h.get('chapter')} ---\n"
            f"{_beat_lines(judge, int(h['chapter']))}{text}"
        )
        citations.append(
            Citation(chapter=int(h["chapter"]), statement_id=h.get("statement_id"))
        )
    # 3. Judge verdict + framing.
    if judge is None:
        judge = SpoilerJudge()
    verdict = judge.decide(
        citations,
        user_chapter=user_chapter,
        no_spoilers=spoiler_mode == "none",
    )
    framing = VERDICT_FRAMING[verdict.mode].format(chapter=user_chapter)
    framing_text = f"--- spoiler framing ---\n{framing}"

    # 4. Size cap: direct novel evidence outranks notebook leads. The evidence
    # board and spoiler framing always remain so a trimmed packet stays honest.
    kept_opened: list[tuple[EvidenceSource, str]] = []
    for source, passage in reversed(opened):
        candidate_opened = [(source, passage), *kept_opened]
        candidate_board = _board_with_kept_sources(
            board,
            tuple(item_source for item_source, _ in candidate_opened),
        )
        candidate_parts = [
            *(text for _, text in candidate_opened),
            _format_evidence_board(candidate_board),
            framing_text,
        ]
        if len("\n\n".join(candidate_parts)) > cap:
            continue
        kept_opened = candidate_opened

    board = _board_with_kept_sources(
        board,
        tuple(source for source, _ in kept_opened),
    )
    board_text = _format_evidence_board(board)
    kept_opened_text = [text for _, text in kept_opened]
    fixed = [board_text, framing_text]

    kept_statements: list[str] = []
    for statement in statements:
        candidate_parts = [*kept_opened_text, *kept_statements, statement, *fixed]
        if len("\n\n".join(candidate_parts)) > cap:
            continue
        kept_statements.append(statement)

    parts = [*kept_opened_text, *kept_statements, *fixed]
    text = "\n\n".join(parts)
    return Packet(text=text, verdict=verdict, board=board)
