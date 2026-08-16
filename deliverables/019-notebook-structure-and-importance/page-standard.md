# Page Standard — the notebook entity-page skeleton (019 slice 4)

Written 2026-08-16 from the wiki structure study
(`wiki-structure-study.md`, slice 3) + the current notebook reality
(584 pages, checker rules in `scripts/check_story_notebook.py`). This
is the contract Plan 020 follows for every rebuild. The novel text +
reading records stay the only source of truth; the wiki contributes
structure only.

## 1. Every page: the header block

All five kinds (people/powers/items/places/groups) open with the same
shape. The checker REQUIRES the markers; the rest is the standard.

```markdown
# <Display Name>

<!-- entity-id: <kind>:<slug> -->
<!-- alias: <kind>:<other-slug> -->   (one line per alias, optional)

- **First known:** chapter N.
- **Vital status:** Alive | Deceased | Unknown | N/A.   (people only;
  powers/items/places/groups omit or use N/A)
- **Titles:** title one; title two.   (people/places only)
- **Rank / Tier:** e.g. Supreme, Transcendent | Tier I.  (people/powers/items)
- **Affiliation:** group or faction links.   (people/groups/places)
- **Relatives:** linked people.   (people only)
- **Overview:** 2-4 sentences — who/what this is, why it matters.
  Written so the page answers itself in one read (the one-call goal).
```

Rules:

- **entity-id** = the checker's canonical id (`person:sunny`). The
  filename must match the id slug (checker-validated).
- **Aliases** are declared as `<!-- alias: ... -->` next to the
  canonical marker (Stone Saint / Marble Saint / Saint = one entity).
  Do NOT create a page per name.
- **Every claim in the body stays chapter-attributed**:
  `- chNNN (kind): statement.` — kinds from the reading records
  (confirmed_fact, interpretation, ...). Never a bare claim.
- **first_known** = the lowest chapter in the reading records for this
  entity (never the wiki's debut claim; ours is as-of-N).
- **Links**: the notebook does NOT use wikilinks. Entity relations
  live in `connections.jsonl` (statement -> entity, with evidence
  chapters) and in reading-record `links` fields (checker-validated).
  Pages reference other entities by plain display name; the sweep must
  NOT invent `[[...]]` syntax — the checker would flag it.

## 2. People pages — section skeleton

Order is fixed. Sections that are empty for a page are OMITTED, never
stubbed with "none".

1. **Header block** (above).
2. `## Appearance` — physical description, by arc if it changes
   (wiki pattern: by power stage / arc).
3. `## Personality` — traits with chapter evidence.
4. `## Biography` — by volume, in order:
   `### Volume N: <name>` sections, statements in chapter order.
   (Current pages use `## Volume N` directly; the standard nests them
   under `## Biography` so the page reads as a story, and overview
   links land on one anchor.)
5. `## Aspect, Abilities & Flaw` — people with Aspects (Sunny-style:
   runes, attributes, abilities, flaw, legacy). Secondary characters
   omit if the records have nothing.
6. `## Relationships` — short links + 1-line each, chapter-cited.
7. `## Trivia` — only non-trivial, sourced notes.

**Thin-page rule** (tier 2-3+, the Nether pattern): header block +
whichever of Appearance/Personality/Biography/Significant Events are
actually in the records. Never pad.

## 3. Powers pages

1. Header block (Rank/Tier, Overview).
2. `## Mechanics` — what it does, limits, costs; chapter-cited.
3. `## Users` — linked people who wield it.
4. `## Notable moments` — key scenes by chapter.
5. `## Origin / Lore` — only if records have it (e.g. sorcery schools,
   the Weaves).

## 4. Items pages

1. Header block (Tier, Overview).
2. `## Description` — what it is, enchantments, chapter-cited.
3. `## History` — creation, owners (linked), notable uses.

## 5. Places pages

1. Header block (Affiliation, Overview).
2. `## Description` — geography/atmosphere.
3. `## History` — by volume/arc.
4. `## Residents / Significance` — linked people/groups.

## 6. Groups pages

1. Header block (Affiliation, Overview).
2. `## Membership` — linked people.
3. `## Purpose & History` — what the group is/does, by volume.

## 7. Overview pages — the one-call shape

The wiki's Gods_and_Daemons pattern, for the big clusters (019 slice 6
creates these; 020 keeps them in sync):

```markdown
# Gods and Daemons

<!-- entity-id: overview:gods-and-daemons -->

- **First known:** chapter N (earliest record cited).

## Gods

| Common name | Titles / domains | Page |
|---|---|---|
| Sun God | Lord of Light; fire, passion, creation | [[person:sun-god]] |
| ... (all 7) | ... | |

## Daemons

| Name | Titles | Page |
|---|---|---|
| Weaver | Demon of Fate; Master of Lies; Firstborn of the Forgotten God | [[person:weaver]] |
| ... (all 7) | ... | |

## Lore

### <Topic>          (e.g. The Rebellion, The Weaves)
- chNNN (confirmed_fact): ...   (chapter-cited, from reading records)
```

Rules: tables answer "list the N" in one unit; Lore grouped by topic,
every row chapter-cited; every table row names the entity page
(plain name; the overview page itself is one entity page,
`overview:gods-and-daemons`, linked from people pages via the
connections store). This is the ≤2-tool-call acceptance test's target.

## 8. What the checker still enforces (unchanged)

- entity-id + alias markers valid, aliases unique, links resolve,
  source hashes in reading records still match, no private data in
  git. The standard ADDS structure on top; it never relaxes a check.

## 9. Validation (this slice)

Three sample rebuilds prove the standard works on real pages:
1. **person-sunny.md** — the 446KB giant: header block + Biography
   nesting, nothing dropped.
2. **person-nephis.md** — 119KB: same treatment.
3. **one power page** — full rebuild to the powers skeleton.

After the samples, the sweep (020) applies this standard tier by tier.
