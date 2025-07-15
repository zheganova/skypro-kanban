import { Card } from "../Card/Card";
import { MainColumn, ColumnTitle, Cards } from "../Column/Column.styled";

export const Column = ({ title, cardList }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
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
      </Cards>
    </MainColumn>
  );
};
