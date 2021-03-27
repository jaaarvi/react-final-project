import React from "react";
import "./Weather.css";
import Geolocation from "./Geolocation";
import CurrentWeather from "./CurrentWeather";

export default function Weather() {
  return (
    <div className="Weather">
      <br />
      <br />
      <div className="row">
        <div className="col-10">
          <span id="location">Chicago</span>
        </div>
        <div className="col-2">
          <Geolocation />
        </div>
      </div>
      <div className="card current-weather mx-auto">
        <span className="time" id="current-time">
          Friday 11:00
        </span>
        <br />
        <CurrentWeather />
      </div>
      <div className="card current-details mx-auto">
        <div className="details-data position-absolute top-50 start-50 translate-middle">
          <div className="other-details">
            <span id="desc">sunny</span>
            <br />
            feels like <span id="feels-like">19</span>°<br />
          </div>
          <br />
          <br />
          <div className="other-weather">
            <span id="humid">80</span>% humidity <br />
            <span id="wind">5</span> m/s wind speed
          </div>
        </div>
      </div>
      <div className="units">
        <a href="#" className="celsius-link">
          celsius
        </a>{" "}
        /
        <a href="#" className="fahrenheit-link inactive">
          fahrenheit
        </a>
      </div>
    </div>
  );
}
