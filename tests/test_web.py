"""Plan 011 Gate 2: web app API contract tests.

Routes:
- POST /api/conversations -> 201 {"conversation_id": "..."}
- GET /api/conversations -> 200 [{conversation_id, title}], newest first
- GET /api/conversations/{id}/messages -> filtered persisted transcript
- POST /api/conversations/{id}/turns -> 202 (turn runs server-side)
- GET /api/conversations/{id}/stream -> SSE delta/completed/interrupted/failed
  (EventSource with Last-Event-ID resume, hermes-webui pattern)
- POST /api/conversations/{id}/cancel -> 202 cancelling / 200 idle / 404

Private canaries must never appear in any response body.
"""

import asyncio
import json
import logging
import re
import sqlite3

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


async def test_preferences_defaults(client) -> None:
    resp = await client.get("/api/preferences")
    assert resp.status_code == 200
    assert resp.json() == {"reader_chapter": None, "spoiler_mode": "protect", "tier": "ascended"}


async def test_preferences_roundtrip(client) -> None:
    resp = await client.put(
        "/api/preferences",
        json={"reader_chapter": 600, "spoiler_mode": "none"},
    )
    assert resp.status_code == 200
    assert resp.json() == {"reader_chapter": 600, "spoiler_mode": "none", "tier": "ascended"}
    resp = await client.get("/api/preferences")
    assert resp.json() == {"reader_chapter": 600, "spoiler_mode": "none", "tier": "ascended"}


async def test_preferences_reject_invalid(client) -> None:
    assert (await client.put("/api/preferences", json={"reader_chapter": 0})).status_code == 422
    assert (await client.put("/api/preferences", json={"reader_chapter": 3128})).status_code == 200
    assert (await client.put("/api/preferences", json={"reader_chapter": 3161})).status_code == 422
    assert (await client.put("/api/preferences", json={"spoiler_mode": "maybe"})).status_code == 422


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


async def test_device_scoping_isolates_conversations(client) -> None:
    """Plan v1 slice 3: two devices never see each other's threads."""
    device_a = {"X-Device-Id": "device-a"}
    device_b = {"X-Device-Id": "device-b"}

    conv_a = (
        await client.post("/api/conversations", headers=device_a)
    ).json()["conversation_id"]
    conv_b = (
        await client.post("/api/conversations", headers=device_b)
    ).json()["conversation_id"]

    listed_a = await client.get("/api/conversations", headers=device_a)
    assert [i["conversation_id"] for i in listed_a.json()] == [conv_a]
    listed_b = await client.get("/api/conversations", headers=device_b)
    assert [i["conversation_id"] for i in listed_b.json()] == [conv_b]

    # Cross-device access is indistinguishable from an unknown id.
    hidden = await client.get(
        f"/api/conversations/{conv_b}/messages", headers=device_a
    )
    assert hidden.status_code == 404
    hidden = await client.post(
        f"/api/conversations/{conv_b}/turns",
        headers=device_a,
        json={"message": "intrude"},
    )
    assert hidden.status_code == 404
    hidden = await client.post(
        f"/api/conversations/{conv_a}/cancel", headers=device_b
    )
    assert hidden.status_code == 404

    # Delete by the owner works; delete by another device does not.
    gone = await client.delete(
        f"/api/conversations/{conv_b}", headers=device_a
    )
    assert gone.status_code == 404
    gone = await client.delete(
        f"/api/conversations/{conv_b}", headers=device_b
    )
    assert gone.status_code == 200
    await _no_canaries(hidden.text)


async def test_conversation_metadata_patch_returns_durable_summary(client) -> None:
    device = {"X-Device-Id": "metadata-reader"}
    conversation_id = (
        await client.post("/api/conversations", headers=device)
    ).json()["conversation_id"]

    listed = await client.get("/api/conversations", headers=device)
    assert listed.status_code == 200
    assert listed.json() == [
        {
            "conversation_id": conversation_id,
            "title": "New chat",
            "created_at": listed.json()[0]["created_at"],
            "archived": False,
            "pinned": False,
            "edition_id": "shadow-slave",
        }
    ]

    updated = await client.patch(
        f"/api/conversations/{conversation_id}",
        headers=device,
        json={"title": "  Ananke theory  ", "archived": True, "pinned": True},
    )
    assert updated.status_code == 200
    assert updated.json() == {
        "conversation_id": conversation_id,
        "title": "Ananke theory",
        "created_at": listed.json()[0]["created_at"],
        "archived": True,
        "pinned": True,
        "edition_id": "shadow-slave",
    }

    reset = await client.patch(
        f"/api/conversations/{conversation_id}",
        headers=device,
        json={"title": None, "archived": False, "pinned": False},
    )
    assert reset.status_code == 200
    assert reset.json()["title"] == "New chat"
    assert reset.json()["archived"] is False
    assert reset.json()["pinned"] is False


