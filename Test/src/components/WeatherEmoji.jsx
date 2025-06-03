const getWeatherEmoji = (id) => {
  if (id >= 200 && id < 300) return "⛈️";
  if (id >= 300 && id < 500) return "🌦️";
  if (id >= 500 && id < 600) return "🌧️";
  if (id >= 600 && id < 700) return "❄️";
  if (id >= 700 && id < 800) return "🌫️";
  if (id === 800) return "☀️";
  if (id > 800) return "☁️";
  return "❓";
};

const WeatherEmoji = ({ id }) => {
  return <h2 className="weather-emoji">{getWeatherEmoji(id)}</h2>;
};

export default WeatherEmoji;
