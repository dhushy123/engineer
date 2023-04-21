import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img src="https://picsum.photos/200" alt="Card Image" />
      <div className="card-info">
        <h2>Card Title</h2>
        <p>Card Description</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
