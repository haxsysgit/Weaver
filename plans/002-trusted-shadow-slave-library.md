# Plan 002: Trusted Shadow Slave Library

## Status

**Accepted by the owner on 2026-07-30.**

The owner admitted this numbered slice on 2026-07-29 by asking Weaver to
implement the supplied Plan 002. The owner confirmed the understanding in
[`learning.md`](../deliverables/002-trusted-shadow-slave-library/learning.md)
on 2026-07-29 and added the agent boundary recorded below.

The owner closed the experiment on 2026-07-30. Chapters 2843 and 3128, plus the
export and updater limits caused by them, remain recorded observations but are
not Plan 002 acceptance blockers.

## Goal

Build a small deterministic Python toolset that keeps Weaver's private Shadow
Slave collection complete, ordered, clean, and reproducible.

This slice maintains source material. It does not test whether Weaver
understands the novel.

It is also a practical test of how far Weaver can push repeatable grunt work
into deterministic pipelines that an LLM-driven custom agent can call safely.
The model may choose a tool; the tool owns exact validation, permissions,
writes, receipts, and failure behavior.

## Planning observations to recheck

These facts came from the admitted plan. They are planning evidence, not
fresh observations from this implementation turn:

- `novels/shadow-slave/urls.md` lists chapters 1–3128 with no gaps or
  duplicates.
- Local chapter files reach 3047, but 3047 is a broken placeholder.
- Chapter 3129 had a predictable URL but returned 404 when the plan was made.
- Normal HTTP requests received Cloudflare 403, while Firecrawl worked.
- The stale `novels/scrape_progress.json` is historical data and must remain
  untouched.

No other novel is in scope.

## Hypothesis

A fixed novel specification, deterministic validation and cleaning, atomic
writes, private manifests, and fake-source tests can maintain the Shadow Slave
corpus safely without LLM cleaning, manual downloads, anti-bot bypasses, or an
agent framework.

## Candidate tool boundary

All five operations will be typed asynchronous Python functions with
validated, JSON-safe inputs and metadata-only outputs:

```python
await inspect_novel_corpus(novel_id)
await fetch_novel_chapters(
    novel_id,
    start_chapter,
    end_chapter=None,
    preview=True,
)
await update_novel_corpus(
    novel_id,
    through_chapter=None,
    preview=True,
)
await build_novel_packet(novel_id, chapters)
await export_novel(novel_id, format, through_chapter=None)
```

A thin CLI may expose the same functions for human checks. Tool logic must not
live in the CLI. Deep Agents, LangGraph, and Pydantic AI remain possible later
wrappers; this plan chooses none of them.

Weaver remains a custom agent and owns its tools and system behavior. If
LangGraph is used later, its admitted job is the conversation loop only. It
does not become the corpus pipeline, tool implementation, or whole Weaver
architecture. Future tools may inspect novels, update known web-backed
information, search the web, or perform other bounded work through the same
explicit registry pattern.

The tools accept a known novel ID, chapter numbers, preview flags, and a fixed
export format. They never accept arbitrary URLs or filesystem paths.

## Fixed Shadow Slave specification

One `ShadowSlaveSpec` owns the fixed NovelFire domain, slug, URL template,
title, language, directory rules, and HTML selectors.

The source adapter uses the official asynchronous Firecrawl Python client and
the `/scrape` path for one known URL at a time. It must use:

- `FIRECRAWL_API_KEY` from the environment;
- an explicit timeout;
- `max_retries=0`;
- fresh-page checking;
- raw HTML needed by the deterministic cleaner.

There is no fallback to direct requests and no attempt to bypass Cloudflare.
The variable name belongs in `.env.example`; its value never belongs in source,
logs, receipts, tests, or public evidence.

## Deterministic extraction and validation

Beautiful Soup with lxml will locate
`#chapter-article .d-chapter-content`, remove scripts, ads, navigation,
controls, media, and known injected blocker content, then extract ordered
paragraphs.

Normalization may change representation but not meaning:

- decode and write UTF-8;
- normalize Unicode, line endings, and non-breaking spaces;
- remove trailing whitespace and repeated blank lines;
- keep the original words, punctuation, and paragraph order;
- end files with one final newline;
- use the visible title in `Shadow Slave-{visible chapter title}`.

Before any corpus write, validate the HTTP status, final URL, visible chapter
number, title, body length, paragraph count, placeholder markers, and unwanted
site markers. A failure produces a safe error category and metadata, not a
partial chapter file.

## Corpus rules

- Valid local chapters are immutable.
- A valid local chapter that disagrees with a later webpage is a conflict. The
  local file is preserved.
- Missing chapters may be appended only after a complete temporary file passes
  validation.
- A proven-invalid placeholder may be atomically replaced only after its
  complete replacement has passed validation and been written safely.
- Repeated calls skip already valid chapters.
- Fetching is exact. A requested range never expands itself.
- The default updater follows consecutive known URLs and stops at the first
  genuine 404.
