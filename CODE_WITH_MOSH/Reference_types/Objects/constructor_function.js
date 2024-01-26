// constructor function. almost simillar to factory function but
// Pascal case is used
// this. is used
// new is added when calling the function
// on every method and property 'this' keyword is used

function Ellipses(radius, x, y) {
  this.radius = radius,
    this.location = {
      x: x,
      y: y,
    },
    this.draw = function () {
      console.log("drawn");
    };
}
const oval = 1
const circle1 = new Ellipses(0.5, 2, 1);

console.log(circle1.constructor); 