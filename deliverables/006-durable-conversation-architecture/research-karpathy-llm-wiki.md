# Karpathy LLM Wiki: comparison with Weaver context research

## Source

Andrej Karpathy's [LLM Wiki gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) (April 4, 2026, ~2,500 words) describes a pattern for building persistent, agent-maintained knowledge bases. It is intentionally abstract: an idea file meant to be copy-pasted into any LLM agent so the agent and human instantiate it together for their domain.

Public implementations and analysis:

- [limecloud/agentknowledge](https://limecloud.github.io/agentknowledge/en/reference/llm-wiki-pattern): turns the idea into a portable package contract with `sources/`, `wiki/`, `compiled/`, `indexes/`, `runs/`, `schemas/`, `evals/`, and `KNOWLEDGE.md`
- [fasu.dev writeup](https://fasu.dev/writings/the-llm-wiki-pattern-a-second-brain-that-compounds/): first-person implementation with `/wiki-llms:ingest/query/lint/status/hotcache/page` workflow

## The core idea

> Instead of just retrieving from raw documents at query time, the LLM incrementally builds and maintains a persistent wiki. When you add a new source, the LLM reads it, extracts key information, and integrates it into the existing wiki: updating entity pages, revising topic summaries, noting contradictions, strengthening or challenging the evolving synthesis. The knowledge is compiled once and then kept current, not re-derived on every query.

Three layers:

| Layer | What it is | Who touches it |
|---|---|---|
| Raw sources | Immutable source documents (articles, papers, transcripts) | Human curates; LLM reads only |
| Wiki | LLM-generated markdown: summaries, entities, concepts, comparisons, synthesis | LLM owns entirely |
| Schema | Steering file (`CLAUDE.md` / `AGENTS.md`) tells the LLM how the wiki is structured, conventions, workflows | Human + LLM co-evolve |

Operations: **Ingest** (process new source, touch 10-15 pages), **Query** (read hotcache → index → drill into pages), **Lint** (contradictions, stale claims, orphans, missing cross-refs, data gaps). Good answers filed back into the wiki so exploration compounds.

Two special files: `index.md` (catalog of every page), `log.md` (append-only chronological timeline). At moderate scale (~100 sources, hundreds of pages), the index alone avoids embedding-based RAG.

## Hotcache

The most surprising pattern from implementations: `hotcache.md`, a ~500-word dense summary of wiki state. It is the first file the agent reads every session. Most questions are answerable from hotcache alone. Full context loading only for deep queries.

## Comparison with Weaver's 6-system research

### Where Karpathy aligns with the synthesis researchers

1. **Rejects RAG-first thinking.** Both Karpathy and the synthesis say: retrieval from raw sources rediscovers knowledge every query; build a persistent synthesis artifact instead. The synthesis researchers' central finding is identical to Karpathy's thesis.

2. **Persistent synthesis artifact.** Karpathy's wiki pages = the synthesis researchers' Narrative Threads. Both are LLM-maintained, updated incrementally, and survive across sessions.

3. **Health checks.** Karpathy's lint pass (contradictions, stale claims, orphans, missing cross-refs, data gaps) mirrors the synthesis researchers' call for contradiction detection and audit trails. The [fasu.dev writeup](https://fasu.dev/writings/the-llm-wiki-pattern-a-second-brain-that-compounds/) caught 52 broken wikilinks, 34 structural drift items, and 31 missing index rows in one lint pass: concrete proof this works.

4. **Human + LLM collaboration model.** Karpathy: "Humans curate sources, choose questions, review important updates, decide what matters. LLM summarizes, cross-references, updates pages, maintains indexes/logs, detects contradictions." Exactly aligns with Weaver's architecture where the owner guides exploration and the agent does the bookkeeping.

5. **Compounding over time.** "Good answers filed back into the wiki as new pages": the synthesis researchers' Approach 2 (Reasoning-Derived Literary Context) calls this "dreaming": asynchronous post-turn analysis stored for future use. Same concept, different name.

### Where Karpathy extends beyond the researchers' findings

1. **Filesystem-first over database-first.** Karpathy's wiki is plain markdown files in a directory. No SQLite, no vector DB, no graph DB. The synthesis researchers assumed SQLite (weaver.sqlite3 + workflows.sqlite3) as the canonical store. Karpathy argues plain files + git give version history, branching, collaboration, and portability for free. For Weaver's novel understanding, markdown files work well for wiki pages but the exact-turn-evidence requirement (replaying a specific turn) favors SQLite rows. Karpathy doesn't solve exact conversation replay.

2. **Hotcache as the context bootstrap.** None of the 6 surveyed systems (Pi, LangGraph, Hermes, Claude Code, Honcho, Codex) have the hotcache pattern. Pi compacts the JSONL tree at every session open; Claude Code re-reads CLAUDE.md from disk. But the idea of a single dense file that answers most questions without triggering full context loading is new. For Weaver, a `weaver.md` hotcache describing "who I am, what I believe about this novel, what we last discussed" would be the first thing read every session.

3. **Index + log as the only navigation.** At moderate scale, `index.md` (catalog) + `log.md` (timeline) avoid full-text search, vector search, and graph indexes entirely. The synthesis researchers assumed these were needed. Karpathy's claim is that they are not, at least not until the wiki is large. For a novel with 2,000+ chapters, the scale argument changes: an index of every chapter, character, and theme would be large enough to need search. But the pattern still works at each narrative thread's scale.

4. **Lint as a scheduled maintenance pass.** The synthesis researchers mention "audit" but Karpathy's lint is concrete: contradictions between pages, stale claims superseded by newer sources, orphan pages, missing cross-references, data gaps. A novel-reading lint pass might check: "Does the character page for Nephis reflect everything we've learned through chapter 427?" "Are there contradictions between the thematic analysis and the plot arc summary?" "What events have we claimed happened but haven't cited from the text?"

5. **Obsidian as the IDE.** Karpathy uses Obsidian as the human-facing viewer: graph view shows connections, backlinks show which pages reference a concept, Dataview queries frontmatter. Weaver could give the owner an Obsidian vault viewing the wiki side, with the agent maintaining it live. This is a UI idea the researchers didn't surface.

### Where Karpathy falls short for Weaver specifically

1. **No provenance tiers.** Karpathy's wiki pages don't distinguish canon (source-attested fact) from verdict (agent interpretation) from relationship (conversation-derived). A synthesized character page might mix "Nephis killed X" (canon) with "Nephis is motivated by guilt" (interpretation) with no way to tell which is which from the page alone. The synthesis researchers' canon/verdict/relationship tagging is essential for Weaver.

2. **No temporal anchoring per chapter.** Karpathy's wiki pages are atemporal: a page about a character describes them across all sources, not at a specific point in the narrative. Weaver needs "Nephis as of chapter 427" vs "Nephis as of chapter 1,500": different abilities, different relationships, different knowledge. Spoiler protection requires this. The synthesis researchers' "Active Reading Position pointer" and "Arc-Gated Retrieval" address this; Karpathy's wiki does not.

3. **Flat structure, no thread budgets.** Karpathy's wiki is one flat collection of markdown files. A long character page and a short relationship log compete for the same attention. The synthesis researchers' per-thread compaction budgets (character thread gets X tokens, relationship thread gets Y tokens, regardless of how long each is) prevent one dimension from squeezing out another.

4. **No conversation memory separation.** Karpathy's wiki stores everything as knowledge pages. It doesn't distinguish "what we talked about last session" from "what I've synthesized about the novel." Weaver needs both: exact conversation history for replay and relationship continuity, AND synthesized understanding. The synthesis researchers' Tier 1/2/3 compaction (conversation, novel understanding, relationship memory) separates these.

5. **Designed for human knowledge work, not fiction.** Karpathy's examples are personal knowledge, research, business, competitive analysis. Fiction has unique needs: character arcs, foreshadowing, unreliable narrators, thematic resonance, spoiler protection. Karpathy never addresses these.

## What Weaver should take

### Directly adopt

| Pattern | How it maps to Weaver |
|---|---|
| Raw sources are immutable | Novel chapters in `novels/` — same rule, already enforced by Plan 002 |
| Wiki is LLM-maintained | Narrative threads (character, plot, theme, world, relationship) maintained by the agent, not the owner |
| Schema file steers the agent | `WEAVER.md` or `AGENTS.md` tells the agent how to maintain threads, when to compact, how to lint |
| Hotcache read first every session | `weaver.md` hotcache: who I am, key beliefs about current novel, what we last discussed, reading position |
| Index + log for navigation | `index.md` catalog of threads + `log.md` of what happened; both updated after every session |
| Lint pass for health | Periodic health check: contradictions between threads, stale verdicts, un-cited canon claims, open questions |
| Good answers filed back | Every meaningful synthesis, comparison, or connection made during conversation becomes a wiki page |
| Git for versioning | Wiki is a git repo of markdown files; opinions change → version control, not deletion |

### Need domain adaptation

| Karpathy pattern | Weaver adaptation needed |
|---|---|
| Flat wiki pages | Narrative-partitioned threads with per-thread compaction budgets |
| No provenance | Every thread entry tagged `canon` / `verdict` / `relationship` with source citations |
| Atemporal pages | Thread entries anchored to reading position (chapter number); spoiler-gated retrieval |
| Single wiki for everything | Three-tier separation: conversation memory (SQLite), novel understanding (wiki threads), relationship memory (small, always in context) |
| Generic knowledge categories | Domain-specific thread types: character, plot_arc, theme, world_building, relationship |

## Relationship to 6-system research findings

The synthesis researchers recommended **Narrative-Thread Compaction with Canon-Verdict Separation** as the first build. Karpathy's LLM Wiki is the closest existing pattern to that recommendation, but it provides the *container* (wiki of maintained markdown) without the *domain structure* (fiction-specific threads, provenance, temporal anchoring).

The strongest combination: Karpathy's wiki-as-filesystem-container with the synthesis researchers' narrative thread structure inside it. Markdown files per thread, YAML frontmatter for provenance and chapter anchoring, hotcache for session bootstrap, lint for health, git for versioning. SQLite stays for exact conversation replay; the wiki is for understanding.

This hybrid is meaningfully different from every surveyed system:

- Not Pi's JSONL tree (flat, no domain structure, no provenance)
- Not LangGraph's state (ephemeral, no persistent synthesis artifact)
- Not Hermes's FTS5 compression (in-place, no structured threads)
- Not Claude Code's /compact (summary-based, no wiki artifact)
- Not Honcho's reasoning store (generic, not narrative-tuned)
- Not Codex's compaction items (oldest-first, no entity model)

It is the only approach that gives Weaver a maintained, compoundable, narrative-aware understanding that survives session boundaries.
