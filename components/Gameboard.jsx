import Card from "./Card";

export default function Gameboard({ imgUrls }) {
  return (
    <div className="gameboard">
      {Object.keys(imgUrls).map((id) => (
        <Card key={id} imgUrl={imgUrls[id]} />
      ))}
    </div>
  );
}
