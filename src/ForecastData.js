import React from "react";
import "./ForecastData.css";

export default function ForecastData() {
  return (
    <div className="ForecastData">
      <div className="row" id="forecast-row">
        <div className="col-3">
          <span className="forecast-day">Day</span>
        </div>
        <div className="col-3">
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="description"
            className="forecast-icon"
          />
        </div>
        <div className="col-6 text-end">
          <span className="forecast-temp">
            high 15°
            <br />
            low 10°
          </span>
        </div>
      </div>
    </div>
  );
}
