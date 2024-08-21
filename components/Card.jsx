export default function Card({ cardId, imgUrl, handleSelection }) {
  return (
    <button className="card" data-card-id={cardId} onClick={handleSelection}>
      <img data-card-id={cardId} src={imgUrl} />
    </button>
  );
}
