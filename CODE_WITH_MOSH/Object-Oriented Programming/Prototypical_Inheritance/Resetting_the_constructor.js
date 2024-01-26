// NB every object has .constructor that returns the function that was used to create that object

function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(radius){
    this.radius = radius;
}

// Note that with the line below Circle prototype is set to point to the ShapeBase (Shape.prototype)
// The line below resets the default prototype of Circle to ShapeBase
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle; // As a best practice reset the constructor function so we can use it create objects from it in the future.

const s = new Shape(); 
const c = new Circle();
