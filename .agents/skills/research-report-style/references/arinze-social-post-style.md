# Arinze social post style notes

Use this reference when drafting FRAME/Haxaml posts for LinkedIn first, then adapting to X or Reddit.

## Core voice

Arinze does not want generic founder/LinkedIn polish. Preserve the feeling that he is sharing live research findings, not announcing a finished product.

Good energy:
- raw but readable
- personal and restless
- skeptical of hype
- systems-thinking, not marketing
- honest about unfinished/testing state
- direct enough to feel human
- closer to how a young developer explains an idea on social media, not how a company writes a product note
- simple words, light looseness, and natural phrases like “basically i mean...” when they help the reader follow the thought

Avoid:
- “excited to announce”
- “I built X” framing unless he explicitly asks
- fake CTA endings like “what do you think?”
- carousel/growth-post rhythm
- corporate transition phrases
- generic AI-assistant phrasing like “Honestly, I think...” / “The important thing is...” / overly balanced consultant tone
- overcorrecting grammar until the post loses Arinze’s actual voice
- decorative emojis or random emoji bullets

## LinkedIn layout rule

Anti-generic does not mean unformatted.

For LinkedIn drafts:
- use a blog-like flow first: real paragraphs, clear argument progression, and occasional structured lists
- write the actual post body as paste-ready LinkedIn plain text; LinkedIn posts do not reliably render Markdown `**bold**` or code backticks, so avoid those in the body
- use wording, spacing, numbered lists, and occasional natural emoji for emphasis instead of Markdown syntax
- group related ideas into readable paragraph blocks instead of separating almost every sentence with blank lines
- when rewriting Arinze's posts, do not turn his rough flow into an average LinkedIn explainer with one-line dramatic paragraphs
- if a post starts reading like a polished content template, merge related lines back into normal paragraphs and restore the casual "basically i mean..." reasoning voice
- use bullets/numbered lists only when they clarify structure or create a useful mini-illustration
- avoid LinkedIn newline-poetry: the generic style where every sentence sits alone like a dramatic quote
- mix a few short emphasis moments with normal 2-4 sentence paragraphs
- keep visual rhythm, but do not make it look like a SaaS carousel
- do not write public post bodies like internal series notes; avoid phrases like “Post 1 was...” or “Post 2 is...” unless Arinze explicitly asks for that framing
- LinkedIn posts must be under 3000 characters — if the first draft exceeds this, create a shorter posting version while preserving the tone. Do not kill the voice to fit the limit
- when a shorter version loses the soul of the post (generic phrasing, no personality), rewrite it completely around the same core pain point rather than compressing the original text
- the correct pain point for Post 1 is: agents are already good enough, but the developer/project workflow is not good enough at keeping up with what they generate. Never frame it as "agents don't understand repos"

## Emoji rule

Emojis are allowed only when they feel natural and useful, like Arinze would actually use them. Think casual Gen-Z punctuation/emphasis, not decorative icons.

Allowed vibe:
- “this is cooked 💀” when the tone truly fits
- a single emoji used as a human reaction

Bad vibe:
- 🚀 for every launch
- ✅ bullets everywhere
- decorative emoji labels that make the post feel templated

## FRAME/Haxaml post framing

For FRAME/Haxaml public posts, default to:
- FRAME as typed context architecture / portable project representation
- `frame` as the Python interface/tooling around the standard
- Haxaml as governed runtime/lifecycle around real agent work
- research/testing/progress framing, not finished-product bragging
- “better-shaped project context, not just more context”

Series progression matters. Do not make the first post carry the whole proof. Build audience buy-in first, then earn the technical claims:
1. relatable agent-context pain
2. simple FRAME idea
3. five parts as five jobs, not five files
4. Frame Lab as the testing workshop
5. fixtures and why they create pressure
6. current test progress/findings
7. weight/pressure adjustment method
8. Haxaml as the runtime/tooling layer

Frame Lab evidence should anchor later posts, but Post 1 should not dump scores, fixture reports, weight algorithms, or schema mechanics before readers understand the pain.

For Post 1, do not frame the pain as “agents are not good enough” or “agents cannot understand repos.” The sharper pain is: coding agents are already good enough to generate serious code, but developer/project workflows struggle to keep up with what agents generate, what changed, what rules were followed, and what needs validation.

Post workflow:
1. Draft LinkedIn first.
2. Preserve hook and voice.
3. Add structure/emphasis for legibility.
4. Keep the post’s role in the series narrow; do not compress the whole roadmap into one post.
5. Avoid fake "big closing question" endings. Close with the concrete system point the post proved.
6. Only then morph into X threads and Reddit posts.

For matching social visuals, see `references/arinze-social-visual-style.md`.

For the FRAME LinkedIn series progression, Post 1 role, tone pitfalls, and short-post length workflow, see `references/frame-linkedin-series-workflow.md`.
