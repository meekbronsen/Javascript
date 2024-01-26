// switch - easier than using many else if staments
// function the same as if statments
// needs break to avoid continue

let grade = 30;

// if (grade == 'A') {
//     console.log('A, you passed')
// }
// else if (grade == "B") {
//     console.log('B,You passed')
// }
// else if (grade == 'C') {
//     console.log('C, average')
// }
// else if (grade == 'D') {
//     console.log('D, you barely passed')
// }
// else if (grade == 'E') {
//     console.log('Failure!')
// }
// else {
//     console.log('This character does not apply')
// }

switch (false){
    case grade >= 90:
        console.log('A, you passed');
        break

    case grade >= 70:
        console.log('B, you passed');
        break
        
    case grade >= 60:
        console.log('C, average');
        break

    case grade >= 40:
        console.log('D, you barely passed');
        break
    
    case grade < 40:
        console.log('Failure');
        break
    default:
        console.log('Unknown character')
}
