"""Reading-packet assembly (Plan 15 slice 3)."""

from pathlib import Path

import pytest

from weaver.agent.tools import ToolResult
from weaver.retrieval.library import make_passage_handle
from weaver.retrieval.packet import EXPAND_LINES, PACKET_CHAR_CAP, build_packet
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


def _completed_read_result(chapter: int, start: int, end: int) -> ToolResult:
    result = _read_result(chapter, start, end)
    assert result.result is not None
    result.result["result"] = {
        "chapter": chapter,
        "line_start": start,
        "line_end": end,
        "end_of_chapter": True,
    }
    return result


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
async def test_packet_marks_citations_covered_by_an_opened_chapter(
    tmp_path: Path,
) -> None:
    svc = _service(tmp_path)
    packet = build_packet(
        svc,
        [_completed_read_result(104, 10, 40)],
        candidate="Saint came from the stone knight (ch. 104).",
        user_chapter=104,
    )

    assert packet is not None
    assert packet.board.cited_chapters == (104,)
    assert packet.board.unsupported_chapters == ()
    assert packet.board.claims[0].citation_coverage == "citation_covered"
    assert packet.board.direct_sources[0].chapter == 104
    assert packet.board.direct_sources[0].chapter_end_reached is True
    assert "chapter boundary is not proof" in packet.text
    assert "citation gaps: none" in packet.text


@pytest.mark.asyncio
async def test_packet_keeps_missing_candidate_citations_visible(
    tmp_path: Path,
) -> None:
    svc = _service(tmp_path)
    packet = build_packet(
        svc,
        [_read_result(98, 5, 8)],
        candidate="The answer happened much later (chapter 999).",
        user_chapter=999,
    )

    assert packet is not None
    assert packet.board.cited_chapters == (999,)
    assert packet.board.unsupported_chapters == (999,)
    assert "citation gaps: chapter 999 was not opened" in packet.text


@pytest.mark.asyncio
async def test_packet_marks_an_uncited_candidate_as_a_gap(tmp_path: Path) -> None:
    svc = _service(tmp_path)
    packet = build_packet(
        svc,
        [_read_result(98, 5, 8)],
        candidate="The hunting party leader died there.",
        user_chapter=98,
    )

    assert packet is not None
    assert packet.board.uncited_claims == (1,)
    assert packet.board.claims[0].citation_coverage == "missing_citation"
    assert "citation gaps: claim 1 has no chapter citation" in packet.text


@pytest.mark.asyncio
async def test_packet_maps_each_candidate_claim_separately(tmp_path: Path) -> None:
    svc = _service(tmp_path)
    packet = build_packet(
        svc,
        [_read_result(98, 5, 8)],
        candidate="The leader died there (ch. 98). The weapon came from chapter 999.",
        user_chapter=999,
    )

    assert packet is not None
    assert [claim.citation_coverage for claim in packet.board.claims] == [
        "citation_covered",
        "unopened_chapter",
    ]
    assert packet.board.claims[0].cited_chapters == (98,)
    assert packet.board.claims[1].unsupported_chapters == (999,)


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
async def test_packet_size_cap_keeps_board_and_framing(tmp_path: Path) -> None:
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
        cap_override=700,
    )
    assert packet is not None
    assert len(packet.text) <= 700
    assert "evidence board" in packet.text
    assert "spoiler framing" in packet.text


@pytest.mark.asyncio
async def test_packet_board_lists_only_passages_that_survive_trimming(
    tmp_path: Path,
) -> None:
    svc = _service(tmp_path)
    packet = build_packet(
        svc,
        [_read_result(98, 5, 8), _read_result(104, 10, 12)],
        candidate="The answer spans ch. 98 and ch. 104.",
        user_chapter=104,
        cap_override=900,
    )

    assert packet is not None
    packet_chapters = {
        source.chapter for source in packet.board.direct_sources
    }
    for chapter in packet_chapters:
        assert f"--- chapter {chapter}, lines" in packet.text
    assert "direct sources: chapter 98" not in packet.text
    assert packet.board.unsupported_chapters == (98,)


def test_packet_uses_one_shared_request_safe_cap() -> None:
    assert PACKET_CHAR_CAP == 24_000


@pytest.mark.asyncio
async def test_packet_carries_beat_context(tmp_path: Path) -> None:
    svc = _service(tmp_path)
    beats = [
        {
            "id": "beat-caster",
            "title": "Caster's death",
            "label": "death",
            "volume": 2,
            "chapter_start": 104,
            "chapter_end": 104,
            "summary": "Sunny kills Caster",
            "anchors": [],
        }
    ]
    judge = SpoilerJudge(beats=beats)
    packet = build_packet(
        svc,
        [_read_result(104, 10, 12)],
        user_chapter=100,
        judge=judge,
    )
    assert packet is not None
    assert "beat: Caster's death" in packet.text
    assert packet.verdict.mode == "ask_first"  # beat label applies


@pytest.mark.asyncio
async def test_packet_beat_context_only_for_matching_chapters(tmp_path: Path) -> None:
    svc = _service(tmp_path)
    judge = SpoilerJudge(
        beats=[
            {
                "id": "beat-x",
                "title": "X climax",
                "label": "twist",
                "volume": 2,
                "chapter_start": 104,
                "chapter_end": 104,
                "summary": "x",
                "anchors": [],
            }
        ]
    )
    packet = build_packet(
        svc,
        [_read_result(98, 5, 8)],
        user_chapter=98,
        judge=judge,
    )
    assert packet is not None
    assert "beat:" not in packet.text
    assert packet.verdict.mode == "full"  # ch98 not in any beat


@pytest.mark.asyncio
async def test_packet_never_frames_an_unsaved_position_as_chapter_none(
    tmp_path: Path,
) -> None:
    svc = _service(tmp_path)
    unknown = build_packet(svc, [_read_result(98, 5, 8)], user_chapter=None)
    finished = build_packet(
        svc, [_read_result(98, 5, 8)], user_chapter=None, spoiler_mode="none"
    )
    assert unknown is not None and finished is not None
    assert "chapter None" not in unknown.text
    assert "chapter None" not in finished.text
    assert "has not said how far they have read" in unknown.text
    assert "ask how far they have read" in unknown.text
    assert "whole novel" in finished.text
