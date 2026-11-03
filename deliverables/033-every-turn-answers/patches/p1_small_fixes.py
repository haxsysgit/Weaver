"""Plan 033 patch 1: close the search index, volume 13 ends at 3160,
and the shipped search description's missing word.

Run from the repository root:

    uv run python deliverables/033-every-turn-answers/patches/p1_small_fixes.py

Every edit must match exactly once; otherwise the script stops before
writing anything and names the edit that failed. Running it a second
time refuses and writes nothing, which is safe.
"""

from __future__ import annotations

EDITS: list[tuple[str, str, str]] = []  # (path, old, new)
NEW_FILES: dict[str, str] = {}


def edit(path: str, old: str, new: str) -> None:
    EDITS.append((path, old, new))


# 1. ChatRuntime.close() releases the embedded search index.
edit(
    "src/weaver/chat_runtime.py",
    """    async def close(self) -> None:
        if self.sponsored is not None:
            await self.sponsored.close()
        if self.prefs is not None:
            await self.prefs.close()
        await self.session.close()
""",
    """    async def close(self) -> None:
        if self.sponsored is not None:
            await self.sponsored.close()
        if self.prefs is not None:
            await self.prefs.close()
        await self.session.close()
        # Plan 033: release the embedded search index. It allows one client
        # per process, and Plan 032 found a second runtime failing every
        # search while the first still held it.
        library = self.library
        client = getattr(library, "client", None)
        if client is not None:
            client.close()
            library.client = None
""",
)

# 2. Volume 13 ends at chapter 3160; volume 14 is the open-ended one.
edit(
    "src/weaver/spoilers/judge.py",
    """# ch2261-2720, Vol 11 The Song of Ariadne ch2721-3000, Vol 12 ch3001-3127,
# Vol 13 Prelude to Apocalypse from ch3128 (still running).""",
    """# ch2261-2720, Vol 11 The Song of Ariadne ch2721-3000, Vol 12 ch3001-3127,
# Vol 13 Prelude to Apocalypse ch3128-3160 (chapter 3160 ends with the Spell
# announcing the end of volume thirteen; owner confirmed in the Plan 032
# decision, 2026-11-03), Vol 14 from ch3161 (still running).""",
)
edit(
    "src/weaver/spoilers/judge.py",
    "VOLUME_ENDS = (95, 350, 600, 750, 1060, 1230, 1590, 1840, 2260, 2720, 3000, 3127)",
    "VOLUME_ENDS = (95, 350, 600, 750, 1060, 1230, 1590, 1840, 2260, 2720, 3000, 3127, 3160)",
)
edit(
    "src/weaver/spoilers/judge.py",
    '    """Volume number containing the chapter (1-13)."""',
    '    """Volume number containing the chapter (1-14)."""',
)
edit(
    "src/weaver/web/frontend/lib/volumes.ts",
    """// weaver.spoilers.judge.VOLUME_ENDS). The current volume, 13, is""",
    """// weaver.spoilers.judge.VOLUME_ENDS). The current volume, 14, is""",
)
edit(
    "src/weaver/web/frontend/lib/volumes.ts",
    "export const FINISHED_VOLUME_ENDS = [95, 350, 600, 750, 1060, 1230, 1590, 1840, 2260, 2720, 3000, 3127];",
    "export const FINISHED_VOLUME_ENDS = [95, 350, 600, 750, 1060, 1230, 1590, 1840, 2260, 2720, 3000, 3127, 3160];",
)
edit(
    "src/weaver/web/frontend/lib/volumes.test.ts",
    """    [3128, 13],
    [3232, 13],""",
    """    [3128, 13],
    [3160, 13],
    [3161, 14],
    [3232, 14],""",
)
edit(
    "src/weaver/web/frontend/lib/volumes.test.ts",
    "    expect(volumeForChapter(9000)).toBe(13);",
    "    expect(volumeForChapter(9000)).toBe(14);",
)
edit(
    "tests/test_spoilers.py",
    """    assert volume_of(3128) == 13
    assert volume_of(3160) == 13
""",
    """    assert volume_of(3128) == 13
    assert volume_of(3160) == 13
    assert volume_of(3161) == 14
""",
)
edit(
    "tests/test_shelf_edge.py",
    """    assert volume_of(3128) == 13
    assert volume_of(3232) == 13
    assert volume_of(9000) == 13""",
    """    assert volume_of(3128) == 13
    assert volume_of(3160) == 13
    assert volume_of(3161) == 14
    assert volume_of(3232) == 14
    assert volume_of(9000) == 14""",
)

edit(
    "tests/test_spoilers.py",
    "    assert volume_of(3200) == 13",
    "    assert volume_of(3200) == 14",
)

# 3. The shipped semantic_search description was missing a word.
edit(
    "src/weaver/retrieval/tools.py",
    '''        "scores are not proof of the right chapter. The whole novel is always "
        "automatically and can only be narrowed."''',
    '''        "scores are not proof of the right chapter. The whole novel is always "
        "searched automatically and can only be narrowed."''',
)

# New test file: the runtime closes the index, and the description reads right.
NEW_FILES["tests/test_plan033_small_fixes.py"] = '''"""Plan 033: the runtime releases the search index on close, and the
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
    assert "always \\"\\n        \\"automatically and" not in source
'''


if __name__ == "__main__":
    from _apply import run

    run(EDITS, NEW_FILES)
