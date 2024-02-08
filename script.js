const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

hours.innerHTML = "00";
minutes.innerHTML = "00";
seconds.innerHTML = "00";

let hrs = 0;
let mins = 0;
let secs = 0;
let startInt;

start.addEventListener('click', function() {
    startInt = setInterval(function(){
        secs++;
        if(secs ==60){
            secs = 0;
            mins++;
        }
        if(mins==60){
            mins = 0;
            hrs++;
        }

        seconds.innerHTML = secs.toString().padStart(2, "0");
        minutes.innerHTML = mins.toString().padStart(2, "0");
        hours.innerHTML = hrs.toString().padStart(2, "0");

    },1000);
});

stop.addEventListener('click', function() {
    clearInterval(startInt);
});

reset.addEventListener("click", function() {
    clearInterval(startInt);

    hrs = 0;
    mins = 0;
    secs = 0;

    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
});









