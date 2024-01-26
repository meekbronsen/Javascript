// creating an element from using the DO
const ul = document.querySelector('ul');

const li = document.createElement(`li`);

ul.append(li);

// Appending a div
const body = document.querySelector("body");

const div = document.createElement("div");

body.append(div);

div.style.width = '100px';
div.style.height = '100px';
div.style.background = 'rgba(230, 205, 16, 0.5)'; 
