"""Weaver skills: loadable instruction sets for the reader turn.

The system prompt carries one line per skill. The model loads the full body
with the ``load_skill`` tool, and it may combine related skills.

This package stays free of ``weaver.agent`` imports so the answer blueprint can
use the router without a cycle. The tool lives in ``weaver.skills.loader``.
"""

from .catalog import ALL_SKILLS
from .models import CANON, FANFIC, Skill, SkillExample, SkillPlan
from .registry import (
    MAX_TOOL_BUDGET,
    format_skill_brief,
    SKILLS_BY_ID,
    catalogue_text,
    plan_for_ids,
    resolve_skills,
    skill_by_id,
    skill_text,
)
from .router import plan_for_question, route_skill_id

__all__ = [
    "ALL_SKILLS",
    "CANON",
    "FANFIC",
    "MAX_TOOL_BUDGET",
    "SKILLS_BY_ID",
    "Skill",
    "SkillExample",
    "SkillPlan",
    "catalogue_text",
    "format_skill_brief",
    "plan_for_ids",
    "plan_for_question",
    "resolve_skills",
    "route_skill_id",
    "skill_by_id",
    "skill_text",
]
