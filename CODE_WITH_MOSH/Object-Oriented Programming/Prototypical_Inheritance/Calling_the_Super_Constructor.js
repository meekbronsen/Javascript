// we want the c object to inherit a property from Shape.constructor

function Shape(color){
    this.color = color;
}

function Circle(radius,color){
    // using the call keyword, shape is called and 'this' will point to the instances of circle
    Shape.call(this, color);
    this.radius = radius;
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;

const s = new Shape('blue'); 
const c = new Circle(2,'red');
