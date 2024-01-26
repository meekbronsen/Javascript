// Nodes and element are different, node is in the node tree
// '#text' is indentation between the elements (space from one element to the next)

const ul = document.querySelector('ul')

// Parent Node and elements
// console.log(ul .parentNode);
// console.log(ul.parentElement); // The parent element
// console.log(ul.parentElement.parentElement); // The parent element of the parent element

// Child Node and elements
// console.log(ul.childNodes);
// console.log(ul.firstChild); // firstChild is an element and not a text node 
// console.log(ul.lastChild);

// selecting the element using bracket notation since childNodes returns a list
ul.childNodes[1].style.color = 'blue';

// child Elements
 console.log(ul.children);
 console.log(ul.lastElementChild);
 console.log(ul.firstElementChild);

// Elements on the same level (siblings)
const div = document.querySelector('div')
console.log(div.childNodes)

console.log(ul.previousSibling);
console.log(ul.nextSibling);

// Siblings
console.log(ul.previousElementSibling); // the siblings
console.log(ul.nextElementSibling);
