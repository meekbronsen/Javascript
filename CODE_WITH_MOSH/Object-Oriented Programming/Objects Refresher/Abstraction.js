// Abstraction means hiding the complex details and only expose the essentials
// Implementation details should not be accesible from the outside

function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = {
        x : 0,
        y : 0
    }
    this.computeOptimumLocation = function() {// this.Optimumlocation can be seen from the outside
        console.log('location computed');
    }
    this.draw = function() {
        this.computeOptimumLocation()
        console.log('drawn')
    };
}

const circle1 = new Circle(10)

circle1.defaultLocation