@pytest.mark.parametrize(
    "body",
    [
        {},
        {"title": "   "},
        {"title": "x" * 81},
        {"edition_id": "another-edition"},
        {"unknown": True},
    ],
)
async def test_conversation_metadata_patch_rejects_invalid_body(client, body) -> None:
    device = {"X-Device-Id": "metadata-reader"}
    conversation_id = (
        await client.post("/api/conversations", headers=device)
    ).json()["conversation_id"]

    response = await client.patch(
        f"/api/conversations/{conversation_id}",
        headers=device,
        json=body,
    )
    assert response.status_code == 422


async def test_missing_device_header_cannot_access_owned_conversation(client) -> None:
    device = {"X-Device-Id": "owned-reader"}
    conversation_id = (
        await client.post("/api/conversations", headers=device)
    ).json()["conversation_id"]

    messages = await client.get(f"/api/conversations/{conversation_id}/messages")
    assert messages.status_code == 404

    turn = await client.post(
        f"/api/conversations/{conversation_id}/turns",
        json={"message": "intrude"},
    )
    assert turn.status_code == 404

    update = await client.patch(
        f"/api/conversations/{conversation_id}",
        json={"archived": True},
    )
    assert update.status_code == 404

    delete = await client.delete(f"/api/conversations/{conversation_id}")
    assert delete.status_code == 404

    owner_listing = await client.get("/api/conversations", headers=device)
    assert [row["conversation_id"] for row in owner_listing.json()] == [conversation_id]


