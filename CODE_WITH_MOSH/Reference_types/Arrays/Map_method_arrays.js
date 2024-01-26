
const lst = [-2,-1,0,1,2,3,4,-5]

let  filtered = lst.filter(value => value > 0)

// the map method can be used to alter elements in the array 

const elementsInObjs = lst.map(value => ({ ID : value})) // here the elements are put inside an object, under property name ID
const elementsToStrings = filtered.map(value => `${value}` ) // here the elements are put inside an object, under property name ID

//In the arrow function of map, the Object has to be in parentheses to avoid confusion a with code block

console.log(elementsInObjs)