"""Capture 01 tour: one message through the real web surface, live.

Run it and follow along: every step explains itself, prints the real
source that does the work, then shows the real output. The evidence
files in evidence/01-web-turn/ are written by the same run, but the
tour is the point.

Run:  .venv/bin/python docs/learning-lab/scripts/capture_01_web_turn.py
Fast:  ... --autopilot        (no prompts, still writes evidence)
"""

import asyncio
import json
import re
import tempfile
from pathlib import Path

from httpx import ASGITransport, AsyncClient

from weaver.chat_runtime import open_chat_runtime
from weaver.web.app import create_app

import lab

EVIDENCE = Path(__file__).resolve().parent.parent / "evidence" / "01-web-turn"

CANARIES = [
    "sk-test-secret",
    "novel/corpus/path",
    "weaver.sqlite3",
    "reasoning",
    "/home/",
]

ID_RE = re.compile(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}")
ID32_RE = re.compile(r"\b[0-9a-f]{32}\b")
TS_RE = re.compile(r"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+\+\d{2}:\d{2}")


def normalize(text: str) -> str:
    text = ID_RE.sub("{id}", text)
    text = ID32_RE.sub("{id}", text)
    text = TS_RE.sub("{ts}", text)
    return text


def write(name: str, text: str) -> None:
    raw = EVIDENCE / name
    raw.write_text(text, encoding="utf-8")
    norm = EVIDENCE / f"{raw.stem}.norm{raw.suffix}"
    norm.write_text(normalize(text), encoding="utf-8")


