---
name: technology-research
description: "Research a new tool, product, technology, or competitor by scraping its docs, extracting key differentiators, comparing to alternatives the user already knows, and delivering a verdict."
---

# Technology Research and Comparison

Use this when the user asks you to investigate a new tool, product, framework, or competitor — "check out X," "how does Y compare to what we use," "tell me about Z."

## Workflow

### 1. Map the territory

Before diving into any specific page, understand the shape of the docs:
- What pages exist? (Overview, Install, Configuration, Features, API, etc.)
- What's the product's primary claim? (faster, simpler, more features, open-source, etc.)
- Is there a landing page or README that states the thesis?

Navigate to the docs homepage first, then list all sections via the navigation.

### 2. Scrape thoroughly, not skimming

Read multiple pages in full. The user can tell when you only read the landing page. Minimum pages to read:
- Overview / landing page (the thesis)
- Key features or capabilities page
- Configuration / setup (shows complexity trade-offs)
- Any page about architecture or how it works
- Any comparison page or FAQ (if it exists)

Use browser_navigate for SPA sites, or browser_console + `document.body.innerText` for content extraction.

### 3. Extract differentiators

For each feature, ask: "Does this exist in the tools the user already uses?" If yes, note the difference in implementation/quality. If no, that's a differentiator.

Create a structured comparison. The structure should map to how the user thinks about their own stack.

### 4. Structure the output

Lead with the bottom line, not the article structure:

```
## What X Is

One-paragraph summary of what the product is and what it does.

## How It's Different

| Feature | X | User's Stack (e.g., Hermes) |
|---------|---|---------------------------|
| ... | ... | ... |

## What X Doesn't Have (That User's Stack Does)

Honest trade-offs. What does the user lose by switching?

## The Bottom Line

Direct verdict. Should they try it? Is it worth watching? Is it irrelevant?
```

### 5. Reference the user's actual stack

Do not compare to generic alternatives. Compare to what the user actually runs. For Arinze, that's Hermes Agent (both local and VPS instances), FRAME, Haxaml, their specific tooling.

When comparing, reference real features the user has used in this session — recent tool calls, recent conversations — to ground the comparison in lived experience, not abstract feature lists.

### 6. Be honest about trade-offs

Don't just pitch the new thing. State clearly:
- What it does better
- What it does worse
- What it simply doesn't do
- Whether it's open-source (for Arinze this matters)
- Install/setup complexity

## Tutorial/video research variant

Use this when the user asks for current tutorials, YouTube videos, courses, or hands-on learning resources for a technology.

1. Search live. Do not answer from model memory.
2. Pull transcripts/captions when possible. Judge videos by transcript content, not just title, description, thumbnail, or upload date.
3. Reject videos with missing or too-short transcripts unless the user explicitly accepts title-level curation.
4. Score for the user's actual learning need: conceptual fit, hands-on depth, recency, transcript quality, and relevance to the user's stack.
5. Final output should include: title, URL, date, length, why it fits, transcript evidence, and any rejection notes for tempting but weak options.
6. Order resources as a learning path, not a random list: fundamentals first, tool quickstart second, full project last.

## Pitfalls

- **Don't just read the landing page.** The marketing page overstates everything. The real differentiators are in the documentation details.
- **Don't skip the "what's missing" section.** Every comparison needs trade-offs, not just praise.
- **Don't compare to generic alternatives.** Compare to the user's actual stack. "Better than VS Code" is useless. "Better than Hermes in these specific ways" is valuable.
- **No "wow this is amazing" energy.** Be grounded and analytical. The user wants to make a real decision.
- **For video/tutorial recommendations, don't just give links.** Use transcripts or equivalent source text to verify the resource actually teaches the requested topic.
- **Output comparison to the current conversation, not a file save** (unless the user asks for a durable reference). This is different from the "teach from external content" workflow which saves a basics.md.
