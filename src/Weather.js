import React, { useState } from "react";
import "./Weather.css";
import Geolocation from "./Geolocation";
import CurrentWeather from "./CurrentWeather";
import DisplayTime from "./DisplayTime";
import axios from "axios";

export default function Weather() {
  const [ready,setReady] = useState(false);
  const [weatherData,setWeatherData] = useState({});

  function handleCall(response) {
    console.log(response);
    setWeatherData({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feelslike: Math.round(response.data.main.feels_like),
      time: response.data.dt
    });
    setReady(true); 
  }

  function displayWeather() {
    let apiKey = "d5b0c74c5eb60f41476746edc89afb39";
    let city = "tokyo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleCall);
  }

  if (ready === true) {return (
    <div className="Weather">
      <br />
      <br />
      <div className="row">
        <div className="col-10">
          <span id="location">{weatherData.name}</span>
        </div>
        <div className="col-2">
          <Geolocation />
        </div>
      </div>
      <div className="card current-weather mx-auto">
        <DisplayTime time={weatherData.time} />
        <br />
        <CurrentWeather temperature={weatherData.temperature} description={weatherData.description} icon={weatherData.icon} />
      </div>
      <div className="card current-details mx-auto">
        <div className="details-data position-absolute top-50 start-50 translate-middle">
          <div className="other-details">
            <span id="desc">{weatherData.description}</span>
            <br />
            feels like <span id="feels-like">{weatherData.feelslike}</span>°<br />
          </div>
          <br />
          <br />
          <div className="other-weather">
            <span id="humid">{weatherData.humidity}</span>% humidity <br />
            <span id="wind">{weatherData.wind}</span> m/s wind speed
          </div>
        </div>
      </div>
      <div className="units">
        <a href="/" className="celsius-link">
          celsius
        </a>{" "}
        /
        <a href="/" className="fahrenheit-link inactive">
          fahrenheit
        </a>
      </div>
    </div>
  );} else {
    displayWeather();

    return ("Loading...");
  }
}
