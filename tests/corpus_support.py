from __future__ import annotations

import os
from pathlib import Path

from weaver.corpus.models import FetchedPage
from weaver.corpus.spec import SHADOW_SLAVE


def synthetic_paragraph(chapter: int, index: int) -> str:
    return (
        f"Synthetic chapter {chapter} paragraph {index} exists only for "
        "deterministic corpus testing. It repeats enough neutral words to "
        "exercise length validation, ordered extraction, hashing, packet "
        "assembly, and export readability without copying any private source. "
        "Stable inputs should always create stable outputs."
    )


def chapter_text(
    chapter: int,
    *,
    title_chapter: int | None = None,
    paragraph_count: int = 4,
) -> str:
    visible = title_chapter if title_chapter is not None else chapter
    paragraphs = [
        synthetic_paragraph(chapter, index)
        for index in range(1, paragraph_count + 1)
    ]
    return (
        f"Shadow Slave-Chapter {visible}: Synthetic Test\n\n"
        + "\n\n".join(paragraphs)
        + "\n"
    )


def chapter_html(
    chapter: int,
    *,
    title_chapter: int | None = None,
    paragraph_count: int = 4,
    body_override: str | None = None,
    include_container: bool = True,
) -> str:
    visible = title_chapter if title_chapter is not None else chapter
    if body_override is None:
        paragraphs = "".join(
            f"<p>{synthetic_paragraph(chapter, index)}</p>"
            for index in range(1, paragraph_count + 1)
        )
    else:
        paragraphs = body_override
    article = (
        '<article id="chapter-article">'
        f"<h1>Chapter {visible}: Synthetic Test</h1>"
        '<div class="d-chapter-content">'
        "<script>credential-looking-script-must-go</script>"
        '<div class="ads"><p>Advertisement must go.</p></div>'
        f"{paragraphs}"
        '<img src="blocker.png" alt="please disable your ad blocker">'
        "</div></article>"
    )
    return f"<html><body>{article if include_container else paragraphs}</body></html>"


def fetched_page(
    chapter: int,
    *,
    status_code: int = 200,
    final_url: str | None = None,
    html: str | None = None,
) -> FetchedPage:
    url = SHADOW_SLAVE.url_for(chapter)
    return FetchedPage(
        url=url,
        final_url=final_url or url,
        status_code=status_code,
        raw_html=chapter_html(chapter) if html is None else html,
    )


class FakeChapterSource:
    def __init__(self, responses: dict[int, FetchedPage | Exception]) -> None:
        self.responses = responses
        self.calls: list[int] = []

    async def fetch(self, chapter: int, url: str) -> FetchedPage:
        assert url == SHADOW_SLAVE.url_for(chapter)
        self.calls.append(chapter)
        response = self.responses[chapter]
        if isinstance(response, Exception):
            raise response
        return response


def make_project(root: Path, url_chapters: list[int]) -> Path:
    novel_root = root / "novels" / "shadow-slave"
    novel_root.mkdir(parents=True, mode=0o700)
    os.chmod(novel_root, 0o700)
    urls = novel_root / "urls.md"
    urls.write_text(
        "".join(f"{SHADOW_SLAVE.url_for(chapter)}\n" for chapter in url_chapters),
        encoding="utf-8",
    )
    os.chmod(urls, 0o600)
    return novel_root


def write_chapter(
    project_root: Path,
    chapter: int,
    *,
    value: bytes | None = None,
    folder: str | None = None,
    mode: int = 0o600,
) -> Path:
    directory = (
        project_root
        / "novels"
        / "shadow-slave"
        / (folder or SHADOW_SLAVE.canonical_folder(chapter))
    )
    directory.mkdir(parents=True, exist_ok=True, mode=0o700)
    os.chmod(directory, 0o700)
    path = directory / f"chapter-{chapter:04d}.txt"
    path.write_bytes(
        value if value is not None else chapter_text(chapter).encode("utf-8")
    )
    os.chmod(path, mode)
    return path
