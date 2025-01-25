const countDownElement = document.getElementById("countdown");
const resetValueEement = document.querySelector(".resetvalue");
let startCount = 0;
let startId;
//function to start timer

const startTimer = () => {
   startId = setInterval(() => {
    countDownElement.innerText = startCount++;
  }, 1000);
};

//Function to stop the timer
const stopTimer = () => {
    clearInterval(startId);
}

//function to reset
const resetTimer = () => {
    startCount = 0;
    countDownElement.innerText = startCount;
    clearInterval(startId);

}

//funtions to time lapse

const timeLapse = () => {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = `The stop time is ${startCount - 1}`
    resetValueEement.append(newParagraph);
}

//function to clear time out

const clearTimeout = () => {
    resetValueEement.innerHTML = " ";
}



//event to start
document.querySelector(".start_btn").addEventListener("click", startTimer);

//event to stop
document.querySelector(".stop_btn").addEventListener("click", stopTimer);

//event to reset
document.querySelector(".reset_btn").addEventListener("click", resetTimer);

//event to lapse
document.querySelector(".lap_btn").addEventListener("click" , timeLapse);

//event to clear all
document.querySelector(".clear_btn").addEventListener("click", clearTimeout);
