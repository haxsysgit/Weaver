"""Check issue and result types."""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from .constants import MAX_CHAPTER


@dataclass(frozen=True, slots=True)
class CheckIssue:
    """One diagnostic. Never carries private content."""

    path: str
    message: str

    def __str__(self) -> str:
        return f"{self.path}: {self.message}"


@dataclass
class CheckResult:
    """A non-sensitive checker result. Warnings never fail the check."""

    issues: list[CheckIssue] = field(default_factory=list)
    warnings: list[CheckIssue] = field(default_factory=list)
    counts: dict[str, int] = field(default_factory=dict)

    @property
    def ok(self) -> bool:
        return not self.issues

    @property
    def ok_with_warnings(self) -> bool:
        return not self.issues

    def add(self, path: Path | str, message: str) -> None:
        display_path = path.as_posix() if isinstance(path, Path) else path
        self.issues.append(CheckIssue(path=display_path, message=message))

    def warn(self, path: Path | str, message: str) -> None:
        display_path = path.as_posix() if isinstance(path, Path) else path
        self.warnings.append(CheckIssue(path=display_path, message=message))

    def has_message(self, message: str) -> bool:
        return any(message in issue.message for issue in self.issues)

    @property
    def warning_count(self) -> int:
        return len(self.warnings)


def validate_range(through: int, result: CheckResult, root: Path | str) -> bool:
    if not isinstance(through, int) or not 1 <= through <= MAX_CHAPTER:
        result.add(root, f"requested range must be between chapters 1 and {MAX_CHAPTER}")
        return False
    return True
