"use strict";

const input = document.querySelector("input");
const sCount = document.querySelector(".s-count");
const lCount = document.querySelector(".l-count");
const startBtn = document.querySelector(".startBtn");
const sWins = document.querySelector("h3");
const lWins = document.querySelector("h4");
const drawMessage = document.querySelector("h2");
const infoBtn = document.querySelector(".info");
const infoText = document.querySelector(".info-text");
const refreshBtn = document.querySelector(".refresh");

// info btn
infoBtn.addEventListener("click", (e) => {
  infoText.classList.toggle("toggle");
});

// New game btn

refreshBtn.addEventListener("click", () => window.location.reload(true));

let countS = 0;
let countP = 0;
let intervalID;
const sPressCount = [];
const lPressCount = [];
function handleEvent(event) {
  if (event.key == "s") {
    sCount.innerHTML = countS++;
    sPressCount.push(countS);
  }
  if (event.key == "l") {
    lCount.innerHTML = countP++;
    lPressCount.push(countP);
  }
}

console.log(sPressCount);
console.log(lPressCount);

function presser(delay) {
  document.addEventListener("keydown", handleEvent);
  setTimeout(() => {
    document.removeEventListener("keydown", handleEvent);
    console.log("ok");
    if (
      sPressCount[sPressCount.length - 1] > lPressCount[lPressCount.length - 1]
    ) {
      console.log("s wins");
      sWins.innerHTML = "S WINS!!!!";
    } else if (
      sPressCount[sPressCount.length - 1] < lPressCount[lPressCount.length - 1]
    ) {
      console.log("l wins");
      lWins.innerHTML = "L WINS!!!!";
    } else if (
      (sPressCount[sPressCount.length - 1] =
        lPressCount[lPressCount.length - 1])
    ) {
      console.log("no one wins");
      drawMessage.innerHTML = "OOPS NO ONE WINS 🤡🤡!!!!";
    }
  }, delay);
}

input.addEventListener("keydown", () => {
  console.log(input.value);
  input.value;
});

startBtn.addEventListener("click", (e) => {
  presser(parseInt(input.value + "000"));
});
