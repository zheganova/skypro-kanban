import { Card } from "../Card/Card";

export const Column = ({ title, cardList }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {/* Используем map для рендеринга каждой карточки из cardList */}
        {cardList.map((card) => (
          <Card
            key={card.id} 
            id={card.id}
            topic={card.topic} 
            title={card.title} 
            date={card.date}   
          />
        ))}
      </div>
    </div>
  );
};
