// Overiding a method if you want it to behave differently on a specific object

class Shape{
    move(){
        console.log('move');
    }
}

class Circle extends Shape{
    move(){
        super.move()
        console.log('circle move');
    }
}

const c = new Circle()
