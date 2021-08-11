const fs = require('fs');
const chalk = require('chalk');

const notes = loadNotes();

function getNotes(title) {
  const noteFind = notes.find((note) => note.title === title);

  if (noteFind) {
    console.log('Your note:');
    console.log(chalk.yellow(noteFind.title + ': ') + chalk.blue(noteFind.body));
  } else {
    console.log(chalk.red.inverse('Note Not Found!'));
  }
}

function addNote(title, body) {
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('Note Added!'));
  } else {
    console.log(chalk.red.inverse('Title Taken, Note Not Added'));
  }
}

function removeNote(title) {
  const savedNote = notes.find((note) => note.title !== title);

  if (savedNote) {
    console.log(chalk.green.inverse('Note Removed!'));
  } else {
    console.log(chalk.red.inverse('Note Not Found!'));
  }
  saveNotes([savedNote]);
}

function listNotes() {
  console.log(chalk.redBright('Your Notes'));
  notes.forEach((note) => {
    console.log(chalk.yellow(note.title + ': ') + chalk.blue(note.body));
  });
}

function saveNotes(notes) {
  const dataString = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataString);
}

function loadNotes() {
  try {
    const buffer = fs.readFileSync('notes.json');
    const dataString = buffer.toString();
    return JSON.parse(dataString);
  } catch (e) {
    return [];
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
