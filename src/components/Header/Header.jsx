import { PopUser } from "../PopUser/PopUser";
import { PopNewCard } from "../PopNewCard/PopNewCard";
import { useState } from "react";
import {
  HeaderStyle,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser,
  PopUserOverlay,
  PopNewCardOverlay,
} from "../Header/Header.styled";

export const Header = ({ setIsAuth }) => {
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

  const [isPopNewCardVisible, setIsPopNewCardVisible] = useState(false);

  const togglePopNewCardVisibility = () => {
    setIsPopNewCardVisible(!isPopNewCardVisible);
  };

  const closePopNewCard = () => {
    setIsPopNewCardVisible(false);
  };

  return (
    <HeaderStyle>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew
              id="btnMainNew"
              onClick={togglePopNewCardVisibility}
            >
              Создать новую задачу
            </HeaderBtnMainNew>
            {/* Добавляем обработчик onClick для переключения видимости PopUser */}
            <HeaderUser onClick={togglePopUserVisibility}>
              {" "}
              Ivan Ivanov
            </HeaderUser>

            {/* Условный рендеринг PopUser и его обертки */}
            {isPopUserVisible && ( // Если isPopUserVisible true, то рендерим следующее
              <PopUserOverlay onClick={closePopUser}>
                {/* Добавляем новый класс для фонового слоя // Клик по фоновому
                слою закрывает PopUser */}
                {/* Останавливаем распространение события клика, чтобы клик по PopUser не закрывал его */}
                <div onClick={(e) => e.stopPropagation()}>
                  <PopUser
                    $isVisible={isPopUserVisible}
                    setIsAuth={setIsAuth}
                    onClose={closePopUser}
                  />
                </div>
              </PopUserOverlay>
            )}

            {/* Условный рендеринг PopNewCard и его обертки */}
            {isPopNewCardVisible && ( // Если isPopNewCardVisible true, то рендерим следующее
              <PopNewCardOverlay onClick={closePopNewCard}>
                {/* Добавляем новый класс для фонового слоя // Клик по фоновому
                слою закрывает PopNewCard */}
                {/* Останавливаем распространение события клика, чтобы клик по PopNewCard не закрывал его */}
                <div onClick={(e) => e.stopPropagation()}>
                  <PopNewCard
                    $isVisible={isPopNewCardVisible}
                    setIsAuth={setIsAuth}
                    onClose={closePopNewCard}
                  />
                </div>
              </PopNewCardOverlay>
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderStyle>
  );
};
