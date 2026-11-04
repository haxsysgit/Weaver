"""The four reading arms of the retrieval verdict (Plan 032).

An arm is the set of reading tools the model gets for one evaluation run:

- A, normal: all six tools, as shipped.
- B, no vector search: no semantic_search.
- C, no notebook: semantic_search reads novel passages only; no who_is or
  lore_path, which read the notebook's story map.
- D, chapters and exact search: read_chapters, find_text, browse_chapters.
- W, word search only (Plan 033): all six tools, but semantic_search keeps
  only the word half of the hybrid, so A against W isolates the vectors.

Private to the evaluation harness. Only `open_chat_runtime(arm=...)` takes
one; no route, setting, header, or environment variable can pick an arm.
"""

from __future__ import annotations

from dataclasses import dataclass

READING_TOOLS: tuple[str, ...] = (
    "semantic_search",
    "read_chapters",
    "find_text",
    "browse_chapters",
    "who_is",
    "lore_path",
)


@dataclass(frozen=True)
class ReadingArm:
    name: str
    label: str
    tools: tuple[str, ...]
    novel_only_search: bool = False
    word_only_search: bool = False

    @property
    def has_notebook(self) -> bool:
        """The notebook reaches the model through statements in meaning
        search, or through the story map (who_is, lore_path)."""
        statements = "semantic_search" in self.tools and not self.novel_only_search
        return statements or "who_is" in self.tools or "lore_path" in self.tools


def _without(*names: str) -> tuple[str, ...]:
    return tuple(tool for tool in READING_TOOLS if tool not in names)


ARMS: dict[str, ReadingArm] = {
    "A": ReadingArm("A", "normal", READING_TOOLS),
    "B": ReadingArm("B", "no vector search", _without("semantic_search")),
    "C": ReadingArm("C", "no notebook", _without("who_is", "lore_path"), novel_only_search=True),
    "D": ReadingArm(
        "D",
        "chapters and exact search",
        ("read_chapters", "find_text", "browse_chapters"),
    ),
    "W": ReadingArm("W", "word search only", READING_TOOLS, word_only_search=True),
}

# What each tool does, in the prompt's own words, for arms that list fewer
# than six. Arm A keeps the shipped wording byte for byte.
_TOOL_WORDS = {
    "semantic_search": "semantic_search (meaning search over the novel's text)",
    "read_chapters": "read_chapters (read prose)",
    "find_text": "find_text (exact phrase + where a character speaks)",
    "browse_chapters": "browse_chapters (skim a range)",
    "who_is": "who_is (the story map: resolve names)",
    "lore_path": "lore_path (trace how two entities connect)",
}

_COUNT = {3: "Three", 4: "Four", 5: "Five"}

_SHIPPED_TOOLS_LINE = (
    "- Six tools: semantic_search (meaning search), read_chapters (read prose), \n"
    "  find_text (exact phrase + where a character speaks), browse_chapters (skim \n"
    "  a range), who_is (the story map: resolve names), lore_path (trace how two \n"
    "  entities connect).\n"
)
_NOTEBOOK_LINE = "- A story notebook: statements about the story, each with chapter evidence.\n"
_ONE_RULE = (
    "The novel is the source of truth; the notebook is a summary map that can "
    "be wrong. NEVER answer any question from your trained knowledge alone: "
    "every factual claim must trace to opened novel text. Notebook statements "
    "only help locate that text. "
)
_LOCATE = (
    "2. Locate with the smallest suitable finder and the novel's vocabulary. Use "
    "one concept per meaning search.\n"
)
_LEADS = (
    "3. Every search result, notebook statement, and story-map path is a lead, not proof. "
)
_EXACT = (
    "When to reach for the finders: exact phrases, quotes, and 'where does this \n"
    "character speak' are find_text work (grep for the novel), never meaning \n"
    "search. "
)
_MAP = (
    "Unfamiliar names are who_is work first, \n"
    "and 'how is X connected to Y' is lore_path work - but both read the story map, \n"
    "which only covers chapters 1-1000: when a name does not resolve there, it may \n"
    "simply be beyond the map, so fall back to find_text. "
)


def _tools_line(arm: ReadingArm) -> str:
    words = [_TOOL_WORDS[tool] for tool in arm.tools]
    if arm.novel_only_search is False and "semantic_search" in arm.tools:
        words[arm.tools.index("semantic_search")] = "semantic_search (meaning search)"
    return f"- {_COUNT[len(arm.tools)]} tools: {', '.join(words)}.\n"


def arm_prompt(prompt: str, arm: ReadingArm | None) -> str:
    """Rewrite the shipped web prompt so it names only the arm's tools.

    Arm A and no arm return the prompt unchanged. Every rewrite must find
    its exact source text, so a prompt edit cannot silently leave a tool
    the arm lacks in the text.
    """
    if arm is None or arm.tools == READING_TOOLS:
        return prompt
    replacements: list[tuple[str, str]] = [(_SHIPPED_TOOLS_LINE, _tools_line(arm))]
    if not arm.has_notebook:
        replacements += [
            (_NOTEBOOK_LINE, ""),
            (
                _ONE_RULE,
                (
                    "The novel is the source of truth. NEVER answer any question from "
                    "your trained knowledge alone: every factual claim must trace to "
                    "opened novel text. "
                ),
            ),
            (_LEADS, "3. Every search result is a lead, not proof. "),
        ]
    if "semantic_search" not in arm.tools:
        replacements += [
            (_LOCATE, "2. Locate with the smallest suitable finder and the novel's vocabulary.\n"),
            (
                _EXACT,
                (
                    "When to reach for the finders: exact phrases, quotes, and 'where does this \n"
                    "character speak' are find_text work (grep for the novel). "
                ),
            ),
        ]
    if "who_is" not in arm.tools:
        replacements.append((_MAP, "Unfamiliar names are find_text work: find where they appear. "))
    for old, new in replacements:
        if old not in prompt:
            raise ValueError(f"arm {arm.name}: prompt text moved: {old[:40]!r}")
        prompt = prompt.replace(old, new)
    return prompt
