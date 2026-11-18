"""The Linux weekly refresh: a systemd user timer and a desktop notification,
checked without touching the real systemd (each systemctl call is captured)
except for an optional `systemd-analyze verify` of the rendered units."""

from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path

import pytest

from weaver import cli
from weaver.corpus import schedule_linux
from weaver.corpus.schedule_linux import (
    SERVICE,
    TIMER,
    describe_weekly_timer,
    desktop_notify,
    install_weekly_timer,
    remove_weekly_timer,
    render_service,
    render_timer,
)


class Systemctl:
    """Stands in for subprocess.run with its real keyword arguments."""

    def __init__(self, replies: dict[str, tuple[int, str, str]] | None = None) -> None:
        self.calls: list[list[str]] = []
        self.replies = replies or {}

    def __call__(self, args, *, capture_output=False, text=False, timeout=None):
        self.calls.append(list(args))
        verb = args[2] if args[:2] == ["systemctl", "--user"] else args[0]
        code, out, err = self.replies.get(verb, (0, "", ""))
        return subprocess.CompletedProcess(args, code, out, err)


SHOW_INSTALLED = (
    0,
    (
        "LoadState=loaded\nActiveState=active\n"
        "NextElapseUSecRealtime=Sat 2026-11-21 10:00:00 GMT\nLastTriggerUSec=n/a\n"
    ),
    "",
)


def test_the_timer_runs_weekly_on_saturday_and_catches_up() -> None:
    timer = render_timer()
    assert "OnCalendar=Sat *-*-* 10:00:00" in timer
    assert "Persistent=true" in timer  # a missed Saturday runs on the next boot or login
    assert f"Unit={SERVICE}" in timer
    assert "WantedBy=timers.target" in timer


def test_the_service_runs_the_scheduled_refresh_in_the_repo(tmp_path) -> None:
    uv = Path("/home/reader/.local/bin/uv")
    service = render_service(tmp_path, uv)
    assert "Type=oneshot" in service
    assert f"WorkingDirectory={tmp_path}" in service
    assert f'Environment="WEAVER_PROJECT_ROOT={tmp_path}"' in service
    # Absolute uv (a user unit has no login PATH); --frozen never rewrites uv.lock.
    assert f'ExecStart="{uv}" run --frozen weaver refresh --scheduled' in service
    assert "TimeoutStartSec=30min" in service


def test_install_writes_both_units_then_reloads_and_starts_the_timer(tmp_path) -> None:
    systemctl = Systemctl({"show": SHOW_INSTALLED})
    units = tmp_path / "units"

    result = install_weekly_timer(tmp_path, uv=Path("/usr/bin/uv"), units=units, runner=systemctl)

    assert (units / SERVICE).read_text(encoding="utf-8") == render_service(
        tmp_path, Path("/usr/bin/uv")
    )
    assert (units / TIMER).read_text(encoding="utf-8") == render_timer()
    assert systemctl.calls[0] == ["systemctl", "--user", "daemon-reload"]
    assert systemctl.calls[1] == ["systemctl", "--user", "enable", "--now", TIMER]
    assert result.returncode == 0
    assert "next run: Sat 2026-11-21 10:00:00 GMT" in result.stdout


def test_reinstalling_replaces_the_units_instead_of_adding_more(tmp_path) -> None:
    units = tmp_path / "units"
    for root in (tmp_path / "old", tmp_path / "new"):
        install_weekly_timer(root, uv=Path("/usr/bin/uv"), units=units, runner=Systemctl())
    assert sorted(p.name for p in units.iterdir()) == [SERVICE, TIMER]
    assert str(tmp_path / "new") in (units / SERVICE).read_text(encoding="utf-8")


def test_install_stops_at_the_first_systemctl_failure(tmp_path) -> None:
    systemctl = Systemctl({"daemon-reload": (1, "", "Failed to connect to bus\n")})
    result = install_weekly_timer(tmp_path, uv=Path("/usr/bin/uv"), units=tmp_path, runner=systemctl)
    assert result.returncode == 1
    assert "Failed to connect to bus" in result.stderr
    assert len(systemctl.calls) == 1  # never tried to enable


def test_install_reports_a_missing_systemctl_instead_of_raising(tmp_path) -> None:
    def missing(*args, **kwargs):
        raise FileNotFoundError("systemctl")

    result = install_weekly_timer(tmp_path, uv=Path("/usr/bin/uv"), units=tmp_path, runner=missing)
    assert result.returncode == 1
    assert "systemctl could not run" in result.stderr


def test_removal_disables_the_timer_and_deletes_both_units(tmp_path) -> None:
    units = tmp_path / "units"
    install_weekly_timer(tmp_path, uv=Path("/usr/bin/uv"), units=units, runner=Systemctl())
    systemctl = Systemctl()

    result = remove_weekly_timer(units=units, runner=systemctl)

    assert systemctl.calls[0] == ["systemctl", "--user", "disable", "--now", TIMER]
    assert systemctl.calls[-1] == ["systemctl", "--user", "daemon-reload"]
    assert not (units / SERVICE).exists() and not (units / TIMER).exists()
    assert result.returncode == 0


def test_removing_a_timer_that_was_never_installed_is_not_an_error(tmp_path) -> None:
    systemctl = Systemctl({"disable": (1, "", "Unit file weaver-library-refresh.timer does not exist.")})
    assert remove_weekly_timer(units=tmp_path, runner=systemctl).returncode == 0


