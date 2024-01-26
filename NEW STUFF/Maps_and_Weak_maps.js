// Map is like an object where the key name can be any data type 
const Gamertag = {};
let player = new Map();

// use .set to add values to the Map 
player.set(Gamertag,"meekbronsen");
player.set(3,"position");
player.set(true, "Is Online")

player.get("Gamertag") // to get value from the Map 
player.has("pseudonym")
// player.delete(3)  // delete method, to remove a member

console.log(player.get(Gamertag))

// iterating over values
for (let i of player.values()){
    // console.log(i)
}

// iterating over keys
for (let i of player.keys()){
    // console.log(i)
}

// Weak Maps do not take in primitives only objects and do not support iteration
// They are called weakMaps because the keys are weak, if there are not referenced they will be garbage collected
let weakMap = new WeakMap()

// weakMap.set()
// console.log(weakMap)