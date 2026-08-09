import asyncio
import hashlib
import json
import logging
from dataclasses import asdict, dataclass
from pathlib import Path
from time import perf_counter
from typing import Any

from .config import EXPERIMENT_VERSION
from .errors import ExperimentValidationError, WeaverError
from .model_layer import (
    ModelLayer,
    ModelMessage,
    ModelReasoning,
    ModelRequest,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelToolCall,
    ModelToolSchema,
    ModelUsage,
)
from .receipts import ReceiptWriter, utc_now

logger = logging.getLogger(__name__)

# Contract failure categories shared with tests.
CAT_UNEXPECTED_FIRST = "unexpected_first_finish"
CAT_MISSING_CALL_ID = "missing_call_id"
CAT_INVALID_ARGS = "invalid_arguments"
CAT_UNEXPECTED_SECOND = "unexpected_second_finish"
CAT_FIRST_TIMEOUT = "first_timeout"
CAT_FIRST_PROVIDER = "first_provider"

_SYSTEM_PREFIX = (
    "This is a synthetic transport smoke test. Use no private data and make no "
    "claims about novels or literary quality."
)
_CONTRACT_EXPERIMENT = "provider-tool-contract"
_CONTRACT_TOOL_NAME = "synthetic_lookup"
_CONTRACT_ARGUMENTS = {"item": "status"}
_CONTRACT_RESULT_JSON = '{"status":"ok"}'
_CONTRACT_MAX_OUTPUT_TOKENS = 128


@dataclass(frozen=True, slots=True)
class ExperimentResult:
    outcome: str
    run_dir: Path
    error_category: str | None = None


class _ContractFailure(Exception):
    def __init__(self, category: str) -> None:
        super().__init__(category)
        self.category = category


def _sha256_text(value: str) -> str:
    return hashlib.sha256(value.encode()).hexdigest()


def _contract_tool() -> ModelToolSchema:
    return ModelToolSchema(
        name=_CONTRACT_TOOL_NAME,
        description="Return the status of a synthetic transport marker.",
        parameters={
            "type": "object",
            "properties": {
                "item": {
                    "type": "string",
                    "enum": ["status"],
                }
            },
            "required": ["item"],
            "additionalProperties": False,
        },
    )


def _contract_messages() -> tuple[ModelMessage, ...]:
    return (
        ModelMessage(
            role="system",
            content=(
                "This is a synthetic provider transport check. Use no private "
                "data and do not access external tools."
            ),
        ),
        ModelMessage(
            role="user",
            content=(
                "Call synthetic_lookup exactly once with item set to status. "
                "Do not answer normally before the tool result."
            ),
        ),
    )


def _contract_first_request() -> ModelRequest:
    tool = _contract_tool()
    return ModelRequest(
        messages=_contract_messages(),
        tools=(tool,),
        tool_choice=tool.name,
        max_output_tokens=_CONTRACT_MAX_OUTPUT_TOKENS,
        reasoning=ModelReasoning(enabled=False),
    )


def _contract_second_request(response: ModelResponse) -> ModelRequest:
    call = response.assistant_message.tool_calls[0]
    tool_result = ModelMessage(
        role="tool",
        content=_CONTRACT_RESULT_JSON,
        tool_call_id=call.call_id,
    )
    return ModelRequest(
        messages=(
            *_contract_messages(),
            response.assistant_message,
            tool_result,
        ),
        tools=(_contract_tool(),),
        max_output_tokens=_CONTRACT_MAX_OUTPUT_TOKENS,
        reasoning=ModelReasoning(enabled=False),
    )


