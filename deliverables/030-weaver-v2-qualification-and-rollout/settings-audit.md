# Weaver settings audit

Date: 2026-10-26. Scope: the Reader Appraisal settings surface, the
`/api/preferences` store, and the code that consumes each preference.

## Method

For each control: found where it is stored, then found the code that reads it,
then checked whether a reader can observe the effect. "Stored" without
"consumed" is a dead control, not a setting.

## Inventory

| Control | Stored where | Consumed by | Verdict |
| --- | --- | --- | --- |
| Reader position (chapter, derived volume) | process-wide prefs store (`PUT /api/preferences`) | `_reader_note`, `max_chapter` caps on every reading tool, packet builder | **Works, but not per reader.** One store shared by all devices and tabs |
| Spoiler boundary (protect / none) | same store | same path | **Works, but not per reader.** Same defect |
| Answer depth (awakened / ascended / transcendent) | same store | nothing. `_turn_profile(question, domain)` ignores `tier` | **Stored but dead in the web app** |
| Appearance: theme | localStorage | `data-theme` CSS (26 rules) | Works, per device |
| Appearance: glass | localStorage | `data-glass` CSS (8 rules) | Works, per device |
| Appearance: star intensity | localStorage | `data-star-intensity` CSS + backdrop alpha | Works |
| Appearance: density | localStorage | `data-density` CSS (2 rules) | Works |
| Appearance: font size | localStorage | `data-font-size` CSS (4 rules) | Works |
| Appearance: soul mode | localStorage | `SpellSurfaceSoulSea mode` prop | Works |
| Appearance: "Particles runes" | localStorage | **nothing.** `data-runes` has 0 CSS rules and the rune overlay was removed | **Redundant. Remove.** |
| Advanced: DeepSeek key | browser (`getApiKey`) | request auth | Works, per browser |
| Advanced: model hint | none | static copy ("DeepSeek V4.1 Flash") | Informational only; no model choice exists |
| Privacy and controls | none | static copy | Informational |
| First Nightmare replay | none | reopens the rite | Works |
| Archived threads | server metadata | archive list | Works |

## Defects

1. **Reader boundary and spoiler protection are process-global, not
   per-reader.** `GET/PUT /api/preferences` ignore `X-Device-Id` and read or
   write one `runtime.prefs` store. On localhost with one reader this looks
   like it works. On the sponsored launch it means the last person to open
   settings sets everyone's spoiler boundary, including strangers. This is a
   privacy and correctness blocker, not a cosmetic bug.
2. **The boundary looks set when it is not.** Server default is
   `reader_chapter: null` while the form shows 1000. Until someone presses
   Apply, the form promises "Protect everything after Chapter 1000" and the
   answer path has no cap.
3. **Answer depth does nothing in the web app.** The tier is saved and the
   copy claims it controls reading depth, but `_turn_profile` is called with
   the question and domain only.
4. **"Particles runes" does nothing** after the rune overlay was removed.
5. **Saving is fire-and-forget.** The modal closes before the `PUT` resolves,
   and a failure is silent, so a failed save looks identical to a successful
   one.

## Recommendations

Ordered by risk:

1. **Make preferences per device.** Add a `preference` table keyed by
   `device_id`, move get/set there, and read the turn's boundary from the
   device that owns the conversation. This is the one that must land before
   sponsored access.
2. **Persist on change, or keep the Apply button but show a saved state.**
   Disable Apply until dirty, show "Saved" after success, show a retry on
   failure. Never close on a failed write.
3. **Wire Answer depth or remove it.** Wiring means passing the stored tier
   into `_turn_profile` and scaling tool budget and reasoning effort. Removing
   means one less lie.
4. **Remove "Particles runes".** The overlay it controlled is gone.
5. **Require an explicit boundary.** If the server has no chapter, the form
   should say "No boundary saved" and the protect option should not read as
   active. Offer a one-tap "I am at chapter N" from the last chapter the
   reader asked about.

## Settings worth adding

- **Default thread kind** for the New chooser (canon or fanfic), with the
  chooser still available.
- **Export conversations** (JSON) and a **clear local library index** control
  in Privacy.
- **Reader profile**: display name and pronouns, used only by the voice
  prompt.
- **Usage and spend** for BYOK readers: today's turns, tokens, and estimated
  cost.
- **Per-thread boundary override** for readers who want one thread unspoiled
  while they reread another part of the novel.

## What changed in this pass

- Settings sheet rebuilt: real header, no grey Soul Sea placeholder, clean
  reader position and spoiler cards.
- One New button with a Chat/Fanfic chooser and descriptions, replacing the two
  different-looking buttons.
- Thread rows now show a real last-message preview and a search field.
