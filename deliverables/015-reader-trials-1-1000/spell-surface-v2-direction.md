# Spell Surface v2 — direction for the immersive Nightmare Spell UI

**For:** the UI agent (lab build). **Owner:** interacts with the live draft, then we merge.
**Do not touch:** the backend, the API contract, or the turn loop. Frontend-only.
**Deliverable:** an INTERACTIVE draft the owner can use in a browser — same pattern as
the ThemeLab page: build in a worktree, host it (dev server or preview build), give the
owner a URL. Screenshots are NOT the deliverable. The owner clicks, chats, judges, asks
for changes. Only when the owner is satisfied do we merge.

## The product

Weaver web chat (React 19 + Vite + TypeScript). The story: the user chats INSIDE the
Nightmare Spell. The whole page should feel like standing in the void where the
Spell's inner workings are visible (ch15:5-7), with the appraisal-phase feel of runes
materializing in the air (ch16:95, ch17:7).

## What exists today (keep the good parts)

- `SpellBackground.tsx` — three.js star web: 4500 faint stars, silver thread lines
  (a net of nexuses), plus 91 gold "divine cores" (7 daemons + 6 gods x 7 cores) with
  a slow breathing glow. 30fps cap, pixelRatio 1. The owner LIKES this background —
  it only needs more life and a slight purple shade.
- `Message.tsx` — weaver replies in a dark-glass panel (1px silver hairline, 14px
  radius, backdrop blur). Tool activity renders as bracketed spell lines inside the
  reply bubble.
- `Composer.tsx` — input with the tier pill (awakened / ascended / transcendent).
- `SettingsModal.tsx` — Soul Sea themed settings panel.
- `ConversationRail.tsx` — the sidebar with thread list, sectioned by date, per-chat
  delete with confirm, Library rows marked "not yet woven".
- App-wide theme: layered near-blacks, bone-white and pale-silver text, blood-crimson
  accent, silver threads.

## The reference image (owner-provided fan vision)

`how-would-the-nightmare-spell-look-like-v0-nyogt13ksgwf1.webp` (analyzed): a deep
black/blue-gray cosmic vision — dense tiny white stars, a cloudy Milky-Way-like band,
large flaring blue-white stars, extremely thin pale thread lines forming a vast
celestial web, and a small silver-gray clothlike central figure. No purple, no runes.

## The Soul Sea — 3 visual options (from the novel, verified)

The Soul Sea (Sea of Soul) is the inner world every Awakened carries: a dark sea
under a dark sky, with the soul core hanging above it as a star. Canon facts:

- ch16:23-33: "A silent, calm dark sea illuminated by a lonely black sun." The sun is
  actually transparent — it only looks black because there is no other light. In a
  healthy soul it should burn bright, "filling the Soul Sea with a warm, blinding
  shining." Shapeless forms move "just beyond the periphery of his vision."
- ch47:9: the sun "was orbited by spheres of light that represented his Memories."
- ch182:15: "the tranquil sea met him with calming darkness and peaceful silence";
  motionless shadows stand at the edge of the visible water.
- ch1288/1470: later, FIVE black suns loom above the still water; "a legion of
  shadows stood motionless in the silent darkness. Thousands…"
- ch1580: dark flames burn inside the cores, "even darker now, and more fierce."
- ch2131: a replica of the Nameless Temple rises in the soul sea; "tens of thousands
  of them watching it silently"; seven black suns; "the dark sky of his soul felt
  complete."
- ch2897: in damage, "His Soul Sea was turbulent and restless," an enormous sphere of
  light orbiting the seven battered suns.

Build **three options** for the soul-sea surface (used in the settings panel and as
ambient water below the chat), and let the owner pick:

- **A — The Still Black Sea (literal canon):** endless perfectly calm dark water, one
  (or seven) black suns hanging above, spheres of light orbiting them, a few
  motionless shadow silhouettes at the edge. Silence. Peaceful, lonely, beautiful.
- **B — The Living Soul (canon + interactive):** the sea grows with the user's chat.
  Every thread is a shadow at the water's edge; every saved preference is a sphere of
  light; the suns brighten as the user's "soul" (their progress and knowledge) grows.
  The reader-chapter setting is the breathing soul-core star (already the current
  settings panel, elevate it). A faint temple silhouette can rise on hover.
