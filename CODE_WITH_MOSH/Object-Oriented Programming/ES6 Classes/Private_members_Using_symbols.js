// Abstraction in ES6
// Below are two ways, the first one is not adviced
// The second one is using symbol

// Symbol is a primitive data type
const _radius = Symbol() // Generates a unique value. everytime you call this function you get a new unique value
const _draw  = Symbol()

class Circle{
    constructor(radius){

        // this._radius = radius; termed bad idea
        // this["radius"] = radius;
        this[_radius] = radius;
    }

    // In ES6 we have computed property names, demo below
    [_draw](){
        console.log("drawn");
    }
}

const c = new Circle();