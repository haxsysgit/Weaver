import asyncio

import pytest

from weaver.model_layer import (
    DuplicateProviderError,
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelRequest,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelStreamEventType,
    UnknownModelError,
    UnknownProviderError,
)


def model_spec(
    provider_id: str,
    model_id: str,
    *,
    default_output_tokens: int = 512,
) -> ModelSpec:
    return ModelSpec(
        provider_id=provider_id,
        model_id=model_id,
        api_family="test",
        default_output_tokens=default_output_tokens,
        supports_reasoning=False,
    )


def text_request(*, max_output_tokens: int | None = None) -> ModelRequest:
    return ModelRequest(
        messages=(ModelMessage(role="user", content="synthetic"),),
        max_output_tokens=max_output_tokens,
    )


def response_for(model: ModelSpec, text: str) -> ModelResponse:
    return ModelResponse(
        assistant_message=ModelMessage(role="assistant", content=text),
        provider_id=model.provider_id,
        model_id=model.model_id,
        stop_reason=ModelStopReason.STOP,
        raw_stop_reason="stop",
    )


def test_provider_registration_and_exact_model_lookup() -> None:
    selected = model_spec("fake", "reader-1")
    provider = FakeModelProvider("fake", models=(selected,))
    layer = ModelLayer()

    layer.register_provider(provider)

    assert layer.get_model("fake", "reader-1") == selected


def test_identical_model_ids_are_scoped_by_provider() -> None:
    first = model_spec("provider-a", "shared-name")
    second = model_spec("provider-b", "shared-name")
    layer = ModelLayer()
    layer.register_provider(FakeModelProvider("provider-a", models=(first,)))
    layer.register_provider(FakeModelProvider("provider-b", models=(second,)))

    assert layer.get_model("provider-a", "shared-name") == first
    assert layer.get_model("provider-b", "shared-name") == second


def test_unknown_provider_and_model_fail_before_a_request() -> None:
    selected = model_spec("fake", "reader-1")
    provider = FakeModelProvider("fake", models=(selected,))
    layer = ModelLayer()
    layer.register_provider(provider)

    with pytest.raises(UnknownProviderError):
        layer.get_model("missing", "reader-1")

    with pytest.raises(UnknownModelError):
        layer.get_model("fake", "missing")

    assert provider.calls == []


def test_duplicate_provider_registration_is_refused() -> None:
    selected = model_spec("fake", "reader-1")
    layer = ModelLayer()
    layer.register_provider(FakeModelProvider("fake", models=(selected,)))

    with pytest.raises(DuplicateProviderError):
        layer.register_provider(FakeModelProvider("fake", models=(selected,)))


@pytest.mark.asyncio
async def test_request_token_override_falls_back_to_model_default() -> None:
    selected = model_spec("fake", "reader-1", default_output_tokens=700)
    provider = FakeModelProvider("fake", models=(selected,))
    layer = ModelLayer()
    layer.register_provider(provider)

    await layer.complete(selected, text_request(), asyncio.Event())
    await layer.complete(
        selected,
        text_request(max_output_tokens=123),
        asyncio.Event(),
    )

    assert provider.calls[0].max_output_tokens == 700
    assert provider.calls[1].max_output_tokens == 123


@pytest.mark.asyncio
async def test_fake_provider_is_deterministic() -> None:
    selected = model_spec("fake", "reader-1")
    provider = FakeModelProvider("fake", models=(selected,))
    layer = ModelLayer()
    layer.register_provider(provider)
    request = text_request()

    first = await layer.complete(selected, request, asyncio.Event())
    second = await layer.complete(selected, request, asyncio.Event())

    assert first == second


@pytest.mark.asyncio
async def test_stream_has_one_authoritative_terminal_response() -> None:
    selected = model_spec("fake", "reader-1")
    expected = response_for(selected, "complete response")
    provider = FakeModelProvider(
        "fake",
        models=(selected,),
        responses=(expected,),
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    events = [
        event
        async for event in layer.stream(
            selected,
            text_request(),
            asyncio.Event(),
        )
    ]

    terminal = [
        event
        for event in events
        if event.event_type == ModelStreamEventType.RESPONSE_COMPLETE
    ]
    assert len(terminal) == 1
    assert terminal[0].response == expected


@pytest.mark.asyncio
async def test_normalized_and_raw_stop_reasons_remain_separate() -> None:
    selected = model_spec("fake", "reader-1")
    expected = ModelResponse(
        assistant_message=ModelMessage(role="assistant", content="partial"),
        provider_id="fake",
        model_id="reader-1",
        stop_reason=ModelStopReason.LENGTH,
        raw_stop_reason="max_output_tokens",
    )
    provider = FakeModelProvider(
        "fake",
        models=(selected,),
        responses=(expected,),
    )
    layer = ModelLayer()
    layer.register_provider(provider)

    response = await layer.complete(
        selected,
        text_request(),
        asyncio.Event(),
    )

    assert response.stop_reason == ModelStopReason.LENGTH
    assert response.raw_stop_reason == "max_output_tokens"
