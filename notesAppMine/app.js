//core modules
const fs = require('fs');
//npm modules
const chalk = require('chalk');
const yargs = require('yargs');
//my modules
const notes = require('./notes.js');
const { getNotes } = require('./notes.js');

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Title of Note Removing',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//List command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    notes.listNotes();
  },
});
//Read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    getNotes(argv.title);
  },
});

yargs.parse();
