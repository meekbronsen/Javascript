class Student{

    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
       return (`${this.name} is studying`);
    }
}

const student1 = new Student(`Spongebob`, 30, 3.2);
const student2 = new Student(`Spongebob`, 35, 1.2);

// console.log(student1.study());

class Hawk {
    constructor(name, age, ){
        this.name = name;
        this.age = age;
    }
}

const hawk = new Hawk('hawk',13)

console.log(hawk.name)