"""Plan 031: scrape debris never reaches Weaver, and chapter files stay intact.

Two exact site lines were found in late chapters: an ad blocker's notice
(sometimes mid-chapter) and a "report errors" footer. The reader blanks
them, keeping every line number, so citations stay valid and the raw
files stay byte-identical.
"""

from __future__ import annotations

from weaver.corpus.spec import SHADOW_SLAVE
from weaver.corpus.text import is_debris_line
from weaver.retrieval.library import ChapterIndex

FOOTER = (
    "If you find any errors (non-standard content, ads redirect, broken "
    "links, etc..), Please let us know so we can fix it as soon as possible."
)
NOTICE = "This page has been blocked by an extension"
CHAPTER = (
    "Shadow Slave-Chapter 3150: Synthetic\n"
    "\n"
    "Sunny shook his head.\n"
    "\n"
    f"{NOTICE}\n"
    "\n"
    "The thread held.\n"
    "\n"
    f"{FOOTER}\n"
)


def shelve(tmp_path):
    folder = tmp_path / "3101-3200"
    folder.mkdir(parents=True)
    path = folder / "chapter-3150.txt"
    path.write_text(CHAPTER, encoding="utf-8")
    return path


def test_both_known_lines_are_debris_and_story_lines_are_not() -> None:
    assert is_debris_line(NOTICE, SHADOW_SLAVE)
    assert is_debris_line(FOOTER, SHADOW_SLAVE)
    assert not is_debris_line("Sunny shook his head.", SHADOW_SLAVE)
    assert not is_debris_line(f"He said: {NOTICE}", SHADOW_SLAVE)


def test_opened_passages_blank_debris_but_keep_line_numbers(tmp_path) -> None:
    path = shelve(tmp_path)
    index = ChapterIndex(tmp_path)

    passage = index.open_lines(3150, 1, 99)

    assert NOTICE not in passage.text
    assert "let us know" not in passage.text
    assert "The thread held." in passage.text
    assert index.line_count(3150) == len(CHAPTER.splitlines())
    assert index.open_lines(3150, 7, 7).text == "The thread held."
    assert path.read_text(encoding="utf-8") == CHAPTER  # file untouched


def test_exact_search_and_browse_never_surface_debris(tmp_path) -> None:
    shelve(tmp_path)
    index = ChapterIndex(tmp_path)

    assert index.find_text("blocked by an extension") == []
    assert index.find_text("let us know") == []
    assert index.find_text("thread held")[0]["line"] == 7
    preview = index.browse(3150, 3150)[0]
    assert NOTICE not in str(preview)
