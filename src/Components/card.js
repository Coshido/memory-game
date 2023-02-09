import React from "react";
import "../style.css";

function Card(props) {
  return (
    <div onClick={props.clickedCheck} className="card-div">
      <img src={process.env.PUBLIC_URL + props.image} className="image" />
      <p>{props.cardName}</p>
    </div>
  );
}

export default Card;
