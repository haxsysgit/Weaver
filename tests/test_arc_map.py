"""Plan 034 slice 4: the arc map."""

from weaver.arc_map import ArcMap, parse_arc_ledger, volume_ends

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
    assert "11-30 (continues past this chapter)" in block
    assert "Academy Days" not in block
    assert "Demon of Change" not in block


def test_the_prompt_block_keeps_the_whole_map_without_a_cap() -> None:
    block = _map().prompt_block()
    assert "96-350 Demon of Change, vol. 2" in block
    assert block.splitlines()[0] == "Story arcs so far (chapter ranges):"


def test_an_empty_ledger_has_no_block() -> None:
    assert parse_arc_ledger("").prompt_block() == ""


# Plan 034 repair (2026-11-16): the ledger stopped at 1816 with holes, so the
# map also reads the volume ends the chapters themselves mark.


def _tail(marker: str) -> str:
    return f"Chapter text.\nMore text.\n\n{marker}\n"


SHELF = [
    (1, "Nothing marked here."),
    (95, _tail("[End of volume one: Child of Shadows.]")),
    (350, _tail("[End of volume two: Demon of Change.]")),
    (600, _tail("[End of Volume Three: Prince of Nothing]")),
    (900, _tail("[End of volume five: Dread Night.]")),
    (1000, "A character says the end of volume one was sad."),
]


def test_volume_ends_are_read_from_the_chapters() -> None:
    ends = volume_ends(SHELF)
    assert [(end.number, end.name, end.chapter) for end in ends] == [
        (1, "Child of Shadows", 95),
        (2, "Demon of Change", 350),
        (3, "Prince of Nothing", 600),
        (5, "Dread Night", 900),
    ]


def test_volumes_cover_the_shelf_and_stop_at_the_reader() -> None:
    arc_map = ArcMap([], volumes=volume_ends(SHELF), shelf_edge=1000)
    block = arc_map.prompt_block(400)
    assert "1-95 Volume 1: Child of Shadows" in block
    assert "96-350 Volume 2: Demon of Change" in block
    assert "351-400 (volume continues past this chapter)" in block
    assert "Prince of Nothing" not in block
    assert "Dread Night" not in block


def test_an_unmarked_volume_end_is_said_plainly() -> None:
    block = ArcMap([], volumes=volume_ends(SHELF), shelf_edge=1000).prompt_block()
    assert "601-900 Volumes 4-5: Dread Night (the end of volume 4 is not marked)" in block
    assert "901-1000 the latest volume, still running on the shelf" in block


def test_a_heading_without_a_dash_parses() -> None:
    arcs = parse_arc_ledger("## ARC 33 The Underworld (ch 3055-3112)\n").arcs
    assert [(arc.arc_id, arc.name, arc.start, arc.end) for arc in arcs] == [
        ("33", "The Underworld", 3055, 3112)
    ]
