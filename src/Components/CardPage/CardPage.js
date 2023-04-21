import React from "react";
import CardList from "../CardList/CardList"
import './CardPage.css'

const cardData = [
  { id: 1, name: "Card 1", description: "This is card 1" },
  { id: 2, name: "Card 2", description: "This is card 2" },
  { id: 3, name: "Card 3", description: "This is card 3" },
];

const CardPage = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={containerStyle}>
      <CardList cardData={cardData} />
    </div>
  );
};

export default CardPage;
