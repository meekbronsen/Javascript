"use strict" // turning on strict mode in js engine 
// After turning on strict mode, the engine is more strict and if 'this' is pointing to window, 'this' will be set to undefined

const Circle = function(){
    this.draw = function(){console.log(this);}
}

const c = new Circle()

// Method call
//c.draw();

const draw = c.draw

// After turning on strict mode, the engine is more strict and if 'this' is pointing to window, it will be set to undefined because modifying window objects is bad practice
draw()

// with classes, js engine will execute the body of that class in strict mode automatically everytime. 