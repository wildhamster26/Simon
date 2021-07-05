import React, { useState, useEffect, useMemo } from "react";
import "./GameBoard.css";
import Lightbulb from "./children/Lightbulb/Lightbulb";
import getRandomColor from "./helpers/getRandomColor";

const GameBoard = ({ setScore }) => {
  const [selected, setSelected] = useState(undefined);

  const [pattern, setPattern] = useState([]);

  const colors = useMemo(
    () => [
      { name: "yellow", hexcode: "#FDFD97" },
      { name: "green", hexcode: "#9EE09E" },
      { name: "purple", hexcode: "#CC99C9" },
      { name: "orange", hexcode: "#FEB144" },
      { name: "red", hexcode: "#FF6663" },
      { name: "blue", hexcode: "#9EC1CF" },
    ],
    []
  );

  useEffect(() => {
    setPattern((prev) => {
      return [...prev, getRandomColor(colors)];
    });
  }, [colors]);

  // todo:
  // - display the colors from the pattern
  // - register user's responses
  // - test response to match pattern
  //    if correct, extend the pattern and do it again
  //    if wrong, game over

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
