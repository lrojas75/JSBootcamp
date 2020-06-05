# JSBootcamp
## Array functions
Example array:
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

find(cbFunction):
    Returns the first element that matches the criteria.
    ```
    const findNote = function(notes, noteTitle) {
        return notes.find(function(note, index) {
            return note.title.toLowerCase() === noteTitle.toLowerCase();
        });
    }; ```

findIndex(cbFunction):
    Same as find() but instead of returning the element, it returns the index of the element.
    ````
    const findNote = function(notes, noteTitle) {
        const index = notes.findIndex(function(note, index) {
            return note.title.toLowerCase() === noteTitle.toLowerCase();
        });
        return notes[index];
    }; ```

filter(cbFunction):
    Returns a list of elements that match a criteria.
    Receives a callback function which determines the criteria to filter. When **true** is returned, the element is
    added to the return array.
    ``` 
    const findNotes = function(array, filterText) {
        return array.filter(function(note, index) {
            const isTitleMatch = note.title.toLowerCase().includes(filterText);
            const isBodyMatch = note.body.toLowerCase().includes(filterText);
            return isTitleMatch || isBodyMatch;
        });
    }```

sort(cbFunction?):
    Organizes an array alphabetically by default.
    It can receive a callback function as a parameter to organize based on a specific criteria. The callback function
    receives two paramaters (ex: a,b) to compare them on each iteration.
    Inside the callback function, 1 should be returned if a is more that b, -1  if a is less than b and 0 if they are equal.
    ```let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.sort(),¡;
        // Returns: Apple,Banana,Mango,Orange ```

splice():
    To delete an item from an array: splice(index, num of elements to delete)
    --> index determines the position from which the delete process starts.
        It deletes the element at that position and the ones after if specified in second argument.
    To add an item to an array: splice(index, 0, element)
    ``` notes.splice(2, 1); // Removes third item. ```

shift():
    Removes the first element of the array.
    ``` notes.shift(); ```

push(element): 
    Adds an element to the end of the array.
    ``` notes.push('Last note'); ```

forEach(cbFunction):
    Receives a callback function to call during each iteration over the items of the array.
    ``` 
    todos.forEach(function(item, index, arr){
        console.log(`${index}. ${item} -- Array: ${arr}`); 
    }); ````

indexOf(element):
    Receives the element that we would like to know the current index inside the array.
    Returns the index of the element when its found and -1 when its not found.
    ** It can't be used with an array of objects because it uses === to compare the elements. **
    ** Two objects are the same when they have the same reference in memory. **
    ```const array = ['First item', 'Second item', 'Third item'];
    notes.indexOf('Third Item'); //Returns 2```

## Local Storage functions
 ** localStorage only stores strings **
```localStorage.setItem('location', 'Philadelphia'); // Store
const result = localStorage.getItem('location'); // Retrieve
localStorage.removeItem('location'); //Delete
localStorage.clear(); // Delete all stored data in localStorage

const user = {
    name:'Luis',
    age: 30
}
Turns object to string
const userJSON = JSON.stringify(user);
JSON.parse(string) --> turns string to object.
```

## Debug
'debugger' keyword inside js code causes the browser to pause execution wherever that keyword is found
and opens the browser's debugging tools.

## UUID
File /utilities/uuidv4.js contains a library to create uuids. The function to call is uuidv4().
Create the file with the content of uuidv4.js and import it into the project.

## Sync data
**window.onstorage** listener function allows me to know when data has change in one of the tabs so the
other tabs (with same app opened) get notified.
New value lives inside 'e' variable of the event. It has the attributes 'newValue' and 'oldValue'.

## Dates
```
const now = new Date();
const timestamp = now.getTime(); Returns a number representing the recent date and time. This number is generated
taking into account the **Unix Epoch** which is January 1st 1970 00:00:00.
const myDate = new Date(timestamp);
myDate.getFullYear();
myDate.getMonth();
myDate.getDate(); --Day of month
myDate.getHours();
myDate.getMinutes();
myDate.getSeconds();
```