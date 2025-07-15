import { Column } from "../Column/Column";
import { cardList } from "../../data";
import { MainStyle, MainBlock, MainContent } from "../Main/Main.styled";

export const Main = ({ loading }) => {
  const columnTitles = [
    "БЕЗ СТАТУСА",
    "НУЖНО СДЕЛАТЬ",
    "В РАБОТЕ",
    "ТЕСТИРОВАНИЕ",
    "ГОТОВО",
  ];

  return (
    <MainStyle>
      <div className="container">
        <MainBlock>
          {loading ? (
            <div className="loading-message">
              <p>Данные загружаются...</p>
            </div>
          ) : (
            <MainContent>
              {/* Используем .map() для рендеринга каждой колонки */}
              {columnTitles.map((title) => (
                <Column
                  key={title}
                  title={title}
                  // Фильтруем `cardList` по статусу и передаем отфильтрованный список карточек в Column
                  cardList={cardList.filter((card) => card.status === title)}
                />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </div>
    </MainStyle>
  );
};
