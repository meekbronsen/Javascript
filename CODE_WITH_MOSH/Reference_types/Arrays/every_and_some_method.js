
const array = [1,2,3,-4,5]


// checks to see if EVERY element in the array satisfy condition
const allArePositive = array.every(function(value){
    return (value >= 0)
})

// checks to see if ATLEAST one element in the array satisfy condition
const someAreNegative = array.some(function(i){
    return i < 0
})

console.log(someAreNegative)