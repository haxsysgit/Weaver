# Results

## Status

Interaction-contract proof complete. Responsive scene work is in progress.

## Interaction contract

- The red state test was run first on 2026-08-18. It failed as expected because
  `prototype-state.mjs` did not yet exist.
- `node --test private/design-labs/024-hidden-thread-responsive/prototype-state.test.mjs`:
  4 passed. The private test covers the four-act rite reveal, the three review
  scenes, reduced motion, and the defined viewport profiles.
- `node --check private/design-labs/024-hidden-thread-responsive/prototype-state.mjs`:
  passed.
- The state module and test are intentionally ignored private lab files. This
  public-safe record is the only committed artifact of the interaction proof.

## Local visual inspection

- The first 390 x 844 and 1440 x 900 captures exposed two failures: the live
  chamber showed through the rite, and dashed background paths looked like
  decorative wallpaper instead of a deliberate Spellweave.
- The lab now hides the chamber during the rite and uses a quiet solid network
  of knots and threads. The rite keeps the cosmic field, original abstract mask
  impression, and foreground rune fragments.
- The rite has its own private control trigger, so the reduced-motion check is
  reachable before the chamber appears.
- Local headless captures now cover rite and active-chat compositions at 390 x
  844 plus the active desktop chamber at 1440 x 900. They are temporary
  private inspection evidence only. The actual Redmi gate remains pending.
- An initial bulk capture command failed because zsh did not split its quoted
  viewport records. It produced invalid empty-suffix files, which were moved
  recoverably to `/tmp/plan024-invalid-captures` and are not evidence.
- The corrected capture run produced 25 private images under
  `private/design-evidence/024/`: awakening, binding, appraisal, active-chat,
  and archive scenes for each defined mobile viewport and 1440 x 900 desktop.

## Regression checks

- `npm run build`: passed on 2026-08-18. The private lab did not change a
  production source file or generated distribution file.
- `npm test`: 9 files and 45 tests passed. The existing jsdom WebGL fallback
  warnings remain visible because the test environment has no canvas context;
  they are expected and did not fail the suite.
