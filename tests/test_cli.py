from pathlib import Path

from weaver import cli


def test_fake_cli_succeeds_without_network_or_credential(
    tmp_path,
    monkeypatch,
    capsys,
) -> None:
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    monkeypatch.setenv("WEAVER_STATE_DIR", str(tmp_path / "private-runs"))

    class NetworkMustNotBeConstructed:
        def __init__(self, *args, **kwargs):
            raise AssertionError("fake mode attempted to construct live client")

    monkeypatch.setattr(cli, "DeepSeekClient", NetworkMustNotBeConstructed)

    exit_code = cli.run(["experiment", "model-smoke", "--fake"])

    assert exit_code == 0
    assert "PASSED model-smoke" in capsys.readouterr().out
    run_dirs = list((tmp_path / "private-runs").iterdir())
    assert len(run_dirs) == 1


def test_live_cli_rejects_missing_credential_without_receipt(
    tmp_path,
    monkeypatch,
    capsys,
) -> None:
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    state_path = tmp_path / "private-runs"
    monkeypatch.setenv("WEAVER_STATE_DIR", str(state_path))

    exit_code = cli.run(["experiment", "model-smoke", "--live"])

    assert exit_code == 2
    assert "requires DEEPSEEK_KEY" in capsys.readouterr().out
    assert not state_path.exists()


def test_doctor_has_no_network_requirement(
    tmp_path,
    monkeypatch,
    capsys,
) -> None:
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    monkeypatch.setenv("WEAVER_STATE_DIR", str(tmp_path / "private-runs"))

    exit_code = cli.run(["doctor"])

    output = capsys.readouterr().out
    assert exit_code == 0
    assert "PASS network: doctor made no network call" in output
    assert "WARN live_credential" in output
