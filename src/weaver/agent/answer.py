"""Answer shape and publication checks for Weaver's final reading pass."""

from __future__ import annotations

import re
from dataclasses import dataclass
from enum import Enum


class ResponseMode(str, Enum):
    DIRECT_RECALL = "direct_recall"
    RECONSTRUCTION = "reconstruction"
    DISCUSSION = "discussion"
    THEORY = "theory_or_what_if"
    CORRECTION = "correction"


@dataclass(frozen=True, slots=True)
class AnswerBlueprint:
    mode: ResponseMode
    obligations: tuple[str, ...]
    allowed_chapters: tuple[int, ...]
    prior_point: str
    spoiler_mode: str
    reader_chapter: int | None


@dataclass(frozen=True, slots=True)
class PublicationFinding:
    code: str
    detail: str


CHAPTER_CITATION_RE = re.compile(
    r"\bch(?:s|apters?)?\.?\s*(\d{1,5})(?:\s*[-\u2013]\s*(\d{1,5}))?",
    re.IGNORECASE,
)
DIRECT_SOURCES_RE = re.compile(r"^direct sources:\s*(.+)$", re.MULTILINE)
READER_CHAPTER_RE = re.compile(r"reader is at chapter\s+(\d{1,5})", re.IGNORECASE)

THEORY_MARKERS = (
    "my take",
    "my guess",
    "speculation",
    "speculative",
    "invented",
    "i'm imagining",
    "in this version",
)
GENERIC_OPENINGS = (
    "absolutely",
    "certainly",
    "great question",
    "excellent question",
    "let's dive in",
    "to answer your question",
)
GENERIC_PHRASES = (
    "in conclusion",
    "in summary",
    "i hope this helps",
    "feel free to reach out",
    "let me know if you need anything else",
)
EXPOSED_MACHINERY = (
    "evidence board",
    "reading packet",
    "semantic_search",
    "read_chapters",
    "browse_chapters",
    "tool call",
    "notebook hit",
)

MODE_OBLIGATIONS: dict[ResponseMode, tuple[str, ...]] = {
    ResponseMode.DIRECT_RECALL: (
        "answer immediately",
        "give only the context needed to understand the answer",
    ),
    ResponseMode.RECONSTRUCTION: (
        "state the outcome before narrating the sequence",
        "keep the actors, turning points, outcome, and relevant aftermath in order",
    ),
    ResponseMode.DISCUSSION: (
        "take a clear position",
        "ground the position in canon and address the strongest counterpoint",
    ),
    ResponseMode.THEORY: (
        "state the canon constraints before extending the story",
        "label invented events as a take, speculation, or invention",
    ),
    ResponseMode.CORRECTION: (
        "state the correction plainly",
        "preserve the part of the reader's memory that canon supports",
    ),
}


def _extract_chapter_citations(text: str) -> tuple[int, ...]:
    chapters: set[int] = set()
    for match in CHAPTER_CITATION_RE.finditer(text):
        start = int(match.group(1))
        end_text = match.group(2)
        if end_text is None:
            chapters.add(start)
            continue
        end = int(end_text)
        if end < start or end - start > 50:
            chapters.update((start, end))
            continue
        chapters.update(range(start, end + 1))
    return tuple(sorted(chapters))


def _allowed_chapters(evidence_packet: str) -> tuple[int, ...]:
    match = DIRECT_SOURCES_RE.search(evidence_packet)
    if match is None:
        return ()
    return _extract_chapter_citations(match.group(1))


def _spoiler_boundary(evidence_packet: str) -> tuple[str, int | None]:
    normalized = evidence_packet.casefold()
    if "ask whether they want the spoil" in normalized:
        mode = "ask_first"
    elif "protect the story beats" in normalized or "hint, do not state" in normalized:
        mode = "guarded"
    elif "answer completely" in normalized:
        mode = "full"
    else:
        mode = "unknown"
    chapter_match = READER_CHAPTER_RE.search(evidence_packet)
    reader_chapter = int(chapter_match.group(1)) if chapter_match else None
    return mode, reader_chapter


def _response_mode(question: str) -> ResponseMode:
    normalized = question.strip().casefold()
    if any(
        marker in normalized
        for marker in ("what if", "what would've", "what would have", "imagine if")
    ):
        return ResponseMode.THEORY
    if any(
        marker in normalized
        for marker in ("right?", "isn't that", "didn't", "i remember", "correct me")
    ):
        return ResponseMode.CORRECTION
    if any(
        marker in normalized
        for marker in (
            "do you think",
            "your take",
            "was it fair",
            "i think",
            "i disagree",
            "you're wrong",
            "you are wrong",
            "no,",
        )
    ):
        return ResponseMode.DISCUSSION
    if any(
        marker in normalized
        for marker in (
            "what happened",
            "how did",
            "remind me",
            "walk me through",
            "narrate",
            "reconstruct",
        )
    ):
        return ResponseMode.RECONSTRUCTION
    return ResponseMode.DIRECT_RECALL


