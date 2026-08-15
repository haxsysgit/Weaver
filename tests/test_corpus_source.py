from __future__ import annotations

from types import SimpleNamespace

import httpx
import pytest

from weaver.corpus.errors import CorpusError
from weaver.corpus.models import ErrorCategory
from weaver.corpus.source import DirectHttpChapterSource, FirecrawlChapterSource
from weaver.corpus.spec import SHADOW_SLAVE
import weaver.corpus.source as source_module


class StubSdk:
    def __init__(self, *, document=None, error=None, errors=()) -> None:
        self.document = document
        self.error = error
        self.errors = list(errors)  # consumed one per scrape call
        self.calls = []

    async def scrape(self, url, **kwargs):
        self.calls.append((url, kwargs))
        if self.errors:
            raise self.errors.pop(0)
        if self.error is not None:
            raise self.error
        return self.document


def document(*, chapter=1, status=200, raw_html="<html></html>"):
    return SimpleNamespace(
        raw_html=raw_html,
        metadata=SimpleNamespace(
            url=SHADOW_SLAVE.url_for(chapter),
            source_url=SHADOW_SLAVE.url_for(chapter),
            status_code=status,
        ),
    )


@pytest.mark.asyncio
async def test_firecrawl_adapter_requests_fresh_raw_html_with_no_fallback() -> None:
    sdk = StubSdk(document=document())
    source = FirecrawlChapterSource(
        api_key="test-only",
        spec=SHADOW_SLAVE,
        timeout_seconds=2,
        sdk_client=sdk,
    )

    result = await source.fetch(1, SHADOW_SLAVE.url_for(1))

    assert result.status_code == 200
    assert result.raw_html == "<html></html>"
    assert sdk.calls == [
        (
            SHADOW_SLAVE.url_for(1),
            {
                "formats": ["rawHtml"],
                "only_main_content": False,
                "max_age": 0,
            },
        )
    ]


def test_firecrawl_adapter_requires_explicit_app_credential() -> None:
    with pytest.raises(CorpusError) as captured:
        FirecrawlChapterSource(api_key=None, spec=SHADOW_SLAVE)
    assert captured.value.category is ErrorCategory.CONFIGURATION


def test_firecrawl_sdk_uses_explicit_timeout_and_no_retries(monkeypatch) -> None:
    captured = {}

    def fake_sdk(**kwargs):
        captured.update(kwargs)
        return StubSdk(document=document())

    monkeypatch.setattr(source_module, "AsyncFirecrawl", fake_sdk)

    FirecrawlChapterSource(
        api_key="test-only",
        spec=SHADOW_SLAVE,
        timeout_seconds=12.5,
    )

    assert captured == {
        "api_key": "test-only",
        "timeout": 12.5,
        "max_retries": 0,
    }


@pytest.mark.asyncio
async def test_firecrawl_adapter_refuses_arbitrary_url() -> None:
    source = FirecrawlChapterSource(
        api_key="test-only",
        spec=SHADOW_SLAVE,
        sdk_client=StubSdk(document=document()),
    )
    with pytest.raises(CorpusError) as captured:
        await source.fetch(1, "https://example.com/chapter-1")
    assert captured.value.category is ErrorCategory.SECURITY


@pytest.mark.asyncio
@pytest.mark.parametrize(
    ("error", "category"),
    [
        (TimeoutError(), ErrorCategory.TIMEOUT),
        (RuntimeError("unauthorized api key"), ErrorCategory.AUTHENTICATION),
        (RuntimeError("provider exploded"), ErrorCategory.PROVIDER),
        (RuntimeError("404 not found"), ErrorCategory.NOT_FOUND),
    ],
)
async def test_firecrawl_adapter_classifies_safe_failures(error, category) -> None:
    source = FirecrawlChapterSource(
        api_key="test-only",
        spec=SHADOW_SLAVE,
        sdk_client=StubSdk(error=error),
    )
    with pytest.raises(CorpusError) as captured:
        await source.fetch(1, SHADOW_SLAVE.url_for(1))
    assert captured.value.category is category


@pytest.mark.asyncio
async def test_transient_failures_are_retried_until_success() -> None:
    """Plan 018.5 slice 2: a timeout blip then a provider blip must not
    abort the refresh; the fetch retries and succeeds."""
    sdk = StubSdk(
        document=document(),
        errors=[TimeoutError(), RuntimeError("provider exploded")],
    )
    source = FirecrawlChapterSource(
        api_key="test-only",
        spec=SHADOW_SLAVE,
        timeout_seconds=2,
        max_attempts=3,
        backoff_base_seconds=0.01,
        sdk_client=sdk,
    )

    result = await source.fetch(1, SHADOW_SLAVE.url_for(1))

    assert result.status_code == 200
    assert len(sdk.calls) == 3  # two failures, then success


@pytest.mark.asyncio
async def test_persistent_transient_failure_gives_up_after_max_attempts() -> None:
    """Plan 018.5 slice 2: a source that keeps timing out must give up
    after max_attempts instead of retrying forever."""
    sdk = StubSdk(error=TimeoutError())
    source = FirecrawlChapterSource(
        api_key="test-only",
        spec=SHADOW_SLAVE,
        timeout_seconds=2,
        max_attempts=3,
        backoff_base_seconds=0.01,
        sdk_client=sdk,
    )

    with pytest.raises(CorpusError) as captured:
        await source.fetch(1, SHADOW_SLAVE.url_for(1))

    assert captured.value.category is ErrorCategory.TIMEOUT
    assert len(sdk.calls) == 3


