"""Linux pieces of the weekly refresh: a systemd user timer and a desktop
notification. The Linux twin of `schedule_windows.py` (Plan 031).

The timer runs `uv run --frozen weaver refresh --scheduled` in the repo
every Saturday at 10:00 local time (the author posts Monday to Friday).
It is a user unit, so it needs no root and runs as the signed-in user.
`Persistent=true` starts a missed run on the next boot or login, the same
catch-up the Windows task had with -StartWhenAvailable.

`--frozen` keeps the run from rewriting `uv.lock`; the environment is
still synced from the lock if it drifted.
"""

from __future__ import annotations

import logging
import os
import shutil
import subprocess
from collections.abc import Callable
from dataclasses import dataclass
from pathlib import Path

UNIT_NAME = "weaver-library-refresh"
SERVICE = f"{UNIT_NAME}.service"
TIMER = f"{UNIT_NAME}.timer"
ON_CALENDAR = "Sat *-*-* 10:00:00"
# Same ceiling as the Windows task's ExecutionTimeLimit.
TIME_LIMIT = "30min"
APP_NAME = "Weaver"

Runner = Callable[..., object]


@dataclass
class Result:
    """The shape the CLI reads from every scheduler call."""

    returncode: int
    stdout: str = ""
    stderr: str = ""


def unit_dir() -> Path:
    """Where systemd looks for this user's own units."""
    config = os.environ.get("XDG_CONFIG_HOME") or str(Path.home() / ".config")
    return Path(config) / "systemd" / "user"


def default_uv() -> Path:
    """An absolute uv: a user unit does not get the login shell's PATH."""
    found = shutil.which("uv")
    if found:
        return Path(found)
    return Path.home() / ".local" / "bin" / "uv"


def _quote(value: str, *, exec_line: bool = True) -> str:
    """One double-quoted word in a unit file.

    systemd expands % specifiers everywhere and $VARIABLES on Exec lines
    (not in Environment=), and it does not join adjacent quoted pieces the
    way a shell does, so shell quoting is not enough.
    """
    value = value.replace("\\", "\\\\").replace('"', '\\"').replace("%", "%%")
    if exec_line:
        value = value.replace("$", "$$")
    return f'"{value}"'


def render_service(project_root: Path, uv: Path) -> str:
    root = str(project_root)
    return "\n".join(
        [
            "[Unit]",
            "Description=Weaver library refresh (Plan 031): fetch new chapters, appends only",
            "",
            "[Service]",
            "Type=oneshot",
            # WorkingDirectory takes a plain path; only % needs escaping.
            f"WorkingDirectory={root.replace('%', '%%')}",
            f"Environment={_quote('WEAVER_PROJECT_ROOT=' + root, exec_line=False)}",
            f"ExecStart={_quote(str(uv))} run --frozen weaver refresh --scheduled",
            f"TimeoutStartSec={TIME_LIMIT}",
            "Nice=10",
            "",
        ]
    )


def render_timer() -> str:
    return "\n".join(
        [
            "[Unit]",
            "Description=Weekly Weaver library refresh (Saturday 10:00)",
            "",
            "[Timer]",
            f"OnCalendar={ON_CALENDAR}",
            "Persistent=true",
            f"Unit={SERVICE}",
            "",
            "[Install]",
            "WantedBy=timers.target",
            "",
        ]
    )


def _systemctl(args: list[str], runner: Runner) -> Result:
    try:
        done = runner(
            ["systemctl", "--user", *args],
            capture_output=True,
            text=True,
            timeout=60,
        )
    except (OSError, subprocess.SubprocessError) as exc:
        return Result(1, "", f"systemctl could not run ({type(exc).__name__})")
    return Result(
        int(getattr(done, "returncode", 1)),
        getattr(done, "stdout", "") or "",
        getattr(done, "stderr", "") or "",
    )


def _write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(path.name + ".tmp")
    temporary.write_text(text, encoding="utf-8", newline="\n")
    os.replace(temporary, path)


def install_weekly_timer(
    project_root: Path,
    *,
    uv: Path | None = None,
    units: Path | None = None,
    runner: Runner = subprocess.run,
) -> Result:
    """Write (or replace) the two units and start the timer."""
    units = units or unit_dir()
    _write(units / SERVICE, render_service(project_root, uv or default_uv()))
    _write(units / TIMER, render_timer())
    for args in (["daemon-reload"], ["enable", "--now", TIMER]):
        result = _systemctl(args, runner)
        if result.returncode != 0:
            return result
    return describe_weekly_timer(runner=runner)


def remove_weekly_timer(
    *,
    units: Path | None = None,
    runner: Runner = subprocess.run,
) -> Result:
    units = units or unit_dir()
    stopped = _systemctl(["disable", "--now", TIMER], runner)
    for name in (TIMER, SERVICE):
        (units / name).unlink(missing_ok=True)
    reloaded = _systemctl(["daemon-reload"], runner)
    if not (units / TIMER).exists() and reloaded.returncode == 0:
        # `disable` fails when the timer was never installed; gone is gone.
        return Result(0, "", "")
    return stopped if stopped.returncode != 0 else reloaded


def describe_weekly_timer(*, runner: Runner = subprocess.run) -> Result:
    shown = _systemctl(
        [
            "show",
            TIMER,
            "--property=LoadState,ActiveState,NextElapseUSecRealtime,LastTriggerUSec",
        ],
        runner,
    )
    if shown.returncode != 0:
        return shown
    values = dict(
        line.split("=", 1) for line in shown.stdout.splitlines() if "=" in line
    )
    if values.get("LoadState") == "not-found":
        return Result(1, "", f"{TIMER} is not installed (run `weaver schedule install`)")
    service = _systemctl(["show", SERVICE, "--property=Result,ExecMainStatus"], runner)
    last = dict(
        line.split("=", 1) for line in service.stdout.splitlines() if "=" in line
    )
    lines = [
        f"state: {values.get('ActiveState') or 'unknown'}",
        f"next run: {values.get('NextElapseUSecRealtime') or 'none'}",
        f"last run: {values.get('LastTriggerUSec') or 'never'}",
        f"last result: {last.get('Result') or 'unknown'} (exit {last.get('ExecMainStatus') or '-'})",
    ]
    return Result(0, "\n".join(lines), "")


def desktop_notify(title: str, body: str, *, runner: Runner = subprocess.run) -> None:
    """A desktop notification through notify-send (libnotify).

    Never raises: an alert must not break a run. The line is also printed,
    so the systemd journal keeps it when no desktop is listening.
    """
    print(f"ALERT {title}: {body}", flush=True)
    sender = shutil.which("notify-send")
    if sender is None:
        logging.getLogger(__name__).warning("notification skipped: notify-send not found")
        return
    try:
        runner(
            [sender, f"--app-name={APP_NAME}", "--urgency=normal", "--", title, body],
            capture_output=True,
            text=True,
            timeout=15,
        )
    except Exception as exc:  # noqa: BLE001 - an alert must never break the run itself
        logging.getLogger(__name__).warning("notification failed: %s", type(exc).__name__)
