// the array.map() executes the callback function, once for each element inside the array

const array = [1,2,3,4]

const mapped = array.map(function(index) {
    return { ID: index}}) // with the value parameter being already predefined inside the map method, it represents each element inside the array

console.log(mapped)