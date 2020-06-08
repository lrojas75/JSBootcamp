'use strict'

// Check for stored data
let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

renderNotes(notes, filters);

document.getElementById('create_note').onclick = (e) => {
    const timestamp = moment().valueOf();

    const note = {
        id: uuidv4(),
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp,
    };
    notes.push(note);
    saveNotes(notes);
    location.assign(`/edit.html#${note.id}`);
}
document.getElementById('search_text').oninput = (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
}

document.getElementById('filter_by').onchange = (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
}

window.onstorage = (e) => {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
}