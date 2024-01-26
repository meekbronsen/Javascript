const array = [1,2,3,4]
const lst = [5,6,7,8]
const dirtyArray = ['Mike',-1 ,'y',1,2,3,4,-2]
const ObjArray = [
    {name : 'Mike', age : 23},
    {name : 'Nattaly', age :15},
    {name : 'Yvonne', age :19},
]

lst.indexOf(34)
lst.lastIndexOf(1)
lst.includes(3)
array.push()              // Like the append method in python, adds elements to the array. Adds elements from the back
array.pop()               // used to remoe the last item on a list.
array.shift()             // used to remove the first item on a list.
array.unshift(0,1,2)      // used to add an element from the beginning of an array.
array.splice(0,1,'Mike')  // used to remove, remove and replace an element. 
array.slice(0,1+1)        // used to take a slice elements from the array. CAUTION indexes are used, and the last index not included thus the plus one.
array.join(".")           // join all elments with periods
array.concat(lst,list)    // This one combines arrays. 
const spread = [...array] // Using the spread operator good for combining elements of an array.
array.sort()              // sort the order of elements ascending
array.reverse()           // reverse the order of elements
Array.isArray(lst)        // to find out if the object is an array, useful to differ from Objects
array.find((i) => i === 1)// use it to find an element equalling a given condition.

// METHODS THAT TAKE FUNCTIONS
array.map( (element, index) =>  String(element))                           // changes the elements inside the array, it takes an arrow function. Has the index argument.
dirtyArray.filter((value) => !(typeof value === 'string') && value > 0 )   // returns a new array with filtered information takes in a predicate

// CALL BACK FUNCTION METHODS
const allArePositive = array.every(function(value){return (value >= 0)})
console.log(allArePositive);

const someAreNegative = array.some(function(value) {
     return value < 0
}) 

const sorted = (array.sort(function(a,b) {
        if (a > b) return -1
        if (a < b) return 1
        return 0
})) //  used to sort object inside an array, compares using ASCII

// Used on an array of elements, the callback has an initial value and an iterating value i, can be used to find the max element in an array
const max = lst.reduce( () => { return max += i }, 0)   
