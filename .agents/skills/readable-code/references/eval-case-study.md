# Eval Case Study: From Cryptic One-Liner to Readable Code

This session trace documents the exact evolution of a single line of code through three iterations, driven by user feedback. It's the concrete example that birthed the `readable-code` skill.

## The starting point (original code in basics.md)

```python
# What was written first — one line, two concerns crammed together
return str(eval(expression, {"__builtins__": {}}, {}))
```

The line does two things: (1) evaluates a math expression, (2) sandboxes the eval by stripping builtins. Both concerns are invisible to someone reading it fresh. `{"__builtins__": {}}` looks like magic incantation. The trailing `{}` is even worse — an empty dict with no comment explaining why it's there.

## User's reaction

The user (Arinze) called this out immediately:

> "is there not a simpler and more readable way to write that code, because i'm tired of you generating unreadable code"

His frustration was about a **recurring pattern**, not just this one line — he said he generates a lot of code and wants all of it to be readable.

## Iteration 2: Simple eval with comment

```python
# eval() runs arbitrary Python — demo only, not production-safe
result = eval(expression)
return str(result)
```

Better — one concern per line, clear comment about the safety footgun. But the comment creates noise for what's supposed to be a teaching example.

## Iteration 3: Explicit scope with import math

```python
import math
safe_scope = {"sqrt": math.sqrt, "pow": pow, "abs": abs, "pi": math.pi}
result = eval(expression, safe_scope)
return str(result)
```

This is the version Arinze approved. The variable name `safe_scope` tells you what it is. The imported math functions make it obvious this is a calculator. The `eval()` call with a single extra arg is easy to parse.

## Lessons extracted

1. **If a line makes you double-take, it's wrong.** The original one-liner requires knowing Python's eval internals to parse. The final version is readable at a glance.

2. **Two concerns = two lines (or more).** Sandboxing and evaluating are separate ideas. Don't cram them into one line.

3. **Name things by what they are.** `safe_scope` communicates intent. `{}` communicates nothing.

4. **When a user corrects your code, extract the principle, not just the fix.** The specific fix was `import math` + `safe_scope`, but the principle is "write for a developer reading fresh, not to be technically correct in as few characters as possible."

## Why this became a skill

The user didn't just want this one line fixed — he wanted every line of every file from now on to follow the same standard. This was a tier-1 (highest importance) memory and spawned the `readable-code` skill.

### Anti-patterns the skill now prevents

- `eval(x, {"__builtins__": {}}, {})` — cryptic incantation
- `str(eval(expression, ...))` — wrapping eval's return in str is noise when eval already returns what you need
- Any one-liner that requires mental parsing to understand

### The test

> "Would Arinze need to pause and re-read this line to understand it?

If yes, it's wrong. Rewrite it.
