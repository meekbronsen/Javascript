
const first = [ 1, 2, 3]
const last = [ 4, 5, 6]

const array = first.concat(last)

// slice an array 
const sliceCopy = array.slice() // give a copy of the original

const aSlice = array.slice(1,5) // index 3 to 5 

// combining an array of objects
const person = [ {name : 'Mike', age : 23}, { name : 'Yvonne', age : 19}]

const copy = person.slice()

console.log(person)