
// radio buttons are good where only one must be ticked in a group 

document.getElementById('submitbutton').onclick = function () {
    const visa = document.getElementById('visabutton');
    const mastercard = document.getElementById('mastercardbutton');
    const paypal = document.getElementById('paypalbutton');


    if (paypal.checked) {
        console.log('enter your paypal email');
    }
    else if (visa.checked) {
        console.log('enter visa ID');
    }
    else if (mastercard.checked) {
        console.log('enter mastercard CVV');
    }
    
    else {
        console.log('aleast one selection');
    }
}


