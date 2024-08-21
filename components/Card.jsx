export default function Card({ cardId, imgUrl, handleSelection, selected }) {
  return (
    <button
      className={`card` + (selected ? " selected" : "")}
      data-card-id={cardId}
      onClick={handleSelection}
    >
      <img src={imgUrl} />
    </button>
  );
}
