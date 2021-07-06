import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./GameBoard.css";
import Lightbulb from "./children/Lightbulb/Lightbulb";
import getRandomColor from "./helpers/getRandomColor";

const GameBoard = ({ setScore }) => {
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

  const [isGameActive, setIsGameActive] = useState(true);

  const [selected, setSelected] = useState(getRandomColor(colors).name);

  const [pattern, setPattern] = useState([selected]);
  const [playerAnswer, setPlayerAnswer] = useState([]);

  const runSequence = useCallback(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (pattern && pattern[i]) {
        setSelected(pattern[i]);
        i++;
      } else {
        setSelected(null);
        clearInterval(intervalId);
      }
    }, 1000);

    return intervalId;
  }, [pattern, setSelected]);

  useEffect(() => {
    const intervalId = runSequence();

    return () => {
      clearInterval(intervalId);
    };
  }, [runSequence]);

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

  const startNextRound = useCallback(() => {
    setScore((prev) => prev + 10);
    // const colorNameToAdd = getRandomColor(colors).name;
    // setPattern((prev) => [...prev, colorNameToAdd]);
  }, [setScore, setPattern, colors]);

  useEffect(() => {
    if (playerAnswer?.length > 0 && pattern.length === playerAnswer.length) {
      const answerMatchPattern = testPlayerAnswer();
      answerMatchPattern ? startNextRound() : endGame();
    }
  }, [pattern, playerAnswer, startNextRound, endGame, testPlayerAnswer]);

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
