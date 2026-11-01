"""What the test host's OS can express, so privacy tests stay honest.

Unix mode bits (700 dirs, 600 files) only exist on POSIX. Windows reports
every file as 0o666 or 0o777 and guards access with ACLs instead, so a mode
assertion there is meaningless rather than a failure. Symlink refusal stays
tested everywhere the OS lets an unprivileged user create one.
"""

from __future__ import annotations

import os
import stat
from pathlib import Path

import pytest

POSIX_MODES = os.name != "nt"

posix_modes_only = pytest.mark.skipif(
    not POSIX_MODES, reason="Unix mode bits do not exist on Windows"
)


def assert_mode(path: Path, expected: int) -> None:
    """Assert an exact Unix mode where the OS has one."""
    if POSIX_MODES:
        assert stat.S_IMODE(path.stat().st_mode) == expected, (
            f"{path} has mode {stat.S_IMODE(path.stat().st_mode):o}, "
            f"expected {expected:o}"
        )


def assert_no_group_or_other_access(path: Path) -> None:
    """Assert owner-only access where the OS has Unix mode bits."""
    if POSIX_MODES:
        mode = path.stat().st_mode
        assert mode & 0o077 == 0, f"{path} has group/other access: {mode:o}"


def symlink_or_skip(link: Path, target: Path, *, target_is_directory: bool = False) -> None:
    """Create a symlink, or skip when the OS will not let this user.

    Windows needs Developer Mode or admin rights to create symlinks.
    """
    try:
        link.symlink_to(target, target_is_directory=target_is_directory)
    except OSError as error:
        if os.name == "nt" and getattr(error, "winerror", None) == 1314:
            pytest.skip("creating symlinks needs Developer Mode or admin on Windows")
        raise
