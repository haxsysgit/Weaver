"""A chapter-derived name index for who_is (Plan 034).

Built from the chapter text, not the notebook: the notebook story map stops
at chapter 1000, while readers ask about names from the whole shelf. The
index answers "have I seen this name, where does it appear, and what is the
closest spelling" with no model call. It is private state, saved under
.weaver/ and never committed.
"""

from __future__ import annotations

import difflib
import json
import re
from collections import Counter
from collections.abc import Iterable
from dataclasses import dataclass
from pathlib import Path

# Articles, pronouns, sentence starters and chapter furniture. A name that is
# one of these is noise from capitalisation, not a character or place.
STOPWORDS = frozenset(
    {
        "the", "a", "an", "he", "she", "they", "it", "we", "you", "i",
        "his", "her", "their", "our", "your", "my", "this", "that",
        "these", "those", "but", "and", "or", "so", "then", "when",
        "where", "why", "how", "what", "who", "which", "if", "because",
        "though", "although", "after", "before", "once", "now", "later",
        "still", "even", "only", "just", "very", "there", "here", "not",
        "no", "yes", "chapter", "volume", "part", "book", "maybe",
        "perhaps", "finally", "suddenly", "somehow", "however",
        "meanwhile", "instead", "again",
    }
)

# One capitalised word, optionally possessive: "Sunny", "Nephis's". Bigrams
# are formed from adjacent tokens below, so a stopword like "The" cannot
# swallow the name that follows it.
_TOKEN_RE = re.compile(r"[A-Z][a-z]{2,}(?:'s)?")
_SPACE_RE = re.compile(r"[ \t]+")
# A title joins its words with "of" or "of the": "Lord of Shadows".
_CONNECTOR_RE = re.compile(r"[ \t]+of(?:[ \t]+the)?[ \t]+")
_POSSESSIVE_RE = re.compile(r"'s$")
_LOWER_RE = re.compile(r"\b[a-z]{3,}\b")
_WORD_RE = re.compile(r"[a-z0-9']+")


def _clean(raw: str) -> str:
    return _POSSESSIVE_RE.sub("", raw).strip()


def names_in(text: str) -> set[str]:
    """The candidate names in one chapter's text."""
    tokens: list[tuple[int, int, str, bool]] = []
    for match in _TOKEN_RE.finditer(text):
        name = _clean(match.group(0))
        if len(name) < 3:
            continue
        tokens.append((match.start(), match.end(), name, name.lower() in STOPWORDS))
    found: set[str] = set()
    for position, (_, end, name, stop) in enumerate(tokens):
        if stop:
            continue
        found.add(name)
        if position + 1 == len(tokens):
            continue
        next_start, _, next_name, next_stop = tokens[position + 1]
        gap = text[end:next_start]
        if next_stop:
            continue
        if _SPACE_RE.fullmatch(gap):
            found.add(f"{name} {next_name}")
        elif _CONNECTOR_RE.fullmatch(gap):
            found.add(f"{name}{_SPACE_RE.sub(' ', gap)}{next_name}")
    return found


def _words(text: str) -> tuple[str, ...]:
    words = _WORD_RE.findall(text.lower().replace("’", "'"))
    return tuple(_POSSESSIVE_RE.sub("", word) for word in words)


def _contains_words(outer: tuple[str, ...], inner: tuple[str, ...]) -> bool:
    """True when ``inner`` appears in ``outer`` as whole words, in order."""
    size = len(inner)
    return size > 0 and any(
        outer[start : start + size] == inner for start in range(len(outer) - size + 1)
    )


@dataclass(frozen=True)
class NameEntry:
    name: str
    chapters: tuple[int, ...]
    count: int

    @property
    def first_chapter(self) -> int:
        return self.chapters[0]

    @property
    def last_chapter(self) -> int:
        return self.chapters[-1]


