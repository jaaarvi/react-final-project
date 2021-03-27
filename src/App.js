import React from "react";
import "./styles.css";
import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container main">
        <div className="row">
          <div className="col-7">
            <Weather />
          </div>
          <div className="col-5">
            <Search />
            <Forecast />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
