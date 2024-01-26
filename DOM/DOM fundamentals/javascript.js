function Circle(radius) {
  this.radius = radius;
  let defaultLocation = {x : 1, y : 1};
  this.draw = function() {
      console.log('drawn')
  };

  Object.defineProperty( this,"defaultLocation",{
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
console.log(circle1);