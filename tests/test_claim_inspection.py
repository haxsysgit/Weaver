import asyncio
import json

import pytest

from weaver.agent.answer import AnswerBlueprint, ResponseMode
from weaver.agent.claim_inspection import (
    answer_claims,
    format_claim_inspection_request,
    inspect_claims_with_model,
    parse_claim_inspection,
)
from weaver.model_layer import (
    DEEPSEEK_FLASH,
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelResponse,
    ModelStopReason,
)
from weaver.model_layer.types import ModelUsage


BLUEPRINT = AnswerBlueprint(
    mode=ResponseMode.RECONSTRUCTION,
    obligations=("answer first",),
    allowed_chapters=(40, 41),
    prior_point="",
    spoiler_mode="full",
    reader_chapter=50,
)
PACKET = """--- chapter 40 lines 1-20 ---
Synthetic evidence from the first scene.

--- chapter 41 lines 1-20 ---
Synthetic evidence from the scene ending.

--- evidence board ---
direct sources: chapter 40 lines 1-20, chapter 41 lines 1-20
"""


def review(
    *,
    index: int = 1,
    kind: str = "canon",
    support: str = "supported",
    chapters: list[int] | None = None,
    missing: list[int] | None = None,
    later: bool = False,
) -> dict:
    return {
        "index": index,
        "kind": kind,
        "support": support,
        "supporting_chapters": chapters if chapters is not None else [40],
        "missing_chapters": missing or [],
        "later_than_reader": later,
    }


def test_answer_claims_excludes_quotes_and_headings() -> None:
    answer = (
        "# Heading\n\n**Another heading**\n\nThe event began (ch. 40)."
        "\n\n> Exact quote.\nIt ended (ch. 41)."
    )

    assert answer_claims(answer) == (
        "The event began (ch. 40).",
        "It ended (ch. 41).",
    )


def test_inspection_prompt_numbers_claims_and_limits_truth_to_opened_sources() -> None:
    prompt = format_claim_inspection_request(
        "The event began (ch. 40). It ended (ch. 41).",
        BLUEPRINT,
        PACKET,
    )

    assert "claim 1: The event began" in prompt
    assert "claim 2: It ended" in prompt
    assert "Do not use trained memory" in prompt
    assert "allowed direct-source chapters: 40, 41" in prompt


def test_inspection_prompt_keeps_the_active_section_on_each_claim() -> None:
    prompt = format_claim_inspection_request(
        "**Invention (mine)**\n\n\"The gate opens,\" she said.\nIt was my guess.",
        BLUEPRINT,
        PACKET,
    )

    assert (
        'claim 1 [section: Invention (mine)]: "The gate opens," she said.'
        in prompt
    )
    assert "claim 2 [section: Invention (mine)]: It was my guess." in prompt


def test_supported_multi_chapter_claim_passes() -> None:
    payload = json.dumps({"claims": [review(chapters=[40, 41])]})

    assert parse_claim_inspection(
        payload,
        claim_count=1,
        blueprint=BLUEPRINT,
    ) == ()


def test_partial_multi_chapter_claim_names_the_missing_support() -> None:
    payload = json.dumps(
        {
            "claims": [
                review(
                    support="partial",
                    chapters=[40],
                    missing=[41],
                )
            ]
        }
    )

    findings = parse_claim_inspection(
        payload,
        claim_count=1,
        blueprint=BLUEPRINT,
    )

    assert [finding.code for finding in findings] == ["partial_support"]
    assert "Missing chapter support: 41" in findings[0].detail


def test_uncited_canon_and_semantic_spoiler_are_both_visible() -> None:
    guarded = AnswerBlueprint(
        mode=ResponseMode.DIRECT_RECALL,
        obligations=(),
        allowed_chapters=(40, 41),
        prior_point="",
        spoiler_mode="guarded",
        reader_chapter=39,
    )
    payload = json.dumps(
        {
            "claims": [
                review(
                    support="unsupported",
                    chapters=[],
                    later=True,
                )
            ]
        }
    )

    findings = parse_claim_inspection(
        payload,
        claim_count=1,
        blueprint=guarded,
    )

    assert {finding.code for finding in findings} == {
        "uncited_semantic_claim",
        "unsupported_claim",
        "semantic_spoiler",
    }


def test_uncited_later_claim_is_identified_as_a_semantic_spoiler() -> None:
    guarded = AnswerBlueprint(
        mode=ResponseMode.DIRECT_RECALL,
        obligations=(),
        allowed_chapters=(40, 41),
        prior_point="",
        spoiler_mode="guarded",
        reader_chapter=39,
    )
    payload = json.dumps(
        {
            "claims": [
                review(
                    kind="interpretation",
                    support="reasonable_interpretation",
                    chapters=[40],
                    later=True,
                )
            ]
        }
    )

    findings = parse_claim_inspection(
        payload,
        claim_count=1,
        blueprint=guarded,
        claims=("The later scene changes how the promise reads.",),
    )

    assert {finding.code for finding in findings} == {
        "semantic_spoiler",
        "uncited_semantic_spoiler",
    }


