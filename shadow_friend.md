 Here is the same 6-phase roadmap, but with the honest, manageable resource list baked into each phase. Every phase has exactly **1-2 videos and 1-2 articles**. No academic papers, no coding courses, no reference dumps.

---

## Phase 1: The Foundation — Chunking and Embedding

**Learn (2-3 days)**

*Watch these first, in this order:*

1. **"Vector Databases Explained (vs Traditional Databases)"** — YouTube, ~10 min  
   The "librarian who sorts by vibe" analogy. Explains why SQL fails when you search by meaning.

2. **"Semantic Search vs. Keyword Search: What's the Difference?"** — YouTube, ~8 min  
   Uses a pizza menu example to show why keyword search misses intent. Explains the exact problem embeddings solve.

*Then read these:*

3. **"What is a Vector Database?" — Qdrant Official Blog**  
   Simple diagrams. Explains points in space, distance = similarity, and HNSW indexing without math.

4. **"Best Chunking Strategies for RAG (and LLMs) in 2026" — Firecrawl Blog**  
   Compares 7 strategies with real examples and diagrams. You will finish this knowing exactly why you should chunk Shadow Slave by scene, not by token count.

**Analyze**
- Shadow Slave is narrative fiction, not Wikipedia. Open a notes file and write: "For Shadow Slave specifically, this means..."
- Ask: If someone asks "Why did Sunny kill that guy in the Forgotten Shore?", what chunk should come back? The scene? The summary? Both?
- Test chunk sizes mentally: 256 tokens (too small, loses context), 1024 (good scene size), 2048 (might include irrelevant scenes).

**Understand**
- Narrative text needs **scene-aware chunking**. A chunk should be a self-contained unit: a scene, a lore entry, or a dialogue exchange.
- You need multiple chunk types: full scenes for detail, chapter summaries for overview, lore entries for facts.
- Write your decision down: "I will chunk by scene because..."

