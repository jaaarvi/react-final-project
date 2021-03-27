import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <span className="credits">
        <a
          href="https://github.com/jaaarvi/SheCodes-Plus-Weather-App"
          target="_blank"
          className="github-source"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Jes Jarvinen
      </span>
    </div>
  );
}
