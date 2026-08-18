const getWeatherBtn = document.getElementById("get-weather-btn");
const locationSelector = document.getElementById("location-selector");
const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationEl = document.getElementById("location");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    console.log(error);
  }
}

async function showWeather(city) {
  try {
    const weatherData = await getWeather(city);

    const { weather, main, wind: windData, name } = weatherData;
    const { main: weatherMainData, description, icon } = weather?.[0] || {};

    locationEl.textContent = validateData(name);

    mainTemperature.textContent =
      validateData(main?.temp) === "N/A" ? "N/A" : `${main.temp}° C`;
    weatherIcon.src = validateData(icon);
    weatherIcon.alt = validateData(description);
    weatherMain.textContent = validateData(weatherMainData);
    humidity.textContent =
      validateData(main?.humidity) === "N/A"
        ? "N/A"
        : `Humidity: ${main.humidity}%`;

    feelsLike.textContent =
      validateData(main?.feels_like) === "N/A"
        ? "N/A"
        : `Feels like: ${main.feels_like}°C`;

    wind.textContent =
      validateData(windData?.speed) === "N/A"
        ? "N/A"
        : `Wind: ${windData.speed} m/s`;

    windGust.textContent =
      validateData(windData?.gust) === "N/A"
        ? "N/A"
        : `Gusts: ${windData.gust} m/s`;
  } catch (error) {
    alert("Something went wrong, please try again later");
  }
}

function validateData(data) {
  return data === undefined ? "N/A" : data;
}

getWeatherBtn.addEventListener("click", () =>
  showWeather(locationSelector.value),
);
