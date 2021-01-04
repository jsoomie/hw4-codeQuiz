var startBtn = document.querySelector(".start-btn");
var main = document.querySelector("#main");
var landing = document.querySelector("#landing");
var timer = document.querySelector(".timer");
var timeLeft = 75;

// startBtn.addEventListener('click', function() {
//     console.log("this has been clicked");
//     landing.classList.remove("center-flex")
//     landing.classList.add("hidden");
//     main.classList.remove("hidden");
// })

function setTimer() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft + " seconds remaining!";

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            lostMessage();
        }
        
    }, 1000);
}

function lostMessage() {
    timer.textContent = "Time is up!";
}

setTimer();