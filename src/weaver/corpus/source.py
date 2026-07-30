"""Chapter-source protocol and the one admitted Firecrawl adapter."""

from __future__ import annotations

import asyncio
import time
from typing import Any, Protocol

from firecrawl import AsyncFirecrawl

from .errors import CorpusError
from .models import ErrorCategory, FetchedPage
from .spec import ShadowSlaveSpec


class ChapterSource(Protocol):
    async def fetch(self, chapter: int, url: str) -> FetchedPage: ...


class FirecrawlChapterSource:
    """Fetch raw HTML for one fixed NovelFire chapter URL."""

    def __init__(
        self,
        *,
        api_key: str | None,
        spec: ShadowSlaveSpec,
        timeout_seconds: float = 45.0,
        min_interval_seconds: float = 7.0,
        sdk_client: Any | None = None,
    ) -> None:
        if not api_key or not api_key.strip():
            raise CorpusError(
                "FIRECRAWL_API_KEY is required for live corpus fetching.",
                ErrorCategory.CONFIGURATION,
                detail_code="credential_missing",
            )
        self._spec = spec
        self._timeout_seconds = timeout_seconds
        self._min_interval_seconds = max(min_interval_seconds, 0.0)
        self._last_started_at: float | None = None
        self._rate_lock = asyncio.Lock()
        self._client = sdk_client or AsyncFirecrawl(
            api_key=api_key,
            timeout=timeout_seconds,
            max_retries=0,
        )

    async def fetch(self, chapter: int, url: str) -> FetchedPage:
        expected = self._spec.url_for(chapter)
        if url != expected:
            raise CorpusError(
                "The requested URL is outside the fixed novel specification.",
                ErrorCategory.SECURITY,
                detail_code="url_outside_spec",
            )
        try:
            async with self._rate_lock:
                if self._last_started_at is not None:
                    remaining = (
                        self._min_interval_seconds
                        - (time.monotonic() - self._last_started_at)
                    )
                    if remaining > 0:
                        await asyncio.sleep(remaining)
                self._last_started_at = time.monotonic()
                document = await asyncio.wait_for(
                    self._client.scrape(
                        url,
                        formats=["rawHtml"],
                        only_main_content=False,
                        max_age=0,
                    ),
                    timeout=self._timeout_seconds,
                )
        except (asyncio.TimeoutError, TimeoutError) as exc:
            raise CorpusError(
                "The Firecrawl request timed out.",
                ErrorCategory.TIMEOUT,
                detail_code="sdk_timeout",
            ) from exc
        except Exception as exc:
            status_code = getattr(exc, "status_code", None)
            category = self._category_for_exception(exc, status_code)
            raise CorpusError(
                "The Firecrawl request failed.",
                category,
                status_code=status_code,
                detail_code=f"sdk_{type(exc).__name__}",
            ) from exc

        metadata = getattr(document, "metadata", None)
        status_code = int(getattr(metadata, "status_code", None) or 200)
        final_url = (
            getattr(metadata, "url", None)
            or getattr(metadata, "source_url", None)
            or url
        )
        raw_html = getattr(document, "raw_html", None) or ""
        return FetchedPage(
            url=url,
            final_url=str(final_url),
            status_code=status_code,
            raw_html=str(raw_html),
        )

    @staticmethod
    def _category_for_exception(
        exc: Exception,
        status_code: int | None,
    ) -> ErrorCategory:
        if status_code in {401, 403}:
            return ErrorCategory.AUTHENTICATION
        if status_code == 404:
            return ErrorCategory.NOT_FOUND
        if status_code == 429:
            return ErrorCategory.PROVIDER
        lowered = str(exc).casefold()
        if any(marker in lowered for marker in ("unauthorized", "api key", "auth")):
            return ErrorCategory.AUTHENTICATION
        if "timeout" in lowered:
            return ErrorCategory.TIMEOUT
        if "404" in lowered or "not found" in lowered:
            return ErrorCategory.NOT_FOUND
        return ErrorCategory.PROVIDER
