import { useNavigate } from "react-router-dom";
import {
  PopUserContainer,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "../PopUser/PopUser.styled";

export const PopUser = ({ $isVisible }) => {
  const navigate = useNavigate();

  const openExitModal = () => {
    navigate("/exit");
  };

  return (
    <PopUserContainer $isVisible={$isVisible} id="user-set-target">
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
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
