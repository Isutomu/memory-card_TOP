import { useState } from "react";
import { urls } from "../data/cards";
import { v4 as uuidv4 } from "uuid";
import Gameboard from "../components/Gameboard";
import Score from "../components/Score";

const urlsWithIds = Object.fromEntries(urls.map((url) => [uuidv4(), url]));

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const updateScore = (score) => {
    setCurrentScore(score);

    if (score > bestScore) {
      setBestScore(score);
    }
  };

  return (
    <>
      <Score bestScore={bestScore} currentScore={currentScore} />
      <Gameboard imgUrls={urlsWithIds} updateScore={updateScore} />
    </>
  );
}

export default App;
