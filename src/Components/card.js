export default function Card({ card, index, clickHandler }) {
  return (
    <div onClick={() => clickHandler(index)} className={`card ${card.status}`}>
      <img src={card.img} alt={card.name} />
    </div>
  );
}
