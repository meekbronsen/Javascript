// Recursion is when a function calls itself inside it's scope, invoking an infinite loop
// this function will run to Infinity

// function greet(){
//     console.log('hello world')
//     greet()
// }

// greet()

// The condition that is written to stop an infinite loop is called a base case


const countToTen = (count) => { 
    count++
    console.log(count);
    if (count !== 10) countToTen(count)
}

countToTen(0)