# Results

## Status

Implementation in progress.

## Frozen v1 behavior

- Existing first-run, identity, composer, and live-surface tests passed 20/20.
- A fresh browser opens the setup; `deferred` and `completed` keep it closed.
- Escape records deferral, focus stays inside the setup, and unmount restores
  the previous control.
- Key entry uses `identity.ts`, trims before storage, and makes no validation
  request.
- The v1 chat, composer, and Spellweave stay mounted behind the setup.

## Four-act red contract

The new focused rite suite failed as expected: six failed and one existing
Escape path passed. The failures prove the current component still uses a card,
has no act state, mask, binding beads, sealed knot, replacement appraisal, or
continuous reveal state. No production source changed before this red run.
