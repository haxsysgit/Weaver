import json
from pathlib import Path

import pytest

from weaver import (
    DEEPSEEK_FLASH,
    DEEPSEEK_MODELS,
    DEEPSEEK_PRO,
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelResponse,
    ModelStopReason,
    ModelToolCall,
    ModelUsage,
)
from weaver.experiment import run_provider_tool_contract

RAW_ARGUMENTS = '{"item":"status"}'
FINAL_TEXT = "Synthetic contract complete."


def response(
    model,
    *,
    stop_reason,
    raw_stop_reason,
    content=None,
    tool_calls=(),
    error_category=None,
) -> ModelResponse:
    return ModelResponse(
        assistant_message=ModelMessage(
            role="assistant",
            content=content,
            tool_calls=tool_calls,
        ),
        provider_id=model.provider_id,
        model_id=model.model_id,
        stop_reason=stop_reason,
        raw_stop_reason=raw_stop_reason,
        usage=ModelUsage(
            input_tokens=10,
            output_tokens=5,
            total_tokens=15,
            reasoning_tokens=0,
        ),
        error_category=error_category,
    )


def tool_response(model, *, call_id="call-synthetic-001", arguments=RAW_ARGUMENTS):
    return response(
        model,
        stop_reason=ModelStopReason.TOOL_USE,
        raw_stop_reason="tool_calls",
        tool_calls=(
            ModelToolCall(
                call_id=call_id,
                name="synthetic_lookup",
                arguments_json=arguments,
            ),
        ),
    )


def final_response(model, *, content=FINAL_TEXT) -> ModelResponse:
    return response(
        model,
        stop_reason=ModelStopReason.STOP,
        raw_stop_reason="stop",
        content=content,
    )


def layer_with(responses: tuple[ModelResponse, ...]):
    provider = FakeModelProvider(
        "deepseek",
        models=DEEPSEEK_MODELS,
        responses=responses,
    )
    model_layer = ModelLayer()
    model_layer.register_provider(provider)
    return model_layer, provider


@pytest.mark.asyncio
async def test_runner_preserves_linked_payload_and_stable_model_order(
    tmp_path: Path,
) -> None:
    model_layer, provider = layer_with(
        (
            tool_response(DEEPSEEK_FLASH),
            final_response(DEEPSEEK_FLASH),
            tool_response(DEEPSEEK_PRO),
            final_response(DEEPSEEK_PRO),
        )
    )

    result = await run_provider_tool_contract(
        model_layer,
        (DEEPSEEK_FLASH, DEEPSEEK_PRO),
        mode="fake",
        receipt_root=tmp_path / "runs",
    )

    assert result.outcome == "passed"
    assert [call.model.model_id for call in provider.calls] == [
        "deepseek-v4-flash",
        "deepseek-v4-flash",
        "deepseek-v4-pro",
        "deepseek-v4-pro",
    ]
    for first_call, second_call in (
        provider.calls[:2],
        provider.calls[2:],
    ):
        first_request = first_call.request
        second_request = second_call.request
        assert first_request.tool_choice == "synthetic_lookup"
        assert first_request.reasoning.enabled is False
        assert second_request.tool_choice is None
        assert second_request.reasoning.enabled is False
        assert second_request.tools == first_request.tools
        assert second_request.messages[:2] == first_request.messages

        assistant = second_request.messages[2]
        tool_result = second_request.messages[3]
        assert assistant == ModelMessage(
            role="assistant",
            content=None,
            tool_calls=(
                ModelToolCall(
                    call_id="call-synthetic-001",
                    name="synthetic_lookup",
                    arguments_json=RAW_ARGUMENTS,
                ),
            ),
        )
        assert tool_result == ModelMessage(
            role="tool",
            content='{"status":"ok"}',
            tool_call_id="call-synthetic-001",
        )


