"""Plan 011 Gate 2: `weaver web` command tests.

The web command must fail fast on missing live credentials: exit 2 before
any state dir is created and before any socket binds. With --fake it must
start the server on 127.0.0.1 only.
"""

import asyncio
import socket

from httpx import ASGITransport, AsyncClient
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
        captured["delta_delay"] = runtime.fake_delta_delay_seconds
        return 0

    monkeypatch.setattr(cli, "serve_web", fake_serve_web)
    exit_code = cli.run(["web", "--fake", "--port", "8123"])
    assert exit_code == 0
    assert captured["host"] == "127.0.0.1"
    assert captured["port"] == 8123
    assert captured["live"] == "fake"
    assert captured["delta_delay"] > 0


def test_web_fake_never_constructs_a_live_provider_or_opens_network(
    monkeypatch,
    tmp_path,
) -> None:
    monkeypatch.chdir(tmp_path)

    def reject_live_provider(*_args, **_kwargs):
        raise AssertionError("fake web mode must not construct DeepSeekProvider")

    def reject_outbound_connect(_socket, _address):
        raise AssertionError("fake web mode must not open an outbound connection")

    async def fake_serve_web(_runtime, *, host, port):
        assert host == "127.0.0.1"
        assert port == 8124
        return 0

    monkeypatch.setattr(
        "weaver.chat_runtime.DeepSeekProvider",
        reject_live_provider,
    )
    monkeypatch.setattr(socket.socket, "connect", reject_outbound_connect)
    monkeypatch.setattr(cli, "serve_web", fake_serve_web)

    assert cli.run(["web", "--fake", "--port", "8124"]) == 0


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

            started = await client.post(
                f"/api/conversations/{conversation_id}/turns",
                json={"message": "ephemeral server proof"},
            )
            assert started.status_code == 202

            async with client.stream(
                "GET",
                f"/api/conversations/{conversation_id}/stream",
            ) as streamed:
                assert streamed.status_code == 200
                stream_body = (await streamed.aread()).decode()

            assert '"name": "semantic_search"' in stream_body
            assert '"name": "read_chapters"' in stream_body
            assert "event: delta" in stream_body
            assert "event: completed" in stream_body

            transcript = await client.get(
                f"/api/conversations/{conversation_id}/messages"
            )
            assert transcript.status_code == 200
            assert transcript.json()[0]["content"] == "ephemeral server proof"
            assert "Development fixture" in transcript.json()[1]["content"]
    finally:
        server.should_exit = True
        await asyncio.wait_for(server_task, timeout=10)
        server_socket.close()
        await runtime.close()

    assert conversation_id is not None
    reopened = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        reopened_app = create_app(reopened)
        async with AsyncClient(
            transport=ASGITransport(app=reopened_app),
            base_url="http://127.0.0.1",
        ) as client:
            transcript = await client.get(
                f"/api/conversations/{conversation_id}/messages"
            )
        assert [message["role"] for message in transcript.json()] == [
            "owner",
            "weaver",
        ]
        assert transcript.json()[0]["content"] == "ephemeral server proof"
    finally:
        await reopened.close()


@pytest.mark.parametrize(
    ("prompt", "failure_code"),
    [
        ("/fake error model", "simulated_model"),
        ("/fake incomplete", "incomplete"),
    ],
)
async def test_fake_failure_recovers_when_the_same_turn_is_retried(
    tmp_path,
    prompt: str,
    failure_code: str,
) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)

    transport = ASGITransport(app=app)
    headers = {"Origin": "http://127.0.0.1"}
    try:
        async with AsyncClient(
            transport=transport,
            base_url="http://127.0.0.1",
            headers=headers,
        ) as client:
            created = await client.post("/api/conversations")
            conversation_id = created.json()["conversation_id"]

            started = await client.post(
                f"/api/conversations/{conversation_id}/turns",
                json={"message": prompt},
            )
            assert started.status_code == 202
            first_stream = await client.get(
                f"/api/conversations/{conversation_id}/stream"
            )
            assert "event: failed" in first_stream.text
            assert f'"code": "{failure_code}"' in first_stream.text

            retried = await client.post(
                f"/api/conversations/{conversation_id}/retry"
            )
            assert retried.status_code == 202
            retry_stream = await client.get(
                f"/api/conversations/{conversation_id}/stream"
            )
            assert "event: completed" in retry_stream.text
            assert "event: failed" not in retry_stream.text
            assert "Development fixture" in retry_stream.text
    finally:
        await runtime.close()


async def test_fake_stream_can_be_stopped_after_the_first_visible_delta(
    tmp_path,
) -> None:
    runtime = await open_chat_runtime(
        tmp_path,
        live=False,
        surface="web",
        fake_delay_seconds=0.05,
    )
    app = create_app(runtime)
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server_socket.bind(("127.0.0.1", 0))
    server_socket.listen()
    port = server_socket.getsockname()[1]
    server = uvicorn.Server(
        uvicorn.Config(app, host="127.0.0.1", port=port, log_level="critical")
    )
    server_task = asyncio.create_task(server.serve(sockets=[server_socket]))

    try:
        for _ in range(100):
            if server.started:
                break
            await asyncio.sleep(0.01)
        assert server.started

        base_url = f"http://127.0.0.1:{port}"
        headers = {"Origin": base_url}
        async with (
            AsyncClient(base_url=base_url, headers=headers) as stream_client,
            AsyncClient(base_url=base_url, headers=headers) as control_client,
        ):
            created = await control_client.post("/api/conversations")
            conversation_id = created.json()["conversation_id"]
            started = await control_client.post(
                f"/api/conversations/{conversation_id}/turns",
                json={"message": "/fake long"},
            )
            assert started.status_code == 202

            events: list[str] = []
            cancelled = False
            async with stream_client.stream(
                "GET",
                f"/api/conversations/{conversation_id}/stream",
            ) as response:
                async for line in response.aiter_lines():
                    if not line.startswith("event:"):
                        continue
                    event = line.split(":", 1)[1].strip()
                    events.append(event)
                    if event == "delta" and not cancelled:
                        cancelled = True
                        stopped = await control_client.post(
                            f"/api/conversations/{conversation_id}/cancel"
                        )
                        assert stopped.status_code == 202

            assert cancelled
            assert 1 <= events.count("delta") < 10
            assert events[-1] == "interrupted"
            assert "completed" not in events

            transcript = await control_client.get(
                f"/api/conversations/{conversation_id}/messages"
            )
            assert "Thread 8" not in transcript.text
    finally:
        server.should_exit = True
        await asyncio.wait_for(server_task, timeout=10)
        server_socket.close()
        await runtime.close()
