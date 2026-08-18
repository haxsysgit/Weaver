# Plan 020: Notebook entity sweep

> **Executor instructions:** The content plan. After 019 ships the page
> standard, importance ranking, and structure checker, sweep ALL entity
> pages to standard — fill empty/missing pages, rebuild stale ones from
> the reading records, create the missing core pages (gods, daemons),
> and keep the checker green. Subagents do the bulk; the checker is the
> gate, the owner reviews samples.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff); subagent fleet for
  page rebuilds; checker from 019 as the format gate.
- **State:** closed 2026-08-18, owner accepted with scope cut. Tier 0 and tier
  1 are the accepted result; tiers 2-4, missing-page creation, and overview
  verification remain deferred future work.
- **Depends on:** Plan 019 closed (standard, ranking, checker all land
  here). Unblocks 018.5 slice 6 (colab re-embed) and then v1.
- **Priority:** P1
- **Effort:** L (500+ entity pages across people/powers/items/places/
  groups)
- **Risk:** High if unbounded — full sweep of 500+ pages is a big live
  budget. Mitigation: tier-based execution (top tiers first, lower
  tiers batch), the checker gates shape, the owner reviews per tier.
- **Budget:** cap $3 (owner-set 2026-08-16). ALL of it is live — the
  executing agent's own model is billed through the DeepSeek key. The
  sweep is agent-context work: digest-first (one deterministic grep
  pass per entity bounds the context), the agent writes pages in its
  own context, measured per slice. Scale: 565 pages x ~10-30k fresh
  input + ~15% output ≈ $1.5-3 off-peak ($0.22/$0.66). The flat
  window ($0.14 miss / $0.28 out) CLOSED 16:00 UTC 2026-08-16 —
  never plan for it again. Peak $0.44/$1.32 (peak = 01:00-04:00 +
  06:00-10:00 UTC): run live parts strictly off-peak. Measured
  digests: Kai 32k, Effie 29k, Nephis 89k, Sunny 240k tokens.

## Owner direction (locked decisions)

1. (2026-08-15) Full sweep of entity pages; characters ranked by
   importance (019 delivers the ranking).
2. (2026-08-15) Side plan before coming back to v1; notebook must be
   current to 3160 before the sweep (019 slice 2 reads 3149-3160).
3. (2026-08-15) The notebook is too unstructured and missing important
   lore; the wiki's information ordering is the reference (structure
   only, never its claims).
4. (2026-08-15) The owner's acceptance test: "list the 7 daemons and 7
   gods" resolves in <= 2 tool calls from one overview page.
5. (2026-08-16) Spend cap $4 (later cut to $3 by owner). Real
   numbers over estimates: measured digest sizes, official V4-Flash
   pricing, cache-hit doctrine from the arinze-plans skill. The flat
   window closed 16:00 UTC 2026-08-16; live parts run strictly
   off-peak hours.
