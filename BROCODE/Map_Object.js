// Maps almost behaves like an object

const store = new Map([
    ['t-shirt',10],
    ['jeans',20],
    ['hoodie',50],
])

// store.forEach((value, key) => console.log(`${key} ${value}`))

let shoppingCart = 0;

shoppingCart += store.get('t-shirt')// get a value from the Map;
shoppingCart += store.get("jeans"); // shoppingCart = shoppingCart + store.get("jeans")

console.log(shoppingCart)

store.set('hats', 30);  // add hats to the object
store.delete('hoodie'); // delete a key-value pair from the list
