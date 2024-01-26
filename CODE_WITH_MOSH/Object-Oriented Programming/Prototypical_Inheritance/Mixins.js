// Using Mixins to define compositions

function mixin(targetObject, ...sources){
    Object.assign(targetObject,...sources);
}

const canEat = {
    eat: function(){
        this.hungerPoints--;
        console.log("eating");
    }
}
const canWalk = {
    walk: function(){
        console.log("walking");
    }
}
const canSwim = {
    swim: function(){
        console.log('swimming');
    }
}
// Composing the features above

function Person(){
    this.sleep = 'sleeping';
}
let person =  new Person();

Object.assign(person, canEat, canWalk);

// Using mixins to compose the properties
mixin(person, canEat, canSwim);

function Fish(){
}
const goldFish = Object.assign(Fish.prototype, canEat, canSwim);