# Weaver Learning Lab

a self-guided course about designing agent harnesses (the machinery that
makes an agent work: the loop, the tools, the memory, the wires), taught
through weaver as the case study. you follow one message from the browser
to sqlite and back, and at every stop you learn a design decision: what
it is, why it's built that way, what else was possible, and what breaks
if you pick wrong.

every claim in these modules is backed by two things:

1. **exact code references** (`src/weaver/...:line`), so you can open the
   source and see the actual decision, not a paraphrase.
2. **deterministic offline captures** in `evidence/`, produced by running
   the real weaver code (nothing simulated) against a scripted fake model
   (a stand-in that plays canned replies, no network) and synthetic novel
   data. you can replay every capture yourself.

## the path of one message

```
 browser (React + SSE)
      │  POST /turns, GET /stream           module 01
      ▼
 web/app.py  (FastAPI, SSE, origin checks)
      │  open_chat_runtime(...)             module 02
      ▼
 chat_runtime.py  ──►  SessionWeave  ──►  RunCoordinator
      │                                        │
      │  module 03                            │  module 04
      ▼                                        ▼
 ContextAssembler ──► ModelLayer ──► turn.py run_turn loop
      │  token budget               (tool budget, stop reasons)
      │                              │
      │                              ├──► retrieval tools (library + packet)
      │                              ├──► ToolExecutionPolicy / EffectKind
      │                              └──► ConversationRunner
      │                                    │
      │                                    ▼
      │                              conversation/coordinator.py (_tx)
      │                                    │
      ▼                                    ▼
 ModelLayer (DeepSeek wire payload / fake)  SQLite (items, runs, events)
```

## modules

| Module | Title | Primitive(s) (`docs/process/agent-primitives.md`) | Core code | Diagram | Evidence |
|---|---|---|---|---|---|
| 00 | overview: the map before the hike | the primitive map itself | `src/weaver/` layout | `diagrams/00-overview.*` | - |
| 01 | browser, FastAPI, SSE: the door | - (transport/UI, not a primitive) | `web/app.py`, `web/frontend/lib/chatApi.ts`, `hooks/useChatController.ts` | `diagrams/01-web.*` | `evidence/01-web-turn/` |
| 02 | runtime wiring: power switch + bank teller | cooperative cancellation (partial), crash recovery (partial) | `chat_runtime.py`, `conversation/session.py`, `coordinator.py` | - | `evidence/01-web-turn/` |
| 03 | the context engine: budget, pin, snapshot | context assembly (satisfied); compaction + memory (missing) | `conversation/assembler.py`, `items.py` | `diagrams/03-context.*` | `evidence/03-context-engine/` |
| 04 | the turn loop: the heart | bounded agent loop, error classification, cooperative cancellation (partial) | `agent/turn.py`, `conversation/runner.py` | `diagrams/04-turn.*` | `evidence/01-web-turn/`, `06-retrieval/` |
| 05 | model layer: middleman + bouncer | model access + streaming, message protocol, tool registry + effect policy | `model_layer/*`, `agent/tools.py`, `agent/messages.py` | `diagrams/05-wire.*` | `evidence/05-wire/` |
| 06 | retrieval: the reading hands | tool registry + effect policy (the tools as primitives) | `retrieval/tools.py`, `library.py`, `packet.py` | `diagrams/06-retrieval.*` | `evidence/06-retrieval/` |
| 07 | persistence: the vault | durable conversation (satisfied), observability (partial) | `conversation/repository.py`, `schema.py` | `diagrams/07-persistence.*` | `evidence/01-web-turn/` |

## how to read it

this lab is a **harness-design course**, and weaver is the case study.
the goal is not to memorize code (llms write code faster than any of us),
it's to be able to *design an agent harness from scratch*: know each
primitive (the building blocks: the loop, context assembly, tools, the
store), know when to introduce it, and make decisions between
alternatives. each module is one design lesson:

1. **the problem**: why this primitive exists in any harness.
2. **the design space**: the honest options, not just the chosen one.
3. **weaver's choice + why**: the code shown briefly as evidence of a
   decision.
4. **what breaks if you did it another way**: the failure modes.
5. **how it contributes to the final output**: where its quality ceiling
   lands.
6. **hold the discussion**: interview-style questions to practice on.

- read modules in order; the message path (browser to sqlite) is the
  through-line that ties the lessons together. every technical term gets
  a plain explanation in brackets on first use, so if you hit an
  unfamiliar word, it's explained right there.
- every capture script is an interactive tour (see below): it prints the
  real source at `src/weaver/...:line` as each step executes, *explains*
  what the code does and why it was designed that way, and pauses with
  predict-then-reveal questions (`THINK:`) before showing you the design
  rationale. the tour is the fastest first pass; read the module after
  it.
- all evidence artifacts are committed literals (the exact bytes a real
  run wrote). if a module and an artifact disagree, the artifact wins.
- diagrams are `.drawio` source plus exported `.svg`/`.png`, rendered
  from the real CLI (`~/.local/bin/drawio`).

## the test (interview-style)

the lab ends with an **oral exam, not a written one**. after the modules,
the owner gets quizzed conversationally, one module at a time, on design,
not recall:

- "your harness must do X. which primitives do you need, and in what
  order do you introduce them?"
- "why did weaver choose this over that alternative? when would you
  choose the other one?"
- pushback drills: propose a different design and defend it against
  weaver's.
- the final question: sketch a harness from scratch (requirements,
  primitives, seams, failure modes) from memory of the *principles*, not
  the code.

each module ends with a "hold the discussion" section of practice
questions. only the owner decides whether the lab is passed: the modules
collect the evidence, the owner holds the verdict, per the weaver agent
contract.

## ground rules of the lab

- **no live model calls.** every capture uses `FakeModelProvider` (the
  scripted stand-in) with canned replies; runs are deterministic and
  free.
- **no private text.** novel data is synthetic (a fake knight, a fake
  kunai). nothing from the real library or real conversations appears in
  the lab.
- **docs only.** the lab never changes `src/`; it imports it. it does
  not touch `novels/` (the private library) or any live state directory;
  every capture uses a throwaway temp directory.

## replaying a capture

every script is also a narrated tour: it explains each step, prints the
exact source lines doing the work at the moment they run, live output,
timing, and (where useful) asks for your input before continuing.

```bash
# interactive tour: press Enter to advance, q to quit
.venv/bin/python docs/learning-lab/scripts/capture_01_web_turn.py

# non-interactive replay: every prompt auto-advances with its default
.venv/bin/python docs/learning-lab/scripts/capture_03_context_engine.py --autopilot
# equivalent: WEAVER_LAB_AUTOPILOT=1 .venv/bin/python .../capture_06_retrieval.py
```

what each tour does:

| script | what it shows | interactive part |
|---|---|---|
| `capture_01_web_turn.py` | full browser to fastapi to SSE to sqlite turn | STEP 4: your own message (not saved) |
| `capture_03_context_engine.py` | real token counts, drop-oldest, pin | STEP 5: type a budget, watch blocks survive |
| `capture_05_wire_payload.py` | deepseek payload, layer round-trip, dispatch gates | - |
| `capture_06_retrieval.py` | five reading tools + scripted retrieval turn | STEP 5: search your own query |

scripts write into `docs/learning-lab/evidence/<module>/` with stable,
committed names, so a replay that changes output means the code changed.
treat that as a lab update, not a failure. runs under `--autopilot` are
byte-identical to interactive runs.

## source of truth

- `docs/process/` is how weaver work is planned and gated (plans index:
  `plans/README.md`).
- the `src/weaver/` tree is the only truth; modules are commentary on
  it.