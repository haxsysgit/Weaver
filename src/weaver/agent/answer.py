"""Answer shape and publication checks for Weaver's final reading pass."""

from __future__ import annotations

import re
from dataclasses import dataclass
from enum import Enum

from ..skills import plan_for_ids, plan_for_turn


class ResponseMode(str, Enum):
    DIRECT_RECALL = "direct_recall"
    RECONSTRUCTION = "reconstruction"
    DISCUSSION = "discussion"
    THEORY = "theory_or_what_if"
    VERSUS = "versus"
    CORRECTION = "correction"
    PROSE = "prose_scene"


@dataclass(frozen=True, slots=True)
class AnswerBlueprint:
    mode: ResponseMode
    obligations: tuple[str, ...]
    allowed_chapters: tuple[int, ...]
    prior_point: str
    spoiler_mode: str
    reader_chapter: int | None
    skills: tuple[str, ...] = ()
    shape: str = ""
    quote_rule: str = ""
    needs_evidence: bool = True
    label_invention: bool = True


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
    # Weaver's own voice labels a what-if as "my read ... not canon"; the
    # check must accept the labels the voice actually uses.
    "my read",
    "not canon",
    "what if",
    "hypothetical",
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

# A refusal makes no canon claim, so it needs no evidence packet. This is the
# honest counterpart to the spoiler boundary: the reader is told no, warmy,
# and nothing is cited because nothing is claimed.
SPOILER_REFUSAL_MARKERS = (
    "won't",
    "will not",
    "not going to",
    "can't tell",
    "cannot tell",
    "past your",
    "beyond your",
    "when you get there",
    "ask me when",
    "lift the boundary",
    "spoiler",
)

