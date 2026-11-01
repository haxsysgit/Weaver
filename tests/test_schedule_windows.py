"""Plan 031: the Windows task and notification, checked without touching
the real Task Scheduler (the PowerShell each one would run is captured)."""

from __future__ import annotations

import base64
from pathlib import Path

from weaver.corpus.schedule_windows import (
    TASK_NAME,
    install_weekly_task,
    remove_weekly_task,
    windows_toast,
)


class Runner:
    def __init__(self) -> None:
        self.scripts: list[str] = []

    def __call__(self, args, **kwargs):
        assert args[0] == "powershell.exe"
        encoded = args[args.index("-EncodedCommand") + 1]
        self.scripts.append(base64.b64decode(encoded).decode("utf-16-le"))

        class Done:
            returncode = 0
            stdout = ""
            stderr = ""

        return Done()


def test_the_task_runs_weekly_on_saturday_and_catches_up(tmp_path) -> None:
    runner = Runner()
    pythonw = Path(r"C:\repo\.venv\Scripts\pythonw.exe")

    install_weekly_task(tmp_path, pythonw=pythonw, runner=runner)

    script = runner.scripts[0]
    assert TASK_NAME in script
    assert "-Weekly -DaysOfWeek Saturday -At '10:00'" in script
    assert "-StartWhenAvailable" in script  # runs on the next start if the PC was off
    assert str(pythonw) in script
    assert "-m weaver refresh --scheduled" in script
    assert str(tmp_path) in script
    assert "-Force" in script  # re-installing replaces, never duplicates


def test_removal_names_the_same_task() -> None:
    runner = Runner()
    remove_weekly_task(runner=runner)
    assert f"Unregister-ScheduledTask -TaskName '{TASK_NAME}'" in runner.scripts[0]


def test_the_notification_escapes_its_text() -> None:
    runner = Runner()
    windows_toast("Weaver <library>", "Chapter 3233 & 'more'", runner=runner)
    script = runner.scripts[0]
    assert "Weaver &lt;library&gt;" in script
    assert "Chapter 3233 &amp; ''more''" in script
    assert "ToastNotificationManager" in script


def test_a_curly_apostrophe_in_the_path_cannot_end_the_string(tmp_path) -> None:
    runner = Runner()
    root = tmp_path / "O’Brien's books"

    install_weekly_task(root, pythonw=Path("pythonw.exe"), runner=runner)

    script = runner.scripts[0]
    assert "O’’Brien''s books" in script