def test_status_says_when_the_timer_is_not_installed() -> None:
    systemctl = Systemctl({"show": (0, "LoadState=not-found\nActiveState=inactive\n", "")})
    result = describe_weekly_timer(runner=systemctl)
    assert result.returncode == 1
    assert "not installed" in result.stderr


def test_status_reads_the_timer_and_the_last_run() -> None:
    systemctl = Systemctl({"show": SHOW_INSTALLED})
    result = describe_weekly_timer(runner=systemctl)
    assert result.returncode == 0
    assert "state: active" in result.stdout
    assert "last run: n/a" in result.stdout


AWKWARD = 'O’Brien\'s "books" 100% $HOME'


def test_an_awkward_repo_path_cannot_break_out_of_the_unit(tmp_path) -> None:
    root = tmp_path / AWKWARD
    service = render_service(root, Path("/usr/bin/uv"))
    working = next(line for line in service.splitlines() if line.startswith("WorkingDirectory="))
    environment = next(line for line in service.splitlines() if line.startswith("Environment="))
    assert "100%%" in working  # systemd specifier escaped
    assert '\\"books\\"' in environment and "100%%" in environment
    assert "$HOME" in environment  # Environment= never expands $
    assert environment.count('"') - environment.count('\\"') == 2


@pytest.mark.skipif(shutil.which("systemd-analyze") is None, reason="needs systemd-analyze")
def test_systemd_accepts_the_rendered_units(tmp_path) -> None:
    root = tmp_path / AWKWARD
    root.mkdir()
    units = tmp_path / "units"
    units.mkdir()
    (units / SERVICE).write_text(render_service(root, Path(sys.executable)), encoding="utf-8")
    (units / TIMER).write_text(render_timer(), encoding="utf-8")

    checked = subprocess.run(
        ["systemd-analyze", "--user", "verify", str(units / TIMER), str(units / SERVICE)],
        capture_output=True,
        check=False,
        text=True,
        timeout=60,
    )
    assert checked.returncode == 0, checked.stderr
    shown = subprocess.run(
        ["systemd-analyze", "calendar", "Sat *-*-* 10:00:00"],
        capture_output=True,
        check=False,
        text=True,
        timeout=60,
    )
    assert "Sat" in shown.stdout and "10:00:00" in shown.stdout


def test_the_notification_passes_text_as_plain_arguments(monkeypatch, capsys) -> None:
    monkeypatch.setattr(schedule_linux.shutil, "which", lambda name: "/usr/bin/notify-send")
    calls = Systemctl()

    desktop_notify("Weaver's library needs you", "-- not a flag & <b>not markup</b>", runner=calls)

    args = calls.calls[0]
    assert args[0] == "/usr/bin/notify-send"
    assert args[args.index("--") + 1 :] == [
        "Weaver's library needs you",
        "-- not a flag & <b>not markup</b>",
    ]
    assert "ALERT Weaver's library needs you" in capsys.readouterr().out  # kept in the journal


def test_a_failing_notification_never_breaks_the_run(monkeypatch) -> None:
    monkeypatch.setattr(schedule_linux.shutil, "which", lambda name: "/usr/bin/notify-send")

    def broken(*args, **kwargs):
        raise subprocess.TimeoutExpired(args, 15)

    desktop_notify("title", "body", runner=broken)  # no exception


def test_without_notify_send_the_alert_is_only_printed(monkeypatch, capsys) -> None:
    monkeypatch.setattr(schedule_linux.shutil, "which", lambda name: None)
    calls = Systemctl()
    desktop_notify("title", "body", runner=calls)
    assert calls.calls == []
    assert "ALERT title: body" in capsys.readouterr().out


@pytest.mark.parametrize(
    ("platform", "expected"),
    [("linux", "desktop_notify"), ("win32", "windows_toast"), ("darwin", "<lambda>")],
)
def test_the_scheduled_run_picks_the_notifier_for_its_platform(monkeypatch, platform, expected) -> None:
    monkeypatch.setattr(cli.sys, "platform", platform)
    assert cli._notifier().__name__ == expected


def test_schedule_install_on_linux_drives_systemd(monkeypatch, tmp_path, capsys) -> None:
    monkeypatch.setattr(cli.sys, "platform", "linux")
    monkeypatch.setenv("WEAVER_PROJECT_ROOT", str(tmp_path))
    seen: list[Path] = []

    def install(root):
        seen.append(root)
        return schedule_linux.Result(0, "next run: Sat", "")

    monkeypatch.setattr(schedule_linux, "install_weekly_timer", install)

    assert cli.run(["schedule", "install"]) == 0
    assert seen == [tmp_path]
    assert "installed: weekly on Saturday at 10:00" in capsys.readouterr().out


def test_schedule_status_reports_a_systemctl_failure(monkeypatch, capsys) -> None:
    monkeypatch.setattr(cli.sys, "platform", "linux")
    monkeypatch.setattr(
        schedule_linux,
        "describe_weekly_timer",
        lambda: schedule_linux.Result(1, "", "weaver-library-refresh.timer is not installed\n"),
    )
    assert cli.run(["schedule", "status"]) == 1
    assert "ERROR weaver-library-refresh.timer is not installed" in capsys.readouterr().out


def test_schedule_refuses_a_platform_it_does_not_know(monkeypatch, capsys) -> None:
    monkeypatch.setattr(cli.sys, "platform", "darwin")
    assert cli.run(["schedule", "status"]) == 2
    assert "darwin" in capsys.readouterr().out