@pytest.mark.asyncio
async def test_hard_failures_are_not_retried() -> None:
    """Plan 018.5 slice 2: not-found and auth errors are deterministic -
    retrying them would just hide the real problem or burn quota."""
    for error in (RuntimeError("404 not found"), RuntimeError("unauthorized")):
        sdk = StubSdk(error=error)
        source = FirecrawlChapterSource(
            api_key="test-only",
            spec=SHADOW_SLAVE,
            timeout_seconds=2,
            max_attempts=3,
            backoff_base_seconds=0.01,
            sdk_client=sdk,
        )
        with pytest.raises(CorpusError):
            await source.fetch(1, SHADOW_SLAVE.url_for(1))
        assert len(sdk.calls) == 1, error


# ---------------------------------------------------------------------------
# DirectHttpChapterSource (Plan 018.5 slice 2.5)
# ---------------------------------------------------------------------------


class StubAsyncClient:
    """Injected httpx.AsyncClient stand-in: returns queued responses."""

    def __init__(self, responses=()) -> None:
        self.responses = list(responses)
        self.calls = []

    async def get(self, url, **kwargs):
        self.calls.append(url)
        if self.responses:
            response = self.responses.pop(0)
            if isinstance(response, Exception):
                raise response
            return response
        raise AssertionError("no queued response for direct fetch")

    async def aclose(self) -> None:
        pass


def http_response(
    *,
    status=200,
    body=None,
    final_url=None,
):
    return SimpleNamespace(
        status_code=status,
        text=body if body is not None else "<html></html>",
        url=final_url or SHADOW_SLAVE.url_for(1),
    )


@pytest.mark.asyncio
async def test_direct_adapter_returns_fresh_page_with_browser_headers() -> None:
    client = StubAsyncClient([http_response(body="<html>story</html>")])
    source = DirectHttpChapterSource(
        spec=SHADOW_SLAVE,
        timeout_seconds=2,
        client=client,  # type: ignore[arg-type]
    )

    result = await source.fetch(1, SHADOW_SLAVE.url_for(1))

    assert result.status_code == 200
    assert result.raw_html == "<html>story</html>"
    assert result.final_url == SHADOW_SLAVE.url_for(1)
    assert client.calls == [SHADOW_SLAVE.url_for(1)]


@pytest.mark.asyncio
async def test_direct_adapter_classifies_status_codes() -> None:
    cases = [
        (404, ErrorCategory.NOT_FOUND, 1),  # hard: no retry
        (403, ErrorCategory.AUTHENTICATION, 1),  # hard: no retry
        (429, ErrorCategory.PROVIDER, 3),  # transient: retried
        (500, ErrorCategory.PROVIDER, 3),  # transient: retried
    ]
    for status, category, attempts in cases:
        client = StubAsyncClient([http_response(status=status)] * attempts)
        source = DirectHttpChapterSource(
            spec=SHADOW_SLAVE,
            timeout_seconds=2,
            max_attempts=3,
            backoff_base_seconds=0.01,
            client=client,  # type: ignore[arg-type]
        )
        with pytest.raises(CorpusError) as captured:
            await source.fetch(1, SHADOW_SLAVE.url_for(1))
        assert captured.value.category is category, status
        assert len(client.calls) == attempts, status


@pytest.mark.asyncio
async def test_direct_adapter_refuses_arbitrary_url() -> None:
    source = DirectHttpChapterSource(
        spec=SHADOW_SLAVE,
        timeout_seconds=2,
        client=StubAsyncClient(),  # type: ignore[arg-type]
    )
    with pytest.raises(CorpusError) as captured:
        await source.fetch(1, "https://example.com/chapter-1")
    assert captured.value.category is ErrorCategory.SECURITY


@pytest.mark.asyncio
async def test_direct_adapter_retries_transient_then_succeeds() -> None:
    client = StubAsyncClient(
        [
            httpx.ConnectTimeout("blip"),
            httpx.ReadTimeout("blip"),
            http_response(body="<html>story</html>"),
        ]
    )
    source = DirectHttpChapterSource(
        spec=SHADOW_SLAVE,
        timeout_seconds=2,
        max_attempts=3,
        backoff_base_seconds=0.01,
        client=client,  # type: ignore[arg-type]
    )

    result = await source.fetch(1, SHADOW_SLAVE.url_for(1))

    assert result.status_code == 200
    assert len(client.calls) == 3


@pytest.mark.asyncio
async def test_direct_adapter_gives_up_after_max_attempts() -> None:
    client = StubAsyncClient([httpx.ReadTimeout("blip")] * 3)
    source = DirectHttpChapterSource(
        spec=SHADOW_SLAVE,
        timeout_seconds=2,
        max_attempts=3,
        backoff_base_seconds=0.01,
        client=client,  # type: ignore[arg-type]
    )

    with pytest.raises(CorpusError) as captured:
        await source.fetch(1, SHADOW_SLAVE.url_for(1))

    assert captured.value.category is ErrorCategory.TIMEOUT
    assert len(client.calls) == 3


@pytest.mark.asyncio
async def test_direct_adapter_does_not_retry_hard_errors() -> None:
    client = StubAsyncClient([http_response(status=403)])
    source = DirectHttpChapterSource(
        spec=SHADOW_SLAVE,
        timeout_seconds=2,
        max_attempts=3,
        backoff_base_seconds=0.01,
        client=client,  # type: ignore[arg-type]
    )

    with pytest.raises(CorpusError) as captured:
        await source.fetch(1, SHADOW_SLAVE.url_for(1))

    assert captured.value.category is ErrorCategory.AUTHENTICATION
    assert len(client.calls) == 1
