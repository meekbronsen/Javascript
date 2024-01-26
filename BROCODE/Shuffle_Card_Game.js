let cards = [ 'A',"2","3","4","5","6","7","8","9","10","J","Q","K"];

function myShuffle(){
    let empty = []

    while (empty.length !== cards.length){
        let randomIndex = cards[Math.floor(Math.random() * cards.length)]

        if (!empty.includes(randomIndex)){empty.push(randomIndex)}
    }    
    return empty
}

// BROCODE  
// function shuffle(array){
//     let currentIndex = array.length

//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.random()* array.length)
//         currentIndex-=1;
        
//         let temp = array[currentIndex]
//         array[currentIndex] = array[randomIndex]
//         array[randomIndex] = temp;

//         // console.log(currentIndex,randomIndex)
//     }
//     return array;
// }

console.log(myShuffle())