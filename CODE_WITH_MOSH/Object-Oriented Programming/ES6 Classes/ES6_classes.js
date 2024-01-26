// function Circle(){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('drawn!')
//     }
// }

// Rewriting the above code using es6 classes
class Circle{
    constructor(radius){
        this.radius = radius;
        this.move = function(){console.log('moved!');}
    }
    // methods outside constructor will end up in the prototype 
    draw(){
        console.log("drawn");
    }
}

const c =  new Circle(1);
