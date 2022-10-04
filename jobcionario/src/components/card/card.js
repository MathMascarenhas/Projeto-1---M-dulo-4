import "./card.css";

export function Card({word}) {
  return (
    <div className="card-component">
      <h2 className="card-title">{word}</h2>
    </div>
  );
}
