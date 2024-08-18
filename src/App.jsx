import { useState } from "react";
import Card from "../components/Card";
import { urls } from "../data/cards";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <div className="gameboard">
      {urls.map((url) => (
        <Card key={uuidv4()} imgUrl={url} />
      ))}
    </div>
  );
}

export default App;
