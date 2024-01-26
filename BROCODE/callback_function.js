// Functions when passed as an argument.
// Helps us develop asynchronous code. Allows for tasks to be executed at the same time without waiting for the other

const numbers = sum(2, 2, displayDOM)

function sum(x, y, callback){
    let ans = x + y;
    callback(ans)
}

function displayDOM(output){
    document.getElementById('answer').innerHTML = output
}
