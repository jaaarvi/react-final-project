import React, { useState } from "react";
import "./Forecast.css";
import ForecastData from "./ForecastData";
import axios from "axios";

export default function Forecast(props) {
  const [ready,setReady] = useState(false);
  const [forecastData,setForecastData] = useState(null);

  function displayForecast(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }


  if (ready) {
    return (
    <div className="Forecast">
      <div className="card forecast-card">
        {forecastData.map(function(dailyForecast, index)
        { if (index < 5) { return <div key={index}>
        <ForecastData data={dailyForecast} /></div>;
        } else { return null; }})}
      </div>
    </div>
  );
  } else {
    let apiKey = "d5b0c74c5eb60f41476746edc89afb39";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
