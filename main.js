// INPUT DATE
const dateNow = new Date();

//1 MAIN CITY SEARCH FUNCTION
function citySearch(event) {
  event.preventDefault();

  //. FUNCTION FOR OUTSIDE INFO
  function displayConditions(response) {
    let temp = response.data.main.temp;
    document.querySelector(
      "#input-city-h2"
    ).innerHTML = `<span class="input-city-info">${response.data.name}</span>`;
    document.querySelector(
      "#input-degree-number"
    ).innerHTML = `<span class="input-city-info">${Math.round(temp)}</span>`;
    document.querySelector(
      "#temp-description-h6"
    ).innerHTML = `<span class="input-city-info">${response.data.weather[0].description}</span>`;
    // document.getElementById("today-weather-icon").src =
    //   "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather04-512.png";
  }

  //. LET STMNT FOR OUTSIDE INFO
  let apiKey = "abaa5f9b2fdbce9c30bf8c70c78486ba";
  let city = document.querySelector("#city-search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayConditions);

  // .DATE INFO
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

  //. DATE INTO H4
  let showDateNow = document.querySelector("#current-day-time-h5");
  showDateNow.innerHTML = `<span class="input-city-info">${dateNowDay}, ${dateNowHrs}:${dateNowMins}</span>`;
  //. DATE INTO H6
  let showMonthNow = document.querySelector("#month-day-year-h6");
  showMonthNow.innerHTML = `<span class="input-city-info">${dateNowMonth} ${dateNowNumber}, ${dateNowYear}</span>`;

  //. DATE INTO FORECAST 1
  // let showForecast1Date = document.querySelector("#forecast-1-h6");
  // showForecast1Date.innerHTML = `???`;

  //. TEMP INTO FORECAST 1 HIGH/LOW
  // let showForecast1Temp = document.querySelector("#forecast-1-hl");
  // showForecast1Temp.innerHTML = `22/18`;

  //. FUNCTION UNIT F
  // function changeF(event) {
  //   event.preventDefault();
  //   let tempNumber = document.querySelector("#input-degree-number");
  //   tempNumber.innerHTML = `<span class="input-city-info">69</span>`;
  // }

  //. LET STMNT FOR FUNCTION UNIT F
  // let unitF = document.querySelector("#f");
  // unitF.addEventListener("click", changeF);

  //. FUNCTION UNIT C
  // function changeC(response) {
  //   event.preventDefault();
  //   let tempNumber = document.querySelector("#input-degree-number");
  //   tempNumber.innerHTML = `<span class="input-city-info">19</span>`;
  // }

  //. LET STMNT FOR FUNCTION UNIT C
  // let unitC = document.querySelector("#c");
  // unitC.addEventListener("click", changeC);

  //. FORECAST 1 WEATHER ICON
  // document.getElementById("fc-1-icon").src =
  //   "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png";

  //. FORECAST 2 WEATHER ICON
  // document.getElementById("fc-2-icon").src =
  //   "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png";

  //. FORECAST 3 WEATHER ICON
  // document.getElementById("fc-3-icon").src =
  //   "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-showers-512.png";

  //. FORECAST 4 WEATHER ICON
  // document.getElementById("fc-4-icon").src =
  //   "https://th.bing.com/th/id/R.6f91bc8f92f34fe50d84f23442265d64?rik=ZRQrntvuFnotmw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fmostly-sunny-weather-icon-73.png&ehk=wvtR6GA16kKzmVDywyKt58A6wCKPp%2bHpnr9o7PcM9RE%3d&risl=&pid=ImgRaw&r=0";

  //. FORECAST 5 WEATHER ICON
  // document.getElementById("fc-5-icon").src =
  //   "https://th.bing.com/th/id/R.6f91bc8f92f34fe50d84f23442265d64?rik=ZRQrntvuFnotmw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fmostly-sunny-weather-icon-73.png&ehk=wvtR6GA16kKzmVDywyKt58A6wCKPp%2bHpnr9o7PcM9RE%3d&risl=&pid=ImgRaw&r=0";

  //. FORECAST 6 WEATHER ICON
  // document.getElementById("fc-6-icon").src =
  //   "https://cdn4.iconfinder.com/data/icons/disasters-flat-colorful/2048/6741_-_Thunderstorm-512.png";

  //. FORECAST 7 WEATHER ICON
  // document.getElementById("fc-7-icon").src =
  //   "https://th.bing.com/th/id/R.6f91bc8f92f34fe50d84f23442265d64?rik=ZRQrntvuFnotmw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fmostly-sunny-weather-icon-73.png&ehk=wvtR6GA16kKzmVDywyKt58A6wCKPp%2bHpnr9o7PcM9RE%3d&risl=&pid=ImgRaw&r=0";
}

//1 LET STMNT FOR MAIN CITY SEARCH FUNCTION
let citySearchFunc = document.querySelector("#city-search-form");
citySearchFunc.addEventListener("submit", citySearch);

//2 BUTTON YOUR LOCATION FUNCTION
function displayConditions(response) {
  // .DATE INFO
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

  //. DATE INTO H4
  let showDateNow = document.querySelector("#current-day-time-h5");
  showDateNow.innerHTML = `<span class="input-city-info">${dateNowDay}, ${dateNowHrs}:${dateNowMins}</span>`;
  //. DATE INTO H6
  let showMonthNow = document.querySelector("#month-day-year-h6");
  showMonthNow.innerHTML = `<span class="input-city-info">${dateNowMonth} ${dateNowNumber}, ${dateNowYear}</span>`;
  // OUTSIDE TEMP INFO
  let temp = response.data.main.temp;
  document.querySelector(
    "#input-city-h2"
  ).innerHTML = `<span class="input-city-info">${response.data.name}</span>`;
  document.querySelector(
    "#input-degree-number"
  ).innerHTML = `<span class="input-city-info">${Math.round(temp)}</span>`;
  document.querySelector(
    "#temp-description-h6"
  ).innerHTML = `<span class="input-city-info">${response.data.weather[0].description}</span>`;
}

function searchLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "abaa5f9b2fdbce9c30bf8c70c78486ba";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayConditions);
}

function getCurrentLocation(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(searchLocation);
}

//2 LET STMNT FOR BUTTON YOUR LOCATION FUNCTION
let yourLocation = document.querySelector("#current-location-button");
yourLocation.addEventListener("click", getCurrentLocation);
