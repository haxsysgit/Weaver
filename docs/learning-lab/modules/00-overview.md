# Module 00: overview (the map before the hike)

so here's the whole thing in one breath: a message enters weaver as text
in a browser, and comes back as a cited answer, with every step of the
journey written down in the database (the store, the one place that keeps
everything forever). this module is the map. every module after this one
is a zoom-in on one section of the map.

![Overview](diagrams/00-overview.png)

## the layers (the rooms of the house)

| layer | what lives there | module |
|---|---|---|
| browser | the react app you click: `web/frontend/lib/chatApi.ts`, `hooks/useChatController.ts` | 01 |
| web layer | `web/app.py` (fastapi, the door of the house), SSE streams (the live reply feed), origin checks (only your own machine is let in) | 01 |
| runtime wiring | `chat_runtime.py` (the power switch), `conversation/session.py`, `coordinator.py` (the bank teller), `runner.py` | 02 |
| context engine | `conversation/assembler.py` (the window manager: decides what the model gets to see), `items.py` | 03 |
| turn loop | `agent/turn.py` (the heart: think, call tools, repeat, answer) | 04 |
| model layer | `model_layer/` (the middleman: types, layer, deepseek, fake) | 05 |
| tool protocol | `agent/tools.py` (registry: the list of tools; policy: what's allowed; dispatch: the routing) | 05 |
| retrieval | `retrieval/tools.py`, `library.py`, `packet.py` (the reading hands and the answer bundle) | 06 |
| persistence | `conversation/schema.py`, `repository.py` (the store itself) | 07 |

## the map in one paragraph (read this twice)

the browser posts your message (a REST call: one request, one job) and
the server answers "ok, accepted" (`202` means "got it, the answer comes
later"), then the browser opens an SSE stream (a live feed: the server
pushes the reply to you bit by bit over an open connection). `web/app.py`
hands the message to `ChatRuntime`, which owns `SessionWeave` (the
session, the object that knows who you are and where your stuff lives).
`send()` kicks off a turn (one full exchange: your message, all the
model's work, the final reply) and a run (one execution attempt of that
turn, with phases like queued, running, completed) through the
`RunCoordinator` (the bank teller: every write happens as a transaction,
a group of writes that all succeed or all fail together). then the
`ConversationRunner` runs the loop in `agent/turn.py`: think, maybe call
a tool, look at the result, repeat, until the answer is ready.

each model call is prepared by `ContextAssembler` (the window manager:
it picks what fits in the model's context window, the amount of text the
model can see at once, and drops the oldest stuff to stay under budget,
a max token allowance per step; tokens are the chunks of text the model
reads and bills you for). the request goes through `ModelLayer` (the
middleman: either the real deepseek wire format, the exact body sent to
the api, or the scripted fake provider, a stand-in that plays canned
replies with no network).

the model may call the five reading tools (`semantic_search`, find by
meaning; `read_chapters`, open specific lines; `find_text`, find exact
words; `browse_chapters`, skim the list; `who_is`, look up a character
or place profile). those read the novel library (the immutable source
files, never edited) and return passages (short slices of a chapter, a
few lines). the passage prose lives in memory just for the turn; only
durable evidence (the pointer: chapter, line range, hash, handle) is
saved to the store. the final answer is saved as `conversation_item`
rows (one row per message), the run is marked completed, and the SSE
stream sends the terminal frame `event: completed` with the text.

## how to read the evidence

every `evidence/` artifact is a committed literal (the exact bytes a real
run wrote, saved as files in the repo). when a module and an artifact
disagree, the artifact wins, trust the artifact. the `.norm.*` variants
are copies where ids and timestamps got replaced with `{id}`/`{ts}`, so
when you replay and diff, the only differences that show up are real
code changes, not random ids.

## replay everything

```bash
.venv/bin/python docs/learning-lab/scripts/capture_01_web_turn.py
.venv/bin/python docs/learning-lab/scripts/capture_03_context_engine.py
.venv/bin/python docs/learning-lab/scripts/capture_05_wire_payload.py
.venv/bin/python docs/learning-lab/scripts/capture_06_retrieval.py
```

the scripts write into `evidence/` and run on the real `src/weaver/`
code (nothing simulated, the actual engine). they never touch `novels/`
(the private library) or any live state; each one uses a throwaway temp
directory.
