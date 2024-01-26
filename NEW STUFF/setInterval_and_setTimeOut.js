// Invoke a function once after the set period of time

// setTimeout will invoke the function after 3sec, Once
// const greet = (username) => {console.log(`Hello ${username}`)};
// const time = setTimeout(greet,3000,"Meekbronsen");

// clearTimeout(time) // clears the timeout from setTimeout so the function will never run;

// setInterval is a timeloop, the function will continue running
const sing = () =>{console.log(`Ayooo`)};
const loop = setInterval(sing,1000)

//clearInterval(loop) 