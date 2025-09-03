#!/usr/bin/env node
/**
 * Complete BMAD Agent Access Script for SGA CLAISIE
 * Provides access to ALL agents including specialized ones with orchestration
 */

const { spawn } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
🚀 SGA CLAISIE - Complete BMAD Agent System
==========================================

Available Agents:

📋 CORE BMAD AGENTS (✅ Working):
  1. analyst     - Requirements & business analysis
  2. architect   - System design & architecture
  3. developer   - Implementation & coding patterns
  4. qa         - Testing strategies & quality
  5. memory     - Context storage with Pinecone
  6. knowledge  - Information retrieval
  7. coordinator - Multi-agent orchestration

⚠️  MANAGEMENT AGENTS (Schema Issues):
  8. pm         - Project management (needs structured input)
  9. scrum      - Agile process facilitation (needs structured input)

🔧 SPECIALIZED AGENTS (Direct Access):
  10. builder    - Agent Builder with BMAD methodology
  11. expert     - Anthropic Documentation Expert
  12. enhanced   - Enhanced Anthropic Expert with RAG
  13. video      - Local video ingestion processing

🎼 ORCHESTRATION:
  14. orchestrate - Enhanced Expert + Agent Builder workflow

Choose an agent (1-14) or type 'exit':
`);

function runAgent(agentType) {
  let command, args;
  
  switch(agentType) {
    case '1': case 'analyst':
      command = 'bmad';
      args = ['agent', 'analyst'];
      break;
    case '2': case 'architect':
      command = 'bmad';
      args = ['agent', 'architect'];
      break;
    case '3': case 'developer':
      command = 'bmad';
      args = ['agent', 'developer'];
      break;
    case '4': case 'qa':
      command = 'bmad';
      args = ['agent', 'qa'];
      break;
    case '5': case 'memory':
      command = 'bmad';
      args = ['agent', 'memory'];
      break;
    case '6': case 'knowledge':
      command = 'bmad';
      args = ['agent', 'knowledge'];
      break;
    case '7': case 'coordinator':
      command = 'bmad';
      args = ['agent', 'coordinator'];
      break;
    case '8': case 'pm':
      console.log('⚠️  PM Agent requires structured task format. Try analyst instead.');
      return promptUser();
    case '9': case 'scrum':
      console.log('⚠️  Scrum Agent requires ceremony format. Try coordinator instead.');
      return promptUser();
    case '10': case 'builder':
      command = 'npx';
      args = ['tsx', '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/scripts/run-agent-builder-workflow.ts'];
      break;
    case '11': case 'expert':
      command = 'npx';
      args = ['tsx', '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/scripts/run-anthropic-ingestion-workflow.ts'];
      break;
    case '12': case 'enhanced':
      console.log('🔧 Enhanced Expert requires Supabase setup. Running standard expert...');
      command = 'npx';
      args = ['tsx', '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/scripts/run-anthropic-ingestion-workflow.ts'];
      break;
    case '13': case 'video':
      command = 'npx';
      args = ['tsx', '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/scripts/run-video-ingestion-complete.ts'];
      break;
    case '14': case 'orchestrate':
      console.log('🎼 Orchestration: Enhanced Expert + Agent Builder');
      console.log('This will run the Enhanced Expert to analyze your request, then use Agent Builder.');
      console.log('Starting with Enhanced Expert analysis...');
      command = 'npx';
      args = ['tsx', '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/scripts/run-anthropic-ingestion-workflow.ts'];
      break;
    case 'exit':
      console.log('👋 Goodbye!');
      process.exit(0);
    default:
      console.log('❌ Invalid selection. Please choose 1-14 or type exit.');
      return promptUser();
  }

  console.log(`🚀 Launching ${agentType} agent...\n`);
  
  const child = spawn(command, args, {
    stdio: 'inherit',
    cwd: process.cwd(),
    env: { ...process.env, PROJECT_CONTEXT: 'SGA_CLAISIE' }
  });

  child.on('exit', (code) => {
    console.log(`\n✅ Agent session ended. Code: ${code}\n`);
    promptUser();
  });
}

function promptUser() {
  rl.question('Select agent (1-14) or "exit": ', (answer) => {
    runAgent(answer.trim());
  });
}

promptUser();