import React, { useState } from "react";
import "./GamePage.css";
import GameBoard from "./children/GameBoard/GameBoard";

const GamePage = ({ name }) => {
  const [score, setScore] = useState(0);
  return (
    <>
      <div className="header">
        <h2>Good luck, {name}!</h2>
        <h2>Score: {score}</h2>
      </div>
      <GameBoard setScore={setScore} />
    </>
  );
};

export default GamePage;
