import React, { useState } from "react";
import "./App.css";
import WelcomePage from "./WelcomePage/WelcomePage";
import GamePage from "./GamePage/GamePage";

function App() {
  const [page, setPage] = useState("Welcome");
  const [name, setName] = useState("");
  return (
    <div className="App">
      {page === "Welcome" ? (
        <WelcomePage name={name} setName={setName} setPage={setPage} />
      ) : (
        <GamePage name={name} />
      )}
    </div>
  );
}

export default App;
