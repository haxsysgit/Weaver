# Plan 013 review ledger

## Status

All independent findings repaired. Fresh-context reviewer verdict: **PASS**.

## Findings and repairs

### Built frontend missing from packaged installs

**Finding:** the backend served only `src/weaver/web/dist/`, but the directory
was ignored and absent from built wheels.

**Repair:** the production build is tracked, Hatch includes it as a wheel
artifact, Python asserts that the production assets exist, and a temporary
wheel build/install confirmed index, manifest, mark, worker, and hashed JS/CSS.

### Service worker could show the wrong privacy mode

**Finding:** cache-first `/` could retain fake-mode copy after the same origin
restarted in live mode. Fixed JS/CSS names could also pin an old bundle.

**Repair:** Vite emits hashed assets. The worker discovers and precaches the
exact hashes during first install, treats navigation as network-first with an
offline fallback, and never responds to `/api/`. Browser proofs cover both a
server-off reload and fake-to-live restart under an installed worker.

### Reuse boundary still mixed behavior and Weaver presentation

**Finding:** `ChatApp` owned transport/state behavior and hardcoded Weaver copy
and marks despite the documented HaxJobs reuse claim.

**Repair:** `useChatController` owns conversation and streaming behavior.
`ChatApp` composes the presentation. Product configuration supplies visible
words, the brand mark is an injected component, and a Career Guide product
test proves the boundary without Weaver or Shadow Slave copy.

### Browser proof cleanup race

**Finding:** a process could exit between `poll()` and `killpg()`, and one
cleanup exception could skip server shutdown.

**Repair:** `ProcessLookupError` is handled and nested `finally` blocks always
attempt page, browser, and server cleanup independently.

## Verification evidence

- Required build, Python, React, lint, and package compatibility floor passed.
- Fake and explicit live browser conversations passed in temporary state.
- Offline shell and fake-to-live privacy proofs passed under a controlling
  service worker.
- The staged privacy and credential audit remains the last pre-commit gate.

## Verdict

PASS. The reviewer reran the 41-module build, 289 Python tests, 8 React tests,
Ruff, dependency compatibility, packaging inspection, offline shell, privacy
mode switch, diff check, and private-data scan. No unresolved finding remains.

## Owner inspection after review

**Observation:** the owner still saw the deleted shell. Server logs showed the
legacy document requesting deleted `/static/` modules, followed by the new
worker fetching `/`, the manifest, mark, and hashed React assets.

**Cause:** worker v3 replaced the legacy cache and claimed the open tab, but a
claim does not replace HTML that has already rendered. The React shell would
appear on the next navigation.

**Repair:** worker v4 records whether it removed an older cache. When it did,
it claims and navigates every open same-scope window once. A fresh install has
no older cache and does not reload. The web test went red before this behavior
was added, then passed after the production bundle was rebuilt.
