import React, { useState, useEffect } from "react";
import { Column } from "../Column/Column";
import { cardList } from "../../data";
import { MainStyle, MainBlock, MainContent } from "../Main/Main.styled";

export const Main = () => {
  const columnTitles = [
    "БЕЗ СТАТУСА",
    "НУЖНО СДЕЛАТЬ",
    "В РАБОТЕ",
    "ТЕСТИРОВАНИЕ",
    "ГОТОВО",
  ];

  const [isLoading, setIsLoading] = useState(true); // Изначально данные загружаются

  //Используем useEffect для имитации задержки загрузки
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // После задержки устанавливаем isLoading в false
    }, 2000); // Задержка 2 секунды
  }, []); // Пустой массив зависимостей означает, что эффект запустится один раз при монтировании

  return (
    <MainStyle>
      <div className="container">
        <MainBlock>
          {isLoading ? (
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
