# Contributing to Weaver

Weaver is a numbered-plan project. The plan system is the contribution
workflow; read it before touching anything.

## The plan system (read first)

- **One plan at a time.** Every piece of work is one numbered plan in
  `plans/`, admitted by the owner before implementation starts.
- Status ladder: drafted → admitted → closed. Implementation and review
  happen inside admitted.
- New plans start from `plans/_TEMPLATE.md`:
  `uv run python scripts/scaffold_plan.py NNN slug`
- The full workflow (gates, deliverables, budgets, parallel rules) is the
  `arinze-plans` skill (`.agents/skills/arinze-plans/`).
- The owner contract is `AGENTS.md` at the repo root. Read it.

## Setup

```bash
uv sync                       # python env + deps
npm install                   # frontend deps
cp .env.example .env          # keys (fake mode needs none)
```

## Verification floor (must pass before any commit)

```bash
uv run pytest                 # 501 tests, synthetic data only
npm run test                  # frontend vitest suite
npm run build                 # frontend production build
```

Tests never use live models or real novel content. Fake mode is explicit:
`uv run weaver --fake`; a missing key exits before any call, never a
silent fallback.

## What is private, forever

- `novels/` — immutable private source material. Never committed, copied,
  or exposed.
- `.weaver/` — generated private state (index, notebook, receipts).
- `private/`, `runs/`, `receipts/` — private by .gitignore.
- Raw `reasoning_content` never goes into reports, logs, or commits.

Audit staged files for credentials and private source text before every
commit.

## Code style

- Python: black-compatible formatting, type hints on public functions,
  docstrings explaining why. Run `uv run ruff check` on changed files.
- Frontend: TypeScript strict, plain CSS tokens (no Tailwind), markdown
  parsed locally — model text never becomes raw HTML.
- Tests: test-first (write the failing test, then implement). One test
  that fails if the logic breaks beats ten that don't.

## Workflow

1. The owner admits a plan (or you are dispatched to execute one).
2. Read the plan's slices; run each slice's verification floor.
3. Commit per slice with a message naming the plan and slice.
4. Record observations in `deliverables/NNN-slug/results.md`; leave the
   owner decision to `decision.md`.
5. Never close a plan yourself. The owner records the final decision.
