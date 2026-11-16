"""Plan 034 slice 4: the arc map."""

from weaver.arc_map import ArcMap, parse_arc_ledger

LEDGER = """
# Story Arcs and Volumes

<!-- a comment -->

## ARC 1 — The First Nightmare (ch 1-~10) — VOLUME 1: Child of Shadows
Sunny's trial.

## ARC 2 — Academy Days (ch ~11-~35) — VOLUME 1 continues
The Academy.

## ARC 3.5 — Demon of Change (ch 96-350) — VOLUME 2: Demon of Change
The long road.
"""


def _map() -> ArcMap:
    return parse_arc_ledger(LEDGER)


def test_the_headings_parse_in_order() -> None:
    arcs = _map().arcs
    assert [arc.name for arc in arcs] == [
        "The First Nightmare",
        "Academy Days",
        "Demon of Change",
    ]
    assert [(arc.start, arc.end) for arc in arcs] == [(1, 10), (11, 35), (96, 350)]


def test_the_volume_is_read_when_it_is_named() -> None:
    arcs = _map().arcs
    assert arcs[0].volume == 1
    assert arcs[0].volume_name == "Child of Shadows"
    assert arcs[1].volume == 1
    assert arcs[2].volume == 2


def test_the_map_reports_how_far_it_reaches() -> None:
    assert _map().through == 350
    assert "(mapped through chapter 350)" in _map().prompt_block()


def test_a_chapter_is_placed_in_its_arc() -> None:
    assert _map().at(5).name == "The First Nightmare"
    assert _map().at(20).name == "Academy Days"
    assert _map().at(350).name == "Demon of Change"
    assert _map().at(400) is None


def test_the_prompt_block_stops_at_the_reader_chapter() -> None:
    block = _map().prompt_block(30)
    assert "1-10 The First Nightmare, vol. 1" in block
    assert "11-30 Academy Days, vol. 1 (so far)" in block
    assert "Demon of Change" not in block


def test_the_prompt_block_keeps_the_whole_map_without_a_cap() -> None:
    block = _map().prompt_block()
    assert "96-350 Demon of Change, vol. 2" in block
    assert block.splitlines()[0] == "Story arcs so far (chapter ranges):"
