class Shape{
    constructor(color){
        this.color = () => console.log(color);
    }

    move(){
        console.log('move');
    }
}

// To inherit from Shape the Super object
class Circle extends Shape {
    draw(){
        console.log('draw');
    }
}

// If you are using 'constructor()' in both parent and sub class
class Square extends Shape {
    constructor(color){
        // use super to call the parent and initailize the base object properties here
        // it's the same as Shape(color). calling shape and giving it this.color 
        super(color);  
    }
    drawSquare(){
        console.log('drawn Square');
    }
}

const circle = new Circle();
const square = new Square("red");

console.log(c);