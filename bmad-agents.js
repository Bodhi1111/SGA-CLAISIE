#!/usr/bin/env node
// Project-specific BMAD agents access  
const { spawn } = require('child_process');
const SGA_MAIN = '/Users/joshuavaughan/Desktop/StellarGrowthAutomation';
const args = ['tsx', SGA_MAIN + '/src/cli.ts', ...process.argv.slice(2)];
spawn('npx', args, { stdio: 'inherit', cwd: process.cwd() });
