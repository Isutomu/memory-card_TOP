import { useState } from "react";
import Card from "../components/Card";
import { urls } from "../data/cards";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <>
      {urls.map((url) => (
        <Card key={uuidv4()} imgUrl={url} />
      ))}
    </>
  );
}

export default App;
