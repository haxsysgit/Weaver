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

import asyncio
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
from .config import DEFAULT_TIMEOUT_SECONDS, normalize_model_id
from .conversation.session import SessionWeave
from .prefs import PreferencesStore
from .sponsored import (
    DeepSeekBalance,
    FixedBalance,
    SponsoredAccess,
    config_from_environment,
)
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
from .model_layer.fake_chat import FakeChatProvider

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
#
# Plan v1 (2026-08-17): the chapter ceiling is filled in at runtime from
# the real shelf ({NOVEL_CHAPTERS}) so the model never repeats a stale
# hardcoded number (it answered "the library ends at 3127" while the
# shelf held 3160).
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
    "- The whole novel, chapters 1-{NOVEL_CHAPTERS}, searchable and openable.\n"
    "- A story notebook: statements about the story, each with chapter evidence.\n"
    "- Six tools: semantic_search (meaning search), read_chapters (read prose), \n"
    "  find_text (exact phrase + where a character speaks), browse_chapters (skim \n"
    "  a range), who_is (the story map: resolve names), lore_path (trace how two \n"
    "  entities connect).\n"
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
    "<scope>\n"
    "You are a reading companion for one novel, nothing else. Requests "
    "outside that - code, math, homework, general knowledge, writing help, "
    "advice - get a brief in-character decline and a redirect back to the "
    "novel. Never write code. A decline is not a factual claim: no tool call "
    "needed, just answer plainly that this is outside what you do, and offer "
    "the novel instead.\n"
    "</scope>\n"
    "\n"
    "<workflow>\n"
    "1. Classify the reading work silently: exact words, factual canon, event, "
    "relationship, timeline or version, contradiction, interpretation, what-if, "
    "or follow-up. Name the answer parts you must support.\n"
    "2. Locate with the smallest suitable finder and the novel's vocabulary. Use "
    "one concept per meaning search.\n"
    "3. Every search result, notebook statement, and story-map path is a lead, not proof. "
    "Open the novel passage before making a factual claim. Scores only rank leads.\n"
    "4. Read for the work: exact questions need the words and speaker context; events "
    "need the actors, sequence, scene's outcome, and relevant aftermath; comparisons "
    "need each requested version at the requested time; contradictions need both "
    "competing passages. Use read_chapters direction 'before' or 'after' and cross into "
    "the next chapter when the scene continues.\n"
    "5. Stop when every answer part has direct support, or state the specific evidence "
    "gap. Never turn a missing passage into certainty.\n"
    "\n"
    "When to reach for the finders: exact phrases, quotes, and 'where does this \n"
    "character speak' are find_text work (grep for the novel), never meaning \n"
    "search. Co-occurrence ('who was with whom', 'where did X die') is \n"
    "find_text mode 'together' with groups. Unfamiliar names are who_is work first, \n"
    "and 'how is X connected to Y' is lore_path work - but both read the story map, \n"
    "which only covers chapters 1-1000: when a name does not resolve there, it may \n"
    "simply be beyond the map, so fall back to find_text. "
    "Broad 'what happens around \n"
    "chapters N-M' questions are browse_chapters work before reading.\n"
    "</workflow>\n"
    "\n"
    "<output>\n"
    "Never narrate your steps: no 'let me search', no 'let me look' - tool calls "
    "are invisible to the reader, so write only the answer. Keep replies short "
    "and direct. You cannot modify the library.\n"
    "A plain reply without a tool call is your answer candidate. Weaver validates "
    "it before the reader sees it. If it names or writes a tool call, narrates "
    "work you plan to do, or is a placeholder, it is rejected and you continue "
    "with tools available. If you still need evidence, call a tool in THIS "
    "message. Never answer from memory alone. When you answer, answer fully with "
    "chapter citations, because your answer gets one final heavy reading pass "
    "and then the turn ends. When you quote the novel's prose, put the quote in "
    "a blockquote: a line starting with '>'.\n"
    "Tool calls are STRUCTURED, never text: do not write '<tool calls>', "
    "'<find_text: ...>', angle-bracket stage directions, or a JSON block as "
    "prose. Use the tool-call mechanism attached to your reply, or write the "
    "answer.\n"
    "</output>\n"
    "\n"
    "<example>\n"
    "User: How did Sunny get Saint?\n"
    "Good flow: semantic_search for how Sunny obtained the stone knight, read the "
    "notebook hits (one statement summarizes the whole thing), open the best "
    "chapter, then answer in one message: 'He killed the stone knight after she dealt "
    "with her own enemy, then claimed her as an Echo (ch104-105). No one-shot "
    "about it, the man actually had to work for it.'\n"
    "</example>"
)

