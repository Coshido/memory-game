import React, { useState } from "react";

function Header(props) {
  return (
    <header>
      <p className="header-title">Adventure Time Memory Game</p>
      <div>
        <p className="best-score">Best Score: {props.bestScore}</p>
        <p className="current-score">Current Score:{props.score}</p>
      </div>
    </header>
  );
}

export default Header;
