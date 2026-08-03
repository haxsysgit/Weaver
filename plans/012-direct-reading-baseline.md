# Plan 012: Build Weaver's first Shadow Slave knowledge

> **Executor instructions:** Weaver's code is unchanged in this plan. This
> plan reads Shadow Slave chapters 1 to 100 and builds Weaver's first
> trusted story notebook, all private under `.weaver/knowledge/shadow-slave/`.
> The novel files are the final source of truth and are never modified.
> No story knowledge ever enters committed files.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff, pip check); reading
  uses the harness's native tools.
- **State:** Plan wording locked 2026-08-03 (owner-confirmed revision);
  reading starts after the owner picks the three reader jobs.
- **Priority:** P2
- **Effort:** L (100 chapters, three independent reads each)
- **Risk:** Medium (private source material; long careful build)
- **Depends on:** Plan 011 accepted 2026-08-03
- **Category:** Private story knowledge build
- **Learning gate:** `deliverables/012-direct-reading-baseline/learning.md`
- **Final decision:** pending

## Summary

Plan 012 reads Shadow Slave chapters 1 to 100 and builds Weaver's first
trusted story notebook.

Each chapter gets three independent reads:

- One lead reader
- One plot and cause checker
- One character and world checker

The finished work includes readable notes for us and connection files that
future Weaver code can use. Every saved statement must point back to the
chapter that supports it. If the novel does not support something, the
notebook says unknown.

## What gets saved

Everything stays private under `.weaver/knowledge/shadow-slave/`.

- `chapters/0001.md`: readable notes for each chapter.
- `reading/0001.json`: the same knowledge in a fixed format future Weaver
  code can read.
- `people/`, `places/`, `powers/`, `groups/`, and `items/`: larger pages
  built from the finished chapter notes.
- `relationships.md`: how characters and groups relate, including changes
  over time.
- `timeline.md`: important events in story order.
- `mysteries.md`: open questions, clues, answers, and the chapters where
  they changed.
- `interpretations.md`: supported readings of motives, themes, and unclear
  events.
- `connections.jsonl`: links between people, places, powers, events, items,
  and chapters.
- `reading-progress.json`: the last fully checked chapter and whether
  chapters 1 to 100 are complete.

Every saved entry contains:

- A stable ID
- What kind of knowledge it is
- The statement being saved
- Its supporting chapter numbers and exact location inside those chapters
- Links to connected people, places, events, powers, groups, or items
- When the knowledge first became known
- Any later chapter that changed or corrected it

Knowledge is clearly labelled:

- `confirmed_fact`: the novel directly shows or confirms it.
- `character_belief`: a character believes or claims it, but they may be
  wrong.
- `interpretation`: a supported explanation from the readers.
- `theory`: a possible answer that the novel has not proved.
- `conflict`: the available chapters disagree or remain unclear.

Short exact lines from the novel are allowed inside private readable chapter
notes when they help prove a point. The JSON and connection files store
chapter locations only, with no copied novel prose.

The chapter JSON files are the master copy. Larger pages and the connection
file are rebuilt from them so the different versions cannot slowly disagree.

## Reading flow

1. Replace the current Plan 012 wording with this plain version and record
   the owner's locked choices.
2. Check current research on how agents track fictional worlds, character
   knowledge, changing facts, causes, relationships, and mysteries. Save
   only the reading method publicly. No Shadow Slave knowledge enters
   committed files.
3. Build `scripts/check_story_notebook.py` using synthetic story data
   first. The checker reports counts and problems without printing private
   story text.
4. Move the old chapter 1 attempt into a separate private `old-attempts`
   folder. Nobody may read it during the new chapter 1 run.
5. Read chapter 1 again from zero:
   - All three readers receive the current chapter and confirmed knowledge
     from earlier chapters.
   - For chapter 1, there is no earlier story knowledge.
   - They read independently and do not see each other's findings.
   - The lead compares the three readings.
   - They discuss only disagreements, missing details, and uncertain
     interpretations.
   - The lead reopens the relevant part of the novel before deciding what
     gets saved.
   - Unsupported claims are removed or marked unknown.
