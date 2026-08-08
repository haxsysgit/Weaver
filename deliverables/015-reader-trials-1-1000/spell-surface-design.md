# The Nightmare Spell surface: canon-derived UI design (Plan 15, 2026-08-08)

Owner directive: the web UI must feel like the Nightmare Spell as described
in the novel. Every token and effect below traces to a real passage. The
novel is the source of truth; where it does not pin a color, the Shadow
Slave palette from Plan 013 stays.

## What the novel actually says (verified 2026-08-08)

### The status window is summoned by thought
> "Remembering popular webtoons he read as a child, Sunny concentrated and
> thought about words like 'status', 'myself' and 'information'. Indeed, as
> soon as he focused, shimmering runes appeared in the air in front of him.
> Once again, although he did not know this ancient alphabet, the meaning
> behind it was somehow clear." — ch2:39

The Spell's interface is literally a game-style status screen: summoned on
command, floating in the air, ancient script the reader somehow reads.
Ch97:103: "The runes shimmered as they appeared in the air in front of him.
Looking down, he read:"

### Memories materialize from golden sparks
> "Instantly, golden sparks of light appeared in the air in front of him,
> coalescing into a spherical drop of radiant, golden liquid." — ch81:83

The canonical materialization: golden light threads/sparks coming together
into a thing. This is the model for the send animation and any
"weaver is doing something" moment.

### Kill announcements are bracketed system lines
> [You have slain a dormant beast, Mountain King's Larva.] — ch4:129
> [You have slain an awakened tyrant, Mountain King.] — ch14:151

Bracketed, sentence-shaped, no chrome. The Spell announces, the world does
not argue. Tool calls and recalls become Spell announcements:
"[Weaver has recalled a passage from chapter 98.]"

### Descriptions appear in the air around things
> "The familiar description appeared in the air around the armor:" — ch83:39

Not a modal, not a sidebar: the description floats in the air around its
object. Panels should feel summoned and close to their subject, then
dissolve.

### The Spell has a voice, and it whispers
> "As though summoned by these words, the voice of the Spell whispered into
> his ear:" — ch162:21
> "Instead, the Spell said with a hint of dark satisfaction in its voice:"
> — ch551:107
> "The Spell announced her death mournfully." — ch1406:59

The voice is the character of the UI: whispers, occasional dark
satisfaction, occasional mourning. Never loud, never chatty.

### "Interface" is canon
> "It seems that the Spell decided to be helpful and incorporated Sunny's
> new understanding of the inner workings of Memories into its... uh...
> interface?" — ch83:51

### Rune color is not pinned
The Spell's own runes are "shimmering" / "glowing" / "shining" — no fixed
hue. Blue runes belong to Jet's bow, red runes to Anvil's armor (weapon
memories). So the UI is free to choose within the plan-013 palette:
shimmering pale silver for Spell text, golden for materialization moments
(the golden sparks), blood-crimson for danger.

## Design tokens (derived)

| Token | Value | Canon |
|---|---|---|
| spell text | pale silver `--text` with shimmer animation | "shimmering runes" ch2 |
| materialization | golden sparks / threads `--accent-gold` | ch81 golden sparks |
| kill announcements | `[bracketed, sentence case]` | ch4:129 |
| panels | summoned, close to subject, dissolve | ch83:39 |
| voice | whisper-quiet, rare dark satisfaction | ch162, ch551 |
| status panel | reader chapter, tier, spoiler mode as runes | ch2 status screen |

## Effects

1. **Send**: the message leaves the composer as golden threads/sparks that
   coalesce into the user bubble (canon ch81 materialization).
2. **Tool activity**: Spell-style announcement lines in the transcript,
   bracketed like kill messages: `[Weaver has recalled ch 98, lines 3-32.]`,
   `[Weaver has searched the library.]` — shimmering, whisper-soft, with
   the actual "called this tool" detail. Never blocks the flow.
3. **Reasoning**: golden thread animation while the model works, with the
   current step name woven into it (the Claude-terminal style status the
   owner asked for, spelled in canon terms).
4. **Answer arrival**: the final answer shimmers into place like runes
   appearing in the air (ch97), then settles into the formatted reply.
5. **Status panel** (sidebar or corner): the reader's own Spell window —
   "Reader: ch 320 · Ascended · protect" rendered as runes, toggleable like
   Sunny summoning his status.
6. **Passage view**: tapping a recall chip summons the passage "in the air
   around" it (ch83) — a floating panel near the message, never a full
   page.

## Build order

1. Backend seams: DELETE conversation, LLM naming call + title storage,
   passage-fetch endpoint (ephemeral, never persisted), tier preference
   (mode selector), tool events carrying recall previews + handles.
2. Theme: canon tokens + shimmer/coalesce keyframes.
3. Sidebar: sections, foldable chat groups, delete, settings/profile at
   the bottom.
4. Composer + send animation, Spell-style tool announcements, answer
   shimmer.
5. Interactions: selection quote-and-ask, passage tap-to-view, status
   panel, new-weave no-op.

## Revision 2 (2026-08-08, owner picks)

### Weaver IS the Spell: the lore anchor

Confirmed in the novel (verified by direct grep, 2026-08-08):

- ch2920:43 "the Nightmare Spell had been born from Weaver's soul"
- ch2908:81 "where Weaver had died, ushering in the Age of the Nightmare Spell"
- ch2933:41 "Weaver's promise was the Nightmare Spell" (against the Doom)
- ch2908:93 "why Weaver chose the Tomb of Ariel as the place where the Seed
  of the Nightmare Spell would take root"

So the Spell surface is Weaver's surface: weaving, strings of fate, silver
threads. Every animation and frame echoes that.

### The response box: the mystical mirror (owner pick)

Rejected: rune texture behind the text (confuses readers), glowing text.
Chosen: the box is clean dark glass inside, and the BORDER is decorated
with glowing runes and sigils, like a mystical mirror.

- Runes: authentic Elder Futhark letterforms, path data extracted from
  Wikimedia Commons "Runic letters elder futhark.svg" (public domain),
  normalized per-glyph viewBoxes in `runeGlyphs.ts` (24 glyphs).
- Frame: top and bottom rune rows (fehu uruz thurisaz ansuz raidho kenaz
  gebo wunjo), corner sigils (circle + rune: elhaz sowilo tiwaz laguz),
  thin silver fate-threads down the sides with isa knots.
- Glow: CSS drop-shadow layers + staggered `rune-shimmer` opacity pulse
  (canon ch17:7 "shining slightly").
- Interior: rgba(8,8,12,0.72) blur, no runes behind the text.

### The background: brighter, denser

Owner: "the web or star needs to be more visible". Changes: 5500 stars
(was 4500), brighter silver (0xc9cddd stars, 0xb9bed4 threads), alive net
alpha 0.8, 4 neighbours per star (was 3), re-weave every ~2.6s, wider
connection radius, slightly larger stars.