def provider_tool_contract_fake_responses(
    models: tuple[ModelSpec, ...],
) -> tuple[ModelResponse, ...]:
    responses: list[ModelResponse] = []
    usage = ModelUsage(
        input_tokens=20,
        output_tokens=5,
        total_tokens=25,
        reasoning_tokens=0,
        cache_hit_tokens=0,
        cache_miss_tokens=20,
    )
    for model in models:
        responses.append(
            ModelResponse(
                assistant_message=ModelMessage(
                    role="assistant",
                    content=None,
                    tool_calls=(
                        ModelToolCall(
                            call_id=f"fake-{model.model_id}-tool-001",
                            name=_CONTRACT_TOOL_NAME,
                            arguments_json='{"item":"status"}',
                        ),
                    ),
                ),
                provider_id=model.provider_id,
                model_id=model.model_id,
                stop_reason=ModelStopReason.TOOL_USE,
                raw_stop_reason="tool_calls",
                usage=usage,
            )
        )
        responses.append(
            ModelResponse(
                assistant_message=ModelMessage(
                    role="assistant",
                    content="Synthetic provider contract complete.",
                ),
                provider_id=model.provider_id,
                model_id=model.model_id,
                stop_reason=ModelStopReason.STOP,
                raw_stop_reason="stop",
                usage=usage,
            )
        )
    return tuple(responses)


def _contract_record(model: ModelSpec) -> dict[str, Any]:
    return {
        "provider_id": model.provider_id,
        "model_id": model.model_id,
        "first_finish_reason": None,
        "first_raw_finish_reason": None,
        "second_finish_reason": None,
        "second_raw_finish_reason": None,
        "call_id_present": False,
        "argument_sha256": None,
        "argument_length": None,
        "first_latency_ms": None,
        "second_latency_ms": None,
        "first_usage": None,
        "second_usage": None,
        "final_text_present": False,
        "final_text_length": None,
        "final_text_sha256": None,
        "outcome": "failed",
        "error_category": None,
    }


def _record_response(
    record: dict[str, Any],
    *,
    position: str,
    response: ModelResponse,
    latency_ms: float,
) -> None:
    record[f"{position}_finish_reason"] = response.stop_reason.value
    record[f"{position}_raw_finish_reason"] = response.raw_stop_reason
    record[f"{position}_latency_ms"] = round(latency_ms, 3)
    record[f"{position}_usage"] = asdict(response.usage)


def _provider_failure(response: ModelResponse, *, position: str) -> None:
    if response.stop_reason in {
        ModelStopReason.ERROR,
        ModelStopReason.ABORTED,
    }:
        category = response.error_category or response.stop_reason.value
        raise _ContractFailure(f"{position}_{category}")


def _validate_first_response(
    response: ModelResponse,
    record: dict[str, Any],
) -> None:
    _provider_failure(response, position="first")
    if response.stop_reason != ModelStopReason.TOOL_USE:
        raise _ContractFailure(CAT_UNEXPECTED_FIRST)

    tool_calls = response.assistant_message.tool_calls
    if len(tool_calls) != 1:
        raise _ContractFailure("tool_call_count")

    call = tool_calls[0]
    record["call_id_present"] = bool(call.call_id)
    record["argument_sha256"] = _sha256_text(call.arguments_json)
    record["argument_length"] = len(call.arguments_json)

    if not call.call_id:
        raise _ContractFailure(CAT_MISSING_CALL_ID)
    if call.name != _CONTRACT_TOOL_NAME:
        raise _ContractFailure("unexpected_tool_name")
    try:
        arguments = json.loads(call.arguments_json)
    except json.JSONDecodeError as exc:
        raise _ContractFailure(CAT_INVALID_ARGS) from exc
    if not isinstance(arguments, dict):
        raise _ContractFailure("arguments_not_object")
    if arguments != _CONTRACT_ARGUMENTS:
        raise _ContractFailure("unexpected_arguments")


def _validate_second_response(
    response: ModelResponse,
    record: dict[str, Any],
) -> None:
    _provider_failure(response, position="second")
    if response.stop_reason != ModelStopReason.STOP:
        raise _ContractFailure(CAT_UNEXPECTED_SECOND)
    if response.assistant_message.tool_calls:
        raise _ContractFailure("unexpected_second_tool_call")

    final_text = response.assistant_message.content
    if final_text is None or not final_text.strip():
        raise _ContractFailure("missing_final_text")

    record["final_text_present"] = True
    record["final_text_length"] = len(final_text)
    record["final_text_sha256"] = _sha256_text(final_text)


