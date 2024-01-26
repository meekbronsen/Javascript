
const circle = {
  radius: 1,
  draw: function() {
    console.log("drawn");
  },
};

for (i of Object.keys(circle)) console.log(i); // returns the values as strings

for (j of Object.entries(circle)) console.log(j); // returns the value pairs transferred to arrays

console.log(Object.values(circle)) // returns the values from the object in an array


// Using the in operator to find if a property exists inside an object
console.log('radius' in circle)