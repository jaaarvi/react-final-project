import React, {useState} from "react";
import "./UnitConversion.css";

export default function UnitConversion(props) {
  const [unit,setUnit] = useState("celsius");

  function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function changeToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
  return (        
     <div className="UnitConversion">
       <span className="temp" id="temp">
            {props.temperature}
          </span>
          <span className="units">°C 
        |{" "}
        <a href="/" onClick={changeToFahrenheit}>
          F
        </a></span>
      </div>
    );} else {
      let fahrenheitTemp = props.temperature * (9/5) +32;
      
      return (
<div className="UnitConversion">
  <span className="temp" id="temp">
            {Math.round(fahrenheitTemp)}
          </span>
         <span className="units"><a href="/" onClick={changeToCelsius}>
          °C
        </a>
        {" "}| 
        F</span>
      </div>
      );
    }
}