// like the setting default parameters in using truthy and falsy values, nullish only works with null and undefined

let name = null
let defaultName = name ?? 'Guest'
console.log(defaultName)