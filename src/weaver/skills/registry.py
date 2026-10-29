"""Skill lookup and the catalogue the model reads in its system prompt."""

from __future__ import annotations

from .catalog import ALL_SKILLS
from .models import CANON, FANFIC, Skill, SkillPlan


SKILLS_BY_ID: dict[str, Skill] = {}
for skill in ALL_SKILLS:
    if skill.id in SKILLS_BY_ID:
        raise ValueError(f"duplicate skill id: {skill.id}")
    SKILLS_BY_ID[skill.id] = skill

MAX_TOOL_BUDGET = max(skill.tool_budget for skill in ALL_SKILLS)


def skill_by_id(skill_id: str) -> Skill | None:
    return SKILLS_BY_ID.get(skill_id.strip().casefold())


def resolve_skills(names: list[str]) -> tuple[Skill, ...]:
    """Resolve names in order, dropping repeats. Unknown names are ignored."""
    resolved: list[Skill] = []
    for name in names:
        skill = skill_by_id(name)
        if skill is None or skill in resolved:
            continue
        resolved.append(skill)
    return tuple(resolved)


def unknown_skill_names(names: list[str]) -> tuple[str, ...]:
    return tuple(
        name for name in names if skill_by_id(name) is None
    )


def catalogue_text(domain: str | None = None) -> str:
    """The one-line-per-skill catalogue, grouped by domain.

    ``domain`` of canon hides the fanfic skills from a canon thread.
    """
    sections: list[str] = []
    if domain in (None, CANON):
        sections.append(_catalogue_section("Canon", CANON))
    if domain in (None, FANFIC):
        sections.append(_catalogue_section("Fanfic", FANFIC))
    return "\n".join(section for section in sections if section)


def _catalogue_section(label: str, domain: str) -> str:
    skills = [skill for skill in ALL_SKILLS if skill.domain == domain]
    if not skills:
        return ""
    lines = [
        f"{label} skills (examples inside a skill are shape only, never canon):"
    ]
    for skill in skills:
        lines.append(f"- {skill.id}: {skill.description}")
    return "\n".join(lines)


def plan_for_ids(names: list[str]) -> SkillPlan:
    """Merge explicit skill ids into one plan. Empty input means no skill."""
    return SkillPlan(skills=resolve_skills(names))


def format_skill_brief(plan: SkillPlan) -> str:
    """The compact skill block for the running turn.

    Without this, a turn with no final reading pass never sees its skill: the
    answer blueprint only reaches the model in the final pass.
    """
    if not plan.skills:
        return ""
    lines = [
        "--- answer skills ---",
        f"chosen: {', '.join(plan.ids)}",
    ]
    lines.extend(f"- {instruction}" for instruction in plan.obligations)
    lines.append(f"answer shape: {plan.shape}")
    lines.append(f"quotation rule: {plan.quote_rule}")
    if plan.follow_up == "carry":
        lines.append(
            "This is a short follow-up to your last answer. Build on it; do "
            "not repeat its verdict, scenes, or quotes. A request for a "
            "summary gets one or two sentences."
        )
    elif plan.follow_up == "push":
        lines.append(
            "The reader is pushing back on your last answer. Show the "
            "evidence for it. Change a claim only where an opened passage "
            "contradicts it."
        )
    if not plan.needs_evidence:
        lines.append(
            "This turn needs no reading and no chapter citation. Answer from "
            "the conversation."
        )
    return "\n".join(lines)


def skill_text(skill: Skill) -> str:
    """The full skill body returned by the load_skill tool."""
    lines = [
        f"=== skill: {skill.id} ({skill.domain}) ===",
        "Examples below show shape and voice only. Their names, events, and "
        "chapter numbers are placeholders unless the passages you opened "
        "confirm them.",
        f"Scope: {skill.scope}",
        "What this answer must do:",
    ]
    lines.extend(f"- {instruction}" for instruction in skill.instructions)
    lines.append(f"Shape: {skill.shape}")
    lines.append(f"Quotation rule: {skill.quote_rule}")
    if skill.examples:
        lines.append("Examples:")
        for example in skill.examples:
            lines.append(f"Reader: {example.reader}")
            lines.append(f"Weaver: {example.weaver}")
            lines.append("")
    return "\n".join(lines).rstrip()
