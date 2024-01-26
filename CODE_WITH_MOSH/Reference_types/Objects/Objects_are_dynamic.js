
// Object properties and method are still dynamic even though const is used. Though circle can not be changed.

const circle = {
    radius :1
}

circle.color = 'yellow' // add a property color to the object circle

circle.draw = function() {
    console.log('drawn')
}

// we can also delete properties 

delete circle.draw

console.log(circle)