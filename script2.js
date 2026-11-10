let startTime = 0;
let elapsedTime = 0;
let timer = null;

const display = document.getElementById("time");
const buts = document.getElementById("buts");
const butst = document.getElementById("butst");
const butr = document.getElementById("butr");

function updatetime() {

    let totalTime = elapsedTime;

    let hours = Math.floor(totalTime / 3600000);
    let minutes = Math.floor((totalTime % 3600000) / 60000);
    let seconds = Math.floor((totalTime % 60000) / 1000);
    let milliseconds = totalTime % 1000;

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    let ms = String(milliseconds).padStart(3, "0");

    display.textContent = `${h}:${m}:${s}.${ms}`;
}

buts.addEventListener("click", function() {

    if (timer !== null) return;

    startTime = Date.now() - elapsedTime;

    timer = setInterval(function() {

        elapsedTime = Date.now() - startTime;

        updatetime();

    }, 10);

});


butst.addEventListener("click", function() {

    if (timer === null) return;

    clearInterval(timer);
    timer = null;

    elapsedTime = Date.now() - startTime;

    updatetime();

});


butr.addEventListener("click", function() {

    clearInterval(timer);
    timer = null;

    elapsedTime = 0;
    startTime = 0;

    updatetime();

});
