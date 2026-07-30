# Research prompt: Weaver context assembly, curation, and management

## Task

Analyze 6 agent systems and derive an innovative, Weaver-unique approach to
context assembly, curation, compaction, and management. Do not default to the
common RAG+truncation pattern. Explore hybrid approaches that none of the 6
systems use alone.

## The 6 systems to analyze

### 1. Pi (pi-mono, bb226f9c)
- **Context model:** JSONL append-only tree with compaction entries pointing to
  firstKeptEntryId. Summary is a new entry; originals are never deleted.
  Context reconstruction walks leaf to root, stopping at most recent compaction.
- **Key insight:** Non-destructive compaction. The summary is inspectable and
  replaceable. You can always go back.
- **Weakness for Weaver:** JSONL is a weak query model. No FTS, no relational
  invariants. Compaction is LLM-driven with no domain-specific structure.

### 2. LangGraph (1.2.9)
- **Context model:** BSP checkpoints scoped by thread_id. State is a typed
  dictionary with reducer semantics. Checkpoints support time travel and replay.
- **Key insight:** Typed state with deterministic merge semantics (reducers).
  Versioned checkpoints with parent pointers.
- **Weakness for Weaver:** Checkpoints are execution state, not semantic
  understanding. Replay re-executes nodes. No native concept of "summarize this
  conversation's narrative insights."

### 3. Hermes (f27d45e)
- **Context model:** SQLite with WAL, FTS5, schema versions, and session
  lineage. Compression can split parent/child sessions. Memory tools use
  bounded files with substring replace/remove.
- **Key insight:** SQLite as canonical store with full-text search. Session
  lineage for compression history. Separate file-backed memory from chat
  history.
- **Weakness for Weaver:** Compression mutates active context and can split
  session identity. Memory is substring-based, not attributed/source-linked.
  Raw reasoning stored in message table.

### 4. Codex (rust-v0.145.0)
- **Context model:** Thread → Turn → Item hierarchy. Context compaction and
  persisted items are separate concepts. `thread/resume` continues stored
  history. Items are typed (user, assistant, command, file, tool).
- **Key insight:** Clean separation between canonical items and context
  projection. Items are immutable evidence; context is a derived view.
- **Weakness for Weaver:** No relationship memory above conversations. No
  domain-specific context curation for narrative understanding.

### 5. Claude Code (Anthropic, 2025-2026)
- **Context model:** CLAUDE.md hierarchy (project root, subdirectories, auto
  memory). `/compact` replaces conversation with structured summary. Re-injects
  CLAUDE.md from disk after compaction. Path-scoped rules reload on file read.
  Subagents get separate context windows. Context editing removes stale tool
  results. Memory tool for cross-session file-based knowledge.
- **Key insight:** Multi-source context injection with clear survival rules
  across compaction. Subagents as context isolation. Memory as filesystem with
  agent-controlled CRUD. Context editing as automatic garbage collection of
  stale tool results.
- **Weakness for Weaver:** Designed for coding tasks (files, rules, hooks).
  Compaction summary is generic, not domain-structured. No concept of
  "narrative continuity" or "character timeline."

### 6. Honcho (v3)
- **Context model:** Workspace → Peer → Session → Message hierarchy. Messages
  trigger background formal reasoning. Reasoning produces representations
  (structured conclusions) that are queryable. Separate from the agent loop.
- **Key insight:** Reasoning as a background process separate from conversation.
  Representations are structured, queryable conclusions about entities. Not
  just retrieval, but derived understanding. Contradiction handling built in.
- **Weakness for Weaver:** Generic reasoning, not tuned for literary narrative.
  Representations are opaque to the developer. No compaction strategy for very
  long conversations.

## What makes Weaver different

Weaver is NOT a coding agent, a general chatbot, or a task runner. It reads
novels (3,000+ chapters), builds layered understanding, and talks about stories.

Unique requirements:

1. **Two kinds of memory**: literal recall (exact passages) AND interpretive
   understanding (themes, character arcs, causal chains, opinions).
2. **The novel is ground truth**: context must cite source passages.
   Interpretations are revisable; the source text is not.
3. **Relationship continuity**: the Weaver-owner friendship spans many
   conversations. Inside jokes, running theories, unresolved debates must
   survive across sessions.
4. **Canon vs opinion separation**: "Sunny said X in chapter 2047" is canon.
   "I think Sunny's motivation here is guilt" is an opinion. They must never
   be confused.
5. **Long single-work context**: 3,000+ chapters of one novel is different from
   3,000 short conversations. The work has internal structure (volumes, arcs,
   character threads) that context assembly should exploit.
6. **Compaction must preserve narrative**: summarizing "I debugged the auth
   module" is easy. Summarizing "we discussed whether Nephis's decision in
   chapter 1800 was manipulation or necessity, and I changed my mind twice" is
   hard. The compaction must preserve the shape of the discussion, not just
   the conclusion.

## Research questions

For each of the 6 systems, answer:

1. How does it decide WHAT stays in context vs what gets summarized/removed?
2. How does it handle the summary itself — is it inspectable, replaceable,
   versioned?
3. What survives compaction/restart and what doesn't?
4. How does it handle cross-session continuity (memory, preferences, learned
   facts)?
5. What domain-specific structure does context have (typed items, schemas,
   categories) vs generic text?

Then synthesize:

6. What hybrid approaches could Weaver use that NONE of the 6 use alone?
   Be creative. Consider:
   - Narrative-structured summaries (character threads, plot arcs, thematic
     clusters as separate compacted records)
   - Multi-level compaction (conversation summary + novel understanding
     summary + relationship summary at different granularities)
   - Reasoning-derived context (like Honcho) but tuned for literary analysis
   - Context as a versioned, queryable projection with source citations
   - Hybrid of Claude Code's context editing (stale tool removal) + Pi's
     non-destructive compaction + Honcho's background reasoning
   - Anything else you can think of that's genuinely novel

7. What is the single most innovative idea you can derive from combining
   pieces of these 6 systems specifically for a novel-reading companion?

## Output format

Produce a structured report with:

1. **System-by-system analysis** (one section per system, 3-5 paragraphs each)
2. **Weaver-specific gaps** (what each system fails to address for Weaver)
3. **Hybrid synthesis** (3-5 concrete hybrid approaches with rationale)
4. **Recommendation** (the one approach you'd build first, with clear
   justification)

Do not recommend "just use RAG" or "just truncate." Do not default to the
most common pattern. Explore the edges.
