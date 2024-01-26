// constructor
function Circle(radius) {
  (this.radius = radius), 
  this.draw = function () {
    console.log("drawn");
  };
}

const circle = new Circle(1);

// Since Circle is created under function, it has methods since it also exists as an object
console.log(Circle.name);// name of the function
console.log(Circle.length); // the number of arguments/parameters
console.log(Circle.constructor); // the number of arguments/parameters
Circle.call({},1) === new Circle(1)
