# Acceptance Rubric: Build Weaver's first Shadow Slave knowledge

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed the plain-language plan and locked choices | Done | `learning.md`, `decision.md`, `plans/012` 2026-08-03 |
| Notebook checker built on synthetic data first | Done | `scripts/check_story_notebook.py`, `tests/test_story_notebook_checker.py` (29 passed) |
| Checker rejects unsupported statements, bad locations, duplicate IDs, broken links, out-of-order or missing chapters, changed chapter files, copied prose in JSON/connections, unsafe perms, private text in Git | Done | checker tests |
| Old chapter 1 attempt quarantined to private `old-attempts/` | Done | `.weaver/knowledge/shadow-slave/old-attempts/20260803-pilot/`, results.md |
| Chapter 1 re-read from zero with three independent readers | Pending | notebook |
| Chapters 2-100 read in groups of ten; later knowledge never leaks backwards | Pending | notebook, digest per batch |
| Every entry: stable ID, kind, statement, supporting chapter + location, links, first-known chapter, later corrections | Pending | notebook records |
| Knowledge labelled confirmed_fact / character_belief / interpretation / theory / conflict | Pending | notebook records |
| Chapter JSON is the master; pages and connections rebuilt from it | Pending | rebuild run |
| Readable notes and matching JSON for every chapter 1-100 | Pending | `chapters/`, `reading/` |
| Reader-positioned knowledge kept ("when this became known", no erasure) | Pending | notebook records |
| Independent reviewer checks every statement against its named chapter, in ten-chapter groups | Pending | `review-ledger.md` |
| No novel file modified | Passed so far | `git ls-files novels/` = 0; results.md |
| No private story knowledge committed | Passed so far | commit audits |
| Owner records final decision | Pending | `decision.md` |
