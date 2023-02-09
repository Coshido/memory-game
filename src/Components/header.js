import React, { useState } from "react";

function Header(props) {
  return (
    <header>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/Media/Adventure-Time-Logo.png"}
          className="header-image"
        />

        <p className="header-title">Memory Game</p>
      </div>
      <div>
        <p className="best-score">Best Score: {props.bestScore}</p>
        <p className="current-score">Current Score:{props.score}</p>
      </div>
    </header>
  );
}

export default Header;
