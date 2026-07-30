import json
import stat

import pytest

from weaver.experiment import run_model_smoke
from weaver.model_layer import (
    DEEPSEEK_FLASH,
    DEEPSEEK_MODELS,
    DEEPSEEK_PRO,
    FakeModelProvider,
    ModelLayer,
)
from weaver.receipts import REDACTED, ReceiptWriter, sanitize


def test_sensitive_values_and_reasoning_are_redacted(tmp_path) -> None:
    secret = "secret-value-12345"
    payload = {
        "api_key": secret,
        "nested": {
            "reasoning_content": "private scratchwork",
            "message": f"Bearer {secret}",
            "content": f"prefix {secret} suffix",
        },
        "usage": {"reasoning_tokens": 5, "total_tokens": 10},
    }

    sanitized = sanitize(payload, secrets=(secret,))

    rendered = json.dumps(sanitized)
    assert secret not in rendered
    assert "private scratchwork" not in rendered
    assert sanitized["api_key"] == REDACTED
    assert sanitized["nested"]["reasoning_content"] == REDACTED
    assert sanitized["usage"]["reasoning_tokens"] == 5


def test_receipt_directory_and_files_are_owner_only(tmp_path) -> None:
    private_root = tmp_path / ".weaver"
    writer = ReceiptWriter.create(private_root / "runs", experiment="test")
    writer.write_json("manifest.json", {"outcome": "passed"})
    writer.append_event({"event": "done"})
    writer.write_review("# Review\n")

    assert stat.S_IMODE(private_root.stat().st_mode) == 0o700
    assert stat.S_IMODE((private_root / "runs").stat().st_mode) == 0o700
    assert stat.S_IMODE(writer.run_dir.stat().st_mode) == 0o700
    for path in writer.run_dir.iterdir():
        assert stat.S_IMODE(path.stat().st_mode) == 0o600


def test_receipt_writer_rejects_path_traversal(tmp_path) -> None:
    writer = ReceiptWriter.create(tmp_path / "runs", experiment="test")

    with pytest.raises(ValueError):
        writer.write_json("../outside.json", {"unsafe": True})


@pytest.mark.asyncio
async def test_fake_smoke_writes_complete_safe_receipt(tmp_path) -> None:
    model_layer = ModelLayer()
    model_layer.register_provider(
        FakeModelProvider(
            "deepseek",
            models=DEEPSEEK_MODELS,
        )
    )
    result = await run_model_smoke(
        model_layer,
        flash_model=DEEPSEEK_FLASH,
        pro_model=DEEPSEEK_PRO,
        mode="fake",
        receipt_root=tmp_path / "runs",
    )

    assert result.outcome == "passed"
    assert {path.name for path in result.run_dir.iterdir()} == {
        "manifest.json",
        "events.jsonl",
        "request.json",
        "response.json",
        "review.md",
    }
    manifest = json.loads((result.run_dir / "manifest.json").read_text())
    responses = json.loads((result.run_dir / "response.json").read_text())
    assert manifest["outcome"] == "passed"
    assert len(manifest["calls"]) == 3
    assert responses[0]["model_id"] == "deepseek-v4-flash"
    assert responses[2]["model_id"] == "deepseek-v4-pro"
    combined = "".join(
        path.read_text()
        for path in result.run_dir.iterdir()
        if path.suffix in {".json", ".jsonl", ".md"}
    )
    assert "reasoning_content" not in combined
    assert "private scratchwork" not in combined
