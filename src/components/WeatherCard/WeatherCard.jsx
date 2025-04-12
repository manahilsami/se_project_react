import "./WeatherCard.css";
import clear from "../../assets/day/clear.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img src={clear} alt="clear" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
