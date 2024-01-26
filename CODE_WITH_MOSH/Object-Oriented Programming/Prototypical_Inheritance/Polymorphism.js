// Poly means 'many' morph means 'form'

function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(){
}

extend(Circle, Shape);

function Square(){
}

extend(Square, Shape);

// As you can see duplicate has many forms, It does different things in Circle and Square.
Circle.prototype.duplicate = function(){
    console.log('duplicate Circle');
}
Square.prototype.duplicate = function(){
    console.log('duplicate Square');
}

const shapes = [
    new Circle(), new Square(), new Shape()
]

for (i of shapes){
    i.duplicate()
}