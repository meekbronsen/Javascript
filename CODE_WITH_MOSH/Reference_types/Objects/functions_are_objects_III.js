function Circle(radius) {
    (this.radius = radius), 
    this.draw = function () {
      console.log("drawn");
    };
  }

const ellipse = new Circle(1)

Circle.call({}, 1)

const oval = Circle.apply({},[1])

console.log(Circle)