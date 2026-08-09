import json
import os
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

    monkeypatch.setattr(cli, "DeepSeekProvider", NetworkMustNotBeConstructed)

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

    class ClientMustNotBeConstructed:
        def __init__(self, *args, **kwargs):
            raise AssertionError("missing key constructed a live client")

    monkeypatch.setattr(cli, "DeepSeekProvider", ClientMustNotBeConstructed)

    exit_code = cli.run(["experiment", "model-smoke", "--live"])

    assert exit_code == 2
    assert "requires DEEPSEEK_KEY" in capsys.readouterr().out
    assert not state_path.exists()


def test_provider_contract_fake_cli_runs_two_model_calls(
    tmp_path,
    monkeypatch,
    capsys,
) -> None:
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    state_path = tmp_path / "private-runs"
    monkeypatch.setenv("WEAVER_STATE_DIR", str(state_path))

    class NetworkMustNotBeConstructed:
        def __init__(self, *args, **kwargs):
            raise AssertionError("fake mode attempted to construct live client")

    monkeypatch.setattr(cli, "DeepSeekProvider", NetworkMustNotBeConstructed)

    exit_code = cli.run(["experiment", "provider-tool-contract", "--fake"])

    assert exit_code == 0
    assert "PASSED provider-tool-contract" in capsys.readouterr().out
    run_dirs = list(state_path.iterdir())
    assert len(run_dirs) == 1
    response_path = run_dirs[0] / "response.json"
    response_text = response_path.read_text()
    assert "deepseek-v4-flash" in response_text
    # The contract has two model calls. The provider owns any transport retries.
    manifest = json.loads((run_dirs[0] / "manifest.json").read_text())
    assert manifest["settings"]["maximum_model_calls"] == 2
    assert manifest["settings"]["retry_policy"] == "provider-managed"


def test_provider_contract_live_cli_checks_key_before_client_or_receipt(
    tmp_path,
    monkeypatch,
    capsys,
) -> None:
    """No key anywhere: exit 2 before any client, receipt, or state dir.

    .env loading is now honored (owner-directed 2026-07-31), so the test
    runs in a clean cwd with no .env; key-source precedence is covered in
    tests/test_config.py.
    """
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    state_path = tmp_path / "private-runs"
    monkeypatch.setenv("WEAVER_STATE_DIR", str(state_path))

    class ClientMustNotBeConstructed:
        def __init__(self, *args, **kwargs):
            raise AssertionError("missing key constructed a live client")

    monkeypatch.setattr(cli, "DeepSeekProvider", ClientMustNotBeConstructed)

    exit_code = cli.run(["experiment", "provider-tool-contract", "--live"])

    assert exit_code == 2
    assert "requires DEEPSEEK_KEY" in capsys.readouterr().out
    assert not state_path.exists()


def test_doctor_has_no_network_requirement(
    tmp_path,
    monkeypatch,
    capsys,
) -> None:
    import socket

    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("DEEPSEEK_KEY", raising=False)
    monkeypatch.setenv("WEAVER_STATE_DIR", str(tmp_path / "private-runs"))

    # Falsifiable: any real socket connection attempt fails the test.
    def no_network(*args, **kwargs):
        raise AssertionError("doctor attempted a network call")

    monkeypatch.setattr(socket.socket, "connect", no_network)

    exit_code = cli.run(["doctor"])

    output = capsys.readouterr().out
    assert exit_code == 0
    assert "PASS network: doctor made no network call" in output
    assert "WARN live_credential" in output


def test_corpus_fetch_cli_defaults_to_preview(monkeypatch, capsys) -> None:
    captured = {}

    async def fake_fetch(
        novel_id,
        start_chapter,
        end_chapter=None,
        preview=True,
    ):
        captured.update(
            novel_id=novel_id,
            start_chapter=start_chapter,
            end_chapter=end_chapter,
            preview=preview,
        )
        return {
            "operation": "fetch_novel_chapters",
            "actions": [{"status": "previewed"}],
        }

    monkeypatch.setattr(cli, "fetch_novel_chapters", fake_fetch)

    exit_code = cli.run(
        [
            "library",
            "fetch",
            "shadow-slave",
            "3047",
            "--end-chapter",
            "3128",
        ]
    )

    assert exit_code == 0
    assert captured == {
        "novel_id": "shadow-slave",
        "start_chapter": 3047,
        "end_chapter": 3128,
        "preview": True,
    }
    assert '"operation": "fetch_novel_chapters"' in capsys.readouterr().out


