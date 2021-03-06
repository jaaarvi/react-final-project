import React from "react";
import ForecastDate from "./ForecastDate";
import "./ForecastData.css";

export default function ForecastData(props) {
  let forecastData = {
    iconUrl: `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`,
    description: props.data.weather[0].description,
    maximumTemp: Math.round(props.data.temp.max),
    minimumTemp: Math.round(props.data.temp.min),
    date: props.data.dt
  };

  return (
    <div className="ForecastData">
      <div className="row" id="forecast-row">
        <div className="col-4">
          <span className="forecast-date"><ForecastDate date={forecastData.date} /></span>
        </div>
        <div className="col-3">
          <img
            src={forecastData.iconUrl}
            alt={forecastData.description}
            className="forecast-icon"
          />
        </div>
        <div className="col-5 text-end">
          <span className="forecast-temp">
            high {forecastData.maximumTemp}°
            <br />
            low {forecastData.minimumTemp}°
          </span>
        </div>
      </div>
    </div>
  );
}
