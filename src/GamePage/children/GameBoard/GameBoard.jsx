import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./GameBoard.css";
import Lightbulb from "./children/Lightbulb/Lightbulb";
import getRandomColor from "./helpers/getRandomColor";

const GameBoard = ({ setScore }) => {
  const [isGameActive, setIsGameActive] = useState(true);

  const [selected, setSelected] = useState(undefined);

  const [pattern, setPattern] = useState([]);
  const [playerAnswer, setPlayerAnswer] = useState([]);

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
    const colorNameToAdd = getRandomColor(colors).name;
    setPattern((prev) => [...prev, colorNameToAdd]);
    setSelected(colorNameToAdd);
    const timeoutId = setTimeout(() => {
      setSelected(null);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [colors]);

  const handleLightbulbClick = (colorName) => {
    setSelected(colorName);
    setPlayerAnswer((prev) => [...prev, colorName]);
  };

  const testPlayerAnswer = useCallback(() => {
    return pattern.every((el, i) => el === playerAnswer[i]);
  }, [pattern, playerAnswer]);

  const endGame = useCallback(() => {
    setPattern(null);
    setSelected(null);
    setPlayerAnswer(null);
    setIsGameActive(false);
  }, [setPattern, setPlayerAnswer]);

  const nextRound = useCallback(() => {
    setScore((prev) => prev + 10);
    // start next round
  }, [setScore]);

  useEffect(() => {
    if (playerAnswer?.length > 0 && pattern.length === playerAnswer.length) {
      const answerMatchPattern = testPlayerAnswer();
      answerMatchPattern ? nextRound() : endGame();
    }
  }, [pattern, playerAnswer, nextRound, endGame, testPlayerAnswer]);

  // todo:
  // - display the colors from the pattern
  // - register user's responses
  // - test response to match pattern
  //    if correct, extend the pattern and do it again
  //    if wrong, game over

  return (
    <>
      <div className="board">
        {colors.map((color) => (
          <Lightbulb
            key={color.name}
            color={color}
            selected={selected}
            handleClick={handleLightbulbClick}
          />
        ))}
        {!isGameActive && <button>Try again?</button>}
      </div>
    </>
  );
};

export default GameBoard;
