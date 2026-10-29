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
    plan_for_turn,
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
        ("rank the top five strongest Supremes", "canon", "ranking"),
        ("tier list the arcs", "canon", "ranking"),
        ("summarize the domain war", "canon", "arc_summary"),
        ("recap chs. 400-500", "canon", "arc_summary"),
        ("summarize chapter 5", "canon", "scene_explanation"),
        ("what happened in the fight at the tomb", "canon", "scene_explanation"),
        ("explain the tomb scene, I could not follow it", "canon", "scene_explanation"),
        ("what if the hollow king was Sunny's father", "canon", "theory"),
        ("current Sunny vs prime Azarax", "canon", "versus"),
        (
            "explain the fight between Sunny and Mordret in the Tomb",
            "canon",
            "scene_explanation",
        ),
        ("I'm confused about the fight between Sunny and Mordret", "canon", "scene_explanation"),
        ("who would win the fight between Sunny and Mordret", "canon", "versus"),
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


VERSUS_ASK = "who would win, Sunny or Nephis?"


@pytest.mark.parametrize("follow_up", ["huh", "why?", "wait what", "tell me more", "why did he do that?"])
def test_a_short_follow_up_keeps_the_earlier_read(follow_up: str) -> None:
    plan = plan_for_turn(follow_up, earlier_asks=[VERSUS_ASK])

    assert plan.ids[0] == "versus"
    assert plan.tool_budget == plan_for_question(VERSUS_ASK).tool_budget
    assert plan.reasoning_tier == "transcendent"


@pytest.mark.parametrize(
    "push", ["prove it", "are you sure?", "that is wrong", "you're wrong", "go deeper"]
)
def test_a_push_reads_at_least_as_deep_and_turns_thinking_on(push: str) -> None:
    after_a_fact = plan_for_turn(push, earlier_asks=["who killed the hollow king"])

    assert "quick_recall" in after_a_fact.ids
    assert "discussion" in after_a_fact.ids
    assert after_a_fact.tool_budget > plan_for_question("who killed the hollow king").tool_budget
    assert after_a_fact.reasoning_tier is not None
    assert after_a_fact.final_pass
    assert after_a_fact.needs_evidence


def test_a_push_after_a_big_question_keeps_its_shape() -> None:
    plan = plan_for_turn("prove it", earlier_asks=[VERSUS_ASK])

    assert plan.ids[0] == "versus"
    assert plan.shape == plan_for_question(VERSUS_ASK).shape
    assert plan.tool_budget == plan_for_question(VERSUS_ASK).tool_budget


def test_follow_ups_chain_back_to_the_real_question() -> None:
    plan = plan_for_turn("prove it", earlier_asks=[VERSUS_ASK, "huh", "why?"])

    assert plan.ids[0] == "versus"


def test_a_follow_up_after_small_talk_does_not_stay_small_talk() -> None:
    plan = plan_for_turn("why?", earlier_asks=["hey"])

    assert plan.ids == ("quick_recall",)


@pytest.mark.parametrize(
    "question",
    [
        "hey",
        "lol yeah",
        "why did Sunny go back to the tomb",
        "recap the domain war",
        "what if Nephis had stayed",
    ],
)
def test_a_new_question_is_routed_on_its_own(question: str) -> None:
    plan = plan_for_turn(question, earlier_asks=[VERSUS_ASK])

    assert plan.ids == plan_for_question(question).ids


def test_a_follow_up_with_nothing_before_it_is_routed_on_its_own() -> None:
    assert plan_for_turn("prove it").ids == plan_for_question("prove it").ids
    assert plan_for_turn("why?", earlier_asks=["huh"]).ids == ("quick_recall",)


def test_fanfic_threads_keep_their_own_routing() -> None:
    plan = plan_for_turn(
        "go on",
        earlier_asks=["continue the story after the last chapter"],
        domain="fanfic",
    )

    assert plan.ids == plan_for_question("go on", domain="fanfic").ids


def test_the_blueprint_follows_the_earlier_question() -> None:
    blueprint = build_answer_blueprint(
        question="prove it",
        prior_weaver_position="Nephis wins on reach.",
        reader_challenges_prior_answer=True,
        evidence_packet=PACKET,
        earlier_asks=(VERSUS_ASK,),
    )

    assert blueprint.shape == plan_for_question(VERSUS_ASK).shape