class NameIndex:
    """Names seen in the chapters, with where each one appears."""

    def __init__(self, entries: dict[str, NameEntry]) -> None:
        self.entries = entries
        self._by_norm = {name.lower(): name for name in entries}

    def __len__(self) -> int:
        return len(self.entries)

    @property
    def through(self) -> int:
        """The last chapter this index covers (0 when empty)."""
        return max(
            (entry.last_chapter for entry in self.entries.values()), default=0
        )

    def lookup(self, name: str) -> dict | None:
        """Resolve a name, including a close misspelling, to one entry."""
        needle = name.strip().lower()
        if not needle:
            return None
        match = self._match(needle)
        if match is None:
            return None
        entry, kind, score = match
        return {
            "name": entry.name,
            "chapters": list(entry.chapters),
            "first_chapter": entry.first_chapter,
            "last_chapter": entry.last_chapter,
            "count": entry.count,
            "matched_as": name,
            "match": kind,
            "score": round(score, 3),
        }

    def _match(self, needle: str) -> tuple[NameEntry, str, float] | None:
        exact = self._by_norm.get(needle)
        if exact is not None:
            return self.entries[exact], "exact", 1.0
        # Whole words only, and the most specific name wins: "the Sword Saint"
        # is the Sword Saint, not the commonest word inside it ("Saint").
        asked = _words(needle)
        contains = [
            self.entries[display]
            for norm, display in self._by_norm.items()
            if _contains_words(asked, _words(norm))
            or _contains_words(_words(norm), asked)
        ]
        if contains:
            entry = max(
                contains,
                key=lambda item: (len(_words(item.name)), len(item.name), item.count),
            )
            return entry, "contains", 0.9
        close = difflib.get_close_matches(
            needle, list(self._by_norm), n=1, cutoff=0.72
        )
        if close:
            entry = self.entries[self._by_norm[close[0]]]
            score = difflib.SequenceMatcher(None, needle, close[0]).ratio()
            return entry, "close", score
        return None

    def suggest(self, name: str, *, limit: int = 5) -> list[str]:
        needle = name.strip().lower()
        if not needle:
            return []
        matches = difflib.get_close_matches(
            needle, list(self._by_norm), n=limit, cutoff=0.6
        )
        return [self._by_norm[match] for match in matches]

    def to_dict(self) -> dict:
        return {
            "names": [
                {"name": entry.name, "chapters": list(entry.chapters), "count": entry.count}
                for entry in sorted(
                    self.entries.values(), key=lambda item: item.name.lower()
                )
            ]
        }

    @classmethod
    def from_dict(cls, data: dict) -> NameIndex:
        entries: dict[str, NameEntry] = {}
        for item in data.get("names", []):
            chapters = tuple(int(number) for number in item.get("chapters", []))
            name = str(item.get("name", "")).strip()
            if not name or not chapters:
                continue
            entries[name] = NameEntry(
                name, chapters, int(item.get("count", len(chapters)))
            )
        return cls(entries)

    def save(self, path: Path) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(
            json.dumps(self.to_dict(), ensure_ascii=False), encoding="utf-8"
        )

    @classmethod
    def load(cls, path: Path) -> NameIndex:
        return cls.from_dict(json.loads(path.read_text(encoding="utf-8")))


def build_name_index(
    chapters: Iterable[tuple[int, str]],
    *,
    min_count: int = 2,
) -> NameIndex:
    """Index the names in (chapter number, text) pairs.

    A name seen in fewer than ``min_count`` chapters is dropped: one-off
    capitalisation is usually noise, not a character a reader will ask about.
    A single word that the chapters write in lower case at least as often as
    capitalised ("Everything" at a sentence start) is an ordinary word, not
    a name.
    """
    counts: Counter[str] = Counter()
    seen: dict[str, list[int]] = {}
    capitalised: Counter[str] = Counter()
    lower: Counter[str] = Counter()
    for number, text in chapters:
        for name in names_in(text):
            counts[name] += 1
            seen.setdefault(name, []).append(number)
        capitalised.update(
            _clean(token).lower() for token in _TOKEN_RE.findall(text)
        )
        lower.update(_LOWER_RE.findall(text))

    def ordinary(name: str) -> bool:
        key = name.lower()
        return " " not in name and lower[key] >= capitalised[key]

    entries = {
        name: NameEntry(name, tuple(sorted(seen[name])), counts[name])
        for name in counts
        if counts[name] >= min_count and not ordinary(name)
    }
    return NameIndex(entries)
