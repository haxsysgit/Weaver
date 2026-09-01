# Review Ledger

## Status

**PASS, rechecked 2026-09-01.**

The repaired hotfix satisfies the admitted behavior contract. The final focused
Settings and integration recheck passed 36/36 tests. Delayed saved preferences
now enter an untouched Settings draft, reader edits retain ownership of that
draft, and Settings still opens immediately while its visual background pauses.
The previously repaired startup, mobile Archive, recall, PWA, and standalone
color findings remain covered. No provider, key, private-library,
persistence-schema, privacy-copy, or accepted visual change entered the
hotfix.

## Initial review

The focused component recheck passed 43/43 tests across `ChatApp.test.tsx`
and `SpellSurfaceChatApp.test.tsx`. The generated bundle points at the new
hashed JavaScript and CSS assets, and those assets contain the startup state,
safe recall copy, empty-thread acknowledgement, and Spellweave-first rules.
No provider, key, private-library, persistence-schema, or privacy-copy change
entered this hotfix.

The initial review found three blockers:

1. A newer selection can win the startup race while leaving the interface
   hidden forever. The bootstrap effect sets `booting` to false only when its
   original load id is still current (`useChatController.ts:134-176`). Both
   `startFreshConversation` and `selectConversation` invalidate that load id,
   but neither settles `booting` after its own successful load
   (`useChatController.ts:190-234` and `useChatController.ts:283-314`). The
   stale bootstrap then skips its `finally` update, so
   `SpellSurfaceChatApp.tsx:513` remains `data-startup="waiting"` and the
   approved interface stays at zero opacity. Add a regression that starts a
   delayed bootstrap, completes a newer selection first, then proves the newer
   transcript remains selected and startup becomes ready.

2. The waiting interface is visually hidden but remains available to keyboard
   and screen-reader users. The CSS uses only `opacity: 0` and
   `pointer-events: none` (`spell-surface-lab.css:1924-1929`). The desktop
   Archive stays operable and the main controls remain in the accessibility
   tree, so keyboard activation can hit the race above before startup settles.
   Hide or disable the Archive, transcript controls, and composer from all
   interaction while booting, while leaving the decorative Spellweave visible.
   Add a focused accessibility regression for the waiting state.

3. The retained `ChatApp` mobile rail still closes after every recall attempt.
   `ChatApp.tsx:93-96` ignores the boolean returned by
   `selectConversation` and closes the drawer even when recall fails or a turn
   blocks it. The Spell Surface path handles this correctly, but the shared
   hotfix contract and the requested `ChatApp` inspection require the retained
   surface to keep its drawer open on failure too. Gate closure on a successful
   selection and add failed-recall and active-turn tests.

The empty New Weave path otherwise matches the amended decision: it reuses an
empty server-backed thread, closes the mobile Archive, announces the existing
rune feedback, and focuses the composer. A used thread creates and selects a
new server-backed conversation. The Spell Surface recall path also waits for a
successful load before closing and keeps safe failure copy visible. The
approved transparent messages, Soul Sea art, settings, First Nightmare rite,
motion tokens, and privacy boundary are unchanged.

### Recheck command

```text
npm test -- --run src/weaver/web/frontend/components/ChatApp.test.tsx src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx
```

Result: 43/43 tests passed across two files. This does not clear the three
missing regression cases above.

## Repair recheck, 2026-09-01

The three original blockers are repaired:

- A newer successful selection now settles `booting`, and the original
  startup load cannot replace it (`useChatController.ts:135-177` and
  `useChatController.ts:292-328`). The delayed-startup regression proves the
  newer transcript remains selected after the stale load resolves
  (`SpellSurfaceChatApp.test.tsx:905-963`).
- Startup now removes the Archive, Soul Sea, transcript, controls, and composer
  from keyboard and screen-reader interaction. The parent applies `inert` and
  `aria-hidden`, while the Spellweave remains visible
  (`SpellSurfaceChatApp.tsx:520-559`, `ThreadArchive.tsx:148-149` and
  `ThreadArchive.tsx:382-389`).
- The retained `ChatApp` rail now closes only after a successful recall and
  displays the controller's safe action error (`ChatApp.tsx:93-96` and
  `ChatApp.tsx:124-141`). Its failed-recall regression keeps the mobile rail
  open and preserves the active thread.

The installed PWA repair is also present. Settings becomes visible before
`getPreferences` settles, and the distant renderer pauses at that same state
change (`SpellSurfaceChatApp.tsx:337-355` and `SpellSurfaceChatApp.tsx:520-525`).
Soul Sea and foreground CSS motion pause behind the full-screen panel. The
manifest, page theme, and standalone root use `#030405`; the built manifest and
hashed assets carry the same changes. The transparent messages, Soul Sea art,
Thread Archive composition, First Nightmare rite, icon set, and privacy copy
remain unchanged.

### Blocker found in the first repair recheck

Settings opens with a copied snapshot of `initial` preferences
(`SpellSurfaceSettings.tsx:118-139`). When the delayed request returns,
`openSettings` updates only the parent's `preferences` state
(`SpellSurfaceChatApp.tsx:337-355`). The mounted Settings panel has no sync path
for that new prop, so it continues showing its stale chapter and answer tier.
Applying the panel can overwrite the saved server values that just arrived.

The new test proves early visibility and renderer pause, then resolves the
saved preferences without checking that the open panel received them
(`SpellSurfaceChatApp.test.tsx:802-831`). Add a regression with a saved chapter
and tier different from the local defaults. The open panel must adopt those
values after the request settles without overwriting edits the reader already
made while waiting.

### Focused recheck

```text
npm test -- --run src/weaver/web/frontend/components/ChatApp.test.tsx src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx src/weaver/web/frontend/components/SpellSurfaceSettings.test.tsx src/weaver/web/frontend/components/SpellSurfaceSoulSea.test.tsx
```

Result: 52/52 tests passed across four files. `git diff --check` passes for the
hotfix frontend and deliverables. The passing suite does not cover the delayed
preference application described above, so Plan 027.5 remains at FIX.

## Final repair recheck, 2026-09-01

The delayed Settings preference blocker is cleared:

- The panel compares its current draft against the last accepted preference
  baseline. When that draft is untouched, a changed `initial` prop becomes the
  new baseline and visible draft (`SpellSurfaceSettings.tsx:145-162`). Once the
  reader edits the draft, the dirty guard prevents later server values from
  replacing it.
- The integration regression opens Settings before `getPreferences` settles,
  confirms the background is paused, resolves saved chapter 1200, and proves
  that value reaches the already-open panel
  (`SpellSurfaceChatApp.test.tsx:802-834`).
- The settings regression first adopts delayed chapter 1200, then changes the
  reader draft to chapter 1210 and proves a later chapter 1300 prop cannot
  overwrite that edit (`SpellSurfaceSettings.test.tsx:82-116`).

### Final focused recheck

```text
npm test -- --run src/weaver/web/frontend/components/SpellSurfaceSettings.test.tsx src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx
```

Result: 36/36 tests passed across two files. `git diff --check` passes for the
rechecked source and tests. The last blocker is repaired, the accepted visual
surface and privacy boundary remain intact, and the independent Plan 027.5
verdict is PASS.
