import { useNavigate } from "react-router-dom";
import {
  PopExitStyle,
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitForm,
  PopExitFormGroup,
  PopExitYesButton,
  PopExitNoButton,
} from "../PopExit/PopExit.styled";

export const PopExit = ({ setIsAuth, $isVisible }) => {
  const navigate = useNavigate();

  // Логика для кнопки "Да, выйти"
  const handleYesExit = (e) => {
    e.preventDefault();
    setIsAuth(false);
    navigate("/sign-in");
  };

  // Логика для кнопки "Нет, остаться"
  const handleNoExit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <PopExitStyle id="popExit" $isVisible={$isVisible}>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYesButton
                type="button"
                id="exitYes"
                onClick={handleYesExit}
              >
                <a href="modal/signin.html">Да, выйти</a>
              </PopExitYesButton>
              <PopExitNoButton type="button" id="exitNo" onClick={handleNoExit}>
                <a href="main.html">Нет, остаться</a>
              </PopExitNoButton>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitStyle>
  );
};
