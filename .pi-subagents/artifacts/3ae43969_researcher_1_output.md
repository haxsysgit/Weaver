# Research: Context Assembly & Management in Codex, Claude Code, and Honcho

## Summary

Codex uses a Thread→Turn→Item protocol hierarchy with separate `ContextCompaction` items, persisting history to JSONL rollouts and supporting thread/resume. Claude Code relies on a CLAUDE.md file hierarchy plus auto memory for cross-session continuity, with `/compact` producing structured summaries and subagents isolating noisy work. Honcho v3 models Workspace→Peer→Session→Message with background formal reasoning (Deriver, Summarizer, Dreamer) that extracts deductive/inductive conclusions and peer cards—the only system that reasons about context rather than merely summarizing it. All three fall short for Weaver's needs: none preserve exact narrative passages with citation provenance, none separate canon from interpretation, none model character relationship graphs across sessions, and none perform narrative-preserving compaction that retains foreshadowing and plot-critical details.

---

## Codex (OpenAI, rust-v0.145.0)

### What stays in context vs gets removed

Codex organizes context through a strict Thread→Turn→Item hierarchy. A Thread is the durable conversation container; each Turn is a unit of work (triggered by `turn/start`) containing typed Items. Items are atomic and typed: `UserMessage`, `AgentMessage`, `CommandExecution`, `FileChange`, `Reasoning`, `McpToolCall`, `DynamicToolCall`, `WebSearch`, `ContextCompaction`, and more [item.rs](https://github.com/openai/codex/blob/main/codex-rs/app-server-protocol/src/protocol/v2/item.rs). When context fills, items are not individually trimmed—instead the whole history segment is replaced by a `ContextCompaction` item that contains a summary.

The compaction system uses `InitialContextInjection` to decide how system instructions and environment state re-enter after compaction: `BeforeLastUserMessage` injects them just before the current user prompt (mid-turn auto-compaction), while `DoNotInject` defers to the next turn (manual compaction) [compact.rs](https://github.com/openai/codex/blob/fbe65995/codex-rs/core/src/compact.rs#L67-L73). Thread configuration—model, instructions, sandbox policy, personality—survives compaction because it's stored as thread-level settings, not as items within history. The protocol also supports a `ThreadHistoryMode` field in `ThreadStartParams` which controls how history is persisted, and `turn/steer` allows injecting additional context fragments into an in-progress turn [thread.rs](https://github.com/openai/codex/blob/main/codex-rs/app-server-protocol/src/protocol/v2/thread.rs).

### Compaction/summarization strategy

Codex has three compaction paths: **local**, **remote v1**, and **remote v2**. Local compaction injects a `SUMMARIZATION_PROMPT` as a user message into a standard inference turn and uses the model's assistant reply as the summary. Remote v2 supports streaming responses and retains a `RETAINED_MESSAGE_TOKEN_BUDGET` of 64,000 tokens for messages kept alongside the summary. Before remote compaction, `trim_function_call_history_to_fit_context_window` removes Codex-generated items (tool calls, reasoning) from the oldest history segment to make space [compact_remote.rs](https://github.com/openai/codex/blob/fbe65995/codex-rs/core/src/compact_remote.rs#L355-L385).

Auto-compaction triggers mid-turn when token usage exceeds limits. Retry logic handles failures: if the summarization prompt itself doesn't fit, the system calls `history.remove_first_item()` and retries until there's room [compact.rs](https://github.com/openai/codex/blob/fbe65995/codex-rs/core/src/compact.rs#L209-L247). User reports indicate auto-compaction can lose task state; the recommended practice is to manually re-state goals after compaction [community reports](https://community.openai.com/t/automatic-compaction-does-not-trigger-task-state-recovery/1386896). The `ContextCompaction` item in the protocol is structurally distinct from message items—it carries only an `id`, not content—meaning the actual summary is handled at the core level and the protocol just marks the boundary [item.rs](https://github.com/openai/codex/blob/main/codex-rs/app-server-protocol/src/protocol/v2/item.rs).

### Cross-session continuity

Threads persist to disk as JSONL rollout files and can be resumed via three mechanisms: by `thread_id`, by inline `history` (in-memory `Vec<ResponseItem>`), or by `path` to a rollout file [thread.rs](https://github.com/openai/codex/blob/main/codex-rs/app-server-protocol/src/protocol/v2/thread.rs). The `thread/resume` response includes `turns_backwards_cursor` and `items_backwards_cursor` for paginated hydration. `ThreadForkParams` supports creating a new thread from a specific point in history (`last_turn_id` or `before_turn_id`). Memory citations (`MemoryCitation` with `entries` containing paths and line ranges plus `thread_ids`) provide cross-thread file references, and `codex_protocol::memory_citation` types track which rollouts contributed to a memory reference. Threads can be archived (`thread/archive`) or deleted (`thread/delete`). An `ephemeral` flag on `ThreadStartParams` controls whether the thread persists at all.

### Domain-specific context structure

None. Codex is a general-purpose coding agent protocol. All context items are typed by operational function (command, file change, MCP tool call), not by semantic domain. There is no mechanism to annotate items with domain categories, no narrative or document structure, and no separation of factual vs. interpretive content. Thread instructions (`base_instructions`, `developer_instructions`) and personality are opaque strings with no structural semantics.

---

## Claude Code (Anthropic, 2025–2026)

### What stays in context vs gets removed

Claude Code's context window includes conversation history, file contents, command outputs, CLAUDE.md files, auto memory, loaded skills, MCP tool names, system prompt, and hooks [context-window](https://code.claude.com/docs/en/context-window). At startup, CLAUDE.md files are discovered by walking up the directory tree from the working directory, concatenating all found `CLAUDE.md` and `CLAUDE.local.md` files. Auto memory (Claude's self-written notes across sessions) is loaded from disk. Path-scoped rules (`.claude/rules/*.md` with `paths:` frontmatter) load only when Claude reads matching files and are **lost after compaction** until the file is read again.

After `/compact`, what survives: system prompt (unchanged), project-root CLAUDE.md and unscoped rules (re-injected from disk), auto memory (re-injected from disk), invoked skill bodies (re-injected, capped at 5,000 tokens per skill, 25,000 tokens total, oldest dropped first). What is lost: path-scoped rules, nested CLAUDE.md in subdirectories, hook context (hooks run as code, not stored in history) [context-window](https://code.claude.com/docs/en/context-window). The platform API also provides server-side **context editing** strategies: `clear_tool_uses_20250919` clears old tool results (replacing them with placeholder text) and optionally clears tool call inputs, and `clear_thinking_20251015` manages thinking blocks [context-editing](https://platform.claude.com/docs/en/build-with-claude/context-editing).

### Compaction/summarization strategy

`/compact` replaces conversation history with a structured summary. Users can steer it with a focus hint (`/compact focus on the auth refactor, drop the test debugging`) or add a "Compact Instructions" section to CLAUDE.md. As of v2.1.198, the summarization request inherits the session's extended thinking configuration. Auto-compaction fires automatically at the context limit and works identically to manual `/compact`. If a single file or tool output is so large that context refills immediately after compaction, auto-compaction stops and errors rather than looping.

Anthropic explicitly recommends `/clear` (user-written handoff) over compaction when switching to genuinely new work: "stale notes are worse than missing notes" because they can misdirect the model [session-management](https://claude.com/blog/using-claude-code-session-management-and-1m-context). `/rewind` (double-Escape) jumps back to a previous message, dropping everything after it—useful for recovering from failed approaches while keeping the useful file reads. Subagents are the primary mechanism for keeping large intermediate output out of the main context: the subagent does the work in its own context window and returns only a summary to the parent [sub-agents](https://code.claude.com/docs/en/sub-agents).

### Cross-session continuity

**No automatic cross-session chat history.** Each session starts with a fresh context window. Persistent context comes exclusively from files: CLAUDE.md (written by the user), auto memory (written by Claude based on corrections/preferences, first 200 lines or 25KB loaded), and the platform memory tool (for API-based agents) [memory](https://code.claude.com/docs/en/memory). CLAUDE.md files support `@path/to/import` syntax to pull in other files, with recursive imports up to four hops deep. Subagents can maintain their own auto memory separate from the parent [memory](https://code.claude.com/docs/en/memory). The memory file hierarchy (managed policy → user instructions → project instructions → local instructions) provides scope layering but no structured semantic model.

### Domain-specific context structure

CLAUDE.md is free-form Markdown. Path-scoped rules use YAML frontmatter with glob patterns. Skills are Markdown files in `.claude/skills/`. Auto memory is unstructured text. While the hierarchy (org → user → project → subdirectory → path-scoped) provides operational scoping, there is no domain-specific structure: no typed entities, no relationship modeling, no provenance tracking. The system is entirely file-and-text-based. Subagents run with custom system prompts that can encode domain behavior, but the cross-session persistence is through the same file mechanisms.

---

## Honcho (Plastic Labs, v3)

### What stays in context vs gets removed

Honcho models context through Workspace→Peer→Session→Message. Messages are always persisted. Context retrieval is **not** a dump of all messages; it assembles context on demand through `session.context()` which blends summaries plus recent messages up to a configurable token limit [get-context](https://honcho.dev/docs/v3/documentation/features/get-context). Summaries are enabled by default; disabling them fills the token budget entirely with recent raw messages. Semantic search (`search_query`) retrieves conclusions from vector storage relevant to a query string. Session-scoped representations can be limited via `limit_to_session`.

What is **kept permanently**: all messages (in PostgreSQL), all conclusions (in vector collections), peer cards (biographical facts), summaries (short: every ~20 messages, long: every ~60 messages). What is **trimmed for a given context window**: only what exceeds the `tokens` parameter. The system never permanently deletes reasoning—it marks conclusions as outdated or contradictory during dreaming consolidation, but retains the history in the representation [architecture](https://honcho.dev/docs/v3/documentation/core-concepts/architecture).

### Compaction/summarization strategy

Honcho's "compaction" is multi-layered and asynchronous, not a one-shot summary:

1. **Deriver** (per-batch, async): Extracts explicit statements and deductive conclusions from incoming messages. In v3, this was reduced to mainly explicit information capture [Honcho-3 blog](https://plasticlabs.ai/blog/blog/Honcho-3).
2. **Summarizer** (periodic): Rolls up recent messages into short-form and long-form session summaries. Short summaries every 20 messages, long every 60 messages by default.
3. **Dreamer** (periodic, triggered): Consolidates conclusions by deduplicating, removing contradictions, drawing inductive patterns across multiple messages (minimum 2 source conclusions), and updating peer cards. Triggers when: ≥50 new conclusions since last dream, ≥8 hours cooldown, 60-minute idle timeout after conditions met. Cancelled if new messages arrive during the idle window [dreaming](https://honcho.dev/docs/v3/documentation/features/advanced/dreaming).

Summaries are not just text—they feed back into the reasoning pipeline. Deduction during dreaming identifies knowledge updates (e.g., "works at Company A" → "works at Company B"), logical implications, and contradictions. Induction identifies behavioral tendencies, preferences, personality traits, and correlations. Each inductive pattern gets a confidence level based on the number of supporting observations.

Messages are batched for reasoning at ~1,000 tokens threshold to keep inference costs down while ensuring each reasoning pass has meaningful context [reasoning](https://honcho.dev/docs/v3/documentation/core-concepts/reasoning).

### Cross-session continuity

This is Honcho's core strength. Peer representations span **all sessions** a peer participates in. The `observe_me` configuration controls whether Honcho itself reasons about a peer's messages globally. `observe_others` at the session level enables **perspective-taking**: Alice can form a representation of Bob based only on what Bob said in sessions Alice participated in, completely different from what Charlie's representation of Bob contains [representation](https://honcho.dev/docs/v3/documentation/core-concepts/representation). Peer cards persist durable biographical facts (name, occupation, preferences, instructions, traits) across all sessions, with a 40-fact limit. Cards are directional—Alice's peer card for Bob is separate from Honcho's peer card for Bob [peer-card](https://honcho.dev/docs/v3/documentation/features/advanced/peer-card).

Configuration cascades hierarchically: message → session → workspace → global defaults, so fine-grained control over reasoning behavior is possible at any level [reasoning-configuration](https://honcho.dev/docs/v3/documentation/features/advanced/reasoning-configuration). The Dialectic agent (via `peer.chat()`) answers questions by searching conclusions semantically, pulling supporting messages, and tracing conclusions back to premises—providing **provenance** for answers.

### Domain-specific context structure

Honcho's formalism is the closest to domain structure: conclusions are generated through formal logic (deduction, induction, abduction) using custom models (Neuromancer XR) trained for logical rigor rather than plausible-sounding text [reasoning](https://honcho.dev/docs/v3/documentation/core-concepts/reasoning). Peer cards use structured fact types with prefix conventions (`INSTRUCTION:`, `PREFERENCE:`, `TRAIT:`). Conclusions have explicit premises, enabling traceability.

However, the domain model is general-purpose entity representation, not narrative-specific. There are no concepts of "character," "plot event," "theme," "foreshadowing," or "chapter." The reasoning framework operates on any peer data equally—it has no awareness of narrative structure.

---

## Weaver Gaps: What Each System Fails to Address

Weaver needs five capabilities none of these systems provide:

### 1. Literal recall with citation provenance

None of the systems preserve exact passages with stable citations. **Codex** items have IDs but no content addressing for quoted material. **Claude Code** references files by path and line number for code, but has no mechanism for citing specific sentences or paragraphs in prose documents. **Honcho** traces conclusions back to premises, but those premises are logical statements, not verbatim text from source material. A reader asking "what exactly did the author say about the magic system in chapter 12?" has no targetable answer in any system—summaries lose the exact wording that matters for literary analysis.

### 2. Interpretive understanding vs. literal text

All three systems conflate "what the text says" with "what we concluded about it." **Codex** compaction summaries merge observational items (file reads) with interpretive items (agent reasoning) into one lossy summary. **Claude Code** auto memory stores Claude's conclusions without distinguishing "this is what the codebase actually contains" from "this is what I inferred." **Honcho** has the most sophisticated reasoning but treats all conclusions as equally valid—there is no epistemic status flag distinguishing deductive conclusions (necessarily true from premises) from inductive (patterns with confidence) from abductive (best explanations). For Weaver, the distinction between "Chapter 3 states that Kai is 17 years old" (canon) and "Kai's behavior suggests unresolved trauma" (interpretation) is essential—readers must be able to disagree with interpretations without losing access to the underlying text.

### 3. Narrative-preserving compaction

Compaction in all three systems is **content-agnostic**. **Codex** trims oldest items first regardless of narrative significance. **Claude Code** `/compact` produces a general summary that may drop a seemingly minor event that is actually foreshadowing. **Honcho** summarizes every ~20 messages by count, not by narrative beat—a three-message exchange about a prophesy and a thirty-message exchange about logistics get the same summarization treatment. No system knows that "the protagonist found a mysterious key" is more narratively significant than "they ate breakfast." None preserve dramatic irony (reader knows something the character doesn't), temporal ordering in story-time vs. conversation-time, or the narrative function of a scene (setup, confrontation, resolution, cliffhanger).

### 4. Relationship continuity across conversations

**Honcho** comes closest with its peer representation and perspective-taking model—but it's designed for real users and agents, not fictional characters who evolve across a narrative arc. A character's peer card can store "Name: Kai" and "TRAIT: Impulsive" but cannot represent "Kai's relationship with Mira evolved from distrust (chapter 3) to grudging respect (chapter 7) to betrayal (chapter 12)." **Codex** has no entity model at all. **Claude Code** has no relationship tracking. None model: relationship states with temporal markers, mutual vs. asymmetric perspectives (what Kai thinks of Mira vs. what Mira thinks of Kai), relationship changes triggered by specific narrative events, or social network graphs within the story world.

### 5. Canon-vs-opinion separation with reader-specific state

All three systems assume a single agent/user perspective. **Honcho** allows multiple peers but each peer's representation is built from messages they authored—there's no concept of "the novel's immutable text" that multiple readers share but interpret differently. A reading companion needs: an **immutable canon layer** (the novel's text, chapter by chapter, never modified by reader opinions), **reader-specific interpretation layers** (what one reader believes about themes, characters, foreshadowing), and **cross-reader shared interpretations** (book club discussion notes). No system supports this layered epistemic model. Claude Code's memory files come closest in spirit (separate files for different scopes) but lack any structured relationship to a shared source text.

### 6. Additional structural gaps

- **No narrative timeline**: None track events in story-chronological order independent of conversation order.
- **No chapter/scene boundaries**: None treat document structure as semantically meaningful.
- **No reading-progress tracking**: None model "the reader has read through chapter 8 but not chapter 9" as context that gates what should be discussed.
- **No spoiler management**: None distinguish what information is available to a reader at a given point in the narrative from what is known to the system from later chapters.
- **Token economics mismatch**: All three optimize for coding workflows (a few large files, many small interactions). Novel reading involves a different pattern: a large static text corpus with occasional short queries, where the cost of re-reading the source text must be balanced against the quality degradation of summarization.

### Severity assessment

| Gap | Codex | Claude Code | Honcho |
|-----|-------|-------------|--------|
| Literal recall + citation | No mechanism | File/line only | Premise tracing, not verbatim |
| Canon vs interpretation | Single namespace | Single namespace | Deduction vs induction, but no canon layer |
| Narrative-preserving compaction | Oldest-first trimming | General summary | Summarizer is count-driven, not narrative-driven |
| Relationship continuity | No entity model | No entity model | Peer model extensible but not narrative-aware |
| Reader-specific state layers | Single thread | CLAUDE.md scoping | Perspective model but no shared canon |
| Narrative timeline | None | None | None |
| Spoiler management | None | None | None |

---

## Sources

### Kept
- Codex app-server-protocol v2: [thread.rs](https://github.com/openai/codex/blob/main/codex-rs/app-server-protocol/src/protocol/v2/thread.rs), [turn.rs](https://github.com/openai/codex/blob/main/codex-rs/app-server-protocol/src/protocol/v2/turn.rs), [item.rs](https://github.com/openai/codex/blob/main/codex-rs/app-server-protocol/src/protocol/v2/item.rs) — primary protocol definitions
- Codex compaction system: [DeepWiki](https://deepwiki.com/openai/codex/3.5.1-history-compaction-system) — detailed compaction architecture with source file references
- Claude Code context window: [docs](https://code.claude.com/docs/en/context-window) — official compaction survival rules and timeline
- Claude Code session management: [blog](https://claude.com/blog/using-claude-code-session-management-and-1m-context) — compaction vs clear vs rewind decision guide
- Claude Code memory: [docs](https://code.claude.com/docs/en/memory) — CLAUDE.md hierarchy, auto memory, path-scoped rules
- Claude Code subagents: [docs](https://code.claude.com/docs/en/sub-agents) — subagent context isolation and memory
- Claude Platform context editing: [docs](https://platform.claude.com/docs/en/build-with-claude/context-editing) — tool result clearing, thinking block clearing
- Honcho architecture: [docs](https://honcho.dev/docs/v3/documentation/core-concepts/architecture) — data model, data flow, reasoning pipeline
- Honcho representations: [docs](https://honcho.dev/docs/v3/documentation/core-concepts/representation) — peer representation composition and perspective-taking
- Honcho reasoning: [docs](https://honcho.dev/docs/v3/documentation/core-concepts/reasoning) — formal logic framework, token batching
- Honcho get-context: [docs](https://honcho.dev/docs/v3/documentation/features/get-context) — context retrieval parameters
- Honcho dreaming: [docs](https://honcho.dev/docs/v3/documentation/features/advanced/dreaming) — consolidation cycle, triggers, deduplication
- Honcho peer cards: [docs](https://honcho.dev/docs/v3/documentation/features/advanced/peer-card) — facts, limits, directional cards
- Honcho v3 announcement: [blog](https://plasticlabs.ai/blog/blog/Honcho-3) — v3 changes to deriver/dreamer split

### Dropped
- Reddit threads on Codex compaction bugs — anecdotal, superseded by protocol analysis
- Mintlify API reference pages — redundant with primary GitHub sources
- Community blog posts on CLAUDE.md templates — not official documentation
- Honcho v2 documentation — v3 is current and substantially different
- Claude Code cheatsheet/FAQ — redundant with primary docs
- arXiv papers on general context management — not specific to these three systems

---

## Gaps

1. **Codex ThreadHistoryMode enum variants**: The exact values (e.g., whether "paginated" is a variant) were not confirmed from the protocol source. The field is referenced in `ThreadStartParams` but its enum definition lives in `codex_protocol` (a separate crate), not in `app-server-protocol/v2/`.
2. **Codex remote compaction v2 prompt format**: The exact prompt template used for remote compaction v2 was not surfaced. The DeepWiki article references `RETAINED_MESSAGE_TOKEN_BUDGET` but doesn't include the summarization instructions.
3. **Claude Code auto memory file format**: The exact on-disk format of auto memory (JSON, Markdown, database) was not confirmed from primary sources. Documentation describes it as "first 200 lines or 25KB" but doesn't specify the storage format.
4. **Honcho reasoning model architecture**: Neuromancer XR is mentioned as the custom model but its training methodology, parameter count, and architecture details are not public.
5. **Codex cross-thread memory citation mechanism**: The `MemoryCitation` type exists in the protocol but the mechanism by which Codex decides what to cite across threads is opaque.