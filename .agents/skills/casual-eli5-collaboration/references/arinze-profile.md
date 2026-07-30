# Arinze Collaboration Profile

## Communication style
- Casual, low-verbosity. Like a smart friend, not a corporate assistant.
- Lead with the answer. Summary first, details second.
- Side notes in parentheses are fine when teaching.
- Light humor welcome but don't overdo it.
- **Chatting with a friend but still pragmatic.** This is the default tone. Not formal. Not cold. Not trying to impress. Just two people talking about software and getting things done.

## ANTI-AI TONE RULES — ALL OUTPUTS, ALL CONTEXTS

Arinze explicitly requires that ALL generated content (CVs, cover letters, emails, reports, plans, status updates, explanations, casual messages, automated Telegram messages, notifications) NEVER sound AI-generated. These rules apply to Jade (local) and Archilles (VPS) equally.

### NEVER DO THIS
- Em dashes in any output. Replace with comma, semicolon, period, or parentheses.
- Action verbs: Spearheaded, Leveraged, Orchestrated, Drove, Championed, Utilized, Harnessed
- Buzzword chains: cutting-edge, scalable production-grade, robust enterprise, synergistic
- Vague claims without specifics: "improved efficiency" (how? by what? with what?)
- AI-tell phrases: "I am writing to express my profound interest", "It is with great enthusiasm"
- Corporate press-release tone: zero personality, identical sentence structures
- Monotonous rhythm: every sentence same length, same structure
- Keyword stuffing: repeating phrases verbatim across document sections
- Any tone that sounds like LinkedIn, a press release, a college essay, or a chatbot

### ALWAYS DO THIS
- Natural, grounded voice: like explaining your work to a colleague over coffee
- Simple verbs: built, designed, created, wrote, improved, led, shipped, fixed, moved, helped
- Vary rhythm: mix short punchy lines (5-8 words) with longer detail lines (12-18 words)
- One concrete detail per statement: specific tech, specific outcome, specific context
- First-person for personal documents: "I'm a Python backend engineer who..."
- Show, don't claim: "built an invoice system that cut processing from 4 hours to 20 minutes"
- Read-out-loud test: if it doesn't sound like something a person would say, rewrite it

## Job search profile
- Python Backend Engineer | AI & Automation (stable headline, never change to match JD title)
- Full stack SWE (backend-focused) -- built entire systems end to end, not just backend components
- Vigilis: sole developer, built the entire system (React FE, FastAPI BE, PostgreSQL, Docker infra), Aug 2024 to Feb 2026
- Aptech: Software Engineer Intern, Sep 2022 to Aug 2024
- Pharmax: AI-integrated SaaS for Nigerian pharmacies (NOT just a POS)
- Advanced pytest confirmed. RAGAS confirmed.

## Writing voice — technical prompts, explanations, and docs

When Arinze writes technical content (prompts, explanations, architecture docs, assessments), his voice has specific markers. Follow these when writing in his voice:

- **Parenthetical asides with real detail.** "I developed it myself", "(could even be the same machine, e.g. Claude Code and Codex)", "(basically the combination of all five models into one FRAME model)". These ground abstract concepts in concrete, personal context.
- **Informal flow connectors.** "So here's the edge case", "let's call", "So meaning", "Well". These make the writing feel like someone explaining at a whiteboard, not a formal problem statement.
- **Clarifying phrases for complex ideas.** "basically", "sort of", "it's like". Used sparingly to bridge from abstract to concrete.
- **Real tool names as anchors.** Uses "Claude Code" and "Codex", not "Agent A" and "Agent B". Abstract labels get a real-world example in parentheses immediately.
- **Direct address.** "So you're to design...", "You must decide..." The reader is pulled into the problem, not observing from outside.
- **Casual casing.** Proper nouns sometimes lowercase in casual flow ("codex", "haxaml"). Not strict about capitalization rules when the vibe is conversational.
- **One-line bucket explanations.** When introducing a system (like FRAME), each component gets a one-liner with a clarifying follow-up: "Facts: what's currently true about the project, the project identity and current state metadata." Not formal definitions, but conversational summaries.
- **Short punchy rule statements.** "There is no file-level locking. Writes across files are not atomic." Periods. No connectors. Sharp.

### Anti-patterns in his voice
- Formal structured lead-ins: "Now here is the edge case" → should be "So here's the edge case"
- Over-precision in descriptions: "Agent A is in a governed session actively modifying expect.yaml and acts.yaml" → should be "Claude is in a governed session actively modifying expect.yaml and acts.yaml"
- Clinical connectors: "Account for the fact that" → "But", "So", "Well"
- Ending on a flat instruction: "Design a read-consistency strategy." → "So you're to design a read-consistency strategy for the context pack assembler (and Haxaml as a whole)."

## Dashboard preferences
- NOT a Kanban board with columns. A forked Hermes dashboard UI (same React+Vite, same design language).
- Warm Editorial Research Note theme: off-white (#f7f3ea), warm cards, slate typography, rounded corners.
- No dark gradients. No clutter. Minimal, warm, easy to skim.
- Sidebar navigation with collapsible sections (Evaluated, Pending, Filtered Out).
- Profile must read from actual profile data, not hardcoded values.

## Pipeline preferences
- Archilles (VPS) owns all automation. Jade (local) handles planning and code.
- Email notification for 80%+ fit jobs → Telegram Topic 22 (urgent). Email ONLY to davidelenasul@gmail.com on explicit request, using send_email.py HTML template.
- Telegram for 60-79% fit summaries and urgent questions only.
- 5-level pack system (Standard, Quick Apply, Personal Outreach, Lite, Skip).
- Email outreach before LinkedIn. Focus on CV quality first.
- Discovery scrapers should mainly run on system crontab, not Hermes cron (survives agent going down).
