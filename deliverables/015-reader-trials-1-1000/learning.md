# Plan 015 learning gate

## Gate status

Re-scoped and admitted by the owner 2026-08-07: Plan 15 is the
context-management system and agentic sharpening ("weaver as a full
agentic product"), not the 1-1000 reader conversations. Design locked by
the owner 2026-08-08: whole-novel search with no reader ceiling, spoiler
map + judge, user position as soft preference, and the open reading loop.
Router and skill packs remain deferred until real accepted trial records
exist.

## Locked decisions

- 2026-08-07: the reader ceiling is dead. Weaver holds the whole novel and
  answers with spoiler care in the framing, never in the search.
- 2026-08-07: tool budgets are ceilings, awakened 50 / ascended 70 /
  transcendent 90 (owner-set); thinking always on, tier picks the effort.
- 2026-08-07: five reading tools (semantic_search, read_chapters, find_text,
  browse_chapters, who_is); unix names rejected, descriptions carry the
  training benefit.
- 2026-08-08: spoiler map = statement labels (1-1000) + verified volume
  boundaries (everything); judge outcomes full / guarded / ask_first;
  position is a soft user setting and a UI knob, never a model argument;
  judge is deterministic machinery, the final reading call applies the
  framing.
- 2026-08-10: the two-phase trigger is superseded. The live "who is auro"
  turn proved that stripping tools on the first plain response can force a
  grounding conflict. The model had evidence, wanted one more exact-name
  search, and wrote the unavailable call as prose. That text was persisted.
- 2026-08-10: tools stay available on every normal call. A no-tool response
  is a candidate. The server validates it before any persistence or delta
  release, corrects written tool calls and working notes with tools still
  available, and performs one bounded zero-evidence re-prompt.
- 2026-08-10: only a validated candidate can trigger the final packet read.
  That one call is toolless and uses tier reasoning plus the 16384 token
  answer cap. It can improve the candidate but cannot kill the turn: slips,
  empty replies, refusals, packet errors, and provider errors fall back to
  the candidate. A missing packet publishes the candidate directly.
- 2026-08-10: the real 50 / 70 / 90 ceiling keeps the existing forced
  answer call. No final reading follows it. There is no finish tool,
  `submit_answer`, or `tool_choice`. `reasoning_content` still passes back
  through repeated structured tool calls.
- Label pass over existing 1-1000 statements is a later slice with owner
  review; no chapters are re-read for labels (statements carry evidence
  ranges; spot-checks open only those lines).
