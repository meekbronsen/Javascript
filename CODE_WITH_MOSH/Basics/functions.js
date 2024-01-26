//creating a plain function
function greet() {
    console.log(`Hello user`);
}

//calling the plain function
greet()

// adding a parameter and assigning argument "Mike"
function greet(Name) {
    console.log(`Hello ${Name}`);
}

greet('Mike');

// mutiple parameters
function hi(firstName,lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}

hi('Meek','bronsen');
