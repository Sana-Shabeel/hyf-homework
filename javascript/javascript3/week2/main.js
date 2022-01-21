"use strict";
console.log("AB9");
//MOVIES EXERCISE
// 1 fetch the api
// create an array of bad movies
// create an array of bad movies since 2000
fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((movies) => {
    const badMovies = movies
      .filter((mov) => mov.rating <= 5)
      .filter((mov) => mov.year >= 2000);
    console.log(badMovies);
  })
  .catch((error) => console.log(error));

//PROMISE THAT RESOLVES AFTER SET TIME
// 1 create a function with 1 paramter
// 2 function has to return a promise
// 3 this will resolve after the seconds have been passed to ii
// 3 When you have written the promise, use it with async/await
async function resolvedFn(resolveAfter) {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(), resolveAfter * 1000);
  });
}
resolvedFn(8).then(() => {
  console.log("I am called asynchronously"); // logged out after 8 seconds
});

// REWRITE TIME
//Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises. The getCurrentPosition function is probably going to throw an error, but that is fine. As long as you can use it as a promise.
function setTimeoutPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

function getCurrentLocation(params) {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
}
getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

//   FETCHING AND WAITING
// Wait 3 seconds
// After 3 seconds fetch some data from any api you like
// Log out the data from the api
function delayFn() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}
async function asyncWay() {
  // the async/await method
  // could not use settimeOut inside async/await
  await delayFn();
  const response = await fetch("https://cataas.com/api/cats?tags=cute");
  const data = response.json();
  return data;
}
asyncWay().then((data) => console.log(data));

//Do the 3 steps below using promises and .then
function promiseWay(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch("https://cataas.com/api/cats?tags=cute"));
    }, 3000);
  });
}
promiseWay()
  .then((res) => res.json())
  .then((data) => console.log(data));

// VISUAL PROMISE
const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

async function translateOneByOne() {
  try {
    await moveElement(redBox, { x: 20, y: 300 });
    console.log("RED MOVED");
    await moveElement(blueBox, { x: 400, y: 300 });
    console.log("BLUE MOVED");
    await moveElement(greenBox, { x: 400, y: 20 });
    console.log("GREEN MOVED");
  } catch (e) {
    console.log(e);
  }
  return "🥳";
}
function translateAllAtOnce() {
  return new Promise((rs, rj) => {
    rs();
  });
}

// translateOneByOne()
// translateAllAtOnce()

function waitToCallFn(params) {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

async function promiseCalls(params) {
  await translateOneByOne();

  await moveElement(redBox, { x: 0, y: 0 });
  await moveElement(blueBox, { x: 0, y: 0 });
  await moveElement(greenBox, { x: 0, y: 0 });
  await waitToCallFn();
  await translateAllAtOnce().then((res) => {
    moveElement(blueBox, { x: 400, y: 300 });
    moveElement(redBox, { x: 20, y: 300 });
    moveElement(greenBox, { x: 400, y: 20 });
  });
  console.log("All elements have successfully reached their targets");
}
promiseCalls();
