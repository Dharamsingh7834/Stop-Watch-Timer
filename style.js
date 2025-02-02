let countdown = document.getElementById("countdown");
let startBtn = document.querySelector(".start_btn");
let stopBtn = document.querySelector(".stop_btn");
let resetBtn = document.querySelector(".reset_btn");
let lapBtn = document.querySelector(".lap_btn");
let clearBtn = document.querySelector(".clear_btn");
let resetValue = document.querySelector(".resetvalue");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;
let isRunning = false;

// Function to update the display
const updateDisplay = () => {
  countdown.textContent = 
    (hours < 10 ? "0" : "") + hours + ":" + 
    (minutes < 10 ? "0" : "") + minutes + ":" + 
    (seconds < 10 ? "0" : "") + seconds;
}

// Function to start the timer
const startTimer = () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
  }
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

// Function to reset the timer
function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

// Function to record a lap time
function recordLap() {
  if (isRunning) {
    let lapTime = document.createElement("p");
    lapTime.textContent = countdown.textContent;
    resetValue.appendChild(lapTime);
  }
}

// Function to clear all lap times
function clearLaps() {
  resetValue.innerHTML = "";
}

// Event listeners for buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);
clearBtn.addEventListener("click", clearLaps);

// Initialize display
updateDisplay();
