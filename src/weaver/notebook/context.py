"""Shared state built while checking one notebook."""

from __future__ import annotations

import json
import subprocess
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from .report import CheckResult


def relative_path(path: Path, root: Path) -> Path:
    try:
        return path.relative_to(root)
    except ValueError:
        return path


def sha256_of(path: Path) -> str:
    import hashlib

    digest = hashlib.sha256()
    with path.open("rb") as source_file:
        for chunk in iter(lambda: source_file.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def read_json(path: Path, result: CheckResult) -> dict[str, Any] | None:
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, UnicodeError, json.JSONDecodeError):
        result.add(path, "invalid JSON")
        return None
    if not isinstance(value, dict):
        result.add(path, "record must be a JSON object")
        return None
    return value


def find_repo_root(notebook_root: Path) -> Path | None:
    for candidate in (notebook_root, *notebook_root.parents):
        if (candidate / "novels").is_dir():
            return candidate
    try:
        completed = subprocess.run(
            ["git", "-C", str(notebook_root), "rev-parse", "--show-toplevel"],
            capture_output=True,
            check=False,
            text=True,
        )
    except OSError:
        return None
    if completed.returncode != 0 or not completed.stdout.strip():
        return None
    return Path(completed.stdout.strip())


def discover_novel_dir(
    notebook_root: Path,
    repo_root: Path | None,
    explicit_novel_dir: Path | None,
) -> Path | None:
    if explicit_novel_dir is not None:
        return explicit_novel_dir.resolve()
    if repo_root is not None:
        candidate = repo_root / "novels" / "shadow-slave"
        if candidate.is_dir():
            return candidate.resolve()
    source_candidate = notebook_root / "novels" / "shadow-slave"
    if source_candidate.is_dir():
        return source_candidate.resolve()
    return None


@dataclass
class NotebookContext:
    """Shared state built while checking one notebook."""

    root: Path
    repo_root: Path | None
    novel_dir: Path | None
    requested_through: int
    effective_through: int
    source_texts: dict[int, str] = field(default_factory=dict)
    source_line_counts: dict[int, int] = field(default_factory=dict)
    source_paragraph_counts: dict[int, int] = field(default_factory=dict)
    entry_ids: set[str] = field(default_factory=set)
    entity_ids: set[str] = field(default_factory=set)
    connection_ids: set[str] = field(default_factory=set)
    all_ids: set[str] = field(default_factory=set)
    aliases: dict[str, str] = field(default_factory=dict)
    entries_by_id: dict[str, dict[str, Any]] = field(default_factory=dict)
    rich_records: bool = False
    records: dict[int, tuple[Path, dict[str, Any]]] = field(default_factory=dict)
    note_paths: dict[int, Path] = field(default_factory=dict)
