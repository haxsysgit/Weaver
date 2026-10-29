"""Scope-first routing from a reader question to a suggested skill.

The router is a hint, not a lock. It gives the turn a sane tool budget and a
starting skill. The model can load more skills with the load_skill tool, and
the budget rises when it does.
"""

from __future__ import annotations

import re
from collections.abc import Sequence

from .models import CANON, FANFIC, SkillPlan
from .registry import plan_for_ids, skill_by_id


CHAPTER_RANGE_RE = re.compile(
    r"\bch(?:s|apters?)?\.?\s*\d{1,5}\s*(?:-|\u2013|to)\s*\d{1,5}",
    re.IGNORECASE,
)
CHAPTER_ONE_RE = re.compile(
    r"\b(?:ch(?:apter)?\.?\s*\d{1,5})\b",
    re.IGNORECASE,
)

RANKING_MARKERS = (
    "rank ",
    "ranking",
    "top 10",
    "top ten",
    "top five",
    "tier list",
    "best to worst",
    "power scaling",
    "scaling ",
)
# A fight told as a story ("explain the fight between...") is a scene, not
# a who-wins question. These markers only mean versus with a who-wins ask.
NARRATIVE_FIGHT_MARKERS = (
    "fight between",
    "went against",
    "up against",
)
SCENE_ASK_MARKERS = (
    "explain",
    "walk me through",
    "what happened",
    "describe",
    "break down",
    "visualise",
    "visualize",
    "picture",
    "help me see",
    "confus",
)
VERSUS_MARKERS = (
    " vs ",
    " vs.",
    " vs,",
    " versus ",
    "who wins",
    "would win",
    "could beat",
    "fight between",
    "matchup",
    "went against",
    "up against",
)
THEORY_MARKERS = (
    "what if",
    "what-if",
    "what would have",
    "what would've",
    "imagine ",
    "theory",
)
PARAPHRASE_MARKERS = (
    "in your own words",
    "paraphrase",
    "simpler",
    "simplify",
    "what does that mean",
    "what does it mean",
    "explain that line",
    "explain this line",
)
ARC_VERBS = (
    "summar",
    "recap",
    "catch me up",
    "where are we",
    "refresh me",
    "run me through",
    "walk me through",
    "tell me about",
    "explain",
)
ARC_SCOPE_WORDS = (
    "arc",
    "war",
    "story so far",
    "whole story",
    "entire story",
    "everything that happened",
    "volume",
    "saga",
    "domain",
)
SCENE_MARKERS = (
    "the scene",
    "that scene",
    "the fight",
    "that fight",
    "the battle",
    "the duel",
    "explain the",
    "what happened in",
    "walk me through",
    "visualise",
    "visualize",
    "picture it",
    "picture the",
    "can't picture",
    "cannot picture",
    "help me see",
)
CORRECTION_MARKERS = (
    "isn't it",
    "isn't that",
    "wasn't it",
    "didn't",
    "did not he",
    "i remember",
    "correct me",
    "right?",
    "am i wrong",
)
DISCUSSION_MARKERS = (
    "do you think",
    "your take",
    "was it fair",
    "i think",
    "i disagree",
    "you're wrong",
    "you are wrong",
    "overrated",
    "underrated",
    "hot take",
    "rank ",
    "best character",
    "worst character",
    "better written",
    "fight me",
    "we all agree",
    "agree that",
    "does that make him",
    "better character",
    "worse character",
)
DISCOVERY_MARKERS = (
    "tell me something",
    "anything i missed",
    "something i missed",
    "what should i read",
    "surprise me",
    "give me a thread",
    "recommend",
    "what else",
)
COMPANY_MARKERS = (
    "not okay",
    "i'm sad",
    "im sad",
    "i am sad",
    "crying",
    "just finished",
    "holy shit",
    "oh my god",
    "i can't",
    "i cant",
    "hey",
    "hi ",
    "hello",
    "yo ",
    "good morning",
    "good night",
    "lol",
    "lmao",
)

FANFIC_CONTINUE_MARKERS = (
    "continue",
    "continuation",
    "next chapter",
    "after the last chapter",
    "what happens after",
    "keep going",
    "part two",
    "write more",
)
FANFIC_MISSING_MARKERS = (
    "missing scene",
    "scene we did not see",
    "scene we didn't see",
    "between chapters",
    "off page",
    "off-page",
    "fill the gap",
    "fill in the gap",
    "write the scene where",
)
WORLD_MARKERS = (
    "how does the",
    "how do the",
    "how does a",
    "what is the thread",
    "explain the thread",
    "the lore",
    "the magic system",
    "the power system",
    "history of the",
    "tell me about the domains",
)
FANFIC_FIT_MARKERS = (
    "would this fit",
    "would that fit",
    "does this fit",
    "is that canon",
    "is this canon",
    "does that contradict",
    "contradict",
    "timeline",
    "before chapter",
    "does this work",
)
FANFIC_WORLD_MARKERS = (
    "worldbuild",
    "world build",
    "expand the lore",
    "the lore",
    "how does the",
    "how do the",
    "magic system",
    "power system",
    "history of",
    "faction",
    "the world of",
)


