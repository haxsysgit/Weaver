# Plan 015: Weaver the agent (context system + agentic parts)

> Re-scoped by the owner 2026-08-07: Plan 15 is no longer the 1-1000
> reader capability conversations. It is the context-management system and
> the agentic sharpening that make weaver a full agentic product. The
> three founding Reader Trials in AGENTS.md stay the finished-product bar
> and remain a separate later plan.

## Status

- State: Admitted 2026-08-07 (owner re-scope); implementing 2026-08-08
- Priority P2, Effort L, Risk Medium
- Depends on: Plan 014 accepted and closed (done 2026-08-07)

## Locked design (owner-approved 2026-08-08)

### The one rule

The reader ceiling is dead. Weaver holds the whole novel: every search and
tool runs over all 3127 chapters. Spoiler care happens only in answer
framing, driven by the user's position. Never reintroduce a retrieval- or
tool-level position filter.

### Spoiler map (data)

- Statement labels for ch 1-1000: `safe_lore` / `reveal` / `twist` /
  `death` / `arc_payoff` per notebook statement, alongside
  `first_known_chapter`. Stored as `<notebook>/spoiler-labels.json`,
  loaded by the judge, absent-tolerant.
- Volume boundaries for everything (verified from the novel 2026-08-04):
  Vol 1 ends ch95, Vol 2 350, Vol 3 600, Vol 4 750, Vol 5 1060, Vol 6 1230,
  Vol 7 1590, Vol 8 1840, Vol 9 2260, Vol 10 2720, Vol 11 3000,
  Vol 12 3001+. This is the coarse safety net, including all
  beyond-notebook coverage.
- The label pass (LLM classification over existing statements, owner
  review, spot-checks via evidence lines only) is a later slice. The judge
  works on volume rules alone from slice 1.

### State (user preferences, never tool arguments)

- Stored per user: current chapter N, spoiler mode (protect / no
  spoilers), flavor prefs (best character, best scene, fun stuff) for
  later plans.
- The knob: toggled by the user in the UI, or "spoil me" for one question.
- Tools never see position or mode. No filters, no validation, nothing.

### The flow (what happens on send)

1. **Open reading loop.** Every normal model call keeps the registered
   reading tools. The model chooses when to search, open another passage,
   or stop. The tier budgets remain ceilings of 50 / 70 / 90 tool steps.
2. **Answer candidate.** A plain response with no structured tool call is
   a candidate. It is never published automatically. The server rejects
   empty replies, written-out tool calls, placeholders, and narration of
   work the model still plans to do. Rejected text stays ephemeral, the
   model receives one corrective note, and the loop continues with tools.
   Two rejected candidates are corrected; the third fails honestly.
3. **Zero-evidence check.** When a candidate arrives before any tool call,
   the server asks once for evidence or an honest no-coverage answer. If
   the next candidate also uses zero tools, it can publish. This is a
   bounded process check, not a lore classifier.
4. **Final reading phase.** After a candidate passes validation, machinery
   builds the packet from opened passages, wider windows, notebook
   statements, story beats, spoiler framing, and the reader position. The
   bounded recent conversation plus the candidate and packet go through
   one heavy toolless call. Awakened and ascended use high reasoning;
   transcendent uses max. The call gets 16384 output tokens.
5. **Fail-soft publish.** A valid final output replaces the candidate. A
   final slip, empty reply, refusal, or provider failure publishes the
   validated candidate instead. When the packet builder returns no
   evidence, the candidate publishes without a final call. Packets,
   candidates, rejects, correction notes, and raw reasoning never enter
   the conversation store.
6. **Real ceiling.** Once the tool budget is spent, Weaver makes the one
   existing forced toolless call and answers from gathered evidence or
   reports that the library does not cover the question. A slip there is
   `LIMIT_REACHED`, and there is no final reading phase afterward.

There is no `submit_answer` tool, finish tool, or `tool_choice`. Readiness
is signaled by a plain response, the same way the other agent loops work.

### Judge outcomes

- `full`: citations at or before position, `safe_lore` labeled, or
  no-spoiler mode on.
- `guarded`: beyond-position material that is not a heavy beat. Answer
  but protect the beats; close with "that's past your chapter, say the
  word for the full spoil."
- `ask_first`: heavy beats (`reveal` / `twist` / `death` / `arc_payoff`)
  beyond position when the question does not target the future. Warn and
  ask. One question, not a wall.
- Position is soft, not law: a ch1250 reader asking about ch2648 material
  gets guarded or full by question intent and knob, never blocked.

### Skills (deferred)

Skills are packaged track record ("we did this kind of question before,
here are the steps, here is the answer the user liked"). Weaver has no
judged answers yet, so the packs would be fiction. Deferred until after
the live trial produces the first real record; the router (one cheap
classification call) returns with them, and it never assigned budgets.

## Slices

1. Spoiler map data + judge gate (volumes first; labels file scaffold and
   loader) — DONE 2026-08-08 (9924716)
2. Preferences store + web UI knob (chapter field + spoiler toggle)
   — DONE 2026-08-08 (3cfcf1e)
3. Open reading loop (tools stay available until a validated candidate,
   followed by one fail-soft final reading phase)
   - DONE 2026-08-10 (aeb977a original packet slice, b8bc7d0 open-loop repair)
4. Label pass over the 1-1000 statements — DONE 2026-08-08 (7f17f9d + this slice); labels
   private at `.weaver/knowledge/shadow-slave/spoiler-labels.json` (33 statements) plus the
   semantic beat map `spoiler-beats.json` (32 story beats with chapter ranges, labels and
   plain summaries); flagger + validator in `scripts/label_story_statements.py`; the judge
   inherits a beat's label for any citation whose chapter falls inside its range (an explicit
   statement label overrides beats); the packet carries beat titles as context; owner review
   of both files pending
5. Nightmare Spell surface (UI sharpening) — DONE 2026-08-08 (this slice);
   canon research done (`deliverables/015-reader-trials-1-1000/spell-surface-design.md`):
   status as shimmering runes in the air (ch2), Memories materializing from golden
   sparks (ch81), bracketed kill announcements (ch4), the Spell's whispering voice.
   Builds: new-weave no-op on unused chat; sidebar sections with foldable chat
   groups + delete; settings/profile moved into the sidebar; LLM thread naming
   (one flash call, stored); passage tap-to-view via an ephemeral read-only
   endpoint (never persisted, consistent with the durable split); selection
   quote-and-ask; tier mode selector (awakened/ascended/transcendent) wired to
   budget + reasoning; Spell-themed tokens, send coalescing animation, tool
   activity as bracketed Spell announcements. Verified: live proof green
   (turn, rail, mobile, PWA), 147 backend + 16 vitest green.
6. Live trial (owner go required)
7. Verify pass — only if the live trial shows the synthesis call failing
   (owner-directed ordering 2026-08-08)
8. Skills + router — deferred until after the live trial

Compaction (labeled context, living story-state note, graph-anchored user
takes) is the second half of Plan 15, after the front half works live.

## Unchanged

The reading tools, the whole-novel index, the durable split, the 50/70/90
tool budgets, and the always-on reasoning tiers (high/high/max).

## Verification

Focused: `uv run pytest tests/test_spoilers.py tests/test_retrieval_tools.py`,
`ruff check src/weaver/spoilers`, full suite at slice boundaries, staged
credential/private-text scan before any push.
