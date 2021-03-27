import React from "react";
import "./Forecast.css";
import ForecastData from "./ForecastData";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="card forecast-card">
        <ForecastData />
        <ForecastData />
        <ForecastData />
        <ForecastData />
        <ForecastData />
      </div>
    </div>
  );
}
