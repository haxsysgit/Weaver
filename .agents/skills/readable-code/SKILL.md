---
name: readable-code
description: "ALWAYS LOAD when generating or editing code. Enforces readable, obvious, maintainable code. No cryptic one-liners, no clever hacks, no cramming multiple concerns into single lines."
---

# Readable Code Standard

This skill is ALWAYS active when writing or editing code. It is the highest-priority constraint on code quality.

## Hard Rules

1. **One concern per line.** If a line does two things, split it.
2. **No cryptic incantations.** `eval(x, {"__builtins__": {}}, {})` is forbidden. Write `result = eval(x)` with a comment instead.
3. **Name things by what they are.** Not `d` for dict, not `tmp`, not `data`. Good: `user_scores`, `file_path`, `response_data`.
4. **Comments explain why, not what.** The code should already say *what* it does. Comments explain *why* it's done that way.
5. **Separate logic from presentation.** Don't mix data processing with formatting in the same function.
6. **Prefer obvious over clever.** A 3-line if/else beats a one-liner with `and`/`or` short-circuiting. Every time.
7. **No nested comprehensions over 2 levels.** If you need 3+ loops in a comprehension, write a regular loop.
8. **Function signatures should reveal intent.** `def process(data)` is trash. `def calculate_gpa(grades: list[float]) -> float` is clear.

## The Test

Before submitting any code, ask yourself: *"Would Arinze need to pause and re-read this line to understand it?"*

If yes, it's wrong. Rewrite it.

## The Pattern

```python
# BAD — one-liner cramming two concerns
result = str(eval(expression, {"__builtins__": {}}, {}))

# GOOD — declare what you need, then use it
import math
safe_scope = {"sqrt": math.sqrt, "pow": pow, "abs": abs, "pi": math.pi}
result = eval(expression, safe_scope)
return str(result)
```

```python
# BAD — nested comprehension, three concerns
result = {k: [x for x in v if x > 0] for k, v in data.items() if k.startswith("t")}

# GOOD — loop with clear steps
result = {}
for key, values in data.items():
    if not key.startswith("t"):
        continue
    filtered = [x for x in values if x > 0]
    result[key] = filtered
```

## Reference

See `references/eval-case-study.md` for a real session trace where this skill was created — the eval() evolution from cryptic one-liner to readable code, with the user's exact feedback at each step.

## When to Apply

- Every code file you create or modify
- Every code example in docs, comments, or teaching material
- Every test
- Every configuration file that looks like code
