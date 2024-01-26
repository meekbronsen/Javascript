// Attributes of a property, writable, enumerable, configurable, value
let person = {name: "Meek"};

// How come when iterating, we can't iterate over prototype inherited properties
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase,"toString"); // Describes a property. Shows the attributes attached to this property
// console.log(descriptor)
// As you can see the toString() method has enumerable set to false
// Configurable. the property can be deleted
// writable. the property can be changed

// setting and attribute for our property
let human = {name: "Meek"};

Object.defineProperty(human,"name",{
    // The Attributes
    writable: false,  // value can not be modified
    enumerable: false, // can not be iterated
    configurable: false// can not be deleted
})

human.name = "Yvonne"

console.log(descriptor);