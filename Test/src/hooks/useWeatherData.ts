import { useEffect, useState } from "react";

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    fetchData('');
  }, []);

  const fetchData = async (city) => {
    const APIKEY = import.meta.env.VITE_APIKEY;
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
    const response = await fetch(APIURL);
    
    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data = await response.json();
    setWeatherData(data);
  };

  const updateWeatherData = (city) => {
    fetchData(city);
  }

  return {
    weatherData,
    updateWeatherData
  };
};
