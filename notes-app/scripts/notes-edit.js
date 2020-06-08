'use strict'

const titleElement = document.getElementById('note_title');
const bodyElement = document.getElementById('note_body');
const removeElement = document.getElementById('remove_note');
const dateElement = document.getElementById('last_edit');

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);

// Redirect to index if the note doesn't exit.
if(!note) {
    location.assign('/index.html');
}
titleElement.value = note.title;
bodyElement.value = note.body;

dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.oninput = (e) => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
};
bodyElement.oninput = (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);   
}
removeElement.onclick = () => {
    removeNote(noteId);
    saveNotes(notes);
    location.assign('/index.html');
}
window.onstorage = (e) => {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find( (note) => note.id === noteId );
        
        // Redirect to index if the note doesn't exit.
        if(!note) {
            location.assign('/index.html');
        }
        titleElement.value = note.title;
        bodyElement.value = note.body;
        lastEditElement.textContent = generateLastEdited(note.updatedAt);
    }
}