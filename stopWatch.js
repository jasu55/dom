const timer = document.getElementById("timer");
const playButton = document.getElementById("playButton");
const stopWatch = document.getElementById("stopWatch");
const add30secButton = document.getElementById("30sec");
const add1minutButton = document.getElementById("1minut");
const add5minutButton = document.getElementById("5minut");
const resetButton = document.createElement("button");
const playButtonContainer = document.getElementById("playButtonContainer");
const container = document.getElementById("container");
const containerTime = document.getElementById("containerTime");
resetButton.innerHTML = "&#x27F3";
resetButton.id = "resetButton";

const startingMinutes = 5;
let time = startingMinutes * 60;

let isRunning = false;

let isStopWatchWorking = false;

const countdownEl = document.getElementById("time");

function updateCountdown() {
  const minutes = Math.floor(time / 60);

  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  if (isRunning) {
    if (!isStopWatchWorking) {
      time--;
    } else {
      time++;
    }
  }
  if (time === 0 && !isStopWatchWorking) {
    isRunning = false;
    clearInterval(interval);
  }
  if (isStopWatchWorking) {
    containerTime.innerHTML = countdownEl.innerHTML;
  }
  countdownEl.innerHTML = `${minutes}:${seconds}`;
}
let interval = null;

playButton.addEventListener("click", () => {
  console.log("Play button clicked");
  isRunning = !isRunning;
  playButtonContainer.appendChild(resetButton);
  playButton.style.backgroundColor = "rgb(183, 183, 238)";
  container.style.backgroundColor = "rgb(232, 222, 222)";
  if (isRunning) {
    interval = setInterval(updateCountdown, 1000);
    playButton.innerHTML = "&#10074;&#10074;"; // Change to pause icon
  } else {
    console.log("Stopping the stopwatch");
    clearInterval(interval);
    playButton.innerHTML = "&#9654"; // Change to pause icon
    container.style.backgroundColor = "rgb(149, 149, 98)";
  }
});
resetButton.addEventListener("click", () => {
  isRunning = false;
  clearInterval(interval);
  if (isStopWatchWorking) {
    time = 0;
  } else {
    time = startingMinutes * 60;
  }
  updateCountdown();
});

add30secButton.addEventListener("click", () => {
  time += 30;
  updateCountdown();
});

add1minutButton.addEventListener("click", () => {
  time += 60;
  updateCountdown();
});

add5minutButton.addEventListener("click", () => {
  time += 300;
  updateCountdown();
});

stopWatch.addEventListener("click", () => {
  clearInterval(interval);
  isRunning = false;
  time = 0;
  isStopWatchWorking = true;
  container.style.backgroundColor = "rgb(232, 222, 222)";
  stopWatch.innerHTML = "&#10003   Stopwatch";
  stopWatch.style.backgroundColor = " rgb(183, 183, 238)";
  timer.innerHTML = "&#x231B Timer";
  timer.style.backgroundColor = "transparent";
  containerTime.innerHTML = "0";
});

timer.addEventListener("click", () => {
  clearInterval(interval);
  isStopWatchWorking = false;
  time = startingMinutes * 60;
  stopWatch.innerHTML = "&#9201   Stopwatch";
  stopWatch.style.backgroundColor = "transparent";
  timer.innerHTML = "&#10003; Timer";
  timer.style.backgroundColor = "rgb(183, 183, 238)";
  containerTime.innerHTML = `${startingMinutes}:00`;
});
console.log([[2, 4, 5] + [5, 5, 5]] + "");
// make Array
console.log([...[2, 4, 5], ...[5, 5, 5]]);

console.log(([[2, 4, 5] + [5, 5, 5]] + "").split(","));
