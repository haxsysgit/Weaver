from __future__ import annotations

from types import SimpleNamespace

import pytest

from weaver.corpus.errors import CorpusError
from weaver.corpus.models import ErrorCategory
from weaver.corpus.source import FirecrawlChapterSource
from weaver.corpus.spec import SHADOW_SLAVE
import weaver.corpus.source as source_module


class StubSdk:
    def __init__(self, *, document=None, error=None) -> None:
        self.document = document
        self.error = error
        self.calls = []

    async def scrape(self, url, **kwargs):
        self.calls.append((url, kwargs))
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
