import React, { useState } from "react";
import "./styles.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import axios from "axios";

export default function App() {
  const [city,setCity] = useState("Chicago");
  const [weatherData,setWeatherData] = useState({ ready: false });

  function handleCall(response) {
    setWeatherData({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      feelslike: Math.round(response.data.main.feels_like),
      time: response.data.dt,
      ready: true
    });
  }

  function displayWeather() {
    let apiKey = "d5b0c74c5eb60f41476746edc89afb39";
    let newCity = `${city}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleCall);
  }

function handleSubmit(event) {
  event.preventDefault();
  displayWeather(city);
}

function newSearch(event) {
  setCity(event.target.value);
}

    if (weatherData.ready) { return (
    <div className="App">
      <div className="container main">
        <div className="row">
          <div className="col-7">
            <Weather data={weatherData} />
          </div>
          <div className="col-5">
            <div className="Search">
              <form className="input-group mb-3" id="search-form" onSubmit={handleSubmit} >
                <input
                  type="text"
                  className="form-control"
                  placeholder="city"
                  id="search-input"
                  onChange={newSearch}
                />
                <button
                  className="btn btn-outline-light"
                  type="button"
                  id="search-button"
                >
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
            <Forecast />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );} else {
    displayWeather();

    return ("Loading...");
  }
}
