// Overriding a method in the Base object

function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
}

function Circle(radius,color){
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape)

function Square(size){
    this.size = size;
}

extend(Square, Shape);

// If we want to alter slightly the method from base but only for the Circle not Square 
Circle.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this); // Just still method overriding
    console.log('duplicate Circle');
}

const c = new Circle(2,'red');
const sq = new Square(8);