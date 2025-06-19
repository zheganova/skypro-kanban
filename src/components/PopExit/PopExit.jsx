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

export const PopExit = () => {
  return (
    <PopExitStyle id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYesButton type="button" id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>
              </PopExitYesButton>
              <PopExitNoButton type="button" id="exitNo">
                <a href="main.html">Нет, остаться</a>
              </PopExitNoButton>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitStyle>
  );
};
