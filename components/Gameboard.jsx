import { useState } from "react";
import Card from "./Card";
import { shuffle } from "fast-shuffle";

export default function Gameboard({ imgUrls }) {
  const [cardsIds, setCardsIds] = useState(Object.keys(imgUrls));
  const [cardsSelected, setCardsSelected] = useState([]);

  const hasWon = cardsSelected.length === cardsIds.length;
  const hasLost = (function () {
    if (cardsSelected.length === 0) {
      return false;
    }

    const cardsSelectedSet = new Set(cardsSelected);
    return cardsSelected.length !== cardsSelectedSet.size;
  })();

  if (hasWon) {
    alert("won!");
  }

  if (hasLost) {
    alert("lost!");
  }

  function handleSelection(e) {
    const selectedCardId = e.target.dataset.cardId;

    setCardsIds(shuffle(cardsIds));
    setCardsSelected([...cardsSelected, selectedCardId]);
  }

  return (
    <div className="gameboard">
      {cardsIds.map((id) => (
        <Card
          key={id}
          cardId={id}
          imgUrl={imgUrls[id]}
          handleSelection={handleSelection}
          selected={cardsSelected.includes(id)}
        />
      ))}
    </div>
  );
}
