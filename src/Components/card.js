export default function Card({ card, index, clickHandler }) {
  return (
    <div onClick={() => clickHandler(index)} className="card">
      <img src={card.img} alt={card.name} />
    </div>
  );
}
