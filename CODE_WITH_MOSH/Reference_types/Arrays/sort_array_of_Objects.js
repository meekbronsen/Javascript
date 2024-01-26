const lst = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javascript.js" },
  { id: 3, name: "V8"},
  { id: 4, name: "Atom"}
];

// lst.sort(function(a, b) {
//   if (a.name > b.name) {
//     return 1;
//    }
   
//   if (a.name < b.name) {
//     return -1
//   }
//   return 0
// });

// console.log(lst)

lst.sort(function(a, b) {
  if (a.name > b.name) {
    console.log(a.name,'a')
    console.log(b.name,'b')
    return 1;
   }
  if (a.name < b.name) {
    console.log(a.name,'a')
    console.log(b.name,'n')
    return -1
  }
  // return 0
});

// console.log(lst)