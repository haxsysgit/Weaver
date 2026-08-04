# Acceptance Rubric: Build Weaver's first Shadow Slave knowledge

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed the plain-language plan and locked choices | Done | `learning.md`, `decision.md`, `plans/012` 2026-08-03 |
| Notebook checker built on synthetic data first | Done | `scripts/check_story_notebook.py`, `tests/test_story_notebook_checker.py` (35 passed) |
| Checker rejects unsupported statements, bad locations, duplicate IDs, broken links, out-of-order or missing chapters, changed chapter files, copied prose in JSON/connections, unsafe perms, private text in Git | Done | checker tests |
| Old chapter 1 attempt quarantined to private `old-attempts/` | Done (deleted with the codex notebook on 2026-08-04) | the old-format pilot was quarantined, then removed when the codex notebook was deleted; pi run re-read chapter 1 from zero |
| Chapter 1 re-read from zero with three independent readers | Done (pi run) | private notebook records; checker-verified |
| Chapters 2-100 read in groups of ten; later knowledge never leaks backwards | Done (pi run, through 1000) | private notebook and final reviewer ledger |
| Every entry: stable ID, kind, statement, supporting chapter + location, links, first-known chapter, later corrections | Done (pi run) | 2422 JSON statements; checker pass |
| Knowledge labelled confirmed_fact / character_belief / interpretation / theory / conflict | Done | schema validation; confirmed facts, character beliefs, and interpretations used |
| Chapter JSON is the master; pages and connections rebuilt from it | Done | rebuild script; 7334 connections |
| Readable notes and matching JSON for every chapter 1-100 | Done (pi run, through 1000) | 1000 `chapters/` notes and 1000 `reading/` records |
| Reader-positioned knowledge kept ("when this became known", no erasure) | Done | `first_known_chapter` and `later_corrections` on every statement |
| Independent reviewer checks every statement against its named chapter, in ten-chapter groups | Done | `review-ledger.md`; fleet verification at the 200/300/400/500/600/700/800/900/1000 milestones |
| No novel file modified | Passed so far | `git ls-files novels/` = 0; results.md |
| No private story knowledge committed | Passed so far | commit audits |
| Owner records final decision | Done | `decision.md` (Accepted 2026-08-04) |
