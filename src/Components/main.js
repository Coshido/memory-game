import React, { useEffect, useState } from "react";
import Card from "./card";
import "../style.css";

const Main = (props) => {
  const [clickedCards, setClickedCards] = React.useState([""]);
  const cardArray = [
    { name: "bmo", url: "/Media/BMO.png" },
    { name: "flame", url: "/Media/FlamePrincess.png" },
    { name: "jake", url: "/Media/Jakesalad.png" },
    { name: "marceline", url: "/Media/Marceline1.png" },
    { name: "finn", url: "/Media/Original_Finn.png" },
    { name: "ice", url: "/Media/Original_Ice_King.png" },
    { name: "peppermint", url: "/Media/Peppermint_Butler.png" },
    { name: "bubble", url: "/Media/Princess_Bubblegum.png" },
  ];
  const sortedCardArray = cardArray.sort(() => Math.random() - 0.5);

  const clickedCheck = (card) => {
    if (clickedCards.includes(card.name)) {
      props.resetScore();
      setClickedCards("");
    } else {
      setClickedCards([...clickedCards, card.name]);
      props.setGameScore();
    }
  };

  return (
    <div className="card-wrapper">
      {sortedCardArray.map((card) => {
        return (
          <Card
            image={card.url}
            clickedCards={clickedCards}
            clickedCheck={() => clickedCheck(card)}
          />
        );
      })}
    </div>
  );
};

export default Main;
