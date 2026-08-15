"""Chapter-source protocol and the two admitted fetch adapters.

FirecrawlChapterSource (external API) and DirectHttpChapterSource
(no external service, self-served: plain HTTP with browser headers,
Plan 018.5 slice 2.5). Both implement the same protocol, classify
failures the same way, and retry transient errors with backoff.
"""

from __future__ import annotations

import asyncio
import time
from typing import Any, Protocol

import httpx
from firecrawl import AsyncFirecrawl

from .errors import CorpusError
from .models import ErrorCategory, FetchedPage
from .spec import ShadowSlaveSpec


class ChapterSource(Protocol):
    async def fetch(self, chapter: int, url: str) -> FetchedPage: ...


#: A plausible desktop Chrome request set. Cloudflare keys on
#: fingerprint (TLS + headers), not just the UA line: sending the UA
#: alone is what gets bots flagged. Direct fetching lives or dies by
#: how well this set mirrors a real browser (Plan 018.5 slice 2.5).
_BROWSER_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
    ),
    "Accept": (
        "text/html,application/xhtml+xml,application/xml;q=0.9,"
        "image/avif,image/webp,image/apng,*/*;q=0.8"
    ),
    "Accept-Language": "en-US,en;q=0.9",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "Referer": "https://novelfire.net/",
}


class FirecrawlChapterSource:
    """Fetch raw HTML for one fixed NovelFire chapter URL.

    Transient failures (timeout, provider hiccup, rate limit) are
    retried with backoff up to max_attempts; hard failures (auth,
    config, not-found, security) raise immediately. Retrying lives here
    so every fetch path - gap repair, first-404 probing, single fetch -
    gets the same resilience (Plan 018.5 slice 2).
    """

    #: error categories worth retrying: a blip now may succeed in a
    #: moment. Everything else is deterministic and retrying it just
    #: hides the real problem.
    RETRYABLE_CATEGORIES = frozenset(
        {ErrorCategory.TIMEOUT, ErrorCategory.PROVIDER}
    )

    def __init__(
        self,
        *,
        api_key: str | None,
        spec: ShadowSlaveSpec,
        timeout_seconds: float = 45.0,
        min_interval_seconds: float = 7.0,
        max_attempts: int = 3,
        backoff_base_seconds: float = 2.0,
        sdk_client: Any | None = None,
    ) -> None:
        if not api_key or not api_key.strip():
            raise CorpusError(
                "FIRECRAWL_API_KEY is required for live corpus fetching.",
                ErrorCategory.CONFIGURATION,
                detail_code="credential_missing",
            )
        if max_attempts < 1:
            raise ValueError("max_attempts must be at least 1")
        self._spec = spec
        self._timeout_seconds = timeout_seconds
        self._min_interval_seconds = max(min_interval_seconds, 0.0)
        self._max_attempts = max_attempts
        self._backoff_base_seconds = max(backoff_base_seconds, 0.0)
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
        last_error: CorpusError | None = None
        for attempt in range(self._max_attempts):
            try:
                return await self._fetch_once(chapter, url)
            except CorpusError as exc:
                last_error = exc
                is_final = attempt + 1 >= self._max_attempts
                if exc.category not in self.RETRYABLE_CATEGORIES or is_final:
                    raise
                await asyncio.sleep(
                    self._backoff_base_seconds * (2**attempt)
                )
        raise last_error  # pragma: no cover - loop above always raises or returns

    async def _fetch_once(self, chapter: int, url: str) -> FetchedPage:
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


