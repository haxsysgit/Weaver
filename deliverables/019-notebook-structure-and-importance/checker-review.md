# Checker review — what check_story_notebook.py does, misses, and gets wrong

Plan 019 slice 8. Audited 2026-08-16 against the live notebook
(reading to 3160, connections to 3160, 584 entity pages, overview/).

## 1. What it checks (11 concerns in one 1062-line script)

| concern | function(s) | kind |
|---|---|---|
| private permissions (700/600) | check_private_permissions | global |
| record authenticity (sha256 vs novel) | check_original_chapter | scoped |
| reader contract (roles/reconciliation/review) | check_reader_contract | scoped |
| record schema (kinds, evidence, links, corrections) | check_entries | scoped* |
| entity markers/aliases/links | collect_page_ids, check_entity_pages | global |
| chapter notes match records | check_notes | global |
| connections.jsonl graph | check_connections | global |
| progress file + chapter sequence | check_progress, check_sequence | global |
| copied novel prose | scan_for_source_prose | scoped* |
| private files tracked by git | check_git_exposure | global |
| ledger files present | inline | global |

*scoped = supposed to be bounded by --through but isn't, see below.

## 2. What is wrong with it

### 2.1 The --through range flag does not bound the work (the big one)

Measured: `--through 100` on the live notebook took **18.5s and still
scanned all 3160 chapters** (chapters=3160 in the output). The flag
only bounds the sha256 provenance check. Everything else iterates all
records, all notes, the whole connections file, all pages.

Profile (cProfile, 25.8s run, through=100):
- **13.2s (51%)**: one genexpr in `contains_source_prose` —
  `normalise_text(value)` runs on EVERY string in every record, for
  all 3160 records, even when the chapter's fragment set is empty
  (out-of-range chapters have empty fragments, so the `any()` is
  vacuous but the normalisation still burns CPU).
- **1.3s**: `check_connections` reading all 14.5k lines regardless of
  range.
- The rest: iterating 3160 records × 5341 statements for entries,
  notes, sequence, entity pages.

Consequence: "check a small change" costs the same as "check
everything", and the reading-run workflow's `--through NNNN` was
paying full price every batch.

### 2.2 Freshness is never checked — the exact bug the owner caught

A notebook can be **green (PASS, 0 problems) while silently stale**.
Proven case: connections.jsonl was stuck at max chapter 3148 while
reading/ was at 3160 for days; the checker PASSed the whole time. A
human (the owner) caught it, not the checker. The checker validates
*shape* (schema, links, hashes) but never *freshness* (is the graph
current with the reading records? do pages exist for linked targets?
are pages empty?).

### 2.3 Range noise: false problems outside the requested range

At through=100 the checker emitted ~35k problems, nearly all noise
from out-of-range chapters: "chapter 101 is outside requested range"
(3060x), "chapter location does not exist" (evidence in ch>100
checked against an empty source_line_counts cache), "progress range
does not match requested range". The signal-to-noise ratio is
~1:1000, which is why the reading runs' "checker PASS" habit formed
around --through matches and the checker never ran at full range.

### 2.4 CLI help lies ("1-100") while code allows 3200

`--through` help says "maximum chapter to check (1-100)"; the code
accepts 1-3200. Minor, but it signals the range story was never
thought through.

## 3. What the review found in the LIVE notebook (the checker was right)

Running the checker honestly (through=3160) surfaced three real bugs,
all from the Plan 019 backfill work, all caught by existing rules:

1. **reading/3151-3160.json are mode 664, not 600.** The backfill
   subagent wrote the 10 new records without hardening permissions;
   every other record in the shelf is 600. The checker flagged all
   10. Fix: chmod 600 (done in the module slice).
2. **connections.jsonl line 14114 is a blank line.** build_connections
   wrote an empty line between the old graph and the new 3149-3160
   rows. The checker's "invalid JSON" fired. Fix: build_connections
   should not emit blank lines (and the file was rewritten clean).
3. **419 connection rows cite `line_start: 1`.** The whole-chapter
   evidence convention is `{line_start: 3, line_end: <line_count>}`
   (line 1 is the chapter heading, never evidence). The backfill used
   `line_start: 1` on 419 rows across chapters 3149-3156. The checker
   correctly flags "line 1 is the chapter heading, not evidence".
   Fix: the backfill convention for whole-chapter evidence starts at
   line 3 (recorded; rows were corrected to line_start 3).

So: the checker's RULES are mostly right; the PROCESS around it
(build_connections output, backfill conventions, perms discipline)
was sloppy. The missing piece is range honesty + freshness.

## 4. What the module split must change (the spec slice 9 follows)

1. **Orchestrator** (`run_checks`) with two pass classes:
   - global passes: permissions, pages, connections graph, git
     exposure, sequence, progress — metadata only, always run, fast;
   - scoped passes: sha256 provenance, reader contract, entries,
     notes, prose scan — bounded by `--through`.
2. **Perf fixes**: read each novel file once (shared source_texts
   cache, already exists — keep); hash only files in range; skip
   normalise_text when the fragment set is empty (the 13.2s hot
   spot); bound the prose scan loop by the range.
3. **Freshness checks** (new, the 2.2 gap):
   - connections max chapter == reading max chapter (staleness);
   - empty-page detection (a page with fewer than N statement lines);
   - linked target has a page (connections target with no page).
4. **CLI**: `weaver notebook check --root ... --through N`; the old
   scripts/ path becomes a shim so the reading-run workflow and the
   39 subprocess tests keep working, then tests migrate to the API.
