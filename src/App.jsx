import { useState } from "react";
import { urls } from "../data/cards";
import { v4 as uuidv4 } from "uuid";
import Gameboard from "../components/Gameboard";

const urlsWithIds = Object.fromEntries(urls.map((url) => [uuidv4(), url]));

function App() {
  return (
    <>
      <Gameboard imgUrls={urlsWithIds} />
    </>
  );
}

export default App;
