"""Spoiler judge: deterministic answer-mode gate (Plan 15 slice 1).

The reader ceiling is dead. The judge decides, from the citations an
answer would use plus the user's position and knob, whether to answer
fully, guard the beats, or ask first.
"""

from pathlib import Path

import pytest

from weaver.spoilers.judge import (
    Citation,
    SpoilerJudge,
    Verdict,
    load_labels,
    volume_of,
)


def test_volume_of_uses_canonical_boundaries() -> None:
    assert volume_of(1) == 1
    assert volume_of(95) == 1
    assert volume_of(96) == 2
    assert volume_of(750) == 4
    assert volume_of(1060) == 5
    assert volume_of(1590) == 7
    assert volume_of(3000) == 11
    assert volume_of(3127) == 12


def test_full_when_all_citations_at_position() -> None:
    j = SpoilerJudge()
    v = j.decide([Citation(chapter=98), Citation(chapter=99)], user_chapter=100)
    assert v.mode == "full"


def test_guarded_for_beyond_position_without_labels() -> None:
    j = SpoilerJudge()
    v = j.decide([Citation(chapter=200)], user_chapter=100)
    assert v.mode == "guarded"
    assert any("200" in r for r in v.reasons)


def test_ask_first_for_heavy_label_beyond_position() -> None:
    j = SpoilerJudge({"statement:chapter-0200:01": "death"})
    v = j.decide([Citation(chapter=200, statement_id="statement:chapter-0200:01")], user_chapter=100)
    assert v.mode == "ask_first"


def test_asks_beyond_downgrades_heavy_to_guarded() -> None:
    j = SpoilerJudge({"statement:chapter-0200:01": "twist"})
    v = j.decide(
        [Citation(chapter=200, statement_id="statement:chapter-0200:01")],
        user_chapter=100,
        asks_beyond=True,
    )
    assert v.mode == "guarded"


def test_safe_lore_beyond_position_is_full() -> None:
    j = SpoilerJudge({"statement:chapter-0200:01": "safe_lore"})
    v = j.decide([Citation(chapter=200, statement_id="statement:chapter-0200:01")], user_chapter=100)
    assert v.mode == "full"


def test_no_spoilers_overrides_everything() -> None:
    j = SpoilerJudge({"statement:chapter-0200:01": "death"})
    v = j.decide(
        [Citation(chapter=200, statement_id="statement:chapter-0200:01")],
        user_chapter=100,
        no_spoilers=True,
    )
    assert v.mode == "full"


def test_no_position_means_no_gate() -> None:
    j = SpoilerJudge({"statement:chapter-0200:01": "death"})
    v = j.decide([Citation(chapter=200, statement_id="statement:chapter-0200:01")])
    assert v.mode == "full"


def test_heavy_beats_within_position_are_full() -> None:
    j = SpoilerJudge({"statement:chapter-0099:01": "death"})
    v = j.decide([Citation(chapter=99, statement_id="statement:chapter-0099:01")], user_chapter=100)
    assert v.mode == "full"


def test_load_labels_missing_file_returns_empty(tmp_path: Path) -> None:
    assert load_labels(tmp_path) == {}


def test_load_labels_reads_and_validates(tmp_path: Path) -> None:
    (tmp_path / "spoiler-labels.json").write_text(
        '{"statement:chapter-0200:01": "death", "statement:chapter-0200:02": "safe_lore"}',
        encoding="utf-8",
    )
    assert load_labels(tmp_path) == {
        "statement:chapter-0200:01": "death",
        "statement:chapter-0200:02": "safe_lore",
    }


def test_unknown_label_rejected() -> None:
    with pytest.raises(ValueError):
        SpoilerJudge({"statement:chapter-0001:01": "spicy"})


def test_verdict_is_frozen() -> None:
    v = Verdict("guarded", ("chapter 200 is beyond chapter 100",))
    assert v.mode == "guarded"
    assert v.reasons == ("chapter 200 is beyond chapter 100",)
