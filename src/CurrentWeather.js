import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="row clearfix position-absolute top-50 start-50 translate-middle">
        <div className="col-3">
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="current desc"
            id="current-icon"
          />
        </div>
        <div className="col-9 current-temp">
          <span className="temp" id="temp">
            15°
          </span>
          <br />
        </div>
      </div>
    </div>
  );
}
