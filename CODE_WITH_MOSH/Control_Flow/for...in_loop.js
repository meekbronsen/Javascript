
let Person = {
    'name': 'Mike',
    'age' : 23
}

let colors = [ 'red', 'blue', 'green']

// iterating over items in a list
for ( i in colors ) {
    console.log(i)
}

// iterating over items in an object
for ( j in Person ) {
    console.log(Person[j])
}

// for in loop is designed for objects. 


for (k of colors) {
    console.log(k)
}

