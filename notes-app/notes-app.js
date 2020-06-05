// Check for stored data
let notes = getSavedNotes();

const filters = {
    searchText: ''
};

renderNotes(notes, filters);

document.getElementById('create_note').onclick = function(e) {
    const now = new Date();
    const timestamp = now.getTime();
    const note = {
        id: uuidv4(),
        title: '',
        body: '',
        createdAt: timestamp
    };
    notes.push(note);
    saveNotes(notes);
    location.assign(`/edit.html#${note.id}`);
}
document.getElementById('search_text').oninput = function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
}

document.getElementById('filter_by').onchange = function(e) {
    e.target.value;
}

window.onstorage = function(e) {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
}