async def _run_contract_model(
    model_layer: ModelLayer,
    model: ModelSpec,
) -> dict[str, Any]:
    record = _contract_record(model)
    try:
        first_started = perf_counter()
        first_response = await model_layer.complete(
            model,
            _contract_first_request(),
            asyncio.Event(),
        )
        first_latency_ms = (perf_counter() - first_started) * 1000
        _record_response(
            record,
            position="first",
            response=first_response,
            latency_ms=first_latency_ms,
        )
        _validate_first_response(first_response, record)

        second_request = _contract_second_request(first_response)
        second_started = perf_counter()
        second_response = await model_layer.complete(
            model,
            second_request,
            asyncio.Event(),
        )
        second_latency_ms = (perf_counter() - second_started) * 1000
        _record_response(
            record,
            position="second",
            response=second_response,
            latency_ms=second_latency_ms,
        )
        _validate_second_response(second_response, record)
    except _ContractFailure as exc:
        record["error_category"] = exc.category
        return record
    except Exception:
        logger.exception(
            "contract model %s failed internally",
            model.model_id,
        )
        record["error_category"] = "internal"
        return record

    record["outcome"] = "passed"
    return record


async def run_provider_tool_contract(
    model_layer: ModelLayer,
    models: tuple[ModelSpec, ...],
    *,
    mode: str,
    receipt_root: Path,
    secrets: tuple[str, ...] = (),
    timeout_seconds: float | None = None,
) -> ExperimentResult:
    writer = ReceiptWriter.create(
        receipt_root,
        experiment=_CONTRACT_EXPERIMENT,
        secrets=secrets,
    )
    started_at = utc_now()
    writer.write_json(
        "request.json",
        {
            "models": [asdict(model) for model in models],
            "tool_name": _CONTRACT_TOOL_NAME,
            "thinking_enabled": False,
            "maximum_model_calls_per_model": 2,
        },
    )

    records: list[dict[str, Any]] = []
    for model in models:
        writer.append_event(
            {
                "at": utc_now(),
                "event": "model_started",
                "provider_id": model.provider_id,
                "model_id": model.model_id,
            }
        )
        record = await _run_contract_model(model_layer, model)
        records.append(record)
        writer.append_event(
            {
                "at": utc_now(),
                "event": "model_finished",
                "provider_id": model.provider_id,
                "model_id": model.model_id,
                "outcome": record["outcome"],
                "error_category": record["error_category"],
            }
        )

    passed_models = sum(record["outcome"] == "passed" for record in records)
    outcome = "passed" if passed_models == len(models) and models else "failed"
    error_categories = [
        record["error_category"]
        for record in records
        if record["error_category"] is not None
    ]
    error_category = error_categories[0] if error_categories else None

    writer.write_json("response.json", records)
    writer.write_json(
        "manifest.json",
        {
            "run_id": writer.run_id,
            "experiment": _CONTRACT_EXPERIMENT,
            "experiment_version": EXPERIMENT_VERSION,
            "mode": mode,
            "started_at": started_at,
            "finished_at": utc_now(),
            "settings": {
                "stream": True,
                "thinking_enabled": False,
                "retry_policy": "provider-managed",
                "maximum_model_calls": len(models) * 2,
                "timeout_seconds": timeout_seconds,
            },
            "outcome": outcome,
            "error_category": error_category,
            "models": records,
        },
    )
    writer.write_review(
        "# Run Review\n\n"
        f"- Outcome: `{outcome}`\n"
        f"- Mode: `{mode}`\n"
        f"- Models passed: `{passed_models}/{len(models)}`\n"
        f"- Safe error category: `{error_category or 'none'}`\n"
        "- Thinking enabled: `no`\n"
        "- Library content used: `no`\n"
        "- Web access used: `no`\n"
        "- Final response text stored: `no`\n\n"
        "Human inspection: pending.\n"
    )
    return ExperimentResult(
        outcome=outcome,
        run_dir=writer.run_dir,
        error_category=error_category,
    )


