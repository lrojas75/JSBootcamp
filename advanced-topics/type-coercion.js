//Type Coercion - a string, a number, a boolean

console.log('5' + 5); // Prints 55.
console.log('5' - 5); // Prints 0.
console.log('hi' - 5); // NaN
console.log('5' === 5); // False

const typeNum = typeof 123;
console.log(typeNum); // Prints number

const typeObj = typeof {};
console.log(typeObj); // Prints object

// True = 1, False = 0
const value = true + 12;
const typeBool = typeof value;
console.log(value); // Prints 13
console.log(typeBool); // Prints number