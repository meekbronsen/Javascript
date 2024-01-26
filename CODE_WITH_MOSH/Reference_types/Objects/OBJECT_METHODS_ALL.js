// Various essential methods you'll be using to manipulate objects

const person = {
    name : 'Mike',
    age  : 23,
    birth: 1999,
    isMale: true
}
const lst = []

function Circle(radius) {
    this.radius = radius
    this.draw = () => console.log('drawn')
}
person.greet = () =>{"What's Up"} // adding a method or property to an object using dot Notation

Object.keys(person) // the key names used in the key-value pair

Object.values(person) // returns the values in the key-value pair

Object.entries(person) // returns the key-value pairs as elements inside array [[key, value], [key, value]]

Array.from(person) // converts an object into [ [key, value], [key, value]]

Object.fromEntries()  // converts array of [[key, value], [key, value]] into an object = { key: value, key: value }

Object.assign({gender : 'Male'}, person ) // can be used to add something new to this but does not mutate `this` || copy another objects into the new on ({},person1,person2)

Object.create(objectName)       // creates a new object -> new Object();

Object.freeze(person) // prevents the modification of an object and it's properties 

console.log(person.hasOwnProperty('age')) // it's like the includes method of arrays

console.log(person.name)

console.log(person.length)

 const ellipse = new Circle(1) 

delete person.age // to delete a member from an object

// const copy = {...person}// spread operator but for objects used to copy objects

//Checking if your object is instance of the Object class
console.log(person instanceof Object);

console.log(person)

// A way of iterating through an object's keys and values
for ( let [i, j] of Object.entries(person)){
    console.log(i,j);
}