- **C — The Mirror of State:** the sea reacts — calm when idle, ripples on submit,
  gentle waves while the Spell "weaves" an answer, turbulence on error, a bright
  flash when an answer completes. Optional "healthy" inverse variant: the star burns
  warm and bright instead of black.

## What the owner wants

1. **Immersive glass, whole page.** The user message bubble AND the weaver reply box
   must be very transparent so the star web shows through them — "chatting inside the
   Spell". The sidebar and header get the same glass treatment. Two variants:
   - **subtle glass** — readable by default, light blur, stars visible behind text.
   - **immersive** — heavy see-through, stars clearly shining through the bubbles.
   Text legibility is the hard requirement in BOTH.
2. **Background:** keep the current star web as the base. Add a slight shade of
   purple, optionally a galactic band / star flare depth like the reference image,
   and keep the 91 divine cores shining distinctly.
3. **Buttons on hover.** Copy, regenerate, and any reply actions must not clutter the
   bubbles — reveal on hover.
4. **Runes in the air.** After actions (sending, receiving, opening settings), runes
   materialize and fade like the appraisal phase (ch16:95). Constraint:
   hand-crafted rune glyphs were rejected; no icon/UI library ships runes. Propose
   2-3 honest ways to convey it (glowing particle fragments assembling into
   rune-like shapes, translucent floating text fragments in the Spell's bracketed
   voice, thread-weave patterns forming and dissolving). Owner picks.

## Sidebar and settings — severe modernization (logic + looks)

The current sidebar and settings panel are functional but basic. Modernize BOTH the
visuals and the actual logic. Required directions (propose details, owner picks):

**Sidebar:**
- Thread search/filter (find a chat by text).
- Pin threads to the top; archive old ones (archive hides from the list, not delete).
- Rename threads (a naming call already exists after the first turn; add inline
  rename).
- Grouping: date sections (exists) plus a volume-aware grouping option — the thread's
  topic mapped to a Shadow Slave volume (Vol 1 Child of Shadows … Vol 12) when known.
- Delete keeps the 3s confirm (exists) but styled as a Spell action: "[The thread is
  unmade.]"
- Empty and loading states that feel like the Spell, not a skeleton.

**Settings panel:**
- Theme variant picker (subtle glass / immersive / star-web intensity).
- Reader chapter with quick-jump: volume-aware select (the verified volume
  boundaries: 95, 350, 600, 750, 1060, 1230, 1590, 1840, 2260, 2720, 3000).
- Spoiler mode (protect / no-spoilers) with plain-language explanation.
- Tier (awakened / ascended / transcendent) with what each means in plain words.
- Text density / font size.
- Keyboard shortcuts list (and they must actually work).
- Data + privacy note: everything stays on this machine (local-only product).

## Creative surprises from the novel (the agent should propose MORE)

The product is Nightmare Spell / Shadow Slave themed end to end. Safe, canon-based
ideas to seed the lab (no spoiler-heavy characters, nothing past the reader's
position):
- **Spell-voice announcements** on actions: bracketed lines like the Spell's,
  e.g. "[You have woven a new thread.]", "[The thread is unmade.]", with the golden
  sparkle of Memories appearing (ch81: golden sparks).
- **Memory spheres:** hover a thread to see its "memory" — a small sphere of light
  with the thread's first message.
- **The 91 divine cores** in the background: one or two of the gold cores could
  "wake" (pulse brighter) when the user uses a feature, as if the Spell notices them.
- **Weaving state:** while the Spell is answering, the thread lines in the background
  slowly re-weave (alive mode already exists — reuse it).
- **First-weave ceremony:** the very first message of a new install gets a slightly
  special entrance (the Spell "notices" a new soul).
- Anything else the agent finds in the novel that is visual, non-spoiler, and cheap
  to render.

## Process

- Build in a separate lab worktree. Do NOT merge into main.
- HOST the draft: run the dev server (or a preview build) and give the owner a URL to
  interact with. Iterate on the owner's feedback in the worktree.
- Present the THREE soul-sea options and the glass variants live in the draft
  (switchable, like ThemeLab's mode toggle), so the owner compares by clicking.
- Keep the existing component structure and the backend untouched. If the creative
  functions need a new backend endpoint, list the exact proposal for review — never
  build backend changes yourself.
- Keep it fast: star web stays 30fps / pixelRatio 1; backdrop-filter used sparingly.
