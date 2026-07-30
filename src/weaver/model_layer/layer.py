import asyncio
from collections.abc import AsyncIterator

from .provider import ModelProvider
from .types import (
    ModelRequest,
    ModelResponse,
    ModelSpec,
    ModelStreamEvent,
    ModelStreamEventType,
)


class ModelLayerError(ValueError):
    pass


class DuplicateProviderError(ModelLayerError):
    pass


class UnknownProviderError(ModelLayerError):
    pass


class UnknownModelError(ModelLayerError):
    pass


class ModelProtocolError(ModelLayerError):
    pass


class ModelLayer:
    def __init__(self) -> None:
        self._providers: dict[str, ModelProvider] = {}
        self._models: dict[tuple[str, str], ModelSpec] = {}

    def register_provider(self, provider: ModelProvider) -> None:
        provider_id = provider.provider_id
        if provider_id in self._providers:
            raise DuplicateProviderError(
                f"Provider {provider_id!r} is already registered."
            )

        provider_models: dict[tuple[str, str], ModelSpec] = {}
        for model in provider.models:
            if model.provider_id != provider_id:
                raise ModelLayerError(
                    f"Model {model.model_id!r} belongs to a different provider."
                )
            model_key = (provider_id, model.model_id)
            if model_key in provider_models:
                raise ModelLayerError(
                    f"Model {model.model_id!r} is registered twice."
                )
            provider_models[model_key] = model

        self._providers[provider_id] = provider
        self._models.update(provider_models)

    def get_model(self, provider_id: str, model_id: str) -> ModelSpec:
        if provider_id not in self._providers:
            raise UnknownProviderError(
                f"Provider {provider_id!r} is not registered."
            )

        model = self._models.get((provider_id, model_id))
        if model is None:
            raise UnknownModelError(
                f"Model {model_id!r} is not registered for {provider_id!r}."
            )
        return model

    async def stream(
        self,
        model: ModelSpec,
        request: ModelRequest,
        cancel_event: asyncio.Event,
    ) -> AsyncIterator[ModelStreamEvent]:
        selected_model = self.get_model(model.provider_id, model.model_id)
        provider = self._providers[selected_model.provider_id]
        output_tokens = request.max_output_tokens
        if output_tokens is None:
            output_tokens = selected_model.default_output_tokens

        terminal_count = 0
        async for event in provider.stream(
            selected_model,
            request,
            cancel_event,
            max_output_tokens=output_tokens,
        ):
            if event.event_type == ModelStreamEventType.RESPONSE_COMPLETE:
                if terminal_count:
                    raise ModelProtocolError(
                        "A provider emitted more than one final response."
                    )
                terminal_count += 1
                if event.response is None:
                    raise ModelProtocolError(
                        "A terminal model event must carry its final response."
                    )
            elif terminal_count:
                raise ModelProtocolError(
                    "A provider emitted data after its terminal response."
                )
            yield event

        if terminal_count != 1:
            raise ModelProtocolError(
                "A model stream must end with one final response."
            )

    async def complete(
        self,
        model: ModelSpec,
        request: ModelRequest,
        cancel_event: asyncio.Event,
    ) -> ModelResponse:
        final_response: ModelResponse | None = None
        async for event in self.stream(model, request, cancel_event):
            if event.event_type == ModelStreamEventType.RESPONSE_COMPLETE:
                final_response = event.response

        if final_response is None:
            raise ModelProtocolError(
                "A model stream completed without a final response."
            )
        return final_response
