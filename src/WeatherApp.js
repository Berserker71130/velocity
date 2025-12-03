import { useState } from "react";
import { FaWind, FaTint, FaSearch, FaCloud } from "react-icons/fa";

const API_KEY = "c749497919459389bb1e8db37d371711";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForeCastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("C");

  const convertToFarenheit = (celcius) => {
    return Math.round((celcius * 9) / 5 + 32);
  };

  const getDisplayTemp = (celsius) => {
    const displayTemp =
      unit === "C" ? Math.round(celsius) : convertToFarenheit(celsius);
    const displayUnit = unit === "C" ? "C" : "F";
    return `${displayTemp}°${displayUnit}`;
  };

  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  const fetchForecast = async (cityName) => {
    const url = `${API_BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Forecast data not available.");
    }

    const data = await response.json();

    // Fetching 8 readings (3 hours * 8 = 24 hours) for the Hourly Mock
    const hourlyForecasts = data.list.slice(0, 8);

    // Filtering for the 7-Day Forecast (12:00:00)
    const dailyForecasts = data.list
      .filter((reading) => reading.dt_txt.includes("12:00:00"))
      .slice(0, 7); // Increased to 7 days for the right panel

    setForeCastData({ daily: dailyForecasts, hourly: hourlyForecasts });
  };

  const fetchWeather = async (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeatherData(null);
    setForeCastData(null);

    try {
      const weatherUrl = `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(weatherUrl);

      if (!response.ok) {
        throw new Error("City not found. Please try again.");
      }

      const data = await response.json();
      setWeatherData(data);
      await fetchForecast(city);
    } catch (err) {
      setError(err.message || "An error occured while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const getDayName = (timeStamp) => {
    const date = new Date(timeStamp * 1000);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  const getHour = (timeStamp) => {
    const date = new Date(timeStamp * 1000);
    return date.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
  };

  const renderContent = () => {
    if (loading) {
      return <p className="text-xl text-blue-300">Loading Weather Data...</p>;
    }

    if (error) {
      return <p className="text-xl text-red-400">{error}</p>;
    }

    if (!weatherData) {
      return (
        <div className="text-center text-gray-400">
          <FaCloud className="mx-auto text-6xl mb-4" />
          <p className="text-lg">Enter a city to check the current weather.</p>
        </div>
      );
    }

    const currentTemp = weatherData.main.temp;
    const condition = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;
    const humidity = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed;
    const feelsLike = weatherData.main.feels_like;

    // Extracting min/max temp for daily forecast mock
    const minTemp = weatherData.main.temp_min;
    const maxTemp = weatherData.main.temp_max;

    return (
      // ⭐️ START: MAIN GRID LAYOUT (2/3 width for main data, 1/3 for daily forecast) ⭐️
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {/* ======================================= */}
        {/* ⭐️ LEFT COLUMN (Takes 2/3 of the width) */}
        {/* ======================================= */}
        <div className="md:col-span-2 space-y-6">
          {/* 1. Main Weather & Today's Forecast Card */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl relative overflow-hidden">
            {/* Location and Sun Icon Mock (using current weather data) */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-100">
                  {weatherData.name}
                </h2>
                <p className="text-sm font-light text-gray-400">
                  Chance of rain: 0%
                </p>
              </div>
              {/* Sun Icon Mock - Using current weather icon, styled large */}
              <img
                src={getWeatherIconUrl(iconCode)}
                alt={condition}
                className="w-20 h-20 absolute right-8 top-8"
              />
            </div>

            <div className="flex items-end mb-8 mt-4">
              <span className="text-8xl font-extrabold text-white">
                {getDisplayTemp(currentTemp)}
              </span>
              <p className="text-3xl capitalize text-gray-300 ml-4 mb-2">
                {condition}
              </p>
              <button
                onClick={toggleUnit}
                className="ml-auto px-3 py-1 bg-blue-600 text-white text-md rounded-full hover:bg-blue-700 transition self-end mb-4"
              >
                Convert to {unit === "C" ? "°F" : "°C"}
              </button>
            </div>

            {/* Hourly Forecast Mock (Uses the first 6 hourly data points) */}
            <h3 className="text-lg font-semibold text-gray-300 border-t border-gray-700 pt-4 mb-4">
              TODAY'S FORECAST
            </h3>
            <div className="flex justify-between space-x-4 overflow-x-auto pb-2">
              {forecastData?.hourly.slice(0, 6).map((hour) => (
                <div
                  key={hour.dt}
                  className="flex-shrink-0 w-20 flex flex-col items-center p-2 rounded-lg"
                >
                  <p className="text-xs text-gray-400 mb-1 font-medium">
                    {getHour(hour.dt)}
                  </p>
                  <img
                    src={getWeatherIconUrl(hour.weather[0].icon)}
                    alt={hour.weather[0].description}
                    className="w-10 h-10"
                  />
                  <p className="text-lg font-bold text-white mt-1">
                    {getDisplayTemp(hour.main.temp)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Air Conditions Card */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-300">
                AIR CONDITIONS
              </h3>
              <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                See more
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Real Feel */}
              <div className="flex items-center space-x-4">
                <span className="text-2xl text-blue-400">
                  <FaTint />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Real Feel</p>
                  <p className="text-xl font-bold text-white">
                    {getDisplayTemp(feelsLike)}
                  </p>
                </div>
              </div>

              {/* Wind */}
              <div className="flex items-center space-x-4">
                <span className="text-2xl text-gray-400">
                  <FaWind />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Wind</p>
                  <p className="text-xl font-bold text-white">
                    {windSpeed} km/h
                  </p>
                </div>
              </div>

              {/* Humidity */}
              <div className="flex items-center space-x-4">
                <span className="text-2xl text-green-400">
                  <FaTint />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Humidity</p>
                  <p className="text-xl font-bold text-white">{humidity}%</p>
                </div>
              </div>

              {/* UV Index Mock */}
              <div className="flex items-center space-x-4">
                <span className="text-2xl text-yellow-500">
                  {/* Mocking UV Index Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-gray-400">UV Index</p>
                  <p className="text-xl font-bold text-white">3 (Moderate)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================= */}
        {/* ⭐️ RIGHT COLUMN (Takes 1/3 of the width) */}
        {/* ======================================= */}
        <div className="md:col-span-1 bg-gray-800 p-8 rounded-xl shadow-2xl space-y-4">
          <h3 className="text-lg font-semibold text-gray-300">
            7-DAY FORECAST
          </h3>

          {/* List of Daily Forecasts */}
          {forecastData?.daily.map((day, index) => (
            <div
              key={day.dt}
              className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
            >
              <p className="text-md font-medium text-gray-300 w-16">
                {index === 0 ? "Today" : getDayName(day.dt)}
              </p>
              <div className="flex items-center w-24">
                <img
                  src={getWeatherIconUrl(day.weather[0].icon)}
                  alt={day.weather[0].description}
                  className="w-10 h-10"
                />
                <p className="text-xs capitalize text-gray-400 ml-1">
                  {day.weather[0].main}
                </p>
              </div>
              <p className="text-md font-bold text-white">
                {/* Displaying Max/Min Temp */}
                {getDisplayTemp(day.main.temp_max)} /{" "}
                <span className="text-gray-400">
                  {getDisplayTemp(day.main.temp_min)}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      // ⭐️ END: MAIN GRID LAYOUT ⭐️
    );
  };

  return (
    // ⭐️ Updated App Wrapper for New Dark Theme ⭐️
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm md:max-w-4xl lg:max-w-6xl bg-gray-900 rounded-3xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-center text-white mb-8">
          Weather Dashboard
        </h1>

        {/* Search Bar */}
        <form
          onSubmit={fetchWeather}
          className="flex mb-10 w-full max-w-lg mx-auto"
        >
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City Name e.g London"
            className="flex-grow p-4 text-gray-900 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-r-full"
          >
            <FaSearch className="text-xl" />
          </button>
        </form>

        {/* Rendered Content (Grid) */}
        <div className="min-h-[400px] flex items-center justify-center">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
