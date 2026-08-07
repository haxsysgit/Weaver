"""Plan 011 Gate 2: web app API contract tests.

Routes:
- POST /api/conversations -> 201 {"conversation_id": "..."}
- GET /api/conversations -> 200 [{conversation_id, title}], newest first
- GET /api/conversations/{id}/messages -> filtered persisted transcript
- POST /api/conversations/{id}/turns -> SSE delta/completed/interrupted/failed
- POST /api/conversations/{id}/cancel -> 202 cancelling / 200 idle / 404

Private canaries must never appear in any response body.
"""

import asyncio
import json
import logging
import re

import pytest
from httpx import ASGITransport, AsyncClient

import weaver.web.app as web_app
from weaver.agent.turn import TurnExitReason, TurnResult
from weaver.chat_runtime import open_chat_runtime
from weaver.web.app import create_app

CANARIES = [
    "sk-test-secret",
    "novel/corpus/path",
    "weaver.sqlite3",
    "reasoning",
]

FRONTEND_DIST = web_app.FRONTEND_DIST

SAME_ORIGIN_HEADERS = {"Origin": "http://127.0.0.1"}


def test_production_frontend_assets_exist() -> None:
    expected_assets = (
        "index.html",
        "manifest.webmanifest",
        "weaver-mark.svg",
        "sw.js",
    )
    for relative_path in expected_assets:
        assert (FRONTEND_DIST / relative_path).is_file(), relative_path
    assert list((FRONTEND_DIST / "assets").glob("weaver-*.js"))
    assert list((FRONTEND_DIST / "assets").glob("weaver-*.css"))


def built_asset_paths() -> tuple[str, str]:
    html = (FRONTEND_DIST / "index.html").read_text(encoding="utf-8")
    script_path = re.search(r'src="(/assets/weaver-[^"]+\.js)"', html)
    style_path = re.search(r'href="(/assets/weaver-[^"]+\.css)"', html)
    assert script_path is not None
    assert style_path is not None
    return script_path.group(1), style_path.group(1)


@pytest.fixture
async def client(tmp_path):
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as c:
        yield c
    await runtime.close()


async def _no_canaries(text: str) -> None:
    for canary in CANARIES:
        assert canary not in text


async def test_create_conversation_returns_201(client) -> None:
    resp = await client.post("/api/conversations")
    assert resp.status_code == 201
    body = resp.json()
    assert "conversation_id" in body
    await _no_canaries(resp.text)


async def test_list_conversations_newest_first(client) -> None:
    first = (await client.post("/api/conversations")).json()["conversation_id"]
    second = (await client.post("/api/conversations")).json()["conversation_id"]
    resp = await client.get("/api/conversations")
    assert resp.status_code == 200
    items = resp.json()
    assert [i["conversation_id"] for i in items] == [second, first]
    assert all("title" in i for i in items)
    await _no_canaries(resp.text)


async def test_unknown_conversation_404(client) -> None:
    resp = await client.get("/api/conversations/does-not-exist/messages")
    assert resp.status_code == 404
    resp = await client.post(
        "/api/conversations/does-not-exist/turns",
        json={"message": "x"},
    )
    assert resp.status_code == 404
    resp = await client.post("/api/conversations/does-not-exist/cancel")
    assert resp.status_code == 404


async def test_empty_messages_rejected_422(client) -> None:
    conv = (await client.post("/api/conversations")).json()["conversation_id"]
    for bad in ("", "   ", "\n\t"):
        resp = await client.post(
            f"/api/conversations/{conv}/turns", json={"message": bad}
        )
        assert resp.status_code == 422, repr(bad)


async def test_overlong_messages_rejected_422(client) -> None:
    conv = (await client.post("/api/conversations")).json()["conversation_id"]
    resp = await client.post(
        f"/api/conversations/{conv}/turns",
        json={"message": "x" * 32001},
    )
    assert resp.status_code == 422


