let grades = [100, 50 ,90, 60, 70, 80];

const sorted = grades.sort(function(a, b){
    return b - a;
})

console.log(sorted)