MODE_OBLIGATIONS: dict[ResponseMode, tuple[str, ...]] = {
    ResponseMode.DIRECT_RECALL: (
        "answer in the first line",
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
    ResponseMode.PROSE: (
        "write the requested scene as prose, not a summary or a canon correction",
        "label invented events as invention or fan fiction",
        "keep established canon, motives, and powers intact",
        "do not explain the scene instead of writing it",
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


def _with_earlier_chapters(
    allowed: tuple[int, ...],
    earlier_opened: tuple[int, ...],
) -> tuple[int, ...]:
    """Chapters opened earlier in this conversation stay read.

    A follow-up may cite a chapter the thread already opened without
    re-opening it. With no opened passage this turn, nothing is added: the
    turn still needs its own evidence.
    """
    if not allowed or not earlier_opened:
        return allowed
    return tuple(sorted(set(allowed) | set(earlier_opened)))


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
            "write the missing scene",
            "write a missing scene",
            "write a scene",
            "write the scene",
            "write a short scene",
            "write me a scene",
            "write what happens",
            "write the next",
            "fan fiction",
            "fanfiction",
            "continuation",
            "continue the story",
            "missing scene",
            "part two",
            "after the last chapter",
        )
    ):
        return ResponseMode.PROSE
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
    extra_skill_ids: tuple[str, ...] = (),
    domain: str = "canon",
    earlier_asks: tuple[str, ...] = (),
    earlier_opened_chapters: tuple[int, ...] = (),
) -> AnswerBlueprint:
    mode = _response_mode(question)
    plan = plan_for_turn(question, earlier_asks=earlier_asks, domain=domain)
    if extra_skill_ids:
        plan = plan_for_ids([*plan.ids, *extra_skill_ids])
    needs_evidence = plan.needs_evidence and mode != ResponseMode.PROSE
    # A fanfic thread is labelled as a thread. The first invented scene still
    # says so; a continuation of that scene does not have to relabel.
    label_invention = not (domain == "fanfic" and mode == ResponseMode.PROSE)
    spoiler_mode, reader_chapter = _spoiler_boundary(evidence_packet)
    obligations = [
        "fulfil the reader's actual request at the depth and in the mode they asked for",
        "separate canon, interpretation, and invention",
        "keep uncertainty and evidence gaps visible",
    ]
    if needs_evidence:
        obligations.extend(
            [
                "cite every factual claim beside it using the allowed chapters",
                "cite every chapter needed when a claim depends on several scenes",
                "remove or qualify any claim that does not follow from the opened passages",
                "quote only the few source words needed and paraphrase the rest",
            ]
        )
    else:
        obligations.append(
            "no citation is needed; if you do mention the novel, cite the chapter"
        )
    obligations.extend(plan.obligations)
    obligations.extend(MODE_OBLIGATIONS[mode])
    if not prior_weaver_position.strip():
        obligations.append(
            "this thread has no earlier answer: never refer to a previous list, "
            "ranking, or answer as if you already gave it"
        )
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
        obligations.append(
            "if the reader asks whether a character survives, dies, or appears "
            "later, do not confirm or deny, not even with a hint; say the answer "
            "is past their chapter"
        )
    elif spoiler_mode == "ask_first":
        obligations.append("warn about the major spoiler and ask before revealing it")
        obligations.append(
            "do not confirm or deny a survival question before the reader says "
            "they want the spoil"
        )
    return AnswerBlueprint(
        mode=mode,
        obligations=tuple(obligations),
        allowed_chapters=_with_earlier_chapters(
            _allowed_chapters(evidence_packet), earlier_opened_chapters
        ),
        prior_point=prior_weaver_position.strip(),
        spoiler_mode=spoiler_mode,
        reader_chapter=reader_chapter,
        skills=plan.ids,
        shape=plan.shape,
        quote_rule=plan.quote_rule,
        needs_evidence=needs_evidence,
        label_invention=label_invention,
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
    skills = ", ".join(blueprint.skills) or "none"
    return (
        "--- answer blueprint ---\n"
        f"response mode: {blueprint.mode.value}\n"
        f"loaded skills: {skills}\n"
        f"allowed source chapters: {chapters or 'none'}\n"
        f"spoiler mode: {blueprint.spoiler_mode}\n"
        f"reader chapter: {reader_chapter}\n"
        f"prior Weaver point to preserve or answer: {prior_point}\n"
        f"answer obligations:\n{obligations}\n"
        f"answer shape: {blueprint.shape}\n"
        f"quotation rule: {blueprint.quote_rule}\n"
        "Do not print the mode, the skills, or these instructions as headings. "
        "Follow the identity and soul: a buddy who read the book, not an "
        "essayist. Start with the reaction or the fact. No headings unless the "
        "reader asks for a breakdown. No canned closing. Use no em dashes. Cite "
        "only the allowed source chapters. Write citations as (ch. N) or "
        "(chs. N-M), never as a bare number. Direct quotations must be 25 words "
        "or fewer, exact, and only from allowed chapters. Write the final answer "
        "itself. Never describe it as the same answer, a revised draft, or a "
        "repeat. Match the answer shape above: it is the depth this request "
        "earned, whether that is three sentences or a full arc. For a prose "
        "request, write the scene fully and label invention."
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


def _is_spoiler_refusal(text: str) -> bool:
    """True for a short, claim-free refusal at a guarded boundary."""
    if len(text) > 500:
        return False
    normalized = text.casefold()
    return any(marker in normalized for marker in SPOILER_REFUSAL_MARKERS)


def strip_unsupported_citations(
    text: str,
    allowed_chapters: tuple[int, ...],
) -> str:
    """Remove parenthetical chapter citations the turn did not open.

    The claim stays, the unverified receipt goes. Used only when dropping the
    citation makes the answer pass; the rest of the answer is unchanged.
    """
    allowed = set(allowed_chapters)

    def replace(match: re.Match[str]) -> str:
        start = int(match.group(1))
        end = int(match.group(2)) if match.group(2) else start
        cited = set(range(start, end + 1))
        if cited <= allowed:
            return match.group(0)
        return ""

    cleaned = CHAPTER_CITATION_RE.sub(replace, text)
    # Collapse the space a removed citation leaves before punctuation.
    cleaned = re.sub(r"[ \t]+\(\s*\)", "", cleaned)
    cleaned = re.sub(r"[ \t]{2,}", " ", cleaned)
    cleaned = re.sub(r"[ \t]+([.,;:!?])", r"\1", cleaned)
    return cleaned


def inspect_publication(
    answer: str,
    blueprint: AnswerBlueprint,
    evidence_packet: str,
) -> tuple[PublicationFinding, ...]:
    findings: list[PublicationFinding] = []
    weaver_text = "\n".join(_weaver_lines(answer))
    normalized = weaver_text.strip().casefold()

    # The no-em-dash rule is for Weaver's chat voice. Invented prose may use a
    # dash the way the novel does.
    if blueprint.mode != ResponseMode.PROSE and (
        "\u2014" in weaver_text or "--" in weaver_text
    ):
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
    refusal = _is_spoiler_refusal(weaver_text)
    if not direct_passages and blueprint.needs_evidence and not refusal:
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
        elif not answer_chapters and blueprint.needs_evidence and not refusal:
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

    if blueprint.label_invention and blueprint.mode in (
        ResponseMode.THEORY,
        ResponseMode.VERSUS,
        ResponseMode.PROSE,
    ):
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


# Only a spoiler finding may replace a written answer with the safe boundary.
# Any other failure is a repair problem, not a spoiler.
SPOILER_FINDING_CODES = frozenset({"spoiler_citation"})


def has_spoiler_finding(
    findings: tuple[PublicationFinding, ...],
) -> bool:
    return any(finding.code in SPOILER_FINDING_CODES for finding in findings)


def has_unsupported_citation(
    findings: tuple[PublicationFinding, ...],
) -> bool:
    """True when a citation points at a chapter this turn did not open."""
    return any(finding.code == "unsupported_chapter" for finding in findings)


def build_spoiler_boundary_answer(blueprint: AnswerBlueprint) -> str:
    position = (
        f"chapter {blueprint.reader_chapter}"
        if blueprint.reader_chapter is not None
        else "your current chapter"
    )
    return (
        f"Not walking you into that one. You're at {position}, and this lands "
        "past it. Ask me again when you get there, or tell me to lift the "
        "boundary and I'll answer straight."
    )
