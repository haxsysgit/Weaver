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
    VERSUS = "versus"
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
DIRECT_PASSAGE_RE = re.compile(
    r"^--- chapter \d+,? lines \d+-\d+ ---\n(.*?)(?=^--- |\Z)",
    re.MULTILINE | re.DOTALL,
)
DIRECT_SOURCES_RE = re.compile(r"^direct sources:\s*(.+)$", re.MULTILINE)
READER_CHAPTER_RE = re.compile(r"reader is at chapter\s+(\d{1,5})", re.IGNORECASE)

VERSUS_MARKERS = (
    "my read",
    "i'd give",
    "my money",
    "verdict",
    "confidence",
    "this is a read",
    "how it goes",
    "imagined",
    "imagining",
    "speculation",
    "speculative",
    "invented",
    "what-if",
    "i think",
)
THEORY_MARKERS = (
    "imagined",
    "imagining",
    "fan fiction",
    "my take",
    "my guess",
    "speculation",
    "speculative",
    "invented",
    "i'm imagining",
    "in this version",
    "what-if",
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
FOLLOW_UP_OPENINGS = (
    "and ",
    "but ",
    "how about ",
    "so ",
    "then ",
    "what about ",
)
QUOTE_WORD_LIMIT = 25

MODE_OBLIGATIONS: dict[ResponseMode, tuple[str, ...]] = {
    ResponseMode.DIRECT_RECALL: (
        "answer immediately",
        "give only the context needed to understand the answer",
    ),
    ResponseMode.RECONSTRUCTION: (
        "when invited to narrate, open inside a supported moment if it helps the telling",
        "keep the actors, turning points, outcome, and relevant aftermath in order",
    ),
    ResponseMode.DISCUSSION: (
        "take a clear position",
        "ground the position in canon and address the strongest counterpoint",
    ),
    ResponseMode.THEORY: (
        "preserve canon constraints and explain them where the reader needs them",
        "label the invented section visibly as invention, imagination, or a what-if",
        "paraphrase canon constraints and use no source quotation or blockquote",
        "write invented dialogue with ordinary quotation marks, never blockquotes",
        "use at most five compact canon points and keep the invented scene under 450 words",
    ),
    ResponseMode.VERSUS: (
        "state the exact versions and any missing battle conditions in one short line",
        "give each side's relevant kit with chapter evidence",
        "give each side's win conditions and the counters that matter",
        "walk the fight in a few beats and label those beats as a read, not canon",
        "end with a verdict, difficulty, confidence, and what would flip it",
    ),
    ResponseMode.CORRECTION: (
        "state the correction plainly",
        "preserve the part of the reader's memory that canon supports",
    ),
}


def _chapters_from_matches(matches) -> tuple[int, ...]:
    chapters: set[int] = set()
    for match in matches:
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


def _extract_chapter_citations(text: str) -> tuple[int, ...]:
    return _chapters_from_matches(CHAPTER_CITATION_RE.finditer(text))


def _extract_answer_chapter_citations(text: str) -> tuple[int, ...]:
    return _extract_chapter_citations(text)


def _invalid_chapter_ranges(text: str) -> tuple[str, ...]:
    invalid: list[str] = []
    for match in CHAPTER_CITATION_RE.finditer(text):
        end_text = match.group(2)
        if end_text is None:
            continue
        start = int(match.group(1))
        end = int(end_text)
        if end < start or end - start > 50:
            invalid.append(match.group(0))
    return tuple(invalid)


def _direct_passages(evidence_packet: str) -> tuple[str, ...]:
    passages: list[str] = []
    for match in DIRECT_PASSAGE_RE.finditer(evidence_packet):
        lines = match.group(1).splitlines()
        while lines and lines[0].startswith("beat: "):
            lines.pop(0)
        passages.append("\n".join(lines))
    return tuple(passages)


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
        for marker in (
            " vs ",
            " vs.",
            " versus ",
            "who wins",
            "would win",
            "fight between",
            "matchup",
            "went against",
            "compare ",
            "beat ",
        )
    ):
        return ResponseMode.VERSUS
    if any(
        marker in normalized
        for marker in (
            "what if",
            "what-if",
            "what would've",
            "what would have",
            "imagine ",
        )
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


def classify_response_mode(question: str) -> ResponseMode:
    """Public question-shape classifier for the web turn profile."""
    return _response_mode(question)


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
        "fulfil the reader's actual request at the depth and in the mode they asked for",
        "cite every factual claim beside it using the allowed chapters",
        "cite every chapter needed when a claim depends on several scenes",
        "remove or qualify any claim that does not follow from the opened passages",
        "separate canon, interpretation, and invention",
        "keep uncertainty and evidence gaps visible",
        "quote only the few source words needed and paraphrase the rest",
        *MODE_OBLIGATIONS[mode],
    ]
    if prior_weaver_position and question.strip().casefold().startswith(
        FOLLOW_UP_OPENINGS
    ):
        obligations.append(
            "continue from the prior answer without reconstructing or requoting it"
        )
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
        "Follow the identity and soul: a buddy who read the book, not an "
        "essayist. Start with the reaction or the fact. Keep a quick answer to "
        "one to three short paragraphs. No headings unless the reader asks for "
        "a breakdown. No canned closing. Use no em dash. Cite only the allowed "
        "source chapters. Write citations as (ch. N) or (chs. N-M), never as a "
        "bare number. Direct quotations must be 25 words or fewer, exact, and "
        "only from allowed chapters. Write the final answer itself. Never "
        "describe it as the same answer, a revised draft, or a repeat."
    )


