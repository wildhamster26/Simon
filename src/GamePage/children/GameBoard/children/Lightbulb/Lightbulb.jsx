import React from "react";
import "./Lightbulb.css";

const Lightbulb = ({ color, selected, setSelected }) => {
  return (
    <div
      className="lightbulb"
      style={{
        backgroundColor: selected === color.name && color.hexcode,
      }}
      onClick={() => setSelected(color.name)}
    />
  );
};

export default Lightbulb;
