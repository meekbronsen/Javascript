// creating a Person object

let person = { // using curly braces called object literal
    Name : 'Mike',
    Age : 23
}

// Change a property of the person 
person.Name = 'John'; // using dot notation
person['Name'] = 'James'; // using bracket notation.     Pay attention to how Name is written inside the squares

console.log(typeof person.Name);

