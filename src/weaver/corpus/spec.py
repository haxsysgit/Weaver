"""The only admitted novel source specification."""

from __future__ import annotations

from dataclasses import dataclass

from .models import NovelId


@dataclass(frozen=True, slots=True)
class ShadowSlaveSpec:
    novel_id: NovelId = NovelId.SHADOW_SLAVE
    title: str = "Shadow Slave"
    language: str = "en"
    # Plan 031 (2026-11-01): novelfire.net now redirects every chapter
    # through readnovel.site to novelphoenix.com. The shelf's extractor
    # reproduced chapters 3158 and 3160 byte for byte from the new host.
    domain: str = "novelphoenix.com"
    slug: str = "shadow-slave"
    url_template: str = (
        "https://novelphoenix.com/novel/shadow-slave/chapter-{chapter}"
    )
    # Earlier addresses the URL ledger may still hold. Accepted when the
    # ledger is read; new chapters always append url_template.
    legacy_url_templates: tuple[str, ...] = (
        "https://novelfire.net/book/shadow-slave/chapter-{chapter}",
    )
    content_selector: str = "#chapter-article .d-chapter-content"
    title_selectors: tuple[str, ...] = (
        "#chapter-article h1",
        "#chapter-article .chapter-title",
        "main h1",
        "h1",
    )
    excluded_selectors: tuple[str, ...] = (
        "script",
        "style",
        "noscript",
        "iframe",
        "img",
        "picture",
        "video",
        "audio",
        "svg",
        "canvas",
        "button",
        "form",
        "nav",
        "footer",
        ".ads",
        ".ad",
        ".advertisement",
        ".chapter-nav",
        ".navigation",
        ".controls",
        ".next-chapter",
        ".prev-chapter",
        ".modal",
        ".overlay",
        ".blocker",
        ".blocker-content",
        "[data-blocker]",
        "[aria-hidden='true']",
    )
    placeholder_markers: tuple[str, ...] = (
        "[chapter not available]",
        "chapter not available",
        "this chapter is not available",
        "chapter will be available soon",
        "coming soon",
        "page not found",
    )
    # The source's page for a chapter that does not exist yet (served
    # with HTTP 200, so it needs its own not-found signal).
    missing_chapter_titles: tuple[str, ...] = ("page chapter not found",)
    # Whole lines a scrape can leave inside a chapter (an ad blocker's
    # notice was found in chapter 3150). Dropped on fetch and on read.
    debris_lines: tuple[str, ...] = (
        "this page has been blocked by an extension",
    )
    unwanted_markers: tuple[str, ...] = (
        "please disable your ad blocker",
        "disable adblock",
        "click here to continue",
        "enable javascript to continue",
        "checking your browser",
        "cloudflare ray id",
    )
    min_body_characters: int = 500
    min_paragraphs: int = 3
    chapters_per_folder: int = 100
    legacy_last_folder: str = "3001-3047"
    canonical_last_folder: str = "3001-3100"

    @property
    def referer(self) -> str:
        return f"https://{self.domain}/"

    def url_for(self, chapter: int) -> str:
        if chapter < 1:
            raise ValueError("chapter must be positive")
        return self.url_template.format(chapter=chapter)

    def canonical_folder(self, chapter: int) -> str:
        if chapter < 1:
            raise ValueError("chapter must be positive")
        start = ((chapter - 1) // self.chapters_per_folder) * self.chapters_per_folder + 1
        end = start + self.chapters_per_folder - 1
        return f"{start:04d}-{end:04d}"


SHADOW_SLAVE = ShadowSlaveSpec()


def get_spec(novel_id: NovelId) -> ShadowSlaveSpec:
    if novel_id is not NovelId.SHADOW_SLAVE:
        raise ValueError("unsupported novel")
    return SHADOW_SLAVE
