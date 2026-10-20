import pytest

from weaver.chat_runtime import web_system_prompt
from weaver.prompts import (
    DEFAULT_VOICE,
    available_voices,
    load_personality,
)


def test_voice_packs_are_packaged() -> None:
    voices = available_voices()
    assert "buddy" in voices
    assert "storyteller" in voices
    assert DEFAULT_VOICE == "buddy"


def test_default_voice_is_the_buddy(monkeypatch) -> None:
    monkeypatch.delenv("WEAVER_VOICE", raising=False)
    personality = load_personality()
    assert "Reddit" in personality
    assert "reading companion and storyteller" not in personality


def test_storyteller_is_selected_by_environment(monkeypatch) -> None:
    monkeypatch.setenv("WEAVER_VOICE", "storyteller")
    personality = load_personality()
    assert "witness" in personality.casefold()
    assert "Reddit" not in personality
    assert "fan fiction" in personality


def test_explicit_voice_wins_over_the_environment(monkeypatch) -> None:
    monkeypatch.setenv("WEAVER_VOICE", "storyteller")
    assert "Reddit" in load_personality("buddy")


def test_unknown_voice_fails_loudly() -> None:
    with pytest.raises(ValueError, match="unknown voice"):
        load_personality("nope")


def test_web_prompt_uses_the_selected_voice() -> None:
    buddy = web_system_prompt(load_personality("buddy"), 3160)
    storyteller = web_system_prompt(load_personality("storyteller"), 3160)
    assert "Reddit" in buddy
    assert "witness" in storyteller.casefold()
    assert "chapters 1-3160" in buddy
    assert "chapters 1-3160" in storyteller
