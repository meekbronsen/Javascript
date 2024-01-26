const myObject = { a: 1, b: 2, c: 3 };

const entriesArray = Object.entries(myObject);

const object = Object.fromEntries(entriesArray);

console.log(entriesArray);