async def test_generated_thread_name_lives_with_conversation_metadata(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    conversation_id = await runtime.session.start_conversation(
        "first question about Weaver",
        device_id="naming-reader",
    )
    try:
        await web_app._name_thread(
            runtime,
            conversation_id,
            "first question about Weaver",
            "fake answer",
        )
        [generated_summary] = await runtime.session.list_conversations(
            device_id="naming-reader"
        )
        assert generated_summary["title"] == "First Question About Weaver"

        await runtime.session.update_conversation_metadata(
            conversation_id,
            title="Reader's name",
            title_is_set=True,
            archived=None,
            pinned=None,
        )
        await web_app._name_thread(
            runtime,
            conversation_id,
            "first question about Weaver",
            "late fake answer",
        )
        [manual_summary] = await runtime.session.list_conversations(
            device_id="naming-reader"
        )
        assert manual_summary["title"] == "Reader's name"
    finally:
        await runtime.close()

    with sqlite3.connect(tmp_path / "weaver.sqlite3") as database:
        legacy_title_table = database.execute(
            "SELECT name FROM sqlite_master "
            "WHERE type = 'table' AND name = 'conversation_title'"
        ).fetchone()
        assert legacy_title_table is None


async def test_byok_key_header_used_and_never_persisted(client, tmp_path) -> None:
    """Plan v1 slice 3: the browser key rides the header, is consumed
    for the turn, and never lands in any stored body (no-log rule)."""
    key = "sk-browser-secret-12345"
    device = {"X-Device-Id": "key-holder", "X-Weaver-Key": key}
    conv = (
        await client.post("/api/conversations", headers=device)
    ).json()["conversation_id"]
    resp = await client.post(
        f"/api/conversations/{conv}/turns",
        headers=device,
        json={"message": "hello weaver"},
    )
    assert resp.status_code == 202
    assert key not in resp.text

    # The turn runs (fake model in tests), then nothing anywhere stores
    # the key: not the transcript, not the conversations list, not the
    # persisted sqlite file.
    messages = await client.get(
        f"/api/conversations/{conv}/messages", headers=device
    )
    assert messages.status_code == 200
    assert key not in messages.text

    listed = await client.get("/api/conversations", headers=device)
    assert key not in listed.text

    # The key never reached the sqlite file either: scan the raw bytes
    # of the runtime's state database.
    hits = []
    for db_path in tmp_path.glob("*.sqlite3*"):
        raw = db_path.read_bytes()
        if key.encode() in raw:
            hits.append(str(db_path))
    assert hits == [], f"key leaked into: {hits}"


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



async def _run_turn(client, conv: str, message: str) -> tuple[list[str], list[dict]]:
    """POST the turn (202), then read the SSE stream to completion.

    The turn runs server-side; the reply arrives over the GET stream
    (EventSource with Last-Event-ID resume), so the POST no longer
    carries the stream.
    """
    resp = await client.post(
        f"/api/conversations/{conv}/turns", json={"message": message}
    )
    assert resp.status_code == 202
    events: list[str] = []
    payloads: list[dict] = []
    async with client.stream(
        "GET", f"/api/conversations/{conv}/stream"
    ) as stream_resp:
        assert stream_resp.status_code == 200
        async for line in stream_resp.aiter_lines():
            if line.startswith("event:"):
                events.append(line.split(":", 1)[1].strip())
            elif line.startswith("data:"):
                payloads.append(json.loads(line.split(":", 1)[1].strip()))
    return events, payloads


async def test_web_holds_model_prose_until_the_final_answer(client) -> None:
    conv = (await client.post("/api/conversations")).json()["conversation_id"]
    events, payloads = await _run_turn(client, conv, "hello")
    assert "delta" not in events
    assert events[0] == "completed"
    assert "failed" not in events
    assert "interrupted" not in events
    assert payloads[-1]["text"]


async def test_stream_replays_the_full_log_for_a_fresh_client(client) -> None:
    # hermes-webui pattern: the stream carries id: lines, so a client
    # that connects fresh (or reconnects) gets every event in order.
    conv = (await client.post("/api/conversations")).json()["conversation_id"]
    events, payloads = await _run_turn(client, conv, "hello")
    assert events[0] == "completed"
    assert "completed" in events


async def test_stream_does_not_resend_events_already_seen(client) -> None:
    # Last-Event-ID resume: a reconnecting client that already saw the
    # whole turn gets nothing replayed (no duplicated deltas).
    conv = (await client.post("/api/conversations")).json()["conversation_id"]
    first = await client.post(
        f"/api/conversations/{conv}/turns", json={"message": "hello"}
    )
    assert first.status_code == 202
    async with client.stream(
        "GET",
        f"/api/conversations/{conv}/stream",
        headers={"Last-Event-ID": "999999"},
    ) as stream_resp:
        body = await stream_resp.aread()
    assert b"event:" not in body


async def test_transcript_after_turn(client) -> None:
    conv = (await client.post("/api/conversations")).json()["conversation_id"]
    await _run_turn(client, conv, "hello weaver")
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
        conversation_id, text, cancel_event=None, on_delta=None, on_tool_event=None, tool_budget=None, reasoning=None, packet_builder=None
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

        first = await client.post(
            f"/api/conversations/{conv}/turns",
            json={"message": "slow"},
        )
        assert first.status_code == 202
        await entered.wait()
        second = await client.post(
            f"/api/conversations/{conv}/turns",
            json={"message": "again"},
        )
        assert second.status_code == 409
        gate.set()
        # let the gated turn finish cleanly
        async with client.stream(
            "GET", f"/api/conversations/{conv}/stream"
        ) as stream_resp:
            await stream_resp.aread()
    await runtime.close()
    runtime.session.send = original_send  # type: ignore[method-assign]


async def test_cancel_active_turn_returns_202_and_interrupted_event(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    entered = asyncio.Event()

    async def cancel_aware_send(
        conversation_id, text, cancel_event=None, on_delta=None, on_tool_event=None, tool_budget=None, reasoning=None, packet_builder=None
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

        first = await client.post(
            f"/api/conversations/{conv}/turns",
            json={"message": "slow"},
        )
        assert first.status_code == 202
        await entered.wait()
        cancel = await client.post(f"/api/conversations/{conv}/cancel")
        assert cancel.status_code == 202
        events = []
        payloads = []
        async with client.stream(
            "GET", f"/api/conversations/{conv}/stream"
        ) as stream_resp:
            async for line in stream_resp.aiter_lines():
                if line.startswith("event:"):
                    events.append(line.split(":", 1)[1].strip())
                elif line.startswith("data:"):
                    payloads.append(json.loads(line.split(":", 1)[1].strip()))
        assert "interrupted" in events
        assert "completed" not in events
        assert payloads[-1]["code"] == "interrupted"
        assert payloads[-1]["message"]
    await runtime.close()
    runtime.session.send = original_send  # type: ignore[method-assign]


async def test_failed_exit_reason_emits_failed_event(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")

    async def failing_send(
        conversation_id, text, cancel_event=None, on_delta=None, on_tool_event=None, tool_budget=None, reasoning=None, packet_builder=None
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
        resp = await client.post(
            f"/api/conversations/{conv}/turns",
            json={"message": "boom"},
        )
        assert resp.status_code == 202
        events = []
        payloads = []
        async with client.stream(
            "GET", f"/api/conversations/{conv}/stream"
        ) as stream_resp:
            assert stream_resp.status_code == 200
            async for line in stream_resp.aiter_lines():
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
        first = await client.post(
            f"/api/conversations/{conv}/turns",
            json={"message": "one"},
        )
        assert first.status_code == 202
        # first turn fully served: the registry entry is dropped
        async with client.stream(
            "GET", f"/api/conversations/{conv}/stream"
        ) as stream_resp:
            await stream_resp.aread()
        second = await client.post(
            f"/api/conversations/{conv}/turns",
            json={"message": "two"},
        )
        assert second.status_code == 202
        async with client.stream(
            "GET", f"/api/conversations/{conv}/stream"
        ) as stream_resp:
            await stream_resp.aread()
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
    assert 'const CACHE_NAME = "weaver-shell-v6"' in resp.text
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
        # A loopback origin is accepted (the turn is accepted; the reply
        # streams over the GET route).
        resp = await client.post(
            f"/api/conversations/{conv}/turns",
            json={"message": "x"},
            headers={"Origin": "http://127.0.0.1"},
        )
        assert resp.status_code == 202
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
        tool_budget=None,
        reasoning=None,
        packet_builder=None,
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


async def test_delete_conversation_removes_it(client) -> None:
    resp = await client.post("/api/conversations")
    assert resp.status_code == 201
    conv_id = resp.json()["conversation_id"]
    resp = await client.delete(f"/api/conversations/{conv_id}")
    assert resp.status_code == 200
    assert resp.json() == {"deleted": conv_id}
    listed = await client.get("/api/conversations")
    assert all(c["conversation_id"] != conv_id for c in listed.json())


async def test_delete_unknown_conversation_is_404(client) -> None:
    resp = await client.delete("/api/conversations/nope")
    assert resp.status_code == 404


async def test_tier_validation_rejects_unknown_mode(client) -> None:
    resp = await client.put("/api/preferences", json={"tier": "supreme"})
    assert resp.status_code == 422
    resp = await client.put("/api/preferences", json={"tier": "transcendent"})
    assert resp.status_code == 200
    assert resp.json()["tier"] == "transcendent"


async def test_passages_rejects_bad_handle(client) -> None:
    resp = await client.get("/api/passages", params={"handle": "nonsense"})
    assert resp.status_code == 422
    resp = await client.get("/api/passages", params={"handle": "novel:99999:1-5"})
    assert resp.status_code == 404


async def test_retry_route_reruns_and_streams(tmp_path) -> None:
    # Plan 15 retry (2026-08-09): POST /retry re-runs the failed turn
    # server-side (the client never re-sends text) under the same 202 +
    # GET /stream contract.
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")

    async def fake_retry(
        conversation_id,
        cancel_event=None,
        on_delta=None,
        on_tool_event=None,
        tool_budget=None,
        reasoning=None,
        packet_builder=None,
    ):
        if on_delta:
            await on_delta("retried answer")
        return (
            TurnResult(
                turn_id="turn-r",
                exit_reason=TurnExitReason.COMPLETED,
                final_text="retried answer",
            ),
            "youre wrong",
        )

    runtime.session.retry_last_turn = fake_retry  # type: ignore[method-assign]
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        conv = (await client.post("/api/conversations")).json()["conversation_id"]
        assert (
            await client.post("/api/conversations/nope/retry")
        ).status_code == 404
        resp = await client.post(f"/api/conversations/{conv}/retry")
        assert resp.status_code == 202
        events: list[str] = []
        payloads: list[dict] = []
        async with client.stream(
            "GET", f"/api/conversations/{conv}/stream"
        ) as stream_resp:
            assert stream_resp.status_code == 200
            async for line in stream_resp.aiter_lines():
                if line.startswith("event:"):
                    events.append(line.split(":", 1)[1].strip())
                elif line.startswith("data:"):
                    payloads.append(json.loads(line.split(":", 1)[1].strip()))
        assert events[0] == "completed"
        assert events[-1] == "completed"
        assert payloads[-1]["text"] == "retried answer"
    await runtime.close()


async def test_retry_route_reports_nothing_to_retry(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")

    async def fake_retry(
        conversation_id,
        cancel_event=None,
        on_delta=None,
        on_tool_event=None,
        tool_budget=None,
        reasoning=None,
        packet_builder=None,
    ):
        return None

    runtime.session.retry_last_turn = fake_retry  # type: ignore[method-assign]
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        conv = (await client.post("/api/conversations")).json()["conversation_id"]
        resp = await client.post(f"/api/conversations/{conv}/retry")
        assert resp.status_code == 202
        async with client.stream(
            "GET", f"/api/conversations/{conv}/stream"
        ) as stream_resp:
            body = (await stream_resp.aread()).decode()
        assert "event: failed" in body
        assert "nothing to retry" in body
    await runtime.close()


async def test_regenerate_route_reanswers_in_place_and_streams(tmp_path) -> None:
    # Regenerate (2026-08-09): re-answers the last question server-side
    # under the same 202 + GET /stream contract - the client never sends
    # text, so the question can never be duplicated as a new message.
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")

    async def fake_regenerate(
        conversation_id,
        cancel_event=None,
        on_delta=None,
        on_tool_event=None,
        tool_budget=None,
        reasoning=None,
        packet_builder=None,
    ):
        if on_delta:
            await on_delta("fresh answer")
        return (
            TurnResult(
                turn_id="turn-r",
                exit_reason=TurnExitReason.COMPLETED,
                final_text="fresh answer",
            ),
            "Who is Azarax?",
        )

    runtime.session.regenerate_last_turn = fake_regenerate  # type: ignore[method-assign]
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        conv = (await client.post("/api/conversations")).json()["conversation_id"]
        assert (
            await client.post("/api/conversations/nope/regenerate")
        ).status_code == 404
        resp = await client.post(f"/api/conversations/{conv}/regenerate")
        assert resp.status_code == 202
        events: list[str] = []
        payloads: list[dict] = []
        async with client.stream(
            "GET", f"/api/conversations/{conv}/stream"
        ) as stream_resp:
            assert stream_resp.status_code == 200
            async for line in stream_resp.aiter_lines():
                if line.startswith("event:"):
                    events.append(line.split(":", 1)[1].strip())
                elif line.startswith("data:"):
                    payloads.append(json.loads(line.split(":", 1)[1].strip()))
        assert events[0] == "completed"
        assert events[-1] == "completed"
        assert payloads[-1]["text"] == "fresh answer"
    await runtime.close()


async def test_regenerate_route_reports_nothing_to_regenerate(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")

    async def fake_regenerate(
        conversation_id,
        cancel_event=None,
        on_delta=None,
        on_tool_event=None,
        tool_budget=None,
        reasoning=None,
        packet_builder=None,
    ):
        return None

    runtime.session.regenerate_last_turn = fake_regenerate  # type: ignore[method-assign]
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=SAME_ORIGIN_HEADERS,
    ) as client:
        conv = (await client.post("/api/conversations")).json()["conversation_id"]
        resp = await client.post(f"/api/conversations/{conv}/regenerate")
        assert resp.status_code == 202
        async with client.stream(
            "GET", f"/api/conversations/{conv}/stream"
        ) as stream_resp:
            body = (await stream_resp.aread()).decode()
        assert "event: failed" in body
        assert "nothing to regenerate" in body
    await runtime.close()
