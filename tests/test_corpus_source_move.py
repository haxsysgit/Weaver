"""Plan 031: the source moved from novelfire.net to novelphoenix.com.

novelfire.net now redirects every chapter through readnovel.site to
novelphoenix.com (observed 2026-11-01). The shelf's extractor reproduced
chapters 3158 and 3160 byte for byte from the new host, so the new host is
the current source. The URL ledger keeps its old lines untouched: the old
address stays accepted as history, and new chapters append the new one.
"""

from __future__ import annotations

import pytest

from tests.corpus_support import chapter_html, fetched_page, make_project
from weaver.corpus.errors import CorpusError
from weaver.corpus.models import ErrorCategory
from weaver.corpus.service import CorpusService
from weaver.corpus.source import DirectHttpChapterSource
from weaver.corpus.spec import SHADOW_SLAVE
from weaver.corpus.text import clean_fetched_page

LEGACY = "https://novelfire.net/book/shadow-slave/chapter-{chapter}"


def test_the_current_source_is_novelphoenix() -> None:
    assert SHADOW_SLAVE.url_for(3161) == (
        "https://novelphoenix.com/novel/shadow-slave/chapter-3161"
    )


def test_ledger_accepts_old_lines_and_appends_the_new_address(tmp_path) -> None:
    novel_root = make_project(tmp_path, [])
    (novel_root / "urls.md").write_text(
        f'<a href="{LEGACY.format(chapter=1)}">Chapter 1 - Old</a>\n'
        f"{LEGACY.format(chapter=2)}\n",
        encoding="utf-8",
    )
    service = CorpusService(project_root=tmp_path)

    service.store.ensure_url_recorded(3)
    data = service.store.parse_url_list()

    assert data.numbers == (1, 2, 3)
    assert data.report.malformed_lines == []
    lines = (novel_root / "urls.md").read_text(encoding="utf-8").splitlines()
    assert lines[1] == LEGACY.format(chapter=2)
    assert lines[2] == SHADOW_SLAVE.url_for(3)


def test_the_new_hosts_missing_chapter_page_reads_as_not_found() -> None:
    page = fetched_page(
        3233,
        html=(
            "<html><head><title>Page Chapter Not Found</title></head>"
            "<body><h1>Shadow Slave</h1></body></html>"
        ),
    )

    with pytest.raises(CorpusError) as captured:
        clean_fetched_page(page, chapter=3233, spec=SHADOW_SLAVE)

    assert captured.value.category is ErrorCategory.NOT_FOUND
    assert captured.value.detail_code == "missing_chapter_page"


def test_known_scrape_debris_lines_are_dropped_on_fetch() -> None:
    debris = "<p>This page has been blocked by an extension</p>"
    page = fetched_page(9, html=chapter_html(9, paragraph_count=4).replace(
        '<div class="d-chapter-content">',
        f'<div class="d-chapter-content">{debris}',
    ))

    clean = clean_fetched_page(page, chapter=9, spec=SHADOW_SLAVE)

    assert len(clean.paragraphs) == 4
    assert "blocked by an extension" not in clean.text


def test_direct_fetcher_sends_the_current_sources_referer() -> None:
    source = DirectHttpChapterSource(spec=SHADOW_SLAVE)
    try:
        assert source._client.headers["Referer"] == "https://novelphoenix.com/"
    finally:
        import asyncio

        asyncio.run(source._client.aclose())
