// If you want to use a function with varying number of parameters, you can use the Rest Operator
// you cannot have a parameter before a rest parameter e.g (...args, discount)


function sum(...args) {
  console.log(args) // shows all the arguments inside an array
  
  return args.reduce(function(a,b) {
  return a+b
  },0)

  return args.reduce((a, b) => a + b); // using arrow function to be more proffesional
}

console.log(sum(1, 2, 3, 4, 5));
