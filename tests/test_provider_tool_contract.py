import json
from pathlib import Path

import httpx
import pytest
from openai import AsyncOpenAI

from weaver import (
    DEEPSEEK_FLASH,
    DEEPSEEK_MODELS,
    DEEPSEEK_FLASH,
    DeepSeekProvider,
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelResponse,
    ModelStopReason,
    ModelToolCall,
    ModelUsage,
)
from weaver.experiment import (
    CAT_FIRST_PROVIDER,
    CAT_FIRST_TIMEOUT,
    CAT_INVALID_ARGS,
    CAT_MISSING_CALL_ID,
    CAT_UNEXPECTED_FIRST,
    CAT_UNEXPECTED_SECOND,
    run_provider_tool_contract,
)

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


def sse_response(*events: dict) -> httpx.Response:
    body = "".join(
        f"data: {json.dumps(event, separators=(',', ':'))}\n\n"
        for event in events
    )
    body += "data: [DONE]\n\n"
    return httpx.Response(
        200,
        content=body.encode(),
        headers={"content-type": "text/event-stream"},
    )


def tool_call_stream(model_id: str) -> httpx.Response:
    return sse_response(
        {
            "id": "chatcmpl-synthetic-tool",
            "object": "chat.completion.chunk",
            "created": 1,
            "model": model_id,
            "choices": [
                {
                    "index": 0,
                    "delta": {
                        "role": "assistant",
                        "content": None,
                        "tool_calls": [
                            {
                                "index": 0,
                                "id": "call-synthetic-001",
                                "type": "function",
                                "function": {
                                    "name": "synthetic_lookup",
                                    "arguments": '{"item":',
                                },
                            }
                        ],
                    },
                    "finish_reason": None,
                }
            ],
        },
        {
            "id": "chatcmpl-synthetic-tool",
            "object": "chat.completion.chunk",
            "created": 1,
            "model": model_id,
            "choices": [
                {
                    "index": 0,
                    "delta": {
                        "tool_calls": [
                            {
                                "index": 0,
                                "function": {"arguments": '"status"}'},
                            }
                        ]
                    },
                    "finish_reason": None,
                }
            ],
        },
        {
            "id": "chatcmpl-synthetic-tool",
            "object": "chat.completion.chunk",
            "created": 1,
            "model": model_id,
            "choices": [
                {
                    "index": 0,
                    "delta": {},
                    "finish_reason": "tool_calls",
                }
            ],
        },
        {
            "id": "chatcmpl-synthetic-tool",
            "object": "chat.completion.chunk",
            "created": 1,
            "model": model_id,
            "choices": [],
            "usage": {
                "prompt_tokens": 30,
                "completion_tokens": 8,
                "total_tokens": 38,
                "prompt_cache_hit_tokens": 0,
                "prompt_cache_miss_tokens": 30,
                "completion_tokens_details": {"reasoning_tokens": 0},
            },
        },
    )


def final_text_stream(model_id: str) -> httpx.Response:
    return sse_response(
        {
            "id": "chatcmpl-synthetic-final",
            "object": "chat.completion.chunk",
            "created": 2,
            "model": model_id,
            "choices": [
                {
                    "index": 0,
                    "delta": {
                        "role": "assistant",
                        "content": "Synthetic contract ",
                    },
                    "finish_reason": None,
                }
            ],
        },
        {
            "id": "chatcmpl-synthetic-final",
            "object": "chat.completion.chunk",
            "created": 2,
            "model": model_id,
            "choices": [
                {
                    "index": 0,
                    "delta": {"content": "complete."},
                    "finish_reason": None,
                }
            ],
        },
        {
            "id": "chatcmpl-synthetic-final",
            "object": "chat.completion.chunk",
            "created": 2,
            "model": model_id,
            "choices": [
                {
                    "index": 0,
                    "delta": {},
                    "finish_reason": "stop",
                }
            ],
        },
        {
            "id": "chatcmpl-synthetic-final",
            "object": "chat.completion.chunk",
            "created": 2,
            "model": model_id,
            "choices": [],
            "usage": {
                "prompt_tokens": 45,
                "completion_tokens": 4,
                "total_tokens": 49,
                "prompt_cache_hit_tokens": 0,
                "prompt_cache_miss_tokens": 45,
                "completion_tokens_details": {"reasoning_tokens": 0},
            },
        },
    )


def sdk_backed_layer(
    transport: httpx.MockTransport,
) -> tuple[ModelLayer, AsyncOpenAI]:
    http_client = httpx.AsyncClient(transport=transport)
    sdk_client = AsyncOpenAI(
        api_key="test-only-key",
        base_url="https://deepseek.invalid/v1",
        http_client=http_client,
        max_retries=0,
        timeout=1.0,
    )
    model_layer = ModelLayer()
    model_layer.register_provider(
        DeepSeekProvider(
            "test-only-key",
            sdk_client=sdk_client,
        )
    )
    return model_layer, sdk_client


