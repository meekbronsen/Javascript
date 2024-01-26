
const numbers = [1, 2, 3, 4, 5, 6]

//using for of loop
for (let i of numbers) 
    console.log(numbers.indexOf(i), i)

// another way
numbers.forEach(function(number,index) {
    console.log(index,number)
})

console.log(numbers.indexOf() )