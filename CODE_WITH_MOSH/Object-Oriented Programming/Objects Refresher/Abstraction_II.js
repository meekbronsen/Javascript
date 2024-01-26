// Hiding the details Implementation details
// DefaultLocation and computeOptimumLocation are computed inside the functions and  are not needed in the new object

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {
        x : 1,
        y : 1
    }
    let computeOptimumLocation = function() {
        console.log(`location computed`);
    }
    this.draw = function() {
        computeOptimumLocation()
        console.log('drawn')
    };
}

const circle1 = new Circle(10)

// defaultLocation and computeOptimumLocation are now private members