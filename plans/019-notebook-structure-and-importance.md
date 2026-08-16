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
- **Budget:** two kinds of usage, per the arinze-plans cache-hit
  doctrine. (a) Agent-executed work (no key): the wiki study, page
  standard, ranking, receipts, overviews, checker — done by the
  executing agent in its own context, deterministic, no API key. (b)
  Agent-executed, live (key required): ONLY slice 2 (reading
  3149-3160) calls the model, THROUGH weaver's harness (Reader Trial
  machinery: tools, context engine, receipts), never raw. Small batch
  (~12 chapters), estimated ~$0.20-0.60 at current flat rates ($0.14
  miss / $0.28 out) if run before 16:00 UTC 2026-08-16, or off-peak
  ($0.22/$0.66) after. Each chapter is unique text, so budget it as
  full-miss. No other slice needs a key. Cap: $4 total.

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
8. **Structure checker** — flags empty/stale/missing-section/unranked/
   unlinked pages; wired into the verification floor; runs clean.
9. **Close** — full pytest, verification floor, independent review,
   owner decision, records.

## Budget note

Fake-only, $0. The assistant does the wiki study and standard drafting
directly (read-only API). No live model calls in this plan. The content
sweep in Plan 020 is where the live budget lives.