def _weaver_lines(answer: str) -> tuple[str, ...]:
    return tuple(
        line
        for line in answer.splitlines()
        if not line.lstrip().startswith(">")
    )


def _quote_blocks(answer: str) -> tuple[str, ...]:
    quotes: list[str] = []
    current: list[str] = []
    for line in answer.splitlines():
        stripped = line.lstrip()
        if stripped.startswith(">"):
            quote_line = stripped[1:].strip()
            if quote_line:
                current.append(quote_line)
            continue
        if current:
            quotes.append("\n".join(current))
            current = []
    if current:
        quotes.append("\n".join(current))
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

    answer_chapters = set(_extract_answer_chapter_citations(weaver_text))
    allowed_chapters = set(blueprint.allowed_chapters)
    direct_passages = _direct_passages(evidence_packet)
    if not direct_passages:
        findings.append(
            PublicationFinding(
                "missing_direct_evidence",
                "The answer has no opened novel passage to support it.",
            )
        )
    invalid_ranges = _invalid_chapter_ranges(weaver_text)
    if invalid_ranges:
        findings.append(
            PublicationFinding(
                "malformed_chapter_range",
                "The answer uses a descending or overly broad chapter range.",
            )
        )
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

    quote_blocks = _quote_blocks(answer)
    if sum(len(quote.split()) for quote in quote_blocks) > QUOTE_WORD_LIMIT:
        findings.append(
            PublicationFinding(
                "long_quote",
                "The direct quotations exceed the public quote limit.",
            )
        )
    for quote in quote_blocks:
        if any(quote in passage for passage in direct_passages):
            continue
        findings.append(
            PublicationFinding(
                "changed_quote",
                "A blockquote does not exactly match the opened source packet.",
            )
        )
        break

    if blueprint.mode in (ResponseMode.THEORY, ResponseMode.VERSUS):
        markers = (
            VERSUS_MARKERS
            if blueprint.mode == ResponseMode.VERSUS
            else THEORY_MARKERS
        )
        if not any(marker in normalized for marker in markers):
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


NO_QUOTE_RULE = (
    "Do not include any direct quotation in the repaired answer; paraphrase "
    "the source instead."
)
QUOTE_CODES = {"long_quote", "changed_quote"}
REPAIR_RULES = {
    "ai_opening": "Remove the generic assistant opening and begin with the answer.",
    "ai_phrase": "Remove generic AI phrasing and support language.",
    "changed_quote": (
        "Use the exact source wording inside quotation marks, or remove the "
        "quotation."
    ),
    "em_dash": "Replace every em dash with a comma, period, colon, or parentheses.",
    "excessive_headings": "Keep at most three headings.",
    "exposed_machinery": (
        "Remove reading-packet, tool, prompt, and hidden-instruction language."
    ),
    "long_quote": "Shorten every direct quotation to 25 words or fewer.",
    "malformed_chapter_range": (
        "Use an explicit citation form such as (ch. 900) or (chs. 900-901)."
    ),
    "missing_citation": "Add an explicit chapter citation to each factual claim.",
    "missing_direct_evidence": (
        "Use at least one opened direct source chapter before making a factual "
        "claim."
    ),
    "spoiler_citation": "Remove citations beyond the reader's chapter boundary.",
    "unlabelled_invention": (
        "Label invented or hypothetical material visibly as invention, "
        "imagination, or what-if."
    ),
    "unsupported_chapter": "Cite only chapters listed as opened direct sources.",
}


def build_repair_instruction(findings: tuple[PublicationFinding, ...]) -> str:
    details = "\n".join(
        f"- {finding.code}: {finding.detail}" for finding in findings
    )
    rules: list[str] = []
    if any(finding.code in QUOTE_CODES for finding in findings):
        rules.append(NO_QUOTE_RULE)
    for finding in findings:
        rule = REPAIR_RULES.get(finding.code)
        if rule is not None and rule not in rules:
            rules.append(rule)
    rule_block = ""
    if rules:
        rule_block = "\nRewrite rules:\n" + "\n".join(
            f"- {rule}" for rule in rules
        )
    return (
        "The proposed answer failed publication checks. Make one rewrite that "
        "fixes only the listed problems while preserving supported facts, "
        "chapter citations, uncertainty, and exact source quotations. Return "
        f"only the repaired answer.{rule_block}\nFindings:\n{details}"
    )


def build_spoiler_boundary_answer(blueprint: AnswerBlueprint) -> str:
    position = (
        f"chapter {blueprint.reader_chapter}"
        if blueprint.reader_chapter is not None
        else "your current chapter"
    )
    return (
        f"That answer lies beyond your {position} boundary. I won't pull it "
        "backward through the story. If you want the exact answer anyway, tell "
        "me to lift the spoiler boundary for this question."
    )
