// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  PopUserContainer,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "../PopUser/PopUser.styled";

export const PopUser = ({ $isVisible }) => {
  // const navigate = useNavigate();
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   navigate("/exit");
  // };

  const [isPopExitVisible, setIsPopExitVisible] = useState(false);

  // Функция, которая будет переключать видимость PopExit
  const togglePopExitVisibility = () => {
    setIsPopExitVisible(!isPopExitVisible);
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
    </PopUserContainer>
  );
};
