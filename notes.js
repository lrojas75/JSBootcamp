const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    }, {
        title: 'Habbits to work on',
        body: 'Excersice. Eating better'
    }, {
        title: 'Office modification',
        body: 'Get a new seat'
}];

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if(a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        } else if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
        return 0;
    });
}

// Filter returns ALL ocurrences.
const findNotes = function(array, filterText) {
    return array.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(filterText);
        const isBodyMatch = note.body.toLowerCase().includes(filterText);
        return isTitleMatch || isBodyMatch;
    });
}
// console.log(findNotes(notes, 'to'));

sortNotes(notes);
console.log(notes);


