const firstListItem = document.querySelector('.movie')

// Using the innerText 
console.log(firstListItem.innerText); //   The actual text
console.log(firstListItem.textContent);//  same function as innerText but from the Element Node
console.log(firstListItem.innerHTML); //   the actual HTML file

const ul = document.querySelector('ul');

const li = document.createElement('li');

ul.append(li);

// assigning the innerText to a new string
li.innerText = 'The Mandalorian'