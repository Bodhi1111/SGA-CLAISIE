#!/usr/bin/env node
// Project-specific orchestration
console.log('🎼 SGA Orchestration for ' + require('path').basename(process.cwd()));
console.log('Running Enhanced Expert + Agent Builder workflow...');
const { spawn } = require('child_process');
const SGA_MAIN = '/Users/joshuavaughan/Desktop/StellarGrowthAutomation';
spawn('npx', ['tsx', SGA_MAIN + '/scripts/run-agent-builder-workflow.ts'], {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: { ...process.env, PROJECT_CONTEXT: require('path').basename(process.cwd()) }
});
