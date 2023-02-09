import React, { useEffect, useState } from "react";
import Card from "./card";
import "../style.css";

const Main = (props) => {
  const [clickedCards, setClickedCards] = React.useState([""]);
  const cardArray = [
    { name: "BMO", url: "/Media/BMO.png" },
    { name: "Flame Princess", url: "/Media/FlamePrincess.png" },
    { name: "Jake the dog", url: "/Media/Jakesalad.png" },
    { name: "Marceline", url: "/Media/Marceline1.png" },
    { name: "Finn the adventurer", url: "/Media/Original_Finn.png" },
    { name: "Ice King", url: "/Media/Original_Ice_King.png" },
    { name: "Peppermint", url: "/Media/Peppermint_Butler.png" },
    { name: "Princess Bubblegum", url: "/Media/Princess_Bubblegum.png" },
    { name: "Gunter", url: "/Media/Gunter.png" },
    { name: "Earl of Lemongrab", url: "/Media/Earl.png" },
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
            cardName={card.name}
            clickedCheck={() => clickedCheck(card)}
          />
        );
      })}
    </div>
  );
};

export default Main;
