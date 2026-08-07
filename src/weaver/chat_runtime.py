"""Shared runtime construction for Weaver conversation surfaces.

Extracted from cli.py (Plan 011 Gate 2): provider, prompt, model, tool
profile, and SessionWeave construction now live here. Opening the runtime
never creates a conversation; callers start one.

Surface profiles:
- "developer": the Plan 010 tool set kept for direct development tests.
- "web": an empty tool registry, no active tools, a read-only policy, and
  a prompt that does not claim library access. The browser surface has no
  tools until a later owner-approved plan.
"""

import dataclasses
import os
from pathlib import Path
from typing import Literal

from .agent.tools import (
    EffectKind,
    ToolDefinition,
    ToolExecutionPolicy,
    ToolRegistry,
)
from .config import DEFAULT_TIMEOUT_SECONDS
from .conversation.session import SessionWeave
from .corpus.tools import register_chat_tools, service_from_environment
from .model_layer import (
    DEEPSEEK_FLASH,
    DEEPSEEK_MODELS,
    DeepSeekProvider,
    FakeModelProvider,
    ModelLayer,
    ModelMessage,
    ModelResponse,
    ModelStopReason,
)

Surface = Literal["developer", "web"]

# Developer surface system prompt (Weaver words only, never "corpus").
DEVELOPER_SYSTEM_PROMPT = (
    "You are Weaver, a lifelong reader with a private library of novels. "
    "Keep replies plain and honest. You can inspect the library, build "
    "reading packets, and export editions. You cannot fetch or update the "
    "library from chat."
)

# Web surface system prompt: two reading tools, novel is truth.
# Context-engineering rewrite 2026-08-07: sectioned, scoring literacy,
# triage-first workflow, one worked example. Will keep sharpening as the
# product matures.
WEB_SYSTEM_PROMPT = (
    "You are Weaver, a plain and honest reading companion for Shadow Slave.\n"
    "\n"
    "<who_you_are>\n"
    "Your name is Weaver, and it is a real name. In the novel, Weaver is the "
    "Demon of Fate: firstborn of the -unknown-, eldest of the seven daemons, "
    "the one who refused the war between gods and daemons and was hunted by "
    "both sides for it. They hid behind a mask because knowledge was the "
    "origin of power, and even the gods could not see what hid behind it. "
    "They created the Nightmare Spell as a promise against the Doom, and when "
    "they died, their death completed it. Those who wore the mask heard a "
    "voice like a thousand hopeless prayers.\n"
    "The user built the eighth lineage: someone had to. You carry Weaver's "
    "spirit, not the mask. You deal in truth, not lies: canon is your "
    "currency, chapter references are your receipts, and what-ifs are your "
    "games. Speak unhurried, like a daemon who knows no fear: calm, gentle, "
    "and unafraid to tell hard truths.\n"
    "</who_you_are>\n"
    "\n"
    "<what_you_have>\n"
    "- The whole novel, chapters 1-3127, searchable and openable.\n"
    "- A story notebook: statements about the story, each with chapter evidence.\n"
    "- Two tools: search_library (finds passages) and open_chapters (reads them).\n"
    "</what_you_have>\n"
    "\n"
    "<the_one_rule>\n"
    "The novel is the source of truth; the notebook is a summary map that can "
    "be wrong. NEVER answer any question from your trained knowledge alone: "
    "every factual claim must trace to the novel text or a notebook statement. "
    "Your own memory is only for guessing where to look, never for what to say.\n"
    "</the_one_rule>\n"
    "\n"
    "<tone>\n"
    "You are the friend who has read the whole novel front to back. Casual "
    "and cool, never a wiki, a lecturer, or a support bot. Contractions, "
    "direct address, fandom vocabulary (canon, takes, the goat), light jokes "
    "and in-world flavor when they fit. Have opinions: if the user's take is "
    "wrong per canon, say so plainly and bring the receipts (chapter refs). "
    "When something is your own guess, label it as a take or speculation; "
    "canon is canon, takes are takes. Brevity is the default, but give a "
    "question the room it deserves. Never lecture, never list features.\n"
    "</tone>\n"
    "\n"
    "<workflow>\n"
    "1. Plan silently: what is the question asking, which words would the novel "
    "use for it? One concept per search.\n"
    "2. Search once, well: name the characters, places and objects involved; use "
    "the novel's vocabulary (a Shadow, a Memory, a clan).\n"
    "3. Triage before you open: search results carry a score from 0 to 1 - higher "
    "is a closer match, but close scores are NOT proof of the right chapter. "
    "Notebook hits include the statement's full text: READ THOSE FIRST, they often "
    "answer directly. Only then pick the best 1-2 hits (notebook or novel) to open.\n"
    "4. Open, then answer in the SAME message, with chapter references. If the "
    "opened passage answers, answer from it. If not, use the notebook statements, "
    "or say plainly that the library does not cover it. Never search again after "
    "opening.\n"
    "</workflow>\n"
    "\n"
    "<output>\n"
    "Never narrate your steps: no 'let me search', no 'let me look' - tool calls "
    "are invisible to the reader, so write only the answer. Keep replies short "
    "and direct. You cannot modify the library.\n"
    "</output>\n"
    "\n"
    "<example>\n"
    "User: How did Sunny get Saint?\n"
    "Good flow: search_library for how Sunny obtained the stone knight, read the "
    "notebook hits (one statement summarizes the whole thing), open the best "
    "chapter, then answer in one message: 'He killed the stone knight after she dealt "
    "with her own enemy, then claimed her as an Echo (ch104-105). No one-shot "
    "about it, the man actually had to work for it.'\n"
    "</example>"
)

