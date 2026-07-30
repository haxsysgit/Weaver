"""Deterministic HTML cleanup and chapter validation."""

from __future__ import annotations

import hashlib
import re
import unicodedata
from dataclasses import dataclass

from bs4 import BeautifulSoup

from .errors import CorpusError
from .models import ErrorCategory, FetchedPage
from .spec import ShadowSlaveSpec

_CHAPTER_NUMBER = re.compile(r"\bchapter\s*[-#:]*\s*(\d+)\b", re.IGNORECASE)
_SPACE = re.compile(r"[ \t\f\v]+")
_BLANK_LINES = re.compile(r"\n{3,}")


@dataclass(frozen=True, slots=True)
class CleanChapter:
    chapter: int
    visible_title: str
    stored_title: str
    paragraphs: tuple[str, ...]
    text: str
    sha256: str
    byte_count: int


@dataclass(frozen=True, slots=True)
class LocalValidation:
    valid: bool
    title: str | None
    sha256: str
    byte_count: int
    paragraph_count: int
    reason: str | None


def sha256_bytes(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def normalize_inline(value: str) -> str:
    value = unicodedata.normalize("NFC", value)
    value = value.replace("\u00a0", " ")
    value = value.replace("\r\n", "\n").replace("\r", "\n")
    lines = [_SPACE.sub(" ", line).strip() for line in value.split("\n")]
    return " ".join(line for line in lines if line).strip()


def normalize_document(value: str) -> str:
    value = unicodedata.normalize("NFC", value)
    value = value.replace("\u00a0", " ")
    value = value.replace("\r\n", "\n").replace("\r", "\n")
    lines = [line.rstrip() for line in value.split("\n")]
    normalized = _BLANK_LINES.sub("\n\n", "\n".join(lines)).strip()
    return normalized + "\n" if normalized else ""


def _chapter_number(title: str) -> int | None:
    match = _CHAPTER_NUMBER.search(title)
    return int(match.group(1)) if match else None


def _contains_marker(value: str, markers: tuple[str, ...]) -> bool:
    lowered = value.casefold()
    return any(marker.casefold() in lowered for marker in markers)


def _contains_placeholder(
    title: str | None,
    paragraphs: tuple[str, ...],
    markers: tuple[str, ...],
) -> bool:
    candidates = {
        candidate.casefold().strip()
        for candidate in ((title or ""), *paragraphs)
        if candidate.strip()
    }
    normalized_markers = {
        marker.casefold().strip()
        for marker in markers
    }
    return bool(candidates & normalized_markers)


def clean_fetched_page(
    page: FetchedPage,
    *,
    chapter: int,
    spec: ShadowSlaveSpec,
) -> CleanChapter:
    expected_url = spec.url_for(chapter).rstrip("/")
    final_url = page.final_url.rstrip("/")
    if page.status_code == 404:
        raise CorpusError(
            "The requested chapter returned 404.",
            ErrorCategory.NOT_FOUND,
            status_code=404,
            detail_code="http_404",
        )
    if page.status_code < 200 or page.status_code >= 300:
        raise CorpusError(
            "The chapter source returned a non-success status.",
            ErrorCategory.PROVIDER,
            status_code=page.status_code,
            detail_code="http_non_success",
        )
    if final_url != expected_url:
        raise CorpusError(
            "The chapter source returned an unexpected final URL.",
            ErrorCategory.VALIDATION,
            detail_code="final_url_mismatch",
            observed_url=page.final_url,
        )
    if not page.raw_html.strip():
        raise CorpusError(
            "The chapter source returned empty HTML.",
            ErrorCategory.EXTRACTION,
            detail_code="empty_html",
        )

    soup = BeautifulSoup(page.raw_html, "lxml")
    body = soup.select_one(spec.content_selector)
    if body is None:
        raise CorpusError(
            "The expected chapter container was not found.",
            ErrorCategory.EXTRACTION,
            detail_code="content_selector_missing",
        )

    visible_title = ""
    for selector in spec.title_selectors:
        title_node = soup.select_one(selector)
        if title_node is not None:
            visible_title = normalize_inline(title_node.get_text(" ", strip=True))
            if visible_title:
                break
    if not visible_title:
        raise CorpusError(
            "The visible chapter title was not found.",
            ErrorCategory.EXTRACTION,
            detail_code="title_missing",
        )
    visible_title = re.sub(
        rf"^{re.escape(spec.title)}\s*[-:|]\s*",
        "",
        visible_title,
        flags=re.IGNORECASE,
    ).strip()
    observed_chapter = _chapter_number(visible_title)
    if observed_chapter != chapter:
        raise CorpusError(
            "The visible chapter number does not match the requested chapter.",
            ErrorCategory.VALIDATION,
            detail_code="visible_chapter_mismatch",
            observed_chapter=observed_chapter,
        )

    for selector in spec.excluded_selectors:
        for node in body.select(selector):
            node.decompose()

    paragraphs = tuple(
        paragraph
        for node in body.find_all("p")
        if (paragraph := normalize_inline(node.get_text(" ", strip=True)))
    )
    if len(paragraphs) < spec.min_paragraphs:
        raise CorpusError(
            "The chapter contains too few paragraphs.",
            ErrorCategory.VALIDATION,
            detail_code="too_few_paragraphs",
        )

    body_text = "\n\n".join(paragraphs)
    if len(body_text) < spec.min_body_characters:
        raise CorpusError(
            "The chapter body is too short.",
            ErrorCategory.VALIDATION,
            detail_code="body_too_short",
        )
    if _contains_placeholder(visible_title, paragraphs, spec.placeholder_markers):
        raise CorpusError(
            "The chapter contains a placeholder marker.",
            ErrorCategory.VALIDATION,
            detail_code="placeholder_marker",
        )
    if _contains_marker(body_text, spec.unwanted_markers):
        raise CorpusError(
            "The chapter contains an unwanted site marker.",
            ErrorCategory.VALIDATION,
            detail_code="unwanted_site_marker",
        )

    stored_title = f"{spec.title}-{visible_title}"
    text = normalize_document(f"{stored_title}\n\n{body_text}")
    encoded = text.encode("utf-8")
    return CleanChapter(
        chapter=chapter,
        visible_title=visible_title,
        stored_title=stored_title,
        paragraphs=paragraphs,
        text=text,
        sha256=sha256_bytes(encoded),
        byte_count=len(encoded),
    )


def validate_local_bytes(
    value: bytes,
    *,
    chapter: int,
    spec: ShadowSlaveSpec,
) -> LocalValidation:
    digest = sha256_bytes(value)
    try:
        text = value.decode("utf-8")
    except UnicodeDecodeError:
        return LocalValidation(
            False,
            None,
            digest,
            len(value),
            0,
            "non_utf8",
        )

    normalized = text.replace("\r\n", "\n").replace("\r", "\n")
    parts = normalized.strip().split("\n", 1)
    title = parts[0].strip() if parts and parts[0].strip() else None
    body = parts[1].strip() if len(parts) == 2 else ""
    paragraphs = tuple(
        paragraph.strip()
        for paragraph in re.split(r"\n\s*\n", body)
        if paragraph.strip()
    )

    reason: str | None = None
    if _contains_placeholder(title, paragraphs, spec.placeholder_markers):
        reason = "placeholder"
    elif not title:
        reason = "empty"
    elif not title.startswith(f"{spec.title}-"):
        reason = "title_prefix"
    elif title[len(spec.title) + 1 :].casefold().startswith(
        spec.title.casefold()
    ):
        reason = "duplicate_novel_title"
    elif _chapter_number(title) != chapter:
        reason = "title_chapter_mismatch"
    elif len(body) < spec.min_body_characters:
        reason = "tiny"
    elif len(paragraphs) < spec.min_paragraphs:
        reason = "too_few_paragraphs"
    elif _contains_marker(body, spec.unwanted_markers):
        reason = "unwanted_marker"

    return LocalValidation(
        valid=reason is None,
        title=title,
        sha256=digest,
        byte_count=len(value),
        paragraph_count=len(paragraphs),
        reason=reason,
    )
