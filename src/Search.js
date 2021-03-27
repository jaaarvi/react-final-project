import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="input-group mb-3" id="search-form">
        <input
          type="text"
          className="form-control"
          placeholder="city"
          id="search-input"
        />
        <button
          className="btn btn-outline-light"
          type="button"
          id="search-button"
        >
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
}
