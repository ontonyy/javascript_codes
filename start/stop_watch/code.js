var minutes = 0;
var seconds = 0;
var tens = 0;

var addTens = "00";
var addSeconds = "00";
var addMinutes = "00";

var appendTime = document.getElementById("time");


var interval;

function startTimer() {
    clearInterval(interval);
    interval = setInterval(countTimer, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    tens = 0;
  	seconds = 0;
    appendTime.innerHTML = "00:00:00";
}

function countTimer() {
    tens++;

    if (tens <= 9) {
        addTens = "0" + tens;
    } else {
        addTens = tens;
    } 
    
    if (tens > 99) {
        seconds++;
        addSeconds = "0" + seconds;
        tens = 0;
        addTens = "00";
    }
    
    if (seconds > 9) {
        addSeconds = seconds;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
            addSeconds = "00";
            addMinutes = "0" + minutes;
        }
    }

    if (minutes > 9) {
        addMinutes = minutes;
    }
    
    appendTime.innerHTML = `${addMinutes}:${addSeconds}:${addTens}`;
}

// Code block for clock
var clockTime = document.getElementById("clockTime");
var date = new Date();
clockTime.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

function showTime() {
    var clockTime = document.getElementById("clockTime");
    var date = new Date();
    clockTime.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clockTime.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    setTimeout(showTime, 1000);
}
showTime();