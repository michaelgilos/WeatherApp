import { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import WeatherForm from "./components/WeatherForm";
import { useWeatherData } from "./hooks/useWeatherData";

const Weather = () => {
  const [city, setCity] = useState("");

  const { weatherData, updateWeatherData } = useWeatherData();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city) {
      alert("Please input a city");
    } else {
      search(city);
    }
  };

  const search = async (city) => {
    updateWeatherData(city);
  };

  return (
    <>
      <WeatherForm city={city} setCity={setCity} handleSubmit={handleSubmit} />
      {weatherData ? (
        <WeatherCard city={city} weatherData={weatherData} />
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Weather;
