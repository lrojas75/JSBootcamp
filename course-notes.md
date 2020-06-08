# JSBootcamp

## Array functions
```
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
    // Returns the first element that matches the criteria.
    const findNote = function(notes, noteTitle) {
        return notes.find(function(note, index) {
            return note.title.toLowerCase() === noteTitle.toLowerCase();
        });
    };

findIndex(cbFunction):
    // Same as find() but instead of returning the element, it returns the index of the element.
    const findNote = function(notes, noteTitle) {
        const index = notes.findIndex(function(note, index) {
            return note.title.toLowerCase() === noteTitle.toLowerCase();
        });
        return notes[index];
    };

filter(cbFunction):
    // Returns a list of elements that match a criteria.
    /* Receives a callback function which determines the criteria to filter. When **true** is returned, the element is
    added to the return array. */
    const findNotes = function(array, filterText) {
        return array.filter(function(note, index) {
            const isTitleMatch = note.title.toLowerCase().includes(filterText);
            const isBodyMatch = note.body.toLowerCase().includes(filterText);
            return isTitleMatch || isBodyMatch;
        });
    }

sort(cbFunction?):
    Organizes an array alphabetically by default.
    
    It can receive a callback function as a parameter to organize based on a specific criteria. The callback function
    receives two paramaters (ex: a,b) to compare them on each iteration. */
    
    Inside the callback function, 1 should be returned if a is more than b, -1  if a is less than b and 0 if they are equal.
    
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    Returns: Apple,Banana,Mango,Orange

splice():
    To delete an item from an array: splice(index, num of elements to delete)
    --> index determines the position from which the delete process starts.
        It deletes the element at that position and the ones after if specified in second argument.
    To add an item to an array: splice(index, 0, element)
    notes.splice(2, 1); // Removes third item.

shift():
    Removes the first element of the array.
    notes.shift();

push(element): 
    Adds an element to the end of the array.
    notes.push('Last note');

forEach(cbFunction):
    Receives a callback function to call during each iteration over the items of the array.
    todos.forEach(function(item, index, arr){
        console.log(`${index}. ${item} -- Array: ${arr}`); 
    });

indexOf(element):
    Receives the element that we would like to know the current index inside the array.
    Returns the index of the element when its found and -1 when its not found.
    ** It can't be used with an array of objects because it uses === to compare the elements. **
    ** Two objects are the same when they have the same reference in memory. **
    const array = ['First item', 'Second item', 'Third item'];
    notes.indexOf('Third Item'); //Returns 2

every(cbFunction);
    Executes the cbFunction on every element of the array. The final result is a boolean.

join();
    Returns a string with all the elements of the array separated by a comma (,).
    ['a', 'v'].join(); // Returns "a,v".
    ['a', 'v'].join(''); // Returns "av".
    ['a', 'v'].join('--'); // Returns "a--v".

```
## Local Storage functions
 **localStorage only stores strings**
```
localStorage.setItem('location', 'Philadelphia'); // Store
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
## Setup Live-Server
**Set up Web Server:**
1. Download live-server using npm: npm install -g live-server
2. live-server folder_name --> folder which contains website files.

Using package.json don't install it using -g flag so it is install as a local dependency.
To run it as a local dependency add the following script in package.json: ```"serve": "live-server public"```.

## Debug
**debugger** keyword inside js code causes the browser to pause execution wherever that keyword is found
and opens the browser's debugging tools.

## UUID
File /utilities/uuidv4.js contains a library to create uuids. The function to call is **uuidv4()**.
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

## Truthy and Falsy
Falsy values -> false, 0, empty string, null, undefined, NaN.

Truthy values -> non-empty string (ex: 'false', 'hi', '1'), [], {}, 1, -1

## Type Coercion
```
console.log('5' + 5); // Prints 55.
console.log('5' - 5); // Prints 0.
console.log('hi' - 5); // Prints NaN

== compares value, so JS solves a value for the string a executes the operation.**
console.log('5' == 5); // True

=== compares type and value** 
console.log('5' === 5); // False

true = 1, false = 0
// True = 1, False = 0
const value = true + 12;
const typeBool = typeof value;
console.log(value); // Prints 13
console.log(typeBool); // Prints number

typeof keyword helps determine the type of a variable.
const typeNum = typeof 123;
console.log(typeNum); // Prints number

const typeObj = typeof {};
console.log(typeObj); // Prints object
```

## HTTP request/response
```
const request = new XMLHttpRequest();

'readyState' has 5 states: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
**Add a listener to the request to know when the response is received.**
request.onreadystatechange = function(e) {
    if(e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText);
        console.log(data.puzzle);
    }
}
HTTP statuses: httpstatuses.com

request.open('GET', 'http://puzzle.mead.io/puzzle');
request.send();
```
Rest API of Countries: restcountries.eu
```
const countryRequest = new XMLHttpRequest();
countryRequest.onreadystatechange = (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find((country) => country.alpha2Code === 'CO');
        console.log(country.name);
    }
}
countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
countryRequest.send();
```
## Callback functions
```
// Function in file that expects the response of the http call
getPuzzle((puzzle) => {
    console.log(puzzle)
});

