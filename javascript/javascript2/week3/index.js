"use strict";
console.log("JS2 WEEK3");

// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
window.addEventListener("DOMContentLoaded", function (e) {
  setTimeout(() => {
    console.log("Called after 2.5 seconds after script load");
  }, 2500);
});

// Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
function delayLog(delay, stringToLog) {
  setTimeout(function () {
    console.log(stringToLog);
  }, delay);
}

delayLog(3000, "This string logged after 3 seconds");

// Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const button5Second = document.querySelector("#called");
button5Second.addEventListener("click", function () {
  delayLog(3000, "called after 5 seconds");
});

// Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.
function earth() {
  const var1 = "";
  console.log("Earth");
}
function saturn() {
  const var2 = "";
  console.log("Saturn");
}
const planetLogFunction = (logFunction) => {
  logFunction();
};
planetLogFunction(earth);
planetLogFunction(saturn);

// Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
const btnLocation = document.querySelector(".location");
const succesCallback = (position) => {
  console.log(position);
};
const errorCallback = (error) => {
  console.error(error);
};
btnLocation.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(succesCallback, errorCallback);
});

// Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions
const runAfterDelay = (delay, callback) => {
  return setTimeout(callback, delay);
};
runAfterDelay(4000, function () {
  console.log("Should be logged after 4 seconds");
});
runAfterDelay(5000, function () {
  console.log("%c HALA MADRiiiiiiiD ¡¡¡¡¡¡¡", " color: blue");
});

// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"

// for some reason the double click doesnt register when you are viewing the console
document.addEventListener("dblclick", function () {
  console.log("double click!!!!!!!!!!!!");
});

// Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke == true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
  if (Boolean) return;
}

jokeCreator(true, () => {
  console.log("funny joke HHH!!");
});
jokeCreator(false, "", () => {
  console.log(" Not funny joke 😔");
});

// Function as a variable
// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

const arrayWithFunction = [
  function axe() {
    console.log("axe function");
  },
  function rocks() {
    console.log("rocks function");
  },
  function locks() {
    console.log("locks function");
  },
];
arrayWithFunction.map((f) => {
  f();
});
// Create a function as a const and try creating a function normally. Call both functions.
const functionExpression = () => {
  console.log("This is a function expression");
};
function functionDeclaration() {
  console.log("This is a function Declaration");
}
functionExpression();
functionDeclaration();

// Create an object that has a key whose value is a function. Try calling this function.
const obj = {
  method: function (params) {
    console.log("I think this is called a method ");
  },
};
obj.method();
