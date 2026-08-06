"""Weaver startup configuration.

Two layered sources, loaded from the current working directory:

- `.env` — plain KEY=VALUE lines (dotenv style). Standard dev pattern;
  never committed (gitignored).
- `.weaver/config.toml` — the private Weaver config file. Currently
  supports:

  .. code-block:: toml

     [api]
     key = "sk-..."     # DeepSeek API key (DEEPSEEK_KEY)

     [chat]
     model = "flash"    # alias or full id; default deepseek-v4-flash

Precedence (first wins): `.env` > real environment > `.weaver/config.toml`.

The `.env` file is the project's own configuration and wins over values
inherited from the shell, so a stale export (say, an old key in
``~/.zshrc``) can never shadow a fresh key in `.env`. The config file is
the last-resort source.

Loaded values are injected into ``os.environ`` so existing readers
(cli, doctor) keep working unchanged.
"""

import os
import tomllib
from pathlib import Path
from types import MappingProxyType
from typing import Any, Mapping

from .errors import InvalidModelAliasError

MODEL_ALIASES = MappingProxyType(
    {
        "flash": "deepseek-v4-flash",
    }
)

DEEPSEEK_BASE_URL = "https://api.deepseek.com"
DEFAULT_TIMEOUT_SECONDS = 30.0
EXPERIMENT_VERSION = "1"

DOTENV_FILE = ".env"
CONFIG_FILE = ".weaver/config.toml"
CHAT_MODEL_ENV = "WEAVER_CHAT_MODEL"


def resolve_model(alias: str) -> str:
    try:
        return MODEL_ALIASES[alias]
    except KeyError as exc:
        allowed = ", ".join(sorted(MODEL_ALIASES))
        raise InvalidModelAliasError(
            f"Unknown model alias {alias!r}; expected one of: {allowed}"
        ) from exc


def _parse_dotenv(path: Path) -> dict[str, str]:
    """Parse a minimal .env file: KEY=VALUE lines, # comments, quoted values."""
    values: dict[str, str] = {}
    for raw in path.read_text().splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if key:
            values[key] = value
    return values


def _resolve_chat_model(model: str) -> str:
    """Accept a model alias (flash/pro) or a full model id."""
    if model in MODEL_ALIASES:
        return MODEL_ALIASES[model]
    if model in MODEL_ALIASES.values():
        return model
    raise ValueError(
        f"Unknown chat model {model!r} in {CONFIG_FILE}; expected one of "
        f"{', '.join(sorted(set(MODEL_ALIASES.values())))} (aliases: "
        f"{', '.join(sorted(MODEL_ALIASES))})."
    )


def load_startup_config() -> Mapping[str, Any]:
    """Load `.env` then `.weaver/config.toml` from the current directory.

    Precedence (first wins): `.env` > real environment >
    `.weaver/config.toml`. `.env` values override anything already in
    the environment (the project file is authoritative); the config
    file only fills values that are still missing. Returns the parsed
    config table (empty mapping when the file is absent).
    """
    dotenv_path = Path.cwd() / DOTENV_FILE
    if dotenv_path.is_file():
        for key, value in _parse_dotenv(dotenv_path).items():
            os.environ[key] = value

    config_path = Path.cwd() / CONFIG_FILE
    if not config_path.is_file():
        return {}
    try:
        table = tomllib.loads(config_path.read_text())
    except tomllib.TOMLDecodeError as exc:
        raise ValueError(f"invalid {config_path}: {exc}") from exc

    api_key = (table.get("api") or {}).get("key")
    if isinstance(api_key, str) and api_key.strip():
        os.environ.setdefault("DEEPSEEK_KEY", api_key.strip())

    chat_model = (table.get("chat") or {}).get("model")
    if chat_model is not None:
        if not isinstance(chat_model, str):
            raise ValueError(f"{config_path}: [chat] model must be a string")
        # Only validate when the value will actually be used: an
        # invalid config model must not raise when a valid model is
        # already set by .env or the environment.
        if CHAT_MODEL_ENV not in os.environ:
            os.environ[CHAT_MODEL_ENV] = _resolve_chat_model(chat_model)
    return table
