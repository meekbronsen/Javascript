function Circle(radius){
    this.radius = radius;
    this.move = function(){
        console.log('move');
    }
}

Circle.prototype.draw = function() {
    console.log('draw');
}
const c1 = new Circle(1);

// for in loops are able to loop over all members  even those defined inside the prototype 
for (let i in c1){ console.log(i);}

// NB In javascript we use own instead of instance

c1.hasOwnProperty('radius'); // to see if radius is a property of c1
c1.hasOwnProperty('draw');   // draw is a property of the prototype
