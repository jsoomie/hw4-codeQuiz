//
//
// hw4 - code quiz
// Jonathan Soukaseume
//

// Element Selector
elsel = (x) => document.querySelector(x);

var startBtn = elsel(".start-btn");
var main = elsel("#main");
var landing = elsel("#landing");
var timer = elsel(".timer");
var timeLeft = 75;

var dispalyQuestions = document

// startBtn.addEventListener('click', function() {
//     console.log("this has been clicked");
//     landing.classList.remove("center-flex")
//     landing.classList.add("hidden");
//     main.classList.remove("hidden");
// })

function setTimer() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            timesUp();
        }
        
    }, 1000);
}

function timesUp() {
    timer.textContent = "Time is up!";
}

setTimer();