def test_labelled_invention_does_not_require_direct_support() -> None:
    payload = json.dumps(
        {
            "claims": [
                review(
                    kind="invention",
                    support="labelled_invention",
                    chapters=[],
                )
            ]
        }
    )

    assert parse_claim_inspection(
        payload,
        claim_count=1,
        blueprint=BLUEPRINT,
    ) == ()


def test_inspection_rejects_missing_or_out_of_order_claims() -> None:
    payload = json.dumps({"claims": [review(index=2)]})

    with pytest.raises(ValueError, match="every claim once and in order"):
        parse_claim_inspection(
            payload,
            claim_count=1,
            blueprint=BLUEPRINT,
        )


async def test_model_inspection_uses_json_and_returns_safe_findings() -> None:
    payload = json.dumps(
        {
            "claims": [
                review(
                    support="contradicted",
                    chapters=[40],
                )
            ]
        }
    )
    usage = ModelUsage(
        input_tokens=120,
        output_tokens=40,
        total_tokens=160,
        cache_hit_tokens=80,
        cache_miss_tokens=40,
    )
    provider = FakeModelProvider(
        "deepseek",
        models=(DEEPSEEK_FLASH,),
        responses=(
            ModelResponse(
                assistant_message=ModelMessage(role="assistant", content=payload),
                provider_id="deepseek",
                model_id="deepseek-flash",
                stop_reason=ModelStopReason.STOP,
                raw_stop_reason="stop",
                usage=usage,
            ),
        ),
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    inspection = await inspect_claims_with_model(
        model_layer=layer,
        model=DEEPSEEK_FLASH,
        answer="The event ended differently (ch. 40).",
        blueprint=BLUEPRINT,
        evidence_packet=PACKET,
        cancel_event=asyncio.Event(),
    )

    assert [finding.code for finding in inspection.findings] == [
        "contradicted_claim"
    ]
    assert inspection.claim_count == 1
    assert inspection.usage == usage
    assert provider.calls[0].request.response_format == "json_object"
    assert provider.calls[0].request.reasoning.enabled is False


async def test_model_inspection_batches_long_answers_and_keeps_claim_numbers() -> None:
    first_batch = {
        "claims": [
            review(index=index, kind="conversation", chapters=[])
            for index in range(1, 13)
        ]
    }
    second_batch = {
        "claims": [
            review(
                index=13,
                support="unsupported",
                chapters=[],
            )
        ]
    }
    provider = FakeModelProvider(
        "deepseek",
        models=(DEEPSEEK_FLASH,),
        responses=(
            ModelResponse(
                assistant_message=ModelMessage(
                    role="assistant",
                    content=json.dumps(first_batch),
                ),
                provider_id="deepseek",
                model_id="deepseek-flash",
                stop_reason=ModelStopReason.STOP,
                raw_stop_reason="stop",
            ),
            ModelResponse(
                assistant_message=ModelMessage(
                    role="assistant",
                    content=json.dumps(second_batch),
                ),
                provider_id="deepseek",
                model_id="deepseek-flash",
                stop_reason=ModelStopReason.STOP,
                raw_stop_reason="stop",
            ),
        ),
    )
    layer = ModelLayer()
    layer.register_provider(provider)
    answer = "\n".join(f"Claim sentence {index}." for index in range(1, 14))

    inspection = await inspect_claims_with_model(
        model_layer=layer,
        model=DEEPSEEK_FLASH,
        answer=answer,
        blueprint=BLUEPRINT,
        evidence_packet=PACKET,
        cancel_event=asyncio.Event(),
    )

    assert len(provider.calls) == 2
    assert inspection.claim_count == 13
    assert [finding.code for finding in inspection.findings] == [
        "uncited_semantic_claim",
        "unsupported_claim",
    ]
    assert "Claim 13" in inspection.findings[0].detail


async def test_model_inspection_reports_provider_stop_reason() -> None:
    provider = FakeModelProvider(
        "deepseek",
        models=(DEEPSEEK_FLASH,),
        responses=(
            ModelResponse(
                assistant_message=ModelMessage(role="assistant", content=None),
                provider_id="deepseek",
                model_id="deepseek-flash",
                stop_reason=ModelStopReason.LENGTH,
                raw_stop_reason="length",
            ),
        ),
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    with pytest.raises(ValueError, match="stopped with length: length"):
        await inspect_claims_with_model(
            model_layer=layer,
            model=DEEPSEEK_FLASH,
            answer="A claim.",
            blueprint=BLUEPRINT,
            evidence_packet=PACKET,
            cancel_event=asyncio.Event(),
        )
