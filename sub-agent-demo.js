#!/usr/bin/env node
/**
 * Sub-Agent Factory Demo & Testing System
 * Interactive demonstration of hierarchical agent orchestration
 */

const { spawn } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
🎭 Sub-Agent Factory Demo - SGA CLAISIE
========================================

Hierarchical Agent Orchestration System

Available Demos:

🏗️  ARCHITECTURE DEMOS:
  1. code-analysis     - Analyze code structure and quality
  2. api-design        - Design REST APIs with sub-agents
  3. requirements      - Break down complex requirements
  4. test-generation   - Generate comprehensive test suites
  5. documentation     - Create multi-level documentation

🎼 ORCHESTRATION DEMOS:
  6. developer-workflow - Developer agent + 3 sub-agents
  7. architect-design   - Architect agent + design sub-agents  
  8. analyst-breakdown  - Requirements analysis with sub-agents
  9. complex-task      - Multi-agent task decomposition

🔧 SUB-AGENT TOOLS:
  10. factory-status   - View Sub-Agent Factory status
  11. create-subagent  - Manually create a sub-agent
  12. orchestrate      - Run custom orchestration
  13. performance-test - Load test sub-agent system

Choose a demo (1-13) or type 'exit':
`);

function runDemo(demoType) {
  let command, args, description;
  
  switch(demoType) {
    case '1': case 'code-analysis':
      description = '🔍 Code Analysis Sub-Agent Demo';
      command = 'npx';
      args = ['tsx', '-e', createCodeAnalysisDemo()];
      break;
      
    case '2': case 'api-design':
      description = '🏗️ API Design Sub-Agent Demo';
      command = 'npx';
      args = ['tsx', '-e', createAPIDesignDemo()];
      break;
      
    case '3': case 'requirements':
      description = '📋 Requirements Analyzer Sub-Agent Demo';
      command = 'npx';
      args = ['tsx', '-e', createRequirementsDemo()];
      break;
      
    case '6': case 'developer-workflow':
      description = '👨‍💻 Developer Agent + Sub-Agents Orchestration';
      command = 'npx';
      args = ['tsx', '-e', createDeveloperWorkflowDemo()];
      break;
      
    case '7': case 'architect-design':
      description = '🏛️ Architect Agent + Design Sub-Agents';
      command = 'npx';
      args = ['tsx', '-e', createArchitectWorkflowDemo()];
      break;
      
    case '10': case 'factory-status':
      description = '📊 Sub-Agent Factory Status';
      command = 'npx';
      args = ['tsx', '-e', createFactoryStatusDemo()];
      break;
      
    case 'exit':
      console.log('👋 Goodbye!');
      process.exit(0);
      
    default:
      console.log('❌ Invalid selection. Please choose 1-13 or type exit.');
      return promptUser();
  }

  console.log(\`\n🚀 \${description}\n\`);
  console.log('Running sub-agent demo...');
  
  const child = spawn(command, args, {
    stdio: 'inherit',
    cwd: process.cwd(),
    env: { 
      ...process.env, 
      PROJECT_CONTEXT: 'SGA_CLAISIE',
      DEMO_MODE: 'true'
    }
  });

  child.on('exit', (code) => {
    console.log(\`\n✅ Demo completed. Code: \${code}\n\`);
    promptUser();
  });

  child.on('error', (error) => {
    console.error('❌ Demo error:', error.message);
    promptUser();
  });
}

function createCodeAnalysisDemo() {
  return \`
import { SubAgentFactory } from '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/src/sub-agents/core/SubAgentFactory';

async function demo() {
  console.log('🔍 Code Analysis Sub-Agent Demo');
  console.log('================================\\n');
  
  const factory = SubAgentFactory.getInstance();
  
  try {
    // Create code analysis sub-agent
    console.log('1. Creating Code Analysis Sub-Agent...');
    const subAgent = await factory.createSubAgent('developer-001', {
      type: 'code-analysis',
      name: 'SGA CLAISIE Code Analyzer'
    });
    
    // Sample TypeScript code to analyze
    const sampleCode = \\\`
    interface User {
      id: string;
      name: string;
      email: string;
    }
    
    class UserService {
      private users: User[] = [];
      
      async createUser(userData: Partial<User>): Promise<User> {
        const user = { 
          id: Math.random().toString(36),
          ...userData 
        } as User;
        this.users.push(user);
        return user;
      }
      
      async findUser(id: string): Promise<User | undefined> {
        return this.users.find(u => u.id === id);
      }
    }
    \\\`;
    
    // Analyze code structure
    console.log('2. Analyzing code structure...');
    const structureResult = await subAgent.execute({
      id: 'task-1',
      type: 'analyze-structure',
      parentAgentId: 'developer-001',
      input: { code: sampleCode }
    });
    
    console.log('📊 Structure Analysis Results:');
    console.log(JSON.stringify(structureResult.result, null, 2));
    
    // Check code quality
    console.log('\\n3. Checking code quality...');
    const qualityResult = await subAgent.execute({
      id: 'task-2',
      type: 'check-quality',
      parentAgentId: 'developer-001',
      input: { code: sampleCode }
    });
    
    console.log('📊 Quality Analysis Results:');
    console.log(JSON.stringify(qualityResult.result, null, 2));
    
    // Get improvement suggestions
    console.log('\\n4. Getting improvement suggestions...');
    const improvementResult = await subAgent.execute({
      id: 'task-3',
      type: 'suggest-improvements',
      parentAgentId: 'developer-001',
      input: { code: sampleCode }
    });
    
    console.log('💡 Improvement Suggestions:');
    console.log(JSON.stringify(improvementResult.result, null, 2));
    
    // Cleanup
    console.log('\\n5. Cleaning up...');
    await factory.destroySubAgent(subAgent.id);
    
    console.log('\\n✅ Code Analysis Demo Complete!');
    
  } catch (error) {
    console.error('❌ Demo error:', error);
  }
}

demo().catch(console.error);
\`;
}

function createAPIDesignDemo() {
  return \`
import { SubAgentFactory } from '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/src/sub-agents/core/SubAgentFactory';

async function demo() {
  console.log('🏗️ API Design Sub-Agent Demo');
  console.log('=============================\\n');
  
  const factory = SubAgentFactory.getInstance();
  
  try {
    // Create API design sub-agent
    console.log('1. Creating API Design Sub-Agent...');
    const subAgent = await factory.createSubAgent('architect-001', {
      type: 'api-design',
      name: 'SGA CLAISIE API Designer'
    });
    
    // Design REST API for SGA CLAISIE
    console.log('2. Designing REST API for SGA CLAISIE...');
    const apiResult = await subAgent.execute({
      id: 'api-design-1',
      type: 'design-rest-api',
      parentAgentId: 'architect-001',
      input: { 
        entities: ['User', 'Project', 'Agent', 'Task'],
        operations: ['create', 'read', 'update', 'delete', 'list']
      }
    });
    
    console.log('📊 API Design Results:');
    console.log(JSON.stringify(apiResult.result, null, 2));
    
    // Create OpenAPI specification
    console.log('\\n3. Creating OpenAPI specification...');
    const openApiResult = await subAgent.execute({
      id: 'openapi-1',
      type: 'create-openapi-spec',
      parentAgentId: 'architect-001',
      input: { 
        apiDesign: apiResult.result,
        entities: ['User', 'Project', 'Agent', 'Task']
      }
    });
    
    console.log('📄 OpenAPI Specification:');
    console.log(JSON.stringify(openApiResult.result, null, 2));
    
    // Design authentication
    console.log('\\n4. Designing authentication...');
    const authResult = await subAgent.execute({
      id: 'auth-1',
      type: 'design-authentication',
      parentAgentId: 'architect-001',
      input: { 
        requirements: { type: 'JWT', security: 'high' }
      }
    });
    
    console.log('🔐 Authentication Design:');
    console.log(JSON.stringify(authResult.result, null, 2));
    
    // Cleanup
    console.log('\\n5. Cleaning up...');
    await factory.destroySubAgent(subAgent.id);
    
    console.log('\\n✅ API Design Demo Complete!');
    
  } catch (error) {
    console.error('❌ Demo error:', error);
  }
}

demo().catch(console.error);
\`;
}

function createRequirementsDemo() {
  return \`
import { SubAgentFactory } from '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/src/sub-agents/core/SubAgentFactory';

async function demo() {
  console.log('📋 Requirements Analyzer Sub-Agent Demo');
  console.log('=======================================\\n');
  
  const factory = SubAgentFactory.getInstance();
  
  try {
    console.log('1. Creating Requirements Analyzer Sub-Agent...');
    const subAgent = await factory.createSubAgent('analyst-001', {
      type: 'requirements-analyzer',
      name: 'SGA CLAISIE Requirements Analyzer'
    });
    
    const requirements = [
      'The system must allow users to create and manage AI agents',
      'Users should be able to orchestrate multiple agents for complex tasks',
      'The application must provide real-time monitoring of agent activities',
      'Integration with external APIs should be supported',
      'The system should have role-based access control',
      'Performance must be optimized for concurrent agent execution'
    ];
    
    console.log('2. Analyzing requirements...');
    const analysisResult = await subAgent.execute({
      id: 'req-analysis-1',
      type: 'analyze-requirements',
      parentAgentId: 'analyst-001',
      input: { requirements }
    });
    
    console.log('📊 Requirements Analysis:');
    console.log(JSON.stringify(analysisResult.result, null, 2));
    
    console.log('\\n3. Generating user stories...');
    const storiesResult = await subAgent.execute({
      id: 'user-stories-1',
      type: 'generate-user-stories',
      parentAgentId: 'analyst-001',
      input: { 
        requirements,
        personas: [
          { role: 'Developer', needs: ['efficiency', 'control'] },
          { role: 'Business User', needs: ['simplicity', 'results'] }
        ]
      }
    });
    
    console.log('📝 Generated User Stories:');
    console.log(JSON.stringify(storiesResult.result, null, 2));
    
    console.log('\\n4. Estimating complexity...');
    const complexityResult = await subAgent.execute({
      id: 'complexity-1',
      type: 'estimate-complexity',
      parentAgentId: 'analyst-001',
      input: { requirements }
    });
    
    console.log('⚡ Complexity Estimation:');
    console.log(JSON.stringify(complexityResult.result, null, 2));
    
    console.log('\\n5. Cleaning up...');
    await factory.destroySubAgent(subAgent.id);
    
    console.log('\\n✅ Requirements Analysis Demo Complete!');
    
  } catch (error) {
    console.error('❌ Demo error:', error);
  }
}

demo().catch(console.error);
\`;
}

function createDeveloperWorkflowDemo() {
  return \`
console.log('👨‍💻 Developer Workflow with Sub-Agents');
console.log('This would demonstrate a developer agent orchestrating:');
console.log('- Code Analysis Sub-Agent');
console.log('- Test Generator Sub-Agent');
console.log('- Documentation Sub-Agent');
console.log('\\n🚧 Full implementation coming soon!');
\`;
}

function createArchitectWorkflowDemo() {
  return \`
console.log('🏛️ Architect Workflow with Sub-Agents');
console.log('This would demonstrate an architect agent orchestrating:');
console.log('- API Design Sub-Agent');
console.log('- Database Design Sub-Agent');
console.log('- Security Analysis Sub-Agent');
console.log('\\n🚧 Full implementation coming soon!');
\`;
}

function createFactoryStatusDemo() {
  return \`
import { SubAgentFactory } from '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/src/sub-agents/core/SubAgentFactory';

async function demo() {
  console.log('📊 Sub-Agent Factory Status Demo');
  console.log('=================================\\n');
  
  const factory = SubAgentFactory.getInstance();
  
  console.log('📈 Factory Metrics:');
  const metrics = factory.getSubAgentMetrics();
  console.log(JSON.stringify(metrics, null, 2));
  
  console.log('\\n🏗️ Available Sub-Agent Types:');
  const types = ['analyst', 'architect', 'developer', 'qa'].forEach(parentType => {
    const availableTypes = factory.getAvailableSubAgentTypes(parentType);
    console.log(\\\`\\\${parentType}: [\\\${availableTypes.join(', ')}]\\\`);
  });
  
  console.log('\\n🔄 Active Sub-Agents:');
  const active = factory.listActiveSubAgents();
  console.log(\\\`Currently active: \\\${active.length} sub-agents\\\`);
  
  console.log('\\n✅ Factory Status Demo Complete!');
}

demo().catch(console.error);
\`;
}

function promptUser() {
  rl.question('Select demo (1-13) or "exit": ', (answer) => {
    runDemo(answer.trim());
  });
}

promptUser();