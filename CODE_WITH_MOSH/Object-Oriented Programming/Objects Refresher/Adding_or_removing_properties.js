function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('drawn')
    } 
}

circle1 = new Circle(0.5)
