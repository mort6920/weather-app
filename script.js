/**
 * @param {string} city
 * @returns {Promise<Object|null>} parsed JSON or null on error
 */

// ── Nametag: posisi random tiap refresh ──────────────────────────────────────
(function () {
  const nametag = document.getElementById("nametag");
  if (!nametag) return;

  // Pilihan posisi: kiri, tengah, kanan
  const positions = ["left", "center", "right"];
  const pick = positions[Math.floor(Math.random() * positions.length)];
  nametag.style.textAlign = pick;
})();

const locationCoords = {
"lenteng": {lat: -6.3242, lon: 106.8349},
"blok m": {lat: -6.2444, lon: 106.8023},
"palmerah": {lat: -6.1901, lon: 106.7972},
"pasar rebo": {lat: -6.3300, lon: 106.8558},
"puncak bogor": {lat: -6.6992, lon: 106.9486},
"depok": {lat: -6.3940, lon: 106.8225},
};

async function getWeather(city) {
  try {
    const coords = locationCoords[city.toLowerCase()];
    const url = coords
      ? `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=67ebc727dec00f351bf9d9830858520b`
      : `https://api.openweathermap.org/data/2.5/weather?q=${city},ID&units=metric&appid=67ebc727dec00f351bf9d9830858520b`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Show weather information in the UI for the given city.
 * @param {string} city
 */
async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  // Helper: return "N/A" when a value is undefined/null
  const val = (v) => (v !== undefined && v !== null ? v : "N/A");

  // Populate each required element
  const iconEl = document.getElementById("weather-icon");
  const iconCode = data.weather?.[0]?.icon;
  iconEl.src = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    : "";
  iconEl.alt = val(data.weather?.[0]?.description);

  document.getElementById("weather-main").textContent =
    val(data.weather?.[0]?.main);

  document.getElementById("location").textContent = val(data.name);

  document.getElementById("main-temperature").textContent =
    data.main?.temp !== undefined ? `${data.main.temp}°C` : "N/A";

  document.getElementById("feels-like").textContent =
    data.main?.feels_like !== undefined ? `${data.main.feels_like}°C` : "N/A";

  document.getElementById("humidity").textContent =
    data.main?.humidity !== undefined ? `${data.main.humidity}%` : "N/A";

  document.getElementById("wind").textContent =
    data.wind?.speed !== undefined ? `${data.wind.speed} m/s` : "N/A";

  document.getElementById("wind-gust").textContent =
    data.wind?.gust !== undefined ? `${data.wind.gust} m/s` : "N/A";

  // Reveal the card
  document.getElementById("weather-card").classList.remove("hidden");
}

// ── Event listener ────────────────────────────────────────────────────────────
document.getElementById("get-weather-btn").addEventListener("click", () => {
  const city = document.getElementById("city-select").value;
  if (!city) return; // do nothing if no city selected
  showWeather(city);
});
