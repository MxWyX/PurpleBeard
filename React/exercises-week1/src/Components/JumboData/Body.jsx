import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "./Jumbo.css";

const Body = () => {
  const countries = ["Australia", "Madagascar", "Iceland", "Norway", "Mexico"];
  const [winner, setWinner] = useState("");
  const getWinner = () => {
    setWinner(countries[Math.floor(Math.random() * 5)]);
  };
  return (
    <div>
      <h3>The winner of the world cup will be:</h3>
      <p>{winner}</p>
      <Button onClick={getWinner}>Who will win?</Button>
    </div>
  );
};

export default Body;
