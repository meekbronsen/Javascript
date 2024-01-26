const circle = {
  radius: 1,
  draw: function () {
    console.log("DRAWN!!");
  },
};

// const anotherCircle = {}

// for (let i in circle) {
// anotherCircle[i] = circle[i]  // the old method of duplicating
// }
// console.log(anotherCircle)

const another = Object.assign({}, circle); // the mordern method. can copy from more than one source

const anotherCircle = Object.assign(
  {
    // adding new property to circle
    color: "yellow",
  },
  circle
);

const spreadCircle = { ...circle }; // using the spread operator.It just directly duplictes nothing else

