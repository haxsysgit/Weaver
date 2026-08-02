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

import pytest
from httpx import ASGITransport, AsyncClient

from weaver.chat_runtime import open_chat_runtime
from weaver.web.app import create_app

CANARIES = [
    "sk-test-secret",
    "novel/corpus/path",
    "weaver.sqlite3",
    "reasoning",
]


@pytest.fixture
async def client(tmp_path):
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://127.0.0.1") as c:
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
        resp = await client.post(f"/api/conversations/{conv}/turns", json={"message": bad})
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

    async def gated_send(conversation_id, text, cancel_event=None, on_delta=None):
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
    async with AsyncClient(transport=transport, base_url="http://127.0.0.1") as client:
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
    gate = asyncio.Event()
    entered = asyncio.Event()

    async def gated_send(conversation_id, text, cancel_event=None, on_delta=None):
        from weaver.agent.errors import safe_error
        from weaver.agent.turn import TurnExitReason

        entered.set()
        await gate.wait()
        if cancel_event is not None and cancel_event.is_set():
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
    async with AsyncClient(transport=transport, base_url="http://127.0.0.1") as client:
        conv = (await client.post("/api/conversations")).json()["conversation_id"]

        async def hold_stream():
            events = []
            async with client.stream(
                "POST",
                f"/api/conversations/{conv}/turns",
                json={"message": "slow"},
            ) as resp:
                assert resp.status_code == 200
                async for line in resp.aiter_lines():
                    if line.startswith("event:"):
                        events.append(line.split(":", 1)[1].strip())
            return events

        task = asyncio.create_task(hold_stream())
        await entered.wait()
        cancel = await client.post(f"/api/conversations/{conv}/cancel")
        assert cancel.status_code == 202
        gate.set()
        events = await task
        assert "interrupted" in events
        assert "completed" not in events
    await runtime.close()
    runtime.session.send = original_send  # type: ignore[method-assign]
