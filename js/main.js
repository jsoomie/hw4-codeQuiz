var startBtn = document.querySelector(".start-btn");
var main = document.querySelector("#main");
var landing = document.querySelector("#landing");

startBtn.addEventListener('click', function() {
    console.log("this has been clicked");
    landing.classList.remove("center-flex")
    landing.classList.add("hidden");
    main.classList.remove("hidden");
})
