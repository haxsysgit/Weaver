# Plan 020 results

## Slice 2: Digest pass (2026-08-16)

Built `scripts/build_digests.py` — deterministic, no model calls.
For each of the 719 entities in the connections graph, gathers the
statements that link to it (via connections.jsonl + reading records,
aliases folded), writes `.weaver/knowledge/shadow-slave/digests/
<entity>.md` (chapter-attributed, sorted, deduplicated) and a
`report.json` with per-entity statement count / chars / tokens
(tiktoken cl100k proxy). Runtime 4.7s.

### Size report (validates the budget)

- 719 entities, 4,720,417 chars, 1,068,864 tokens total.
- Measured digests match the plan's budget estimates: Sunny 257k
  (est 240k), Nephis 88.8k (89k), Kai 34.6k (32k), Effie 30.2k (29k).
- Tier cost model (people only, off-peak miss $0.22 + 15% output
  $0.66): tier 0 (5 people) 461k tok ~$0.15; tier 1 (25) 206k ~$0.07;
  tier 2 (59) 114k ~$0.04; tier 3 (33) 17k ~$0.01; tier 4 (43) 7k
  ~$0.00.
- **Whole-sweep digest input ≈ $0.27 off-peak** (all 719 entities).
  With output + overhead the sweep lands ~$0.50-0.80, far under the
  $3 cap. The old $1.5-3 estimate was based on raw-record feeding;
  digest-first compression is the main saving.

### Data findings (feed slices 3-6)

1. **God/daemon namespace split**: the connections graph links most
   gods/daemons as `power:*` (sun-god, shadow-god, heart-god,
   war-god, beast-god, dream-god, mirage, rime, demon-of-*,
   prince-of-the-underworld) but a few as `person:*` (storm-god,
   weaver, nether, ariel, oblivion, hope). The page standard treats
   gods/daemons as person pages (tier 1 role-flagged). Slices 3-6
   must pick one canonical namespace and merge the split digests.
2. **142 `statement:*` targets** in the connections graph have
   digests but no pages (legacy rows linking statements to
   statements). The sweep should ignore `statement:*` digests.
3. Aliases fold correctly (cassie -> cassia; no duplicate digest).

### Commands

- `uv run python scripts/build_digests.py` (default root
  .weaver/knowledge/shadow-slave)

## Slice 2 follow-up: canon distinction + execution pattern (2026-08-16)

Owner drove three locked decisions (now in plans/020 as decisions 6-8):

1. **Canon 3-way split (verified against the novel):** the gods are
   PEOPLE (`person:sun-god`), divine lineages are INHERITANCES
   (separate pages: `power:the-fire` = Sun God's lineage, the four
   Weaves = Weaver's forbidden lineage, Storm/War lineages), and
   Aspect Legacy is a MECHANIC (one `power:aspect-legacy` page — the
   Spell's per-Awakened personal legacy: Shadow Dance, Memory of
   Light, Jet's scythe; defined in novel ch653/1254/1290/1479/1483).
   Evidence: the current `power:sun-god` digest contains ONLY
   character/feat statements (7 rows, ch436-691); lineage statements
   already link elsewhere (`power:the-fire`, `power:blood-weave`,
   `bone-weave`, `soul-weave`, or to the people who inherit them).
2. **`statement:*` targets explained + preserved:** they are the
   190-row cross-statement story-map layer (cross-* ids, relations
   explains/relates/payoff/causes/foreshadows, chapters 5-1080) that
   powers `lore_path` — NOT junk. 0 of them come from reading-record
   links (verified: 0 of 14,363 links point to statement: ids). They
   are a hand-curated Plan 15-era layer. Decision: keep them, skip
   them in the digest pass (done — 577 digests now, 142 stale
   statement-*.md files removed, report clean). Known limitation
   recorded: the story map is frozen at the 1000-chapter era;
   extending or retiring `lore_path` is a post-v1 decision.
3. **Execution pattern locked:** page rebuilds run in budgeted
   context:fresh subagents (never the main agent's context — this
   session carries 136M+ cacheRead tokens; per-call overhead would
   dominate). Each subagent gets the byte-identical shared block
   (standard + checker rules + samples) FIRST for prefix-cache hits
   across all rebuild calls, plus its one entity digest. One
   subagent per tier-0/1 page; batches for tiers 2-4. Every run
   records input/output/cacheRead/cost.

### Commands

- `uv run python scripts/build_digests.py` (now skips statement:*)
