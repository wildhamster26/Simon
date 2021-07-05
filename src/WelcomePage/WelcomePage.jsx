import React from "react";

const WelcomePage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div>
      <h1>Welcome friend!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input />
        <button type="submit">Start game</button>
      </form>
    </div>
  );
};

export default WelcomePage;
