import React from "react";
import "./Lightbulb.css";

const Lightbulb = ({ color, selected, handleClick }) => {
  return (
    <div
      className="lightbulb"
      style={{
        backgroundColor: selected === color.name && color.hexcode,
      }}
      onClick={() => handleClick(color.name)}
    />
  );
};

export default Lightbulb;
