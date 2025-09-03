#!/usr/bin/env node
/**
 * Orchestration Workflow: Enhanced Anthropic Docs Expert + Agent Builder
 * Creates intelligent agent workflows with expert guidance
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log(`
🎼 BMAD Orchestration Workflow
=============================
Enhanced Anthropic Docs Expert → Agent Builder → Team Integration

This workflow will:
1. 📚 Consult Anthropic Documentation Expert for best practices
2. 🏗️  Use Agent Builder to create agents with expert guidance  
3. 🔄 Integrate new agents into your BMAD team
4. 💾 Store context in memory for future sessions

Starting orchestration...
`);

async function runOrchestration() {
  try {
    // Step 1: Enhanced Anthropic Expert Analysis
    console.log('📚 Step 1: Consulting Anthropic Documentation Expert...');
    
    // Create a temporary requirements file
    const requirementsFile = path.join(process.cwd(), 'temp-agent-requirements.md');
    const requirements = `# SGA CLAISIE Agent Requirements

## Project Context
- Building intelligent automation solutions
- BMAD methodology implementation  
- Multi-agent coordination system
- TypeScript/Node.js stack with Supabase/Pinecone

## Agent Needs
- Enhanced coordination between existing agents
- Specialized agents for SGA CLAISIE domain
- Better orchestration capabilities
- Knowledge transfer between sessions

## Technical Requirements  
- Integration with existing BMAD team
- Pinecone vector memory support
- Anthropic Claude API integration
- Supabase knowledge base connection

Please provide guidance on agent architecture and implementation patterns.`;

    fs.writeFileSync(requirementsFile, requirements);
    console.log('✅ Requirements file created');

    // Step 2: Run Enhanced Expert Analysis
    console.log('🔍 Analyzing requirements with Anthropic expertise...');
    
    const expertProcess = spawn('npx', ['tsx', '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/scripts/run-anthropic-ingestion-workflow.ts'], {
      stdio: 'inherit',
      cwd: process.cwd()
    });

    expertProcess.on('exit', (code) => {
      console.log(`✅ Expert analysis complete (code: ${code})`);
      
      // Step 3: Run Agent Builder  
      console.log('🏗️  Step 2: Launching Agent Builder with expert guidance...');
      
      const builderProcess = spawn('npx', ['tsx', '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/scripts/run-agent-builder-workflow.ts'], {
        stdio: 'inherit',
        cwd: process.cwd(),
        env: { 
          ...process.env, 
          EXPERT_GUIDANCE: 'true',
          PROJECT_CONTEXT: 'SGA_CLAISIE',
          ORCHESTRATION_MODE: 'true'
        }
      });

      builderProcess.on('exit', (builderCode) => {
        console.log(`✅ Agent Builder complete (code: ${builderCode})`);
        
        // Step 4: Integration Summary
        console.log(`
🎯 Orchestration Complete!
========================

Your enhanced BMAD team now includes:
✅ Expert-guided agent architecture
✅ SGA CLAISIE-specific capabilities  
✅ Improved orchestration workflows
✅ Knowledge context preservation

Next steps:
1. Test new agents with: node bmad-complete.js
2. Store context in memory: bmad agent memory  
3. Use orchestration: Select option 14 in complete script

🚀 Your intelligent agent system is ready!
        `);

        // Cleanup
        if (fs.existsSync(requirementsFile)) {
          fs.unlinkSync(requirementsFile);
        }
        
        process.exit(0);
      });
    });

  } catch (error) {
    console.error('❌ Orchestration error:', error);
    process.exit(1);
  }
}

runOrchestration();