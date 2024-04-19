import { useState } from "react";
import Card from "./card";

function Cards() {
  const [cards, setCards] = useState(
    [
      { id: 0, name: "Dayaneris Targaryan", status: "", img: "/images/01.jpg" },
      { id: 0, name: "Dayaneris Targaryan", status: "", img: "/images/01.jpg" },
      { id: 1, name: "Tirion Lanister", status: "", img: "/images/02.jpg" },
      { id: 1, name: "Tirion Lanister", status: "", img: "/images/02.jpg" },
      { id: 2, name: "Jon Snow", status: "", img: "/images/03.png" },
      { id: 2, name: "Jon Snow", status: "", img: "/images/03.png" },
      { id: 3, name: "Joefrey Barateon", status: "", img: "/images/04.jpg" },
      { id: 3, name: "Joefrey Barateon", status: "", img: "/images/04.jpg" },
      { id: 4, name: "Cersei Lanister", status: "", img: "/images/05.jpg" },
      { id: 4, name: "Cersei Lanister", status: "", img: "/images/05.jpg" },
      { id: 5, name: "Eddart Stark", status: "", img: "/images/06.jpg" },
      { id: 5, name: "Eddart Stark", status: "", img: "/images/06.jpg" },
      { id: 6, name: "Tywin Lanister", status: "", img: "/images/07.jpg" },
      { id: 6, name: "Tywin Lanister", status: "", img: "/images/07.jpg" },
      { id: 7, name: "Sandor Clegane", status: "", img: "/images/08.jpg" },
      { id: 7, name: "Sandor Clegane", status: "", img: "/images/08.jpg" },
    ].sort(() => Math.random() - 0.5)
  );

  const clickHandler = (index) => {
    alert(index);
  };

  return (
    <div className="container">
      {cards.map((card, index) => {
        return (
          <Card
            card={card}
            key={index}
            index={index}
            clickHandler={clickHandler}
          />
        );
      })}
    </div>
  );
}

export default Cards;
