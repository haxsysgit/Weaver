# Results: Trusted Shadow Slave Library

## Status

The deterministic implementation, tests, and admitted live-use sequence ran on
2026-07-29. The owner accepted and closed Plan 002 on 2026-07-30.

The strict fixed-source rules still cannot prove chapter 2843 valid or save
chapter 3128. The owner accepted those as deferred source limitations rather
than weakening validation or treating them as fixed.

## Hypothesis under test

A custom Weaver agent can hand repetitive corpus work to a deterministic,
typed pipeline while the LLM stays responsible only for understanding the
request and choosing an allowed tool. LangGraph, if admitted later, needs to
own only the conversation loop.

## Built candidate

The implementation provides five typed asynchronous tools through Weaver's
explicit registry:

- inspect the fixed Shadow Slave corpus;
- preview or fetch one exact chapter or closed range;
- repair known gaps and continue only through consecutive fixed URLs;
- build ordered, hash-pinned reading packets;
- export ordered TXT, Markdown, or EPUB editions.

The CLI is a thin caller of the same service. The corpus rules do not live in
the CLI or in LangGraph.

One fixed `ShadowSlaveSpec` derives every URL and path. The Firecrawl adapter
requests fresh raw HTML with an explicit timeout and `max_retries=0`.
Beautiful Soup and lxml perform deterministic extraction. Pydantic validates
JSON-safe tool inputs and outputs. EbookLib creates EPUB structure.

## Deterministic observations

- `uv lock --check` passed with 65 resolved packages.
- `uv run pytest -q` passed: 73 tests.
- The tests use synthetic prose and a fake source; they do not copy private
  chapters.
- An 82-chapter preview returns 10 representative actions plus complete
  counts, staying below Weaver's 12,000-character tool-result limit.
- The Firecrawl SDK construction test proves the explicit timeout and zero
  retries.
- Failure injection proves the old 3047 placeholder survives source,
  validation, temporary-write, and final-replace failures.
- Repeated fetch and update tests skip valid chapters and never append a URL
  twice.
- TXT, Markdown, and EPUB fixtures are ordered and reproducible. The EPUB test
  checks chapter documents, table of contents, spine, and readable content.
- Symlinked roots, symlinked files, and derived paths outside the allowed roots
  are refused.
- Private directories are hardened to `0700`; private files are hardened to
  `0600`.
- Receipt guards reject prose-bearing fields, credentials, raw HTML, and raw
  reasoning fields.

One deterministic failure was preserved as evidence: the first reproducible
EPUB test found that EbookLib inserted a changing modification timestamp.
The implementation now supplies a fixed internal EPUB timestamp, and two
identical exports produce the same hash.

Visual inspection also rejected the first architecture PNG because its
renderer misread SVG font shorthand. The SVG now uses explicit font
properties, and the regenerated PNG is readable.

## Implementation-model observation

DeepSeek V4 Flash received only public Plan 002 material and source code after
the deterministic floor passed. Its candidate response stopped partway through
a validator at the output limit. That incomplete response was recorded as a
failed candidate, not retried silently.

Useful structural suggestions were applied through the normal implementation
and test path. Suggestions that would weaken the admitted contract, such as
falling back to a broad body selector or hard-coding a last-published
chapter, were rejected.

Private metadata receipt:
`.weaver/plan002-models/flash-implementation-20260729T203622-ce7709bc971f`

## Live observations

### Firecrawl onboarding

The requested Firecrawl onboarding instructions were followed. The installed
CLI was authenticated, its status check passed, and a public smoke scrape
succeeded. The supported environment command placed `FIRECRAWL_API_KEY` in
the ignored local `.env`; only the variable name is present in
`.env.example`.

### Initial inspection corrected planning assumptions

The live inspector found that `urls.md` contains 3,128 ordered fixed-domain
URLs with no gaps, duplicates, malformed entries, or out-of-order lines.

It also found two unexpected local anomalies besides the known 3047
placeholder. This was valuable: the tool challenged the planning assumption
instead of shaping its answer to it.

Early inspection exposed two implementation assumptions:

- URL entries are Markdown/HTML anchor lines, not bare URLs.
- Existing chapter folders and filenames below 1000 use zero padding.

Both were corrected with regression tests before mutation.

### Chapter 3047

The tool fetched, validated, and atomically replaced the 24-byte placeholder,
then moved the legacy `3001-3047` directory to `3001-3100`.

The first generated title duplicated the novel prefix because the live heading
already included it. Inspection classified that generated file as invalid.
The title normalizer was corrected and the chapter was replaced again through
the tool path. The final file is valid:

- chapter: 3047
- old placeholder hash:
  `40626ab478e017c681d019cff401138195184d84cc46dd1a3247375db403cd14`
- final hash:
  `563a9a5d99bb170ee43298e8e92cf42f261627ffb05ff3200fb89c60cb4a12c`
- final byte count: 7,857
- canonical path:
  `novels/shadow-slave/3001-3100/chapter-3047.txt`

No valid pre-existing chapter was overwritten.

### Backfill and provider behavior

The exact 3048–3128 range was previewed first. Live attempts then saved
chapters through 3127 using the new tools.

The first live bursts produced extraction failures, provider failures, and
HTTP 429 responses. These failures were kept in private metadata receipts.
A visible seven-second minimum interval removed the observed 429s; no hidden
retry policy was added.