6. Continue chapters 2 to 100 in groups of ten:
   - Both checking readers receive a compact file containing all confirmed
     earlier knowledge.
   - Later chapter knowledge never appears in an earlier chapter's reading.
   - A chapter is marked finished only after its readable note, JSON record,
     links, and chapter proof pass the notebook checker.
   - Interrupted work stays separate and does not count as a finished
     chapter.
   - Restart from the last fully checked chapter.
   - Completed chapters are never silently replaced.
7. After every ten chapters, rebuild the people, places, powers, groups,
   items, relationship, timeline, mystery, interpretation, and connection
   files.
8. A separate reviewer checks every saved statement against its named
   chapter location. The review happens in ten-chapter groups so nothing is
   skipped.

Later revelations add corrections and new knowledge. They do not erase what
characters believed or what readers could know at an earlier point in the
story.

## Reader-positioned knowledge (owner decision, 2026-08-03)

Weaver must only talk according to where the reader is in the story. The
notebook supports this by keeping "when this knowledge became known" on
every entry and never erasing earlier knowledge when later chapters reveal
more. A future Weaver feature will store the user's current chapter and
preferences (best character, best scene, and similar), then read the
notebook with a cutoff at that chapter so Weaver never spoils what the
reader has not reached. That user-state storage is a later Weaver
application feature, out of scope here.

## Checks and completion

The notebook checker must reject:

- A statement with no supporting chapter
- A chapter location that does not exist
- Duplicate IDs
- Broken links between saved items
- Missing chapters or chapters saved out of order
- A changed original chapter file
- Copied novel prose inside JSON or connection files
- Private files with unsafe permissions
- Private knowledge or novel text entering Git

Run:

- `uv run pytest -q tests/test_story_notebook_checker.py`
- `uv run ruff check scripts/check_story_notebook.py tests/test_story_notebook_checker.py`
- `uv run python scripts/check_story_notebook.py --root .weaver/knowledge/shadow-slave --through 100`
- `uv run pytest -q`
- `uv pip check`
- Staged credential, private-text, and novel-text scans

Plan 012 is ready for the final owner decision when:

- Chapters 1 to 100 have readable notes and matching JSON records.
- Every named character, place, group, power, item, important event,
  relationship, mystery, and meaningful change has been recorded.
- Every saved statement has been checked against the novel.
- The connection file and larger notebook pages match the chapter records.
- The separate reviewer has checked all saved knowledge.
- No original chapter has changed.
- No private story knowledge has entered Git.
- There are no open notebook checker failures.

## Locked choices

- Plan 012 ends with the private story notebook and connection file.
- Weaver application code is unchanged.
- Full-novel reading, chunking, embeddings, and search belong to later
  plans.
- No diagrams are created or updated.
- The plan names reader jobs only. The owner can choose which available
  agents fill those jobs when the reading starts.
- All three readers work from the novel, with balanced attention to facts,
  characters, motives, relationships, causes, mysteries, and themes.
- Story knowledge remains private and the original chapters remain the
  final source of truth.
- The old chapter 1 attempt is quarantined into a private `old-attempts`
  folder and chapter 1 is re-read from zero under the final contract.
- Short exact novel lines are allowed only inside private readable chapter
  notes; JSON and connection files store chapter locations only.

## Deliverables

- `deliverables/012-direct-reading-baseline/`:
  `learning.md`, `results.md`, `rubric.md`, `review-ledger.md`,
  `decision.md`, `README.md`, `fictional-understanding-research.md`
  (sanitized, cited, no story knowledge)
- `scripts/check_story_notebook.py` + `tests/test_story_notebook_checker.py`
  (development-only, synthetic data)
- `plans/README.md` update

## STOP conditions

Stop and report if:

- a reader subagent writes files or touches anything beyond its assigned
  chapter;
- readers are not independent (they see each other's current-chapter
  findings);
- a reader's analysis contradicts the source (the lead reopens the novel
  chapter to adjudicate);
- a novel file is modified or lost (recovery via the private backup or the
  admitted Plan 002 library tools; git tracks zero files under `novels/`);
- the notebook checker finds a failure that is not fixed;
- story knowledge risks entering a commit.

## Deferred work

- Full-novel reading, chunking, embeddings, search, and retrieval.
- Weaver application features: user current-chapter state, preferences
  (best character, best scene), spoiler-boundary conversation behavior.
- A GPT-5.6 Terra/Codex reader joining the fleet.