async def test_turn_streams_delta_before_completed(client) -> None:
    conv = (await client.post("/api/conversations")).json()["conversation_id"]
    events = []
    async with client.stream(
        "POST",
        f"/api/conversations/{conv}/turns",
        json={"message": "hello"},
    ) as resp:
        assert resp.status_code == 200
        async for line in resp.aiter_lines():
            if line.startswith("event:"):
                events.append(line.split(":", 1)[1].strip())
            elif line.startswith("data:"):
                payload = json.loads(line.split(":", 1)[1].strip())
                if events and events[-1] == "delta":
                    assert isinstance(payload.get("text"), str)
    assert events[0] == "delta"
    assert "completed" in events
    assert "failed" not in events
    assert "interrupted" not in events


async def test_transcript_after_turn(client) -> None:
    conv = (await client.post("/api/conversations")).json()["conversation_id"]
    async with client.stream(
        "POST",
        f"/api/conversations/{conv}/turns",
        json={"message": "hello weaver"},
    ):
        pass
    resp = await client.get(f"/api/conversations/{conv}/messages")
    assert resp.status_code == 200
    msgs = resp.json()
    assert msgs[0]["role"] == "owner"
    assert msgs[0]["content"] == "hello weaver"
    assert msgs[-1]["role"] == "weaver"
    await _no_canaries(resp.text)


async def test_cancel_idle_conversation_200(client) -> None:
    conv = (await client.post("/api/conversations")).json()["conversation_id"]
    resp = await client.post(f"/api/conversations/{conv}/cancel")
    assert resp.status_code == 200


async def test_concurrent_turn_409(tmp_path) -> None:
    # The fake turn completes instantly, so gate the send to hold the
    # active-turn slot open while the second request lands.
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    gate = asyncio.Event()
    entered = asyncio.Event()

    async def gated_send(
        conversation_id, text, cancel_event=None, on_delta=None, on_tool_event=None
    ):
        entered.set()
        await gate.wait()
        from weaver.agent.turn import TurnExitReason

        return type(
            "R",
            (),
            {
                "turn_id": "t1",
                "exit_reason": TurnExitReason.COMPLETED,
                "final_text": "ok",
                "token_count": 0,
                "token_budget": 0,
            },
        )()

    original_send = runtime.session.send
    runtime.session.send = gated_send  # type: ignore[method-assign]
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        conv = (await client.post("/api/conversations")).json()["conversation_id"]

        async def hold_stream():
            async with client.stream(
                "POST",
                f"/api/conversations/{conv}/turns",
                json={"message": "slow"},
            ) as resp:
                assert resp.status_code == 200
                await resp.aread()

        first = asyncio.create_task(hold_stream())
        await entered.wait()
        second = await client.post(
            f"/api/conversations/{conv}/turns",
            json={"message": "again"},
        )
        assert second.status_code == 409
        gate.set()
        await first
    await runtime.close()
    runtime.session.send = original_send  # type: ignore[method-assign]


