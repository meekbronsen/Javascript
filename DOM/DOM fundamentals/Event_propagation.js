// when an event is performed, elements aside the target are triggered, this is due to event propagation

// PHASES OF EVENT PROPAGATION
// Capturing Phase is event execution from the root element node downwards to the target element node
// Target Phase the element where the event is on
// Event Bubbling  Bubbling is event execution from the target element node backwards to root element node

// The third parameter is a boolean in the addEventListener dictates if you want to use Event Capture or Event Bubbling
//addEventListener('click',function,true)

const btn = document.querySelector(".Btn");

btn.addEventListener('click',(e)=>console.log(e),true) // the e reps event object

// Event is actually an Object with many properties
btn.addEventListener('click',(e)=>console.log(e.target),true) // `e.target` the target Element

// Inorder to reverse order of event execution on the node tree, false is used as the third argument instead of true, This is event BUBBLING
btn.addEventListener('click',(e)=>console.log(e),true) //`e.target` the target Element

e.stopPropagation() // this method stops event execution at the element where it is called

e.preventDefault()// this method stops an element from it's behaviour the way it usually does, like stop anchor hrefs from redirecting.

// if you want an element to be triggered once an event.

btn.addEventListener('click',(e)=>console.log(e),{once: true}); // change the third argument to {once:true}