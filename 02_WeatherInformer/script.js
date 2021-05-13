const KAKAO_API_KEY = "ed3d0c7e3fa3868026e2f54d6add9530";
const OPEN_WEATHER_API_KEY = "48b0da616e1a822f8221af5e7a1f639e";
const EXCLUDE = "minutely,hourly";
const UNITS = "metric";

const URL = (latitude, longitude) => {
  return (
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=" +
    UNITS +
    "&exclude=" +
    EXCLUDE +
    "&appid=" +
    OPEN_WEATHER_API_KEY
  );
};

const COORDS = "coords";

function getWeather(latitude, longitude) {
  $.ajax({
    url: URL(latitude, longitude),
    dataType: "json",
    type: "GET",
    async: "false",
    success: onSuccess,
    error: function (err) {
      console.log("ERROR");
    },
  });
}

function getLocation(latitude, longitude) {
  $.ajax({
    url:
      "https://dapi.kakao.com/v2/local/geo/coord2address.json?x=" +
      longitude +
      "&y=" +
      latitude,
    type: "GET",
    headers: {
      Authorization: "KakaoAK " + KAKAO_API_KEY,
    },
    success: function (data) {
      console.log(data);
    },
    error: function (e) {
      console.log(e);
    },
  });
}

function onSuccess(res) {
  var weatherDay = document.getElementsByClassName("weather-day");

  // for (var i = 0; i < 5; i++) {
  //   const TEMP_AVG = res.daily[i].temp.day;
  //   const TEMP_HIGH = res.daily[i].temp.max;
  //   const TEMP_LOW = res.daily[i].temp.min;

  //   weatherDay[i].getElementsByClassName("temperature-avg")[0].innerHTML =
  //     TEMP_AVG + "°C";
  //   weatherDay[i].getElementsByClassName("temperature-high")[0].innerHTML =
  //     TEMP_HIGH + "°C";
  //   weatherDay[i].getElementsByClassName("temperature-low")[0].innerHTML =
  //     TEMP_LOW + "°C";
  // }

  console.log("#### THIS IS RESPONSE ####");
  console.log(res);

  console.log("#### THIS IS DAILY ####");
  console.log(res.daily[0].temp.day);
}

function askForCoords() {
  navigator.geolocation.watchPosition(handleGeoSuccess, handleGeoError);
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  console.log(coordsObj);
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
  getLocation(latitude, longitude);
}

function handleGeoError() {
  alert("위치정보를 불러오는데 실패했습니다. GPS를 켜주세요.");
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    console.log("ASK");
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
    getLocation(parseCoords.latitude, parseCoords.longitude);
  }
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function init() {
  loadCoords();
}

init();
