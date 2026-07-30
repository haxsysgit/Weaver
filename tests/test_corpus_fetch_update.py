from __future__ import annotations

import json
import os
import stat
from pathlib import Path

import pytest

from tests.corpus_support import (
    FakeChapterSource,
    chapter_text,
    fetched_page,
    make_project,
    write_chapter,
)
from weaver.corpus.errors import CorpusError
from weaver.corpus.models import (
    ErrorCategory,
    FetchNovelChaptersInput,
    UpdateNovelCorpusInput,
)
from weaver.corpus.service import CorpusService
from weaver.corpus.text import sha256_bytes


@pytest.mark.asyncio
async def test_fetch_preview_selects_exact_range_without_source_calls(
    tmp_path,
) -> None:
    make_project(tmp_path, [1, 2, 3, 4])
    write_chapter(tmp_path, 1)
    source = FakeChapterSource({})
    service = CorpusService(project_root=tmp_path, source=source)

    result = await service.fetch_novel_chapters(
        FetchNovelChaptersInput(
            novel_id="shadow-slave",
            start_chapter=2,
            end_chapter=3,
        )
    )

    assert source.calls == []
    assert [action.chapter for action in result.actions] == [2, 3]
    assert all(action.status.value == "previewed" for action in result.actions)
    assert not (
        tmp_path / "novels/shadow-slave/0001-0100/chapter-0002.txt"
    ).exists()


@pytest.mark.asyncio
async def test_broken_preview_exposes_only_old_hash_and_size(tmp_path) -> None:
    make_project(tmp_path, [1])
    write_chapter(
        tmp_path,
        1,
        value=b"[Chapter not available]\n",
    )
    service = CorpusService(project_root=tmp_path, source=FakeChapterSource({}))

    result = await service.fetch_novel_chapters(
        FetchNovelChaptersInput(
            novel_id="shadow-slave",
            start_chapter=1,
        )
    )

    action = result.actions[0]
    assert action.title is None
    assert action.sha256 is None
    assert action.byte_count is None
    assert action.old_sha256
    assert action.old_byte_count == 24
    receipt = (tmp_path / result.receipt_path).read_text()
    assert "[Chapter not available]" not in receipt


@pytest.mark.asyncio
async def test_exact_fetch_is_idempotent_and_records_url_after_save(
    tmp_path,
) -> None:
    make_project(tmp_path, [1])
    write_chapter(tmp_path, 1)
    source = FakeChapterSource({2: fetched_page(2)})
    service = CorpusService(project_root=tmp_path, source=source)
    request = FetchNovelChaptersInput(
        novel_id="shadow-slave",
        start_chapter=2,
        preview=False,
    )

    first = await service.fetch_novel_chapters(request)
    second = await service.fetch_novel_chapters(request)

    assert source.calls == [2]
    assert first.actions[0].status.value == "saved"
    assert second.actions[0].status.value == "skipped"
    urls = (tmp_path / "novels/shadow-slave/urls.md").read_text()
    assert urls.count("chapter-2") == 1


@pytest.mark.asyncio
async def test_default_update_repairs_known_files_and_stops_at_first_404(
    tmp_path,
) -> None:
    make_project(tmp_path, [1, 2, 3])
    write_chapter(tmp_path, 1)
    write_chapter(tmp_path, 3, value=b"[Chapter not available]\n")
    source = FakeChapterSource(
        {
            2: fetched_page(2),
            3: fetched_page(3),
            4: fetched_page(4, status_code=404, html=""),
        }
    )
    service = CorpusService(project_root=tmp_path, source=source)
    request = UpdateNovelCorpusInput(
        novel_id="shadow-slave",
        preview=False,
    )

    first = await service.update_novel_corpus(request)
    calls_after_first = list(source.calls)
    second = await service.update_novel_corpus(request)

    assert calls_after_first == [2, 3, 4]
    assert source.calls == [2, 3, 4, 4]
    assert first.stopped_at_chapter == 4
    assert first.stop_reason == "first_404"
    assert second.stopped_at_chapter == 4
    assert all(
        action.chapter not in {1, 2, 3}
        for action in second.actions
    )
    assert not (tmp_path / "novels/shadow-slave/urls.md").read_text().endswith(
        "chapter-4\n"
    )


@pytest.mark.asyncio
async def test_bounded_update_fetches_nothing_past_upper_bound(tmp_path) -> None:
    make_project(tmp_path, [1])
    write_chapter(tmp_path, 1)
    source = FakeChapterSource(
        {
            2: fetched_page(2),
            3: fetched_page(3),
        }
    )
    service = CorpusService(project_root=tmp_path, source=source)

    result = await service.update_novel_corpus(
        UpdateNovelCorpusInput(
            novel_id="shadow-slave",
            through_chapter=3,
            preview=False,
        )
    )

    assert source.calls == [2, 3]
    assert result.stop_reason == "through_chapter_reached"
    assert result.stopped_at_chapter is None


