import { useNavigate } from "react-router-dom";
import {
  PopUserContainer,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "../PopUser/PopUser.styled";

export const PopUser = ({ isVisible, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    setIsAuth(false);
    navigate("/sign-in");
  };

  return (
    <PopUserContainer $isVisible={isVisible} id="user-set-target">
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton type="button">
        <a href="#popExit" onClick={handleLogout}>
          Выйти
        </a>
      </PopUserButton>
    </PopUserContainer>
  );
};
