export default function Card({ imgUrl }) {
  return (
    <button className="card">
      <img src={imgUrl} />
    </button>
  );
}
