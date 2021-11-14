//GLOBAL VARIABLES
// APIKEY
const apiKey = "abaa5f9b2fdbce9c30bf8c70c78486ba";

// DATE INFO
const dateNow = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dateNowDay = days[dateNow.getDay()];

let dateNowYear = dateNow.getFullYear();

let months = [
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
let dateNowMonth = months[dateNow.getMonth()];

let dateNowHrs = dateNow.getHours();
if (dateNowHrs < 10) {
  dateNowHrs = `0${dateNowHrs}`;
}

let dateNowMins = dateNow.getMinutes();
if (dateNowMins < 10) {
  dateNowMins = `0${dateNowMins}`;
}

let dateNowNumber = dateNow.getDate();

// TEMPERATURES
let celsiusTemp = null;
//
//
//1 CITY SEARCH FUNCTION
function citySearch(event) {
  event.preventDefault();

  //FORECAST FUNCTION
  function getForecast(coordinates) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }

  //. BUTTON CITY SEARCH FUNCTION
  function displayConditions(response) {
    //FORECAST CALL
    getForecast(response.data.coord);

    celsiusTemp = response.data.main.temp;

    document.querySelector(
      "#input-city-h2"
    ).innerHTML = `<span class="input-city-info">${response.data.name}</span>`;

    document.querySelector(
      "#input-degree-number"
    ).innerHTML = `<span class="input-city-info">${Math.round(
      celsiusTemp
    )}</span>`;

    document.querySelector(
      "#temp-description-h6"
    ).innerHTML = `<span class="input-city-info">${response.data.weather[0].description}</span>`;

    document.querySelector(
      "#wind-speed-h6"
    ).innerHTML = `<span class="input-city-info">${response.data.wind.speed} km/h`;

    document.getElementById(
      "today-weather-icon"
    ).src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
  }

  //. API CONNECTION
  let city = document.querySelector("#city-search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayConditions);

  //. DATE INFO INTO H4
  let showDateNow = document.querySelector("#current-day-time-h5");
  showDateNow.innerHTML = `<span class="input-city-info">${dateNowDay}, ${dateNowHrs}:${dateNowMins}</span>`;

  //. DATE INFO INTO H6
  let showMonthNow = document.querySelector("#month-day-year-h6");
  showMonthNow.innerHTML = `<span class="input-city-info">${dateNowMonth} ${dateNowNumber}, ${dateNowYear}</span>`;

  //. FUNCTION UNIT F
  function changeF(event) {
    event.preventDefault();
    let tempNumber = document.querySelector("#input-degree-number");
    let fTemp = (celsiusTemp * 9) / 5 + 32;
    tempNumber.innerHTML = `<span class="input-city-info">${Math.round(
      fTemp
    )}</span>`;
  }

  //. LET STMNT FOR FUNCTION UNIT F
  let unitF = document.querySelector("#f");
  unitF.addEventListener("click", changeF);

  //. FUNCTION UNIT C
  function changeC(event) {
    event.preventDefault();
    let tempNumber = document.querySelector("#input-degree-number");
    let cTemp = celsiusTemp;
    tempNumber.innerHTML = `<span class="input-city-info">${Math.round(
      cTemp
    )}</span>`;
  }

  //. LET STMNT FOR FUNCTION UNIT C
  let unitC = document.querySelector("#c");
  unitC.addEventListener("click", changeC);
}

//1 LET STMNT FOR CITY SEARCH  FUNCTION
let citySearchFunc = document.querySelector("#city-search-form");
citySearchFunc.addEventListener("submit", citySearch);
//
//
//2 YOUR LOCATION FUNCTION
//FORECAST FUNCTION
function getForecast(coordinates) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayConditions(response) {
  //FORECAST CALL
  getForecast(response.data.coord);

  celsiusTemp = response.data.main.temp;

  //. YOUR LOCATION WEATHER ICON
  document.getElementById(
    "today-weather-icon"
  ).src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

  //. DATE INTO H4
  let showDateNow = document.querySelector("#current-day-time-h5");
  showDateNow.innerHTML = `<span class="input-city-info">${dateNowDay}, ${dateNowHrs}:${dateNowMins}</span>`;

  //. DATE INTO H6
  let showMonthNow = document.querySelector("#month-day-year-h6");
  showMonthNow.innerHTML = `<span class="input-city-info">${dateNowMonth} ${dateNowNumber}, ${dateNowYear}</span>`;

  //. CITY SEARCH INFO
  celsiusTemp = response.data.main.temp;

  document.querySelector(
    "#input-city-h2"
  ).innerHTML = `<span class="input-city-info">${response.data.name}</span>`;

  document.querySelector(
    "#input-degree-number"
  ).innerHTML = `<span class="input-city-info">${Math.round(
    celsiusTemp
  )}</span>`;

  document.querySelector(
    "#temp-description-h6"
  ).innerHTML = `<span class="input-city-info">${response.data.weather[0].description}</span>`;

  document.querySelector(
    "#wind-speed-h6"
  ).innerHTML = `<span class="input-city-info">${response.data.wind.speed} km/h`;

  //. FUNCTION UNIT F
  function changeF(event) {
    event.preventDefault();
    let tempNumber = document.querySelector("#input-degree-number");
    let fTemp = (celsiusTemp * 9) / 5 + 32;
    tempNumber.innerHTML = `<span class="input-city-info">${Math.round(
      fTemp
    )}</span>`;
  }

  //. LET STMNT FOR FUNCTION UNIT F
  let unitF = document.querySelector("#f");
  unitF.addEventListener("click", changeF);

  //. FUNCTION UNIT C
  function changeC(event) {
    event.preventDefault();
    let tempNumber = document.querySelector("#input-degree-number");
    let cTemp = celsiusTemp;
    tempNumber.innerHTML = `<span class="input-city-info">${Math.round(
      cTemp
    )}</span>`;
  }

  //. LET STMNT FOR FUNCTION UNIT C
  let unitC = document.querySelector("#c");
  unitC.addEventListener("click", changeC);
}

//. API CONNECTION YOUR LOCATION
function searchLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayConditions);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

//2 LET STMNT FOR YOUR LOCATION FUNCTION
let yourLocation = document.querySelector("#current-location-button");
yourLocation.addEventListener("click", getCurrentLocation);

//3 DISPLAY FORECAST
function displayForecast(response) {
  console.log(response.data.daily);
  let forecastCard = document.querySelector("#container-forecast");
  let forecastHTML = `<div class="row">`;
  let days = [
    "Next Day",
    "Next Day",
    "Next Day",
    "Next Day",
    "Next Day",
    "Next Day",
    "Next Day",
  ];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
      <div class="col-2" id="forecast-card">
        <div class="card">
          <div class="container" id="date">
            <h6 class="date-h6" id="forecast-h6">
              <span style="font-size: 12px">${day}</span>
            </h6>
          </div>
          <img
            src="https://anatomised.com/wp-content/uploads/2016/05/spinner-test4.gif"
            class="icon"
            id="fc-icon"
            alt="pending"
            width="60"
          />
          <div class="container" id="high-low">
            <h6 class="temp-h6">+/-</h6>
          </div>
        </div>
      </div>
    `;
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastCard.innerHTML = forecastHTML;
}
