# Plan 021: First Nightmare setup flow + mobile polish

> **Executor instructions:** This plan is the design contract for the
> first-run experience and mobile behavior of the weaver web app. The
> theme language comes from the novel (Nightmare Spell canon), quoted in
> the slices. The frontend already has the Spell surface (SpellSurface*,
> SoulSea, Runes, FateWeavingLoader); this plan extends that language,
> never invents a new theme. Read the current components before writing
> code; the existing identity.ts / SettingsModal / drawer already do half
> the work.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff, npm build, vitest).
- **State:** closed 2026-08-17 (owner accepted after real-phone review;
  decision.md records it).
- **Depends on:** v1 plan (numberless) — 021 runs in parallel with v1's
  remaining backend slices (docker/CI/funnel/smoke) under the parallel
  rules: disjoint files (frontend only), serial gates (021 waits at its
  gates), budget under cap, one writer per file. The v1 slice 3 frontend
  (BYOK headers, identity.ts) must already be merged — it is (commit
  c69d119).
- **Priority:** P1 (setup flow is the user's first impression; the key
  entry currently exists only inside a settings modal nobody finds).
- **Effort:** M
- **Risk:** Medium — UI work with theme fidelity risk; mitigated by
  quoting canon in the spec and verifying against the Spell surface's
  existing language.
- **Budget:** ~40-60k agent tokens (draft→admit→execute→close), fake-only
  execution (no live model calls; frontend work needs no DeepSeek). One
  live smoke at the end through the deployed site is optional and costs
  pennies.

## Owner direction (locked decisions)

1. (2026-08-17) The first-run experience must include an animated,
   themed modal that (a) explains how to get a DeepSeek key, and (b)
   collects and stores the key before the user starts using weaver.
   "That is very crucial."
2. (2026-08-17) The setup flow must be Nightmare Spell themed, Shadow
   Slave themed. The assistant must quote canon from the novel to ground
   the design (done in the slices).
3. (2026-08-17) Mobile UI is bad and breaking: the expanded sidebar
   "blurs instead of acting like a real app". Mobile needs real
   optimization and animations. The owner believes the assistant is not
   good at UI, so this plan is the design contract and execution must
   follow it precisely.

## Scope

- First-run setup modal: animated, themed like the Nightmare Spell, that
  explains what a DeepSeek key is, how to get one, and collects + stores
  it (localStorage via existing identity.ts) before the user chats.
- Key status surfaced in the UI (has key / no key) so a user with no key
  knows why turns fail.
- Mobile drawer fix: replace the blur-scrim behavior with a real app
  drawer (solid scrim, proper z-index, safe-area insets, no body scroll
  behind, close on scrim tap, correct slide animation).
- Mobile polish: touch targets, viewport meta, input zoom prevention,
  header/rail spacing at small widths, reduced-motion respect.
- Animation pass consistent with the existing Spell surface motion
  tokens (--motion-smooth, --ease-weave) — nothing that fights the
  existing design system.

## Out of scope

- Server-side key storage or accounts (BYOK stays: key lives only in
  the browser, sent per request; the no-log test stands).
- Pooled keys / billing / auth (post-v1 backlog).
- New theme or redesign of the existing Spell surface.
- Reader Trials, notebook, retrieval work.
- Anything touching novels/, .weaver/, backend routes.

## Deterministic proof / verification floor

1. `npm run build` passes (production frontend build).
2. `npm test` (vitest) passes — new tests cover: setup modal shows on
   first run and not after; key stored/cleared via identity.ts; drawer
   behaves as an app drawer (scrim closes it, body scroll locked).
3. `uv run pytest` full suite still passes (no backend regressions).
4. Manual smoke on mobile viewport (devtools responsive mode or the live
   site): drawer opens without blur artifact, setup modal animates in,
   key entry works end to end with a real DeepSeek key.

## STOP conditions

- If the animated modal or drawer changes require touching backend
  routes or state schema: STOP, this plan is frontend-only.
- If the theme diverges from the Spell surface's existing language
  (runes, soul sea, fate weaving, elder futhark frame): STOP and
  re-read the canon slices below.
- If mobile testing on a real device is needed and unavailable: STOP
  and ask the owner for a device test session.

## Slices

1. **Plan and admit** — this doc, owner admission, index rows,
   scaffold commit, checkpoint walk (020→021 boundary per the plans
   skill: walk the last 10 plans, update method knowledge, codify).

2. **Canon grounding + design spec** — quote the Nightmare Spell canon
   from the novel into the deliverable (setup-as-awakening language,
   appraisal tier language, rune-speak). Deliverable:
   `deliverables/021-first-nightmare-setup-and-mobile/setup-design.md`
   containing the modal copy, step flow, animation language, and drawer
   behavior spec. This slice is a document, not code; the owner reviews
   the copy before any implementation.

3. **First-run setup modal** — implement:
   - Detect first run (localStorage flag, e.g. `weaver_first_nightmare`).
   - Animated modal in the Spell surface language (fate weaving loader
     exists; reuse it). Steps: (1) "The Spell has found you" intro with
     the novel's infection/appraisal language; (2) what a DeepSeek key
     is + link to platform.deepseek.com (plain terms); (3) key entry
     input (masked, stored via setApiKey); (4) completion state using
     the Spell's appraisal tiers (Good / Exceptional / Remarkable /
     Glorious) as a fun confirmation.
   - "Enter later" escape hatch that defers, and a persistent
     no-key indicator so the user knows why turns fail without a key.
   - Tests: first-run gating, storage round-trip, escape hatch.

4. **Mobile drawer real-app behavior** — fix the sidebar:
   - Replace the translucent blur scrim with a solid, dimmed scrim
     (no backdrop-filter blur on the scrim itself).
   - Body scroll lock while open; safe-area-inset padding; drawer
     slides with the existing --ease-weave; scrim tap closes; Escape
     closes; proper z-index stack so the rail is above content but
     below modals.
   - Tests where possible (component-level open/close/scrim).

5. **Mobile polish + animation pass** — audit the mobile breakpoint:
   touch targets ≥ 44px, no input zoom on focus (font-size ≥ 16px on
   inputs), viewport meta already present but verify, header/rail
   spacing, and a consistent animation pass using existing motion
   tokens. Respect prefers-reduced-motion (already present; extend to
   new elements).

6. **Verify + close** — run the full verification floor, deploy via the
   v1 pipeline (push → CI → box; the frontend dist is committed so the
   image picks it up), owner reviews on a real phone, decision recorded,
   plan closed.

## Canon notes (from the notebook, for the designer)

- The Spell communicates in dead rune languages (ch28); knowing them
  changes meaning.
- The Spell appraises a Nightmare's survival: Good, Exceptional,
  Remarkable, Glorious (ch709).
- The Spell "always hits you in your most vulnerable spot" (ch211) —
  the setup should feel personal, not generic.
- Infection → unnatural sleep → Nightmare → survive → Aspect. The
  setup flow mirrors this: first visit = "infection", key entry = the
  trial, app unlock = the Aspect.
- The surface already speaks this language: runes, soul sea, fate
  weaving loader, elder futhark frame. The modal must match it, not
  fight it.
