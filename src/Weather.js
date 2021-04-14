import React from "react";
import "./Weather.css";
// import Geolocation from "./Geolocation";
import CurrentWeather from "./CurrentWeather";
import DisplayTime from "./DisplayTime";

export default function Weather(props) {
return (
    <div className="Weather">
      <br />
      <br />
      <div className="row">
        <div className="col-10">
          <span id="location">{props.data.name}</span>
        </div>
        <div className="col-2">
          {/* <Geolocation /> */}
        </div>
      </div>
      <div className="card current-weather mx-auto">
        <DisplayTime time={props.data.time} />
        <br />
        <CurrentWeather temperature={props.data.temperature} description={props.data.description} icon={props.data.icon} />
      </div>
      <div className="card current-details mx-auto">
        <div className="details-data position-absolute top-50 start-50 translate-middle">
          <div className="other-details">
            <span id="desc">{props.data.description}</span>
            <br />
            feels like <span id="feels-like">{props.data.feelslike}</span>°
            <br />
          </div>
          <br />
          <br />
          <div className="other-weather">
            <span id="humid">{props.data.humidity}</span>% humidity <br />
            <span id="wind">{props.data.wind}</span> m/s wind speed
          </div>
        </div>
      </div>
    </div>
  );
}