def test_refresh_defaults_to_preview(monkeypatch, capsys) -> None:
    captured = {}

    async def fake_update(novel_id, through_chapter=None, preview=True):
        captured.update(
            novel_id=novel_id,
            through_chapter=through_chapter,
            preview=preview,
        )
        return {
            "operation": "update_novel_corpus",
            "preview": True,
            "actions": [{"status": "previewed"}],
            "action_counts": {"previewed": 1},
        }

    monkeypatch.setattr(cli, "update_novel_corpus", fake_update)

    exit_code = cli.run(["refresh"])

    assert exit_code == 0
    assert captured == {
        "novel_id": "shadow-slave",
        "through_chapter": None,
        "preview": True,
    }


def test_refresh_apply_runs_the_live_loop(monkeypatch, tmp_path, capsys) -> None:
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("FIRECRAWL_API_KEY", raising=False)
    captured = {}

    async def fake_update(novel_id, through_chapter=None, preview=True):
        captured.update(preview=preview, through_chapter=through_chapter)
        return {
            "operation": "update_novel_corpus",
            "preview": False,
            "actions": [{"status": "fetched"}],
            "action_counts": {"saved": 1},
            "stopped_at_chapter": 3129,
            "stop_reason": "first_404",
            "receipt_path": "/tmp/receipt.json",
        }

    monkeypatch.setattr(cli, "update_novel_corpus", fake_update)

    exit_code = cli.run(["refresh", "--apply"])

    assert exit_code == 0
    assert captured == {"preview": False, "through_chapter": None}
    out = capsys.readouterr().out
    assert "saved 1" in out
    assert "stopped at chapter 3129" in out


def test_refresh_through_cap_is_passed(monkeypatch, tmp_path) -> None:
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("FIRECRAWL_API_KEY", raising=False)
    captured = {}

    async def fake_update(novel_id, through_chapter=None, preview=True):
        captured.update(through_chapter=through_chapter)
        return {
            "operation": "update_novel_corpus",
            "preview": False,
            "actions": [],
            "action_counts": {},
        }

    monkeypatch.setattr(cli, "update_novel_corpus", fake_update)

    exit_code = cli.run(["refresh", "--apply", "--through", "3148"])

    assert exit_code == 0
    assert captured == {"through_chapter": 3148}


def test_refresh_live_without_api_key_exits_2_before_any_call(
    monkeypatch,
    tmp_path,
    capsys,
) -> None:
    monkeypatch.chdir(tmp_path)
    monkeypatch.delenv("FIRECRAWL_API_KEY", raising=False)
    monkeypatch.setattr(Path, "home", staticmethod(lambda: tmp_path / "no-home"))
    called = []

    async def fake_update(novel_id, through_chapter=None, preview=True):
        called.append(1)
        return {"operation": "update_novel_corpus", "actions": [], "action_counts": {}}

    monkeypatch.setattr(cli, "update_novel_corpus", fake_update)

    exit_code = cli.run(["refresh", "--apply"])

    assert exit_code == 2
    assert called == []
    assert "FIRECRAWL_API_KEY" in capsys.readouterr().out


def test_refresh_uses_firecrawl_cli_credentials_fallback(
    monkeypatch,
    tmp_path,
) -> None:
    monkeypatch.chdir(tmp_path)
    home = tmp_path / "home"
    credentials = home / ".config" / "firecrawl-cli" / "credentials.json"
    credentials.parent.mkdir(parents=True)
    credentials.write_text('{"apiKey": "fc-test-key", "apiUrl": "https://api.firecrawl.dev"}')
    monkeypatch.setattr(Path, "home", staticmethod(lambda: home))
    monkeypatch.delenv("FIRECRAWL_API_KEY", raising=False)
    captured = {}

    async def fake_update(novel_id, through_chapter=None, preview=True):
        captured.update(preview=preview)
        return {
            "operation": "update_novel_corpus",
            "preview": False,
            "actions": [],
            "action_counts": {},
        }

    monkeypatch.setattr(cli, "update_novel_corpus", fake_update)

    exit_code = cli.run(["refresh", "--apply"])

    assert exit_code == 0
    assert captured == {"preview": False}
    assert os.environ.get("FIRECRAWL_API_KEY") == "fc-test-key"
    os.environ.pop("FIRECRAWL_API_KEY", None)
