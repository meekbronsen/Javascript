// viewing the prototype of constructors function

// Note that constructors also have a prototype property

// Circle.prototype is the object that will be used as a parent for the objects created by under Circle
function Circle(radius){
    this.radius = radius;
}

const circle = new Circle(1);