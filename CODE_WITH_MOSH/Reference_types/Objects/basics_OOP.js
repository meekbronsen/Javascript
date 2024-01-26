const circles = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },

  draw: function (name) {
    // this is a method because it is associated with an object
    console.log(name, "drawn");
  },
};

circles.draw("Image"); //calling the draw method

function helloWorld() {
  console.log("hello world"); // this is a function coz it is not associated with an object
}
