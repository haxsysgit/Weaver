# Research: Innovative Context Assembly Approaches for Weaver

## Summary

Weaver needs a context assembly system that none of the 6 surveyed systems (Pi, LangGraph, Hermes Agent, Claude Code, Honcho, Codex/OpenAI Agents SDK) provides off the shelf. The core challenge is unique: maintain a literary understanding of 3,000+ novel chapters across multiple interpretive layers, a continuing friendship with the owner, and a strict boundary between source-text canon and Weaver's own interpretations — all within a finite context window. The recommended first build is **Narrative-Thread Compaction with Canon-Verdict Separation**: structured summaries partitioned by narrative dimension (characters, plot arcs, themes, world-building), each annotated with a provenance tier that marks every statement as either "canon" (source-attested fact) or "verdict" (Weaver's interpretation). This directly addresses the canon/opinion confusion risk and gives each story dimension independent compaction pressure.

---

## Recommendation (Build First)

### Narrative-Thread Compaction with Canon-Verdict Separation

Weaver's context should not be one flat summary. Instead, maintain 4-6 independent narrative threads — Character Threads, Plot Arc Summary, Thematic Clusters, World-Building Facts, Relationship Log (owner-Weaver friendship), and an Active Reading Position pointer — each with its own compaction budget. Every statement in these threads carries a `provenance` tag: `canon` (chapter:passage citation), `verdict` (Weaver's interpretation, marked as revisable), or `relationship` (owner-derived, conversation-sourced).

**Why this first:** It's the smallest change that prevents Weaver's most dangerous failure mode — confidently asserting an interpretation as though it's canon, or forgetting which beliefs came from the text versus the conversation. It also gives each narrative dimension independent pressure: a long character-arc thread can compact without squeezing out the relationship log. The structure is implementable as a JSON schema over the existing LangGraph state, no new infrastructure needed.

**Minimal first implementation:** A `NarrativeThread` data class with `thread_id`, `thread_type` (enum), `entries` (list of `{content, provenance_tier, source_refs, compacted_at}`), and a `compact()` method that summarizes entries older than a recency threshold within that thread only. The LangGraph state carries `active_threads: dict[str, NarrativeThread]` alongside the conversation history. Compaction runs per-thread when the total threaded context exceeds a budget.

---

## Approach 1: Narrative-Thread Compaction with Canon-Verdict Separation

### What it borrows