@pytest.mark.asyncio
async def test_3047_replacement_is_atomic_and_moves_legacy_folder(
    tmp_path,
) -> None:
    make_project(tmp_path, [3047])
    placeholder = write_chapter(
        tmp_path,
        3047,
        value=b"[Chapter not available]\n",
        folder="3001-3047",
    )
    old_value = placeholder.read_bytes()
    source = FakeChapterSource({3047: fetched_page(3047)})
    service = CorpusService(project_root=tmp_path, source=source)

    result = await service.fetch_novel_chapters(
        FetchNovelChaptersInput(
            novel_id="shadow-slave",
            start_chapter=3047,
            preview=False,
        )
    )

    action = result.actions[0]
    canonical = tmp_path / "novels/shadow-slave/3001-3100/chapter-3047.txt"
    assert action.status.value == "replaced"
    assert action.old_sha256 == sha256_bytes(old_value)
    assert action.old_byte_count == len(old_value)
    assert canonical.exists()
    assert not (tmp_path / "novels/shadow-slave/3001-3047").exists()
    assert canonical.read_bytes() != old_value


@pytest.mark.asyncio
@pytest.mark.parametrize("failure_stage", ["source", "validation", "write"])
async def test_failed_replacement_never_deletes_existing_file(
    tmp_path,
    monkeypatch,
    failure_stage,
) -> None:
    make_project(tmp_path, [3047])
    path = write_chapter(
        tmp_path,
        3047,
        value=b"[Chapter not available]\n",
        folder="3001-3047",
    )
    original = path.read_bytes()
    if failure_stage == "source":
        response = CorpusError("timeout", ErrorCategory.TIMEOUT)
    elif failure_stage == "validation":
        response = fetched_page(3047, html="")
    else:
        response = fetched_page(3047)
    source = FakeChapterSource({3047: response})
    service = CorpusService(project_root=tmp_path, source=source)
    if failure_stage == "write":
        monkeypatch.setattr(
            service.store,
            "commit_chapter",
            lambda **_kwargs: (_ for _ in ()).throw(
                CorpusError("write", ErrorCategory.FILESYSTEM)
            ),
        )

    result = await service.fetch_novel_chapters(
        FetchNovelChaptersInput(
            novel_id="shadow-slave",
            start_chapter=3047,
            preview=False,
        )
    )

    surviving = list((tmp_path / "novels/shadow-slave").rglob("chapter-3047.txt"))
    assert len(surviving) == 1
    assert surviving[0].read_bytes() == original
    assert result.actions[0].status.value == "failed"


def test_atomic_replace_failure_after_folder_move_preserves_placeholder(
    tmp_path,
    monkeypatch,
) -> None:
    make_project(tmp_path, [3047])
    legacy = write_chapter(
        tmp_path,
        3047,
        value=b"[Chapter not available]\n",
        folder="3001-3047",
    )
    original = legacy.read_bytes()
    service = CorpusService(project_root=tmp_path)
    real_replace = os.replace
    replace_count = 0

    def fail_second_replace(source: Path, destination: Path) -> None:
        nonlocal replace_count
        replace_count += 1
        if replace_count == 2:
            raise OSError("synthetic final replace failure")
        real_replace(source, destination)

    monkeypatch.setattr(
        "weaver.corpus.storage.os.replace",
        fail_second_replace,
    )

    with pytest.raises(CorpusError) as captured:
        service.store.commit_chapter(
            chapter=3047,
            value=chapter_text(3047).encode("utf-8"),
            old_path=legacy,
            expected_old_sha256=sha256_bytes(original),
        )

    canonical = (
        tmp_path
        / "novels"
        / "shadow-slave"
        / "3001-3100"
        / "chapter-3047.txt"
    )
    assert captured.value.category is ErrorCategory.FILESYSTEM
    assert canonical.read_bytes() == original
    assert len(
        list((tmp_path / "novels" / "shadow-slave").rglob("chapter-3047.txt"))
    ) == 1


@pytest.mark.asyncio
async def test_concurrent_valid_file_is_preserved_as_conflict(tmp_path) -> None:
    make_project(tmp_path, [1])

    class ConcurrentSource:
        async def fetch(self, chapter, url):
            write_chapter(tmp_path, 1)
            return fetched_page(1)

    service = CorpusService(project_root=tmp_path, source=ConcurrentSource())
    result = await service.fetch_novel_chapters(
        FetchNovelChaptersInput(
            novel_id="shadow-slave",
            start_chapter=1,
            preview=False,
        )
    )

    assert result.actions[0].status.value == "conflict"
    assert result.actions[0].error_category is ErrorCategory.CONFLICT
    assert (
        tmp_path / "novels/shadow-slave/0001-0100/chapter-0001.txt"
    ).read_text() == chapter_text(1)


@pytest.mark.asyncio
async def test_mutating_tool_hardens_corpus_and_receipts_are_metadata_only(
    tmp_path,
) -> None:
    novel_root = make_project(tmp_path, [1])
    path = write_chapter(tmp_path, 1, mode=0o644)
    os.chmod(novel_root, 0o755)
    service = CorpusService(
        project_root=tmp_path,
        source=FakeChapterSource({}),
    )

    result = await service.fetch_novel_chapters(
        FetchNovelChaptersInput(
            novel_id="shadow-slave",
            start_chapter=1,
            preview=False,
        )
    )

    assert stat.S_IMODE(novel_root.stat().st_mode) == 0o700
    assert stat.S_IMODE(path.stat().st_mode) == 0o600
    receipt = tmp_path / result.receipt_path
    assert stat.S_IMODE(receipt.parent.stat().st_mode) == 0o700
    assert stat.S_IMODE(receipt.stat().st_mode) == 0o600
    rendered = receipt.read_text()
    assert "Synthetic chapter" not in rendered
    assert "FIRECRAWL_API_KEY" not in rendered
    assert "reasoning_content" not in rendered
    assert json.loads(rendered)["metadata_only"] is True
