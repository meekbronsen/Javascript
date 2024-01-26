// toLocaleString method returns a string with where the language is sensitive representation of this number
// number.toLocaleString(locale, {options}) the locale argument could specify the language, the unit, or the currency {options} the formatting options

const number = 300_000;

myString = number.toLocaleString("en-US");
myString = number.toLocaleString("hi-IN"); 

// Formatting a number to currency;
const dollars = number.toLocaleString("en-US",{style: "currency", currency: "USD"});
const euros = number.toLocaleString("de-DE",{style: "currency", currency: "EUR"});

// Converting a number to a percent
const percent = number.toLocaleString(undefined, {style: "percent"}) // times 100

// Units of measurement
const meters = number.toLocaleString(undefined,{style: "unit", unit: "meter"})
const degrees = number.toLocaleString(undefined,{style: "unit", unit: "celsius"})

console.log(degrees);