async def test_cancel_active_turn_returns_202_and_interrupted_event(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    entered = asyncio.Event()

    async def cancel_aware_send(
        conversation_id, text, cancel_event=None, on_delta=None, on_tool_event=None
    ):
        from weaver.agent.errors import safe_error
        from weaver.agent.turn import TurnExitReason

        entered.set()
        # Cooperative send: finish as soon as the cancel event is set.
        if cancel_event is not None:
            await cancel_event.wait()
        return type(
            "R",
            (),
            {
                "turn_id": "t1",
                "exit_reason": TurnExitReason.INTERRUPTED,
                "final_text": "",
                "safe_failure": safe_error("interrupted"),
                "token_count": 0,
                "token_budget": 0,
            },
        )()

    original_send = runtime.session.send
    runtime.session.send = cancel_aware_send  # type: ignore[method-assign]
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        conv = (await client.post("/api/conversations")).json()["conversation_id"]

        async def hold_stream():
            events = []
            payloads = []
            async with client.stream(
                "POST",
                f"/api/conversations/{conv}/turns",
                json={"message": "slow"},
            ) as resp:
                assert resp.status_code == 200
                async for line in resp.aiter_lines():
                    if line.startswith("event:"):
                        events.append(line.split(":", 1)[1].strip())
                    elif line.startswith("data:"):
                        payloads.append(json.loads(line.split(":", 1)[1].strip()))
            return events, payloads

        task = asyncio.create_task(hold_stream())
        await entered.wait()
        cancel = await client.post(f"/api/conversations/{conv}/cancel")
        assert cancel.status_code == 202
        events, payloads = await task
        assert "interrupted" in events
        assert "completed" not in events
        assert payloads[-1]["code"] == "interrupted"
        assert payloads[-1]["message"]
    await runtime.close()
    runtime.session.send = original_send  # type: ignore[method-assign]


async def test_failed_exit_reason_emits_failed_event(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")

    async def failing_send(
        conversation_id, text, cancel_event=None, on_delta=None, on_tool_event=None
    ):
        from weaver.agent.turn import TurnExitReason

        return type(
            "R",
            (),
            {
                "turn_id": "t1",
                "exit_reason": TurnExitReason.MODEL_FAILED,
                "final_text": "",
                "safe_failure": "provider rejected the request",
                "token_count": 0,
                "token_budget": 0,
            },
        )()

    original_send = runtime.session.send
    runtime.session.send = failing_send  # type: ignore[method-assign]
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        conv = (await client.post("/api/conversations")).json()["conversation_id"]
        events = []
        payloads = []
        async with client.stream(
            "POST",
            f"/api/conversations/{conv}/turns",
            json={"message": "boom"},
        ) as resp:
            assert resp.status_code == 200
            async for line in resp.aiter_lines():
                if line.startswith("event:"):
                    events.append(line.split(":", 1)[1].strip())
                elif line.startswith("data:"):
                    payloads.append(json.loads(line.split(":", 1)[1].strip()))
    assert "failed" in events
    assert "completed" not in events
    assert payloads[-1]["code"] == "model_failed"
    assert "provider" in payloads[-1]["message"]
    await runtime.close()
    runtime.session.send = original_send  # type: ignore[method-assign]


async def test_turn_settles_before_next_turn(tmp_path) -> None:
    """After a turn ends, the registry is clean: the next turn is 200.

    (A mid-stream disconnect needs real socket semantics that the buffered
    ASGITransport cannot simulate; that case is proven against an ephemeral
    uvicorn server and recorded in results.md.)
    """
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        conv = (await client.post("/api/conversations")).json()["conversation_id"]
        async with client.stream(
            "POST",
            f"/api/conversations/{conv}/turns",
            json={"message": "one"},
        ) as resp:
            assert resp.status_code == 200
            await resp.aread()
        # First turn fully consumed: the entry is gone, so this is 200, not 409.
        async with client.stream(
            "POST",
            f"/api/conversations/{conv}/turns",
            json={"message": "two"},
        ) as resp:
            assert resp.status_code == 200
    await runtime.close()


async def test_index_has_csp_and_live_mode_label(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        resp = await client.get("/")
        assert resp.status_code == 200
        assert "Content-Security-Policy" in resp.headers
        assert "default-src 'self'" in resp.headers["Content-Security-Policy"]
        assert "fake" in resp.text  # mode label injected from the runtime
        assert "{{MODE_LABEL}}" not in resp.text
        assert "sk-test-secret" not in resp.text
        assert '<div id="root"></div>' in resp.text
        script_path, style_path = built_asset_paths()
        assert script_path in resp.text
        assert style_path in resp.text
        assert "style-src 'self'" in resp.headers["Content-Security-Policy"]
        assert "unsafe-inline" not in resp.headers["Content-Security-Policy"]
    await runtime.close()


@pytest.mark.parametrize(
    "path",
    (
        "/static/weaver.js",
        "/static/weaver.css",
        "/static/components/weaver-chat.js",
        "/static/theme.css",
        "/static/manifest.webmanifest",
        "/static/sw.js",
    ),
)
async def test_old_frontend_assets_are_gone(client, path) -> None:
    response = await client.get(path)
    assert response.status_code == 404


async def test_new_static_assets_serve(client) -> None:
    script_path, style_path = built_asset_paths()
    for path in [
        style_path,
        script_path,
        "/manifest.webmanifest",
        "/weaver-mark.svg",
        "/assets/font-awesome-license.txt",
        "/sw.js",
    ]:
        resp = await client.get(path)
        assert resp.status_code == 200, path
        ct = resp.headers.get("content-type", "")
        assert (
            "text" in ct or "svg" in ct or "manifest+json" in ct or "javascript" in ct
        ), path

    license_response = await client.get("/assets/font-awesome-license.txt")
    assert "Creative Commons Attribution 4.0" in license_response.text


async def test_service_worker_served_at_root_scope(client) -> None:
    # A worker at /static/sw.js would only control /static/*, so the shell
    # could never be served offline. The root path is the PWA contract.
    resp = await client.get("/sw.js")
    assert resp.status_code == 200
    assert resp.headers.get("service-worker-allowed", "").strip() == "/"
    assert "caches.open" in resp.text
    assert 'const CACHE_NAME = "weaver-shell-v5"' in resp.text
    assert 'request.mode === "navigate"' in resp.text
    assert "await fetch(request)" in resp.text
    assert 'requestUrl.pathname.startsWith("/api/")' in resp.text
    assert 'requestUrl.pathname.startsWith("/assets/")' in resp.text
    assert "shellHtml.matchAll" in resp.text
    assert "versionedAssets.length < 2" in resp.text
    assert "const openClients = await self.clients.matchAll" in resp.text
    assert "includeUncontrolled: true" in resp.text
    assert "client.navigate(client.url)" in resp.text


async def test_mutating_routes_reject_nonlocal_origin(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        resp = await client.post(
            "/api/conversations",
            headers={"Origin": "https://evil.example"},
        )
        assert resp.status_code == 403
        conv = (await client.post("/api/conversations")).json()["conversation_id"]
        resp = await client.post(
            f"/api/conversations/{conv}/turns",
            json={"message": "x"},
            headers={"Origin": "https://evil.example"},
        )
        assert resp.status_code == 403
        # A loopback origin is accepted.
        resp = await client.post(
            f"/api/conversations/{conv}/turns",
            json={"message": "x"},
            headers={"Origin": "http://127.0.0.1"},
        )
        assert resp.status_code == 200
    await runtime.close()


async def test_mutating_routes_reject_missing_origin(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
    ) as client:
        response = await client.post("/api/conversations")
        assert response.status_code == 403
    await runtime.close()


async def test_mutating_routes_require_exact_local_host_and_same_origin(
    tmp_path,
) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        hostile_host = await client.post(
            "/api/conversations",
            headers={"Host": "localhost.evil.example"},
        )
        assert hostile_host.status_code == 403

        cross_origin = await client.post(
            "/api/conversations",
            headers={
                "Host": "127.0.0.1",
                "Origin": "http://localhost",
            },
        )
        assert cross_origin.status_code == 403
    await runtime.close()


@pytest.mark.parametrize(
    "malformed_host",
    (
        "127.0.0.1/path",
        "127.0.0.1?evil",
        "localhost:evil",
        "127.0.0.1:99999",
    ),
)
async def test_mutating_routes_reject_malformed_local_host(
    tmp_path,
    malformed_host,
) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        response = await client.post(
            "/api/conversations",
            headers={"Host": malformed_host},
        )
        assert response.status_code == 403
    await runtime.close()


async def test_shutdown_waits_until_cooperative_turn_settles(
    tmp_path,
    monkeypatch,
) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    entered = asyncio.Event()
    release = asyncio.Event()
    settled = asyncio.Event()

    async def slow_settling_send(
        conversation_id,
        text,
        cancel_event=None,
        on_delta=None,
        on_tool_event=None,
    ):
        entered.set()
        assert cancel_event is not None
        await cancel_event.wait()
        await release.wait()
        settled.set()
        return TurnResult(
            turn_id="turn-1",
            exit_reason=TurnExitReason.INTERRUPTED,
            safe_failure="Turn interrupted.",
        )

    runtime.session.send = slow_settling_send  # type: ignore[method-assign]
    monkeypatch.setattr(web_app, "SETTLE_TIMEOUT_SECONDS", 0.01, raising=False)
    app = create_app(runtime)
    lifespan = app.router.lifespan_context(app)
    await lifespan.__aenter__()

    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        conversation_id = (await client.post("/api/conversations")).json()[
            "conversation_id"
        ]
        turn_request = asyncio.create_task(
            client.post(
                f"/api/conversations/{conversation_id}/turns",
                json={"message": "wait for shutdown"},
            )
        )
        await entered.wait()

        shutdown = asyncio.create_task(lifespan.__aexit__(None, None, None))
        await asyncio.sleep(0.03)
        assert not shutdown.done()
        assert not settled.is_set()

        release.set()
        await shutdown
        await turn_request
        assert settled.is_set()
    await runtime.close()


async def test_page_bundle_uses_cancel_route_and_explicit_recovery(client) -> None:
    script_path, _ = built_asset_paths()
    script = await client.get(script_path)
    assert script.status_code == 200
    assert "/cancel" in script.text
    assert "Start a new weave" in script.text
    assert "Choose another thread" in script.text


async def test_page_privacy_copy_matches_runtime_mode(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    try:
        app = create_app(runtime)
        transport = ASGITransport(app=app)
        async with AsyncClient(
            transport=transport,
            base_url="http://127.0.0.1",
            headers=SAME_ORIGIN_HEADERS,
        ) as client:
            fake_page = await client.get("/")
            assert "No model request is sent" in fake_page.text

        runtime.live = True
        live_app = create_app(runtime)
        live_transport = ASGITransport(app=live_app)
        async with AsyncClient(
            transport=live_transport,
            base_url="http://127.0.0.1",
            headers=SAME_ORIGIN_HEADERS,
        ) as client:
            live_page = await client.get("/")
            assert "Messages are sent to DeepSeek" in live_page.text
            assert "Nothing leaves this machine" not in live_page.text
    finally:
        await runtime.close()


async def test_private_protocol_canaries_never_reach_web_surfaces(
    tmp_path,
    caplog,
) -> None:
    caplog.set_level(logging.INFO)
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    conversation_id = await runtime.session.start_conversation("")
    opener_items = await runtime.session.repo.load_items(conversation_id)
    opener_runs = await runtime.session.repo.load_runs(conversation_id)
    opener = opener_items[0]
    opener_run = opener_runs[0]

    await runtime.session.coordinator.insert_assistant_item(
        conversation_id,
        opener_run.id,
        opener.turn_id,
        "PRIVATE_ASSISTANT_CANARY",
        tool_calls=[
            {
                "id": "private-call",
                "name": "echo",
                "arguments": json.dumps({"message": "PRIVATE_ARGUMENT_CANARY"}),
            }
        ],
    )
    await runtime.session.coordinator.settle_tool(
        conversation_id,
        opener_run.id,
        opener.turn_id,
        "private-call",
        "echo",
        json.dumps({"message": "PRIVATE_ARGUMENT_CANARY"}),
        "PRIVATE_RESULT_CANARY",
    )
    await runtime.session.coordinator.complete_run(
        conversation_id,
        opener_run.id,
        opener.turn_id,
        "Visible Weaver reply",
    )

    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        responses = [
            await client.get("/"),
            await client.get(built_asset_paths()[0]),
            await client.get("/api/conversations"),
            await client.get(f"/api/conversations/{conversation_id}/messages"),
        ]
        turn_response = await client.post(
            f"/api/conversations/{conversation_id}/turns",
            json={"message": "visible owner message"},
        )
        responses.append(turn_response)

    public_text = "\n".join(response.text for response in responses)
    public_text += "\n" + caplog.text
    assert "PRIVATE_ASSISTANT_CANARY" not in public_text
    assert "PRIVATE_ARGUMENT_CANARY" not in public_text
    assert "PRIVATE_RESULT_CANARY" not in public_text
    await runtime.close()
