// setting the default values if parameter is left for undefined
function interestA(principal, rate = 0.2, years) {
    // rate = rate || 0.2 // using this logical operator, if rate takes no value 0.2 will be the default. But this method is legacy 
    
    return principal * rate / 100 * years;
}

// console.log(interestA(10000, .2, 6))

// this is better
// If you sett a default value for one parameter, then, all the others following will require one too 
function interestB(principal, rate = 3.5, years) {
    return principal * rate / 100 * years;
}

// console.log(interestB(10000,undefined, 6))// here i tried to use undefinde to move years from rate's position but this is a bad practice

function interestC(principal, rate = 3.5, years = 5) { // This is better
    return principal * rate / 100 * years;
}