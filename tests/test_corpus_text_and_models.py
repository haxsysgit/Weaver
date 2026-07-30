from __future__ import annotations

import pytest
from pydantic import ValidationError

from tests.corpus_support import chapter_html, chapter_text, fetched_page
from weaver.corpus.errors import CorpusError
from weaver.corpus.models import (
    BuildNovelPacketInput,
    ErrorCategory,
    FetchNovelChaptersInput,
    InspectNovelCorpusInput,
)
from weaver.corpus.spec import SHADOW_SLAVE
from weaver.corpus.text import clean_fetched_page, validate_local_bytes


def test_tool_inputs_are_strict_and_json_schema_safe() -> None:
    request = FetchNovelChaptersInput(
        novel_id="shadow-slave",
        start_chapter=4,
        end_chapter=6,
    )
    assert list(request.chapters) == [4, 5, 6]
    schema = FetchNovelChaptersInput.model_json_schema()
    assert schema["additionalProperties"] is False
    assert schema["properties"]["preview"]["default"] is True

    with pytest.raises(ValidationError):
        FetchNovelChaptersInput(
            novel_id="shadow-slave",
            start_chapter=6,
            end_chapter=4,
        )
    with pytest.raises(ValidationError):
        InspectNovelCorpusInput(novel_id="../../private")
    with pytest.raises(ValidationError):
        BuildNovelPacketInput(novel_id="shadow-slave", chapters=[1, 1])


def test_html_cleanup_is_deterministic_and_preserves_paragraph_order() -> None:
    page = fetched_page(7)

    first = clean_fetched_page(page, chapter=7, spec=SHADOW_SLAVE)
    second = clean_fetched_page(page, chapter=7, spec=SHADOW_SLAVE)

    assert first == second
    assert first.stored_title == "Shadow Slave-Chapter 7: Synthetic Test"
    assert len(first.paragraphs) == 4
    assert "Advertisement must go" not in first.text
    assert "credential-looking-script" not in first.text
    assert "disable your ad blocker" not in first.text
    assert first.text.endswith("\n")
    assert "\r" not in first.text
    assert first.paragraphs[0].startswith("Synthetic chapter 7 paragraph 1")
    assert first.paragraphs[-1].startswith("Synthetic chapter 7 paragraph 4")


def test_html_cleanup_removes_site_novel_prefix_before_stored_title() -> None:
    page = fetched_page(
        7,
        html=chapter_html(7).replace(
            "Chapter 7: Synthetic Test",
            "Shadow Slave - Chapter 7 Synthetic Test",
            1,
        ),
    )

    cleaned = clean_fetched_page(page, chapter=7, spec=SHADOW_SLAVE)

    assert cleaned.stored_title == "Shadow Slave-Chapter 7 Synthetic Test"
    assert "Shadow Slave-Shadow Slave" not in cleaned.text


@pytest.mark.parametrize(
    ("page", "category"),
    [
        (
            fetched_page(8, html=""),
            ErrorCategory.EXTRACTION,
        ),
        (
            fetched_page(8, html=chapter_html(8, include_container=False)),
            ErrorCategory.EXTRACTION,
        ),
        (
            fetched_page(8, html=chapter_html(8, title_chapter=9)),
            ErrorCategory.VALIDATION,
        ),
        (
            fetched_page(
                8,
                html=chapter_html(8, body_override="<p>tiny</p>"),
            ),
            ErrorCategory.VALIDATION,
        ),
        (
            fetched_page(
                8,
                final_url=SHADOW_SLAVE.url_for(9),
            ),
            ErrorCategory.VALIDATION,
        ),
    ],
)
def test_html_validation_rejects_bad_pages(page, category) -> None:
    with pytest.raises(CorpusError) as captured:
        clean_fetched_page(page, chapter=8, spec=SHADOW_SLAVE)
    assert captured.value.category is category


@pytest.mark.parametrize(
    ("value", "reason"),
    [
        (b"", "empty"),
        (b"\xff\xfe\xfa", "non_utf8"),
        (b"[Chapter not available]\n", "placeholder"),
        (chapter_text(3, title_chapter=4).encode(), "title_chapter_mismatch"),
        (
            b"Shadow Slave-Chapter 3: Tiny\n\nsmall\n",
            "tiny",
        ),
        (
            chapter_text(3).replace(
                "Shadow Slave-Chapter",
                "Shadow Slave-Shadow Slave - Chapter",
                1,
            ).encode(),
            "duplicate_novel_title",
        ),
    ],
)
def test_local_validation_categorizes_broken_files(value, reason) -> None:
    result = validate_local_bytes(value, chapter=3, spec=SHADOW_SLAVE)
    assert not result.valid
    assert result.reason == reason


def test_local_validation_accepts_strict_utf8_chapter() -> None:
    result = validate_local_bytes(
        chapter_text(3).encode("utf-8"),
        chapter=3,
        spec=SHADOW_SLAVE,
    )
    assert result.valid
    assert result.title == "Shadow Slave-Chapter 3: Synthetic Test"


def test_placeholder_words_inside_long_natural_sentence_are_not_placeholder() -> None:
    value = chapter_text(3).replace(
        "Stable inputs",
        "The chapter not available yesterday became available today. Stable inputs",
        1,
    ).encode()

    result = validate_local_bytes(value, chapter=3, spec=SHADOW_SLAVE)

    assert result.valid
