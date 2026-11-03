"""Plan 033: the runtime releases the search index on close, and the
shipped search description says what it does."""

from __future__ import annotations

import inspect

from weaver.chat_runtime import open_chat_runtime
from weaver.retrieval.tools import register_reading_tools


class _Client:
    def __init__(self) -> None:
        self.closed = 0

    def close(self) -> None:
        self.closed += 1


class _Library:
    def __init__(self) -> None:
        self.client = _Client()


async def test_closing_the_runtime_releases_the_search_index(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path / "state", live=False, surface="web")
    library = _Library()
    client = library.client
    runtime.library = library
    await runtime.close()
    assert client.closed == 1
    assert library.client is None


async def test_closing_a_runtime_with_no_index_open_is_fine(tmp_path) -> None:
    runtime = await open_chat_runtime(tmp_path / "state", live=False, surface="web")
    library = _Library()
    library.client = None
    runtime.library = library
    await runtime.close()
    assert library.client is None


def test_the_search_description_says_the_whole_novel_is_searched() -> None:
    source = inspect.getsource(register_reading_tools)
    assert '"searched automatically and can only be narrowed."' in source
    assert "always \"\n        \"automatically and" not in source
