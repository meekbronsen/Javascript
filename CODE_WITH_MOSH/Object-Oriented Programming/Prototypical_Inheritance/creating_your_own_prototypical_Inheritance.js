// We do not wanna create square and rewrite the draw method on it's prototype
// We could use inheritance

function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

function Circle(radius){
    this.radius = radius;
}

// We want Circle to inherit duplicate from Shape
Circle.prototype = Object.create(Shape.prototype)

const s = new Shape(); 
const c = new Circle();

// NB Realize that inheritance is only happening within the prototypes, not the objects themselves