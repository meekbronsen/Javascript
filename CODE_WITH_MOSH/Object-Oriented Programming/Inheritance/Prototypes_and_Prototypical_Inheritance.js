// Prototype is a parent of another object. In this case Shape is parent of Circle
// When calling a method, js looks for it in the object itself if it can't find it, looks for it in the prototype

x = {}
Object.getPrototypeOf(x)