class DirectHttpChapterSource:
    """Fetch one fixed NovelFire chapter URL with plain HTTP - no
    external scraping service (Plan 018.5 slice 2.5).

    Uses httpx (already a transitive dep) with a desktop-Chrome header
    set over HTTP/2. Same retry contract as FirecrawlChapterSource:
    transient categories retried with backoff, hard errors raised
    immediately. The site is Cloudflare-fronted, so this adapter lives
    or dies by its fingerprint; the CLI keeps firecrawl as fallback via
    --source direct|firecrawl.
    """

    RETRYABLE_CATEGORIES = frozenset(
        {ErrorCategory.TIMEOUT, ErrorCategory.PROVIDER}
    )

    def __init__(
        self,
        *,
        spec: ShadowSlaveSpec,
        timeout_seconds: float = 30.0,
        min_interval_seconds: float = 3.0,
        max_attempts: int = 3,
        backoff_base_seconds: float = 2.0,
        http2: bool = True,
        client: httpx.AsyncClient | None = None,
    ) -> None:
        if max_attempts < 1:
            raise ValueError("max_attempts must be at least 1")
        self._spec = spec
        self._timeout_seconds = timeout_seconds
        self._min_interval_seconds = max(min_interval_seconds, 0.0)
        self._max_attempts = max_attempts
        self._backoff_base_seconds = max(backoff_base_seconds, 0.0)
        self._last_started_at: float | None = None
        self._rate_lock = asyncio.Lock()
        self._client = client or httpx.AsyncClient(
            http2=http2,
            timeout=timeout_seconds,
            follow_redirects=True,
            headers=_BROWSER_HEADERS,
        )

    async def fetch(self, chapter: int, url: str) -> FetchedPage:
        expected = self._spec.url_for(chapter)
        if url != expected:
            raise CorpusError(
                "The requested URL is outside the fixed novel specification.",
                ErrorCategory.SECURITY,
                detail_code="url_outside_spec",
            )
        last_error: CorpusError | None = None
        for attempt in range(self._max_attempts):
            try:
                return await self._fetch_once(chapter, url)
            except CorpusError as exc:
                last_error = exc
                is_final = attempt + 1 >= self._max_attempts
                if exc.category not in self.RETRYABLE_CATEGORIES or is_final:
                    raise
                await asyncio.sleep(
                    self._backoff_base_seconds * (2**attempt)
                )
        raise last_error  # pragma: no cover

    async def _fetch_once(self, chapter: int, url: str) -> FetchedPage:
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
                response = await asyncio.wait_for(
                    self._client.get(url),
                    timeout=self._timeout_seconds,
                )
        except (asyncio.TimeoutError, TimeoutError) as exc:
            raise CorpusError(
                "The direct request timed out.",
                ErrorCategory.TIMEOUT,
                detail_code="http_timeout",
            ) from exc
        except httpx.HTTPError as exc:
            raise CorpusError(
                "The direct request failed.",
                self._category_for_exception(exc),
                detail_code=f"http_{type(exc).__name__}",
            ) from exc

        if response.status_code == 404:
            raise CorpusError(
                "The requested chapter returned 404.",
                ErrorCategory.NOT_FOUND,
                status_code=404,
                detail_code="http_404",
            )
        if response.status_code in {401, 403}:
            raise CorpusError(
                "The chapter source refused the request.",
                ErrorCategory.AUTHENTICATION,
                status_code=response.status_code,
                detail_code="http_blocked",
            )
        if response.status_code == 429:
            raise CorpusError(
                "The chapter source rate-limited the request.",
                ErrorCategory.PROVIDER,
                status_code=429,
                detail_code="http_rate_limited",
            )
        if not (200 <= response.status_code < 300):
            raise CorpusError(
                "The chapter source returned a non-success status.",
                ErrorCategory.PROVIDER,
                status_code=response.status_code,
                detail_code="http_non_success",
            )
        return FetchedPage(
            url=url,
            final_url=str(response.url),
            status_code=response.status_code,
            raw_html=response.text,
        )

    @staticmethod
    def _category_for_exception(exc: Exception) -> ErrorCategory:
        if isinstance(exc, httpx.TimeoutException):
            return ErrorCategory.TIMEOUT
        return ErrorCategory.PROVIDER
