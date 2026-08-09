# Spell Surface v2 — direction for the immersive Nightmare Spell UI

**For:** the UI agent (lab build). **Owner:** decides between options, then we merge.
**Do not touch:** the backend, the API contract, or the turn loop. This is frontend-only.
**Deliverable:** 2–3 visual options (screenshots) for the owner to pick from. No merge before the pick.

## The product

Weaver web chat (React 19 + Vite + TypeScript). The story: the user chats inside the
Nightmare Spell itself — the whole page should feel like standing in the void where
the Spell's inner workings are visible (ch15:5–7), with the appraisal-phase feel of
runes materializing in the air (ch16:95, ch17:7).

## What exists today (keep the good parts)

- `SpellBackground.tsx` — three.js star web: 4500 faint stars, silver thread lines
  (a net of nexuses), plus 91 gold "divine cores" (7 daemons + 6 gods × 7 cores) with
  a slow breathing glow. 30fps cap, pixelRatio 1. The owner LIKES this background —
  it only needs more life and a slight purple shade.
- `Message.tsx` — weaver replies in a dark-glass panel (1px silver hairline, 14px
  radius, backdrop blur). Tool activity renders as bracketed spell lines inside the
  reply bubble.
- `Composer.tsx` — input with the tier pill (awakened / ascended / transcendent).
- `SettingsModal.tsx` — Soul Sea themed settings panel.
- `ConversationRail.tsx` — the sidebar with thread list.
- App-wide theme: layered near-blacks, bone-white and pale-silver text, blood-crimson
  accent, silver threads. See `styles/app.css` tokens.

## The reference image (owner-provided fan vision)

`how-would-the-nightmare-spell-look-like-v0-nyogt13ksgwf1.webp` (converted to PNG,
analyzed): a deep black/blue-gray cosmic vision — dense tiny white stars, a cloudy
Milky-Way-like band, a few large flaring blue-white stars, and extremely thin pale
blue-gray thread lines forming a vast celestial web between them. A small
silver-gray, clothlike central figure (Weaver-like). No purple, no runes.

## What the owner wants

1. **Immersive glass, whole page.** The user message bubble AND the weaver reply box
   must be very transparent so the star web shows through them — "chatting inside the
   Spell". The sidebar and header get the same glass treatment. Two variants to build:
   - **subtle glass** — readable by default, light blur, stars visible behind text.
   - **immersive** — heavy see-through, stars clearly shining through the bubbles.
   - The owner fears unreadable text and cluttered action buttons. Text legibility is
     the hard requirement in BOTH variants.
2. **Background:** keep the current star web as the base. Add:
   - a slight shade of purple to the palette (the owner's words: "more life in
     general and more magnificence like beautiful outer space"),
   - optionally a galactic band / star flare depth like the reference image,
   - keep the 91 divine cores shining distinctly.
3. **Buttons on hover.** Copy, regenerate, and any future reply actions must not
   clutter the bubbles — reveal on hover (the owner explicitly approved hover-reveal).
4. **Runes in the air.** Canon: after a Nightmare, in the appraisal phase, runes
   appear in the air (ch16:95 "a new set of runes appeared just below it"; ch17:7 the
   runes "kept shining slightly, as though mocking him"). Simulate that feeling.
   Constraint: hand-crafted rune glyphs were rejected as slop, and no icon/UI library
   ships runes. Propose 2–3 honest ways to convey "runes materialize in the air"
   without literal hand-drawn glyphs (e.g. glowing particle fragments assembling into
   rune-like shapes, translucent floating text fragments in the Spell's bracketed
   voice, faint thread-weave patterns that form and dissolve). The owner picks.
5. **Mood:** magnificent, alive, beautiful outer space — not cluttered, never bright
   enough to distract from reading. The star web must stay faint (a brightened
   version was already rejected once).

## Process

- Build in a separate lab branch/worktree. Do NOT merge into main.
- Produce 2–3 named options with full-page screenshots (desktop + the phone-width
  view at 390px) showing: chat with a real exchange, the sidebar, the settings panel,
  and a mid-turn tool-announcement state.
- Keep the existing component structure and the backend untouched.
- Keep it fast: the star web stays 30fps / pixelRatio 1; transparent surfaces use
  backdrop-filter sparingly.
