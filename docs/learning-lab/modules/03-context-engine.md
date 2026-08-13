# Module 03: the context engine (budget, pin, snapshot)

**primitive: context assembly** (satisfied, per `docs/process/agent-primitives.md`). it borders two missing primitives: compaction and durable memory. those are future plans; this is the hot path that exists today.

this whole module is a design lesson. the code is just the evidence of the design.

## the problem this primitive solves

so you're building an agent. cool. the one resource you cannot buy your way out of is the model's context window (the amount of text the model can see at once, its working memory). it's finite, it's paid per token (tokens are the chunks of text the model reads and bills you for, roughly little pieces of words), and every conversation grows forever. and stale history isn't just wasted space, it actively drowns the relevant stuff. your model starts answering the question from last week instead of the one from this minute.

so someone has to decide, every single step, exactly which slice of the stored conversation becomes the working brief the model sees. that decision function is **context assembly**, and honestly? it sets the ceiling on your whole system. the model can only answer from what it's shown. no retrieval, no memory, no clever tooling fixes a bad brief.

and here's what this primitive is not: it doesn't read the library, it doesn't write the database, it doesn't talk to the model. it eats the stored item stream (module 07) and hands back one bounded brief plus one accounting record (the snapshot). clean seams like that are what let you swap pieces without tearing the house down.

## the design space

you've got real options here, and each one solves a different failure:

| option | what you get | the catch |
|---|---|---|
| send everything | simple, lossless, perfect for v0 | you hit the cap eventually; cost grows; attention rots |
| drop oldest (sliding window) | predictable, cheap, easy to debug | cuts blind. can sever a tool exchange or the user's latest question |
| summarize / compact | keeps the *meaning* of old turns | drift, per-turn cost, and weaver can't cite a summary as a source |
| pin + budget (weaver's pick) | bounded brief, user intent protected | "importance" is a heuristic. only the newest owner is special |
| retrieval window | pull relevant past on demand | needs an index. that's module 06, a different primitive |
| durable memory | survives across sessions | missing primitive, lives beyond this module |

see the pattern? every option is a bet on which failure matters most. weaver's bet: protect the user's intent, bound the cost, stay deterministic.

## weaver's choice, and why

the whole contract in one line (`assembler.py:1-7`): count tokens at the projection boundary, drop oldest exchange blocks first, never split an exchange, never drop the newest owner message. let's go clause by clause, cos each one is a decision with a specific failure it's dodging.

**count at the projection boundary, not on raw items** (`assembler.py:39`). the projection boundary is the exact moment stored items become the message shape the model reads. count there, what the model will actually see after items become messages, not the db text. raw-text counting is a lie: it under-counts transformed content and over-counts fields the model never reads. you measure your budget in the same units you're billed in, or your budget is fiction. the tokenizer (the tool that splits text into tokens) is `cl100k_base`, an explicit approximation (`assembler.py:49-53`), cos deepseek doesn't publish one. approximation is normal in harness design, hiding it is the sin. document the error bar, keep headroom.

**never split an exchange** (`_group_blocks`, `assembler.py:62`). think of a tool exchange as one thought: the assistant decides to search, calls the tool, gets the result. cutting inside it is like clipping a phone call mid-sentence, the other side hears half a sentence. naive line-count truncators hit exactly this: the provider rejects the malformed shape, or worse, the model just invents the result that got dropped. block first, then cut on conversation boundaries.

**pin the newest owner message** (`assembler.py:136-141`). the worst failure in a chat harness is answering a question the user didn't ask anymore. the pin guarantees the latest owner item is always in the brief, even over budget (`assembler.py:159-162` never raises, a one-message brief beats an empty one). this is an availability-over-perfection call, and it's the reason the harness still feels alive when it's drowning.

**oldest first** (`assembler.py:146-154`). this one is deliberately dumb. not clever, boring on purpose. why? cos deterministic beats clever: the same budget always produces the same brief, which means you can actually debug it and test it. importance-scoring would buy nothing at this scale and make reproduction impossible.

## what breaks if you did it another way

- drop newest instead of oldest: you answer the previous question. users notice instantly. this is the one failure to design out first.
- count raw text: the budget silently disagrees with the model's real window. either you waste paid tokens, or you overrun and eat a mid-turn 400 with no recovery.
- split exchanges: malformed message sequences. the model can't reason about a result it never saw requested.
- summarize instead of pin: weaver has to quote chapters (module 06). a summary can't be cited, and a summary of a summary drifts. compaction is a later primitive for older material, it belongs with durable memory, not in the hot path.
- raise on overflow: one giant tool result (packet bursts, module 06) could fail the whole turn. a pin-only brief keeps the loop alive, and the snapshot shows the mess honestly.

## how it contributes to the final output

every token the model sees, every step, passed through here: system prompt, blocks, budget, one assembly (`assembler.py:100-117`). the output snapshot is also your observability contract: `first_item_id`, `item_count`, `token_count`, `token_budget`. the runner logs it (`runner.py:134-139`), and the web surface ships it in every completed SSE frame. that's the `token_count: 1150, token_budget: 200000` in `evidence/01-web-turn/03-sse.stream.txt`. the user sees the context meter because the assembler always reports, even in count-only mode (`token_budget=None`: the TUI meter, and the web's per-step limit disabled).

## inspect it yourself

```bash
.venv/bin/python docs/learning-lab/scripts/capture_03_context_engine.py
```

the tour prints the real source at each decision point, then lets you type budgets and watch the policy behave. try `1200`, `1145`, `1` and predict which blocks survive before you hit enter. predicting first is the whole point, that's where the design muscle grows.

## hold the discussion (interview prep)

this is exam material. you should be able to hold all of these without the code:

1. you're building a support bot that has to answer questions about a thread from 3 months ago. which design-space options apply, and what changes vs weaver's answer?
2. your harness summarises old turns to fit the budget. what does that break that weaver's design never breaks, and what does weaver give up instead?
3. the model keeps calling a tool whose result is huge. where does that pressure surface in this primitive, and what's weaver's last resort?
4. when would you pick a plain sliding window over pin + budget, and what are you accepting you lose?

## key invariants

- tokens are counted at the projection boundary, never on raw items.
- exchanges are atomic: a tool exchange is never split across the cutoff.
- the newest owner message is never dropped, even when over budget.
- the snapshot is always produced, the context meter always works.
