const titleElement = document.getElementById('note_title');
const bodyElement = document.getElementById('note_body');
const removeElement = document.getElementById('remove_note');

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function(note) {
    return note.id === noteId;
});

// Redirect to index if the note doesn't exit.
if(note === undefined) {
    location.assign('/index.html');
}
titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.oninput = function(e) {
    note.title = e.target.value;
    saveNotes(notes);
};
bodyElement.oninput = function(e) {
    note.body = e.target.value;
    saveNotes(notes);   
}
removeElement.onclick = function() {
    removeNote(noteId);
    saveNotes(notes);
    location.assign('/index.html');
}
window.onstorage = function(e) {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find(function(note) {
            return note.id === noteId;
        });
        
        // Redirect to index if the note doesn't exit.
        if(note === undefined) {
            location.assign('/index.html');
        }
        titleElement.value = note.title;
        bodyElement.value = note.body;

    }
}