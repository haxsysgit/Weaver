# Repo assessment checklist

Use this when the user wants more than size metrics.

## 1) Classify what the repo actually is
- Canon/spec/protocol definitions
- SDK or library
- End-user app / product surface
- Prototype / lab / research area
- Docs-only or theory-heavy repo

Do not collapse these into one label. Many early projects are a mix.

## 2) Inventory the repo
- Count major file types
- Identify root docs and package metadata
- Find schemas, examples, tests, CI config, and reports/audits
- Note whether there is a root README or only subpackage READMEs

## 3) Verify runnable surfaces
- Find public exports and package entrypoints
- Run a minimal smoke test when possible
- Prefer a tiny end-to-end path over broad but unverified claims

## 4) Check maturity signals
Positive signals:
- root README
- examples/tutorials
- tests
- CI
- packaging/release metadata
- versioning discipline

Negative signals:
- only partial/subpackage docs
- audits without actual tests
- no CI
- large claim surface with little executable proof

## 5) Check doc consistency
- Broken file references
- Version/path drift
- Missing canonical docs referenced elsewhere
- Tension between marketing language and status disclaimers

## 6) Evaluate semantic completeness
Ask: what would pass validation while still being nearly empty?
- If minimal shells pass, the validator proves shape, not meaning.
- Call this out explicitly in reports.

## 7) Compare to adjacent projects
Use the nearest categories:
- orchestration frameworks
- memory/context systems
- protocol/spec projects
- workflow governance systems

Novelty often appears in framing, packaging, or interoperability rather than category creation.

## 8) Reporting pattern
A useful report usually answers:
- What is this repo really?
- How relevant is the problem/idea now?
- How complete is the implementation?
- What is missing or inconsistent?
- What nearby projects exist?
- What is differentiated here?
- What constructive criticism would most improve adoption?
