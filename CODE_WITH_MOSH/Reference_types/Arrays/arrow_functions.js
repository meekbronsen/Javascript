const objLst = [  
    { name : 'Mike', age : 23},
    { name : 'Nattally', age : 15}
]

console.log(objLst.find(function(element) {
    return element.name === 'Mike'
}))

// Shortening the function argument above using fat arrow '=>'. where the function is being taken as an argument 

console.log(objLst.find( element => element.name === 'Mike'))




