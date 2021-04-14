import React from "react";

export default function ForecastDate(props) {
  let date = new Date(props.date * 1000);
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  let day = days[date.getDay()];

  return <div className="ForecastDate">{day}</div>;
}