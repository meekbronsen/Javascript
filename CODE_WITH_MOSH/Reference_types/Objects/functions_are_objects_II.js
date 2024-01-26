function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("drawn");
    });
}

const circle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = function(){
  console.log('drawn')
}`
);

const circle = new circle1(1);

// console.log(circle);

const circle2 = new Function(
  "radius",
  "location",
  `return {radius :  radius, 
  location : location,
  draw () {
    console.log('drawn')
  }
}`
);
const Ellipse = new circle2(1, 1);

// console.log(Ellipse)
