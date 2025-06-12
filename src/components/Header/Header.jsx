import { PopUser } from "../PopUser/PopUser";
import React, { useState } from "react"; // Импортируем useState

export const Header = () => {
  // Создаем состояние для управления видимостью PopUser. Изначально PopUser скрыт, поэтому устанавливаем false
  const [isPopUserVisible, setIsPopUserVisible] = useState(false);

  // Функция, которая будет переключать видимость PopUser
  const togglePopUserVisibility = () => {
    setIsPopUserVisible(!isPopUserVisible);
  };

  // Функция для закрытия PopUser
  const closePopUser = () => {
    setIsPopUserVisible(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            {/* Добавляем обработчик onClick для переключения видимости PopUser */}
            <a
              onClick={togglePopUserVisibility} // При клике вызываем функцию переключения
              className="header__user _hover02"
            >
              Ivan Ivanov
            </a>
            {/* Условный рендеринг PopUser и его обертки */}
            {isPopUserVisible && ( // Если isPopUserVisible true, то рендерим следующее
              <div
                className="pop-user-overlay" // Добавляем новый класс для фонового слоя
                onClick={closePopUser} // Клик по фоновому слою закрывает PopUser
              >
                {/* Останавливаем распространение события клика, чтобы клик по PopUser не закрывал его */}
                <div onClick={(e) => e.stopPropagation()}>
                  <PopUser
                    isVisible={isPopUserVisible}
                    toggleVisibility={togglePopUserVisibility}
                  />
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
