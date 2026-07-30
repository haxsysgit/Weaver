# frame-py Component Spec Pattern

When spec-ing a frame-py component before implementation, use this pattern for the spec document.

## File location

```
libraries/frame-py/docs/<component>.md
```

e.g., `docs/loaders.md`, `docs/models.md`, `docs/validators.md`, `docs/translators.md`

## Document structure

```markdown
# frame-py <Component> — Specification

**Status:** Agreed. Code follows this spec.
**Date:** YYYY-MM-DD

---

## Job

[One paragraph: what this component does and does NOT do.]

---

## Architecture

[File layout showing which files go where and the flow of data.]

---

## Decisions

### Dn: <Decision title>

[What was decided and why. Each decision has a stable number from D1 through D17+.]

---

## Data model

[Typed definitions: classes, fields, types, docstrings.]

---

## Public API

[The importable surface: function signatures, return types, usage examples.]
```

## Flow

1. Present the component's job in one paragraph
2. Reuse data model from finalized schema — don't redesign, just implement
3. Ask 2-5 focused multiple-choice questions
4. Lock each answer as a numbered decision
5. Document all decisions in the component spec file (`docs/<component>.md`)
6. Cross-cutting architecture decisions go in the repo-level `finalized-decisions.md`
7. Write the spec before writing a single line of code
8. Move to next component only after the current spec is fully locked
9. Implementation order is logical, not arbitrary: models first (foundation), then translators (needed by loaders), then validators (needed by loaders), then loaders (orchestrates everything)

## File location

When frame-py is a standalone package (as in the separate `frame-py` repo):

```
docs/<component>.md
```

e.g., `docs/loaders.md`, `docs/models.md`, `docs/validators.md`, `docs/translators.md`

When frame-py lives inside a monorepo `libraries/` folder, use `libraries/frame-py/docs/<component>.md`.

## Build order logic

After spec-ing all components, the user may ask "what's the logical next step?" Instead of asking them back, determine the dependency chain and execute in order:

1. **Models** — everything returns these. No dependencies.
2. **Translators** — needed by loaders for YAML normalization. Depends on nothing internal.
3. **Validators** — needed by loaders for schema/limit enforcement. Depends on schemas.
4. **Loaders** — orchestrates everything. Depends on models, translators, validators.

## Module placement rule

Components that are independently callable by tools other than the loader (validators, translators) stay as flat modules (`frame/validators/`, `frame/translators/`), NOT nested inside `frame/loaders/`. Only the assembler lives inside loaders since it's tightly coupled to the load pipeline.