def _requests(
    model: ModelSpec,
) -> list[tuple[str, ModelSpec, ModelRequest]]:
    flash_request = ModelRequest(
        messages=(
            ModelMessage(
                role="system",
                content=_SYSTEM_PREFIX
                + " Return only a JSON object with the requested fields.",
            ),
            ModelMessage(
                role="user",
                content=(
                    'Return JSON exactly shaped like {"experiment":"model-smoke",'
                    '"scope":"synthetic","status":"ok"}.'
                ),
            ),
        ),
        max_output_tokens=128,
        response_format="json_object",
    )
    tool = ModelToolSchema(
        name="record_synthetic_marker",
        description="Record a marker used only by the synthetic transport test.",
        parameters={
            "type": "object",
            "properties": {
                "label": {"type": "string"},
                "count": {"type": "integer"},
            },
            "required": ["label", "count"],
            "additionalProperties": False,
        },
    )
    forced_tool_request = ModelRequest(
        messages=(
            ModelMessage(role="system", content=_SYSTEM_PREFIX),
            ModelMessage(
                role="user",
                content=(
                    "Call record_synthetic_marker with label foundation and "
                    "count 1. Do not answer normally."
                ),
            ),
        ),
        max_output_tokens=128,
        tools=(tool,),
        tool_choice=tool.name,
    )
    return [
        ("flash-json", model, flash_request),
        ("flash-json-repeat", model, flash_request),
        ("flash-forced-tool", model, forced_tool_request),
    ]


def _request_payload(
    label: str,
    model: ModelSpec,
    request: ModelRequest,
) -> dict[str, Any]:
    return {
        "label": label,
        "model": asdict(model),
        "request": asdict(request),
    }


def _response_payload(
    label: str,
    response: ModelResponse,
    latency_ms: float,
) -> dict[str, Any]:
    assistant = response.assistant_message
    return {
        "label": label,
        "provider_id": response.provider_id,
        "model_id": response.model_id,
        "content": assistant.content,
        "stop_reason": response.stop_reason.value,
        "raw_stop_reason": response.raw_stop_reason,
        "tool_calls": [asdict(call) for call in assistant.tool_calls],
        "usage": asdict(response.usage),
        "latency_ms": round(latency_ms, 3),
        "outcome": "passed",
    }


def _validate(label: str, response: ModelResponse) -> None:
    if label.startswith("flash-json"):
        if response.stop_reason != ModelStopReason.STOP:
            raise ExperimentValidationError(
                f"{label} did not finish with a normal stop."
            )
        try:
            content = json.loads(response.assistant_message.content or "")
        except json.JSONDecodeError as exc:
            raise ExperimentValidationError(
                f"{label} did not return valid JSON."
            ) from exc
        expected = {
            "experiment": "model-smoke",
            "scope": "synthetic",
            "status": "ok",
        }
        if content != expected:
            raise ExperimentValidationError(
                f"{label} returned an unexpected JSON shape."
            )
        return

    if response.stop_reason != ModelStopReason.TOOL_USE:
        raise ExperimentValidationError(
            "flash-forced-tool did not finish with tool use."
        )
    tool_calls = response.assistant_message.tool_calls
    if len(tool_calls) != 1:
        raise ExperimentValidationError(
            "flash-forced-tool did not return exactly one normalized tool call."
        )
    call = tool_calls[0]
    if call.name != "record_synthetic_marker":
        raise ExperimentValidationError(
            "flash-forced-tool returned the wrong function name."
        )
    try:
        arguments = json.loads(call.arguments_json)
    except json.JSONDecodeError as exc:
        raise ExperimentValidationError(
            "flash-forced-tool returned invalid argument JSON."
        ) from exc
    if arguments != {"label": "foundation", "count": 1}:
        raise ExperimentValidationError(
            "flash-forced-tool returned unexpected arguments."
        )


def _failed_response(
    label: str,
    error_category: str,
) -> dict[str, Any]:
    return {
        "label": label,
        "outcome": "failed",
        "error_category": error_category,
    }


