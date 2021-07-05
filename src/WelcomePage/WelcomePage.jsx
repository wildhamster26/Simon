import React from "react";

const WelcomePage = ({ name, setName, setPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage("Game");
  };

  return (
    <div>
      <h1>Welcome friend!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="your name"
        />
        <button type="submit" disabled={!name}>
          Start game
        </button>
      </form>
    </div>
  );
};

export default WelcomePage;
