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
