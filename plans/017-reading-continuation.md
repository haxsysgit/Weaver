# Plan 017: Reading continuation to chapter 3148

> **Executor instructions:** Continue the private Shadow Slave story
> notebook from its current position (chapter 1500, checker-verified) to
> the end of the shelf (chapter 3148) by direct, sequential source
> reading. The notebook is the story graph of the novel; the novel text
> is the only source of truth. This plan governs the 1501-3148 leg; the
> 1001-1500 leg was already merged and checker-PASS under Plan 012 run 3.

## Status

- **Tooling:** repo commands via `uv`; the notebook checker via
  `uv run python scripts/check_story_notebook.py`.
- **State:** Admitted 2026-08-10 by owner directive ("draft a plan 17
  for the reading we are doing till chp 3148, then continue the reading
  and dont stop till chp 3148"). In implementation.
- **Depends on:** Plan 012 (the notebook, its checker schema, and the
  reading method), Plan 014 (find_text for cross-chapter connection at
  arc beats), Plan 016 (the shelf is current through chapter 3148).
- **Priority:** P1 (the owner's main directive)
- **Effort:** L
- **Risk:** Medium (context loss, extraction drift, checker failures at
  milestones)

## Owner direction (locked decisions)

1. **Read straight, do not stop.** Direct source reading and
   canonical-notebook writing continue uninterrupted through chapter
   3148. No pausing every N chapters; no asking the owner anything on
   the way. Checker runs only at milestones 2000, 2500, 3000, and 3148.
2. **Source text is the only source of truth.** Every chapter is read
   end-to-end (one chapter always fits one read; never tail-only or
   head-only). Line 1 is the title heading, never evidence. `nl -ba`
   line numbers are truth over `wc -l` (chapter files lack trailing
   newlines).
3. **The notebook tells the story.** 2-4 story-value statements per
   chapter (deeper-level facts, plot points, story progression), never
   summaries of unimportant dialogue; paraphrase, never quote; bracket
   system messages reworded. Every statement carries real line-range
   evidence, links to canonical entity ids, and first_known_chapter.
4. **Connect the story.** Cross-chapter semantic edges (cross-NNN)
   at arc beats with verified statement ids; find_text 3-5 calls per
   ~70-chapter batch at arc beats only. Resolve only relevant mysteries.
5. **Write as you go.** Records/notes are merged per batch (one
   temporary generator script per batch) so canon never survives only
   in conversation context; connections.jsonl regenerated preserving
   all existing cross-NNN edges; permissions re-hardened to dirs 700 /
   files 600 after every regeneration.
6. **Bulk reading is solo.** No subagents for bulk reading (about 2x
   cost, slower). The orchestrating agent is the reader and the sole
   writer.

## Scope

- Read Shadow Slave chapters 1501-3148 (1648 chapters) in sequential
  batches and write, per chapter:
  - `reading/NNNN.json` master records (schema_version 1, chapter,
    source path/sha256/line_count, run, statements with id/kind/
    statement/evidence/links/first_known_chapter/later_corrections);
  - `chapters/NNNN.md` notes ('# Chapter NNNN', notebook-record
    marker, per-statement sections with statement-id markers);
  - new entity pages (people/places/powers/items/groups) when records
    link ids without pages, plus alias markers where the same entity
    carries multiple names.
- Regenerate `connections.jsonl` (conn- links per statement-link pair,
  deduped, plus all existing cross-NNN semantic edges), rebuild entity
  pages only if a batch introduces ids without pages, update
  `reading-progress.json`, `index.md`, `log.md`, `arcs.md` per batch.
- Run the checker only at milestones 2000, 2500, 3000, and 3148
  (`--through N --novel-dir novels/shadow-slave`), fixing every problem
  it finds before continuing.
- Final state: contiguous, checker-PASS notebook through 3148 with the
  story graph told as one story, ready for the owner's comparison and
  the later retrieval/memory work.

## Out of scope

- Any change to `src/weaver` application code (unless a script bug is
  proven).
- Embeddings, retrieval, vector search, RAG, or the reading tools'
  runtime.
- The web chat, the agent loop, or any product surface.
- Editing chapter files, urls.md, or the shelf layout.
- Subagent fleet reading; re-reading chapters already merged.
- Committing any notebook content (the notebook is private, untracked,
  owner-only 700/600).

## Deterministic proof / verification floor

1. Per batch: every record's evidence ranges lie within the chapter's
   real line count, statements are paraphrases (no copied source
   prose), links resolve to existing entity pages or newly created
   ones, notes match their JSON records.
2. Milestones: checker PASS at 2000, 2500, 3000, and 3148 with 0
   problems; `reading-progress.json` through/last_fully_checked equal
   to the milestone.
3. Private hygiene: no `novels/` file modified; no notebook content,
   novel prose, or private state staged in any commit; perms dirs 700 /
   files 600 after every regeneration.
4. Commits carry only plan/docs updates and no private story content.

## STOP conditions

- The owner changes scope (chapter range, method, or destination).
- The checker fails at a milestone with problems that cannot be
  resolved from the source text.
- A contradiction with the source text cannot be reconciled (record it
  as a `conflict`-kind statement, never silently resolve).
- Notebook content risks entering a commit.
- Context loss mid-batch: stop, write what was read into the notebook
  first, then continue.

## Slices

1. **Plan and admit** — this plan doc, learning gate confirmation
   (owner directive 2026-08-10), plans/README row, deliverable scaffold
   (commit 'plan 017: reading to 3148 admitted').
2. **Read 1501-2000** — sequential batches, records/notes/pages/
   connections per batch, checker at 2000.
3. **Read 2001-2500** — same discipline, checker at 2500.
4. **Read 2501-3000** — same discipline, checker at 3000.
5. **Read 3001-3148 and close** — final batch, checker at 3148,
   continuity files final, owner gate: the complete 1-3148 notebook
   for the owner's comparison.