def plan_for_question(question: str, *, domain: str = CANON) -> SkillPlan:
    """Suggest the skills for one question, largest scope first."""
    skill = route_skill_id(question, domain=domain)
    resolved = skill_by_id(skill)
    if resolved is None:
        raise ValueError(f"router returned unknown skill: {skill}")
    return SkillPlan(skills=(resolved,))


# Follow-ups: a short message that only makes sense against the earlier
# question. "huh" and "why" carry the earlier read forward; "prove it" and
# "are you sure" ask for more evidence than the earlier answer gave.
CARRY_FOLLOW_UPS = (
    "huh",
    "why",
    "how so",
    "how come",
    "wdym",
    "what do you mean",
    "tell me more",
    "say more",
    "go on",
    "and then",
    "then what",
    "what then",
    "what next",
    "elaborate",
    "like what",
    "such as",
    "wait what",
    "which chapter",
    "what chapter",
    "source",
    "i don't get it",
    "i dont get it",
    "confused",
    "lost me",
)
PUSH_FOLLOW_UPS = (
    "prove it",
    "proof",
    "receipts",
    "are you sure",
    "you sure",
    "sure about that",
    "that's wrong",
    "thats wrong",
    "that is wrong",
    "you're wrong",
    "youre wrong",
    "you are wrong",
    "not true",
    "i don't believe",
    "i dont believe",
    "doubt it",
    "go deeper",
    "dig deeper",
    "deeper",
    "more detail",
    "in detail",
    "be specific",
)
# Only a message that routes to a general skill can be a follow-up. A
# message that names its own scope ("who wins", "recap the arc") is a new
# question, however short.
_FOLLOW_UP_ROUTES = frozenset({"companion", "quick_recall", "correction", "discussion"})
_FOLLOW_UP_MAX_WORDS = 6
_EARLIER_ASKS_SEEN = 6
_WORD_RE = re.compile(r"[a-z0-9']+")


def plan_for_turn(
    question: str,
    *,
    earlier_asks: Sequence[str] = (),
    domain: str = CANON,
) -> SkillPlan:
    """Plan one turn from the question and the reader's earlier messages.

    A new question is routed on its own. A short follow-up keeps the read of
    the question it follows, and a push for proof or depth adds the
    discussion skill on top: more lookups, thinking on, and a final reread.
    ``earlier_asks`` is oldest first and excludes ``question``.
    """
    own = route_skill_id(question, domain=domain)
    kind = _follow_up_kind(question, own)
    if kind is None:
        return plan_for_question(question, domain=domain)
    base = _earlier_skill(earlier_asks, domain=domain)
    if base is None:
        return plan_for_question(question, domain=domain)
    ids = [base, own]
    if kind == "push":
        ids.append("discussion")
    # Company has no evidence and no tools, so it never shapes a follow-up
    # that is asking about the story.
    ids = [skill for skill in ids if skill != "companion"] or ["companion"]
    return plan_for_ids(ids)


def _follow_up_kind(question: str, own_route: str) -> str | None:
    if own_route not in _FOLLOW_UP_ROUTES:
        return None
    normalized = _normalize(question)
    if _has_any(normalized, BOOK_NOUNS):
        return None
    words = _WORD_RE.findall(normalized)
    if not words or len(words) > _FOLLOW_UP_MAX_WORDS:
        return None
    padded = " " + " ".join(words) + " "
    if any(f" {marker} " in padded for marker in PUSH_FOLLOW_UPS):
        return "push"
    if any(f" {marker} " in padded for marker in CARRY_FOLLOW_UPS):
        return "carry"
    return None


def _earlier_skill(earlier_asks: Sequence[str], *, domain: str) -> str | None:
    """The skill of the newest earlier message that was its own question."""
    for ask in list(earlier_asks)[::-1][:_EARLIER_ASKS_SEEN]:
        if not ask.strip():
            continue
        route = route_skill_id(ask, domain=domain)
        if _follow_up_kind(ask, route) is None:
            return route
    return None


