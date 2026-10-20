"""The load_skill tool: progressive disclosure for the skill catalogue."""

from __future__ import annotations

from typing import Any

from pydantic import BaseModel, Field

from weaver.agent.tools import EffectKind, ToolDefinition, ToolExecutionContext, ToolRegistry

from .registry import (
    SKILLS_BY_ID,
    resolve_skills,
    skill_text,
    unknown_skill_names,
)

MAX_SKILLS_PER_CALL = 4


class LoadSkillInput(BaseModel):
    names: list[str] = Field(
        min_length=1,
        max_length=MAX_SKILLS_PER_CALL,
        description=(
            "Skill ids from the catalogue, in the order you want to use them. "
            "Load every skill the request needs; related skills combine fine."
        ),
    )


class SkillLoader:
    """Serves skill bodies to the model. Reads only, never stores anything."""

    async def load_skill(
        self,
        arguments: dict[str, Any],
        context: ToolExecutionContext,
    ) -> dict[str, Any]:
        try:
            request = LoadSkillInput(**arguments)
        except Exception as exc:
            return {"ok": False, "error_category": "validation", "error": str(exc)}
        skills = resolve_skills(request.names)
        if not skills:
            unknown = ", ".join(unknown_skill_names(request.names))
            return {
                "ok": False,
                "error_category": "validation",
                "error": f"Unknown skill(s): {unknown}",
                "available": sorted(SKILLS_BY_ID),
            }
        if context.on_skills_loaded is not None:
            context.on_skills_loaded(tuple(skill.id for skill in skills))
        body = "\n\n".join(skill_text(skill) for skill in skills)
        return {"text": body}


def register_skill_tool(registry: ToolRegistry) -> None:
    """Register the load_skill tool on a surface registry."""
    loader = SkillLoader()
    registry.register(
        ToolDefinition(
            name="load_skill",
            description=(
                "Load the full instructions and worked examples for one or more "
                "Weaver skills. Call it before answering when the request "
                "matches a skill in the catalogue. You may load several related "
                "skills, in one call or across calls, when the request really "
                "needs them. Loading a bigger skill raises your reading budget."
            ),
            parameters=LoadSkillInput.model_json_schema(),
            handler=loader.load_skill,
            max_result_chars=32_000,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
