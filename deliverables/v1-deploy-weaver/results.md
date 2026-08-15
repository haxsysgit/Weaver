# Results: Plan v1 (Deploy Weaver) — Slice 2

Date: 2026-08-14. Status: slice 2 complete.

## Cleanup

Removed from `.weaver/` (private state, not git):

| Path | Size | Reason |
| --- | --- | --- |
| research/retrieval-experiment/v2-openai/ | 207M | dead qdrant index from the OpenAI-embedding sweep (plan 014); superseded by live bge index |
| research/retrieval-experiment/v2-bge/ | 20M | old sweep index, superseded |
| research/chatgpt-ui/ | 4.2M | browser profile from the retired ChatGPT-UI experiment |
| weaver-chatgpt-appraisal/ | 53M | Chrome profile debris (cache, cookies, metrics) from the appraisal experiment |

`.weaver/` total: 453M → **170M** (freed 283M). The small experiment reports
(build-report, colab-sweep, openai reports, questions) were kept as
history (~520K).

## Prod bundle tool

`scripts/build_prod_bundle.py` — copies the three read-path sources into
a bundle that mirrors the project root layout:

- `novels/shadow-slave/` (raw chapter files, read by ChapterIndex)
- `.weaver/retrieval/` (embedded qdrant index)
- `.weaver/knowledge/` (story notebook)

Corpus packets (`.weaver/corpus/`) are fetch-pipeline artifacts, NOT read
path: the server never reads them, so they are not bundled. `receipts`
and `exports` subdirs are excluded from knowledge/corpus copies.

The script writes `manifest.json` (per-file sha256 + sizes), refuses to
overwrite an existing bundle, and **fails hard on any leak**: any file
whose path contains a forbidden name (research, receipts, runs, state,
reviews, plan002-models, appraisals, config.toml, .env) aborts the build.

Verification: `--demo` self-check passes (3-file fake bundle + leak
plant detection). Real bundle: **12,685 files, 137.0 MiB**.

## Smoke (bundle as WEAVER_PROJECT_ROOT)

- `weaver doctor`: PASS (6/6 checks).
- Chapter read: chapter 98 opens from bundle, text present ("Shadow
  Slave-Chapter 98...").
- Notebook: loads from bundle.
- Qdrant index: opens from bundle, collections `novel_chunks` (6826
  points, dense) and `notebook_statements` (2456 points).

## Bugs found by verification (fixed in the tool)

1. Bundle spec originally included corpus packets and missed novels/ —
   ChapterIndex reads novels/shadow-slave directly. Fixed spec.
2. Leak check only scanned files, so an empty forbidden dir would slip
   through. Now scans dirs too (os.walk over the output).
3. Demo planted the leak in the output dir instead of the source; fixed.

## Note

The bundle contains raw novel text (novels/). It ships to the owner's
own server over SSH only — it is never committed, never public. Same
rule as the local state.
