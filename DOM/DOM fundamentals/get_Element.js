// getElementById()
const movies = document.getElementById("main-heading");


// getElementByClassName() the elments are returned inside an array together with their index in that array
const action = document.getElementsByClassName('sub-heading1');

// getElementByTagName() selector by type, it returns the elements inside an array like className, But listed inorder of HTML arrangement
const tag = document.getElementsByTagName('li');

// querySelector() selects the first item that matches it's query
const queryByType = document.querySelector('li')

const queryById = document.querySelector('#main-heading')

const queryByClass = document.querySelector('.sub-heading1')

// querySelectorAll() gets all the queries and places them in an array
const allType = document.querySelectorAll('li')

const allClass= document.querySelectorAll('.movie')

console.log(allClass)
