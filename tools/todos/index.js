#! /usr/bin/env node

const { program } = require('commander');

const setGreeting = require('./commands/setGreeting');
const list = require('./commands/list');
const add = require('./commands/add');
const deleteAll = require('./commands/deleteAll');
const deleteTasks = require('./commands/delete');
const completed = require('./commands/completed');

program
  .command('setGreeting <greeting>')
  .description('Set greeting message')
  .action(setGreeting);

program
  .command('list')
  .description('List all the TODO tasks')
  .action(list);

program
  .command('add <task>')
  .description('Add a new TODO task')
  .action(add);

program
  .command('completed')
  .description('To mark completed the TODO tasks')
  .option('-t, --tasks <tasks...>', 'The tasks to mark completed')
  .action(completed)

program
  .command('delete')
  .description('Delete selected TODO tasks')
  .option('-t, --tasks <tasks...>', 'Delete selected tasks')
  .action(deleteTasks);

program
  .command('delete-all')
  .description('Delete all TODO tasks')
  .action(deleteAll);



program.parse();