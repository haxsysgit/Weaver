"""Every API route, called the way a real browser calls it.

Browsers send no Origin on a same-origin GET or HEAD and send one on every
write (MDN, Origin header). The main web tests add Origin to every request,
which hid a broken GET /api/preferences. This sweep walks the app's own
route table, so a new route is covered without editing the test:

- a same-origin browser request is never refused by the host or origin
  guard (403 is used only by those guards);
- the same request under a foreign Host (DNS rebinding) is always refused.
"""

import pytest
from fastapi.routing import APIRoute
from httpx import ASGITransport, AsyncClient

from weaver.chat_runtime import open_chat_runtime
from weaver.web.app import create_app

DEVICE = {"X-Device-Id": "request-shape-device"}
WRITE_METHODS = {"POST", "PUT", "PATCH", "DELETE"}


def browser_headers(method: str, host: str = "127.0.0.1") -> dict[str, str]:
    """Headers a browser page at http://127.0.0.1 sends with fetch()."""
    headers = {"Host": host, "Sec-Fetch-Site": "same-origin", **DEVICE}
    if method in WRITE_METHODS:
        headers["Origin"] = f"http://{host}"
    return headers


@pytest.fixture
async def app_and_client(tmp_path):
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://127.0.0.1"
    ) as client:
        yield app, client
    await runtime.close()


def api_calls(app, conversation_id: str) -> list[tuple[str, str]]:
    calls = []
    for route in app.routes:
        if not isinstance(route, APIRoute) or not route.path.startswith("/api/"):
            continue
        path = route.path.replace("{conversation_id}", conversation_id)
        assert "{" not in path, f"sweep cannot fill {route.path}"
        for method in sorted(route.methods - {"HEAD"}):
            calls.append((method, path))
    return calls


async def _create_conversation(client) -> str:
    created = await client.post(
        "/api/conversations", headers=browser_headers("POST"), json={}
    )
    assert created.status_code == 201, created.text
    return created.json()["conversation_id"]


@pytest.mark.asyncio
async def test_every_api_route_accepts_a_same_origin_browser_request(
    app_and_client,
) -> None:
    app, client = app_and_client
    conversation_id = await _create_conversation(client)
    calls = api_calls(app, conversation_id)
    assert len(calls) >= 12

    refused = []
    for method, path in calls:
        if path.endswith("/stream"):
            continue  # EventSource; covered below without a live turn
        response = await client.request(
            method, path, headers=browser_headers(method), json={}
        )
        if response.status_code == 403:
            refused.append(f"{method} {path}: {response.text}")
    assert refused == []


@pytest.mark.asyncio
async def test_every_api_route_refuses_a_foreign_host(app_and_client) -> None:
    app, client = app_and_client
    conversation_id = await _create_conversation(client)

    unguarded = []
    for method, path in api_calls(app, conversation_id):
        response = await client.request(
            method,
            path,
            headers=browser_headers(method, host="weaver.evil.example"),
            json={},
        )
        if response.status_code != 403:
            unguarded.append(f"{method} {path}: {response.status_code}")
    assert unguarded == []
