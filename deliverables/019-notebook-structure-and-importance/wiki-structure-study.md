# Wiki Structure Study — what the wiki does, what we adopt, what we reject

Pulled fresh from shadowslave.fandom.com via the MediaWiki API on
2026-08-16 (action=parse&prop=wikitext for Gods_and_Daemons, Sunny,
Nether; action=query&list=allcategories / categorymembers for the
taxonomy). Source: the official fandom wiki. This study informs the
page standard (019 slice 4) and the sweep (020). The novel text stays
the only source of truth (canon policy, wiki-crosscheck.md) — the wiki
contributes STRUCTURE only, never claims.

## 1. The overview page pattern — Gods_and_Daemons

One page answers "who are the gods and daemons" in a single retrieval
unit. Structure:

- Lead paragraph: what gods/daemons ARE (rank, nature, origin), with
  chapter refs (`<ref name=":372">Chapter 372 Names of the Gods</ref>`).
- **Table 1: Gods** — columns `Common Names | Other Names`, 7 rows
  (War, Beast, Sun, Storm, Shadow, Heart, Dream/Forgotten), each name
  linked to its own page.
- **Table 2: Daemons** — columns `Daemons | Titles`, 7 rows (Weaver,
  Nether, Hope, Demon of Oblivion, Ariel, Mirage, Rime) with bullet
  title lists (e.g. Nether: Demon of Destiny/Choice, Last child of the
  Forgotten God, Prince of the Underworld).
- **Lore sections** grouped by topic (Bone Weave, Slave's Inheritance,
  In the Darkness, Ancient Mural, ...), each a collapsible with the
  canon passage + chapter ref.

**Why it works for us:** one page = one retrieval unit. "List the 7
daemons" hits the table, no tool-chain. This is exactly the shape our
overview article needs (019 slice 6): intro + tables + topic-grouped
lore, all chapter-cited.

## 2. The character page pattern — Sunny (main)

`{{ShadowSlave infobox}}` fields (from Sunny, the richest example):

title1, image1 (gallery), name, alias (ScrollBox of aliases, EACH with
chapter ref and who-called-it — e.g. "Sunny {Nickname} ch1", "Mongrel
{Dreamscape}", "Lord of Shadows"), title (titles with refs), vital
status, age, rank, aspect, attributes, flaw, true name, relatives
(with refs), affiliation, occupation, powers, sorcery, abilities,
novel (debut chapter + "Mentioned"/debut marker).

Sections after the infobox:

1. Appearance (by arc)
2. Debut - Waking World / Dream Realm; then rank-split sections:
   Awakened, Ascended, Transcendent (each split Waking World / Dream
   Realm / Nightmare), Supreme, True Form — the character's story told
   BY POWER STAGE
3. Personality
4. Background — Childhood, Volume 1 .. Volume 11 (biography by volume)
5. Nightmares (First..Fourth, each a section)
6. Aspect, Abilities & Flaw — Runes, Attributes, Aspect Legacy, Battle
   Ability, Other Abilities, Sorcery, Weapon Mastery, applications
7. Equipment & Possessions
8. Trivia
9. Site Navigation

Every claim carries `{{c|...}}` + chapter refs.

## 3. The secondary character page pattern — Nether (daemon)

Much lighter — same infobox template but fewer filled fields (alias,
title, vital_status, race, gender, relatives, occupation, affiliation,
sorcery, abilities, novel debut). Sections: Appearance, Domain,
Ability, Significant Events, Territory, Trivia, Site Navigation.

**This is the shape our thin pages (tier 2-3+) should follow:** short
infobox + a handful of standard sections. Not everything needs the
Sunny treatment.

## 4. The category taxonomy (importance markers)

321 categories total. The character taxonomy:

- `Main Character` — contains ONLY Sunny (verified: 1 member)
- `Main Cast` — secondary tier
- `Character` → `Characters` — the general bucket
- `Volume N Characters` — per-volume cast (Vol 1: 19 members, Vols
  2-12 all present) — this is how the wiki marks "appears in this arc"
- Faction/affiliation cats: `Legacy Clans` (Great/Lesser/Fallen),
  `Immortal Flame Clan`, `Shadow Clan`, `Song Clan`, `Valor Clan`,
  `Dagonet Clan`, `White Feather Clan`, `Sorrow Clan`
- Kind cats: `Daemon`/`Daemons`, `God`/`Gods`, `Antagonist`,
  `Nightmare Creatures`
- Rank cats: `Ranks`, `Awakened Ranks`, `Corruption Ranks`
- State: `Alive`, `Main Page Templates`...

**Importance by category ≈ our tier system:** Main Character (Sunny) =
tier 0; Main Cast + gods/daemons = tier 1; volume-tagged regulars =
tier 2-3; everyone else = tier 4. We adopt this ladder for the
deterministic ranker (019 slice 5), computed from our own data
(mention count, chapter spread, volume presence, relationships degree)
rather than wiki labels.

## 5. What we ADOPT

1. **Overview page shape**: lead + summary tables + topic-grouped lore,
   all chapter-cited → one-call answers.
2. **Infobox field set**: name, alias (with per-alias chapter refs),
   title, vital status, race, relatives, affiliation, powers, sorcery,
   novel debut — as our page header block.
3. **By-power-stage biography** for main characters (Awakened →
   Ascended → Transcendent → Supreme) — matches how our reading
   records already track rank changes.
4. **Category-as-importance** ladder: Main → Main Cast → Character →
   volume-tagged → background.
5. **Lore-in-topic-groups with the canon passage quoted** — we do the
   same from reading records, with first_known_chapter instead of
   final-state refs.

## 6. What we REJECT and why

1. **Spoiler-broken perspective**: wiki articles are written
   post-ch3000 (they cite ch1582+, "Supreme True Form", the seventh
   god). Our notebook is as-of-N with first_known_chapter. We never
   import their future-state claims. (Already canon policy.)
2. **Fan-edited duplication**: "Aegis Rose"/"aegis rose" — 2,891
   content pages ≈ 322 real articles. Our entity ids are canonical,
   alias-marked (`<!-- alias: id -->`), one page per entity.
3. **Collapsible/hidden spoiler machinery** — display trick, useless
   for retrieval; we keep spoiler care in answer framing (Plan 15),
   not in page structure.
4. **Gallery images / art** — our notebook is text; images add nothing
   to retrieval and bloat the bundle.
5. **Theme Song / Site Navigation trivia** — no retrieval value for a
   reading companion.
6. **Wiki's "only six gods" + hidden seventh framing**: the wiki hides
   the Forgotten God behind spoilers; our notebook states what the
   records show at first_known_chapter and marks later reveals as
   reveals (spoiler labels already exist for 1-1000).

## 7. Ground truth for the sweep

- **Page count reality**: people 165 / powers 224 / items 90 / places
  75 / groups 30 = 584 pages. Missing: 6 of 7 gods, most daemons.
- **Thin pages**: Nether (a daemon) is 282 bytes; Storm God 488B;
  Sunny 446KB / Nephis 119KB / Cassia 67KB / Effie 54KB / Saint 52KB —
  the size gap is the sweep's work.
- **Wiki refs for verification**: chapter numbers cited by the wiki are
  cross-checks for our own records, never imports (canon policy).

## Sources pulled (API)

- `parse&page=Gods_and_Daemons` (18.7KB wikitext)
- `parse&page=Sunny` (110KB)
- `parse&page=Nether` (4.8KB)
- `query&list=categorymembers&cmtitle=Category:Main_Character`
- `query&list=allcategories` (321 cats)
- `query&list=allcategories&acprefix=Volume` (Volume N Characters 1-12)
