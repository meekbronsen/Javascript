// A Function declaration
function walk() {
    console.log('walking')
}

// Function expression
// takes no function name ( anonymous function) 
// assigned to variable
// does not allow for hoisting
const run = function() {
    console.log('running')
}

walk()
run()

// This is also a function expression
const jump = function jump(){console.log("How high");}