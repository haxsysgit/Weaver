"""Public async functions and custom-agent registry adapters."""

from __future__ import annotations

import os
from pathlib import Path
from typing import Any, Awaitable, Callable, TypeVar

from pydantic import ValidationError

from weaver.agent.tools import (
    EffectKind,
    ToolDefinition,
    ToolExecutionContext,
    ToolRegistry,
)

from .errors import CorpusError, safe_error_message
from .models import (
    BuildNovelPacketInput,
    ExportNovelInput,
    FetchNovelChaptersInput,
    InspectNovelCorpusInput,
    StrictModel,
    UpdateNovelCorpusInput,
)
from .service import CorpusService
from .source import DirectHttpChapterSource, FirecrawlChapterSource
from .spec import SHADOW_SLAVE

InputModel = TypeVar("InputModel", bound=StrictModel)


def service_from_environment(
    *,
    live_source: bool,
    source_name: str = "firecrawl",
) -> CorpusService:
    project_root = Path(os.environ.get("WEAVER_PROJECT_ROOT", Path.cwd()))
    configured_state = os.environ.get("WEAVER_CORPUS_STATE_DIR")
    state_root = Path(configured_state) if configured_state else None
    source = None
    if live_source:
        if source_name == "direct":
            source = DirectHttpChapterSource(spec=SHADOW_SLAVE)
        else:
            source = FirecrawlChapterSource(
                api_key=os.environ.get("FIRECRAWL_API_KEY"),
                spec=SHADOW_SLAVE,
            )
    return CorpusService(
        project_root=project_root,
        state_root=state_root,
        source=source,
        spec=SHADOW_SLAVE,
    )


async def inspect_novel_corpus(novel_id: str) -> dict[str, Any]:
    request = InspectNovelCorpusInput(novel_id=novel_id)
    result = await service_from_environment(
        live_source=False
    ).inspect_novel_corpus(request)
    return result.model_dump(mode="json")


async def fetch_novel_chapters(
    novel_id: str,
    start_chapter: int,
    end_chapter: int | None = None,
    preview: bool = True,
) -> dict[str, Any]:
    request = FetchNovelChaptersInput(
        novel_id=novel_id,
        start_chapter=start_chapter,
        end_chapter=end_chapter,
        preview=preview,
    )
    result = await service_from_environment(
        live_source=not preview
    ).fetch_novel_chapters(request)
    return result.model_dump(mode="json")


async def update_novel_corpus(
    novel_id: str,
    through_chapter: int | None = None,
    preview: bool = True,
    source: str = "firecrawl",
) -> dict[str, Any]:
    request = UpdateNovelCorpusInput(
        novel_id=novel_id,
        through_chapter=through_chapter,
        preview=preview,
    )
    result = await service_from_environment(
        live_source=not preview,
        source_name=source,
    ).update_novel_corpus(request)
    return result.model_dump(mode="json")


async def build_novel_packet(
    novel_id: str,
    chapters: list[int],
) -> dict[str, Any]:
    request = BuildNovelPacketInput(novel_id=novel_id, chapters=chapters)
    result = await service_from_environment(
        live_source=False
    ).build_novel_packet(request)
    return result.model_dump(mode="json")


async def export_novel(
    novel_id: str,
    format: str,
    through_chapter: int | None = None,
) -> dict[str, Any]:
    request = ExportNovelInput(
        novel_id=novel_id,
        format=format,
        through_chapter=through_chapter,
    )
    result = await service_from_environment(
        live_source=False
    ).export_novel(request)
    return result.model_dump(mode="json")


def _handler(
    model: type[InputModel],
    operation: Callable[[InputModel], Awaitable[Any]],
) -> Callable[[dict[str, Any], ToolExecutionContext], Awaitable[dict[str, Any]]]:
    async def handle(
        arguments: dict[str, Any],
        _context: ToolExecutionContext,
    ) -> dict[str, Any]:
        try:
            request = model.model_validate(arguments)
            result = await operation(request)
            return {"ok": True, "result": result.model_dump(mode="json")}
        except ValidationError:
            return {
                "ok": False,
                "error_category": "validation",
                "error": "Tool arguments failed schema validation.",
            }
        except CorpusError as exc:
            return {
                "ok": False,
                "error_category": exc.category.value,
                "error": safe_error_message(exc.category),
            }

    return handle


def register_chat_tools(
    registry: ToolRegistry,
    service: CorpusService,
) -> None:
    """Register the chat-safe library tools only (Plan 010 Contract §2).

    fetch_novel_chapters and update_novel_corpus are NOT registered: they are
    network-backed and classified INTERNAL_WRITE without an external-effect
    gate (audit finding B2). Not registering them is stronger than a policy
    block — they cannot be invoked at all. Descriptions use Weaver words and
    never the word "corpus" (Contract §1). Effect kinds stay truthful
    (INTERNAL_WRITE): inspect writes an inventory manifest, packet and export
    write files into the private state dir.
    """
    definitions: tuple[
        tuple[
            str,
            str,
            type[StrictModel],
            Callable[[Any], Awaitable[Any]],
        ],
        ...,
    ] = (
        (
            "inspect_novel_corpus",
            "Inspect Weaver's private library and return metadata only.",
            InspectNovelCorpusInput,
            service.inspect_novel_corpus,
        ),
        (
            "build_novel_packet",
            "Build a private ordered Markdown reading packet from valid chapters.",
            BuildNovelPacketInput,
            service.build_novel_packet,
        ),
        (
            "export_novel",
            "Build a private TXT, Markdown, or EPUB edition in chapter order.",
            ExportNovelInput,
            service.export_novel,
        ),
    )
    for name, description, input_model, operation in definitions:
        registry.register(
            ToolDefinition(
                name=name,
                description=description,
                parameters=input_model.model_json_schema(),
                handler=_handler(input_model, operation),
                max_result_chars=12_000,
                effect_kind=EffectKind.INTERNAL_WRITE,
                retry_safe=True,
            )
        )


def register_corpus_tools(
    registry: ToolRegistry,
    service: CorpusService,
) -> None:
    definitions: tuple[
        tuple[
            str,
            str,
            type[StrictModel],
            Callable[[Any], Awaitable[Any]],
        ],
        ...,
    ] = (
        (
            "inspect_novel_corpus",
            "Inspect the fixed private novel corpus and return metadata only.",
            InspectNovelCorpusInput,
            service.inspect_novel_corpus,
        ),
        (
            "fetch_novel_chapters",
            "Preview or fetch exactly one chapter or a closed chapter range.",
            FetchNovelChaptersInput,
            service.fetch_novel_chapters,
        ),
        (
            "update_novel_corpus",
            "Preview or repair known gaps, then optionally continue to the first 404.",
            UpdateNovelCorpusInput,
            service.update_novel_corpus,
        ),
        (
            "build_novel_packet",
            "Build a private ordered Markdown reading packet from valid chapters.",
            BuildNovelPacketInput,
            service.build_novel_packet,
        ),
        (
            "export_novel",
            "Build a private TXT, Markdown, or EPUB edition in chapter order.",
            ExportNovelInput,
            service.export_novel,
        ),
    )
    for name, description, input_model, operation in definitions:
        registry.register(
            ToolDefinition(
                name=name,
                description=description,
                parameters=input_model.model_json_schema(),
                handler=_handler(input_model, operation),
                max_result_chars=12_000,
                effect_kind=EffectKind.INTERNAL_WRITE,
                retry_safe=name in {
                    "inspect_novel_corpus",
                    "build_novel_packet",
                    "export_novel",
                },
            )
        )