- `urls.md` receives a URL only after that chapter has been saved successfully.
  A 404 is never appended.

Chapter files use fixed 100-chapter folders. The tool will rename
`3001-3047` to `3001-3100` and use `3101-3200` for later chapters.

Chapter 3047 is the important repair case. The tool must fetch, extract,
validate, and safely write a complete temporary replacement before an atomic
replace can remove the placeholder. Its receipt records old and new hashes and
byte counts, never the old or new prose.

## Private state

Ignored owner-only Weaver state will hold:

- the machine-readable corpus manifest;
- metadata-only operation receipts;
- ordered reading packets and their manifests;
- TXT, Markdown, and EPUB exports.

The manifest records chapter number, title, URL, relative path, hash, byte
count, and status. Shadow Slave directories use mode `700`; private files use
mode `600`.

Public documents and tool responses may include counts, ranges, paths, hashes,
statuses, error categories, and timings. They must not include chapter prose,
raw HTML, credentials, or raw model reasoning.

## Deterministic verification

Tests use synthetic HTML, temporary directories, and a fake chapter source.
They must cover:

- URL ordering, gaps, duplicates, malformed URLs, and title/number mismatch;
- exact single and range selection;
- updater stop-at-404 behavior and optional upper bounds;
- idempotent skips for already valid chapters;
- broken, tiny, empty, non-UTF-8, and placeholder files;
- deterministic cleanup and text normalization;
- no deletion after fetch, validation, or write failure;
- atomic 3047 replacement and canonical folder movement;
- timeout, authentication, provider, extraction, conflict, and filesystem
  error categories;
- permissions, symlink refusal, and path-traversal refusal;
- prose-free and credential-free receipts;
- packet order and source hashes;
- TXT and Markdown order;
- EPUB metadata, chapter count, table of contents, spine, and readability;
- validated tool schemas and metadata-only responses.

Deterministic tests run before live Firecrawl use.

## Live-use sequence

After the deterministic floor passes, use only the new tools to:

1. Inspect the existing Shadow Slave corpus.
2. Preview chapters 3047–3128.
3. Repair 3047, then fetch 3048–3128.
4. Run the default updater until the first genuine 404.
5. Run it again and prove valid chapters are neither duplicated nor
   refetched.
6. Build packets for 1–3, 1499–1501, and 2998–3000.
7. Build and validate complete TXT, Markdown, and EPUB exports.

If chapter 3129 is available during live use, the updater continues
consecutively until the new first 404. The published boundary is an
observation, not a hard-coded chapter number.

## Evidence and review

The deliverable folder will contain:

- `plan.md`
- `learning.md`
- `results.md`
- `decision.md`
- `rubric.md`
- `review-ledger.md`
- editable Draw.io architecture plus rendered PNG evidence

DeepSeek V4 Flash implements the admitted candidate. Two independent DeepSeek
V4 Pro reviews check:

1. privacy, architecture, and corpus safety;
2. tests, live evidence, exports, and acceptance proof.

Accepted findings receive one repair pass. Both reviewers recheck the same
frozen result. Any remaining blocker stops the slice.

## Acceptance

Only the owner may accept or reject Plan 002. Acceptance requires:

- a contiguous valid corpus through the currently published chapter;
- chapter 3047 repaired by the new tool;
- no valid chapter overwritten, duplicated, or silently refetched;
- agreement between URLs, manifest, files, permissions, packets, and exports;
- safe repeated update calls;
- passing deterministic and live checks;
- no tracked or leaked private prose, raw HTML, credentials, or private
  receipts;
- both independent reviews reporting no blocker;
- an explicit owner decision recorded after reviewing the learning note and
  evidence.

## Owner acceptance amendment

On 2026-07-30, the owner accepted Plan 002 based on the capability that this
slice was meant to prove:

- deterministic tools can get, clean, normalize, inspect, update, organize,
  package, and export the private novel library;
- the tools protect valid chapters, validate replacements, report ambiguity,
  and fail safely when a source cannot prove a chapter;
- the model is not needed for cleaning, file placement, validation, or library
  maintenance;
- deterministic tests and independent reviews found no remaining code blocker.

The owner withdrew full library completeness from this experiment's acceptance
requirements. Chapters 2843 and 3128 are deferred source-data problems. They
are not marked fixed, and their related full-export and updater limitations
remain visible in the results.

Future owner-facing commands and agent-facing tools should use Weaver-themed
language such as library, chapters, reading packet, and edition. The existing
internal `corpus` module and tool symbols remain implementation names until a
later admitted plan renames or wraps them safely.

## Explicitly out of scope

- Reading-quality evaluation.
- Chunking, retrieval, embeddings, or graph storage.
- Wiki or vault memory.
- Literary judgement.
- Chat or agent orchestration.
- Implementing or selecting a whole-system agent framework.
- Any novel other than Shadow Slave.
