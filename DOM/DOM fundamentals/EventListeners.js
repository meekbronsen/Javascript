// Event listeners listen for a specific event
// an element can have one event handler but event listener can be used on multiple elements
// It adds interactive functions to our  Element by listening to different events taking place on the pages
// Ways of adding event listeners to our project:
// In the HTML file
// From script file

function listener(){window.alert('I also love javascript');}

// window alert when button is clicked
const btn = document.querySelector('.example2');
btn.addEventListener("click", listener)

// Mouse over
const div = document.querySelector('.box');

function style(){
    div.style.backgroundColor = "white";
}
div.addEventListener('mouseover', style)