- **Hermes Agent's dual compression**: The idea that compaction happens at multiple levels independently, with different thresholds (gateway hygiene at 85% vs. agent compressor at 50%). Applied here: each narrative thread has its own compaction trigger and budget, rather than one monolithic "compress everything" pass. [Hermes Agent docs](https://hermes-agent.nousresearch.com/docs/developer-guide/context-compression-and-caching/)
- **Honcho's structured reasoning output**: Honcho produces explicit conclusions, deductive inferences, inductive patterns, and abductive explanations as separate structured records, not one blob. Weaver's threads borrow this: character facts (`canon`) are explicit extraction, thematic clusters are inductive pattern recognition across chapters, opinions are abductive (best explanation for ambiguous narrative events). [Honcho reasoning docs](https://honcho.dev/docs/v3/documentation/core-concepts/reasoning)
- **Anthropic's context engineering philosophy**: Organize context into distinct named sections with XML/markdown delimiters so the model can attend to the right section. Weaver's threads are the literary equivalent: `## Character: Nephis`, `## Arc: Forgotten Shore`, `## Theme: Power and Sacrifice`. [Anthropic: Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

### Why it fits Weaver specifically

Weaver's job is to discuss a novel intelligently. When the owner asks "What did Nephis really want in the Forgotten Shore arc?", Weaver needs: (a) canon facts about Nephis's actions in those chapters, (b) its own previous interpretations, and (c) awareness of what the owner has already discussed about Nephis. A flat summary conflates all three. Threaded compaction keeps them distinct while all can be independently compacted, retrieved, and updated. New chapters don't force re-compaction of character threads that haven't changed; a new conversation opinion can update the verdict layer without touching canon.

The canon/verdict separation is the critical safety property: Weaver must never present an interpretation as canon. Tagging every thread entry with its provenance tier makes this enforceable — the prompt can include `When citing canon facts, use only entries tagged 'canon'. When sharing interpretations, you may use entries tagged 'verdict' but must label them as your own analysis.` The model itself becomes the enforcement mechanism.

### Minimal first implementation

```python
@dataclass
class ThreadEntry:
    content: str
    provenance: Literal["canon", "verdict", "relationship"]
    source_refs: list[str]  # e.g., ["ch. 427 ¶3-7"]
    created_at: float
    compacted_at: float | None

@dataclass
class NarrativeThread:
    thread_id: str
    thread_type: Literal["character", "plot_arc", "theme", "world", "relationship"]
    entries: list[ThreadEntry]
    compaction_threshold_tokens: int  # per-thread budget

    def compact(self, model_call: Callable) -> None:
        """Summarize entries older than recency window within this thread only."""
        ...
```

The LangGraph state adds `narrative_threads: dict[str, NarrativeThread]`. On each turn, threads are serialized into the system prompt as named sections. When any thread exceeds its token budget, only that thread gets compacted — replacing older entries with a summary that preserves provenance tags on the compressed record.

---

## Approach 2: Reasoning-Derived Literary Context (Honcho-for-Fiction)

### What it borrows

- **Honcho's Deriver/Dreamer architecture**: A real-time "Deriver" extracts explicit claims and deductive conclusions from each reading session; a background "Dreamer" periodically consolidates across sessions, finds contradictions, discovers patterns, and infers explanations. Applied to fiction: the Deriver processes a reading packet and outputs structured observations; the Dreamer revisits accumulated observations across arcs to find foreshadowing, thematic resonance, and character-arc contradictions. [Honcho architecture](https://honcho.dev/docs/v3/documentation/core-concepts/reasoning)
- **LangGraph's store/state separation**: Short-term graph state holds the current reading session; the long-term store holds accumulated Deriver outputs. The Dreamer runs as a background node triggered by store-write events, not during live conversation. [LangGraph memory concepts](https://docs.langchain.com/oss/python/concepts/memory)
- **Claude Code's context editing**: Stale or contradicted observations get marked as superseded (not deleted) — a placeholder remains so Weaver knows "I used to think X, but after chapter Y it was revealed that Z." This is the literary equivalent of Claude Code's placeholder-for-removed-tool-output pattern. [Claude context editing](https://platform.claude.com/docs/en/build-with-claude/context-editing)

### Why it fits Weaver specifically

Literary analysis is inherently reasoning-heavy. Foreshadowing is only visible in hindsight; character motivations are inferred from actions across hundreds of chapters; thematic patterns span arcs that may be read weeks apart. Traditional RAG retrieves "what was said" — but Weaver needs "what was implied." Honcho's formal-logic approach (explicit → deductive → inductive → abductive) maps perfectly to literary understanding: explicit = what happened in the text, deductive = what must be true given what happened, inductive = patterns across events, abductive = best explanation for ambiguous behavior.

The Deriver/Dreamer split is also practical: live conversation can't wait for the Dreamer's cross-arc consolidation, but the Dreamer's output (foreshadowing detected, thematic connections) can be pre-computed and ready when the owner asks about them.

### Minimal first implementation

A two-phase pipeline:
1. **Deriver** (runs after each reading session): Takes the reading packet + existing thread state, outputs new `ThreadEntry` objects with `provenance` tags. This is a single model call that produces structured JSON.
2. **Dreamer** (runs async, triggered by N new Deriver outputs): Takes all entries across threads, identifies contradictions (`entry_a contradicts entry_b`), consolidations (`entry_a and entry_b imply entry_c`), and pattern discoveries. Outputs new entries with `provenance: verdict` and `source_refs` pointing to the input entries.

The Dreamer runs on a timer or accumulation trigger, not during conversation. Its outputs are pre-loaded into the relevant threads before the next conversation turn begins.

---

## Approach 3: Arc-Gated Retrieval with Narrative Position Tracking

### What it borrows

- **LangGraph's graph-based state + checkpointing**: The novel's structure is a graph of arcs, chapters, and scenes. LangGraph's StateGraph model is a natural fit: nodes are narrative units, edges are temporal/causal transitions, and Weaver's "reading position" is the current graph node. Checkpointing across conversations means resuming at the right narrative position. [LangGraph persistence](https://docs.langchain.com/oss/python/langgraph/persistence)
- **Hermes Agent's tail protection**: Always keep the most recent narrative context uncompressed (the current arc + last N scenes). Hermes does this with `protect_last_n` and `min_tail_user_messages`; Weaver does it with `protect_current_arc` and `protect_adjacent_scenes`. [Hermes configuration](https://hermes-agent.nousresearch.com/docs/developer-guide/context-compression-and-caching/)
- **Claude Code's just-in-time retrieval**: Don't pre-load the entire novel into context. Maintain lightweight identifiers (arc name, chapter range, scene index) and retrieve full scene text only when the conversation demands it. [Anthropic: context retrieval and agentic search](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) + [LumberChunker narrative-aware segmentation](https://avduarte333.github.io/projects/lumberchunker/)

### Why it fits Weaver specifically

Fiction has natural structural boundaries — arcs, volumes, chapters, scenes. Chunking by token count (the default in every RAG system) splits scenes mid-dialogue, destroying narrative coherence. Arc-gated retrieval respects the story's own structure. When the owner asks a question, Weaver retrieves:
1. The arc summary for the relevant story section (pre-computed, compact)
2. The full text of the current scene (if the question is about recent events)
3. Character state at the arc boundary (what was known/true at that point in the story)

The reading position tracker is particularly important for a 3,000-chapter novel: it prevents Weaver from accidentally "spoiling" future events when discussing an earlier arc, and it ensures that character state is era-appropriate (Nephis in chapter 100 is not the same as Nephis in chapter 2,000).

### Minimal first implementation

A `NarrativeIndex` that maps `arc_id → {chapter_range, arc_summary, character_states, theme_tags}`. The LangGraph state carries `reading_position: NarrativePosition(chapter, arc_id, scene_index)`. On each conversation turn, a retrieval node fetches: the current arc summary, adjacent scene text (if within the protection window), and character state at the reading position. Everything else is fetched just-in-time via a `lookup_passage` tool.

---

## Approach 4: Multi-Tier Compaction at Three Time Scales

### What it borrows

- **Hermes Agent's dual compression**: Gateway hygiene (85% safety net) + Agent compressor (50% primary). Weaver extends this to three tiers. [Hermes docs](https://hermes-agent.nousresearch.com/docs/developer-guide/context-compression-and-caching/)
- **Honcho's token batching**: Accumulate ~1,000 tokens before triggering a reasoning pass. Weaver's Tier-2 (Novel Understanding) and Tier-3 (Relationship Memory) use similar batching — they don't compact every turn, only when enough new material has accumulated. [Honcho reasoning](https://honcho.dev/docs/v3/documentation/core-concepts/reasoning)
- **LangGraph's store vs. state**: Live conversation in state (Tier-1), durable understanding in store (Tier-2 and Tier-3). [LangGraph memory](https://docs.langchain.com/oss/python/concepts/memory)
- **Codex/OpenAI Agents SDK's checkpoint/rehydration**: Snapshot and restore agent state across sessions. Tier-2 understanding survives process restarts. [OpenAI Agents SDK](https://openai.com/index/the-next-evolution-of-the-agents-sdk/)

### Why it fits Weaver specifically

Weaver operates at three distinct time scales that should not share a single compaction strategy:

| Tier | Scope | Compaction trigger | Durability |
|------|-------|--------------------|-----------|
| **Tier-1: Conversation** | Current and recent chat turns | 50% of context window (Hermes-style) | Ephemeral — lives in graph state |
| **Tier-2: Novel Understanding** | Accumulated story knowledge across reading sessions | After N new chapters read, or when thread budgets exceed threshold | Durable — lives in LangGraph store, survives restarts |
| **Tier-3: Relationship Memory** | What Weaver knows about the owner, shared history, friendship tone | After significant new disclosures or every M conversations | Most durable — rarely compacted, always present |

The key insight: these tiers decay at different rates. Tier-1 (conversation) needs aggressive compaction because chat turns are high-volume and low-signal. Tier-2 (novel understanding) grows slowly with reading sessions and should be compacted conservatively — losing a thematic insight is worse than losing a conversational pleasantry. Tier-3 (relationship) is the smallest and most precious; it should almost never be compacted and should always be present in context.

### Minimal first implementation

Three data structures in the LangGraph state:

```python
class WeaverState(TypedDict):
    # Tier 1: conversation — standard message list with Hermes-style compaction
    messages: list[BaseMessage]
    
    # Tier 2: novel understanding — NarrativeThread objects (from Approach 1)
    narrative_threads: dict[str, NarrativeThread]
    
    # Tier 3: relationship — small, curated, always-present
    relationship_card: RelationshipCard  # owner_name, shared_history, tone, known_preferences
```

Compaction nodes: `compact_conversation` (Hermes-style, frequent), `compact_narrative_threads` (per-thread, budget-triggered), `update_relationship_card` (explicitly invoked, rarely). The relationship card is always serialized first in the system prompt and never truncated.

---

## Approach 5: Contradiction-Aware Versioned Knowledge with Source Attribution

### What it borrows

- **Honcho's consolidation reasoning**: Honcho detects contradictory conclusions and resolves them. Weaver extends this: contradictions aren't errors, they're features — novels contain unreliable narrators, character lies, and ambiguous events. A contradiction between "Nephis said X" (canon) and "Nephis actually meant Y" (verdict) is tracked and versioned, not collapsed. [Honcho reasoning](https://honcho.dev/docs/v3/documentation/core-concepts/reasoning)
- **Claude Code's context editing**: When a claim is superseded, the old claim gets a placeholder, not deletion. Weaver's version chain: `v1: believed X (ch. 100) → v2: X contradicted by ch. 427 → v3: resolved as Y (ch. 500)`. The version history is the provenance trail. [Claude context editing](https://platform.claude.com/docs/en/build-with-claude/context-editing)
- **Anthropic's structured note-taking**: "Persist notes outside the context window" and re-insert only what's needed. Weaver's version chain is stored externally; only the current version (with a pointer to the chain) enters context. [Anthropic: effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- **Provenance research (MDPI, ACL 2024)**: Grounded KG extraction where every triple links to exact source spans. Weaver's equivalent: every claim about the novel links to `chapter:paragraph` and carries a `confidence` and `provenance_tier` tag. [MDPI source-tracked graphs](https://www.mdpi.com/2073-431X/15/3/178), [ACL attribute-first generation](https://aclanthology.org/2024.acl-long.182/)

### Why it fits Weaver specifically

Weaver's core requirement is "never confuse canon with opinion." This is fundamentally a provenance problem. Every statement Weaver makes about Shadow Slave must be traceable to either a specific passage (canon) or a specific reasoning chain (verdict). When the owner challenges Weaver — "Wait, did the novel actually say that?" — Weaver must be able to cite the chapter or admit it's an interpretation.

More interestingly, novels are full of deliberate ambiguity. A versioned knowledge approach means Weaver can hold multiple interpretations simultaneously: "The text says X, which could mean A (if we trust the narrator) or B (if we believe the foreshadowing in ch. 200). I lean toward B, but here's the evidence for both." This is the literary-analysis equivalent of Honcho's abductive reasoning layer.

The version chain also handles the "I changed my mind" case naturally: Weaver forms an opinion at chapter 100, discovers contradictory evidence at chapter 427, and updates. The old opinion isn't discarded (the owner might ask "Didn't you used to think...?"), but it's marked as superseded with a pointer to the resolution.

### Minimal first implementation

```python
@dataclass
class VersionedClaim:
    claim_id: str
    content: str  # the statement
    provenance_tier: Literal["canon", "verdict", "relationship"]
    source_refs: list[str]  # canonical source: ["ch. 427 ¶3-7"]
    confidence: float  # 1.0 for canon, 0.0-1.0 for verdicts
    parent_claim_id: str | None  # None for root claims, set for updates
    superseded_by: str | None  # claim_id of the newer claim that replaces this
    created_at: float
```

Storage: claims live in a SQLite table (like pi-hermes-memory's FTS5 approach) with indexes on `provenance_tier`, `source_refs`, and `superseded_by`. On context assembly, only "current" claims (not superseded) within budget enter the prompt. The `inspect_claim` tool lets Weaver follow the version chain when the owner asks about provenance.

---

## Sources

### Kept
- [Honcho Reasoning Documentation](https://honcho.dev/docs/v3/documentation/core-concepts/reasoning) — Core source on background reasoning with formal logic, Deriver/Dreamer split, token batching
- [Hermes Agent: Context Compression and Caching](https://hermes-agent.nousresearch.com/docs/developer-guide/context-compression-and-caching/) — Dual compression system, pluggable engines, in-place compaction, tail protection
- [Anthropic: Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — Foundational philosophy: compaction, structured note-taking, just-in-time retrieval, multi-agent architectures
- [Claude Platform: Context Editing](https://platform.claude.com/docs/en/build-with-claude/context-editing) — Stale tool removal with placeholders, memory integration
- [LangGraph: Memory Concepts](https://docs.langchain.com/oss/python/concepts/memory) — Store/state separation, checkpointer persistence, history reduction
- [OpenAI: The Next Evolution of the Agents SDK](https://openai.com/index/the-next-evolution-of-the-agents-sdk/) — Checkpoint/rehydration, memory + compaction, sandbox over prompt
- [LumberChunker: Narrative-Aware Segmentation](https://avduarte333.github.io/projects/lumberchunker/) — Splitting at semantic boundaries vs. token count
- [MARCUS: Character Arc Pipeline](https://arxiv.org/abs/2510.18201) — Event extraction + emotion/sentiment for arc modeling in fiction
- [Narrative World Model](https://arxiv.org/abs/2607.05577) — Tracking evolving story state (secrets, relationships, setup/payoff)
- [APEX-MEM: Entity-Centric Graph Memory](https://aclanthology.org/2026.acl-long.749/) — Structured temporal graph for conversation memory
- [MOSAIC: Entity-Typed Graph with Conflict Detection](https://arxiv.org/abs/2607.16211) — Entity graph with contradiction handling
- [MDPI: Source-Tracked Knowledge Graphs](https://www.mdpi.com/2073-431X/15/3/178) — KG with grounded source spans for provenance
- [ACL 2024: Attribute-First Generation](https://aclanthology.org/2024.acl-long.182/) — Generate from pre-selected source segments for citation quality
- [pi-hermes-memory](https://pi.dev/packages/pi-hermes-memory) — SQLite FTS5 for searchable session memory

### Dropped
- Inflection Pi "About" page — no architectural detail, only marketing copy
- Reddit threads on Pi/Hermes/Claude — anecdotal, not authoritative
- General LLM context papers without narrative-specific applications — relevant to the field but not to Weaver's unique challenge
- LangChain how-to guides on memory management — covered by the official LangGraph concept docs
- Pi.ai subagents documentation — generic subagent patterns, not specific to narrative or literary use cases

---

## Gaps

1. **Actual memory footprint of threaded compaction**: The approaches assume per-thread compaction reduces context bloat, but the actual token counts for a real 3,000-chapter novel aren't known. A benchmark against a flat-summary baseline on a subset of Shadow Slave would validate the approach.
2. **Dreamer latency and cost**: Honcho uses custom small models for reasoning. Without custom models, the Dreamer pass would use a frontier LLM, and its cost at Weaver's scale (3,000 chapters × N threads) is unknown. Honcho's token batching strategy (accumulate ~1K tokens before reasoning) is a starting point but may need tuning.
3. **Narrative position tracking granularity**: How fine-grained should the reading position be? Chapter-level? Scene-level? Paragraph-level? The answer depends on how the conversation actually flows — some questions are about specific passages, others about broad arcs.
4. **Canon/verdict boundary cases**: Some claims are both (e.g., "The narrator says Nephis is cold, but her actions show warmth"). The provenance model may need a `mixed` tier or a primary/secondary tier assignment.
5. **The two analysis files (research-pi-langgraph-hermes.md and research-codex-claude-honcho.md) do not exist yet** — this synthesis was produced from direct research on all 6 systems. When those files are created, cross-checking may surface additional details or contradictions.

---

## Supervisor Coordination

No coordination requested. The synthesis is complete and self-contained.

```acceptance-report
{
  "criteriaSatisfied": [
    {
      "id": "criterion-1",
      "status": "satisfied",
      "evidence": "Delivered complete research synthesis at /home/hax/novelfriend/deliverables/006-settle-langgraph-boundary/research-synthesis.md containing 5 concrete hybrid approaches with rationale, borrowed-system attribution, Weaver-specific fit analysis, and minimal first implementation descriptions. All source citations are inline and linked."
    }
  ],
  "changedFiles": [
    "/home/hax/novelfriend/deliverables/006-settle-langgraph-boundary/research-synthesis.md"
  ],
  "testsAddedOrUpdated": [],
  "commandsRun": [],
  "validationOutput": [
    "File written successfully at the authoritative path.",
    "5 approach sections present with subsections: What it borrows, Why it fits Weaver, Minimal first implementation.",
    "Top recommendation present (Narrative-Thread Compaction with Canon-Verdict Separation).",
    "All 6 surveyed systems (Pi, LangGraph, Hermes Agent, Claude Code, Honcho, Codex/OpenAI) referenced across approaches.",
    "Gaps section documents 5 acknowledged unknowns.",
    "None of the 5 approaches are 'just use RAG' or 'just truncate' — all are novel hybrids."
  ],
  "residualRisks": [
    "The two prerequisite analysis files (research-pi-langgraph-hermes.md and research-codex-claude-honcho.md) do not exist yet. Synthesis was produced from direct research. Cross-check against those files when created may surface additional details.",
    "Approach memory footprints and Dreamer costs are estimated, not benchmarked against actual Shadow Slave data.",
    "Canon/verdict boundary for ambiguous claims may need a mixed provenance tier.",
    "Narrative position tracking granularity is unresolved — chapter vs. scene vs. paragraph-level."
  ],
  "noStagedFiles": true,
  "diffSummary": "Created research-synthesis.md with 5 hybrid context assembly approaches for Weaver, one top recommendation, sourced from direct research on all 6 systems plus narrative chunking, multi-level memory, provenance tracking, and literary analysis AI literature.",
  "reviewFindings": [
    "no blockers"
  ],
  "manualNotes": "The two prerequisite analysis files noted in the task description do not exist on disk. I proceeded with direct web research covering all 6 systems (Pi, LangGraph, Hermes Agent, Claude Code, Honcho, Codex/OpenAI). The synthesis is self-contained and cites primary sources directly. When the subagent-written analysis files are produced, compare findings — there may be implementation-level details in those files (especially around LangGraph code patterns and Hermes configuration) that could enrich the minimal implementation sketches."
}
```