// Named export --> export const name = 'Andrew';
// Default export --> it can only be one.

const add = (a, b) => a + b;

const name = 'Andrew';

const square = (x) => x * x;

export { add, name, square as default }


/* export const add = (a, b) => a + b;

export const name = 'Andrew';

const square = (x) => x * x;
export default square; */