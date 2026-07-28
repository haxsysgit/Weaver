from types import MappingProxyType

from .errors import InvalidModelAliasError

MODEL_ALIASES = MappingProxyType(
    {
        "flash": "deepseek-v4-flash",
        "pro": "deepseek-v4-pro",
    }
)

DEEPSEEK_BASE_URL = "https://api.deepseek.com"
DEFAULT_TIMEOUT_SECONDS = 30.0
EXPERIMENT_VERSION = "1"


def resolve_model(alias: str) -> str:
    try:
        return MODEL_ALIASES[alias]
    except KeyError as exc:
        allowed = ", ".join(sorted(MODEL_ALIASES))
        raise InvalidModelAliasError(
            f"Unknown model alias {alias!r}; expected one of: {allowed}"
        ) from exc
