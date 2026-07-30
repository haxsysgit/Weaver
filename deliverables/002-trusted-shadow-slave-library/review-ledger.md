# Independent Review Ledger

## Frozen candidate

Initial public candidate:
`27ae4c193ec645026392c415ab53722f3b5c57fe`

Review prompts excluded novel prose, raw HTML, credentials, private receipts,
packet contents, exports, and raw model reasoning.

## Review 1: Privacy, architecture, and library safety

- Model: `deepseek-v4-pro`
- Status: initially blocked; findings adjudicated
- Privacy check: clean
- Private metadata receipt:
  `.weaver/plan002-models/pro-privacy-review-20260729T212643-afa40f979ed5`
- Findings:
  - `PRIV-001`: requested removal of Plan 001's OpenAI and tiktoken
    dependencies. Rejected as out of scope; those dependencies power Weaver's
    admitted model boundary and are not a corpus-source fallback.
  - `ARCH-002`: claimed no-argument `str.encode()` is locale-dependent.
    The claim is incorrect in Python, but explicit `"utf-8"` was accepted as a
    harmless clarity improvement.
  - `ARCH-003`: claimed required agent modules were missing. Rejected because
    the files exist and the full verification floor imports and tests them;
    they were omitted only from this review packet.
  - `FS-004`: requested a preflight already represented by
    `use_legacy_stage`, the second just-before-rename existence/symlink check,
    temporary cleanup, and injected replace-failure coverage. Rejected.

## Review 2: Tests, evidence, exports, and acceptance

- Model: `deepseek-v4-pro`
- Status: blocked only on declared live acceptance
- Code conclusion: no blocker in the public corpus implementation
- Leak check: clean
- Private metadata receipt:
  `.weaver/plan002-models/pro-tests-review-20260729T212739-f13ab7e5d8d6`
- Findings:
  - `TURN-01`, `SESSION-01`, `SESSION-02`, and `STREAM-01` concern the
    previously admitted conversation/model foundation, not Plan 002 corpus
    behavior. They are recorded but rejected from this repair pass.
  - `PREVIEW-01` claimed broken preview hashes were not propagated. Rejected:
    `_preview_action` constructs the `ChapterAction` with both old fields
    directly, and its regression test passes.
  - a missing production-helper credential test was accepted as a relevant
    coverage improvement.
  - the reviewer independently confirmed the honest 2843/3128 live blockers,
    synthetic-only tests, and absence of a code blocker.

## Accepted repair pass

Used once:

- made the corpus-hash UTF-8 encoding explicit;
- added a deterministic no-network test for a missing
  `FIRECRAWL_API_KEY` through `service_from_environment(live_source=True)`.

The full floor then passed with 73 tests.

## Rechecks

Frozen repaired candidate:
`71787b365828c9aece15a949479ed1c4e4854fed`

Ledger-only recording after the calls does not alter the reviewed source and
test packet.

### Privacy and architecture recheck

- Model: `deepseek-v4-pro`
- Code verdict: pass
- Privacy verdict: clean
- Remaining implementation findings: none
- Live gate: explicitly left to the owner
- Private metadata receipt:
  `.weaver/plan002-models/pro-privacy-recheck-20260729T212943-41911caa9398`

The reviewer rechecked each original finding against the complete repository
slice and accepted the adjudication. It confirmed the Plan 001 dependency
boundary, present agent modules, explicit UTF-8 clarity change, and existing
atomic replacement checks.

### Tests and evidence recheck

- Model: `deepseek-v4-pro`
- Code and test verdict: pass
- Leak verdict: clean
- Coverage verdict: accepted gap closed
- Remaining implementation findings: none
- Live acceptance at review time: blocked by the source limitations later
  accepted by the owner
- Private metadata receipt:
  `.weaver/plan002-models/pro-tests-recheck-20260729T213034-6659e0c37895`

The reviewer confirmed 73 passing tests and the repaired missing-credential
coverage. It rejected its earlier preview-hash claim after reading the direct
`ChapterAction` construction and passing regression test.

One sentence in the recheck called chapter 2843 non-UTF-8. That statement is
unsupported by the inspector and was not accepted into results. The actual
recorded blocker is the absent parseable visible chapter number.

## Owner close-out

Both code reviews are clean. On 2026-07-30, the owner accepted chapters 2843
and 3128 as deferred source limitations rather than code blockers. Plan 002 is
closed without marking either chapter fixed and without weakening the trusted
source or chapter-identity rules.
