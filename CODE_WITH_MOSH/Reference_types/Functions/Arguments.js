// Here we're playing with arguments and how they could behave

function sum(a,b) {
    return a+b;
}

console.log(sum(1,)) // this is 1 + undefined
console.log(sum(1,NaN)) //
console.log(sum(1,2,3,4,5)) // adding extra arguments will just use the position of the arguments
console.log(sum(1,null)) // a value plus null =  the value


// what if you want to pass many arguments at the same time e.g 1+2+3+4+5
// if an object has a symbol.iterator property it can be used with a for...or loop

function sum(a) {
    // console.log(arguments) // arguments is a reserved object that exists inside functions that holds all the arguments in the call 
    let total = 0;
    for (let i of arguments) {
        total += i
    }
return total
}

console.log(sum(1, 2, 3, 4, 5));
