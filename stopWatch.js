const playButton = document.getElementById("playButton");
const add30secButton = document.getElementById("30sec");
const add1minutButton = document.getElementById("1minut");
const add5minutButton = document.getElementById("5minut");
const resetButton = document.createElement("button");
const playButtonContainer = document.getElementById("playButtonContainer");

resetButton.innerHTML = "&#x27F3";
resetButton.id = "resetButton";

const startingMinutes = 5;
let time = startingMinutes * 60;
let isRunning = false;

const countdownEl = document.getElementById("time");

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  if (isRunning) {
    time--;
  } else {
    playButton.innerHTML = "&#9654"; // Change to pause icon
  }
  if (time === 0) {
    isRunning = false;
  }
}

playButton.addEventListener("click", () => {
  isRunning = !isRunning;

  setInterval(updateCountdown, 1000);
  playButtonContainer.appendChild(resetButton);
  playButton.innerHTML = "&#10074;&#10074;"; // Change to pause icon
});

resetButton.addEventListener("click", () => {
  isRunning = false;

  time = startingMinutes * 60;
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