async def run_model_smoke(
    model_layer: ModelLayer,
    *,
    model: ModelSpec,
    mode: str,
    receipt_root: Path,
    secrets: tuple[str, ...] = (),
    timeout_seconds: float | None = None,
) -> ExperimentResult:
    writer = ReceiptWriter.create(
        receipt_root,
        experiment="model-smoke",
        secrets=secrets,
    )
    started_at = utc_now()
    requests = _requests(model)
    writer.write_json(
        "request.json",
        [
            _request_payload(label, model, request)
            for label, model, request in requests
        ],
    )
    responses: list[dict[str, Any]] = []
    outcome = "passed"
    error_category: str | None = None

    for label, model, request in requests:
        writer.append_event(
            {
                "at": utc_now(),
                "event": "call_started",
                "label": label,
                "provider_id": model.provider_id,
                "model_id": model.model_id,
            }
        )
        started = perf_counter()
        try:
            response = await model_layer.complete(
                model,
                request,
                asyncio.Event(),
            )
            latency_ms = (perf_counter() - started) * 1000
            if response.stop_reason in {
                ModelStopReason.ERROR,
                ModelStopReason.ABORTED,
            }:
                outcome = "failed"
                error_category = (
                    response.error_category or response.stop_reason.value
                )
                responses.append(_failed_response(label, error_category))
                writer.append_event(
                    {
                        "at": utc_now(),
                        "event": "call_failed",
                        "label": label,
                        "error_category": error_category,
                    }
                )
                break

            _validate(label, response)
            normalized = _response_payload(label, response, latency_ms)
            responses.append(normalized)
            writer.append_event(
                {
                    "at": utc_now(),
                    "event": "call_completed",
                    "label": label,
                    "provider_id": response.provider_id,
                    "model_id": response.model_id,
                    "stop_reason": response.stop_reason.value,
                    "raw_stop_reason": response.raw_stop_reason,
                    "latency_ms": normalized["latency_ms"],
                    "usage": normalized["usage"],
                }
            )
        except WeaverError as exc:
            outcome = "failed"
            error_category = exc.category
            failed = _failed_response(label, exc.category)
            failed["status_code"] = exc.status_code
            responses.append(failed)
            writer.append_event(
                {
                    "at": utc_now(),
                    "event": "call_failed",
                    "label": label,
                    "error_category": exc.category,
                    "status_code": exc.status_code,
                }
            )
            break
        except Exception:
            outcome = "failed"
            error_category = "internal"
            responses.append(_failed_response(label, "internal"))
            writer.append_event(
                {
                    "at": utc_now(),
                    "event": "call_failed",
                    "label": label,
                    "error_category": "internal",
                }
            )
            break

    writer.write_json("response.json", responses)
    manifest = {
        "run_id": writer.run_id,
        "experiment": "model-smoke",
        "experiment_version": EXPERIMENT_VERSION,
        "mode": mode,
        "started_at": started_at,
        "finished_at": utc_now(),
        "settings": {
            "stream": True,
            "retry_policy": "provider-managed",
            "maximum_model_calls": len(requests),
            "timeout_seconds": timeout_seconds,
        },
        "outcome": outcome,
        "error_category": error_category,
        "calls": [
            {
                "label": response["label"],
                "provider_id": response.get("provider_id"),
                "model_id": response.get("model_id"),
                "stop_reason": response.get("stop_reason"),
                "raw_stop_reason": response.get("raw_stop_reason"),
                "latency_ms": response.get("latency_ms"),
                "usage": response.get("usage"),
                "outcome": response["outcome"],
                "error_category": response.get("error_category"),
            }
            for response in responses
        ],
    }
    writer.write_json("manifest.json", manifest)
    writer.write_review(
        "# Run Review\n\n"
        f"- Outcome: `{outcome}`\n"
        f"- Mode: `{mode}`\n"
        f"- Calls completed: `{sum(item['outcome'] == 'passed' for item in responses)}`\n"
        f"- Safe error category: `{error_category or 'none'}`\n"
        "- Novel content used: `no`\n"
        "- Literary-quality conclusion: `none`\n\n"
        "Human inspection: pending.\n"
    )
    return ExperimentResult(
        outcome=outcome,
        run_dir=writer.run_dir,
        error_category=error_category,
    )
