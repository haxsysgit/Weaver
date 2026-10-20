import pytest

from weaver.agent.answer import (
    PublicationFinding,
    ResponseMode,
    build_answer_blueprint,
    build_repair_instruction,
    build_spoiler_boundary_answer,
    format_answer_blueprint,
    inspect_publication,
)


PACKET = """--- chapter 900 lines 185-217 ---
Synthetic source line one.

--- chapter 901 lines 3-13 ---
Synthetic source line two.

--- evidence board ---
direct sources: chapter 900 lines 185-217, chapter 901 lines 3-13
"""


def test_narration_uses_reviewed_voice_without_forcing_the_ending_first() -> None:
    blueprint = build_answer_blueprint(
        question="Narrate the scene for me.",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )
    instruction = format_answer_blueprint(blueprint)

    assert blueprint.mode == ResponseMode.RECONSTRUCTION
    assert blueprint.skills == ("scene_explanation",)
    assert "open inside a supported moment" in instruction
    assert "identity and soul" in instruction
    assert "buddy who read the book" in instruction
    assert "Four to eight paragraphs" in instruction
    assert "One exact quote per key beat" in instruction
    assert "Direct quotations must be 25 words or fewer" in instruction
    assert "No headings unless" in instruction


@pytest.mark.parametrize(
    ("question", "expected"),
    [
        ("Where was LO49?", ResponseMode.DIRECT_RECALL),
        ("Can you remind me how LO49 fell?", ResponseMode.RECONSTRUCTION),
        ("Do you think Sunny abandoned them?", ResponseMode.DISCUSSION),
        ("What if Verne ordered an evacuation?", ResponseMode.THEORY),
        ("Make a short what-if about Verne.", ResponseMode.THEORY),
        ("Then imagine Verne ordering an evacuation.", ResponseMode.THEORY),
        ("current Sunny vs Noctis, how does it go?", ResponseMode.VERSUS),
        (
            "write the missing scene where Nephis comes back after the academy",
            ResponseMode.PROSE,
        ),
        (
            "Do you think current Sunny would beat Azarax in his prime?",
            ResponseMode.VERSUS,
        ),
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


def test_blueprint_requires_claim_level_and_multi_chapter_support() -> None:
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    assert any("every factual claim" in item for item in blueprint.obligations)
    assert any("several scenes" in item for item in blueprint.obligations)
    assert any("does not follow" in item for item in blueprint.obligations)


def test_blueprint_keeps_a_follow_up_out_of_reconstruction_mode() -> None:
    blueprint = build_answer_blueprint(
        question="So was that compassion or cruelty?",
        prior_weaver_position="Weaver exposed Ariel's self-deception.",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    assert any(
        "without reconstructing or requoting" in item
        for item in blueprint.obligations
    )
    assert any("few source words" in item for item in blueprint.obligations)


def test_theory_blueprint_separates_invention_without_fake_source_quotes() -> None:
    blueprint = build_answer_blueprint(
        question="Imagine Verne ordered an evacuation.",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    assert blueprint.mode == ResponseMode.THEORY
    assert any(
        "no source quotation or blockquote" in item
        for item in blueprint.obligations
    )
    assert any("ordinary quotation marks" in item for item in blueprint.obligations)
    assert any("under 450 words" in item for item in blueprint.obligations)


def test_inspection_accepts_a_grounded_direct_answer() -> None:
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )
    answer = "LO49 disappeared after Sunny left (chs. 900-901)."

    assert inspect_publication(answer, blueprint, PACKET) == ()


def test_inspection_accepts_parenthetical_chapter_citations() -> None:
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    grounded = inspect_publication(
        "LO49 disappeared after Sunny left (chs. 900-901).",
        blueprint,
        PACKET,
    )
    unopened = inspect_publication(
        "LO49 disappeared after Sunny left (ch. 999).",
        blueprint,
        PACKET,
    )

    assert grounded == ()
    assert {finding.code for finding in unopened} == {"unsupported_chapter"}


def test_inspection_ignores_bare_parenthetical_numbers() -> None:
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    findings = inspect_publication(
        "There were one hundred witnesses (100). The setup began in ch. 900.",
        blueprint,
        PACKET,
    )

    assert findings == ()


def test_inspection_rejects_overly_broad_chapter_ranges() -> None:
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    findings = inspect_publication(
        "The event spans chapters 800-900.",
        blueprint,
        PACKET,
    )

    assert {finding.code for finding in findings} == {
        "malformed_chapter_range",
        "unsupported_chapter",
    }


def test_inspection_does_not_accept_notebook_text_as_a_direct_quote() -> None:
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )
    packet = (
        PACKET
        + "\n\n--- notebook statement synthetic [fact] ch 900 ---\n"
        + "A generated notebook summary."
    )

    findings = inspect_publication(
        "The scene is clear (ch. 900).\n\n> A generated notebook summary.",
        blueprint,
        packet,
    )

    assert {finding.code for finding in findings} == {"changed_quote"}


def test_inspection_rejects_notebook_only_evidence() -> None:
    packet = (
        "--- notebook statement synthetic [fact] ch 900 ---\n"
        "A generated notebook summary.\n\n"
        "--- evidence board ---\n"
        "direct sources: none\n"
    )
    blueprint = build_answer_blueprint(
        question="What happened?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=packet,
    )

    findings = inspect_publication(
        "A generated notebook summary.",
        blueprint,
        packet,
    )

    assert {finding.code for finding in findings} == {
        "missing_direct_evidence"
    }


def test_inspection_rejects_long_direct_quotes() -> None:
    long_quote = " ".join(["synthetic"] * 26)
    packet = PACKET.replace("Synthetic source line one.", long_quote)
    blueprint = build_answer_blueprint(
        question="What happened?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=packet,
    )

    findings = inspect_publication(
        f"The passage answers it (ch. 900).\n\n> {long_quote}",
        blueprint,
        packet,
    )

    assert {finding.code for finding in findings} == {"long_quote"}


def test_inspection_counts_multiline_blockquote_as_one_quote() -> None:
    first_line = " ".join(["synthetic"] * 13)
    second_line = " ".join(["source"] * 13)
    packet = PACKET.replace(
        "Synthetic source line one.",
        f"{first_line}\n{second_line}",
    )
    blueprint = build_answer_blueprint(
        question="What happened?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=packet,
    )

    findings = inspect_publication(
        f"The passage answers it (ch. 900).\n\n> {first_line}\n> {second_line}",
        blueprint,
        packet,
    )

    assert {finding.code for finding in findings} == {"long_quote"}


def test_inspection_counts_repeated_short_quotes_together() -> None:
    first_quote = " ".join(["synthetic"] * 13)
    second_quote = " ".join(["source"] * 13)
    packet = PACKET.replace(
        "Synthetic source line one.",
        f"{first_quote}\nA separator.\n{second_quote}",
    )
    blueprint = build_answer_blueprint(
        question="What happened?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=packet,
    )

    findings = inspect_publication(
        (
            "The passage answers it (ch. 900).\n\n"
            f"> {first_quote}\n\nContext.\n\n> {second_quote}"
        ),
        blueprint,
        packet,
    )

    assert {finding.code for finding in findings} == {"long_quote"}


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


def test_repair_instruction_targets_quote_and_chapter_findings() -> None:
    findings = (
        PublicationFinding(
            "long_quote",
            "A direct quotation exceeds 25 words.",
        ),
        PublicationFinding(
            "changed_quote",
            "The quotation wording differs from the source.",
        ),
        PublicationFinding(
            "unsupported_chapter",
            "Chapter 1200 is not in the direct sources.",
        ),
    )

    instruction = build_repair_instruction(findings)

    assert "Do not include any direct quotation" in instruction
    assert "paraphrase" in instruction
    assert "25 words or fewer" in instruction
    assert "exact source wording" in instruction
    assert "opened direct sources" in instruction
    assert "changed_quote" in instruction
    assert "one rewrite" in instruction


def test_spoiler_boundary_answer_names_the_reader_position_without_story_fact() -> None:
    guarded_packet = (
        PACKET
        + "\nThe reader is at chapter 850. Answer but protect the story beats."
    )
    blueprint = build_answer_blueprint(
        question="What happened to LO49?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=guarded_packet,
    )

    answer = build_spoiler_boundary_answer(blueprint)

    assert "chapter 850" in answer
    assert "lift the boundary" in answer
    assert "LO49" not in answer


def test_prose_may_use_a_dash_but_chat_may_not() -> None:
    prose = build_answer_blueprint(
        question="write the missing scene where they talk",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )
    scene = "Invented scene. He stopped\u2014then turned back."
    assert inspect_publication(scene, prose, PACKET) == ()

    chat = build_answer_blueprint(
        question="who killed the Titan",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )
    codes = {finding.code for finding in inspect_publication(scene, chat, PACKET)}
    assert "em_dash" in codes
