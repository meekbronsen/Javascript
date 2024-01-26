// sum all the elements in the array
const array = [1,2,3,4]

// using common for...of loop
// but I hear that this is an old way of writing code
let max = 0

for (let i of array) {
    max = max + i
}

// console.log(max);

// using the reduce method
const sum = array.reduce(function(initial, i ) {
    return initial + i
}, 0);

console.log(sum);