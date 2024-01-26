function Ellipses(radius, x, y) {
  (this.radius = radius),
    (this.location = {
      x: x,
      y: y,
    }),
    (this.draw = function () {
      console.log("drawn");
    });
}

const ellipse = new Ellipses(0.5, 2, 1);

console.log(ellipse.constructor); // this property 'constructor' looks for the FUNCTION that was used to create the OBJECT

function createCircle(radius, x, y) {
  return {
    radius: radius, // argumented form = radius,
    location: {
      x,
      y,
    },
    draw() {
      return "drawn";
    },
  };
}

const circle = createCircle(1, 2, 3);

console.log(circle.constructor);

