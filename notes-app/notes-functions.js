'use strict'

// Read existing notes from localStorage
const getSavedNotes = () => {
    const storedNotes = localStorage.getItem('notes');
    try {
        return  storedNotes ? JSON.parse(storedNotes) : [];
    } catch(e) {
        return [];
    }
}

// Store notes in localStorage. notes is an object.
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id);
    if(noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const buttonEl = document.createElement('button');
    
    buttonEl.textContent = 'x';
    buttonEl.onclick = () => {
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

const sortNotes = (notes, sortBy) => {
    if(sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if(a.updatedAt > b.updatedAt) {
                return -1;
            } else if(a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        });
    } else if(sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if(a.createdAt > b.createdAt) {
                return -1;
            } else if(a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            }
        });
    } else if(sortBy === 'alphabetical'){
        return notes.sort((a, b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if(a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else{
                return 0;
            }
        });
    } else {
        return notes;
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter( 
        (note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()) 
    );
    document.getElementById('notes').innerHTML = '';

    filteredNotes.forEach((note) => {
        const noteElement = generateNoteDOM(note);
        document.getElementById('notes').appendChild(noteElement);
    });
}

const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(note.updatedAt).fromNow()}`;
}