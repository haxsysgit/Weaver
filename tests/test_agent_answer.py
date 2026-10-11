import pytest

from weaver.agent.answer import (
    ResponseMode,
    build_answer_blueprint,
    build_repair_instruction,
    inspect_publication,
)


PACKET = """--- chapter 900 lines 185-217 ---
Synthetic source line one.

--- chapter 901 lines 3-13 ---
Synthetic source line two.

--- evidence board ---
direct sources: chapter 900 lines 185-217, chapter 901 lines 3-13
"""


@pytest.mark.parametrize(
    ("question", "expected"),
    [
        ("Where was LO49?", ResponseMode.DIRECT_RECALL),
        ("Can you remind me how LO49 fell?", ResponseMode.RECONSTRUCTION),
        ("Do you think Sunny abandoned them?", ResponseMode.DISCUSSION),
        ("What if Verne ordered an evacuation?", ResponseMode.THEORY),
        ("LO49 evacuated after Sunny left, right?", ResponseMode.CORRECTION),
    ],
)
def test_blueprint_selects_the_question_shape(question, expected) -> None:
    blueprint = build_answer_blueprint(
        question=question,
        prior_weaver_position="The evacuation was already too late.",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    assert blueprint.mode == expected
    assert blueprint.allowed_chapters == (900, 901)
    assert blueprint.obligations


def test_blueprint_carries_the_prior_point_for_a_challenge() -> None:
    blueprint = build_answer_blueprint(
        question="No, I think Sunny abandoned them.",
        prior_weaver_position="Sunny followed Verne's final order.",
        reader_challenges_prior_answer=True,
        evidence_packet=PACKET,
    )

    assert blueprint.mode == ResponseMode.DISCUSSION
    assert blueprint.prior_point == "Sunny followed Verne's final order."
    assert any(
        "address the reader's challenge" in obligation
        for obligation in blueprint.obligations
    )


def test_inspection_accepts_a_grounded_direct_answer() -> None:
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )
    answer = "LO49 disappeared after Sunny left (chs. 900-901)."

    assert inspect_publication(answer, blueprint, PACKET) == ()


def test_inspection_flags_style_leaks_without_rewriting_quotes() -> None:
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )
    answer = (
        "Great question! The evidence board shows LO49 vanished — completely. "
        "(ch. 900)\n\n> A source quote — unchanged"
    )

    codes = {finding.code for finding in inspect_publication(answer, blueprint, PACKET)}

    assert codes == {"ai_opening", "em_dash", "exposed_machinery", "changed_quote"}


def test_inspection_flags_missing_and_unopened_chapter_citations() -> None:
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    missing = inspect_publication("Everyone vanished.", blueprint, PACKET)
    unsupported = inspect_publication(
        "Everyone vanished in chapter 999.",
        blueprint,
        PACKET,
    )

    assert {finding.code for finding in missing} == {"missing_citation"}
    assert {finding.code for finding in unsupported} == {"unsupported_chapter"}


def test_inspection_requires_an_invention_label_for_a_what_if() -> None:
    blueprint = build_answer_blueprint(
        question="What if Verne ordered an evacuation?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    findings = inspect_publication(
        "The convoy would split in the blizzard (chs. 900-901).",
        blueprint,
        PACKET,
    )

    assert {finding.code for finding in findings} == {"unlabelled_invention"}


def test_inspection_blocks_a_later_chapter_citation_for_guarded_spoilers() -> None:
    guarded_packet = (
        PACKET
        + "\n--- spoiler framing ---\n"
        + "The reader is at chapter 850, and parts of this material come from "
        + "later in the story. Answer the question but protect the story beats."
    )
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=guarded_packet,
    )

    findings = inspect_publication(
        "LO49 disappeared after Sunny left (ch. 900).",
        blueprint,
        guarded_packet,
    )

    assert blueprint.spoiler_mode == "guarded"
    assert blueprint.reader_chapter == 850
    assert {finding.code for finding in findings} == {"spoiler_citation"}


def test_repair_instruction_names_only_the_observed_failures() -> None:
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )
    findings = inspect_publication(
        "Great question! Everyone vanished.",
        blueprint,
        PACKET,
    )

    instruction = build_repair_instruction(findings)

    assert "ai_opening" in instruction
    assert "missing_citation" in instruction
    assert "changed_quote" not in instruction
    assert "one rewrite" in instruction