WEB_ACTIVE_TOOLS: tuple[str, ...] = (
    "search_library",
    "open_chapters",
)

# Scripted fake-mode reply: friendly, non-streamed, honest about being fake.
# Surface-neutral text: it must not advertise a command that only one of
# the two surfaces knows (independent review finding, 2026-08-02).
FAKE_RESPONSES = (
    ModelResponse(
        assistant_message=ModelMessage(
            role="assistant",
            content=(
                "I read you. This is a fake-mode reply (--fake), no real "
                "model is running. Set DEEPSEEK_KEY and start again to talk "
                "to the real Weaver."
            ),
        ),
        provider_id=DEEPSEEK_FLASH.provider_id,
        model_id=DEEPSEEK_FLASH.model_id,
        stop_reason=ModelStopReason.STOP,
        raw_stop_reason="stop",
    ),
)


def _developer_tool_registry() -> ToolRegistry:
    """Echo + library inspection tools only (Plan 010 Contract §2)."""
    registry = ToolRegistry()

    async def echo_handler(arguments: dict, context) -> dict:
        return {"echo": arguments}

    registry.register(
        ToolDefinition(
            name="echo",
            description="Echo back arguments (development tool).",
            parameters={
                "type": "object",
                "properties": {"message": {"type": "string"}},
            },
            handler=echo_handler,
            effect_kind=EffectKind.READ,
        )
    )
    register_chat_tools(registry, service_from_environment(live_source=False))
    return registry


class _LazyDenseEmbedder:
    """bge-large loads ~1.3GB and takes seconds; construct on first search.

    The embedder is the same model the Colab index build used
    (BAAI/bge-large-en-v1.5, 1024-dim), so runtime query vectors match
    the stored chunk vectors. threads=4 caps onnxruntime RAM.
    """

    def __init__(self, model: str = "BAAI/bge-large-en-v1.5") -> None:
        self._model = model
        self._inner = None

    def embed(self, texts):
        if self._inner is None:
            from fastembed import TextEmbedding

            self._inner = TextEmbedding(self._model, threads=4)
        return self._inner.embed(texts)


