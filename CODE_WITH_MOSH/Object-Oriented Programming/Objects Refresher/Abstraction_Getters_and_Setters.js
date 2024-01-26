// What if we want to display defaultLocation but not be able to modify the property
// like this circle1.defaultLocation
// `get` is a function that is used to read an object property

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {x : 1, y : 1};
    this.draw = function() {
        console.log('drawn')
    };

    //One way would be:
    Object.defineProperty( this,"defaultCoordinates",{
        get : function (params) {
            return defaultLocation
        },
        set: function(value) {
            if (!value.x || !value.y ){
                throw new Error(`Invalid value`)
            }
            defaultLocation = value
        }
    })
}

const circle1 = new Circle(10)

// circle1.defaultLocation = 1

// console.log(circle1.defaultLocation)

// use Object.defineProperty to allow use of get and set

console.log(circle1.defaultCoordinates);