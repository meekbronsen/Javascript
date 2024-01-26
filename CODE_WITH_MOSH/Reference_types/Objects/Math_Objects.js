// developer.mozilla.org to find the all the properties for objects
// happens that Math is also a builtin object in js

// console.log(Math.random())// generates pseudorandom numbers between 0 and 1

let number = Math.random();

// mapping the random between a given range
function getRandomNumber(min,max){
    return Math.random()
    // return Math.random() * (max - min) + min;
}
console.log(getRandomNumber(1,5))

0.376 * (1-5)