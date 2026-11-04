"""Word search over the novel (BM25), the second half of the hybrid.

Plan 033 round 2 measured search directly on 53 dev questions: meaning
search alone put the right chapter in its top five 38% of the time, BM25
over the same passages 45%, and the two blended with reciprocal rank
fusion 58%. This module is the BM25 half and the blend. It holds no
model and no index on disk: passages are built from the shelf on first
use, so it reaches every chapter, including ones the vector index has
not embedded yet.
"""

from __future__ import annotations

import math
import re
from collections import Counter, defaultdict
from dataclasses import dataclass

_STOPWORDS = frozenset(
    [
        "a",
        "an",
        "the",
        "and",
        "or",
        "of",
        "to",
        "in",
        "on",
        "at",
        "for",
        "with",
        "by",
        "from",
        "is",
        "was",
        "were",
        "be",
        "been",
        "are",
        "it",
        "its",
        "this",
        "that",
        "these",
        "those",
        "he",
        "she",
        "they",
        "them",
        "his",
        "her",
        "their",
        "him",
        "i",
        "you",
        "we",
        "our",
        "your",
        "my",
        "me",
        "what",
        "who",
        "whom",
        "which",
        "when",
        "where",
        "why",
        "how",
        "did",
        "does",
        "do",
        "had",
        "has",
        "have",
        "not",
        "no",
        "but",
        "if",
        "then",
        "than",
        "so",
        "as",
        "into",
        "out",
        "up",
        "down",
        "about",
        "after",
        "before",
        "over",
        "under",
        "again",
        "just",
        "very",
        "can",
        "could",
        "would",
        "should",
        "will",
        "shall",
        "may",
        "might",
        "there",
        "here",
    ]
)
_WORD = re.compile(r"[a-z0-9']+")


def words(text: str) -> list[str]:
    """Lowercase content words; one-letter words and stopwords dropped."""
    return [
        w for w in _WORD.findall(text.lower()) if len(w) > 1 and w not in _STOPWORDS
    ]


@dataclass(frozen=True)
class Passage:
    chapter: int
    line_start: int
    line_end: int
    text: str


class WordIndex:
    """Okapi BM25 over passages (k1 1.2, b 0.75)."""

    def __init__(
        self, passages: list[Passage], *, k1: float = 1.2, b: float = 0.75
    ) -> None:
        self.passages = passages
        self._k1, self._b = k1, b
        counts = [Counter(words(p.text)) for p in passages]
        self._length = [sum(c.values()) for c in counts]
        self._average = (sum(self._length) / len(passages)) if passages else 1.0
        frequency: Counter = Counter(w for c in counts for w in c)
        total = len(passages)
        self._idf = {
            w: math.log(1 + (total - n + 0.5) / (n + 0.5)) for w, n in frequency.items()
        }
        self._postings: dict[str, list[tuple[int, int]]] = defaultdict(list)
        for i, c in enumerate(counts):
            for w, f in c.items():
                self._postings[w].append((i, f))

    def search(
        self,
        query: str,
        *,
        chapter_from: int | None = None,
        chapter_to: int | None = None,
        limit: int = 60,
    ) -> list[tuple[Passage, float]]:
        scores: dict[int, float] = defaultdict(float)
        for w in set(words(query)):
            idf = self._idf.get(w)
            if idf is None:
                continue
            for i, f in self._postings[w]:
                chapter = self.passages[i].chapter
                if chapter_from is not None and chapter < chapter_from:
                    continue
                if chapter_to is not None and chapter > chapter_to:
                    continue
                norm = self._k1 * (
                    1 - self._b + self._b * self._length[i] / self._average
                )
                scores[i] += idf * f * (self._k1 + 1) / (f + norm)
        ranked = sorted(scores.items(), key=lambda item: (-item[1], item[0]))[:limit]
        return [(self.passages[i], score) for i, score in ranked]


def best_per_chapter(passages: list[Passage]) -> list[Passage]:
    """Keep each chapter's first (best ranked) passage, in rank order."""
    seen: set[int] = set()
    out = []
    for p in passages:
        if p.chapter not in seen:
            seen.add(p.chapter)
            out.append(p)
    return out


def fuse(
    rankings: dict[str, list[int]], *, k: int = 60
) -> list[tuple[int, float, list[str]]]:
    """Reciprocal rank fusion of chapter rankings.

    Returns (chapter, score, the rankings that found it), best first. Ties
    break on the earlier chapter so results are deterministic.
    """
    score: dict[int, float] = defaultdict(float)
    found: dict[int, list[str]] = defaultdict(list)
    for name, chapters in rankings.items():
        for rank, chapter in enumerate(chapters):
            score[chapter] += 1 / (k + rank + 1)
            found[chapter].append(name)
    ordered = sorted(score, key=lambda c: (-score[c], c))
    return [(c, score[c], found[c]) for c in ordered]


def preview(text: str, query: str, *, max_chars: int = 280) -> str:
    """The passage line that shares the most words with the query.

    Ties go to the earlier line. A short line borrows the next one, and
    the result is trimmed to max_chars on a word boundary.
    """
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    if not lines:
        return ""
    wanted = set(words(query))
    best = max(
        range(len(lines)), key=lambda i: (len(wanted & set(words(lines[i]))), -i)
    )
    snippet = lines[best]
    if len(snippet) < max_chars // 2 and best + 1 < len(lines):
        snippet = f"{snippet} {lines[best + 1]}"
    if len(snippet) > max_chars:
        snippet = snippet[: max_chars - 3].rsplit(" ", 1)[0] + "..."
    return snippet
