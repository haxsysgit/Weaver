"""Plan 011 Gate 2: `weaver web` command tests.

The web command must fail fast on missing live credentials: exit 2 before
any state dir is created and before any socket binds. With --fake it must
start the server on 127.0.0.1 only.
"""

import asyncio
import socket

from httpx import AsyncClient
import pytest
import uvicorn

from weaver import cli
from weaver.chat_runtime import open_chat_runtime
from weaver.web.app import create_app


def test_terminal_chat_command_is_removed() -> None:
    with pytest.raises(SystemExit) as error:
        cli.run(["chat"])

    assert error.value.code == 2


def test_web_live_missing_credential_exits_2_without_state(
    tmp_path, monkeypatch, capsys
) -> None:
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


async def test_ephemeral_uvicorn_create_stream_and_transcript_flow(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)

    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server_socket.bind(("127.0.0.1", 0))
    server_socket.listen()
    port = server_socket.getsockname()[1]

    config = uvicorn.Config(
        app,
        host="127.0.0.1",
        port=port,
        log_level="critical",
    )
    server = uvicorn.Server(config)
    server_task = asyncio.create_task(server.serve(sockets=[server_socket]))
    conversation_id: str | None = None

    try:
        for _ in range(100):
            if server.started:
                break
            await asyncio.sleep(0.01)
        assert server.started

        base_url = f"http://127.0.0.1:{port}"
        headers = {"Origin": base_url}
        async with AsyncClient(base_url=base_url, headers=headers) as client:
            created = await client.post("/api/conversations")
            assert created.status_code == 201
            conversation_id = created.json()["conversation_id"]

            streamed = await client.post(
                f"/api/conversations/{conversation_id}/turns",
                json={"message": "ephemeral server proof"},
            )
            assert streamed.status_code == 200
            assert "event: delta" in streamed.text
            assert "event: completed" in streamed.text

            transcript = await client.get(
                f"/api/conversations/{conversation_id}/messages"
            )
            assert transcript.status_code == 200
            assert transcript.json()[0]["content"] == "ephemeral server proof"
    finally:
        server.should_exit = True
        await asyncio.wait_for(server_task, timeout=10)
        server_socket.close()
        await runtime.close()

    assert conversation_id is not None
    reopened = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        transcript = await reopened.session.load_transcript(conversation_id)
        assert [message["role"] for message in transcript] == ["owner", "weaver"]
        assert transcript[0]["content"] == "ephemeral server proof"
    finally:
        await reopened.close()
