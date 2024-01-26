// reffers to the ability to call a function before it's definition

walk();
function walk() {
  console.log("walking");
}

// function expressions do not allow for hoisting

const run = function () {
  console.log("running");
};
