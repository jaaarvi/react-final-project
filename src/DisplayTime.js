import React from "react";
import "./DisplayTime.css";

export default function DisplayTime(props) {
  let date = new Date(props.time * 1000);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours <10) hours = `0${hours}`;
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;


  return (<span className="DisplayTime" id="current-time">
          {day} {hours}:{minutes}
        </span>);
}