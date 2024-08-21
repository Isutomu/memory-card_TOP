import { useState } from "react";
import Card from "./Card";
import { shuffle } from "fast-shuffle";

export default function Gameboard({ imgUrls }) {
  const [cardsIds, setCardsIds] = useState(Object.keys(imgUrls));
  const [cardsSelected, setCardsSelected] = useState([]);

  function handleSelection(e) {
    setCardsIds(shuffle(cardsIds));
    setCardsSelected([...cardsSelected, e.target.dataset.cardId]);
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
