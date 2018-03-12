export const square = (x) => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;


// can also be exported using export function
// default can not be called on import using its name with the others,
// it has to be called outside {} on import
//export {square, add, subtract as default};