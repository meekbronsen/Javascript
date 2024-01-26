function createCircle(radius, x, y) {
  return {
    radius: radius, // argumented form = radius,
    location: {
      x,
      y,
    },
    draw() {
      console.log("drawn");
    },
  };
}

const circle1 = createCircle(1, 2, 3);

circle1.radius