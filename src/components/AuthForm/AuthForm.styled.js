import styled from "styled-components";

export const AuthBg = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(
    9,
    30,
    63,
    0.3
  ); 
`;

export const AuthModal = styled.div`
  width: 368px;
  height: auto;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 43px 47px 47px 40px;
  position: relative;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.1);

  @media (max-width: 375px) {
    width: 100%;
    padding: 20px;
  }
`;

export const AuthWrapper = styled.div`
  /* Wrapper, который содержит заголовок и форму */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthTitle = styled.h2`
  color: #000000;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 30px;
  text-align: center;
`;

export const AuthFormstyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px; /* Отступ между инпутами */
  margin-bottom: 20px; /* Отступ после группы инпутов перед кнопкой */
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 4px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 8px 10px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;

  &::placeholder {
    color: #94a6be;
  }
`;

export const ButtonEnter = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 20px; /* Отступ сверху от формы */

  &:hover {
    background-color: #33399b;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 5px;

  p {
    color: #94A6BE66;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  a {
    color: #94A6BE66;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #565eef;
    }
  }
`;