**Build**
- Set up Qdrant locally (`docker run -p 6333:6333 qdrant/qdrant`).
- Pick your first 50 chapters of Shadow Slave.
- Chunk them by scene (look for scene breaks or dialogue shifts).
- Embed with a good model (BGE-M3 or OpenAI's text-embedding-3-large) and upload to Qdrant.
- Build a simple script: `ask_question("What is Sunny's Aspect?")` → retrieve top 3 chunks → print them.
- **Deliverable:** A working retrieval script that can answer basic lore questions from 50 chapters.

---

## Phase 2: Retrieval That Actually Works — Metadata and Hybrid Search

**Learn (2-3 days)**

*Watch:*

1. **"Building Simple Vector Search in Qdrant" — Qdrant Essentials (YouTube)**  
   Explains collections, points, payloads, and metadata filtering conceptually. No coding required to understand the architecture.

*Read:*

2. **"Semantic vs. Keyword Search: Key Differences for AI Data" — Unstructured.io**  
   The best explanation of why you need both. Uses clear failure examples. You will finish this knowing exactly why your agent needs hybrid search.

3. **"Semantic Search vs. Keyword Search: When to Use Each" — Redis Blog** *(optional, read only if you want a second perspective)*  
   Explains inverted indexes vs. embeddings and the complementary failure modes of each.

**Analyze**
- Look at the questions your Phase 1 script fails on.
- Exact quotes fail with pure vector search. "What did Sunny say to Nephis in chapter 847?" needs keywords, not semantics.
- Character-specific questions need filtering: only search chunks tagged with "Sunny" and "Nephis."

**Understand**
- Vector search finds "vibes." Keyword search finds "facts." A novel agent needs both.
- Metadata (chapter, arc, characters present, chunk type) lets you narrow the search space before doing similarity.
- Re-ranking is the secret step: retrieve 20 candidates, then use a smarter model to pick the best 3.

**Build**
- Add rich metadata to every chunk: `chapter`, `arc`, `characters`, `chunk_type` (scene/summary/lore).
- Implement hybrid search in Qdrant (dense vectors + sparse vectors for BM25 keyword search).
- Add a re-ranker: retrieve 20 candidates with hybrid search, then re-rank to find the best 3.
- Test with hard questions: exact quotes, character comparisons, timeline questions.
- **Deliverable:** A retrieval system that can answer both "What is the Shadow's personality?" and "What did Sunny say when he first entered the Dream Realm?"

---

## Phase 3: The Lore Web — Knowledge Graph

**Learn (3-4 days)**

*Watch:*

1. **"What is a Knowledge Graph?" — Neo4j (YouTube)**  
   Look for the animated explainer using the "detective board with string" analogy. Explains nodes, relationships, and why graphs beat tables for connections.

*Read:*

2. **"How to Build a Knowledge Graph in 7 Steps" — Neo4j Blog**  
   Explains nodes, relationships, and properties with simple examples. No code required.

3. **"How to Build a RAG System on a Knowledge Graph" — Neo4j Blog**  
   Explains why vector-only RAG fails on relationship questions. Directly answers "why does my agent need a graph?"

**Analyze**
- Map out Shadow Slave's core entities: Characters (Sunny, Nephis, Cassie, Mordret), Items (the Shadow, Spell Runes, Memories), Locations (Forgotten Shore, Bright Castle), Factions (the Immortal Flame, the Sovereigns).
- Map relationships: `Sunny --TRUSTS--> Nephis (but warily)`, `Sunny --POSSESSES--> Shadow`, `Shadow --IS_A--> Nightmare Creature`.
- Ask: What questions does the graph answer better than RAG? (e.g., "Who has betrayed Sunny?" requires connecting multiple events across chapters.)

**Understand**
- RAG retrieves text. Graphs retrieve connections. "How are Sunny and Mordret related?" is a graph question. "What did Sunny think about Mordret in chapter 500?" is a RAG question.
- You do not need a perfect graph. Start with ~50 major entities and key relationships.

**Build**
- Build a simple knowledge graph (Neo4j or even a JSON file) with ~50 key entities and their relationships.
- Write a query layer: given a question, decide whether to query the graph, the vector DB, or both.
- Example: "Tell me about Sunny's allies" → graph query for `(:Character)-[:ALLIED_WITH]->(:Character {name: "Sunny"})` → then use RAG to pull specific scenes.
- **Deliverable:** An agent that can answer relationship and timeline questions by combining graph and vector search.

---

## Phase 4: The Brain — LLM with Tools

**Learn (3-4 days)**

*Read:*

1. **"Function Calling with LLMs" — PromptingGuide.ai**  
   Explains the concept clearly: the LLM reads descriptions of available tools and decides which one to use. No code required to understand the architecture.

2. **"What Is Tool Calling?" — IBM** *(optional, read only if you want a second source)*  
   Enterprise-grade but still conceptual. Explains how LLMs recognize when they need external help.

*No video required here.* The concept is simpler than it sounds: you give the LLM a menu of tools, and it picks one based on the user's question.

**Analyze**
- What tools does your agent need?
  1. `search_novel(query, filters)` — your Qdrant hybrid search.
  2. `search_knowledge_graph(entity)` — your graph.
  3. `search_web(query)` — for recent chapters and wiki updates.
  4. `recall_user_fact()` — from conversation memory (Phase 5).
- Ask: When should the agent use which tool? If the user asks about chapter 3100, that is a web search. If they ask about Sunny's early personality, that is the novel DB.

**Understand**
- The LLM is a router and synthesizer, not a knowledge base. Its job is to pick the right tool, read the results, and craft a natural response.
- Bad tool calling is the #1 reason agent projects feel broken. The LLM needs clear descriptions of what each tool does.

**Build**
- Hook up Claude 3.5 Sonnet or GPT-4o with function calling.
- Define your tools with very specific descriptions.
- Build the loop: user asks → LLM picks tool(s) → tool returns context → LLM answers.
- Test edge cases: "What happened in the latest chapter?" (should hit web search), "Why did Sunny and Nephis fight?" (should hit graph + RAG).
- **Deliverable:** A working agent that can intelligently choose between searching the novel, the graph, or the web.

---

## Phase 5: The Friend — Memory and Persona

**Learn (2-3 days)**

*No external tutorials required here.* This phase is almost entirely architectural decision-making and prompt design. The concepts are:
- Conversation memory: buffer memory, summary memory, entity memory.
- Tracking user preferences and opinions over time.
- Prompt engineering for persona and tone.

*If you want one resource:*

1. Search YouTube for **"LLM agent memory explained simply"** and pick a video under 15 minutes that uses a diagram of short-term vs long-term memory.

**Analyze**
- What makes this feel like a friend, not a wiki?
  - It remembers your hot takes: "You said last week that Cassie is overrated."
  - It has its own opinions: "I think Sunny's paranoia is justified, but man, he was harsh there."
  - It knows your progress: "Wait, have you read past the Second Nightmare yet? I don't want to spoil."
- Ask: What user facts are worth storing? (Progress in novel, favorite characters, opinions, running jokes.)

**Understand**
- Episodic memory = what you talked about in past conversations.
- Semantic memory = the lore (your RAG/graph).
- The agent needs both to feel like a continuing friendship.

**Build**
- Add a simple SQLite store for user facts: `user_id`, `fact_type` (opinion/progress/preference), `fact`, `timestamp`.
- Add a conversation summarizer: every 10 messages, summarize the thread and store it.
- Write a system prompt that gives the agent a personality: enthusiastic, slightly sarcastic, deeply knowledgeable, spoiler-aware.
- Add spoiler gating: ask the user their current chapter, and filter retrieval to only chunks before that point.
- **Deliverable:** An agent that remembers you, debates with you, and does not spoil your reading.

---

## Phase 6: Polish — Recent Chapters, Frontend, Deployment

**Learn (2-3 days)**

*No external tutorials required.* This phase is about making practical decisions:
- How will new chapters get into the system? Manual upload? Scraping? RSS?
- Do you want a web UI, a Discord bot, or a Telegram bot?
- What is your latency budget? Should retrieval be under 2 seconds?

**Analyze**
- How will new chapters get into the system?
- What interface feels right for a "friend" agent? A chat UI? A Discord bot?
- What is the latency budget?

**Understand**
- A project is only "done" when someone else can use it. Even a simple Telegram bot makes it real.
- Caching common queries (e.g., "What is an Aspect?") saves API costs.

**Build**
- Build a pipeline to ingest new chapters into Qdrant automatically.
- Add a simple frontend (Next.js or even a Streamlit app) or a Discord bot.
- Add caching for frequent queries.
- Deploy Qdrant on a cheap VPS or keep it local.
- **Deliverable:** A live agent that friends can actually chat with about Shadow Slave.

---

## The Honest Resource Count

| Phase | Videos | Articles | Total |
|---|---|---|---|
| 1 | 2 | 2 | 4 |
| 2 | 1 | 1-2 | 2-3 |
| 3 | 1 | 2 | 3 |
| 4 | 0 | 1-2 | 1-2 |
| 5 | 0-1 | 0 | 0-1 |
| 6 | 0 | 0 | 0 |

**Grand total: ~12 resources across 7 weeks.** Everything else is you thinking, deciding, and building.

Does this feel like something you can actually start tomorrow?