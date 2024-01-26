const game = {
    title: 'God Of War',
    year: 2000
};

// The call method
// function info(){
//     console.log(`${this.title} was released in ${this.year}`);
// };

// info.call(game) // connects the object, sets `this` to point to the objectx

// The apply method
function info(platform, character){
    console.log(`${this.title} was released in ${this.year} for ${platform} with ${character} as the main`);
};

info.apply(game,['playstation','Kratos']) //Takes the arguments inside array literals

info.call(game,'playstation','Kratos') //does not use an array literals, this is the difference between call and apply


// The Bind method
const gameInfo = info.bind(game,'playstation','Kratos') // invoking the function using the gameInfo name, with all the arguments fixed in place
gameInfo() // we are now using one word to call the whole thing.