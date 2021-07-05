import React, { useState } from "react";
import "./GameBoard.css";

const GameBoard = ({ setScore }) => {
  const [selected, setSelected] = useState(undefined);

  const colors = [
    { name: "yellow", hexcode: "#FDFD97" },
    { name: "green", hexcode: "#9EE09E" },
    { name: "purple", hexcode: "#CC99C9" },
    { name: "orange", hexcode: "#FEB144" },
    { name: "red", hexcode: "#FF6663" },
    { name: "blue", hexcode: "#9EC1CF" },
  ];

  return (
    <>
      <div className="board">
        {colors.map((color) => (
          <div
            key={color.name}
            className="lightbulb"
            style={{
              backgroundColor: selected === color.name && color.hexcode,
            }}
            onClick={() => setSelected(color.name)}
          />
        ))}
      </div>
    </>
  );
};

export default GameBoard;
