import pytest

from weaver.agent.answer import (
    PublicationFinding,
    ResponseMode,
    build_answer_blueprint,
    build_repair_instruction,
    build_spoiler_boundary_answer,
    format_answer_blueprint,
    inspect_publication,
    strip_unsupported_citations,
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


def test_inspection_flags_machinery_talk_from_the_transcripts() -> None:
    """Plan 033.7: Trial 12's answer said "this turn only gave me 2698" and
    "the passages I opened". The reader hears a tool, not a book."""
    blueprint = build_answer_blueprint(
        question="who actually won?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    for phrase in (
        "This turn only gave me 2698 (ch. 900).",
        "My lookups ran out before the end (ch. 900).",
        "The passages I opened stop at the gate (ch. 900).",
    ):
        codes = {
            finding.code
            for finding in inspect_publication(phrase, blueprint, PACKET)
        }
        assert "exposed_machinery" in codes, phrase


def test_inspection_does_not_flag_ordinary_reading_words() -> None:
    """The machinery check must not fire on normal speech about the book."""
    blueprint = build_answer_blueprint(
        question="who actually won?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    for phrase in (
        "In this chapter the wardens hold the door (ch. 900).",
        "My reading of that scene is that the heir loses (ch. 900).",
        "The passage stops at the gate, so look at what follows (ch. 900).",
    ):
        codes = {
            finding.code
            for finding in inspect_publication(phrase, blueprint, PACKET)
        }
        assert "exposed_machinery" not in codes, phrase


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


def test_an_unopened_citation_is_dropped_but_the_claim_stays() -> None:
    stripped = strip_unsupported_citations(
        "Sunny wins because the shadow answers (ch. 900), not ch. 12.",
        allowed_chapters=(900,),
    )
    assert "(ch. 900)" in stripped
    assert "ch. 12" not in stripped


def test_a_what_if_labelled_in_weaver_voice_passes() -> None:
    """Weaver labels speculation "my read ... not canon"; that is a label."""
    blueprint = build_answer_blueprint(
        question="okay but what if mordret gets prep?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    findings = inspect_publication(
        "With prep the convoy splits early (chs. 900-901). My read of the "
        "beats, not canon: it never reaches the pass.",
        blueprint,
        PACKET,
    )

    assert findings == ()


def test_a_follow_up_may_cite_a_chapter_the_thread_already_opened() -> None:
    blueprint = build_answer_blueprint(
        question="okay but what if verne waits?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
        earlier_opened_chapters=(577,),
    )

    earlier = inspect_publication(
        "My read, not canon: he waits because of the mirror (chs. 577, 900).",
        blueprint,
        PACKET,
    )
    never_opened = inspect_publication(
        "My read, not canon: he waits because of the mirror (ch. 999).",
        blueprint,
        PACKET,
    )

    assert earlier == ()
    assert {finding.code for finding in never_opened} == {"unsupported_chapter"}
    assert "577" in format_answer_blueprint(blueprint)


def test_earlier_chapters_never_replace_this_turn_s_own_evidence() -> None:
    blueprint = build_answer_blueprint(
        question="who wins?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet="--- evidence board ---\ndirect sources: none\n",
        earlier_opened_chapters=(577,),
    )

    assert blueprint.allowed_chapters == ()


OPENED_START = """--- chapter 1 lines 1-12 ---
He sat on a rusty bench outside the station.
The coffee had cost most of his savings, the real deal.

--- evidence board ---
direct sources: chapter 1 lines 1-12
"""


@pytest.mark.parametrize(
    ("answer", "packet", "expected"),
    [
        ('The coffee "had cost most of his savings, the real deal" (ch. 1).', OPENED_START, ()),
        ("The coffee “had cost most… the real deal” (ch. 1).", OPENED_START, ()),
        ('He says "you checked every mirror but the one in your hand" (ch. 1).', OPENED_START, ("unopened_quote",)),
        ("The very first line is dirt on brand-new shoes (ch. 1).", None, ("unopened_opening",)),
        ("Ch. 1 opens on a rusty bench (ch. 1).", OPENED_START, ()),
        ("Ch. 5 opens on a storm (ch. 5).", OPENED_START, ("unopened_opening",)),
        ('Short "real deal" quotes are fine (ch. 1).', None, ()),
    ],
)
def test_exact_text_claims_need_the_text_open_this_turn(answer, packet, expected) -> None:
    from weaver.agent.answer import unopened_text_claims

    assert unopened_text_claims(answer, packet) == expected


TWO_OPENED = """--- chapter 1 lines 1-12 ---
He sat on a rusty bench outside the station.

--- chapter 2 lines 1-12 ---
The sea below was grey and endless and cold.

--- evidence board ---
direct sources: chapter 1 lines 1-12; chapter 2 lines 1-12
"""


@pytest.mark.parametrize(
    ("answer", "packet", "expected"),
    [
        # Plan 034 Trial 12: a three-word invention slipped under the old
        # six-word floor.
        ('Their teamwork is called "natural and seamless" (ch. 1).', OPENED_START, ("unopened_quote",)),
        ('He waits "on a rusty bench" (ch. 1).', OPENED_START, ()),
        # A short quote cited to an opened chapter must be in that chapter.
        ('The sea is "grey and endless" (ch. 1).', TWO_OPENED, ("unopened_quote",)),
        ('The sea is "grey and endless" (ch. 2).', TWO_OPENED, ()),
        # A quoted name or title is not a claim about the text.
        ('They call him "Lord of Shadows" now.', None, ()),
        ('Two words "real deal" stay below the floor.', None, ()),
    ],
)
def test_short_quotes_need_the_text_open_this_turn(answer, packet, expected) -> None:
    from weaver.agent.answer import unopened_text_claims

    assert unopened_text_claims(answer, packet) == expected


def test_the_repair_unquotes_a_short_invention_and_keeps_the_sentence() -> None:
    from weaver.agent.answer import drop_unopened_quotes

    answer = 'Their teamwork is called "natural and seamless" and it still fails (ch. 1).'
    cleaned = drop_unopened_quotes(answer, OPENED_START)

    assert cleaned == "Their teamwork is called natural and seamless and it still fails (ch. 1)."


def test_the_repair_drops_an_unopened_quote_and_keeps_an_opened_one() -> None:
    from weaver.agent.answer import drop_unopened_quotes

    answer = (
        'The coffee "had cost most of his savings, the real deal" (ch. 1). '
        'He said "you checked every mirror but the one in your hand" (ch. 1).'
    )
    cleaned = drop_unopened_quotes(answer, OPENED_START)
    assert "had cost most of his savings" in cleaned
    assert "every mirror" not in cleaned
    assert "  " not in cleaned


def test_the_repair_keeps_the_readers_own_quote() -> None:
    from weaver.agent.answer import drop_unopened_quotes

    answer = 'You told me: "you checked every mirror but the one in your hand".'
    cleaned = drop_unopened_quotes(
        answer,
        OPENED_START,
        reader_text="okay, you checked every mirror but the one in your hand?",
    )
    assert "every mirror" in cleaned


def test_weaver_may_quote_the_reader_back() -> None:
    from weaver.agent.answer import unopened_text_claims

    assert unopened_text_claims(
        'You said "you are still just predicting words, right" and fair.',
        None,
        reader_text="okay, but you are still just predicting words, right?",
    ) == ()


def test_inspection_flags_an_invented_first_line_and_quote() -> None:
    blueprint = build_answer_blueprint(
        question="give me something only a reader would know",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=OPENED_START,
    )

    findings = inspect_publication(
        'Ch. 3 opens on his shoes (ch. 1). He thinks "nobody ever reads the third page" (ch. 1).',
        blueprint,
        OPENED_START,
    )
    codes = {finding.code for finding in findings}

    assert {"unopened_opening", "unopened_quote"} <= codes
    repair = build_repair_instruction(findings)
    assert "how a chapter opens" in repair
    assert "Do not include any direct quotation" in repair


def test_invented_prose_may_quote_its_own_dialogue() -> None:
    blueprint = build_answer_blueprint(
        question="write the missing scene where they meet again",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=OPENED_START,
        domain="fanfic",
    )

    findings = inspect_publication(
        'Invented scene. "You came back after all this time," she said.',
        blueprint,
        OPENED_START,
    )

    assert "unopened_quote" not in {finding.code for finding in findings}


def test_a_repair_does_not_mention_the_draft_it_fixes() -> None:
    instruction = build_repair_instruction(
        (PublicationFinding("unsupported_chapter", "cites ch. 999"),)
    )

    assert "reader never saw the proposed answer" in instruction



@pytest.mark.parametrize(
    "follow_up",
    ["make it darker, keep it canon.", "no, keep sunny in character.", "more show, less summary."],
)
def test_a_fanfic_follow_up_is_prose_and_may_quote_its_own_dialogue(follow_up) -> None:
    """v2 trials: fanfic follow-ups were read as canon answers, so invented
    dialogue failed the quote check and every follow-up turn failed."""
    blueprint = build_answer_blueprint(
        question=follow_up,
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=OPENED_START,
        domain="fanfic",
        earlier_asks=("write the missing scene where nephis comes back to sunny after the academy.",),
    )

    findings = inspect_publication(
        '"You came back after all of it," he said — and she did not answer.',
        blueprint,
        OPENED_START,
    )

    assert blueprint.mode == ResponseMode.PROSE
    assert not {f.code for f in findings} & {"unopened_quote", "em_dash"}


def test_a_fanfic_canon_fit_question_still_checks_quotes() -> None:
    blueprint = build_answer_blueprint(
        question="would this actually fit before chapter 400?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=OPENED_START,
        domain="fanfic",
    )

    findings = inspect_publication(
        'It fits: she says "the tower was never empty after all" (ch. 1).',
        blueprint,
        OPENED_START,
    )

    assert blueprint.mode != ResponseMode.PROSE
    assert "unopened_quote" in {f.code for f in findings}


@pytest.mark.parametrize(
    ("text", "allowed", "expected"),
    [
        (
            "Right after that, Sunny notices (ch. 39). The burning version is ch. 44. That one has the throne.",
            (39,),
            "Right after that, Sunny notices (ch. 39). That one has the throne.",
        ),
        (
            "Two-thirds of the defenders died first (ch. 590, 593).",
            (593,),
            "Two-thirds of the defenders died first (ch. 593).",
        ),
        (
            "Sunny wins because the shadow answers (ch. 900), not ch. 12.",
            (900,),
            "Sunny wins because the shadow answers (ch. 900).",
        ),
    ],
)
def test_stripping_a_citation_never_leaves_a_broken_sentence(text, allowed, expected) -> None:
    """v2 Trials 6 and 8 showed "The burning version is." and "(, 593)"."""
    assert strip_unsupported_citations(text, allowed_chapters=allowed) == expected


def test_a_chapter_the_reader_named_may_be_named_back() -> None:
    """Plan 033.6: "does it fit before chapter 400?" cannot be answered
    without saying "chapter 400". Naming it back is not citing it."""
    blueprint = build_answer_blueprint(
        question="would this fit before chapter 400?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    named_back = inspect_publication(
        "It fits before chapter 400: the convoy splits first (chs. 900-901).",
        blueprint,
        PACKET,
    )
    cited_as_source = inspect_publication(
        "It fits: the convoy splits first (ch. 400).",
        blueprint,
        PACKET,
    )
    other_chapter = inspect_publication(
        "It fits before chapter 410: the convoy splits first (chs. 900-901).",
        blueprint,
        PACKET,
    )

    assert named_back == ()
    assert {finding.code for finding in cited_as_source} == {"unsupported_chapter"}
    assert {finding.code for finding in other_chapter} == {"unsupported_chapter"}


def test_an_uncited_recalled_scene_beside_cited_claims_is_caught() -> None:
    """Plan 033.6: a canon mechanic was cited, then tied to an earlier scene
    recalled from memory with no chapter of its own, and stated as fact."""
    blueprint = build_answer_blueprint(
        question="tell me something i probably missed",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    recalled = inspect_publication(
        "The convoy splits at the pass (ch. 900). Now think back to the first "
        "march, back when the scouts saw the lights. That is the same trick.",
        blueprint,
        PACKET,
    )
    cited_recall = inspect_publication(
        "The convoy splits at the pass (ch. 900). Think back to the scouts "
        "at the ford (ch. 901). That is the same trick.",
        blueprint,
        PACKET,
    )
    labelled = inspect_publication(
        "The convoy splits at the pass (ch. 900). My read, not canon: think "
        "back to the first march, it rhymes.",
        blueprint,
        PACKET,
    )
    quoted = inspect_publication(
        'She says it plainly: "remember how loud I was, and stop missing me" '
        "(ch. 900).",
        blueprint,
        PACKET,
    )

    assert {finding.code for finding in recalled} == {"uncited_recall"}
    assert cited_recall == ()
    assert labelled == ()
    assert "uncited_recall" not in {finding.code for finding in quoted}


def test_a_reader_named_chapter_is_only_exempt_as_a_place_in_the_story() -> None:
    """Plan 033.6 review: "Chapter 400 is where..." describes the chapter
    as a source and still needs it opened."""
    blueprint = build_answer_blueprint(
        question="what happens in chapter 400?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=PACKET,
    )

    described = inspect_publication(
        "Chapter 400 is where the scout dies. It echoes the pass (ch. 900).",
        blueprint,
        PACKET,
    )

    assert {finding.code for finding in described} == {"unsupported_chapter"}


def test_a_reader_named_chapter_past_the_boundary_is_still_a_spoiler() -> None:
    guarded_packet = (
        PACKET
        + "\n--- spoiler framing ---\n"
        + "The reader is at chapter 950, and parts of this material come from "
        + "later in the story. Answer the question but protect the story beats."
    )
    blueprint = build_answer_blueprint(
        question="does it fit before chapter 2000?",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet=guarded_packet,
    )

    findings = inspect_publication(
        "It fits before chapter 2000: the convoy splits first (ch. 900).",
        blueprint,
        guarded_packet,
    )

    assert blueprint.reader_chapter == 950
    assert "spoiler_citation" in {finding.code for finding in findings}
