// combining arrays using the spread operator

const first = [ 1, 2, 3]

const second = [4, 5, 6]

const another = [...first,...second] // using ellipses

const copy = another.slice() // slice method with no arguments

const duplicate= [...copy]

console.log(duplicate)

// check this out, the spread operator actually spreading an array of arrays

const nestedArray = [[1,2,3,4],[5,6,7,8]]

const spread = [...nestedArray[0]] // nestedArray array index no 1

console.log(...spread)