async def main() -> None:
    lab.banner("TOUR 01: ONE MESSAGE THROUGH THE WEB SURFACE")
    lab.explain(
        "design lesson time, and this one is about seams. a harness needs"
        "\na way to run the WHOLE system offline, or you can never test it"
        "\nwithout paying for api calls. weaver's answer: one switch,"
        "\nopen_chat_runtime(..., live=False), and the fake provider (a"
        "\nstand-in that plays scripted replies) takes over. this tour runs"
        "\nthe REAL fastapi app in fake mode and walks one message through:"
        "\nbrowser -> REST -> SSE -> SQLite."
    )
    lab.note("q quits any prompt. --autopilot runs everything on defaults.")
    lab.pause()

    EVIDENCE.mkdir(parents=True, exist_ok=True)
    state_dir = Path(tempfile.mkdtemp(prefix="learning-lab-01-"))

    lab.section("STEP 1: build the backend in fake mode (flip the switch)")
    lab.explain(
        "open_chat_runtime is the production seam (the joint where you"
        "\ncan plug in a different part): the SAME call the server uses,"
        "\nlive=False swaps the real deepseek connection for"
        "\nFakeModelProvider, the rehearsal actor. you never test a"
        "\ndifferent system than the one you ship, you test the same"
        "\nsystem with one part swapped."
    )
    lab.code("chat_runtime.py:304-341")
    sw = lab.stopwatch()
    runtime = await open_chat_runtime(state_dir, live=False, surface="web")
    sw.elapsed("runtime construction")
    lab.note(f"mode: {runtime.mode_label}    state dir: {state_dir}")
    lab.note("the scripted fake reply (also the real --fake CLI reply):")
    print(
        '    "I read you. This is a fake-mode reply (--fake), no real model '
        "is running.\""
    )
    lab.pause()

    lab.section("STEP 2: wrap it in the real web app, over real HTTP")
    lab.explain(
        "now the real fastapi app (the door of the house, module 01)"
        "\nwraps the runtime. we talk to it through an ASGI transport: a"
        "\nway to run the app inside a test, speaking real HTTP without"
        "\nopening a real port. same routes, same headers, same responses"
        "\nas a browser would see."
    )
    lab.code("web/app.py:253-296")
    app = create_app(runtime)
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport,
        base_url="http://127.0.0.1",
        headers={"Origin": "http://127.0.0.1"},
    ) as client:
        lab.pause()

        lab.section("STEP 3: create a conversation (POST /api/conversations)")
        lab.explain(
            "first you ask the server for a new thread. note the design:"
            "\nthe client never builds database rows, it only talks HTTP."
            "\nall the client can ever do is ask; the server does the"
            "\nwork. that's the thin-client rule from module 01."
        )
        lab.code("web/app.py:326-341")
        resp = await client.post("/api/conversations")
        conversation_id = resp.json()["conversation_id"]
        lab.show("response", {"status": resp.status_code, "body": resp.json()})
        lab.note("201 = created: the conversation row is in the store (module 07)")
        write("01-create-conversation.json", resp.text)
        lab.pause()

        lab.section("STEP 4: send the message (POST /turns), 202 means 'got it'")
        lab.explain(
            "here's the async pattern every harness needs: the POST"
            "\nreturns 202 (accepted, work started server-side as a"
            "\nbackground task) and carries NO answer. the reply comes"
            "\nlater, over the SSE stream. why? because the work takes"
            "\nminutes, and a browser request can't stay open that long"
            "\nreliably. accept the job, then stream the result."
        )
        lab.code("web/app.py:585-617")
        message = lab.ask(
            "type your own message, or keep the sample",
            "Tell me about the fake knight in chapter 1.",
        )
        t0 = lab.stopwatch()
        resp = await client.post(
            f"/api/conversations/{conversation_id}/turns",
            json={"message": message},
        )
        t0.elapsed("POST /turns")
        lab.show("response", {"status": resp.status_code, "body": resp.json()})
        lab.note("behind the scenes: send() -> start_turn -> run_turn_in_run")
        lab.note("(modules 02 and 04), the fake reply is already being written")
        lab.note("to SQLite while you read this line.")
        write("02-start-turn.json", json.dumps(
            {"status": resp.status_code, "body": resp.json()}, indent=2
        ))
        lab.pause()

        lab.section("STEP 5: read the reply over SSE (GET /stream)")
        lab.explain(
            "SSE = server-sent events: the server pushes the reply in"
            "\npieces over an open connection, like a live feed instead of"
            "\none big email. the client sends Last-Event-ID (a marker"
            "\nsaying 'give me everything after this point') on reconnect,"
            "\nso a dropped connection never loses the reply"
            "\n(web/app.py:706-747). the work runs server-side whether or"
            "\nnot anyone is listening."
        )
        lab.code("web/app.py:688-749")
        frames: list[str] = []
        t0 = lab.stopwatch()
        async with client.stream(
            "GET", f"/api/conversations/{conversation_id}/stream"
        ) as stream_resp:
            async for line in stream_resp.aiter_lines():
                frames.append(line)
                lab.note(line if line else "(blank frame separator)")
        t0.elapsed("SSE stream")
        lab.show("the whole wire content of this turn", "\n".join(frames))
        lab.note("token_count 1150 = the context meter (module 03 snapshot)")
        lab.note("token_budget 200000 = the web surface's per-step re-send cap")
        write("03-sse.stream.txt", "\n".join(frames) + "\n")
        lab.pause()

        lab.section("STEP 6: the persisted transcript (GET /messages)")
        lab.explain(
            "the turn is OVER now. what did the store keep? the API is a"
            "\nprojection (a window into the data), the store is the"
            "\ntruth. the transcript shows two owner messages: the first"
            "\n(empty) is the conversation's starter turn, created"
            "\natomically with it (module 02) so a conversation never"
            "\nhalf-exists."
        )
        resp = await client.get(f"/api/conversations/{conversation_id}/messages")
        lab.show("transcript", resp.json())
        write("04-transcript.json", resp.text)
        lab.pause()

        lab.section("STEP 7: the SQLite rows behind the turn")
        lab.explain(
            "now let's look UNDER the api, at the database (the single"
            "\nfile that stores everything). three tables: conversation_item"
            "\n(one row per message, tool call, tool result), run (one"
            "\nexecution attempt per turn, with phases: queued, running,"
            "\ncompleted), and run_event (the log entries telling the"
            "\nrun's story)."
        )
        repo = runtime.session.repo
        items = [r.__dict__ for r in await repo.load_items(conversation_id)]
        runs = [r.__dict__ for r in await repo.load_runs(conversation_id)]
        events = [r.__dict__ for r in await repo.load_events(conversation_id)]
        lab.show("conversation_item rows (kind, sequence, body)", [
            {"seq": i["sequence"], "kind": i["kind"], "body": json.loads(i["body"])}
            for i in items
        ])
        lab.show("run rows (phase)", [
            {"id": r["id"][:8], "turn_id": r["turn_id"][:8], "attempt": r["attempt"], "phase": r["phase"]}
            for r in runs
        ])
        lab.show("run_event rows", [
            {"seq": e["sequence"], "kind": e["kind"], "run_id": e["run_id"][:8]}
            for e in events
        ])
        lab.note("starter run stuck at 'queued'; the real run completed.")
        write("06-sqlite-items.json", json.dumps(items, indent=2))
        write("07-sqlite-runs.json", json.dumps(runs, indent=2))
        write("08-sqlite-events.json", json.dumps(events, indent=2))
        lab.pause()

        lab.section("STEP 8: the optional live demo (your message, not saved)")
        demo = lab.ask("type a question to demo yourself", "")
        if demo:
            lab.note(f"sending your message: {demo!r}, watch the SSE frame")
            resp = await client.post(
                f"/api/conversations/{conversation_id}/turns",
                json={"message": demo},
            )
            assert resp.status_code == 202
            async with client.stream(
                "GET", f"/api/conversations/{conversation_id}/stream"
            ) as stream_resp:
                async for line in stream_resp.aiter_lines():
                    lab.note(line if line else "(blank frame separator)")
        else:
            lab.note("skipped, blank answer keeps it on the default run")

        lab.section("STEP 9: hygiene check (no private markers anywhere)")
        for p in EVIDENCE.iterdir():
            if not p.is_file() or ".norm." in p.name:
                continue
            text = p.read_text(encoding="utf-8")
            for canary in CANARIES:
                assert canary not in text, f"canary leak in {p.name}: {canary}"
        lab.note("all artifacts clean. Evidence written to evidence/01-web-turn/")

    await runtime.close()
    lab.banner("END OF TOUR 01: read modules/01-web.md, 02-runtime.md, 07-persistence.md")


if __name__ == "__main__":
    asyncio.run(main())
