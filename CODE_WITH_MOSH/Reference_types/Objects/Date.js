// 12/31/1969 is know as the epoch, the  time where it all started

const now = new Date
const date = new Date

// This are formats of manipulating Date
const date1 = new Date('March 11 2018 09:00')
const date2 = new Date( 2018, /* month */ 4,/* date */ 11, /* hour */ 9,)         

const year = date.getFullYear()               // Returns the current year
const month = date.getMonth()
const dayOfWeek = date.getDay()               // Sunday is 0
const dayOfMonth = date.getDay()              // Jan is 0
const hours = date.getHours()                 // Hours is in 24-hr
const minutes = date.getMinutes()   
const seconds = date.getSeconds()             // constantly counting
const getMilisecondsEpoch = now.getTime()     // will get the number of millisec since Unix Epoch 1969
    
// from the assigned dates we could also change thier year or month...
const newYear = date.setFullYear(2020) // used to modify the Date object and it's members

const localeString = now.toLocaleString()

const localeDateString = now.toLocaleDateString()

console.log(now.getSeconds());
