"""Startup config: .env and .weaver/config.toml loading (owner-directed).

Contract: real environment > .env > .weaver/config.toml. Loaded values are
injected into os.environ (DEEPSEEK_KEY, WEAVER_CHAT_MODEL) by
cli.run() before any subcommand dispatch.
"""

import os

import pytest

from weaver import config


def _write(tmp_path, rel, text):
    path = tmp_path / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text)
    return path


@pytest.fixture(autouse=True)
def _clean_env(monkeypatch):
    """load_startup_config writes os.environ directly; scrub before AND after.

    os.environ.pop (not monkeypatch.delenv) in teardown: delenv records a
    restore for the polluted value, which undo would re-apply.
    """
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    monkeypatch.delenv("WEAVER_CHAT_MODEL", raising=False)
    yield
    os.environ.pop("DEEPSEEK_KEY", None)
    os.environ.pop("WEAVER_CHAT_MODEL", None)


def test_dotenv_sets_key(tmp_path, monkeypatch) -> None:
    _write(tmp_path, ".env", "# comment\nDEEPSEEK_KEY=sk-test\n")
    monkeypatch.chdir(tmp_path)

    config.load_startup_config()

    assert os.environ["DEEPSEEK_KEY"] == "sk-test"


def test_dotenv_does_not_override_real_env(tmp_path, monkeypatch) -> None:
    monkeypatch.setenv("DEEPSEEK_KEY", "sk-real")
    _write(tmp_path, ".env", 'DEEPSEEK_KEY="sk-dotenv"\n')
    monkeypatch.chdir(tmp_path)

    config.load_startup_config()

    assert os.environ["DEEPSEEK_KEY"] == "sk-real"


def test_config_toml_key_and_model(tmp_path, monkeypatch) -> None:
    _write(
        tmp_path,
        ".weaver/config.toml",
        '[api]\nkey = "sk-cfg"\n\n[chat]\nmodel = "pro"\n',
    )
    monkeypatch.chdir(tmp_path)

    table = config.load_startup_config()

    assert os.environ["DEEPSEEK_KEY"] == "sk-cfg"
    assert os.environ["WEAVER_CHAT_MODEL"] == "deepseek-v4-pro"
    assert table["api"]["key"] == "sk-cfg"


def test_env_wins_over_config_file(tmp_path, monkeypatch) -> None:
    monkeypatch.setenv("DEEPSEEK_KEY", "sk-real")
    _write(tmp_path, ".weaver/config.toml", '[api]\nkey = "sk-cfg"\n')
    monkeypatch.chdir(tmp_path)

    config.load_startup_config()

    assert os.environ["DEEPSEEK_KEY"] == "sk-real"


def test_invalid_chat_model_rejected(tmp_path, monkeypatch) -> None:
    _write(tmp_path, ".weaver/config.toml", '[chat]\nmodel = "bogus"\n')
    monkeypatch.chdir(tmp_path)

    with pytest.raises(ValueError, match="bogus"):
        config.load_startup_config()


def test_invalid_toml_rejected(tmp_path, monkeypatch) -> None:
    _write(tmp_path, ".weaver/config.toml", "[api\nkey = 'unclosed\n")
    monkeypatch.chdir(tmp_path)

    with pytest.raises(ValueError, match="invalid"):
        config.load_startup_config()


def test_missing_files_are_a_noop(tmp_path, monkeypatch) -> None:
    monkeypatch.chdir(tmp_path)

    table = config.load_startup_config()

    assert table == {}
    assert "DEEPSEEK_KEY" not in os.environ


def test_cli_run_loads_startup_config(tmp_path, monkeypatch, capsys) -> None:
    """cli.run() feeds os.environ from the cwd before dispatch."""
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    monkeypatch.setenv("WEAVER_STATE_DIR", str(tmp_path / "state"))
    calls = []

    from weaver import cli

    monkeypatch.setattr(
        cli,
        "load_startup_config",
        lambda: calls.append("loaded") or {},
    )

    exit_code = cli.run(["web"])

    assert calls == ["loaded"]
    assert exit_code == 2
    assert not (tmp_path / "state").exists()


async def test_web_runtime_uses_configured_model(tmp_path, monkeypatch) -> None:
    """[chat] model still drives the web runtime after the TUI is removed."""
    monkeypatch.setenv("DEEPSEEK_KEY", "sk-test")
    monkeypatch.setenv("WEAVER_CHAT_MODEL", "deepseek-v4-pro")

    from weaver.chat_runtime import open_chat_runtime

    runtime = await open_chat_runtime(tmp_path / "state", live=True, surface="web")
    try:
        assert runtime.mode_label == "live deepseek-v4-pro"
        assert runtime.session._runner._model.model_id == "deepseek-v4-pro"
    finally:
        await runtime.close()


async def test_fake_web_works_with_configured_pro_model(tmp_path, monkeypatch) -> None:
    monkeypatch.setenv("WEAVER_CHAT_MODEL", "deepseek-v4-pro")
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)

    from weaver.chat_runtime import open_chat_runtime

    runtime = await open_chat_runtime(tmp_path / "state", live=False, surface="web")
    try:
        conversation_id = await runtime.session.start_conversation("")
        result = await runtime.session.send(conversation_id, "hi")
        assert result.exit_reason == "completed"
    finally:
        await runtime.close()
