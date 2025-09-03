# SGA CLAISIE - BMAD Agent Integration

## Quick Start

### Initialize BMAD Agents with Context
```bash
# 1. Initialize the system
bmad init

# 2. Store project context in memory
bmad agent memory
# Tell it: "Store SGA CLAISIE project context..."

# 3. Use working agents
bmad agent analyst    # For requirements analysis
bmad agent architect  # For system design  
bmad agent developer  # For implementation
bmad agent qa         # For testing strategy
```

### Access Specialized Agents
```bash
# Run Agent Builder directly
node run-agent-builder.js

# Or use direct scripts from main project
cd /Users/joshuavaughan/Desktop/StellarGrowthAutomation
npm run anthropic:ingest  # Anthropic docs expert
npm run videos:ingest     # Video ingestion agent
```

### Working Agents ✅
- **analyst** - Requirements & business analysis
- **architect** - System architecture & design
- **developer** - Code implementation & patterns
- **qa** - Testing strategies & quality assurance
- **memory** - Context storage with Pinecone
- **knowledge** - Information retrieval

### Agents with Issues ❌
- **pm** - Requires structured task format
- **scrum** - Needs specific ceremony schemas

## Knowledge Transfer Notes

The BMAD agents in this project have access to:
- ✅ Pinecone vector memory for context persistence
- ✅ Project-specific knowledge storage
- ✅ Shared memory across sessions
- ✅ Connection to main StellarGrowthAutomation knowledge base