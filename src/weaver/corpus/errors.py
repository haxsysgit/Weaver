"""Safe corpus error categories."""

from __future__ import annotations

from dataclasses import dataclass

from .models import ErrorCategory


@dataclass(eq=False)
class CorpusError(Exception):
    message: str
    category: ErrorCategory
    status_code: int | None = None
    detail_code: str | None = None
    observed_url: str | None = None
    observed_chapter: int | None = None

    def __str__(self) -> str:
        return self.message


def safe_error_message(category: ErrorCategory) -> str:
    messages = {
        ErrorCategory.CONFIGURATION: "Corpus source configuration is missing or invalid.",
        ErrorCategory.AUTHENTICATION: "The chapter source rejected its credential.",
        ErrorCategory.TIMEOUT: "The chapter source timed out.",
        ErrorCategory.PROVIDER: "The chapter source could not complete the request.",
        ErrorCategory.NOT_FOUND: "The requested chapter is not published at this URL.",
        ErrorCategory.EXTRACTION: "The chapter page did not contain the expected structure.",
        ErrorCategory.VALIDATION: "The chapter failed deterministic validation.",
        ErrorCategory.CONFLICT: "A valid local chapter conflicts with the proposed write.",
        ErrorCategory.FILESYSTEM: "The private corpus write could not be completed safely.",
        ErrorCategory.SECURITY: "A path or permission safety check failed.",
    }
    return messages[category]
