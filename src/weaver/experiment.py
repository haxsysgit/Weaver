import json
from dataclasses import asdict, dataclass
from pathlib import Path
from time import perf_counter
from typing import Any

from .client import ModelClient
from .config import EXPERIMENT_VERSION
from .errors import ExperimentValidationError, WeaverError
from .model import Message, ModelRequest, ModelResponse, ToolDefinition
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


def _requests() -> list[tuple[str, ModelRequest]]:
    flash_request = ModelRequest(
        model="flash",
        messages=(
            Message(
                role="system",
                content=_SYSTEM_PREFIX
                + " Return only a JSON object with the requested fields.",
            ),
            Message(
                role="user",
                content=(
                    'Return JSON exactly shaped like {"experiment":"model-smoke",'
                    '"scope":"synthetic","status":"ok"}.'
                ),
            ),
        ),
        max_tokens=128,
        response_format="json_object",
        thinking=False,
    )
    tool = ToolDefinition(
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
        model="pro",
        messages=(
            Message(role="system", content=_SYSTEM_PREFIX),
            Message(
                role="user",
                content=(
                    "Call record_synthetic_marker with label foundation and "
                    "count 1. Do not answer normally."
                ),
            ),
        ),
        max_tokens=128,
        tools=(tool,),
        tool_choice=tool.name,
        thinking=False,
    )
    return [
        ("flash-json", flash_request),
        ("flash-json-repeat", flash_request),
        ("pro-forced-tool", pro_request),
    ]


def _request_payload(label: str, request: ModelRequest) -> dict[str, Any]:
    return {"label": label, "request": asdict(request)}


def _response_payload(
    label: str,
    response: ModelResponse,
    latency_ms: float,
) -> dict[str, Any]:
    return {
        "label": label,
        "model_id": response.model_id,
        "content": response.content,
        "finish_reason": response.finish_reason,
        "tool_calls": [asdict(call) for call in response.tool_calls],
        "usage": asdict(response.usage),
        "latency_ms": round(latency_ms, 3),
        "outcome": "passed",
    }


def _validate(label: str, response: ModelResponse) -> None:
    if label.startswith("flash-json"):
        try:
            content = json.loads(response.content or "")
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

    if len(response.tool_calls) != 1:
        raise ExperimentValidationError(
            "pro-forced-tool did not return exactly one normalized tool call."
        )
    call = response.tool_calls[0]
    if call.name != "record_synthetic_marker":
        raise ExperimentValidationError(
            "pro-forced-tool returned the wrong function name."
        )
    try:
        arguments = json.loads(call.arguments)
    except json.JSONDecodeError as exc:
        raise ExperimentValidationError(
            "pro-forced-tool returned invalid argument JSON."
        ) from exc
    if arguments != {"label": "foundation", "count": 1}:
        raise ExperimentValidationError(
            "pro-forced-tool returned unexpected arguments."
        )


async def run_model_smoke(
    client: ModelClient,
    *,
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
    requests = _requests()
    writer.write_json(
        "request.json",
        [_request_payload(label, request) for label, request in requests],
    )
    responses: list[dict[str, Any]] = []
    outcome = "passed"
    error_category: str | None = None

    for label, request in requests:
        writer.append_event(
            {
                "at": utc_now(),
                "event": "call_started",
                "label": label,
                "model_alias": request.model,
            }
        )
        started = perf_counter()
        try:
            response = await client.complete(request)
            latency_ms = (perf_counter() - started) * 1000
            _validate(label, response)
            normalized = _response_payload(label, response, latency_ms)
            responses.append(normalized)
            writer.append_event(
                {
                    "at": utc_now(),
                    "event": "call_completed",
                    "label": label,
                    "model_id": response.model_id,
                    "finish_reason": response.finish_reason,
                    "latency_ms": normalized["latency_ms"],
                    "usage": normalized["usage"],
                }
            )
        except WeaverError as exc:
            outcome = "failed"
            error_category = exc.category
            responses.append(
                {
                    "label": label,
                    "outcome": "failed",
                    "error_category": exc.category,
                    "status_code": exc.status_code,
                }
            )
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
            responses.append(
                {
                    "label": label,
                    "outcome": "failed",
                    "error_category": "internal",
                }
            )
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
            "stream": False,
            "max_retries": 0,
            "timeout_seconds": timeout_seconds,
        },
        "outcome": outcome,
        "error_category": error_category,
        "calls": [
            {
                "label": response["label"],
                "model_id": response.get("model_id"),
                "finish_reason": response.get("finish_reason"),
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
