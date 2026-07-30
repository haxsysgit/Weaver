# Learning Note: Trusted Shadow Slave Library

## Gate status

**Confirmed by the owner on 2026-07-29.**

This note is the Learn → Analyze → Confirm part of Plan 002. The code,
dependency changes, corpus inspection, chapter access, and live Firecrawl calls
were admitted only after the owner confirmed the “What I understood” section.

No file under `novels/` was opened or changed while preparing this note.

## Owner context added at confirmation

Plan 002 is not just a downloader test. It is testing how far Weaver can go by
combining an LLM-driven custom agent with deterministic pipelines that do most
of the repetitive work.

The split is:

- the LLM understands the request and chooses an allowed tool;
- the deterministic tool validates inputs, performs the exact work, protects
  private state, and returns inspectable metadata;
- Weaver owns the tools and the system around them;
- LangGraph may later power the conversation loop, but it is not the whole
  system and does not own corpus rules.

Novel inspection and updates are the first domain tools. Web search and other
fresh-information tools can follow the same pattern in later admitted slices.

## Sources

- Firecrawl, [Python SDK source of truth](https://docs.firecrawl.dev/agent-source-of-truth/python)
- Beautiful Soup, [official documentation](https://beautiful-soup-4.readthedocs.io/en/latest/)
- lxml, [official documentation](https://lxml.de/)
- EbookLib, [official tutorial](https://docs.sourcefabric.org/projects/ebooklib/en/latest/tutorial.html)
- Python, [`os.replace` documentation](https://docs.python.org/3/library/os.html#os.replace)

The admitted Plan 002 is the source for the novel-specific URL shape, selectors,
known corpus state, privacy rules, test cases, and live-use sequence. Those
planning observations will be checked during the admitted live stage rather
than treated as permanently true.

## Tiny model of the system

Think of this toolset as a private librarian.

The librarian has a fixed catalogue for one book series. It can check which
volumes are present, fetch an exact missing volume, replace a proven-empty
placeholder, assemble a temporary reading bundle, or produce an edition. It
cannot wander to another website, choose a different novel, rewrite a valid
chapter, or decide that a strange page is “probably fine.”

That narrowness is the safety feature.

```text
Fixed Shadow Slave spec
        ↓
exact chapter URL → Firecrawl → raw HTML in memory
                                ↓
                       deterministic cleaner
                                ↓
                          strict validation
                                ↓
                  preview OR safe private write
                                ↓
                  manifest + metadata receipt
```

Chapter prose flows only into ignored private files. Public evidence sees
metadata such as chapter numbers, hashes, sizes, statuses, and error
categories.

## The five tools in normal words

### Inspect

`inspect_novel_corpus` is a stock check. It reports what is valid, missing,
broken, duplicated, in the wrong folder, or readable by more people than the
owner. It returns counts, ranges, paths, and hashes. It does not return chapter
text.

### Fetch

`fetch_novel_chapters` means “get exactly this chapter or this closed range.”
It does not hunt forward for bonus chapters. Preview is the default, so the
first call explains what would happen without changing the corpus.

### Update

`update_novel_corpus` repairs known holes and proven-broken files. An optional
upper chapter creates a hard stop. Without that upper bound, the updater walks
forward one predictable URL at a time and stops at the first real 404.

This is different from guessing. A 404 is evidence that the consecutive
published run currently ends there. It is never saved as a chapter.

### Build a packet

`build_novel_packet` makes a small ordered Markdown bundle for a later reading
experiment. Its manifest records the exact source hashes, so a later result can
be tied to the exact chapter files used.

### Export

`export_novel` makes a private TXT, Markdown, or EPUB edition in chapter order.
TXT and Markdown are simple concatenations with clear chapter boundaries.
EbookLib handles the EPUB metadata, chapter documents, table of contents, and
reading spine.

## Why there is one fixed novel specification

Letting a tool accept any URL and any path turns a corpus helper into a general
web downloader and file writer. That is much harder to reason about and much
easier to misuse.

`ShadowSlaveSpec` fixes the allowed domain, slug, title, language, URL template,
chapter selector, and directory shape. Inputs can then say “Shadow Slave,
chapters 3047–3128,” but cannot say “download this unrelated URL into this
arbitrary folder.”

The practical security rule is simple: validate identifiers and chapter
numbers, then derive every URL and path inside trusted code.

## Why Firecrawl is an adapter, not a fallback maze

The planning evidence says normal HTTP requests hit Cloudflare while
Firecrawl can retrieve the page. Plan 002 therefore has one explicit live
source path: Firecrawl `/scrape` for a known chapter URL.

There is no silent fallback to direct HTTP, browser automation, another site,
or another model. If Firecrawl times out, rejects the credential, returns a
provider error, or produces unusable content, the operation fails with a clear
category and preserves the corpus.

Zero SDK retries matters for evidence. One requested fetch should produce one
inspectable attempt rather than several hidden attempts with uncertain cost or
behavior. A later plan may add a visible retry policy if real evidence shows it
is needed.

## Deterministic cleaning means no model edits

The cleaner uses a fixed CSS selector to find the chapter body. It removes
known page furniture such as scripts, controls, media, ads, navigation, and
blocker messages. It then reads the remaining paragraphs in document order.

Normalization fixes storage noise:

- line endings become consistent;
- non-breaking spaces become ordinary spaces;
- Unicode and UTF-8 handling become consistent;
- trailing spaces and repeated blank lines disappear;
- every file ends cleanly.

It must not paraphrase, correct grammar, modernize punctuation, summarize, or
reorder paragraphs. The cleaner is closer to taking packaging off a product
than rewriting what is inside.

This choice makes the same HTML produce the same chapter bytes. That gives
stable hashes and useful tests.

## Validation happens before trust

A page returning “success” does not prove it is the requested chapter. The
response could be a login page, a blocker, a tiny placeholder, the wrong
chapter, or a malformed page with no useful paragraphs.

Before writing, the tool checks:

- HTTP status and final URL;
- visible chapter number and title;
- minimum body size and paragraph count;
- known placeholder phrases;
- unwanted site or blocker markers.

The exact thresholds will be written as named rules and tested against
synthetic examples. They should reject obvious failures without pretending
that byte count alone proves literary completeness.

## The valid-file rule

Once a local chapter passes corpus validation, Plan 002 treats it as immutable.
If a later webpage differs, the tool reports a conflict and preserves the
local file.

This avoids a dangerous update rule: “the web is newer, so overwrite local
data.” A live page can change, break, or serve injected content. A conflict
needs inspection, not automatic destruction.

There is one narrow exception proposed for Plan 002: a file already proven
invalid, such as the chapter 3047 placeholder, may be atomically replaced by a
new file that has already passed every check.

That exception requires an update to `AGENTS.md` after this learning gate. The
new rule will still forbid rewriting valid chapters and will allow only:

1. appending a validated missing chapter; and
2. atomically replacing a proven-invalid placeholder with a validated
   replacement.

## How the 3047 repair avoids data loss

The unsafe sequence is: delete the placeholder, fetch a replacement, hope the
write succeeds.

The safe sequence is:

1. hash and measure the existing invalid file;
2. fetch the requested page;
3. clean and validate it in memory;
4. write a complete temporary file in the destination directory;
5. flush it and set private permissions;
6. atomically replace the invalid destination;
7. record old/new hashes and byte counts without recording either text.

If fetch, validation, temporary writing, or replacement fails, the existing
file remains. Tests will inject a failure at each stage to prove that promise.

## Why hashes and manifests matter

A filename says what a file claims to be. A hash says which exact bytes were
used.

The private manifest ties together:

- chapter number and visible title;
- source URL;
- canonical relative path;
- content hash and byte count;
- validation status.

Packets and exports can then record their source hashes. If a future reading
experiment behaves differently, we can tell whether the inputs changed rather
than relying on “I think these were the same chapters.”

`urls.md` remains the human-readable source list. It is updated only after a
chapter is saved successfully. The manifest is the machine-readable view. The
stale scrape-progress file remains historical evidence and is not reused as
current state.

## Why preview and idempotency are separate promises

Preview means “show the proposed action without changing state.”

Idempotent means “if the successful action is requested again, the end state
stays the same.” For example, a second update should validate/inspect the
existing file as needed and report a skip. It should not download a duplicate,
append the URL twice, or rewrite an identical valid chapter.

Both matter. Preview protects the first run; idempotency protects every later
run.

## Private packets and exports

Packets and complete editions contain private prose, so they live only under
ignored owner-only Weaver state. Their directories use mode `700` and files
use mode `600`.

The public repo may contain the code that builds them and synthetic tests that
prove ordering. It must never contain the generated packet, edition, chapter
text, raw HTML, credential, or private run receipt.

Tool responses follow the same boundary. Returning an entire chapter in JSON
would leak prose into agent transcripts, so responses return metadata and
private output paths instead.

## Why fake-source tests come first

The risky parts of this slice are mostly deterministic:

- turning a chapter number into an allowed URL and path;
- selecting exact ranges;
- cleaning a known HTML shape;
- rejecting suspicious content;
- preserving files across failures;
- ordering packets and exports;
- setting permissions;
- refusing symlinks and path traversal;
- keeping receipts free of prose and credentials.

Synthetic HTML and a fake chapter source can test those rules quickly without
network cost or private source access. Live Firecrawl use happens only after
that floor passes. Live use then answers the smaller question: does the tested
adapter work against the real site and real corpus?

## Observations, hypotheses, and decisions

### Planning observations

These came from the supplied plan and still need live rechecking:

- the URL list was contiguous through chapter 3128;
- local files reached 3047;
- chapter 3047 was a broken placeholder;
- chapter 3129 returned 404 at planning time;
- Firecrawl worked where normal HTTP received Cloudflare 403.

### Hypothesis

A deterministic, metadata-first toolset can safely repair and maintain this
one private corpus without LLM cleaning or a whole-system orchestration
framework. More broadly, this tests whether Weaver's LLM can delegate repetitive
work to narrow tools while the deterministic layer keeps the result safe and
reproducible.

### Accepted slice constraints

The admitted plan fixes the experiment boundary:

- Shadow Slave only;
- fixed known URLs and derived paths only;
- Firecrawl rather than bypass attempts;
- preview by default for fetch and update;
- valid chapters remain immutable;
- private source and generated output stay ignored and owner-only;
- tests before live use;
- no reading-quality, retrieval, memory, or framework decision.

### Decisions still open

The evidence has not yet shown:

- whether the proposed validators accept all real chapters without accepting
  blocker or placeholder pages;
- whether the real folder repair and full backfill succeed safely;
- what the first unpublished chapter is during live use;
- whether complete exports agree with the manifest;
- whether repeated live updates make zero duplicate changes;
- whether both independent reviewers find the frozen candidate blocker-free;
- whether the owner accepts the finished experiment.

## Tradeoffs I see

| Choice | What it buys us | What it costs |
| --- | --- | --- |
| One fixed novel spec | Small attack surface and predictable behavior | A new novel needs a new reviewed spec |
| Deterministic cleaning | Reproducible bytes and no model invention | Site markup changes require explicit maintenance |
| No retries | Honest one-attempt evidence | Temporary failures are more visible and may need a later manual rerun |
| Immutable valid files | Protects trusted local evidence | Web changes become reported conflicts instead of automatic updates |
| Strict validation | Blocks obvious junk and wrong pages | Thresholds need careful tests to avoid false rejection |
| Metadata-only responses | Keeps prose out of agent transcripts | Humans must open private outputs locally when they need content |
| Fixed 100-chapter folders | Stable paths and predictable ordering | The existing last folder needs one controlled rename |

## What this plan can prove

If accepted after implementation and live use, Plan 002 can prove that:

- the local Shadow Slave collection is contiguous and structurally valid
  through the currently published chapter;
- one known broken placeholder was repaired without deleting first;
- missing chapters were fetched in exact order;
- valid chapters were not overwritten or duplicated;
- URL list, manifest, paths, hashes, permissions, packets, and exports agree;
- a repeated update is safe;
- public evidence and receipts do not leak prose or credentials.

## What it cannot prove

Plan 002 cannot prove that Weaver:

- understands a chapter, character, event, theme, or timeline;
- chooses useful reading chunks;
- retrieves the best evidence;
- builds reliable compiled memory;
- makes good literary judgments;
- needs an agent framework.

Those questions remain separate so a corpus failure cannot be confused with a
reading-quality failure.

## What I understood

Please correct anything here before confirming:

1. Plan 002 is a private-library maintenance slice for Shadow Slave only. It
   is not a reader, RAG system, wiki, or whole agent-runtime experiment, but it
   does test the tool pattern the custom Weaver agent will use.
2. The five typed async tools expose validated chapter-level actions and
   metadata-only results. They do not accept arbitrary URLs or paths.
3. Firecrawl `/scrape` is the one explicit live source adapter because the
   planned direct-request path hit Cloudflare. There is no bypass or silent
   fallback.
4. Cleaning is deterministic and must preserve the source words,
   punctuation, and paragraph order. No LLM cleans or repairs prose.
5. A valid chapter is immutable. A webpage conflict is reported and preserved,
   not automatically “fixed.”
6. Plan 002 proposes one narrow contract change: tools may append a validated
   missing chapter or atomically replace a proven-invalid placeholder after
   the complete replacement passes validation.
7. Preview is the safe default, and every mutating action must be idempotent.
8. Chapter 3047 must survive every failed repair attempt. It is replaced only
   after a valid temporary replacement exists, with old/new metadata recorded
   but no prose.
9. URL list, private manifest, chapter files, permissions, packets, and
   exports must agree by chapter number and hash.
10. Deterministic fake-source tests come before any corpus access or live
    Firecrawl call.
11. After tests pass, live work follows the exact seven-step sequence in the
    plan and stops default updating at the first genuine 404.
12. Passing code and live checks are still not acceptance. Two independent Pro
    reviews and the owner's final recorded decision remain required.

Owner confirmation: **CONFIRMED 2026-07-29**

Owner clarification: the wider goal is an LLM-driven custom Weaver agent that
delegates grunt work to deterministic tools. LangGraph may later provide only
the conversation loop, not the corpus pipeline or whole-system architecture.