Some fixed NovelFire requests returned a final URL on `novelphoenix.com`.
The strict final-URL check rejected them. Later explicit calls succeeded for
all but chapter 3128. Chapter 3128 repeatedly redirected and was never written.

### Existing chapter 2843

Inspection reports chapter 2843 as broken because its local title contains no
parseable visible chapter number. The current fixed NovelFire page has the
same structural problem. Fetching it therefore cannot prove that the page is
chapter 2843, so the valid local file is preserved and no replacement occurs.

This is a validation blocker, not evidence that the prose is wrong.

### Final corpus inspection

| Measure | Observation |
| --- | ---: |
| Known URLs | 3,128 |
| Chapter files | 3,127 |
| Valid chapters | 3,126 |
| Broken | 1: chapter 2843 |
| Missing | 1: chapter 3128 |
| Duplicated | 0 |
| Wrongly placed | 0 |
| Conflicts | 0 |
| Overly public | 0 |
| Symlinks | 0 |

Valid ranges are 1–2842 and 2844–3127. The corpus metadata hash is
`2e29b6e00d5d28cea40d5dbed921b14943f876a4ffef0212ee412876a0149d3e`.

The repeated default updater produced one action: it attempted only the known
invalid chapter 2843, stopped on `visible_chapter_mismatch`, and did not
refetch any of the 3,126 valid chapters. Because that blocker comes before the
published edge, the default updater could not reach a genuine 3129 404 probe.

### Packets and exports

The required packets for 1–3, 1499–1501, and 2998–3000 were built in exact
order with source hashes under ignored owner-only state.

Full TXT, Markdown, and EPUB exports correctly refused to build while chapters
2843 and 3128 remain invalid or missing. To exercise the live export path
without bypassing validation, editions through the contiguous valid chapter
2842 were built twice:

| Format | Bytes | SHA-256 |
| --- | ---: | --- |
| TXT | 19,802,790 | `c05acaa14add222c2c0402b17609388e9e77ffea6b9a026f6759c9aab9aa62a4` |
| Markdown | 19,811,332 | `68eabd44a2f95fb7b90aed2a5f08e38790b099eddf0531daaf660e493d5321a0` |
| EPUB | 10,179,804 | `9ab28b3237e0bb7d15a750f28755d29052360f1c95e46e44054542896ddc652d` |

The second hashes matched. EPUB inspection found 2,842 chapter documents,
2,842 table-of-contents entries, a navigation entry plus 2,842 chapters in
the spine, and readable first and last chapter documents.

## Failures that changed the candidate

The experiment did not hide these failures:

- the original URL parser misunderstood anchored URL lines;
- the original canonical-path rule misunderstood zero-padded legacy layout;
- a private preview receipt briefly included the placeholder marker as a
  title; the field was removed, the exact bad ignored receipt was deleted, and
  a clean preview was generated;
- the first repaired 3047 title duplicated the novel prefix;
- broad placeholder matching rejected a normal phrase inside a complete
  chapter; matching is now limited to exact placeholder forms;
- burst requests produced 429 responses;
- multiple live pages temporarily redirected to a different domain;
- the Flash candidate ended at its output limit;
- reproducible EPUB testing caught a variable timestamp.

Each led to either a tested correction or a narrow recorded blocker.

## Current interpretation

**Observation:** deterministic tools performed nearly all corpus grunt work,
protected valid files, produced private evidence, and surfaced live ambiguity
without asking an LLM to clean or judge prose.

**Observation:** strict safety has a real operational cost. One malformed
visible title and one cross-domain redirect prevent the corpus from satisfying
the complete-through-current acceptance rule.

**Hypothesis for a later owner-approved amendment:** trusted source evidence
could be strengthened without LLM cleaning by adding a separately admitted
rule for redirect provenance or chapter identity. That policy is not part of
the current candidate and must not be inferred automatically.

**Decision:** accept and close Plan 002. The deterministic library-management
capability is proven. Full chapter availability, chapter 2843 identity, chapter
3128 redirect trust, and the limits caused by them are deferred for a later
owner-approved visit.

## Initial independent review observations

Both V4 Pro reviewers received the same public candidate and no private corpus
data.

The privacy/architecture reviewer found no privacy leak but initially marked
four implementation blockers. Adjudication found that:

- OpenAI and tiktoken belong to the already-admitted Plan 001 model boundary,
  not an accidental Plan 002 network fallback;
- all agent-loop dependency files exist in the repository but two were omitted
  from that review packet;
- Python's no-argument `str.encode()` is UTF-8, not locale-dependent;
- the legacy-folder path is checked before and immediately before rename, and
  injected final-replace failure already proves the placeholder survives.

The explicit UTF-8 argument was accepted as a clarity improvement despite not
changing behavior.

The tests/evidence reviewer concluded that the public corpus implementation
has no code blocker and that the two real blockers are live-source acceptance
failures. It suggested one relevant coverage improvement: exercise the
production environment helper with a missing Firecrawl key. That test was
accepted. Its other findings concerned the previously admitted conversation
session, were informational, or contradicted the supplied code.

The one allowed repair pass therefore contains only:

- explicit UTF-8 encoding in the corpus hash;
- a no-network test proving the live environment helper fails safely when
  `FIRECRAWL_API_KEY` is absent.

After that pass, the complete deterministic floor passed with 73 tests. Both
reviewers rechecked the same frozen repaired candidate and reported no
remaining implementation, privacy, test, or evidence blocker. The tests
reviewer separately kept the honest live acceptance blocker.
