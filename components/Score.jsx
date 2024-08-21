export default function Score({ bestScore, currentScore }) {
  return (
    <div className="score">
      <span>Best score: {bestScore}</span>
      <span>Current score: {currentScore}</span>
    </div>
  );
}
