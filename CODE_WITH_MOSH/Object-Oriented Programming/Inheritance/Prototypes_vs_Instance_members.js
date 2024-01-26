function Circle(radius) {
    // Instance properties
    this.radius = radius

}

Circle.prototype.draw = function(){
    // prototypes members
    console.log('drawn');
}

// creating more and more objects as below will consume alot of memory, instead will could use inheritance
const c1 = new Circle(1);
const c2 = new Circle(1);