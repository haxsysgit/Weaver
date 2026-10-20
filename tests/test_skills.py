"""Skill catalogue, router, plan merge, and the load_skill tool."""

from __future__ import annotations

import asyncio
import json

import pytest

from weaver.agent.answer import build_answer_blueprint, inspect_publication
from weaver.agent.messages import ToolResultMessage
from weaver.agent.tools import (
    ToolExecutionContext,
    ToolExecutionPolicy,
    ToolRegistry,
)
from weaver.agent.messages import _format_tool_result
from weaver.chat_runtime import WEB_ACTIVE_TOOLS, web_system_prompt
from weaver.skills import (
    ALL_SKILLS,
    SKILLS_BY_ID,
    catalogue_text,
    plan_for_ids,
    plan_for_question,
    route_skill_id,
)
from weaver.skills.loader import LoadSkillInput, register_skill_tool


PACKET = """--- chapter 650 lines 1-3 ---
Synthetic source line one.

--- evidence board ---
direct sources: chapter 650 lines 1-3
"""


@pytest.mark.parametrize(
    ("question", "domain", "expected"),
    [
        ("who killed the hollow king", "canon", "quick_recall"),
        ("what chapter does Weaver first speak?", "canon", "quick_recall"),
        ("summarize the domain war", "canon", "arc_summary"),
        ("recap chs. 400-500", "canon", "arc_summary"),
        ("summarize chapter 5", "canon", "scene_explanation"),
        ("what happened in the fight at the tomb", "canon", "scene_explanation"),
        ("explain the tomb scene, I could not follow it", "canon", "scene_explanation"),
        ("what if the hollow king was Sunny's father", "canon", "theory"),
        ("current Sunny vs prime Azarax", "canon", "versus"),
        ("didn't Weaver die at the tomb?", "canon", "correction"),
        ("honestly the tomb arc is overrated", "canon", "discussion"),
        ("tell me something I missed on my first read", "canon", "discovery"),
        ("how does the thread actually work", "canon", "lore_explainer"),
        ("what does 'the thread remembers' mean", "canon", "quick_recall"),
        ("heyy", "canon", "companion"),
        ("i just finished chapter 742 and i am not okay", "canon", "companion"),
        ("write the missing scene where Weaver tells Noctis", "canon", "fanfic_missing_scene"),
        ("continue the story after the last chapter", "fanfic", "fanfic_continuation"),
        ("how does the thread work, expand the lore", "fanfic", "fanfic_worldbuilding"),
    ],
)
def test_router_scores_scope_before_intent(
    question: str,
    domain: str,
    expected: str,
) -> None:
    assert route_skill_id(question, domain=domain) == expected


def test_every_skill_is_usable_on_its_own() -> None:
    assert len(ALL_SKILLS) == len(SKILLS_BY_ID)
    for skill in ALL_SKILLS:
        assert skill.description
        assert len(skill.instructions) >= 3
        assert skill.shape
        assert skill.quote_rule
        assert skill.examples
        assert skill.tool_budget >= 1
        for example in skill.examples:
            assert example.reader and example.weaver


def test_catalogue_hides_fanfic_from_a_canon_reader() -> None:
    canon_text = catalogue_text("canon")
    assert "quick_recall" in canon_text
    assert "arc_summary" in canon_text
    assert "fanfic_continuation" not in canon_text

    fanfic_text = catalogue_text("fanfic")
    assert "fanfic_continuation" in fanfic_text
    assert "quick_recall" not in fanfic_text


def test_related_skills_merge_to_the_biggest_read() -> None:
    plan = plan_for_ids(["quick_recall", "arc_summary"])

    assert plan.ids == ("quick_recall", "arc_summary")
    assert plan.tool_budget == plan_for_question("summarize the domain war").tool_budget
    assert plan.reasoning_tier == "transcendent"
    assert "600 to 1200 words" in plan.shape
    assert plan.needs_evidence is True
    assert plan.obligations[0] == "Answer in the first line. The fact comes before any framing."


def test_company_needs_no_evidence() -> None:
    plan = plan_for_question("heyy")
    assert plan.ids == ("companion",)
    assert plan.needs_evidence is False


