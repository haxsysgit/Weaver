from __future__ import annotations

import asyncio
import json
import stat
from pathlib import Path

import ebooklib
import pytest
from ebooklib import epub

from tests.corpus_support import make_project, write_chapter
from weaver.agent.tools import (
    ToolExecutionContext,
    ToolExecutionPolicy,
    ToolRegistry,
)
from weaver.corpus.errors import CorpusError
from weaver.corpus.models import (
    BuildNovelPacketInput,
    ExportNovelInput,
    FetchNovelChaptersInput,
    InspectNovelCorpusInput,
)
from weaver.corpus.service import CorpusService
from weaver.corpus.tools import register_corpus_tools, service_from_environment


def prepared_service(tmp_path: Path) -> CorpusService:
    make_project(tmp_path, [1, 2, 3])
    for chapter in (1, 2, 3):
        write_chapter(tmp_path, chapter)
    return CorpusService(project_root=tmp_path)


@pytest.mark.asyncio
async def test_packet_is_ordered_idempotent_and_records_source_hashes(
    tmp_path,
) -> None:
    service = prepared_service(tmp_path)
    request = BuildNovelPacketInput(
        novel_id="shadow-slave",
        chapters=[3, 1, 2],
    )

    first = await service.build_novel_packet(request)
    second = await service.build_novel_packet(request)

    assert first.packet_path == second.packet_path
    assert first.packet_sha256 == second.packet_sha256
    assert first.chapters == [1, 2, 3]
    packet = (tmp_path / first.packet_path).read_text()
    assert (
        packet.index("Chapter 1")
        < packet.index("Chapter 2")
        < packet.index("Chapter 3")
    )
    # A constant/wrong hash would pass the equality above; pin it against
    # the actual file bytes.
    from weaver.corpus.text import sha256_bytes

    assert first.packet_sha256 == sha256_bytes(
        (tmp_path / first.packet_path).read_bytes()
    )
    assert len(first.source_hashes) == 3
    manifest = json.loads((tmp_path / first.manifest_path).read_text())
    assert [item["chapter"] for item in manifest["source_hashes"]] == [1, 2, 3]
    assert stat.S_IMODE((tmp_path / first.packet_path).stat().st_mode) == 0o600


@pytest.mark.asyncio
async def test_txt_markdown_and_epub_exports_are_ordered_and_reproducible(
    tmp_path,
) -> None:
    service = prepared_service(tmp_path)

    txt = await service.export_novel(
        ExportNovelInput(
            novel_id="shadow-slave",
            format="txt",
            through_chapter=3,
        )
    )
    markdown = await service.export_novel(
        ExportNovelInput(
            novel_id="shadow-slave",
            format="md",
            through_chapter=3,
        )
    )
    epub_first = await service.export_novel(
        ExportNovelInput(
            novel_id="shadow-slave",
            format="epub",
            through_chapter=3,
        )
    )
    epub_second = await service.export_novel(
        ExportNovelInput(
            novel_id="shadow-slave",
            format="epub",
            through_chapter=3,
        )
    )

    txt_text = (tmp_path / txt.export_path).read_text()
    md_text = (tmp_path / markdown.export_path).read_text()
    assert (
        txt_text.index("Chapter 1")
        < txt_text.index("Chapter 2")
        < txt_text.index("Chapter 3")
    )
    assert (
        md_text.index("Chapter 1")
        < md_text.index("Chapter 2")
        < md_text.index("Chapter 3")
    )
    assert md_text.startswith("# Shadow Slave\n")
    # Body content: each chapter's first-paragraph marker appears exactly
    # once (ordering alone would pass a wrong-body-but-ordered export).
    for chapter in (1, 2, 3):
        assert txt_text.count(f"Synthetic chapter {chapter} paragraph 1") == 1
        assert md_text.count(f"Synthetic chapter {chapter} paragraph 1") == 1
    assert epub_first.export_sha256 == epub_second.export_sha256

    book = epub.read_epub(str(tmp_path / epub_first.export_path))
    documents = [
        item
        for item in book.get_items_of_type(ebooklib.ITEM_DOCUMENT)
        if item.file_name.startswith("chapter-")
    ]
    assert len(documents) == 3
    assert len(book.toc) == 3
    assert [item.file_name for item in documents] == [
        "chapter-1.xhtml",
        "chapter-2.xhtml",
        "chapter-3.xhtml",
    ]
    assert all(b"Synthetic chapter" in item.get_content() for item in documents)