def build_answer_blueprint(
    *,
    question: str,
    prior_weaver_position: str,
    reader_challenges_prior_answer: bool,
    evidence_packet: str,
) -> AnswerBlueprint:
    mode = _response_mode(question)
    spoiler_mode, reader_chapter = _spoiler_boundary(evidence_packet)
    obligations = [
        "answer the reader's actual question first",
        "cite factual claims from the allowed chapters",
        "separate canon, interpretation, and invention",
        "keep uncertainty and evidence gaps visible",
        *MODE_OBLIGATIONS[mode],
    ]
    if reader_challenges_prior_answer:
        obligations.append("address the reader's challenge and the prior Weaver position")
    if spoiler_mode == "guarded":
        obligations.append("protect later story beats and do not cite beyond the reader's position")
    elif spoiler_mode == "ask_first":
        obligations.append("warn about the major spoiler and ask before revealing it")
    return AnswerBlueprint(
        mode=mode,
        obligations=tuple(obligations),
        allowed_chapters=_allowed_chapters(evidence_packet),
        prior_point=prior_weaver_position.strip(),
        spoiler_mode=spoiler_mode,
        reader_chapter=reader_chapter,
    )


def format_answer_blueprint(blueprint: AnswerBlueprint) -> str:
    chapters = ", ".join(str(chapter) for chapter in blueprint.allowed_chapters)
    obligations = "\n".join(f"- {item}" for item in blueprint.obligations)
    prior_point = blueprint.prior_point or "none"
    reader_chapter = (
        str(blueprint.reader_chapter)
        if blueprint.reader_chapter is not None
        else "unknown"
    )
    return (
        "--- answer blueprint ---\n"
        f"response mode: {blueprint.mode.value}\n"
        f"allowed source chapters: {chapters or 'none'}\n"
        f"spoiler mode: {blueprint.spoiler_mode}\n"
        f"reader chapter: {reader_chapter}\n"
        f"prior Weaver point to preserve or answer: {prior_point}\n"
        f"answer obligations:\n{obligations}\n"
        "Do not print the mode or these instructions as headings. "
        "Sound like a well-read friend, keep in-world flavor light, and avoid "
        "canned closing questions."
    )


def _weaver_lines(answer: str) -> tuple[str, ...]:
    return tuple(
        line
        for line in answer.splitlines()
        if not line.lstrip().startswith(">")
    )


def _quote_lines(answer: str) -> tuple[str, ...]:
    quotes = []
    for line in answer.splitlines():
        stripped = line.lstrip()
        if not stripped.startswith(">"):
            continue
        quote = stripped[1:].strip()
        if quote:
            quotes.append(quote)
    return tuple(quotes)


def inspect_publication(
    answer: str,
    blueprint: AnswerBlueprint,
    evidence_packet: str,
) -> tuple[PublicationFinding, ...]:
    findings: list[PublicationFinding] = []
    weaver_text = "\n".join(_weaver_lines(answer))
    normalized = weaver_text.strip().casefold()

    if "\u2014" in weaver_text or "--" in weaver_text:
        findings.append(
            PublicationFinding("em_dash", "Weaver-authored prose contains an em dash.")
        )
    if normalized.startswith(GENERIC_OPENINGS):
        findings.append(
            PublicationFinding("ai_opening", "The answer starts with a canned AI phrase.")
        )
    if any(phrase in normalized for phrase in GENERIC_PHRASES):
        findings.append(
            PublicationFinding("ai_phrase", "The answer contains generic AI phrasing.")
        )
    if any(term in normalized for term in EXPOSED_MACHINERY):
        findings.append(
            PublicationFinding(
                "exposed_machinery",
                "The answer exposes Weaver's private reading machinery.",
            )
        )

    answer_chapters = set(_extract_chapter_citations(weaver_text))
    allowed_chapters = set(blueprint.allowed_chapters)
    if allowed_chapters:
        unsupported_chapters = sorted(answer_chapters - allowed_chapters)
        if unsupported_chapters:
            chapter_list = ", ".join(str(chapter) for chapter in unsupported_chapters)
            findings.append(
                PublicationFinding(
                    "unsupported_chapter",
                    f"The answer cites unopened chapter(s): {chapter_list}.",
                )
            )
        elif not answer_chapters:
            findings.append(
                PublicationFinding(
                    "missing_citation",
                    "The answer makes a sourced claim without a chapter citation.",
                )
            )

    if (
        blueprint.spoiler_mode in {"guarded", "ask_first"}
        and blueprint.reader_chapter is not None
    ):
        later_citations = sorted(
            chapter
            for chapter in answer_chapters
            if chapter > blueprint.reader_chapter
        )
        if later_citations:
            chapter_list = ", ".join(str(chapter) for chapter in later_citations)
            findings.append(
                PublicationFinding(
                    "spoiler_citation",
                    f"The answer cites chapter(s) beyond the reader's position: {chapter_list}.",
                )
            )

    for quote in _quote_lines(answer):
        if quote in evidence_packet:
            continue
        findings.append(
            PublicationFinding(
                "changed_quote",
                "A blockquote does not exactly match the opened source packet.",
            )
        )
        break

    if blueprint.mode == ResponseMode.THEORY:
        if not any(marker in normalized for marker in THEORY_MARKERS):
            findings.append(
                PublicationFinding(
                    "unlabelled_invention",
                    "The what-if answer does not label its invented branch.",
                )
            )

    heading_count = sum(
        1 for line in weaver_text.splitlines() if line.lstrip().startswith("#")
    )
    if heading_count > 3:
        findings.append(
            PublicationFinding(
                "excessive_headings",
                "The answer uses more than three headings.",
            )
        )
    return tuple(findings)


def build_repair_instruction(findings: tuple[PublicationFinding, ...]) -> str:
    details = "\n".join(
        f"- {finding.code}: {finding.detail}" for finding in findings
    )
    return (
        "The proposed answer failed publication checks. Make one rewrite that "
        "fixes only the listed problems while preserving supported facts, "
        "chapter citations, uncertainty, and exact source quotations. Return "
        f"only the repaired answer.\nFindings:\n{details}"
    )
