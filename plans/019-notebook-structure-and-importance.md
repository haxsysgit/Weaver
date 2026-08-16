# Plan 019: Notebook structure and character importance

> **Executor instructions:** Fix how the notebook is organized before
> any content sweep. Produce (a) a wiki-grounded page standard, (b) a
> character importance ranking, (c) overview/table articles, (d) a
> structure checker. No mass page edits here — that is Plan 020.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff); wiki reads via the
  shadowslave.fandom.com MediaWiki API (read-only, no key).
- **State:** admitted 2026-08-15 (owner: "admit both now").
- **Depends on:** 018.5 slices 1-4 (closed); 018.5 slice 5 (eval data +
  embed speed benchmark) is done but the colab re-embed (018.5 slice 6)
  is BLOCKED on this plan and Plan 020: the index must not be rebuilt
  from a stale, unstructured notebook. v1 plan continues after 020.
- **Priority:** P1
- **Effort:** M
- **Risk:** Medium — content decisions (what is "important", how deep
  pages go) are judgment calls; owner gates on the ranking method and
  page standard before the sweep.
- **Budget:** every slice is live — the executing agent's own model
  (pi runs on the DeepSeek API with the owner's key), so agent work is
  billed and measured, not free. Per the arinze-plans doctrine:
  (a) Agent-context work (slices 3-8): wiki study, page standard,
  ranking, receipts, overviews, checker — pi's own context, measured
  per slice in the session usage and recorded in results.md. Scale
  from the slice-2 measurement: ~$0.01-0.05 per agent batch; slices
  3-8 estimated ~$0.20-0.60 total. (b) Slice 2 (reading 3149-3160)
  was the live read — already DONE at $0.0585 (measured 2026-08-16,
  two budgeted subagent runs: $0.0453 + $0.0132). Weaver has no
  notebook-writing tool (chat registry is read-only; the checker
  validates but never writes), so all reading is agent work: pi reads
  the chapter, extracts statements, writes reading/NNNN.json, runs
  the checker. Cap: $3 total (owner-set 2026-08-16).

## Owner direction (locked decisions)

1. (2026-08-15) The notebook is stale and unstructured: important lore
   is missing, entity pages are not formatted for retrieval, the wiki
   is better organized. Fix the shelf before re-embedding.
2. (2026-08-15) Full sweep of entity pages, and we now need to rank the
   importance of characters. Split into two side plans (019 + 020) so
   the work can be done and then we come back to v1.
3. (2026-08-15) Large sweep of the wiki first — see how info is
   structured — before designing our standard.
4. (2026-08-15) Reading of ch3149-3160 must finish before the entity
   sweep (notebook current to 3160 first).

## Scope

- Wiki structure study: how shadowslave.fandom.com orders entity info
  (infobox fields, section order, tables, categories, importance
  taxonomy) — evidence file with the observed patterns.
- A page standard for our notebook: the section skeleton every entity
  page follows (headline, aliases, first_known, facts, relationships,
  arc timeline), plus group/overview page shape (tables with
  titles/domains, lore sections with chapter citations).
- Character importance ranking: a deterministic method (mention count,
  chapter spread, arc presence, relationships degree, role flags) that
  produces a tier list — no LLM judgment in the core ranking, LLM
  verification optional.
- Overview/table articles for the big groups: Gods and Daemons (the 7+7
  with titles/domains/sorcery), Legacy Clans, main factions, species.
- A structure checker script (like the notebook checker) that flags:
  empty pages, missing required sections, missing overview links,
  stale first_known vs reading records, unranked characters.
- Receipts record cache hit/miss: surface `prompt_cache_hit_tokens` /
  `prompt_cache_miss_tokens` from ModelUsage (already in
  model_layer/types.py:79) into the run receipts, so live-work plans
  can prove their measured hit rate and actual spend.
- Reading completion 3149-3160 (the owner-gated Plan 17-style batch)
  as the FIRST slice: the sweep must run on a current notebook.

## Out of scope

- Mass content writing on the 500+ entity pages — Plan 020 owns that,
  using the standard and ranking from this plan.
- The colab re-embed — 018.5 slice 6 resumes after 020.
- Wiki content import: the wiki is spoiler-broken (post-ch3000
  perspective) and fan-edited. We study its STRUCTURE, never copy its
  claims. Novel text stays the only source of truth.
- Wiki page duplication cleanup (the wiki itself has case-duplicated
  pages; not our problem).

## Deterministic proof / verification floor

1. `uv run pytest` green (full suite, no regressions from checker/ranker
   additions).
2. Structure checker runs clean on the current notebook: zero empty
   pages, all required sections present, all characters ranked, all
   overview pages linked.
3. The "list the 7 daemons and 7 gods" question resolves from ONE
   overview page (the owner's acceptance test).
4. Importance ranking reproduces a sane tier list: Sunny solo tier 0;
   Nephis/Cassie/Kai/Effie near top; background characters in lower
   tiers. Owner reviews the tiers.
5. Reading completes 3149-3160: notebook checker PASS, receipts,
   counts reported.

## STOP conditions

- If the wiki study suggests a structure that conflicts with retrieval
  needs (e.g. infobox-driven pages that hurt semantic search), stop and
  ask: we match the wiki's ORGANIZATION, not its web UI.
- If the ranking method produces a tier list the owner rejects, stop
  and redo the method before Plan 020 uses it.
- If reading 3149-3160 reveals a source problem (mirror redirects,
  placeholder content), stop — same STOP conditions as 018.5.
- Any private content (novel text, receipts) leaking into public docs.

## Slices

1. **Plan and admit** — this doc, learning gate (owner confirms the
   ranking method + page standard direction), index rows, deliverable
   scaffold, admission commit.
2. **Finish reading 3149-3160** — the owner-gated Plan 17-style batch:
   read chapters, notebook records, notebook checker PASS, receipts,
   counts. The sweep runs on a current notebook. Cache-hit doctrine:
   run before 16:00 UTC 2026-08-16 (flat rates) or strictly off-peak.
3. **Wiki structure study** — pull the wiki's page skeletons
   (character infobox fields, section order, overview tables, category
   taxonomy, importance markers) via the MediaWiki API; write the
   evidence file: what the wiki does, what we adopt, what we reject and
   why.
4. **Page standard** — the section skeleton for people/powers/items/
   places/groups pages + the overview-page shape (tables, lore
   sections, chapter citations). Written as a reference doc the sweep
   (020) follows; validated against 3 sample pages (Sunny, Nephis, one
   power) by rebuild.
5. **Importance ranking** — deterministic ranker (mention count,
   chapter spread, arc presence, relationships degree, role flags) over
   the reading records; produces tier 0-4; owner reviews the tier list.
6. **Receipts record cache hit/miss** — surface the ModelUsage
   cache fields into receipts (they exist in types.py but are not
   persisted); a test asserts hit/miss tokens land in the receipt.
7. **Overview articles** — Gods and Daemons (7+7 with titles/domains/
   sorcery, one-call answer), Legacy Clans, main factions, species.
8. **Checker review + findings** — audit scripts/check_story_notebook.py:
   what it actually checks, what it misses, and what is wrong with it.
   Known findings going in: the --through range flag does not bound the
   work (proven: --through 100 still scans all 3160 records, 18.5s,
   51% of time in one prose-scan genexpr normalizing every string
   against empty fragment sets); freshness is never checked (a PASS
   notebook can silently lag: connections.jsonl stuck at 3148 while
   reading is at 3160 was caught by a human, not the checker); the
   review also found real live-notebook bugs the checker DID catch
   (reading/3151-3160.json written 664 not 600 by the backfill
   subagent; connections.jsonl line 14114 is a blank line; 419 conn
   rows from the 3149-3160 backfill cite line_start=1 which is the
   chapter heading, never evidence). Write the findings doc.
9. **Checker module** — split scripts/check_story_notebook.py (1062
   lines, 11 concerns, 39 functions) into src/weaver/notebook/: one
   module per concern (report, context, permissions, provenance,
   records, pages, connections, progress, prose, git_exposure) + an
   orchestrator (run_checks) + a thin CLI. Range semantics: global
   passes (permissions/pages/connections/git/sequence, metadata-only,
   seconds) always run; scoped passes (sha256 provenance, reader
   contract, prose scan) bounded by --through. Optimizations: read
   each novel file once (shared cache in context), hash only files in
   range, skip normalising strings when the fragment set is empty
   (the 13.2s hot spot), bound the prose scan by the range. Add the
   freshness checks the review found missing: connections-max-chapter
   vs reading-max-chapter, empty-page detection, missing-page for
   linked targets. Keep scripts/check_story_notebook.py as a shim;
   migrate the 39 subprocess tests to import the API; wire
   `weaver notebook check` into cli.py.
10. **Close** — full pytest, verification floor, independent review,
   owner decision, records.

## Budget note

Agent-context work: pi does the wiki study and standard drafting in
its own context, billed through the DeepSeek key like every other
call. Estimated ~$0.20-0.60 for slices 3-9 at flat rates (measured
scale: ~$0.01-0.05 per batch). The content sweep in Plan 020 is the
bigger live budget. Total cap $3 (owner-set 2026-08-16).
