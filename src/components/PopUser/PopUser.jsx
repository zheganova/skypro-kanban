import { PopExit } from "../PopExit/PopExit";
import { useState } from "react";
import {
  PopUserContainer,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
  PopExitOverlay,
} from "../PopUser/PopUser.styled";

export const PopUser = ({ $isVisible, setIsAuth }) => {
  const [isPopExitVisible, setIsPopExitVisible] = useState(false);

  // Функция, которая будет переключать видимость PopExit
  const togglePopExitVisibility = () => {
    setIsPopExitVisible(!isPopExitVisible);
  };

  // Функция для закрытия PopExit
  const closePopExit = () => {
    setIsPopExitVisible(false);
  };

  return (
    <PopUserContainer $isVisible={$isVisible} id="user-set-target">
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton type="button" onClick={togglePopExitVisibility}>
        Выйти
      </PopUserButton>

      {/* Условный рендеринг PopExit и его обертки */}
      {isPopExitVisible && ( // Если isPopExitVisible true, то рендерим следующее
        <PopExitOverlay onClick={closePopExit}>
          {/* Клик по фоновому слою закрывает PopExit */}
          {/* Останавливаем распространение события клика, чтобы клик по PopExit не закрывал его */}
          <div onClick={(e) => e.stopPropagation()}>
            <PopExit
              $isVisible={isPopExitVisible}
              setIsAuth={setIsAuth}
              onClose={closePopExit}
            />
          </div>
        </PopExitOverlay>
      )}
    </PopUserContainer>
  );
};
