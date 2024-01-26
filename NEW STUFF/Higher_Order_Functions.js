// High Order Functions are functions that take other functions as arguments
const double = n => n * 2;

let numbers = [1,2,3,4,5]

// the map method takes a function as an argument this is an example of an High Order function
let rslt = numbers.map((value,index) => value * 2)

console.log(rslt)

// with the High Order functions like the map method, we can redefine values before further manipulation  