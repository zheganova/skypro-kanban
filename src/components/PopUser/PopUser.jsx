import {
  PopUserContainer,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "../PopUser/PopUser.styled";

export const PopUser = ({ isVisible, toggleVisibility }) => {
  return (
    <PopUserContainer $isVisible={isVisible} id="user-set-target">
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton type="button">
        {/* При клике на "Выйти" также закрываем PopUser, если нужно, или переходим по ссылке */}
        {/* В данном случае, чтобы закрыть окно при клике на "Выйти", можно вызвать toggleVisibility */}
        <a href="#popExit" onClick={toggleVisibility}>
          Выйти
        </a>
      </PopUserButton>
    </PopUserContainer>
  );
};
