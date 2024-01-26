//  The extend function is what is called intermediate function inheritance

function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square;

// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle;

// Since the lines are repetitive we define a function
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

extend(Square, Shape)
const c = new Circle(2,'red');
const sq = new Square(8);