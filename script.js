const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const pause = document.querySelector('#stop');


let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
function stopWatch(){

    seconds++;

    if (seconds / 60 === 1)
    {
        seconds = 0;
        minutes++;

        if (minutes /60 === 1)
        {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10){
        leadingSeconds = '0' + seconds;
    } else
        leadingSeconds = seconds;
    if (minutes < 10){
        leadingMinutes = '0' + minutes;
    } else
        leadingMinutes = minutes;
    if (hours < 10){
         leadingHours = '0' + hours;
    } else
         leadingHours = hours;

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}

document.querySelector('.container').addEventListener('click', function (event) {
    let target = event.target;

    if (target.id === 'start'){
        timerInterval = window.setInterval(stopWatch, 1000);
        target.id = 'stop';
        target.innerText = '▐▐';
    }
    else if ( target.id === 'stop'){
        window.clearInterval(timerInterval);
        target.id = 'start';
        target.innerText = '︎◀︎';
    }
    else {
        window.clearInterval(timerInterval);
        seconds = 0;
        minutes = 0;
        hours = 0;

        document.querySelector('#timer').innerText = '00:00:00';
    }


})

