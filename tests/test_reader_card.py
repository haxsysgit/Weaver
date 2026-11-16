"""Plan 034 slice 2: the reader card states Weaver's own situation honestly.

Pure-function tests. The card is wired into the turn prompt separately.
"""

from types import SimpleNamespace

from weaver.reader_card import ReaderCard, card_from_state, render_reader_card


def _card(**overrides) -> str:
    facts = {
        "reader_chapter": 120,
        "spoiler_mode": "protect",
        "shelf_edge": 3246,
        "search_through": 3246,
        "last_refresh": "2026-11-14",
        "thread_kind": "canon",
    }
    facts.update(overrides)
    return render_reader_card(ReaderCard(**facts))


def test_a_saved_boundary_is_protected() -> None:
    card = _card()
    assert "at chapter 120" in card
    assert "past chapter 120" in card
    assert "no boundary saved" not in card


def test_no_boundary_asks_before_a_major_beat() -> None:
    card = _card(reader_chapter=None)
    assert "no boundary saved" in card
    assert "ask once" in card


def test_spoiler_mode_none_does_not_withhold() -> None:
    card = _card(spoiler_mode="none")
    assert "Spoiler mode: none" in card
    assert "do not withhold" in card
    assert "never reveal" not in card


def test_spoiler_mode_none_without_a_boundary_still_says_none() -> None:
    card = _card(reader_chapter=None, spoiler_mode="none")
    assert "no boundary saved" in card
    assert "Spoiler mode: none" in card


def test_the_shelf_edge_and_refresh_date_are_stated() -> None:
    card = _card()
    assert "chapters 1 to 3246" in card
    assert "last refreshed 2026-11-14" in card
    assert "still being written" in card


def test_a_lagging_meaning_index_states_its_reach() -> None:
    card = _card(search_through=3100)
    assert "meaning half covers chapters 1 to 3100" in card
    assert "word half covers the whole shelf" in card


def test_a_current_index_needs_no_lag_line() -> None:
    card = _card(search_through=3246)
    assert "Semantic search covers the whole shelf." in card
    assert "meaning half" not in card


def test_an_unrecorded_index_does_not_overclaim() -> None:
    card = _card(search_through=None)
    assert "coverage is not recorded" in card
    assert "covers the whole shelf" not in card


def test_a_missing_shelf_is_stated_honestly() -> None:
    card = _card(shelf_edge=None, search_through=None)
    assert "no chapter files found" in card
    assert "covers the whole shelf" not in card


def test_the_thread_kind_is_stated() -> None:
    assert "Thread: canon" in _card()
    assert "Thread: fanfic" in _card(thread_kind="fanfic")


def test_the_card_has_no_em_dash() -> None:
    card = _card()
    assert "\u2014" not in card
    assert "--" not in card


def test_the_card_stays_short() -> None:
    assert len(_card()) < 1600


def test_the_web_card_reads_the_saved_facts() -> None:
    prefs = SimpleNamespace(reader_chapter=88, spoiler_mode="protect")
    card = card_from_state(
        prefs,
        shelf_edge=3246,
        search_through=3246,
        refresh={"last_success_at": "2026-11-14T20:24:58+00:00"},
        domain="canon",
    )
    assert "at chapter 88" in card
    assert "last refreshed 2026-11-14" in card
    assert "Thread: canon" in card


def test_the_web_card_defaults_without_prefs() -> None:
    card = card_from_state(
        None,
        shelf_edge=3246,
        search_through=3246,
        refresh=None,
        domain="fanfic",
    )
    assert "no boundary saved" in card
    assert "Thread: fanfic" in card


def test_the_web_card_falls_back_to_the_check_date() -> None:
    card = card_from_state(
        None,
        shelf_edge=3246,
        search_through=3246,
        refresh={"last_check_at": "2026-11-15T08:00:00+00:00"},
        domain="canon",
    )
    assert "last refreshed 2026-11-15" in card
