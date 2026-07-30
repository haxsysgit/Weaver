# Owner Decision: Trusted Shadow Slave Library

## Status

**Accepted by the owner on 2026-07-30.**

## Decision

Keep and close Plan 002.

The experiment proved the part the owner cared about: Weaver now has a
deterministic library toolset that can get, clean, normalize, inspect, add,
refresh, organize, package, and export novels without asking an LLM to clean or
manage the source files.

The implementation passed its deterministic tests and independent code
reviews. It repaired chapter 3047 through the tool path, protected valid
chapters, kept owner-only permissions, produced reading packets and editions
where the inputs were valid, and reported source ambiguity instead of weakening
its rules.

## Accepted limitations

The owner removed complete-through-current chapter coverage from Plan 002's
acceptance gate.

- Chapter 2843 still lacks a source heading that proves its chapter number.
- Chapter 3128 still redirects outside the fixed trusted domain.
- The full edition and first-unpublished-page checks remain limited by those
  two observations.

These are deferred library-source problems. They are not marked fixed. Plan 002
does not need to weaken chapter identity or redirect rules to close.

The tool is accepted as capable because it handles valid work
deterministically, detects missing or ambiguous chapters, refuses unsafe input,
and preserves the library when a source cannot prove what it returned.

## Language decision

`Corpus` does not fit Weaver's owner-facing theme.

Future user-facing commands, model-visible tool names, prompts, and product copy
will use plain library language:

- library;
- chapters;
- reading packet;
- edition;
- inspect;
- add;
- refresh.

Existing internal `corpus` modules and symbols may remain until a later
admitted plan wraps or renames them without breaking the accepted toolset.

## Decision record

- Owner choice: accept and close Plan 002 with recorded source limitations
- Date: 2026-07-30
- Reason: the deterministic library-management capability is proven; complete
  chapter availability is not required for this experiment