@pytest.mark.asyncio
@pytest.mark.parametrize(
    ("bad_response", "expected_category"),
    [
        (tool_response(DEEPSEEK_FLASH, call_id=""), "missing_call_id"),
        (
            tool_response(DEEPSEEK_FLASH, arguments='{"item":'),
            "invalid_arguments",
        ),
        (
            response(
                DEEPSEEK_FLASH,
                stop_reason=ModelStopReason.LENGTH,
                raw_stop_reason="length",
                tool_calls=(
                    ModelToolCall(
                        call_id="call-partial",
                        name="synthetic_lookup",
                        arguments_json='{"item":',
                    ),
                ),
            ),
            "unexpected_first_finish",
        ),
        (
            response(
                DEEPSEEK_FLASH,
                stop_reason=ModelStopReason.ERROR,
                raw_stop_reason="provider_error",
                error_category="timeout",
            ),
            "first_timeout",
        ),
    ],
)
async def test_invalid_first_response_stops_that_model(
    tmp_path: Path,
    bad_response: ModelResponse,
    expected_category: str,
) -> None:
    model_layer, provider = layer_with((bad_response,))

    result = await run_provider_tool_contract(
        model_layer,
        (DEEPSEEK_FLASH,),
        mode="fake",
        receipt_root=tmp_path / "runs",
    )

    assert result.outcome == "failed"
    assert result.error_category == expected_category
    assert len(provider.calls) == 1


@pytest.mark.asyncio
async def test_non_final_second_response_never_starts_a_third_request(
    tmp_path: Path,
) -> None:
    second_tool_call = tool_response(
        DEEPSEEK_FLASH,
        call_id="call-unexpected-002",
    )
    model_layer, provider = layer_with(
        (
            tool_response(DEEPSEEK_FLASH),
            second_tool_call,
        )
    )

    result = await run_provider_tool_contract(
        model_layer,
        (DEEPSEEK_FLASH,),
        mode="fake",
        receipt_root=tmp_path / "runs",
    )

    assert result.outcome == "failed"
    assert result.error_category == "unexpected_second_finish"
    assert len(provider.calls) == 2


@pytest.mark.asyncio
async def test_failure_in_flash_does_not_skip_pro(tmp_path: Path) -> None:
    model_layer, provider = layer_with(
        (
            tool_response(DEEPSEEK_FLASH, call_id=""),
            tool_response(DEEPSEEK_PRO),
            final_response(DEEPSEEK_PRO),
        )
    )

    result = await run_provider_tool_contract(
        model_layer,
        (DEEPSEEK_FLASH, DEEPSEEK_PRO),
        mode="fake",
        receipt_root=tmp_path / "runs",
    )

    assert result.outcome == "failed"
    assert [call.model.model_id for call in provider.calls] == [
        "deepseek-v4-flash",
        "deepseek-v4-pro",
        "deepseek-v4-pro",
    ]
    records = json.loads((result.run_dir / "response.json").read_text())
    assert [record["outcome"] for record in records] == ["failed", "passed"]


@pytest.mark.asyncio
async def test_receipt_keeps_only_safe_contract_metadata(tmp_path: Path) -> None:
    model_layer, _ = layer_with(
        (
            tool_response(DEEPSEEK_FLASH),
            final_response(DEEPSEEK_FLASH),
        )
    )

    result = await run_provider_tool_contract(
        model_layer,
        (DEEPSEEK_FLASH,),
        mode="fake",
        receipt_root=tmp_path / "runs",
    )

    record = json.loads((result.run_dir / "response.json").read_text())[0]
    assert record["call_id_present"] is True
    assert record["argument_length"] == len(RAW_ARGUMENTS)
    assert len(record["argument_sha256"]) == 64
    assert record["final_text_present"] is True
    assert record["final_text_length"] == len(FINAL_TEXT)
    assert len(record["final_text_sha256"]) == 64

    combined = "".join(
        path.read_text()
        for path in result.run_dir.iterdir()
        if path.suffix in {".json", ".jsonl", ".md"}
    )
    assert RAW_ARGUMENTS not in combined
    assert FINAL_TEXT not in combined
    assert "call-synthetic-001" not in combined
    assert "reasoning_content" not in combined
