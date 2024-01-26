// Cohesion refers to things that are related should be together
// So things that are highly related should be in the same module.

const _radius = new WeakMap()

export class Circle{
    constructor(rad){
        _radius.set(this, rad);
    }
    draw(){
        console.log(_radius.get(this))
    }
}

// The keyword module refers to the current module
module.exports = Circle;

// we use use the require function to  import the module
// We don't need .js extension but that is already assumed to be there
require("./CommonJS-modules") 