"""Windows pieces of the weekly refresh (Plan 031): the Task Scheduler task
and the failure notification. Both run through Windows PowerShell 5.1.

The task runs `pythonw -m weaver refresh --scheduled` from the repo every
Saturday at 10:00 local time (the author posts Monday to Friday). It runs
as the signed-in user, so it needs no admin rights, and it starts on the
next boot if the PC was off at 10:00. The schedule moves to the server in
Plan 039.
"""

from __future__ import annotations

import base64
import logging
import subprocess
import sys
from collections.abc import Callable
from pathlib import Path
from xml.sax.saxutils import escape

TASK_NAME = "Weaver library refresh"
WEEKDAY = "Saturday"
AT = "10:00"
# PowerShell's own app id: Windows shows toasts only for registered apps.
TOAST_APP_ID = r"{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\WindowsPowerShell\v1.0\powershell.exe"

Runner = Callable[..., object]


def _quote(value: str) -> str:
    """A PowerShell single-quoted string (no expansion)."""
    return "'" + value.replace("'", "''") + "'"


def _run(script: str, runner: Runner = subprocess.run):
    encoded = base64.b64encode(script.encode("utf-16-le")).decode("ascii")
    return runner(
        ["powershell.exe", "-NoProfile", "-NonInteractive", "-EncodedCommand", encoded],
        capture_output=True,
        text=True,
        timeout=60,
        creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0),
    )


def default_pythonw() -> Path:
    """pythonw.exe beside the interpreter running Weaver (no console window)."""
    candidate = Path(sys.executable).with_name("pythonw.exe")
    return candidate if candidate.exists() else Path(sys.executable)


def install_weekly_task(
    project_root: Path,
    *,
    pythonw: Path | None = None,
    runner: Runner = subprocess.run,
):
    pythonw = pythonw or default_pythonw()
    script = "\n".join(
        [
            "$ErrorActionPreference = 'Stop'",
            (
                f"$action = New-ScheduledTaskAction -Execute {_quote(str(pythonw))} "
                "-Argument '-m weaver refresh --scheduled' "
                f"-WorkingDirectory {_quote(str(project_root))}"
            ),
            f"$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek {WEEKDAY} -At {_quote(AT)}",
            (
                "$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable "
                "-ExecutionTimeLimit (New-TimeSpan -Minutes 30) "
                "-AllowStartIfOnBatteries -DontStopIfGoingOnBatteries"
            ),
            (
                f"Register-ScheduledTask -TaskName {_quote(TASK_NAME)} -Action $action "
                "-Trigger $trigger -Settings $settings "
                f"-Description {_quote('Plan 031: fetch new Shadow Slave chapters weekly (appends only).')} "
                "-Force | Out-Null"
            ),
            (
                f"Get-ScheduledTask -TaskName {_quote(TASK_NAME)} | Get-ScheduledTaskInfo | "
                "Select-Object NextRunTime | Format-List"
            ),
        ]
    )
    return _run(script, runner)


def remove_weekly_task(*, runner: Runner = subprocess.run):
    return _run(
        f"Unregister-ScheduledTask -TaskName {_quote(TASK_NAME)} -Confirm:$false",
        runner,
    )


def describe_weekly_task(*, runner: Runner = subprocess.run):
    return _run(
        f"$t = Get-ScheduledTask -TaskName {_quote(TASK_NAME)} -ErrorAction Stop; "
        "$i = $t | Get-ScheduledTaskInfo; "
        "'state: ' + $t.State; 'next run: ' + $i.NextRunTime; "
        "'last run: ' + $i.LastRunTime; 'last result: ' + $i.LastTaskResult",
        runner,
    )


def windows_toast(title: str, body: str, *, runner: Runner = subprocess.run) -> None:
    """Show a Windows notification. Never raises: an alert must not break a run."""
    xml = (
        "<toast><visual><binding template='ToastGeneric'>"
        f"<text>{escape(title)}</text><text>{escape(body)}</text>"
        "</binding></visual></toast>"
    )
    script = "\n".join(
        [
            (
                "[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, "
                "ContentType = WindowsRuntime] | Out-Null"
            ),
            (
                "[Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom.XmlDocument, "
                "ContentType = WindowsRuntime] | Out-Null"
            ),
            "$xml = New-Object Windows.Data.Xml.Dom.XmlDocument",
            f"$xml.LoadXml({_quote(xml)})",
            "$toast = [Windows.UI.Notifications.ToastNotification]::new($xml)",
            (
                "[Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier("
                f"{_quote(TOAST_APP_ID)}).Show($toast)"
            ),
        ]
    )
    try:
        _run(script, runner)
    except Exception as exc:  # noqa: BLE001 - an alert must never break the run itself
        # The status record still carries the failure for Settings.
        logging.getLogger(__name__).warning("notification failed: %s", type(exc).__name__)
