import json
import os
import re
import uuid
from dataclasses import asdict, is_dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Any, Iterable

REDACTED = "[REDACTED]"
_SENSITIVE_KEYS = {
    "api_key",
    "authorization",
    "deepseek_key",
    "firecrawl_api_key",
    "password",
    "reasoning_content",
}


def utc_now() -> str:
    return datetime.now(UTC).isoformat()


def secure_directory(path: Path) -> None:
    if path.is_symlink():
        raise OSError(f"Refusing symlinked private directory: {path}")
    path.mkdir(parents=True, exist_ok=True, mode=0o700)
    os.chmod(path, 0o700)
    if path.parent.name == ".weaver":
        if path.parent.is_symlink():
            raise OSError(f"Refusing symlinked private directory: {path.parent}")
        os.chmod(path.parent, 0o700)


def sanitize(value: Any, *, secrets: Iterable[str] = ()) -> Any:
    if is_dataclass(value):
        value = asdict(value)
    if isinstance(value, dict):
        sanitized: dict[str, Any] = {}
        for key, item in value.items():
            normalized = str(key).lower()
            if (
                normalized in _SENSITIVE_KEYS
                or normalized.endswith("_secret")
                or normalized.endswith("_password")
                or normalized.endswith("_api_key")
            ):
                sanitized[str(key)] = REDACTED
            else:
                sanitized[str(key)] = sanitize(item, secrets=secrets)
        return sanitized
    if isinstance(value, (list, tuple)):
        return [sanitize(item, secrets=secrets) for item in value]
    if isinstance(value, str):
        clean = re.sub(
            r"(?i)\bbearer\s+[A-Za-z0-9._~+/=-]+",
            f"Bearer {REDACTED}",
            value,
        )
        for secret in secrets:
            if secret and len(secret) >= 4:
                clean = clean.replace(secret, REDACTED)
        return clean
    return value


class ReceiptWriter:
    def __init__(
        self,
        run_dir: Path,
        *,
        secrets: Iterable[str] = (),
    ) -> None:
        self.run_dir = run_dir
        self._secrets = tuple(secret for secret in secrets if secret)

    @classmethod
    def create(
        cls,
        root: Path,
        *,
        experiment: str,
        secrets: Iterable[str] = (),
    ) -> "ReceiptWriter":
        root = root.resolve()
        secure_directory(root)
        run_id = (
            datetime.now(UTC).strftime("%Y%m%dT%H%M%S")
            + "-"
            + uuid.uuid4().hex[:12]
        )
        run_dir = root / f"{experiment}-{run_id}"
        run_dir.mkdir(mode=0o700)
        os.chmod(run_dir, 0o700)
        return cls(run_dir, secrets=secrets)

    @property
    def run_id(self) -> str:
        return self.run_dir.name

    def write_json(self, name: str, value: Any) -> None:
        payload = sanitize(value, secrets=self._secrets)
        self._write_bytes(
            name,
            (json.dumps(payload, indent=2, sort_keys=True) + "\n").encode(),
        )

    def append_event(self, value: Any) -> None:
        payload = sanitize(value, secrets=self._secrets)
        data = (json.dumps(payload, sort_keys=True) + "\n").encode()
        path = self._safe_path("events.jsonl")
        descriptor = os.open(
            path,
            os.O_WRONLY | os.O_CREAT | os.O_APPEND,
            0o600,
        )
        try:
            os.write(descriptor, data)
        finally:
            os.close(descriptor)
        os.chmod(path, 0o600)

    def write_review(self, content: str) -> None:
        safe = sanitize(content, secrets=self._secrets)
        self._write_bytes("review.md", str(safe).encode())

    def _write_bytes(self, name: str, data: bytes) -> None:
        path = self._safe_path(name)
        descriptor = os.open(
            path,
            os.O_WRONLY | os.O_CREAT | os.O_TRUNC,
            0o600,
        )
        try:
            os.write(descriptor, data)
        finally:
            os.close(descriptor)
        os.chmod(path, 0o600)

    def _safe_path(self, name: str) -> Path:
        if Path(name).name != name or name in {"", ".", ".."}:
            raise ValueError("Receipt filenames must stay inside the run directory.")
        return self.run_dir / name
