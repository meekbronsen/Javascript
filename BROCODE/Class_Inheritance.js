// When a child class can inherit all the methods and properties from another class
// We should not repeat code so we should use inheritance from the parent class

// The parent class
class Animal{
    alive = true;
    
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

// The child classes
class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "hawk";
    fly(){
        console.log(`${this.name} is flying`);
    }
}

const rabbit = new Rabbit()
const fish = new Fish()
const hawk= new Hawk()

console.log(fish.swim())