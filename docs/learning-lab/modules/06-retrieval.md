# Module 06: retrieval (the reading hands)

![Retrieval](diagrams/06-retrieval.png)

weaver's job is to actually read. the five reading tools
(`retrieval/tools.py`) are the model's hands on the novel library (the
immutable source files). all of them are `EffectKind.READ` (they only
look, never change), all deterministic machinery (`retrieval/library.py`,
same inputs, same outputs), and there are no LLM calls inside the tools
themselves (no model calling a model; the tools are pure code).

## the five tools (the toolbox)

| tool | what it does | input example |
|---|---|---|
| `semantic_search` | search by meaning: dense-first hybrid search over chapters + notebook statements (found in the notebook, weaver's record of people/places/items); hits carry passage handles (addresses) | `{"query": "who killed the hunting party leader", "limit": 3}` |
| `read_chapters` | open lines by passage handle, verify against the immutable source | `{"handle": "novel:0098:3-4"}` |
| `find_text` | find exact words: phrase / speaker / together modes (`[[term], [group]]` AND-across, OR-inside) | `{"query": "fake knight", "mode": "phrase"}` |
| `browse_chapters` | skim titles or bodies, max 49 chapters (99 titles-only) | `{"start": 1, "end": 5, "titles_only": true}` |
| `who_is` | entity lookup across people/places/powers/items/groups, alias-aware (knows alternate names, so "mongrel" finds sunny) | `{"name": "sunny"}` |

every tool validates its arguments (checks the input is well-formed)
with pydantic input models (`SearchStoryInput` ... `WhoIsInput`,
`tools.py:50-182`, pydantic is the library that checks shapes) and
returns `{"ok": bool, "result": ..., "durable_evidence": ...}`. it
never raises on bad input, it reports. the capture
`evidence/06-retrieval/01-tool-results.json` shows all five plus the
failure shapes:

- `read_chapters_bad_handle` gives `ok: false, error_category:
  validation, error: "passage 98:99-100 outside chapter (4 lines)"`
  (you asked for lines 99-100 but the chapter only has 4 lines, the
  tool doesn't crash, it says "wrong address").
- `find_text_bad_mode` gives pydantic's `Value error, mode must be one
  of: phrase, speaker, together` (the mode field got a nonsense value).

## the durable-evidence split (what gets saved vs what stays ephemeral)

reading prose is private material (novel text is the owner's private
library, never to be copied into the database). the conversation store
must never hold it. the split (`conversation/items.py:35-54`):

- **in memory, this turn:** `read_chapters` returns the passage text
  plus a `durable_evidence` record (the pointer that survives):
  chapter, line range, source hash (a fingerprint of the text, so
  future reads can verify it hasn't changed), source kind, passage
  handle (`tools.py:394-403`). the model reads the prose this turn.
- **persisted:** `message_to_item` runs the result through
  `_durable_result`, which keeps only the evidence record (the
  pointer, not the text). the capture's
  `evidence/06-retrieval/03-persisted-items.json` (sequence 8) shows
  the stored `tool_result`: chapter 98, lines 3-4, `source_hash
  "d9a88a7dc09c6daa"`, `passage_handle "novel:0098:3-4"`, and no
  `text` key at all.
- **search hits persist fully** (sequence 5): they are pointers
  already (chapter, score, `passage_handle`, `source_hash`), there is
  no prose in them to strip.

the capture asserts this on every run: no novel prose in any persisted
body. if it's in the store, it's a pointer, or it's a bug.

## the reading packet (the answer bundle)

`build_packet` (`retrieval/packet.py:99`) collects the durable
evidence from the turn's tool results and produces the reading packet,
the bundle the model re-reads in the final phase (module 04: the last
call that writes the answer). bounded per tier (`PACKET_CHAR_CAPS`:
awakened 180k / ascended 360k / transcendent 700k characters, bigger
models get more reading), `EXPAND_LINES = 20` around each cited
passage (a little context around the cited lines), `MAX_NOTEBOOK_STATEMENTS = 5`,
`MAX_OPENED_PASSAGES = 12`. the `SpoilerJudge` (a small checker that
knows how far the reader is) decides `VERDICT_FRAMING` (full /
guarded / ask_first) when the owner's `reader_chapter` is set. the
packet never spoils beyond the reader's position. weaver knows where
you are in the story.

## a full reading turn

the capture drives a real `SessionWeave` turn (scripted provider, the
model's replies are canned):

```
semantic_search("who killed the hunting party leader")   hits 0.606,
  passage_handle novel:0098:2-4, source_hash d9a88a7d...
read_chapters("novel:0098:3-4")                          lines 3-4
final answer: "Sunny killed the leader himself with the kunai (chapter 98)."
```

result (`02-turn-result.json`): `exit completed`, `model_steps 3`
(the loop called the model three times), `tool_starts 2` (two tools
actually ran). the persisted store shows the full exchange shape with
evidence records only.

## inspect it yourself

```bash
.venv/bin/python docs/learning-lab/scripts/capture_06_retrieval.py
```

change the search query in the script and watch the score change; then
check `03-persisted-items.json` stays free of prose, that invariant is
asserted in the script itself.

## key invariants

- tools are READ-only; the library is immutable; source hashes verify
  every opening.
- passage prose is ephemeral: in memory for the turn, never in the
  store.
- every tool validates input and reports failures as `ok: false`, no
  exceptions leak to the model.
- the reading packet is capped per tier and spoiler-aware.