// In class OOP languages we have 2 types of methods: Instance and static

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    // Instance method
    draw(){
        console.log("drawn");
    }

    // static method
    // The method is only available in Circle function, and will not be assigned to the object instances of Circle
    static parse(str){
        console.log("json string");
    }
}

const c  = new Circle(1)

// we use static methods to create utility functions that are not tied to a particular object