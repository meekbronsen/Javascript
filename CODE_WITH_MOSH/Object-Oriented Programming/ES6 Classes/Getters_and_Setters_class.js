// we want to read radius 

const _radius =  new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius);
    }
    // Creating a getter in ES6
    get radius(){
        return _radius.get(this)
    }
    // Refining the reinitialized radius value using a Setter 
    set radius(value){
        if (value < 0){ throw new Error("invalid radius!")}
        _radius.set(this, value);
    }
}

const c = new Circle(1)

console.log(c.radius)