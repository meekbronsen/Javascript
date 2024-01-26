// Encapsulation
// Abstraction
// Inheritance
// Polymorphism

// In object-Oriented Programming,related functions and variables are combined into a unit. The unit is then called an OBJECT
// The variables are then referred to as properties and the functions methods
// Grouping of functions and variables into one single unit is called ENCAPSULATION

// the bottom code is refered to as procedural, where functions are onside and variables on the other they are (Decoupled) 
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary,overtime,rate){
    return baseSalary + (overtime * rate);
}

// Object-Oriented Way of the code above
// ENCAPSULATION
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate);
    }
}
console.log(employee.getWage())
// the best functions are those with no parameters

// ABSTRACTION
// Helps reduce the complexity of code and impact of change

// INHERITANCE
// used to eliminate redudant code by sharing code that already been written 

//POLY  MORPHOSIM
//Many  forms 
//Rid many switch and case statements