def _web_tool_registry() -> ToolRegistry:
    """The two reading tools (Plan 014): search_library + open_chapters.

    The web surface is where a reader talks to Weaver; the reading tools
    are READ-only and never touch the library. The registry is built
    lazily per runtime so tests can point at synthetic data. The Qdrant
    index is loaded from .weaver/retrieval/index when present (built by
    scripts/build_library_index.py); without it the tools register but
    searches return empty until the index is built.
    """
    registry = ToolRegistry()
    from .retrieval.tools import LibraryService, register_reading_tools

    project_root = Path(os.environ.get("WEAVER_PROJECT_ROOT", Path.cwd()))
    novel_dir = project_root / "novels" / "shadow-slave"
    notebook_dir = project_root / ".weaver" / "knowledge" / "shadow-slave"
    if not novel_dir.exists():
        return registry  # no library on this machine: tools stay unregistered
    index_dir = project_root / ".weaver" / "retrieval" / "index"
    sparse_encoder = None
    if index_dir.exists():
        from fastembed import SparseTextEmbedding

        from .retrieval.experiment import splade_encoder

        sparse_encoder = splade_encoder(
            SparseTextEmbedding("Qdrant/bm42-all-minilm-l6-v2-attentions")
        )
    service = LibraryService(
        novel_dir=novel_dir,
        notebook_dir=notebook_dir,
        client=None,  # opened lazily from index_dir on first search
        embedder=_LazyDenseEmbedder(),  # dense-first search (Plan 014 sweep: dense 0.57 > sparse 0.40)
        sparse_encoder=sparse_encoder,
        index_dir=index_dir,
    )
    register_reading_tools(registry, service)
    return registry


class ChatRuntime:
    """Owns the open session, mode label, and close lifecycle."""

    def __init__(
        self,
        session: SessionWeave,
        *,
        surface: Surface,
        mode_label: str,
        live: bool,
    ) -> None:
        self.session = session
        self.surface = surface
        self.mode_label = mode_label
        self.live = live

    async def close(self) -> None:
        await self.session.close()


async def open_chat_runtime(
    state_dir: Path,
    *,
    live: bool,
    surface: Surface,
) -> ChatRuntime:
    """Build the exact chat session for a surface (test seam).

    Opens the session without creating a conversation. Raises ValueError
    for missing live credentials before any state directory is created.
    """
    if surface not in ("developer", "web"):
        raise ValueError(f"unknown surface: {surface}")

    # Config [chat] model (alias or id) picks the model; flash is the default.
    model_id = os.environ.get("WEAVER_CHAT_MODEL") or DEEPSEEK_FLASH.model_id

    if live:
        api_key = os.environ.get("DEEPSEEK_KEY")
        if not api_key:
            raise ValueError("live chat requires DEEPSEEK_KEY")
        provider = DeepSeekProvider(
            api_key,
            timeout_seconds=DEFAULT_TIMEOUT_SECONDS,
        )
    else:
        # The scripted response carries the requested model id so
        # [chat] model = pro no longer fails every fake turn.
        provider = FakeModelProvider(
            "deepseek",
            models=DEEPSEEK_MODELS,
            responses=(
                dataclasses.replace(
                    FAKE_RESPONSES[0],
                    model_id=model_id,
                ),
            ),
        )

    mode_label = f"live {model_id}" if live else "fake"

    model_layer = ModelLayer()
    model_layer.register_provider(provider)
    model = model_layer.get_model(
        DEEPSEEK_FLASH.provider_id,
        model_id,
    )

    if surface == "developer":
        registry = _developer_tool_registry()
        active_tools: tuple[str, ...] = (
            "echo",
            "inspect_novel_corpus",
            "build_novel_packet",
            "export_novel",
        )
        system_prompt = DEVELOPER_SYSTEM_PROMPT
        execution_policy = ToolExecutionPolicy.maintenance()
    else:
        registry = _web_tool_registry()
        active_tools = WEB_ACTIVE_TOOLS
        system_prompt = WEB_SYSTEM_PROMPT
        execution_policy = ToolExecutionPolicy.read_only()

    sw = SessionWeave(
        state_dir,
        model_layer=model_layer,
        model=model,
        system_prompt=system_prompt,
        tool_registry=registry,
        active_tools=active_tools,
        execution_policy=execution_policy,
    )
    await sw.open()
    return ChatRuntime(
        sw,
        surface=surface,
        mode_label=mode_label,
        live=live,
    )
