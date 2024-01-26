// A Scope determines until where a const or var is accesible
// local variable (varibles defined inside the  block) take precidence over the same varible that is outside 
// I hear it is bad practice defining global var or const or let

{
  const person = "Mike";
}

console.log(person); // can not access person because it is limited to the code block above

function talk() {
  let message = "hello world";
  console.log("Hello world");
}
function run() {
  let message = "hello world";
  console.log("running");
}
