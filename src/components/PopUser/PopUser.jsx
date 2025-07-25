import { useNavigate } from "react-router-dom";
import { useContext } from "react"; // Добавляем useContext
import {
  PopUserContainer,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "../PopUser/PopUser.styled";
import { AuthContext } from "../../context/AuthContext";

export const PopUser = ({ $isVisible, onClose }) => {
  const navigate = useNavigate();

  // Получаем user из AuthContext
  const { user } = useContext(AuthContext);

  const openExitModal = () => {
    navigate("/exit");
    onClose(); // Закрываем PopUser после перехода
  };

  // Получаем имя и логин пользователя из контекста
  const userName = user?.name || "Пользователь";
  const userLogin = user?.login || "Эл. почта";
  return (
    <PopUserContainer $isVisible={$isVisible} id="user-set-target">
      <PopUserName>{userName}</PopUserName>
      <PopUserMail>{userLogin}</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton type="button" onClick={openExitModal}>
        Выйти
      </PopUserButton>
    </PopUserContainer>
  );
};
