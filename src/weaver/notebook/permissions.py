"""Private-mode check: directories 700, files 600, no symlinks."""

from __future__ import annotations

import os
from pathlib import Path

from .context import relative_path
from .report import CheckResult


def check_private_permissions(root: Path, result: CheckResult) -> None:
    """Require private modes when the notebook contains files."""

    try:
        has_children = any(root.iterdir())
    except OSError:
        result.add(root, "cannot inspect permissions")
        return
    if not has_children:
        return

    paths = [root, *sorted(root.rglob("*"))]
    for path in paths:
        try:
            path_stat = path.lstat()
        except OSError:
            result.add(relative_path(path, root), "cannot inspect permissions")
            continue
        display_path = relative_path(path, root)
        if path.is_symlink():
            result.add(display_path, "unsafe permissions: symlink is not allowed")
        elif os.name != "nt" and path_stat.st_mode & 0o077:
            # Windows has no group/other mode bits (every file reports
            # 0o666 or 0o777); access there is governed by profile ACLs.
            result.add(display_path, "unsafe permissions")
