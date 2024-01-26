// Proving why you shouldn't use the Var keyword
// when using the Var keyword, It's scope is not limited to local code block but outside it too
// In ( ES6) let & const are block-scoped variables but var is function scoped variables
// A global var attaches itself to the window object
// Avoid adding stuff to window object

function start() { 
    for (var i = 0 ; i < 5; i++) {
        // console.log(i)
    }
    console.log(i)
}

start()


// Apparenty functions defined like this are auto added to the window object
function hello() {
    console.log('hello world')
}

hello()