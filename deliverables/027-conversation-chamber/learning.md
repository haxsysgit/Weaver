# Plan 027 learning note

## Gate status

**Closed 2026-08-31; owner accepted.** Plan 026 is closed. The owner combined
the former Plans 027, 028, and 029 into this one continuous plan and directed
checkpoint one to begin.

## Confirmed owner direction

- Checkpoint one is the Conversation Chamber: Weaver inscriptions, reader
  shards, safe chapter knots, a black-wood composer, honest key state, and
  action-driven Spellweave motion.
- Checkpoint two is the Thread Archive: persistent server-backed rename, pin,
  archive, restore, delete confirmation, clear pinned and archived sections,
  plus one phone and desktop component.
- On 2026-08-22 the owner restored Soul Sea presentation choices, the selected
  Soul Sea behind the live Spellweave, clear pin and unpin controls, action
  tooltips, and one consistent delete confirmation. The owner accepted the
  bounded-canon Sunny concept and locked Sunny, ordinary Awakened, and Nephis
  as the three selectable Soul Sea identities.
- Checkpoint three proves the complete fake-mode journey: integration,
  restart, accessibility, motion, performance, broad phone support, desktop,
  independent review, and owner decision.
- Shadow Slave remains the only visible Edition. The UI has no fake book
  switcher.
- Browser evidence covers 320 x 568, 360 x 800, 390 x 844, 412 x 915, and
  1440 x 900, plus every owner-held phone available at review. No handset has
  special gate status.
- The accepted v1 UI and Plan 025 Spellweave are the production starting point.
  The rejected Plan 024 prototype only records what to avoid.

## Current observations

- `Message.tsx`, `Composer.tsx`, and the live chat shell are the Chamber entry
  points. Existing safety and turn controls are regression contracts.
- Plan 023 already supplies server-backed conversation metadata. The Archive
  consumes its contract and removes browser-only metadata state.
- The root package owns `npm run build` and `npm test`; `uv run pytest` remains
  the full Python floor. `uv run weaver web --fake` is the local journey path.

## Learning gate

Passed. The owner accepted checkpoint two on 2026-08-24 after reviewing the
Thread Archive and restored Soul Sea presentation. Checkpoint three is now
active. It owns the deterministic fake journey, full command floor, browser
evidence, independent reviews, and final owner decision.

Checkpoint three preserves the accepted design as a hard boundary. Its repairs
change only proven integration, privacy, performance, touch, and keyboard
defects. They do not reopen the transparent conversation treatment, Soul Sea,
settings composition, Thread Archive structure, or Hidden Thread materials.

On 2026-08-25 the owner rejected the fixed one-line fake reply as an adequate
development environment. Plan 027 now owns a permanent artificial conversation
simulator behind `weaver web --fake`. It must exercise realistic tool phases,
streaming, formatting, continuity, cancellation, and failures through the same
runtime and UI paths as live Weaver while making zero provider calls. A branch
is temporary implementation isolation only; the accepted simulator merges into
the product codebase and remains available for future development.

The extension trial established two reusable integration rules. Delayed UI
playback must observe cancellation even after the final answer is persisted,
and deliberate fake failures must become recoverable through the same retry
route the live product uses. A fake scenario that only displays an error does
not test recovery.

The smallest phone check also established that `min-width: 0` on children is
not enough when an implicit CSS grid track still uses intrinsic content width.
The phone chat grid now uses `minmax(0, 1fr)`, which keeps long Markdown inside
the viewport without changing the accepted presentation.

On 2026-08-31 the owner accepted the final visual state and directed the final
Plan 027 floor, closure, and Weaver `v1.2.0` git and GitHub release if the floor
and independent reviews pass. This is a narrow release authorization. Live
provider calls and application infrastructure deployment remain outside the
plan.
