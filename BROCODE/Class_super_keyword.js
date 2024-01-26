// When using inheritance the super keyword reffers to the parent class

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{

    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    
    constructor(name,age, flightSpeed){
        super(name,age);
        this.flightSpeed = flightSpeed;
    }
}

const rabbit = new Rabbit('rabbit',23,100)
const fish = new Fish('fish',16, 60)
const hawk= new Hawk('hawk',30,200)

console.log(hawk.name)