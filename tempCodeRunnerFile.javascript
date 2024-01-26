const circle = {
  radius: 1,
  draw: function () {
    console.log("DRAWN!!");
  },
};

const anotherCircle = {
    ...circle, radius: 2

}

console.log(anotherCircle)