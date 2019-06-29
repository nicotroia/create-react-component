#!/usr/bin/env node

const sade = require('sade');

const init = require('./src/init');

const prog = sade('create-react-component').version('1.0.1');

prog
  .command('init')
  .describe('Init a new react component')
  .example('init')
  .action(init);

prog.parse(process.argv);
