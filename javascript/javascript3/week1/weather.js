console.log("JS3 WEEK1");
const containerDiv = document.querySelector(".current-weather");
const time = document.querySelector("#time");
const amToPM = document.querySelector("#am-pm");
const currentDate = document.getElementById("date");
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
setInterval(() => {
  const date = new Date();
  const month = date.getMonth();
  const newDate = date.getDate();
  const day = date.getDay();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const finalMinutes = minutes <= 10 ? "0" + minutes : minutes;
  const year = date.getFullYear();
  const ampm = hour >= 12 ? "PM" : "AM";
  time.innerHTML =
    hour + ":" + finalMinutes + ` <span id="am-pm">${ampm}</span>`;
  currentDate.innerHTML = `${daysOfTheWeek[day]} ${newDate}  ${monthArray[month]} ${year}`;
}, 1000);

///

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const hiddenCLass = document.querySelector(".hidden");

// form evetlistener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = form.elements.query.value;
  const units = "metric";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=276989726f58d1c881ca8aff464bf98a&units=${units}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let sunRise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      let sunSet = new Date(data.sys.sunset * 1000).toLocaleTimeString();
      console.log(sunRise);
      hiddenCLass.classList.remove("hidden");
      containerDiv.innerHTML = `
        <img
            src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
            class="main-weather-img"
            alt="${data.weather[0].description}"
          />
        <h1>${data.name} <span>${data.sys.country}</span>   </h1>
          <h3>Temperature:  <span>${data.main.temp}°c</span></h3>
           <h3>Feels like:  <span>${data.main.feels_like}°c</span></h3>
          <h3>It is currently:  <span>${data.clouds.all}%</span>  cloudy</h3>
          <h3>Sunrise:  <span>${sunRise}</span></h3>
          <h3>Sunset:  <span>${sunSet}</span></h3>`;
      wind.textContent = data.wind.speed + "m/s";
      humidity.innerText = data.main.humidity + "%";
      pressure.textContent = data.main.pressure;
    });
});

// getting current location
const locationBtn = document.querySelector(".location");
locationBtn.addEventListener("click", (e) => {
  console.log("ok");

  window.navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("lat:" + lat + " lng:" + lng);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=276989726f58d1c881ca8aff464bf98a`
    )
      .then((res) => res.json())
      .then((data) => {
        hiddenCLass.classList.toggle("hidden");
        containerDiv.innerHTML = `
          <img
              src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
              class="main-weather-img"
              alt="${data.weather[0].description}"
            />
          <h1>${data.name} <span>${data.sys.country}</span>   </h1>
            <h3>Temperature:  <span>${data.main.temp}°c</span></h3>
             <h3>Feels like:  <span>${data.main.feels_like}°c</span></h3>
            <h3>It is currently:  <span>${data.clouds.all}%</span>  cloudy</h3>`;
        wind.textContent = data.wind.speed + "m/s";
        humidity.innerText = data.main.humidity + "%";
        pressure.textContent = data.main.pressure;
      });
  }
  function geoError() {
    alert("failed to get location.");
  }
});
