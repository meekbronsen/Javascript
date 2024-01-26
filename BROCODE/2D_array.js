// 2D array is an array of arrays
// Need to use the spread operator
const array = [[1,2,3,4,5], [6,7,8,9]];

const copy = [...array[0]];

let max = Math.max(...copy); // spreading list into individuals

console.log(max)