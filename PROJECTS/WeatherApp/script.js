const weatherDataEl = document.getElementById("WeatherData");
const cityInputEl = document.getElementById("city");
const statusMsgEl = document.getElementById("statusMsg");
const searchBtnEl = document.getElementById("searchBtn");
const btnTextEl = document.querySelector(".btn-text");

function setLoading(isLoading) {
  searchBtnEl.disabled = isLoading;
  btnTextEl.textContent = isLoading ? "Fetching..." : "Get Weather";

  if (isLoading) {
    weatherDataEl.innerHTML = `<div class="skeleton"></div>`;
    statusMsgEl.textContent = "Checking current weather...";
  }
}

async function getWeather() {
  try {
    const city = cityInputEl.value.trim();
    if (!city) {
      statusMsgEl.textContent = "Please enter a city name.";
      weatherDataEl.innerHTML = "";
      return;
    }

    setLoading(true);
    const { lat, lon } = await getGeoLoc(city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1cefe43006e662107c8d0454bde6852c`
    );

    if (!response.ok) {
      throw new Error("Unable to fetch weather details right now.");
    }

    const data = await response.json();

    statusMsgEl.textContent = `Weather loaded for ${data.name}.`;

    weatherDataEl.innerHTML = `
           <div class="weather-content">
            <div class="weather-stats">
              <h4 class="mb-2">${data.name}</h4>
              <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}ºC</p>
              <p>Humidity: ${data.main.humidity}%</p>
              <p>Wind Speed: ${data.wind.speed} m/s</p>
              <p>Description: ${data.weather[0].description}</p>
            </div>
            <img
              class="weather-icon"
              src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"
              alt="Weather Icon"
            />
          </div>
  `;
  } catch (error) {
    weatherDataEl.innerHTML = "";
    statusMsgEl.textContent = error.message || "Something went wrong.";
  } finally {
    setLoading(false);
  }
}

async function getGeoLoc(City) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=1&appid=1cefe43006e662107c8d0454bde6852c`
    );

    if (!response.ok) {
      throw new Error("Unable to find that city right now.");
    }

    const data = await response.json();

    if (!data.length) {
      throw new Error("City not found. Try another city.");
    }

    const lat = data[0].lat;
    const lon = data[0].lon;

    return { lat, lon };
  } catch (error) {
    throw error;
  }
}

cityInputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWeather();
  }
});