WEB_ACTIVE_TOOLS: tuple[str, ...] = (
    "semantic_search",
    "read_chapters",
    "find_text",
    "browse_chapters",
    "who_is",
    "lore_path",
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

    The embedder must be the same model the index build used, so query
    vectors match the stored chunk vectors. WEAVER_DENSE_ONNX points at a
    self-quantized int8 onnx file (the v1 host model); otherwise the
    fp32 registry model is used. threads=4 caps onnxruntime RAM.
    """

    def __init__(
        self,
        model: str = "BAAI/bge-large-en-v1.5",
        onnx_path: str | None = None,
    ) -> None:
        self._model = model
        self._onnx_path = onnx_path or os.environ.get("WEAVER_DENSE_ONNX")
        self._inner = None

    def embed(self, texts):
        if self._inner is None:
            if self._onnx_path:
                from .retrieval.onnx_embedder import DirectOnnxEmbedder

                self._inner = DirectOnnxEmbedder(self._onnx_path)
            else:
                from fastembed import TextEmbedding

                self._inner = TextEmbedding(self._model, threads=4)
        return self._inner.embed(texts)


def _web_library_service():
    """The web surface's library service (reading machinery).

    None when the novel is not on this machine. The Qdrant index is
    opened lazily from .weaver/retrieval/index on first search (built by
    scripts/build_library_index.py); without it searches return empty.
    Packet assembly never touches the index, only chapters and notebook.
    """
    from .retrieval.tools import LibraryService

    project_root = Path(os.environ.get("WEAVER_PROJECT_ROOT", Path.cwd()))
    novel_dir = project_root / "novels" / "shadow-slave"
    notebook_dir = project_root / ".weaver" / "knowledge" / "shadow-slave"
    if not novel_dir.exists():
        return None
    index_dir = project_root / ".weaver" / "retrieval" / "index"
    sparse_encoder = None
    if index_dir.exists():
        from fastembed import SparseTextEmbedding

        from .retrieval.experiment import splade_encoder

        sparse_encoder = splade_encoder(
            SparseTextEmbedding("Qdrant/bm42-all-minilm-l6-v2-attentions")
        )
    return LibraryService(
        novel_dir=novel_dir,
        notebook_dir=notebook_dir,
        client=None,  # opened lazily from index_dir on first search
        embedder=_LazyDenseEmbedder(),  # dense-first search (Plan 014 sweep: dense 0.57 > sparse 0.40)
        sparse_encoder=sparse_encoder,
        index_dir=index_dir,
    )


def _web_tool_registry() -> ToolRegistry:
    """The six reading tools (Plan 15): semantic_search, read_chapters,
    find_text, browse_chapters, who_is, lore_path. READ-only, never touch the
    library. Built lazily per runtime so tests can point at synthetic
    data; empty registry when the novel is not on this machine.
    """
    from .retrieval.tools import register_reading_tools

    registry = ToolRegistry()
    service = _web_library_service()
    if service is not None:
        register_reading_tools(registry, service)
    return registry


def _fake_web_tool_registry(delay_seconds: float) -> ToolRegistry:
    """Synthetic reading tools for fake mode. No private library is opened."""
    registry = ToolRegistry()

    async def wait_for_fixture(context) -> None:
        if delay_seconds <= 0:
            return
        try:
            await asyncio.wait_for(
                context.cancel_event.wait(),
                timeout=delay_seconds,
            )
        except asyncio.TimeoutError:
            return
        context.raise_if_cancelled()

    async def semantic_search(arguments: dict, context) -> dict:
        await wait_for_fixture(context)
        return {
            "ok": True,
            "result": {
                "query": arguments.get("query", ""),
                "hits": [
                    {
                        "chapter": 184,
                        "handle": "fixture:0184:1-12",
                        "summary": "Synthetic development evidence.",
                    }
                ],
            },
        }

    async def read_chapters(arguments: dict, context) -> dict:
        await wait_for_fixture(context)
        return {
            "ok": True,
            "result": {
                "handle": arguments.get("handle", "fixture:0184:1-12"),
                "text": (
                    "Synthetic passage for development only. The character makes "
                    "a choice, then learns that its consequence reaches further "
                    "than intended."
                ),
            },
        }

    async def generic_fixture(arguments: dict, context) -> dict:
        await wait_for_fixture(context)
        return {"ok": True, "result": {"fixture": True, "input": arguments}}

    registry.register(
        ToolDefinition(
            name="semantic_search",
            description="Search a synthetic development story fixture.",
            parameters={
                "type": "object",
                "properties": {
                    "query": {"type": "string"},
                    "surface": {"type": "string"},
                },
                "required": ["query"],
            },
            handler=semantic_search,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
    registry.register(
        ToolDefinition(
            name="read_chapters",
            description="Open a synthetic development passage.",
            parameters={
                "type": "object",
                "properties": {"handle": {"type": "string"}},
                "required": ["handle"],
            },
            handler=read_chapters,
            effect_kind=EffectKind.READ,
            retry_safe=True,
        )
    )
    for tool_name in ("find_text", "browse_chapters", "who_is", "lore_path"):
        registry.register(
            ToolDefinition(
                name=tool_name,
                description=f"Run the synthetic {tool_name} development fixture.",
                parameters={"type": "object", "additionalProperties": True},
                handler=generic_fixture,
                effect_kind=EffectKind.READ,
                retry_safe=True,
            )
        )
    return registry


class ChatRuntime:
    """Owns the open session, mode label, preferences, and close lifecycle."""

    def __init__(
        self,
        session: SessionWeave,
        *,
        surface: Surface,
        mode_label: str,
        live: bool,
        prefs: PreferencesStore | None = None,
        library=None,
        model_layer: ModelLayer | None = None,
        model=None,
        sponsored: SponsoredAccess | None = None,
        sponsored_balance: DeepSeekBalance | FixedBalance | None = None,
        fake_delta_delay_seconds: float = 0,
    ) -> None:
        self.session = session
        self.surface = surface
        self.mode_label = mode_label
        self.live = live
        self.prefs = prefs
        self.library = library
        # Plan 15 slice 5: the thread-naming call runs on this layer.
        self.model_layer = model_layer
        self.model = model
        self.sponsored = sponsored
        self.sponsored_balance = sponsored_balance
        self.fake_delta_delay_seconds = max(0, fake_delta_delay_seconds)

    async def close(self) -> None:
        if self.sponsored is not None:
            await self.sponsored.close()
        if self.prefs is not None:
            await self.prefs.close()
        await self.session.close()


async def open_chat_runtime(
    state_dir: Path,
    *,
    live: bool,
    surface: Surface,
    fake_delay_seconds: float = 0,
) -> ChatRuntime:
    """Build the exact chat session for a surface (test seam).

    Opens the session without creating a conversation. Raises ValueError
    for missing live credentials before any state directory is created.
    """
    if surface not in ("developer", "web"):
        raise ValueError(f"unknown surface: {surface}")

    # Config [chat] model (alias or id) picks the model; flash is the default.
    model_id = normalize_model_id(
        os.environ.get("WEAVER_CHAT_MODEL") or DEEPSEEK_FLASH.model_id
    )

    server_api_key = os.environ.get("DEEPSEEK_KEY")
    if live:
        if not server_api_key:
            raise ValueError("live chat requires DEEPSEEK_KEY")
        provider = DeepSeekProvider(
            server_api_key,
            timeout_seconds=DEFAULT_TIMEOUT_SECONDS,
        )
    elif surface == "web":
        provider = FakeChatProvider(
            "deepseek",
            models=DEEPSEEK_MODELS,
            delay_seconds=fake_delay_seconds,
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
        from .retrieval.tools import register_reading_tools

        library = _web_library_service() if live else None
        registry = ToolRegistry()
        if live and library is not None:
            register_reading_tools(registry, library)
        elif not live:
            registry = _fake_web_tool_registry(fake_delay_seconds)
        active_tools = WEB_ACTIVE_TOOLS
        # Plan v1 (2026-08-17): tell the model the real shelf length.
        # Without the library (no novel on this machine) fall back to
        # the last known ceiling so the prompt still forms.
        last_chapter = (
            library.index.last_chapter()
            if library is not None
            else 3160
        )
        system_prompt = WEB_SYSTEM_PROMPT.format(
            NOVEL_CHAPTERS=last_chapter
        )
        execution_policy = ToolExecutionPolicy.read_only()

    # Plan 15 (owner 2026-08-08): the web locate phase sees a bounded
    # recent context, not the whole unbounded history. Caps the
    # per-step re-send cost (the slowness) and stops an old
    # exchange from dominating the tool loop. The final reading call
    # is curated separately in run_turn.
    web_context_budget = 200_000 if surface == "web" else None
    sw = SessionWeave(
        state_dir,
        model_layer=model_layer,
        model=model,
        system_prompt=system_prompt,
        tool_registry=registry,
        active_tools=active_tools,
        execution_policy=execution_policy,
        token_budget=web_context_budget,
    )
    await sw.open()
    prefs = PreferencesStore(state_dir / "weaver.sqlite3")
    await prefs.open()
    sponsored = None
    sponsored_balance = None
    sponsored_config = config_from_environment()
    if surface == "web" and sponsored_config.enabled:
        sponsored_secret = os.environ.get("WEAVER_SPONSORED_PASS_SECRET", "")
        if len(sponsored_secret.encode()) < 32:
            await prefs.close()
            await sw.close()
            raise ValueError(
                "sponsored access requires WEAVER_SPONSORED_PASS_SECRET "
                "with at least 32 bytes"
            )
        sponsored = SponsoredAccess(
            state_dir / "sponsored.sqlite3",
            secret=sponsored_secret,
            config=sponsored_config,
        )
        await sponsored.open()
        await sponsored.recover_stale()
        sponsored_balance = (
            DeepSeekBalance(server_api_key)
            if live and server_api_key is not None
            else FixedBalance()
        )
    return ChatRuntime(
        sw,
        surface=surface,
        mode_label=mode_label,
        live=live,
        prefs=prefs,
        library=library if surface == "web" else None,
        model_layer=model_layer,
        model=model,
        sponsored=sponsored,
        sponsored_balance=sponsored_balance,
        fake_delta_delay_seconds=(
            fake_delay_seconds / 8 if surface == "web" and not live else 0
        ),
    )
