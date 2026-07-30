"""The only admitted novel source specification."""

from __future__ import annotations

from dataclasses import dataclass

from .models import NovelId


@dataclass(frozen=True, slots=True)
class ShadowSlaveSpec:
    novel_id: NovelId = NovelId.SHADOW_SLAVE
    title: str = "Shadow Slave"
    language: str = "en"
    domain: str = "novelfire.net"
    slug: str = "shadow-slave"
    url_template: str = (
        "https://novelfire.net/book/shadow-slave/chapter-{chapter}"
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
