#!/usr/bin/env node

import { Command } from 'commander';
import packageJson from '../package.json';
import { init } from './commands/init';

const main = () => {
  const program = new Command();

  program
    .name('react-usekit')
    .description('CLI to add reusable hooks and utils')
    .version(packageJson.version);

  program.addCommand(init);

  program.parse();
};

main();
