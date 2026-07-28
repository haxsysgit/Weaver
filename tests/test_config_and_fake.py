import pytest

from weaver.config import resolve_model
from weaver.errors import InvalidModelAliasError, MissingCredentialError
from weaver.fake import FakeModelClient
from weaver.model import Message, ModelRequest
from weaver.deepseek import DeepSeekClient


def test_missing_credential_is_rejected() -> None:
    with pytest.raises(MissingCredentialError):
        DeepSeekClient(None)


def test_invalid_model_alias_is_rejected() -> None:
    with pytest.raises(InvalidModelAliasError):
        resolve_model("turbo")


@pytest.mark.asyncio
async def test_fake_client_is_deterministic() -> None:
    request = ModelRequest(
        model="flash",
        messages=(Message(role="user", content="synthetic"),),
        response_format="json_object",
    )
    client = FakeModelClient()

    first = await client.complete(request)
    second = await client.complete(request)

    assert first == second
    assert first.model_id == "deepseek-v4-flash"
