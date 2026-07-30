import importlib.util
import os
from pathlib import Path

from .config import MODEL_ALIASES
from .model_layer.deepseek import DEEPSEEK_MODELS
from .receipts import secure_directory


def check_state_path(path: Path) -> tuple[bool, str]:
    try:
        secure_directory(path)
        probe = path / ".doctor-write-probe"
        descriptor = os.open(
            probe,
            os.O_WRONLY | os.O_CREAT | os.O_EXCL,
            0o600,
        )
        os.close(descriptor)
        probe.unlink()
    except OSError:
        return False, "private state path is not writable"
    return True, "private state path is writable and owner-only"


def run_doctor(state_path: Path, *, credential_present: bool) -> list[dict[str, object]]:
    checks: list[dict[str, object]] = []
    expected_aliases = {
        "flash": "deepseek-v4-flash",
        "pro": "deepseek-v4-pro",
    }
    checks.append(
        {
            "name": "model_catalogue",
            "ok": (
                dict(MODEL_ALIASES) == expected_aliases
                and {model.model_id for model in DEEPSEEK_MODELS}
                == set(expected_aliases.values())
            ),
            "detail": "flash/pro aliases match the admitted model catalogue",
        }
    )
    for dependency in ("openai", "dotenv"):
        checks.append(
            {
                "name": f"dependency:{dependency}",
                "ok": importlib.util.find_spec(dependency) is not None,
                "detail": f"{dependency} is importable",
            }
        )
    state_ok, state_detail = check_state_path(state_path)
    checks.append(
        {
            "name": "private_state",
            "ok": state_ok,
            "detail": state_detail,
        }
    )
    checks.append(
        {
            "name": "live_credential",
            "ok": True,
            "detail": (
                "DEEPSEEK_KEY is configured"
                if credential_present
                else "DEEPSEEK_KEY is absent; fake mode remains available"
            ),
            "warning": not credential_present,
        }
    )
    checks.append(
        {
            "name": "network",
            "ok": True,
            "detail": "doctor made no network call",
        }
    )
    return checks
