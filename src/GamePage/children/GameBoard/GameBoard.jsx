import React from "react";
import "./GameBoard.css";

const GameBoard = ({ setScore }) => {
  const colors = ["yellow", "green", "purple", "orange", "red", "blue"];

  return (
    <>
      <div className="board">
        {colors.map((color) => (
          <div className="lightbulb">{color}</div>
        ))}
      </div>
    </>
  );
};

export default GameBoard;
