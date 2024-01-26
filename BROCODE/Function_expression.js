// A function without a name is known as an anonymous function

const greet = function(){
    console.log('hello world')
}

let count = 0

function increase(){
    count++;
    document.getElementById("output").innerHTML = count;

}

function decrease(){
    count--;
    document.getElementById("output").innerHTML = count;
}
