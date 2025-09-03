#!/usr/bin/env node
// Quick script to run Agent Builder for SGA CLAISIE project

const { spawn } = require('child_process');

console.log('🏗️  Launching Agent Builder for SGA CLAISIE...');

const child = spawn('npx', ['tsx', '/Users/joshuavaughan/Desktop/StellarGrowthAutomation/scripts/run-agent-builder-workflow.ts'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

child.on('exit', (code) => {
  process.exit(code);
});