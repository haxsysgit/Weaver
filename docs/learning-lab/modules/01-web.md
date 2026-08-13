# Module 01: from browser to fastapi to SSE (the door of the house)

![Web](diagrams/01-web.png)

the web surface is a local app (a PWA, a web app you can "install" and
use offline) that only ever talks to `127.0.0.1`, your own machine. and
here's the important design bit: it holds nothing. no model, no tools,
no database. it's a thin client (just a messenger) over two HTTP
contracts (two agreed ways of talking): REST for actions (do this thing)
and SSE for answers (stream the reply live).

## the two contracts (actions vs answers)

**actions are posts, answers arrive over the stream.** you send
`POST /api/conversations/{id}/turns` (`web/app.py:585`) with your
message. the server checks it (not blank, not oversized), rejects a
second turn while one is still running with `409` (conflict: one at a
time, please), then starts the turn as a background task (`asyncio.create_task`
at `app.py:607`, the server says "ok, i'll do the work now, don't wait")
and replies `202` (accepted: got it, the answer comes later). the POST
carries no answer, there's nothing in it but the confirmation. the
browser then opens `GET /api/conversations/{id}/stream` (`app.py:688`)
and reads the turn's events as SSE frames (server-sent events: the
server pushes the reply to you in pieces over an open connection, like
a live stream instead of one big email).

why this shape? a dropped connection (wifi blip, browser refresh, tab
closed) must never lose the reply. the stream replays its history to
any client that reconnects with `Last-Event-ID` (a marker saying "give
me everything after this point", `app.py:706-714`). so a reconnect gets
everything it missed, and a disconnect never cancels the turn. the work
keeps running server-side whether or not anyone is listening. that's
the kind of decision that matters: the client is a spectator, the server
owns the work.

**cancel is cooperative.** `POST /api/conversations/{id}/cancel`
(`app.py:751`) sets a cancel event (a flag the loop checks between
steps), the turn loop notices it and stops at the next safe point. the
loop is never force-killed (`task.cancel()`) mid-write. think of it as
asking someone to stop cooking when the timer rings, instead of pulling
the plug on the stove.

## what the client does

`web/frontend/lib/chatApi.ts` exposes `streamTurn()` (a way to walk the
stream piece by piece) returning an `AsyncIterable<StreamEvent>`
(a loop you can `for await` over) where `StreamEvent = delta | completed
| interrupted | failed | tool` (`chatApi.ts:15`). delta means "a piece
of the answer is here", completed means "turn done, here's the final
text", tool means "the model just used a reading tool, heads up".
`useChatController.ts` keeps `TurnState = idle | streaming | cancelling`
(the app's mood). the controller maps frames to state: `delta`/`tool`
keep it streaming, `completed`/`failed`/`interrupted` end it.

## the frame, verbatim (read it with the annotations)

from the capture (evidence/01-web-turn/03-sse.stream.txt), the entire
wire content for the fake-mode turn:

```
id: 1
event: completed
data: {"text": "I read you. This is a fake-mode reply (--fake), no real
model is running. Set DEEPSEEK_KEY and start again to talk to the real
Weaver.", "token_count": 1150, "token_budget": 200000}
```

- `id:` the event number. the client sends it back as `Last-Event-ID`
  on reconnect (see above), and the server replays everything past it.
- `event:` the kind of frame. `completed` is the terminal frame (the
  last one) for a finished turn.
- `data:` the JSON payload (the actual content). `text` is the final
  assistant answer. the streamed `delta` frames you might have seen
  earlier are only a preview; the final message is what gets saved.
  `token_count`/`token_budget` are the context meter (how much of the
  model's window this turn used, module 03).

in a reading turn this stream also carries `event: tool` frames while
the model works the five reading tools, and `event: delta` frames of
streamed text.

## the whole trip, one turn (what the capture did)

the capture drove the real app with an ASGI transport (a way to run the
fastapi app inside a test, speaking real HTTP without opening a real
port) and fake mode (the scripted provider, no network):

1. `POST /api/conversations` gives you `201` (created) with a
   `conversation_id` (the new thread's id). evidence
   `01-create-conversation.json`.
2. `POST /api/conversations/{id}/turns` with the message gives you
   `202` (accepted, work started). evidence `02-start-turn.json`.
3. `GET /stream` streams the frame above. evidence `03-sse.stream.txt`.
4. `GET /api/conversations/{id}/messages` returns the saved transcript
   (the store's record), two messages: owner (you) and weaver.
   evidence `04-transcript.json`.
5. `GET /api/conversations` lists the conversation with its auto-title
   `"Tell About The Fake Knight"` (the first message's first words).
   evidence `05-conversations.json`.

note the context meter in step 3: `token_count 1150 / token_budget
200000`. the web surface caps the per-step re-send at 200k tokens (the
model window limit for one step on this surface, `chat_runtime.py:378`).

## inspect it yourself

```bash
.venv/bin/python docs/learning-lab/scripts/capture_01_web_turn.py
```

then read `evidence/01-web-turn/` and compare each artifact with the
routes above. the sqlite rows behind the turn are in the `06-`, `07-`,
`08-` files, that's modules 02 and 07's territory.

## key invariants

- the turn runs server-side; the post carries no answer.
- one background task per send; the stream entry stays alive until the
  task truly finishes (`app.py:716-747`).
- only `127.0.0.1`/`localhost` origins pass (your own machine,
  `app.py:40`, `72`).
- messages longer than `MAX_MESSAGE_CHARS = 32_000` characters are
  rejected (`422`).
- deltas are a preview; the final assistant message is what persists.
