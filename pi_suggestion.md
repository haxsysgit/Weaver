1. SessionWeave vs WeaverSession                                                                                                                                                             
                                                                                                                                                                                              
 SessionWeave has a nice ring — "the weave of a session" fits the daemon-of-fate metaphor. It's unusual and memorable. WeaverSession is the conventional Python pattern (AgentSession,        
 AiAgent).                                                                                                                                                                                    
                                                                                                                                                                                              
 But the bigger insight from your comparison docs: Weaver shouldn't have one monolithic session object at all. Pi's AgentSession grew to 3,332 lines. Hermes' AIAgent is similarly large.     
 Both become god objects. Your architecture hypothesis intentionally splits into ConversationRunner, ConversationRepository, RunCoordinator, ContextAssembler, RunEventLog — each owning one  
 concern.                                                                                                                                                                                     
                                                                                                                                                                                              
 So the real question is: what do you name the thin top-level orchestrator that wires them together? SessionWeave works for that. It's the thing that weaves a session from the separate      
 threads. I'd use it.                                                                                                                                                                         
                                                                                                                                                                                              
 ────────────────────────────────────────────────────────────────────────────────                                                                                                             
                                                                                                                                                                                              
 2. RAG, vector search, chunking — are these missing?                                                                                                                                         
                                                                                                                                                                                              
 Your instinct is right: the comparisons focus entirely on conversation infrastructure (how chats survive, how runs coordinate, how memory persists) and say almost nothing about novel       
 comprehension (how Weaver actually understands 3,000+ chapters).                                                                                                                             
                                                                                                                                                                                              
 But that's correct for Plan 006. Here's why:                                                                                                                                                 
                                                                                                                                                                                              
 ┌──────────────────────────────────────────────────────────────┬────────────────────────────┬───────────────────────────────────────────────┐                                                
 │ Concern                                                      │ What it is                 │ Which plan owns it                            │                                                
 ├──────────────────────────────────────────────────────────────┼────────────────────────────┼───────────────────────────────────────────────┤                                                
 │ Conversation identity, runs, recovery, SQLite                │ The container              │ Plan 006                                      │                                                
 ├──────────────────────────────────────────────────────────────┼────────────────────────────┼───────────────────────────────────────────────┤                                                
 │ RAG, chunking, vector/similarity search, retrieval pipelines │ The contents               │ Plan 007+ or its own plan                     │                                                
 ├──────────────────────────────────────────────────────────────┼────────────────────────────┼───────────────────────────────────────────────┤                                                
 │ Context assembly (what goes into the prompt)                 │ The bridge between the two │ Starts in 006 as interface, implemented later │                                                
 └──────────────────────────────────────────────────────────────┴────────────────────────────┴───────────────────────────────────────────────┘                                                
                                                                                                                                                                                              
 Plan 006 settles the container. The ContextAssembler interface is defined here (it reads memory, composes context), but how it retrieves relevant passages — chunking strategies, embedding  
 models, vector DB choice, hybrid search — that's a separate research and implementation cycle.                                                                                               
                                                                                                                                                                                              
 The comparison docs should at minimum acknowledge that retrieval/chunking/vector search plug into ContextAssembler and RelationshipMemoryRepository as separate concerns. Right now they're  
 silent on it, which makes the architecture look like it only cares about conversation plumbing. A single paragraph in each comparison saying "retrieval, chunking, and vector search are     
 separate subsystems that feed into ContextAssembler" would close the gap.                


 3. Plan name                                                                                                                                                                                 
                                                                                                                                                                                              
 "Settle LangGraph boundary" was a good working title for the Pi vs LangGraph audit, but the plan has outgrown it. The plan now decides: domain records, storage ownership, run coordination, 
 memory lifecycle, steering, recovery, and context assembly. LangGraph is one small piece.                                                                                                    
                                                                                                                                                                                              
 Rename to 006-durable-conversation-architecture. The folder, the plan file, the deliverable directory — all of it. The plan header already says "Design Weaver's durable conversation        
 architecture" — just make it the canonical name.                                                                                                                                             
                                                                                                                                                                                              
 ────────────────────────────────────────────────────────────────────────────────                                                                                                             
                                                                                                                                                                                              
 Bottom line: your comparisons are solid on conversation infrastructure but need one section acknowledging retrieval/chunking/vector search as downstream subsystems. SessionWeave is a good  
 name for the thin orchestrator. Rename the plan to match what it actually decides. Want me to apply all of this? 
 