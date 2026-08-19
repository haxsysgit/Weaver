# Review Ledger

## Status

Independent review and repair recheck completed on 2026-08-18. All four
findings are resolved. The implementation is within the admitted frontend
scope, the repaired targeted checks pass, and no source-code blocker remains.

## Review boundary

Reviewed:

- the Plan 025 contract, learning note, results, commits, and changed-file list;
- render-profile and adaptive-budget code;
- deterministic SVG geometry and decorative accessibility;
- the Motion provider and reduced-motion paths;
- Three.js setup, resize, visibility, fallback, and disposal paths;
- live-surface integration, the desktop rail repair, and generated dist links;
- private viewport captures and saved performance JSON;
- scope, private-data boundaries, dependency changes, and commit prefixes.

The reviewer changed no product source, package file, generated bundle, or
private evidence.

## Findings

### P025-R1: the passing direct activity trace has no saved trace file

**Severity:** High, closure blocker.

`learning.md` accepts at most two frames over 50ms and no frame over 100ms for
the direct ten-second Spellweave activity trace. `results.md` says the final
direct `answering` trace had zero long tasks and zero long animation frames.
The saved evidence files do not contain that passing trace:

- `performance-v3.json` records seven activity frames over 50ms, including
  frames over 200ms;
- `performance-v4.json` records five activity frames over 50ms and a 255.2ms
  maximum;
- those files appear to measure the full fake message path, which the results
  correctly assign to Plan 027, but there is no separate JSON artifact for the
  direct visual-state isolation run.

**Required repair:** repeat the direct `answering` state measurement under the
accepted 390 x 844, DPR 2, touch, and 4x CPU setup. Save its raw counts and
environment under `private/design-evidence/025/implemented/`, then make the
result entry point to that file. If the repeat exceeds the accepted limit, stop
closure and repair the visual engine or return to the owner.

**Recheck: passed.** The repeat is saved as
`direct-answering-performance.json`. It records a 390 x 844 viewport, device
DPR 2, touch emulation, 4x CPU throttling, the level-two static fallback, and a
ten-second direct foreground `answering` state with zero long tasks and zero
long animation frames. The repair moves the state selector onto the foreground
SVG and removes the costly repeated dash animation. The state remains visible
as a static silver answer thread, while Plan 027 owns streamed reply growth.

### P025-R2: the narrow-landscape result reports the wrong active DPR

**Severity:** Medium, record repair.

The responsive table in `results.md` reports DPR 2 for 800 x 360.
`final-matrix.json` records active DPR 1.5 with `adaptiveLevel: 1` for that same
viewport. The browser device DPR was 2, while the renderer had already selected
its lower-cost profile. The adaptive behavior is allowed, but the current table
mixes device DPR with active renderer DPR.

**Required repair:** correct the 800 x 360 row and label device DPR separately
from active renderer DPR. Keep the adaptive level in the result so Plan 029 can
repeat the same check.

**Recheck: passed.** The result table now separates device DPR from active DPR.
The 800 x 360 row records device DPR 2, active DPR 1.5, and adaptive level 1,
matching `final-matrix.json`.

### P025-R3: the compact-phone capture does not prove the stated clean layout

**Severity:** Medium, evidence repair with a Plan 027 deferral.

`320x568-final.png` shows enlarged transcript content and a clipped right-side
Copy control. It looks like the 200 percent zoom inspection was saved under the
normal final-capture name. `412x915-final.png` also shows an existing message
Copy control colliding with the fixed settings control near the top-right edge.
That message-action layout belongs to Plan 027, but the current Plan 025 result
says the matrix proves no clipped geometry without recording the exception.

**Required repair:** capture a clean 320 x 568 image at normal zoom, retain the
200 percent zoom evidence under a separate clear name, and record the existing
message-action collision as a Plan 027 baseline. Do not expand Plan 025 into the
reply-layout work owned by Plan 027.

**Recheck: passed.** `320x568-final.png` now contains the normal-scale compact
layout. The former image is retained as `320x568-200-percent-zoom.png`.
`results.md` records the existing Copy/settings collision and composer clipping
as Plan 027 work instead of claiming those v1 controls are clean at every
width.

### P025-R4: measured agent usage and deliverable states are missing

**Severity:** Medium, closure-record blocker.

Slice 11 requires measured agent usage. `results.md` records asset and test
measurements but no agent token or cost measurement. `README.md` still says the
learning gate is pending and the results are not started, even though both are
complete.

**Required repair:** record the executor and reviewer usage exposed by the
agent environment. If the environment exposes no reliable measurement, say
that plainly instead of inventing one. Update the deliverable table, plan index,
decision record, and plan status as part of the owner-approved closure commit.

**Recheck: passed.** `results.md` records that this agent environment exposes
no reliable per-plan token or cost count and confirms that product execution
made no model request. The deliverable table, learning status, owner decision,
canonical plan, and plan index now carry the accepted closure state.

## Checks that passed

- Targeted independent Vitest run: 21 tests passed across the five Plan 025
  render, geometry, motion, backdrop, and live-surface test files.
- Repair recheck Vitest run: 11 tests passed across the backdrop and live
  surface test files, including the foreground state and sidebar assertions.
- The rebuilt dist index points to existing `weaver-YQoLj2h_.js` and
  `weaver-B8Z2dj94.css` assets.
- The Plan 025 commit range touches no backend route, state schema, provider,
  private novel, `.weaver`, environment, or service-worker file.
- Authored-file `git diff --check` passes. Generated Three.js shader whitespace
  is already isolated and recorded in `results.md`.
- The decorative backdrop is `aria-hidden`, pointer-transparent, and contains
  no operable control. Reduced motion removes its CSS travel and uses the static
  Three.js profile.
- Three.js geometries, materials, the renderer, resize listener, resize frame,
  and animation loop are released on teardown. Unsupported WebGL exits without
  touching chat behavior.
- Desktop collapse keeps its visible reopen control operable. The mobile drawer
  keeps its closed subtree inert.
- The new dependency is limited to Motion for React. The committed lockfile
  keeps the unrelated nanoid version at 3.3.17; the nanoid 3.3.18 working-tree
  change remains unstaged owner drift.
- Private screenshots and performance JSON remain ignored and are absent from
  the committed file list.

## Independent verdict

**Pass. Plan 025 is ready for its exact closure commit.** All four findings are
repaired, the direct performance check meets its accepted limit, and the
generated dist points to the rebuilt assets. Plan 027 owns the recorded
message-action and composer clipping.

## Review command note

One helper command called bare `python`, which is unavailable in this checkout.
The same generated-dist link check was repeated with shell tools and passed.
This did not run or change product code.
