function format() {
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    let  hours = date.getHours();
    let  minutes = date.getMinutes();
    let  seconds = date.getSeconds()
    const amPm = hours <= 12 ? 'am': 'pm';

    hours = (hours % 12) || 12 // if value is falsy 12 will be returned 

    hours = zeroes(hours);  
    minutes = zeroes(minutes);  
    seconds = zeroes(seconds);  

    return document.getElementById('label').innerHTML = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${amPm} `

    // Adding zero to single digits
    function zeroes(time){
        time = String(time)
        return time.length === 1 ? 0 + time : time
    }
}

setInterval(format,1000) // update every 1000 millisec