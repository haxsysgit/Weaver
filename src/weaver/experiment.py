import asyncio
import json
from dataclasses import asdict, dataclass
from pathlib import Path
from time import perf_counter
from typing import Any

from .config import EXPERIMENT_VERSION
from .errors import ExperimentValidationError, WeaverError
from .model_layer import (
    ModelLayer,
    ModelMessage,
    ModelRequest,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelToolSchema,
)
from .receipts import ReceiptWriter, utc_now

_SYSTEM_PREFIX = (
    "This is a synthetic transport smoke test. Use no private data and make no "
    "claims about novels or literary quality."
)


@dataclass(frozen=True, slots=True)
class ExperimentResult:
    outcome: str
    run_dir: Path
    error_category: str | None = None


def _requests(
    flash_model: ModelSpec,
    pro_model: ModelSpec,
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
    pro_request = ModelRequest(
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
        ("flash-json", flash_model, flash_request),
        ("flash-json-repeat", flash_model, flash_request),
        ("pro-forced-tool", pro_model, pro_request),
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
            "pro-forced-tool did not finish with tool use."
        )
    tool_calls = response.assistant_message.tool_calls
    if len(tool_calls) != 1:
        raise ExperimentValidationError(
            "pro-forced-tool did not return exactly one normalized tool call."
        )
    call = tool_calls[0]
    if call.name != "record_synthetic_marker":
        raise ExperimentValidationError(
            "pro-forced-tool returned the wrong function name."
        )
    try:
        arguments = json.loads(call.arguments_json)
    except json.JSONDecodeError as exc:
        raise ExperimentValidationError(
            "pro-forced-tool returned invalid argument JSON."
        ) from exc
    if arguments != {"label": "foundation", "count": 1}:
        raise ExperimentValidationError(
            "pro-forced-tool returned unexpected arguments."
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
    flash_model: ModelSpec,
    pro_model: ModelSpec,
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
    requests = _requests(flash_model, pro_model)
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
            "max_retries": 0,
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
