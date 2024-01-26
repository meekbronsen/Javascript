// when a falsy value and a truty value are compared the truthy value is returned
// good for setting a default parameter
// eg
// console.log(undefined || ['Mike'])

let userColor = 'green'
let defaultColor = 'blue'
let customColor = userColor || defaultColor

console.log(customColor);

// falsy values

false // the boolean
NaN
undefined
null
'' // empty string
0  // zero


// Truthy values are eg:
// the boolean true 
// strings
// Numbers
// anything not listed in the falsy is a truthy value