def test_arc_blueprint_uses_the_arc_shape() -> None:
    blueprint = build_answer_blueprint(
        question="summarize the domain war",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    assert blueprint.skills == ("arc_summary",)
    assert "600 to 1200 words" in blueprint.shape
    assert "Two or three exact lines" in blueprint.quote_rule
    assert any("Browse the range" in item for item in blueprint.obligations)


def test_loaded_skills_merge_into_the_final_blueprint() -> None:
    blueprint = build_answer_blueprint(
        question="who killed the hollow king",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
        extra_skill_ids=("arc_summary",),
    )

    assert blueprint.skills == ("quick_recall", "arc_summary")
    assert "600 to 1200 words" in blueprint.shape


def test_company_answer_is_not_failed_for_missing_citations() -> None:
    blueprint = build_answer_blueprint(
        question="heyy",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet="",
    )
    findings = inspect_publication("Hey. I missed you. What are you reading?", blueprint, "")

    assert blueprint.needs_evidence is False
    assert findings == ()


def test_a_canon_answer_still_needs_its_evidence() -> None:
    no_evidence = build_answer_blueprint(
        question="who killed the hollow king",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet="",
    )
    empty_codes = {
        finding.code for finding in inspect_publication("Sunny did.", no_evidence, "")
    }
    assert "missing_direct_evidence" in empty_codes

    opened = build_answer_blueprint(
        question="who killed the hollow king",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )
    uncited_codes = {
        finding.code for finding in inspect_publication("Sunny did.", opened, PACKET)
    }
    assert "missing_citation" in uncited_codes


def _context(on_skills_loaded=None) -> ToolExecutionContext:
    return ToolExecutionContext(
        session_id="s",
        turn_id="t",
        call_id="c",
        cancel_event=asyncio.Event(),
        on_skills_loaded=on_skills_loaded,
    )


async def test_load_skill_returns_the_body_and_reports_the_budget() -> None:
    registry = ToolRegistry()
    register_skill_tool(registry)
    loaded: list[tuple[str, ...]] = []

    result = await registry.dispatch(
        "load_skill",
        json.dumps({"names": ["quick_recall", "arc_summary"]}),
        active_names=("load_skill",),
        policy=ToolExecutionPolicy.read_only(),
        context=_context(loaded.append),
    )

    assert result.ok is True
    text = result.result["text"]
    assert "=== skill: quick_recall" in text
    assert "=== skill: arc_summary" in text
    assert "Browse the range" in text
    assert loaded == [("quick_recall", "arc_summary")]


async def test_load_skill_rejects_unknown_names() -> None:
    registry = ToolRegistry()
    register_skill_tool(registry)

    result = await registry.dispatch(
        "load_skill",
        json.dumps({"names": ["does_not_exist"]}),
        active_names=("load_skill",),
        policy=ToolExecutionPolicy.read_only(),
        context=_context(),
    )

    assert result.ok is True
    assert result.result["ok"] is False
    assert "does_not_exist" in result.result["error"]
    assert "quick_recall" in result.result["available"]


def test_load_skill_input_allows_several_names_but_not_none() -> None:
    assert len(LoadSkillInput(names=["arc_summary"]).names) == 1
    with pytest.raises(Exception):
        LoadSkillInput(names=[])


def test_plain_text_tool_payload_reaches_the_model_unwrapped() -> None:
    message = ToolResultMessage(
        message_id="m",
        turn_id="t",
        call_id="c",
        tool_name="load_skill",
        ok=True,
        result={"text": "line one\nline two"},
    )

    assert _format_tool_result(message) == "line one\nline two"


def test_web_prompt_carries_the_catalogue_and_the_multi_skill_rule() -> None:
    prompt = web_system_prompt("You are Weaver.", 3160)

    assert "<skills>" in prompt
    assert "You may combine related skills" in prompt
    assert "quick_recall:" in prompt
    assert "fanfic_continuation:" in prompt
    assert "Loading a bigger skill raises your reading budget" in prompt
    assert "3160" in prompt


def test_load_skill_is_an_active_web_tool() -> None:
    assert "load_skill" in WEB_ACTIVE_TOOLS
    registry = ToolRegistry()
    register_skill_tool(registry)
    schema = registry.active_schemas(("load_skill",))[0]

    assert schema.name == "load_skill"
    assert "names" in schema.parameters["properties"]


def test_the_biggest_skill_budget_is_the_arc_budget() -> None:
    assert max(skill.tool_budget for skill in ALL_SKILLS) == 20