6. (2026-08-16) Canon distinction (verified against the novel): the
   gods are PEOPLE (character pages, `person:sun-god` etc.); divine
   lineages are INHERITANCES (separate pages: `power:the-fire` = Sun
   God's lineage, `power:blood-weave`/`bone-weave`/`soul-weave`/
   `flesh-weave` = Weaver's forbidden lineage, House of Night's Storm
   God lineage, Valor's War God lineage); Aspect Legacy is a
   MECHANIC (one concept page: `power:aspect-legacy`, the Spell's
   per-Awakened personal legacy — Shadow Dance, Memory of Light,
   Jet's scythe). The three must never merge into one page. The
   connections graph currently misnamespaces gods as `power:*` —
   sweep moves them to `person:*` and adds lineage/aspect-legacy
   targets as needed.
7. (2026-08-16) `statement:*` targets in connections.jsonl are the
   190-row cross-statement story-map layer (explains/relates/payoff/
   causes/foreshadows, chapters 5-1080) that powers `lore_path`.
   They are NOT junk: do NOT delete them. Digest pass SKIPS
   `statement:*` targets (no pages exist for them). Known
   limitation: the story map is frozen at the 1000-chapter era;
   extending or retiring it is a post-v1 decision, not this plan.
8. (2026-08-16) Execution pattern locked: page rebuilds run in
   BUDGETED context:fresh SUBAGENTS, never the main agent's own
   context (the main session carries 100M+ cached tokens; per-call
   overhead would dominate the sweep). Each subagent receives ONLY:
   (a) the byte-identical shared block — page standard + checker
   rules + 1-2 sample pages — so the DeepSeek prefix cache hits
   across all rebuild calls (~50x cheaper), and (b) its ONE entity
   digest (bounded: Sunny 257k tokens is the biggest; DeepSeek
   Flash context is 1M, owner guidance: stay below 800k, so even
   Sunny fits one-shot with ~3x headroom). One entity per tier-0/1
   agent; tier 2-4 batch several small digests per agent. Every run
   records its usage block (input / output / cacheRead / cost).

## Scope

- Rebuild every entity page to the 019 standard, tier by tier:
  - Tier 0-1 (main cast, gods, daemons, sovereigns): deep rebuilds,
    individual review.
  - Tier 2-3 (recurring characters, major powers/places): standard
    rebuilds, batch review.
  - Tier 4 (background): lightweight standard pages, checker-gated
    only.
- Create the missing core pages (6 of 7 gods; remaining daemons;
  any entity with reading-record evidence but no page).
- Verify the overview articles from 019 stay correct after the sweep.
- Final notebook checker PASS; owner acceptance test on the 7 daemons
  and 7 gods question; colab re-embed (018.5 slice 6) unblocked.

## Out of scope

- Re-embedding (018.5 slice 6 resumes after this plan closes).
- Wiki claims: never import wiki content; reading records + novel text
  are the only sources.
- Re-ranking characters mid-sweep (ranking is fixed by 019; changes
  would be a new plan).
- Reading beyond 3160 (future refresh runs).

## Deterministic proof / verification floor

1. `uv run pytest` green (full suite).
2. 019's structure checker runs clean: zero empty pages, all required
   sections, all pages linked from overviews, all characters ranked.
3. Owner acceptance test: "list the 7 daemons and 7 gods" <= 2 tool
   calls via the overview page.
4. Sample review: owner spot-checks N pages per tier against the
   reading records (novel text is truth; checker only gates shape).
5. Entity count report: pages before/after, per category; missing
   pages created; stale pages rebuilt.
6. Cache-hit verification: every live rebuild call records
   `prompt_cache_hit_tokens` / `prompt_cache_miss_tokens` in its
   receipt; the final results.md reports the measured hit rate and the
   actual dollars spent (must be <= $4, receipts are the proof).

## STOP conditions

- Owner's spend cap reached: stop mid-sweep, report what tiers are
  done, ask to continue or close.
- Checker finds systematic problems (e.g. the standard produces pages
  that contradict reading records): stop, fix the standard or the
  records, don't paper over with checker edits.
- Any page where reading records conflict with the novel text: the
  novel wins; flag and ask if the conflict looks like a source error.
- Private content leaking into public docs.
- If the sweep reveals the reading records themselves are incomplete
  for a page (no evidence for required sections), stop and ask: add a
  reading run or relax the standard — never invent content.

## Slices

1. **Plan and admit** — this doc, learning gate (owner sets the spend
   cap + tier review cadence), index rows, deliverable scaffold,
   admission commit.
2. **Digest pass** — deterministic grep of the reading records per
   entity into digest files (free, local); digest size report per
   entity (measured: Kai 32k, Effie 29k, Nephis 89k, Sunny 240k
   tokens); this is what every rebuild call feeds on. Skips
   `statement:*` targets (the story-map layer, decision 7).
3. **Tier 0-1 deep rebuilds** — main cast + gods + daemons +
   sovereigns pages rebuilt to standard, individually reviewed, owner
   spot-checks. Gods move from `power:*` to `person:*`; divine
   lineages (`power:the-fire`, `power:blood-weave`, …) and Aspect
   Legacy stay separate concept pages (decision 6). One
   context:fresh subagent per page (decision 8).
4. **Tier 2-3 standard rebuilds** — recurring characters + major
   powers/places in batches; owner batch review.
5. **Tier 4 lightweight pass** — background pages to the minimal
   standard, checker-gated.
6. **Missing-page creation** — gods/daemons and any evidence-backed
   missing entities created from reading records (canon namespace
   rules from decision 6: gods are `person:*`, lineages are
   `power:*`, Aspect Legacy is one mechanic page).
7. **Overview verification + acceptance** — overview articles checked
   against swept pages; the 7 daemons + 7 gods acceptance test run
   through the real tools; notebook checker PASS.
8. **Close** — full pytest, verification floor, cache-hit + spend
   report from receipts, independent review, owner decision, records.
   Then 018.5 slice 6 (colab re-embed) resumes.

## Cache-hit execution rules (from the arinze-plans doctrine)

Two usage kinds, per the doctrine:

**(a) Agent-context work — the default for this plan.** The sweep
is done by the executing agent (pi) in its own context — billed
through the DeepSeek key like every call, NOT free. Digest-first: the
digest pass (deterministic grep per entity, local, free) produces the
only source material each page rebuild reads; the shared
standard/checker block stays byte-identical in the agent's context
across the whole sweep (cache hits ~50x cheaper); batches run in one
session. Every slice records its usage block (input / output /
cacheRead / cost) in results.md.

The token figures (Kai 32k, Effie 29k, Nephis 89k, Sunny 240k digests)
measure agent-context load per page: ~10-30k fresh input + ~15%
output per page ≈ $1.5-3 off-peak ($0.22/$0.66); flat rates are gone
as of 16:00 UTC 2026-08-16.

**(a1) Warm-up probe (slice 1, mandatory before spend).** Before any
real rebuild spend: one tiny live call with the real shared block +
one entity digest, and verify from the receipt/usage block that
`prompt_cache_hit_tokens` is nonzero — proving the cache actually
engages for the byte-identical shared prefix. If the probe shows
zero cache hits, STOP and investigate (prefix drift, session
boundary, key change) before spending the cap.

**(b) Verification runs (slice 7)** — the 50-question style evals, if
the owner wants them live, run through the executing agent (pi) —
weaver has no harness for eval runs either; it serves the notebook, it
does not build or grade it. Each run is unique text (full-miss
pricing; the flat window closed 16:00 UTC 2026-08-16, live parts now
run at off-peak $0.22/$0.66). Cap $3 total. Run strictly off-peak
(never 01:00-04:00 or 06:00-10:00 UTC) and never during peak.

## Freeze decision (2026-08-16, owner)

Plan 020 FROZEN at slice 3 tier-1 completion, owner-directed, to protect
the v1-critical budget and focus (bill discipline: sweep was ~$0.95
measured; main-session context is the real cost driver). Status: tiers
2-4 (99 minor pages) + missing-page creation + overview verification
DEFERRED post-v1. Resumed later in the future after v1 ships.

Slice 3 outcome (tier 0 + tier 1 = 30 pages, ALL FULL PASS):
- 30/30 pages byte-identical to digests (verify_pages.py multiset),
  standard skeleton, checker 0 on all rebuilt pages.
- Real spend: tier-0+1 = $0.95 measured at off-peak rates from
  session files (see deliverables/020-notebook-entity-sweep/results.md).
- Batch execution (Option B) validated: 5 solos + 4 batches of 5,
  byte-identical shared block for prefix-cache hits.
