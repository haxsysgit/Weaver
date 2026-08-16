"""Private-in-Git guard: notebook and novels must never be tracked."""

from __future__ import annotations

import os
import subprocess
from pathlib import Path

from .context import NotebookContext, relative_path
from .report import CheckResult


def git_index_paths(repo_root: Path) -> list[str]:
    try:
        completed = subprocess.run(
            ["git", "-C", str(repo_root), "ls-files", "--cached", "-z"],
            capture_output=True,
            check=False,
        )
    except OSError:
        return []
    if completed.returncode != 0:
        return []
    return [item for item in completed.stdout.decode("utf-8").split("\0") if item]


def check_git_exposure(context: NotebookContext, result: CheckResult) -> None:
    if context.repo_root is None:
        return
    indexed_paths = git_index_paths(context.repo_root)
    notebook_relative = relative_path(context.root, context.repo_root).as_posix().rstrip("/")
    for indexed_path in indexed_paths:
        normalised = indexed_path.replace(os.sep, "/")
        if normalised == notebook_relative or normalised.startswith(f"{notebook_relative}/"):
            result.add(indexed_path, "private knowledge tracked by Git")
        elif normalised.startswith("novels/"):
            result.add(indexed_path, "novel text tracked by git")
