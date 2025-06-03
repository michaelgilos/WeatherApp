import Description from "./Description";
import Humidity from "./Humidity";
import Temperature from "./Temperature";
import WeatherEmoji from "./WeatherEmoji";
import Wind from "./Wind";

const WeatherCard = ({ city, weatherData }) => {
  return (
    <>
      <div className="card">
        <h1>{city}</h1>
        <Temperature temp={weatherData.Temperature} />
        <Humidity humidity={weatherData.Humidity} />
        <Wind speed={weatherData.Speed} />
        <Description description={weatherData.Description} />
        <WeatherEmoji id={weatherData.id} />
      </div>
    </>
  );
};

export default WeatherCard;
