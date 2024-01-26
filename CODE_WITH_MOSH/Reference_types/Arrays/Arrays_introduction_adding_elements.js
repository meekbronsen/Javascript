
const number = [3,4];

// adding elments to the begining 
number.unshift(0,1,2)

// adding elements to the end 
number.push(5,6)

// adding elements to the middle
number.splice(3, 0,'Middle') // specifies: the index of the element, No. of elements to be removed, the element

number.splice(2, 1) // removes the elements

console.log(number)


