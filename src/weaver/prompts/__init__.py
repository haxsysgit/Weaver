"""Packaged voice packs shared by the reading calls.

The voice is data, not a branch. Each pack is a directory with
`identity.md` and `soul.md`; `WEAVER_VOICE` picks the default pack.
"""

from __future__ import annotations

import os
from importlib.resources import files

DEFAULT_VOICE = "buddy"


def available_voices() -> tuple[str, ...]:
    root = files(__package__).joinpath("voices")
    return tuple(
        sorted(entry.name for entry in root.iterdir() if entry.is_dir())
    )


def _component(voice: str, name: str) -> str:
    text = (
        files(__package__)
        .joinpath("voices", voice, f"{name}.md")
        .read_text(encoding="utf-8")
        .strip()
    )
    return f"<{name}>\n{text}\n</{name}>"


def load_personality(voice: str | None = None) -> str:
    """Load a voice pack by name; the environment picks the default."""
    selected = (
        voice or os.environ.get("WEAVER_VOICE") or DEFAULT_VOICE
    ).strip().casefold()
    voices = available_voices()
    if selected not in voices:
        raise ValueError(
            f"unknown voice {selected!r}; choose from {', '.join(voices)}"
        )
    return _component(selected, "identity") + "\n\n" + _component(
        selected, "soul"
    )


WEAVER_PERSONALITY = load_personality()