@pytest.mark.asyncio
async def test_exports_refuse_any_gap_or_broken_source(tmp_path) -> None:
    make_project(tmp_path, [1, 2])
    write_chapter(tmp_path, 1)
    service = CorpusService(project_root=tmp_path)

    with pytest.raises(CorpusError) as captured:
        await service.export_novel(
            ExportNovelInput(
                novel_id="shadow-slave",
                format="txt",
                through_chapter=2,
            )
        )
    assert captured.value.category.value == "validation"


@pytest.mark.asyncio
async def test_agent_registry_exposes_five_typed_metadata_only_tools(
    tmp_path,
) -> None:
    service = prepared_service(tmp_path)
    registry = ToolRegistry()
    register_corpus_tools(registry, service)
    names = (
        "inspect_novel_corpus",
        "fetch_novel_chapters",
        "update_novel_corpus",
        "build_novel_packet",
        "export_novel",
    )
    schemas = registry.active_schemas(names)

    assert [schema.name for schema in schemas] == list(names)
    assert all(
        schema.parameters.get("additionalProperties") is False for schema in schemas
    )
    context = ToolExecutionContext(
        session_id="session",
        turn_id="turn",
        call_id="call",
        cancel_event=asyncio.Event(),
    )
    dispatched = await registry.dispatch(
        "inspect_novel_corpus",
        '{"novel_id":"shadow-slave"}',
        active_names=names,
        policy=ToolExecutionPolicy.maintenance(),
        context=context,
    )
    assert dispatched.ok
    assert dispatched.result["ok"] is True
    rendered = json.dumps(dispatched.result)
    assert "Synthetic chapter" not in rendered
    assert "raw_html" not in rendered
    assert '"content"' not in rendered

    invalid = await registry.dispatch(
        "fetch_novel_chapters",
        '{"novel_id":"shadow-slave","start_chapter":0}',
        active_names=names,
        policy=ToolExecutionPolicy.maintenance(),
        context=context,
    )
    assert invalid.ok
    assert invalid.result["ok"] is False
    assert invalid.result["error_category"] == "validation"


@pytest.mark.asyncio
async def test_large_preview_stays_within_agent_result_limit(tmp_path) -> None:
    make_project(tmp_path, list(range(1, 83)))
    service = CorpusService(project_root=tmp_path)
    registry = ToolRegistry()
    register_corpus_tools(registry, service)
    context = ToolExecutionContext(
        session_id="session",
        turn_id="turn",
        call_id="large-preview",
        cancel_event=asyncio.Event(),
    )

    dispatched = await registry.dispatch(
        "fetch_novel_chapters",
        json.dumps(
            FetchNovelChaptersInput(
                novel_id="shadow-slave",
                start_chapter=1,
                end_chapter=82,
            ).model_dump(mode="json")
        ),
        active_names=("fetch_novel_chapters",),
        policy=ToolExecutionPolicy.maintenance(),
        context=context,
    )

    assert dispatched.ok
    result = dispatched.result["result"]
    assert result["total_action_count"] == 82
    assert result["action_counts"] == {"previewed": 82}
    assert result["actions_truncated"] is True
    assert len(result["actions"]) == 10
    assert len(json.dumps(dispatched.result)) < 12_000


def test_live_environment_service_requires_firecrawl_key(
    tmp_path,
    monkeypatch,
) -> None:
    monkeypatch.setenv("WEAVER_PROJECT_ROOT", str(tmp_path))
    monkeypatch.delenv("FIRECRAWL_API_KEY", raising=False)

    with pytest.raises(CorpusError) as captured:
        service_from_environment(live_source=True)

    assert captured.value.category.value == "configuration"
    assert captured.value.detail_code == "credential_missing"


@pytest.mark.asyncio
async def test_symlinked_private_state_and_path_escape_are_refused(
    tmp_path,
) -> None:
    make_project(tmp_path, [1])
    write_chapter(tmp_path, 1)
    outside = tmp_path / "outside"
    outside.mkdir()
    state_link = tmp_path / "linked-state"
    state_link.symlink_to(outside, target_is_directory=True)
    service = CorpusService(
        project_root=tmp_path,
        state_root=state_link,
    )

    with pytest.raises(CorpusError) as captured:
        await service.inspect_novel_corpus(
            InspectNovelCorpusInput(novel_id="shadow-slave")
        )
    assert captured.value.category.value == "security"

    normal = prepared_service(tmp_path / "normal")
    with pytest.raises(CorpusError) as escaped:
        normal.store.assert_safe_path(
            tmp_path / "escape.txt",
            base=normal.layout.novel_root,
        )
    assert escaped.value.category.value == "security"
