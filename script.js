let stopButtonElement = document.getElementById("stopButton");
let stopLightElement = document.getElementById("stopLight");
let readyButtonElement = document.getElementById("readyButton");
let readyLightElement = document.getElementById("readyLight");
let goButtonElement = document.getElementById("goButton");
let goLightElement = document.getElementById("goLight");

function turnOnRed() {
    stopLightElement.style.backgroundColor = "#cf1124";
    stopButtonElement.style.backgroundColor = "#cf1124";

    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";

    readyButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#1f1d41";
}
function turnOnYellow() {
    readyLightElement.style.backgroundColor = "#f7c948";
    readyButtonElement.style.backgroundColor = "#f7c948";

    stopLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";

    stopButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#1f1d41";

}

function turnOnGreen() {
    goLightElement.style.backgroundColor = "#199473";
    goButtonElement.style.backgroundColor = "#199473";

    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#4b5069";

    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyButtonElement.style.backgroundColor = "#1f1d41";
}