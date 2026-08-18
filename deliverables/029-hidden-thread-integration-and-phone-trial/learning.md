# Plan 029 learning note

## Gate status

**Unadmitted.** The owner approved the overall Hidden Thread direction and
requested this drafted release-gate plan on 2026-08-18. Admission waits for
Plans 022 through 028 to close. No integration work, phone trial, or deployment
is authorized by this draft.

## Confirmed owner direction

- The final surface keeps cosmic Nightmare Spell depth plus sharp middle
  threads and foreground rune fragments.
- Rite, chamber, and archive stay inside one continuous scene.
- Responsive evidence is required at 320 x 568, 360 x 800, 390 x 844, and
  412 x 915. The full journey also runs on the Redmi Note 14 in both
  orientations at its measured CSS viewport. Desktop is checked at 1440 x 900.
- Shadow Slave is the only visible Edition.
- Browser-local key state and server-backed device-scoped conversation metadata
  keep their existing privacy boundaries.
- Silver carries interaction, old gold carries appraisal emphasis, and crimson
  carries failure, corruption, and destructive actions.
- The full build, frontend tests, Python tests, independent reviews, and owner
  phone use happen before the release decision.
- This plan does not deploy.

## Current observations

- The root package owns both `npm run build` and `npm test`. The build writes
  the shipping frontend into `src/weaver/web/dist/`.
- `index.html` already declares `viewport-fit=cover`, a web manifest, and the
  Weaver theme colour. Plan 029 must verify the built shell and restart result,
  not assume the source tag is enough.
- `uv run weaver web --fake` is the deterministic local server path. Phone use
  needs a local-network host binding, with no live fallback.
- Component tests cannot prove safe-area rendering, software-keyboard behavior,
  screen-reader order, frame stability, or service-worker replacement on an
  actual phone.
- Public plan records cannot contain the phone captures, private chats, device
  ids, performance traces, or key material used during inspection.

## Hypothesis

A release matrix tied to owner decisions will catch gaps that a final screenshot
misses. The direction is ready only when the same fake-mode journey survives
fresh install, retained state, restart, reduced motion, accessibility use, and
the accepted numeric performance limits on the Redmi Note 14 and desktop.

## Learning gate

Pending. After admission, the executor records the accepted 022 through 028
decisions and unresolved findings here before running any trial. The final gate
belongs to the owner after both independent reviews and Redmi Note 14 use.
