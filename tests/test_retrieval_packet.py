"""Reading-packet assembly (Plan 15 slice 3)."""

from pathlib import Path

import pytest

from weaver.agent.tools import ToolResult
from weaver.retrieval.library import make_passage_handle
from weaver.retrieval.packet import EXPAND_LINES, build_packet
from weaver.retrieval.tools import LibraryService
from weaver.spoilers.judge import SpoilerJudge


def _write_chapter(novel: Path, n: int, lines: list[str]) -> None:
    lo = ((n - 1) // 100) * 100 + 1
    d = novel / f"{lo:04d}-{lo + 99:04d}"
    d.mkdir(parents=True, exist_ok=True)
    (d / f"chapter-{n:04d}.txt").write_text("\n".join(lines), encoding="utf-8")


def _write_notebook(nb: Path, n: int, statements: list[dict]) -> None:
    (nb / "reading").mkdir(parents=True, exist_ok=True)
    (nb / "reading" / f"{n:04d}.json").write_text(
        __import__("json").dumps({"chapter": n, "statements": statements}),
        encoding="utf-8",
    )


def _service(tmp_path: Path) -> LibraryService:
    novel = tmp_path / "novel"
    nb = tmp_path / "nb"
    lines = [f"line {i}" for i in range(1, 41)]  # 40 lines, line 1 is the title
    _write_chapter(novel, 98, lines)
    _write_chapter(novel, 104, lines)
    _write_notebook(
        nb,
        104,
        [
            {
                "id": "statement:chapter-0104:01",
                "kind": "confirmed_fact",
                "statement": "Saint was created by Lost From Light in the dark.",
                "evidence": [{"chapter": 104, "location": {"line_start": 3, "line_end": 5}}],
            }
        ],
    )
    return LibraryService(novel, nb)


def _read_result(chapter: int, start: int, end: int) -> ToolResult:
    return ToolResult(
        ok=True,
        result={
            "durable_evidence": {
                "source_kind": "novel",
                "chapter": chapter,
                "line_start": start,
                "line_end": end,
                "source_hash": "abcd1234",
                "passage_handle": make_passage_handle(chapter, start, end),
            },
            "chapter": chapter,
        },
    )


@pytest.mark.asyncio
async def test_packet_opens_expanded_windows_and_cites(tmp_path: Path) -> None:
    svc = _service(tmp_path)
    packet = build_packet(
        svc,
        [_read_result(104, 10, 12)],
        user_chapter=100,
        spoiler_mode="protect",
    )
    assert packet is not None
    # expanded window clamps to line 2 (line 1 is the title heading)
    assert f"chapter 104, lines 2-{12 + EXPAND_LINES}" in packet.text
    assert "line 10" in packet.text
    assert packet.verdict.mode == "guarded"  # chapter 104 > user chapter 100


@pytest.mark.asyncio
async def test_packet_includes_notebook_statements(tmp_path: Path) -> None:
    svc = _service(tmp_path)
    hit = {
        "statement_id": "statement:chapter-0104:01",
        "kind": "confirmed_fact",
        "chapter": 104,
        "text": "Saint was created by Lost From Light in the dark.",
        "score": 0.9,
    }
    result = ToolResult(
        ok=True,
        result={"query": "saint", "canonical_hits": [], "notebook_hits": [hit]},
    )
    packet = build_packet(svc, [result], user_chapter=104, spoiler_mode="protect")
    assert packet is not None
    assert "statement:chapter-0104:01" in packet.text
    assert "Saint was created by Lost From Light" in packet.text
    assert packet.verdict.mode == "full"  # at the user's position


@pytest.mark.asyncio
async def test_packet_asks_first_for_heavy_labels(tmp_path: Path) -> None:
    svc = _service(tmp_path)
    judge = SpoilerJudge({"statement:chapter-0104:01": "death"})
    hit = {
        "statement_id": "statement:chapter-0104:01",
        "kind": "confirmed_fact",
        "chapter": 104,
        "text": "Saint was created by Lost From Light in the dark.",
        "score": 0.9,
    }
    result = ToolResult(
        ok=True,
        result={"query": "saint", "canonical_hits": [], "notebook_hits": [hit]},
    )
    packet = build_packet(
        svc,
        [result],
        user_chapter=100,
        spoiler_mode="protect",
        judge=judge,
    )
    assert packet is not None
    assert packet.verdict.mode == "ask_first"
    assert "ask whether they want the spoil" in packet.text


@pytest.mark.asyncio
async def test_packet_none_without_evidence(tmp_path: Path) -> None:
    svc = _service(tmp_path)
    assert build_packet(svc, [], user_chapter=100) is None
    failed = ToolResult(ok=False, error_code="effect_not_allowed", error="nope")
    assert build_packet(svc, [failed], user_chapter=100) is None


@pytest.mark.asyncio
async def test_packet_skips_errors_and_dedupes(tmp_path: Path) -> None:
    svc = _service(tmp_path)
    duplicate = _read_result(104, 10, 12)
    packet = build_packet(
        svc,
        [_read_result(98, 5, 8), duplicate, duplicate],
        user_chapter=98,
    )
    assert packet is not None
    assert packet.text.count("chapter 98, lines") == 1
    assert packet.text.count("chapter 104, lines") == 1
    assert packet.verdict.mode == "guarded"  # 104 beyond 98


@pytest.mark.asyncio
async def test_packet_size_cap_keeps_framing_and_statements(tmp_path: Path) -> None:
    svc = _service(tmp_path)
    hit = {
        "statement_id": "statement:chapter-0104:01",
        "kind": "confirmed_fact",
        "chapter": 104,
        "text": "Saint was created by Lost From Light in the dark.",
        "score": 0.9,
    }
    result = ToolResult(
        ok=True,
        result={"query": "saint", "canonical_hits": [], "notebook_hits": [hit]},
    )
    packet = build_packet(
        svc,
        [result, _read_result(98, 5, 8)],
        user_chapter=100,
        tier="awakened",
        cap_override=100,  # tiny cap for the test
    )
    assert packet is not None
    assert "spoiler framing" in packet.text
    assert "statement:chapter-0104:01" in packet.text
