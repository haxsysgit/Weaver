"""Scope-first routing from a reader question to a suggested skill.

The router is a hint, not a lock. It gives the turn a sane tool budget and a
starting skill. The model can load more skills with the load_skill tool, and
the budget rises when it does.
"""

from __future__ import annotations

import re

from .models import CANON, FANFIC, SkillPlan
from .registry import skill_by_id


CHAPTER_RANGE_RE = re.compile(
    r"\bch(?:s|apters?)?\.?\s*\d{1,5}\s*(?:-|\u2013|to)\s*\d{1,5}",
    re.IGNORECASE,
)
CHAPTER_ONE_RE = re.compile(
    r"\b(?:ch(?:apter)?\.?\s*\d{1,5})\b",
    re.IGNORECASE,
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


def route_skill_id(question: str, *, domain: str = CANON) -> str:
    normalized = _normalize(question)
    if _asks_for_fanfic(normalized):
        return _fanfic_skill(normalized)
    if domain == FANFIC:
        return _fanfic_skill(normalized)
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
    if _has_any(normalized, CORRECTION_MARKERS):
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


def _looks_like_company(normalized: str) -> bool:
    if _has_any(normalized, COMPANY_MARKERS):
        return True
    is_short = len(normalized) <= 40
    asks_nothing = not _has_any(normalized, QUESTION_WORDS)
    has_no_question_mark = "?" not in normalized
    return is_short and asks_nothing and has_no_question_mark


def _has_any(normalized: str, markers: tuple[str, ...]) -> bool:
    return any(marker in normalized for marker in markers)


def _normalize(question: str) -> str:
    return " " + " ".join(question.strip().casefold().split()) + " "
