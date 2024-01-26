// Maintainability
// Reusability
// Abstraction

const _radius = new WeakMap();

export class Circle{
    constructor(rad){
        _radius.set(this, rad);
    }
    draw(){
        console.log(_radius.get(this))
    }
}


// Modules in ES5 used 
// UMD Universal Module Definition : Browser and Node.js
// AMD Asynchronous Module Definition: Browser
// CommonJS: Node.js

