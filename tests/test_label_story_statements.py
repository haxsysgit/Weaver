"""Spoiler-labels flagger and validator (scripts/label_story_statements.py)."""

import json

from scripts.label_story_statements import (
    flag_statements,
    load_labels,
    validate_labels,
)


def _write_record(root, chapter: int, statements: list[dict]) -> None:
    d = root / "reading"
    d.mkdir(parents=True, exist_ok=True)
    (d / f"{chapter:04d}.json").write_text(
        json.dumps({"chapter": chapter, "statements": statements}),
        encoding="utf-8",
    )


def _st(stmt_id: str, text: str, kind: str = "confirmed_fact") -> dict:
    chapter = int(stmt_id.split(":")[1].split("-")[1])
    return {
        "id": stmt_id,
        "kind": kind,
        "statement": text,
        "chapter": chapter,
        "first_known_chapter": chapter,
    }


def test_death_pattern_flags_kill_statements(tmp_path) -> None:
    statements = [
        _st("statement:chapter-0005:01", "Sunny killed the beast with the kunai."),
        _st("statement:chapter-0005:02", "Sunny walks to the gate at dusk."),
    ]
    flagged = flag_statements(statements)
    assert [label for label, _ in flagged] == ["death"]
    assert flagged[0][1]["id"] == "statement:chapter-0005:01"


def test_reveal_and_twist_patterns(tmp_path) -> None:
    statements = [
        _st("statement:chapter-0006:01", "The spy's real identity is revealed as Harper."),
        _st("statement:chapter-0006:02", "Cassia betrayed Sunny by telling his True Name."),
        _st("statement:chapter-0006:03", "The camp is quiet."),
    ]
    flagged = {st["id"]: label for label, st in flag_statements(statements)}
    # a statement can match several patterns; the curator decides
    assert flagged["statement:chapter-0006:02"] == "twist"
    assert "reveal" in {label for label, st in flag_statements(statements) if st["id"] == "statement:chapter-0006:01"}
    assert "statement:chapter-0006:03" not in flagged


def test_arc_payoff_pattern(tmp_path) -> None:
    statements = [_st("statement:chapter-0095:01", "Nephis survived the dark sea.")]
    assert flag_statements(statements)[0][0] == "arc_payoff"


def test_validate_labels_accepts_sound_file(tmp_path) -> None:
    _write_record(
        tmp_path,
        5,
        [_st("statement:chapter-0005:01", "Sunny killed the beast with the kunai.")],
    )
    (tmp_path / "spoiler-labels.json").write_text(
        json.dumps({"statement:chapter-0005:01": "death"}), encoding="utf-8"
    )
    assert validate_labels(tmp_path, load_labels(tmp_path)) == []


def test_validate_labels_rejects_unknown_id_and_label(tmp_path) -> None:
    _write_record(
        tmp_path,
        5,
        [_st("statement:chapter-0005:01", "Sunny killed the beast with the kunai.")],
    )
    labels = {
        "statement:chapter-9999:01": "death",
        "statement:chapter-0005:01": "banana",
    }
    problems = validate_labels(tmp_path, labels)
    assert any("unknown statement id" in p for p in problems)
    assert any("invalid label" in p for p in problems)


def test_missing_labels_file_is_tolerated(tmp_path) -> None:
    assert load_labels(tmp_path) == {}
    assert validate_labels(tmp_path, {}) == []
