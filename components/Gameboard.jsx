import { useState } from "react";
import Card from "./Card";
import { shuffle } from "fast-shuffle";
import Score from "../components/Score";

export default function Gameboard({ imgUrls }) {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [cardsIds, setCardsIds] = useState(Object.keys(imgUrls));
  const [cardsSelected, setCardsSelected] = useState([]);

  const score = new Set(cardsSelected).size;
  const hasWon = cardsSelected.length === cardsIds.length;
  const hasLost = cardsSelected.length !== score;

  if (hasWon || hasLost) {
    endGame();
  } else {
    updateScore(score);
  }

  function handleSelection(e) {
    const selectedCardId = e.target.dataset.cardId;

    setCardsIds(shuffle(cardsIds));
    setCardsSelected([...cardsSelected, selectedCardId]);
  }
  function endGame() {
    if (hasWon) {
      alert("won!");
    } else if (hasLost) {
      alert("lost!");
    }

    updateScore(0);
    setCardsSelected([]);
  }
  function updateScore(score) {
    if (score === currentScore) {
      return;
    }

    if (score > bestScore) {
      setBestScore(score);
    }

    setCurrentScore(score);
  }

  return (
    <>
      <header>
        <h1>
          Legends of Runeterra
          <br />
          Memory Game
        </h1>
        <Score bestScore={bestScore} currentScore={currentScore} />
      </header>
      <div className="gameboard">
        {cardsIds.map((id) => (
          <Card
            key={id}
            cardId={id}
            imgUrl={imgUrls[id]}
            handleSelection={handleSelection}
          />
        ))}
      </div>
    </>
  );
}