@pytest.mark.asyncio
async def test_runner_preserves_linked_payload_and_stable_model_order(
    tmp_path: Path,
) -> None:
    model_layer, provider = layer_with(
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

    assert result.outcome == "passed"
    assert [call.model.model_id for call in provider.calls] == [
        "deepseek-v4-flash",
        "deepseek-v4-flash",
    ]
    first_call, second_call = provider.calls
    assert first_call.request.tool_choice == "synthetic_lookup"
    assert first_call.request.reasoning.enabled is False
    assert second_call.request.tool_choice is None
    second_request = second_call.request
    assert second_request.reasoning.enabled is False
    assert second_request.tools == first_call.request.tools
    assert second_request.messages[:2] == first_call.request.messages

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
        (
            tool_response(DEEPSEEK_FLASH, call_id=""),
            CAT_MISSING_CALL_ID,
        ),
        (
            tool_response(DEEPSEEK_FLASH, arguments='{"item":'),
            CAT_INVALID_ARGS,
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
            CAT_UNEXPECTED_FIRST,
        ),
        (
            response(
                DEEPSEEK_FLASH,
                stop_reason=ModelStopReason.ERROR,
                raw_stop_reason="provider_error",
                error_category="timeout",
            ),
            CAT_FIRST_TIMEOUT,
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
    assert result.error_category == CAT_UNEXPECTED_SECOND
    assert len(provider.calls) == 2


@pytest.mark.asyncio
async def test_failure_in_first_contract_call_fails_the_model(tmp_path: Path) -> None:
    model_layer, provider = layer_with(
        (
            tool_response(DEEPSEEK_FLASH, call_id=""),
        )
    )

    result = await run_provider_tool_contract(
        model_layer,
        (DEEPSEEK_FLASH,),
        mode="fake",
        receipt_root=tmp_path / "runs",
    )

    assert result.outcome == "failed"
    assert [call.model.model_id for call in provider.calls] == [
        "deepseek-v4-flash",
    ]
    records = json.loads((result.run_dir / "response.json").read_text())
    assert [record["outcome"] for record in records] == ["failed"]


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


@pytest.mark.asyncio
@pytest.mark.parametrize("model", [DEEPSEEK_FLASH])
async def test_real_sdk_serializes_and_parses_complete_tool_contract(
    tmp_path: Path,
    model,
) -> None:
    request_bodies: list[dict] = []

    def handle_request(request: httpx.Request) -> httpx.Response:
        request_bodies.append(json.loads(request.content))
        if len(request_bodies) == 1:
            return tool_call_stream(model.model_id)
        if len(request_bodies) == 2:
            return final_text_stream(model.model_id)
        raise AssertionError("contract attempted more than two SDK requests")

    transport = httpx.MockTransport(handle_request)
    model_layer, sdk_client = sdk_backed_layer(transport)
    try:
        result = await run_provider_tool_contract(
            model_layer,
            (model,),
            mode="fake-sdk",
            receipt_root=tmp_path / "runs",
        )
    finally:
        await sdk_client.close()

    assert result.outcome == "passed"
    assert len(request_bodies) == 2
    first_body, second_body = request_bodies

    assert first_body["model"] == model.model_id
    assert first_body["stream"] is True
    assert first_body["stream_options"] == {"include_usage": True}
    assert first_body["thinking"] == {"type": "disabled"}
    assert first_body["tool_choice"] == {
        "type": "function",
        "function": {"name": "synthetic_lookup"},
    }
    assert first_body["tools"][0]["function"]["name"] == "synthetic_lookup"

    assert second_body["model"] == model.model_id
    assert second_body["stream"] is True
    assert second_body["stream_options"] == {"include_usage": True}
    assert second_body["thinking"] == {"type": "disabled"}
    assert second_body["tools"] == first_body["tools"]
    assert "tool_choice" not in second_body
    assert second_body["messages"][-2:] == [
        {
            "role": "assistant",
            "content": None,
            "tool_calls": [
                {
                    "id": "call-synthetic-001",
                    "type": "function",
                    "function": {
                        "name": "synthetic_lookup",
                        "arguments": RAW_ARGUMENTS,
                    },
                }
            ],
        },
        {
            "role": "tool",
            "content": '{"status":"ok"}',
            "tool_call_id": "call-synthetic-001",
        },
    ]
    assert second_body["messages"][:2] == first_body["messages"]
    assert "reasoning_content" not in json.dumps(request_bodies)

    record = json.loads((result.run_dir / "response.json").read_text())[0]
    assert record["first_finish_reason"] == "tool_use"
    assert record["first_raw_finish_reason"] == "tool_calls"
    assert record["second_finish_reason"] == "stop"
    assert record["second_raw_finish_reason"] == "stop"
    assert record["first_usage"]["total_tokens"] == 38
    assert record["second_usage"]["total_tokens"] == 49


@pytest.mark.asyncio
async def test_real_sdk_has_no_retry_or_second_request_after_provider_error(
    tmp_path: Path,
) -> None:
    requests: list[httpx.Request] = []

    def handle_request(request: httpx.Request) -> httpx.Response:
        requests.append(request)
        return httpx.Response(
            500,
            json={
                "error": {
                    "message": "synthetic provider failure",
                    "type": "server_error",
                }
            },
        )

    transport = httpx.MockTransport(handle_request)
    model_layer, sdk_client = sdk_backed_layer(transport)
    try:
        result = await run_provider_tool_contract(
            model_layer,
            (DEEPSEEK_FLASH,),
            mode="fake-sdk",
            receipt_root=tmp_path / "runs",
        )
    finally:
        await sdk_client.close()

    assert result.outcome == "failed"
    assert result.error_category == CAT_FIRST_PROVIDER
    assert len(requests) == 1
