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

    const dailyForecasts = data.list
      .filter((reading) => reading.dt_txt.includes("12:00:00"))
      .slice(0, 3);

    setForeCastData(dailyForecasts);
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

    return (
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-1 text-gray-100">
          {weatherData.name}
        </h2>
        <h3 className="text-xl font-light text-gray-400">
          {weatherData.sys.country}
        </h3>

        <div className="flex justify-center items-center my-6">
          <img
            src={getWeatherIconUrl(iconCode)}
            alt={condition}
            className="w-24 h-24"
          />

          <span className="text-7xl font-bold text-white ml-2">
            {getDisplayTemp(currentTemp)}
          </span>

          <button
            onClick={toggleUnit}
            className="ml-4 px-3 py-1 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition self-end mb-4"
          >
            Convert to {unit === "C" ? "°F" : "°C"}
          </button>
        </div>

        <p className="text-2xl capitalize text-gray-300 mb-8">{condition}</p>

        <div className="grid grid-cols-2 gap-4 border-t border-gray-700 pt-6">
          <div className="flex items-center justify-center bg-gray-700/50 p-3 rounded-lg">
            <FaTint className="text-blue-400 text-2xl mr-3" />
            <div>
              <p className="text-lg font-medium text-white">{humidity}%</p>
              <p className="text-sm text-gray-400">Humidity</p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gray-700/50 p-3 rounded-lg">
            <FaWind className="text-gray-400 text-2xl mr-3" />
            <div>
              <p className="text-lg font-medium text-white">{windSpeed}</p>
              <p className="text-sm text-gray-400">Wind Speed</p>
            </div>
          </div>
        </div>

        {forecastData && (
          <div className="mt-8 border-t border-gray-700 pt-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              3_day Forecast
            </h3>
            <div className="flex justify-between space-x-4">
              {forecastData.map((day) => (
                <div
                  key={day.dt}
                  className="bg-gray-700/50 p-4 rounded-lg flex-1 flex flex-col items-center"
                >
                  <p className="text-sm font-medium text-gray-400 mb-1">
                    {getDayName(day.dt)}
                  </p>
                  <img
                    src={getWeatherIconUrl(day.weather[0].icon)}
                    alt={day.weather[0].description}
                    className="w-12 h-12"
                  />
                  <p className="text-xl font-bold text-white mt-1">
                    {getDisplayTemp(day.main.temp)}
                  </p>
                  <p className="text-xs capitalize text-gray-400">
                    {day.weather[0].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg lg:max-w-2xl xl:max-w-3xl bg-gray-900 rounded-xl shadow2xl p-8">
        <h1 className="text-3xl font-extrabold text-center text-white mb-8">
          Standard Weather Forecast
        </h1>

        <form onSubmit={fetchWeather} className="flex mb-10">
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
        <div className="min-h[300px] flex items-center justify-center">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
