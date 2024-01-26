// sets are just like array but do not allow duplicates and have easier to use methods
const fruits = new Set()
const numbers = [5,6,7,8,9] 
const strings = ["hello world","meekbronsen"]

fruits.add("apple").add("banana").add("orange")

fruits.delete("apple")

fruits.clear() // clear the whole thing

// console.log(fruits.has("grapes"))
// console.log(fruits.size)

// Turn array into a Set
const newSet = new Set(strings)


// WeakSet can only contain primitive data types
let array = [...numbers, ...strings]
const weakSet = new WeakSet()

weakSet.add(array)

// console.log(weakSet);

// EXERCISE
const mortalKombat = [ "Scorpion", "Sub-zero", "Reptile", "Liu-kang"]
const mkSet = new Set(mortalKombat)

mkSet.forEach((value) => {console.log(value)})

