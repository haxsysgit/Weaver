# Learning Note: Build Weaver's first Shadow Slave knowledge

## Gate status

**Confirmed by owner 2026-08-03.** The owner reviewed the plain-language
revision of Plan 012 and locked the choices below. Reading starts after the
owner names the agents for the three reader jobs.

## What this plan is

Read Shadow Slave chapters 1 to 100 and build a private story notebook:
readable chapter notes, fixed-format JSON records, larger pages (people,
places, powers, groups, items), and a connection file. Every saved statement
points back to the chapter and exact location that supports it. Weaver's
code is unchanged. The novel files stay the final source of truth.

## Owner direction (2026-08-03, locked)

1. **Reader-positioned knowledge.** Weaver must only talk according to where
   the reader is in the story. The notebook keeps "when this became known"
   on every entry and never erases earlier knowledge when later chapters
   reveal more. Storing the user's current chapter and preferences (best
   character, best scene, and similar) is a later Weaver app feature, not
   this plan.
2. **Three independent reads per chapter.** Lead reader, plot and cause
   checker, character and world checker. They do not see each other's
   findings; the lead compares and reopens the novel before saving.
3. **Pure reading.** No chunking, embeddings, vector search, or RAG in this
   plan. Later plans build retrieval on top of the notebook.
4. **Chapters 1 to 100, from the start** (`novels/shadow-slave/0001-0100/`,
   100 files, verified).
5. **The old chapter 1 attempt is quarantined.** It moves to a private
   `old-attempts` folder and nobody reads it during the new chapter 1 run.
   Chapter 1 is re-read from zero under the final contract.
6. **Excerpts:** short exact novel lines are allowed only inside private
   readable chapter notes when they help prove a point. JSON and connection
   files store chapter locations only, never copied prose.
7. **Knowledge labels:** `confirmed_fact`, `character_belief`,
   `interpretation`, `theory`, `conflict`.
8. **Master copy:** the chapter JSON files are the master; larger pages and
   the connection file are rebuilt from them.

## Binding rules

1. **Fresh-context readers.** Each reader gets a clean context with only
   its job, the current chapter, and the confirmed earlier knowledge. No
   session inheritance, no browsing the repo, no touching the notebook.
2. **Read exactly the assigned chapter.** The only novel file a reader
   opens is its assigned chapter. No other files, ever. Readers return
   analysis text only and never write files.
3. **The coordinator is the sole writer** of the notebook.
4. **Later knowledge never leaks backwards.** A chapter 40 reading never
   uses knowledge from chapter 41. The confirmed-knowledge digest is the
   only bridge.

## Confirmation record

- Owner choice: plain-language plan and locked choices confirmed
- Date: 2026-08-03
- Corrections or added constraints: reader-positioned knowledge (owner);
  quarantined old attempt; excerpt policy limited to private chapter notes;
  no diagrams created or updated
