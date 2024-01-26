const ul = document.querySelector("ul");
const li = document.createElement("li");

ul.append(li);

li.innerText = "The Mandalorian";

// adding the ID attribute to element
li.setAttribute("id", "movie");

// adding class attribute to element
li.setAttribute("class", "movie"); 
li.getAttribute('class') // argument takes attribute name and outputs the attribute value

// removing any attribute by it's name
li.removeAttribute("");

// the classList attribute allows for manipulation of element's class attribute
li.classList.add('movies'); // adding a class Attribute
li.classList.toggle('movies'); // adds a class if didn't exist and remove the class if it existed. it is an on and off toggle 
li.classList.remove('movies') // removed  a class Attribute

// Asking for a boolean if an attribute exists
console.log(li.classList.contains('movies'));

// removing elements the
li.remove()