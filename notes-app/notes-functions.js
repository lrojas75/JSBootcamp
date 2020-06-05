// Read existing notes from localStorage
const getSavedNotes = function() {
    const storedNotes = localStorage.getItem('notes');
    if(storedNotes !== null) {
        return JSON.parse(storedNotes);
    } else {
        return [];
    }
}

const removeNote = function(id) {
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id;
    });
    if(noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function(note) {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const buttonEl = document.createElement('button');
    
    buttonEl.textContent = 'x';
    buttonEl.onclick = function() {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    }

    if(note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.href = `/edit.html#${note.id}`;

    noteEl.appendChild(buttonEl);
    noteEl.appendChild(textEl);

    return noteEl;
}
// Store notes in localStorage. notes is an object.
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Render application notes
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.getElementById('notes').innerHTML = '';

    filteredNotes.forEach(function(note) {
        const noteElement = generateNoteDOM(note);
        document.getElementById('notes').appendChild(noteElement);
    });
}