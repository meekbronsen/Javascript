// The 3rd method using weakmaps
// const _radius an indication that this is a private property
// NB Arrow functions use the this. of the containing function

const _radius = new WeakMap() // a weakmap is a dictionary where keys are objects
const _move = new WeakMap()

class Circle{
    constructor(rad){

    // Turning radius into a private property
        _radius.set(this, rad); // this is pointing to _radius  
        _move.set(this, function(){ console.log('move', this)});
    }

    // Using draw to access _radius
    drawRadius(){
        // return _move.get(this)
        console.log(_radius.get(this))
    }
}

const c = new Circle(2)

console.log(c.drawRadius());