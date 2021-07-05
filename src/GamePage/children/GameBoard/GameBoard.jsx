import React, { useState, useEffect } from "react";
import "./GameBoard.css";
import Lightbulb from "./children/Lightbulb/Lightbulb";

const GameBoard = ({ setScore }) => {
  const [selected, setSelected] = useState(undefined);

  const [pattern, setPattern] = useState([]);

  const colors = [
    { name: "yellow", hexcode: "#FDFD97" },
    { name: "green", hexcode: "#9EE09E" },
    { name: "purple", hexcode: "#CC99C9" },
    { name: "orange", hexcode: "#FEB144" },
    { name: "red", hexcode: "#FF6663" },
    { name: "blue", hexcode: "#9EC1CF" },
  ];

  useEffect(() => {
    setPattern((prev) => {
      return [...prev, "yellow"];
    });
  }, []);

  console.log("pattern is:", pattern);
  return (
    <>
      <div className="board">
        {colors.map((color) => (
          <Lightbulb
            key={color.name}
            color={color}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </>
  );
};

export default GameBoard;
