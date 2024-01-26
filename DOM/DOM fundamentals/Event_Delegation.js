// Appending addEventListener to the parent for the children to avoid repetition

// function handler(event){
//     const element = event.target
//     if (!(element.classList.contains('selected'))){
//         element.classList.toggle('selected')
//         return
//     }
//     element.classList.remove('selected');
// }

// document.querySelector('.Football').addEventListener('click',handler,)
// document.querySelector('.BasketBall').addEventListener('click',handler)
// document.querySelector('.Boxing').addEventListener('click',handler)
// document.querySelector('.Tennis').addEventListener('click',handler)
// document.querySelector('.Golf').addEventListener('click',handler)

// Now, using delegation below
document.querySelector('ul').addEventListener('click',handler)

// The function needs some changes too to avoid the parent element from invoking the function
function handler(event){
    if (event.target.matches('li')) {
        event.target.classList.add('selected')
    }

}
