from importlib.resources import files

import pytest

from weaver.chat_runtime import web_system_prompt
from weaver.prompts import (
    DEFAULT_VOICE,
    available_voices,
    load_personality,
)

# Plan 035: phrases the voice packs name as forbidden, so the model is told.
GENERIC_PHRASES = ("great question", "it's worth noting", "i hope this helps")


def _pack(voice: str, name: str) -> str:
    return (
        files("weaver.prompts")
        .joinpath("voices", voice, f"{name}.md")
        .read_text(encoding="utf-8")
    )


def test_voice_packs_are_packaged() -> None:
    # Plan 035 (owner, 2026-11-17): the lorekeeper replaces the buddy.
    assert available_voices() == ("lorekeeper", "storyteller")
    assert DEFAULT_VOICE == "lorekeeper"


def test_default_voice_is_the_lorekeeper(monkeypatch) -> None:
    monkeypatch.delenv("WEAVER_VOICE", raising=False)
    personality = load_personality()
    assert "lorekeeper" in personality
    assert "Reddit" not in personality
    assert "reading companion and storyteller" not in personality


def test_the_retired_buddy_fails_loudly() -> None:
    with pytest.raises(ValueError, match="unknown voice"):
        load_personality("buddy")


@pytest.mark.parametrize("voice", ["lorekeeper", "storyteller"])
def test_voice_packs_carry_no_em_dash(voice: str) -> None:
    for name in ("identity", "soul"):
        assert "—" not in _pack(voice, name)


def test_the_lorekeeper_keeps_the_chat_shape_rules() -> None:
    personality = load_personality("lorekeeper").casefold()
    assert "no essay shape" in personality
    assert "no headings unless the reader asks" in personality
    assert "a quick question gets a quick answer" in personality
    assert "never use an em dash" in personality
    for phrase in GENERIC_PHRASES:
        assert f'"{phrase}"' in personality


def test_storyteller_is_selected_by_environment(monkeypatch) -> None:
    monkeypatch.setenv("WEAVER_VOICE", "storyteller")
    personality = load_personality()
    assert "witness" in personality.casefold()
    assert "Reddit" not in personality
    assert "fan fiction" in personality


def test_explicit_voice_wins_over_the_environment(monkeypatch) -> None:
    monkeypatch.setenv("WEAVER_VOICE", "storyteller")
    assert "lorekeeper" in load_personality("lorekeeper")


def test_unknown_voice_fails_loudly() -> None:
    with pytest.raises(ValueError, match="unknown voice"):
        load_personality("nope")


def test_web_prompt_uses_the_selected_voice() -> None:
    lorekeeper = web_system_prompt(load_personality("lorekeeper"), 3160)
    storyteller = web_system_prompt(load_personality("storyteller"), 3160)
    assert "lorekeeper" in lorekeeper
    assert "witness" in storyteller.casefold()
    assert "chapters 1-3160" in lorekeeper
    assert "chapters 1-3160" in storyteller
