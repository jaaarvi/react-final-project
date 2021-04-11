import React from "react";
import "./CurrentWeather.css";
import UnitConversion from "./UnitConversion";


export default function CurrentWeather(props) {

  return (
    <div className="CurrentWeather">
      <div className="row clearfix position-absolute top-50 start-50 translate-middle">
        <div className="col-3">
          <img
            src={props.icon}
            alt={props.description}
            id="current-icon"
          />
        </div>
        <div className="col-9 current-temp">
      
        <UnitConversion temperature={props.temperature} />
  
        </div>
      </div>
    </div>
  );
}
