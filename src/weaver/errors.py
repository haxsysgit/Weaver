from dataclasses import dataclass


@dataclass(eq=False)
class WeaverError(Exception):
    message: str
    category: str = "internal"
    status_code: int | None = None

    def __str__(self) -> str:
        return self.message


class MissingCredentialError(WeaverError):
    def __init__(self) -> None:
        super().__init__(
            "DEEPSEEK_KEY is required for explicit live execution.",
            category="configuration",
        )


class InvalidModelAliasError(WeaverError):
    def __init__(self, message: str) -> None:
        super().__init__(message, category="configuration")


class ModelTimeoutError(WeaverError):
    def __init__(self) -> None:
        super().__init__("The model request timed out.", category="timeout")


class ModelProviderError(WeaverError):
    def __init__(self, category: str, status_code: int | None = None) -> None:
        super().__init__(
            "The model provider rejected or could not complete the request.",
            category=category,
            status_code=status_code,
        )


class ExperimentValidationError(WeaverError):
    def __init__(self, message: str) -> None:
        super().__init__(message, category="validation")
