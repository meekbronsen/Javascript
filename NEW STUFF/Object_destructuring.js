// It is basically making key names act as variables, and having not to use the dot notation when accessing their values

const game = {
    title: "Donkey Kong Country",
    platform: "Nintendo",
    year: 1994,
    character: {
        main:'Donkey Kong',
        side:'princess peach'
        
    }
}

// let title = game.title
// let platform = game.platform
// let  year = game.year

// Object Destructuring
let {title, platform, year} = game

// Changing the key name using object destructuring
let {year: release} = game
console.log(release)

// Nested object destructuring
let {character: { main, side}} = game
console.log(main,side)