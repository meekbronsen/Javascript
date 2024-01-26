// the static keyword belongs to the class not the objects
// anything that is static belongs to the class and not the object

class Car{

    static numberOfCars = 0;
    
    constructor(model){
        this.model = model;
        Car.numberOfCars++
    }
    static startRace(){
        return 'GO!!'
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Lamborghini");
const car3 = new Car("Ferrari");

console.log(Car.numberOfCars)
console.log(car2.numberOfCars)
console.log(car3.numberOfCars)

console.log(Car.startRace())