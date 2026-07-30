---
name: codebase-inspection
description: "Inspect codebases w/ pygount: LOC, languages, ratios."
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [LOC, Code Analysis, pygount, Codebase, Metrics, Repository]
    related_skills: [github-repo-management]
prerequisites:
  commands: [pygount]
---

# Codebase Inspection with pygount

Analyze repositories for lines of code, language breakdown, file counts, and code-vs-comment ratios using `pygount`.

## When to Use

- User asks for LOC (lines of code) count
- User wants a language breakdown of a repo
- User asks about codebase size or composition
- User wants code-vs-comment ratios
- General "how big is this repo" questions
- User wants a thoughtful repo assessment: maturity, completeness, doc consistency, or whether the project is production software vs spec/prototype/research
- User wants a comparison against adjacent tools or products in the same space

For substantive repo reviews, do not stop at metrics. Treat LOC as orientation only, then inspect structure, docs, tests, packaging, and runnable surfaces.

## Prerequisites

```bash
pip install --break-system-packages pygount 2>/dev/null || pip install pygount
```

## 1. Basic Summary (Most Common)

Get a full language breakdown with file counts, code lines, and comment lines:

```bash
cd /path/to/repo
pygount --format=summary \
  --folders-to-skip=".git,node_modules,venv,.venv,__pycache__,.cache,dist,build,.next,.tox,.eggs,*.egg-info" \
  .
```

**IMPORTANT:** Always use `--folders-to-skip` to exclude dependency/build directories, otherwise pygount will crawl them and take a very long time or hang.

## 2. Common Folder Exclusions

Adjust based on the project type:

```bash
# Python projects
--folders-to-skip=".git,venv,.venv,__pycache__,.cache,dist,build,.tox,.eggs,.mypy_cache"

# JavaScript/TypeScript projects
--folders-to-skip=".git,node_modules,dist,build,.next,.cache,.turbo,coverage"

# General catch-all
--folders-to-skip=".git,node_modules,venv,.venv,__pycache__,.cache,dist,build,.next,.tox,vendor,third_party"
```

## 3. Filter by Specific Language

```bash
# Only count Python files
pygount --suffix=py --format=summary .

# Only count Python and YAML
pygount --suffix=py,yaml,yml --format=summary .
```

## 4. Detailed File-by-File Output

```bash
# Default format shows per-file breakdown
pygount --folders-to-skip=".git,node_modules,venv" .

# Sort by code lines (pipe through sort)
pygount --folders-to-skip=".git,node_modules,venv" . | sort -t$'\t' -k1 -nr | head -20
```

## 5. Output Formats

```bash
# Summary table (default recommendation)
pygount --format=summary .

# JSON output for programmatic use
pygount --format=json .

# Pipe-friendly: Language, file count, code, docs, empty, string
pygount --format=summary . 2>/dev/null
```

## 6. Interpreting Results

The summary table columns:
- **Language** — detected programming language
- **Files** — number of files of that language
- **Code** — lines of actual code (executable/declarative)
- **Comment** — lines that are comments or documentation
- **%** — percentage of total

Special pseudo-languages:
- `__empty__` — empty files
- `__binary__` — binary files (images, compiled, etc.)
- `__generated__` — auto-generated files (detected heuristically)
- `__duplicate__` — files with identical content
- `__unknown__` — unrecognized file types

## Beyond LOC: Project-Maturity Review

When the user asks whether a project is complete, credible, novel, or relevant to a space (for example AI tooling), inspect these in addition to language stats:

1. **Project shape**
   - Distinguish spec/canon, SDK/library, app/product, prototype/lab, and research notes.
   - Report which layers are actually present in the repo instead of assuming it is a complete product.

2. **Entrypoints and runnable surfaces**
   - Find package metadata, public exports, CLIs, and any minimal runnable path.
   - If possible, perform a small smoke test so "works" means exercised code, not just readable code.

3. **Maturity signals**
   - Look for a root README, tests, CI, examples, release metadata, and packaging polish.
   - Absence of tests/CI/README is a meaningful maturity signal; say so plainly.

4. **Doc drift and internal consistency**
   - Check whether docs reference files/paths that do not exist.
   - Watch for version drift between docs and actual repo layout.
   - If a project claims to be a standard/protocol, verify whether docs also describe it as unfinished, provisional, or "current implementation".

5. **Semantic completeness vs permissive validation**
   - A validator passing is not enough. Test whether a trivially minimal example passes.
   - If near-empty structures validate, call out that the schema or checker proves format compliance more than substantive completeness.

6. **Market comparison**
   - Compare against the nearest adjacent category, not only exact clones.
   - For AI projects, separate orchestration frameworks, memory/context systems, and protocol/spec efforts.
   - Novel framing can be differentiated even when the category itself is crowded.

See also `references/repo-assessment-checklist.md` for a reusable review checklist.

## Pitfalls

1. **Always exclude .git, node_modules, venv** — without `--folders-to-skip`, pygount will crawl everything and may take minutes or hang on large dependency trees.
2. **Markdown shows 0 code lines** — pygount classifies all Markdown content as comments, not code. This is expected behavior.
3. **JSON files show low code counts** — pygount may count JSON lines conservatively. For accurate JSON line counts, use `wc -l` directly.
4. **Large monorepos** — for very large repos, consider using `--suffix` to target specific languages rather than scanning everything.
5. **Metrics are not a product review** — a repo can look substantial in LOC while still being mostly docs/specs, or look small while containing a viable core library.
6. **Passing validation can be misleading** — if schemas are permissive, a "green" validation result may still mean the project is semantically incomplete.
7. **Do not infer product readiness from ambitious docs** — verify with tests, examples, packaging, and runnable code.
