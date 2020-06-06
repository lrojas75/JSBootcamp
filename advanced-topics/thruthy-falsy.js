const products = [];
const product = products[0];

// Falsy values -> false, 0, empty string, null, undefined, NaN.
// All the following lines resolve to false.
console.log(' --------------- False values ---------------------- ');
undefined ? console.log('Undefined resolved to true') : console.log('Undefined resolved to false');
0 ? console.log('0 resolved to true') : console.log('0 resolved to false');
'' ? console.log('empty string resolved to true') : console.log('empty string resolved to false');
NaN ? console.log('NaN string resolved to true') : console.log('NaN string resolved to false');

// Truthy values -> non-empty string, [], {}
console.log(' --------------- True values ---------------------- ');
if({}) {
    console.log('{} resolved to true')
} else {
    console.log('{} resolved to false')
}
if([]) {
    console.log('[] resolved to true')
} else {
    console.log('[] resolved to false')
}

'false' ? console.log(' "false" resolved to true') : console.log(' "False" resolved to false');
1 ? console.log(' 1 resolved to true') : console.log(' 1 resolved to false');
-1 ? console.log(' -1 resolved to true') : console.log(' -1 resolved to false');