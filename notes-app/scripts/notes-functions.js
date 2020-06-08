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
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const statusEl = document.createElement('p');

    if(note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title');
    noteEl.appendChild(textEl);

    noteEl.href = `/edit.html#${note.id}`;
    noteEl.classList.add('list-item');

    statusEl.textContent = generateLastEdited(note.updatedAt);
    statusEl.classList.add('list-item__subtitle');
    noteEl.appendChild(statusEl);

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
    const notesEl = document.getElementById('notes');
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter( 
        (note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()) 
    );
    
    notesEl.innerHTML = '';
    
    if(filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteElement = generateNoteDOM(note);
            notesEl.appendChild(noteElement);
        });
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to display';
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage);
    }
    
}

const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}