// HTTP call in another file.
const getPuzzle = (cb) => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            cb(data.puzzle)
        } else if(e.target.readyState === 4) {
            console.log("Error");
        }
    }

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3'); // by default is Async.
    request.send();
}
This causes the program to execute the console log only after the response is back. The function waits for the response,
not the app. Async behaviour.

for sync behaviour, add false param to open():
const puzzle = getPuzzleSync();

const getPuzzleSync = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false);
    request.send();

    if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        return data.puzzle;
    } else if(request.readyState === 4) {
        throw new Error('Error!');
    }
}

HTTP call with fetch()
With fetch(), we dont have to validate if the request completed (readyState), this will respond when it completes. 
We just have to validate how it completed (resolve or reject).

const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch puzzle.');
        }
    });
};

getPuzzle('2').then((data) => {
    console.log('Puzzle: ', data.puzzle);
}).catch((err) => {
    console.log(`Error: ${err}`);
});
```

## Closure
```
const createCounter = () => {
    let count = 0;

    return{
        increment() {
            count++;
        }
        decrement() {
            count--;
        }
        get() {
            return count;
        }
    } 
}

const counter = createCounter();
counter.increment();
counter.decrement();
// counter.count = 0; wont work.
console.log(counter.get());

//Adder
const createAdder = (a) => {
    return (b) => {
        return a + b;
    }
};
const add10 = createAdder(10);
console.log(add10(-2)); // Returns 8
console.log(add10(20)); // Returns 30
```
## Promise
### Promise chaining
```
getLocation().then((location) => {
    return getCountry(location.country);
}).then((countryName) => {
    console.log(countryName);
    //console.log(`You are currently in ${data.city} ${data.region} ${countryName}`);
}).catch((err) => {
    console.log(err);
});

const getCountry = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error('Error fetching data.')
        }
    }).then((data) => {
        const country = data.find((country) => country.alpha2Code === countryCode);
        if(country) {
            return country.name;
        } else {
            throw new Error('Country not found');
        }
    }).catch((err) => {
        throw new Error(err);
    });
};

const getLocation = () => {
    return fetch('https://ipinfo.io/json?token=6a8cfbbadb2d32').then((response) => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error('Failed to fetch data.');
        }
    }).catch((err) => {
        throw new Error(err);
    });
}
```

## APIs
random words: http://puzzle.mead.io/puzzle?wordCount=${wordCount}
Countries: https://restcountries.eu/rest/v2/all
ipinfo: http://ipinfo.io/json?token=token_id

## Publish apps
netlify.com
surge.sh
```
npm install -g surge
cd app-folder
surge
asks to log in
at the end it shows the url to access the app in the web browser.
```
To take down a website:
```
surge teardown
..asks for domain..
```

## Project setup using only Babel
```
**Install packages without the -g so they are added as a local dependency in the project**

npm install -g babel-cli
 --> inside root folder of the app:
npm init (creates package.json file)
npm install babel-preset-env (creates the node_modules folder with all the env modules of babel in there and also creates package-lock.json)
```
Put  file through bable (output_name is whatever i choose to name the outfile): ```babel input.js -o output.js --presets env```
--> Create folder structure:
app
    -> public (This is the folder to run in the server).
        -> scripts
            -> bundle.js (autogenerated file using babel command)
        -> index.html (should have a script tag including bundle.js).
    -> src
        -> index.js (file that i modify)
    -> (also package.json and node_modules will be here)
--> Create script command inside "scripts" tag in package.json: 
```"build": "babel src/index.js -o public/scripts/bundle.js --presets env"```.
--> Every time a change is made on index.js, run: ```npm run build ``` to autogenerate bundle.js updated.
--> Adding the "--watch" command to end of that script causes to run babel once and always be aware of any changes
    done to index.js so it will automatically update bundle.js.
    ```babel src/index.js -o public/scripts/bundle.js --presets env --watch```.

To uninstall global packages:
npm uninstall -g babel-cli live-server

## Project setup using Babel+Webpack
### setup
Having already configured Babel, install webpack:
```npm install webpack webpack-cli```.
Create script to run webpack: ```"webpack": "webpack"```.
Create file in root folder named: **webpack.config.js**
File content:
```
-- path is a node module that will help us obtain the absolute path of our project.
const path = require('path');
-- module.exports is the configuration object and allows us to expose something from a file. In our case, expose the configuration object.
module.exports = {
    // Tells webpack where to find the code to process.
    entry: './src/index.js',
    output: {
        // Needs to be an absolute path (relative won't work).
        path: path: path.resolve(__dirname, 'public/scripts'),
        // filename allows us to set the name of the autogenerated file. This attr is optional. by default it will create 'main.js'
        filename: 'bundle.js'
    }
}
```
### Run
```npm run webpack```
This creates the file main.js