def route_skill_id(question: str, *, domain: str = CANON) -> str:
    normalized = _normalize(question)
    if _asks_for_fanfic(normalized):
        return _fanfic_skill(normalized)
    if _has_any(normalized, RANKING_MARKERS) and not _has_any(
        normalized, (" vs ", " versus ", "who wins")
    ):
        return "ranking"
    if domain == FANFIC:
        return _fanfic_skill(normalized)
    if _tells_a_fight(normalized):
        return "scene_explanation"
    if _has_any(normalized, VERSUS_MARKERS):
        return "versus"
    if _has_any(normalized, THEORY_MARKERS):
        return "theory"
    if _has_any(normalized, PARAPHRASE_MARKERS):
        return "paraphrase"
    if _asks_for_arc(normalized):
        return "arc_summary"
    if _asks_for_scene(normalized):
        return "scene_explanation"
    if _has_any(normalized, CORRECTION_MARKERS) and not _has_any(
        normalized,
        ("agree", "hot take", "i think", "boring", "better character", "worse character"),
    ):
        return "correction"
    if _has_any(normalized, DISCUSSION_MARKERS):
        return "discussion"
    if _has_any(normalized, WORLD_MARKERS):
        return "lore_explainer"
    if _has_any(normalized, DISCOVERY_MARKERS):
        return "discovery"
    if _looks_like_company(normalized):
        return "companion"
    return "quick_recall"


def _tells_a_fight(normalized: str) -> bool:
    """'Explain the fight between A and B' asks for the scene, not a winner."""
    if not _has_any(normalized, NARRATIVE_FIGHT_MARKERS):
        return False
    if not _has_any(normalized, SCENE_ASK_MARKERS):
        return False
    who_wins = tuple(
        marker for marker in VERSUS_MARKERS if marker not in NARRATIVE_FIGHT_MARKERS
    )
    return not _has_any(normalized, who_wins)


def _asks_for_fanfic(normalized: str) -> bool:
    """A request to write or extend the story is fanfic work, whatever the thread."""
    writing_markers = (
        "write the missing scene",
        "write a missing scene",
        "write a scene",
        "write the scene",
        "write the next chapter",
        "fan fiction",
        "fanfiction",
        "continue the story",
        "what happens after the last chapter",
    )
    return _has_any(normalized, writing_markers)


def _fanfic_skill(normalized: str) -> str:
    if _has_any(normalized, FANFIC_FIT_MARKERS):
        # A canon-fit question is a worldbuilding check, not more prose.
        return "fanfic_worldbuilding"
    if _has_any(normalized, FANFIC_MISSING_MARKERS):
        return "fanfic_missing_scene"
    if _has_any(normalized, FANFIC_WORLD_MARKERS):
        return "fanfic_worldbuilding"
    if _has_any(normalized, FANFIC_CONTINUE_MARKERS):
        return "fanfic_continuation"
    return "fanfic_continuation"


def _asks_for_arc(normalized: str) -> bool:
    if CHAPTER_RANGE_RE.search(normalized):
        return True
    asks_for_a_run_through = _has_any(normalized, ARC_VERBS)
    names_a_big_scope = _has_any(normalized, ARC_SCOPE_WORDS)
    if asks_for_a_run_through and names_a_big_scope:
        return True
    return _has_any(normalized, ("summarize the story", "recap the story"))


def _asks_for_scene(normalized: str) -> bool:
    mentions_a_chapter = CHAPTER_ONE_RE.search(normalized) is not None
    asks_for_a_run_through = _has_any(
        normalized, ("summar", "explain", "what happened", "walk me through")
    )
    if mentions_a_chapter and asks_for_a_run_through:
        return True
    return _has_any(normalized, SCENE_MARKERS)


QUESTION_WORDS = (
    "who",
    "what",
    "when",
    "where",
    "why",
    "how",
    "which",
    "did ",
    "does ",
    "is ",
    "are ",
    "can ",
    "could ",
    "would ",
    "should ",
    "tell ",
    "explain",
    "summar",
)


BOOK_NOUNS = (
    "chapter",
    "chapter",
    "scene",
    "fight",
    "battle",
    "arena",
    "arc",
    "character",
    "book",
    "novel",
    "nephis",
    "sunny",
    "mordret",
    "ariel",
)


def _looks_like_company(normalized: str) -> bool:
    if _has_any(normalized, COMPANY_MARKERS):
        return True
    if _has_any(normalized, BOOK_NOUNS):
        return False
    is_short = len(normalized) <= 40
    asks_nothing = not _has_any(normalized, QUESTION_WORDS)
    has_no_question_mark = "?" not in normalized
    return is_short and asks_nothing and has_no_question_mark


def _has_any(normalized: str, markers: tuple[str, ...]) -> bool:
    return any(marker in normalized for marker in markers)


def _normalize(question: str) -> str:
    return " " + " ".join(question.strip().casefold().split()) + " "
