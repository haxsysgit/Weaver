import asyncio

import pytest

from weaver.config import resolve_model
from weaver.errors import InvalidModelAliasError, MissingCredentialError
from weaver import (
    DEEPSEEK_FLASH,
    DEEPSEEK_MODELS,
    DeepSeekProvider,
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelRequest,
)


def test_missing_credential_is_rejected() -> None:
    with pytest.raises(MissingCredentialError):
        DeepSeekProvider(None)


def test_invalid_model_alias_is_rejected() -> None:
    with pytest.raises(InvalidModelAliasError):
        resolve_model("turbo")


@pytest.mark.asyncio
async def test_fake_provider_is_deterministic_for_deepseek_catalogue() -> None:
    request = ModelRequest(
        messages=(ModelMessage(role="user", content="synthetic"),),
        response_format="json_object",
    )
    provider = FakeModelProvider(
        "deepseek",
        models=DEEPSEEK_MODELS,
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    first = await layer.complete(DEEPSEEK_FLASH, request, asyncio.Event())
    second = await layer.complete(DEEPSEEK_FLASH, request, asyncio.Event())

    assert first == second
    assert first.model_id == "deepseek-v4-flash"
