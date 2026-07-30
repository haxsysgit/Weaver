from __future__ import annotations

import json
import os

import pytest

from tests.corpus_support import chapter_text, make_project, write_chapter
from weaver.corpus.models import InspectNovelCorpusInput
from weaver.corpus.service import CorpusService


@pytest.mark.asyncio
async def test_inspection_reports_url_and_file_structure_without_prose(
    tmp_path,
) -> None:
    novel_root = make_project(tmp_path, [1, 3, 3, 2])
    with (novel_root / "urls.md").open("a", encoding="utf-8") as handle:
        handle.write("https://example.com/not-admitted\n")
    write_chapter(tmp_path, 1)
    write_chapter(
        tmp_path,
        2,
        value=b"[Chapter not available]\n",
        folder="1-2",
    )
    first_duplicate = write_chapter(tmp_path, 3)
    duplicate_dir = novel_root / "duplicate"
    duplicate_dir.mkdir()
    (duplicate_dir / "chapter-3.txt").write_text(
        chapter_text(3),
        encoding="utf-8",
    )
    os.chmod(first_duplicate, 0o644)

    service = CorpusService(project_root=tmp_path)
    result = await service.inspect_novel_corpus(
        InspectNovelCorpusInput(novel_id="shadow-slave")
    )

    assert result.counts["valid"] == 1
    assert result.counts["broken"] == 1
    assert result.counts["duplicated"] == 1
    assert result.counts["wrongly_placed"] == 0
    assert result.counts["overly_public"] >= 1
    assert result.url_list.duplicates == [3]
    assert [
        (item.start, item.end)
        for item in result.url_list.out_of_order_lines
    ] == [(4, 4)]
    assert [
        (item.start, item.end)
        for item in result.url_list.malformed_lines
    ] == [(5, 5)]
    rendered = result.model_dump_json()
    assert "Synthetic chapter" not in rendered
    assert "[Chapter not available]" not in rendered

    manifest = json.loads((tmp_path / result.manifest_path).read_text())
    assert manifest["entries"]
    assert all("text" not in entry and "raw_html" not in entry for entry in manifest["entries"])


@pytest.mark.asyncio
async def test_inspection_reports_gaps_wrong_folder_and_hash_conflict(
    tmp_path,
) -> None:
    make_project(tmp_path, [1, 2, 3])
    write_chapter(tmp_path, 1)
    misplaced = write_chapter(tmp_path, 3, folder="3-3")
    service = CorpusService(project_root=tmp_path)

    first = await service.inspect_novel_corpus(
        InspectNovelCorpusInput(novel_id="shadow-slave")
    )
    assert [(item.start, item.end) for item in first.ranges["missing"]] == [(2, 2)]
    assert first.ranges["wrongly_placed"][0].start == 3

    misplaced.write_text(
        chapter_text(3).replace("Stable inputs", "Changed inputs"),
        encoding="utf-8",
    )
    second = await service.inspect_novel_corpus(
        InspectNovelCorpusInput(novel_id="shadow-slave")
    )
    assert second.counts["conflicts"] == 1
    assert second.ranges["conflicts"][0].start == 3


@pytest.mark.asyncio
async def test_inspection_refuses_symlinked_corpus_root(tmp_path) -> None:
    real = tmp_path / "real"
    make_project(real, [1])
    project = tmp_path / "project"
    (project / "novels").mkdir(parents=True)
    (project / "novels" / "shadow-slave").symlink_to(
        real / "novels" / "shadow-slave",
        target_is_directory=True,
    )

    service = CorpusService(project_root=project)
    with pytest.raises(Exception) as captured:
        await service.inspect_novel_corpus(
            InspectNovelCorpusInput(novel_id="shadow-slave")
        )
    assert getattr(captured.value, "category", None).value == "security"


def test_url_list_parses_human_readable_anchor_lines(tmp_path) -> None:
    novel_root = make_project(tmp_path, [])
    (novel_root / "urls.md").write_text(
        '<a href="https://novelfire.net/book/shadow-slave/chapter-1">'
        "Chapter 1 - Synthetic</a>\n",
        encoding="utf-8",
    )
    service = CorpusService(project_root=tmp_path)

    data = service.store.parse_url_list()

    assert data.numbers == (1,)
    assert data.report.malformed_lines == []
    assert data.report.last_chapter == 1
