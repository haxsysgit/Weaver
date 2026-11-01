"""Canon and fanfic thread routing: storage, prompt, and skill choice."""

from __future__ import annotations

import pytest
from httpx import ASGITransport, AsyncClient

from weaver.agent.answer import ResponseMode, build_answer_blueprint, classify_response_mode
from weaver.chat_runtime import open_chat_runtime
from weaver.web.app import create_app


HEADERS = {"Origin": "http://127.0.0.1"}


@pytest.fixture
async def client(tmp_path):
    runtime = await open_chat_runtime(tmp_path, live=False, surface="web")
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers=HEADERS,
    ) as http:
        yield http, runtime
    await runtime.close()


async def test_a_new_thread_defaults_to_canon(client) -> None:
    http, runtime = client
    created = await http.post("/api/conversations")
    body = created.json()

    assert body["domain"] == "canon"
    assert body["fanfic_kind"] is None
    assert await runtime.session.conversation_domain(body["conversation_id"]) == (
        "canon",
        None,
    )


async def test_a_fanfic_thread_keeps_its_kind(client) -> None:
    http, runtime = client
    created = await http.post(
        "/api/conversations",
        json={"domain": "fanfic", "fanfic_kind": "missing_scene"},
    )
    body = created.json()

    assert body["domain"] == "fanfic"
    assert body["fanfic_kind"] == "missing_scene"
    assert await runtime.session.conversation_domain(body["conversation_id"]) == (
        "fanfic",
        "missing_scene",
    )

    listed = await http.get("/api/conversations")
    summaries = listed.json()
    assert summaries[0]["domain"] == "fanfic"
    assert summaries[0]["fanfic_kind"] == "missing_scene"


async def test_an_unknown_domain_is_rejected(client) -> None:
    http, _ = client
    refused = await http.post(
        "/api/conversations",
        json={"domain": "crossover"},
    )

    assert refused.status_code == 422


async def test_the_fanfic_prompt_names_the_thread_domain(client) -> None:
    _, runtime = client
    conversation_id = await runtime.session.start_conversation(
        "",
        "",
        domain="fanfic",
        fanfic_kind="continuation",
    )

    prompt, domain = await runtime.session._turn_prompt(conversation_id)

    assert domain == "fanfic"
    assert "<thread_domain>" in prompt
    assert "continuation ledger" in prompt
    assert "canon anchor" in prompt
    assert "Kind of fanfic: continuation" in prompt


async def test_a_canon_thread_gets_the_canon_rule(client) -> None:
    _, runtime = client
    conversation_id = await runtime.session.start_conversation("", "")

    prompt, domain = await runtime.session._turn_prompt(conversation_id)

    assert domain == "canon"
    assert "canon reading thread" in prompt
    assert "never treat it as canon" in prompt


@pytest.mark.parametrize(
    "question",
    [
        "continue the story after the last chapter",
        "write the missing scene where they talk",
        "write what happens next in my version",
    ],
)
def test_writing_requests_are_prose(question: str) -> None:
    assert classify_response_mode(question) == ResponseMode.PROSE


def test_a_fanfic_thread_routes_to_the_fanfic_skill() -> None:
    blueprint = build_answer_blueprint(
        question="continue the story after the last chapter",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet="",
        domain="fanfic",
    )

    assert blueprint.skills == ("fanfic_continuation",)
    assert blueprint.mode == ResponseMode.PROSE
    assert blueprint.needs_evidence is False
    assert "500 to 900 words" in blueprint.shape


def test_a_canon_thread_never_starts_in_fanfic() -> None:
    blueprint = build_answer_blueprint(
        question="who killed the Titan",
        prior_weaver_position="",
        reader_challenges_prior_answer=False,
        evidence_packet="",
        domain="canon",
    )

    assert blueprint.skills == ("quick_recall",)
    assert "fanfic" not in blueprint.skills[0]
