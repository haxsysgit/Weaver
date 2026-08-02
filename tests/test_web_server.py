"""Plan 011 Gate 2: `weaver web` command tests.

The web command must fail fast on missing live credentials: exit 2 before
any state dir is created and before any socket binds. With --fake it must
start the server on 127.0.0.1 only.
"""

import pytest

from weaver import cli


def test_web_live_missing_credential_exits_2_without_state(tmp_path, monkeypatch, capsys) -> None:
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    monkeypatch.delenv("WEAVER_STATE_DIR", raising=False)

    class ServerMustNotStart:
        def __init__(self, *args, **kwargs):
            raise AssertionError("uvicorn must not start without credentials")

    monkeypatch.setattr(cli, "serve_web", ServerMustNotStart)

    exit_code = cli.run(["web"])  # live is the default
    assert exit_code == 2
    assert not (tmp_path / ".weaver" / "state").exists()
    assert not (tmp_path / ".weaver" / "runs").exists()
    out = capsys.readouterr().out
    assert "DEEPSEEK_KEY" in out


def test_web_defaults_to_live(tmp_path, monkeypatch) -> None:
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    monkeypatch.delenv("WEAVER_STATE_DIR", raising=False)
    exit_code = cli.run(["web"])
    assert exit_code == 2  # live is the default; no key means exit 2


def test_web_fake_uses_127_0_0_1(monkeypatch, tmp_path) -> None:
    monkeypatch.chdir(tmp_path)
    captured: dict = {}

    async def fake_serve_web(runtime, *, host, port):
        captured["host"] = host
        captured["port"] = port
        captured["live"] = runtime.mode_label
        return 0

    monkeypatch.setattr(cli, "serve_web", fake_serve_web)
    exit_code = cli.run(["web", "--fake", "--port", "8123"])
    assert exit_code == 0
    assert captured["host"] == "127.0.0.1"
    assert captured["port"] == 8123
    assert captured["live"] == "fake"


def test_web_invalid_port_rejected(tmp_path, monkeypatch) -> None:
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    with pytest.raises(SystemExit):
        cli.run(["web", "--fake", "--port", "99999"])
