import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AuthBg,
  AuthModal,
  AuthWrapper,
  AuthTitle,
  AuthFormstyle,
  InputWrapper,
  AuthInput,
  ButtonEnter,
  FormGroup,
} from "./AuthForm.styled.js";

export const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  // Состояния для хранения значений полей ввода
  const [username, setUsername] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <AuthBg>
      <AuthModal>
        <AuthWrapper>
          <AuthTitle>{isSignUp ? "Регистрация" : "Вход"}</AuthTitle>
          <AuthFormstyle id="form" action="#">
            <InputWrapper>
              {isSignUp && (
                <AuthInput
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required // Добавлено, чтобы поле было обязательным
                />
              )}
              {/* Два инпута, которые есть на обеих страницах */}
              <AuthInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
              <AuthInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputWrapper>

            <ButtonEnter onClick={handleLogin} type="secondary">
              {isSignUp ? "Зарегистрироваться" : "Войти"}
            </ButtonEnter>

            {!isSignUp && (
              <FormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/sign-up">Регистрируйтесь здесь</Link>
              </FormGroup>
            )}

            {isSignUp && (
              <FormGroup>
                <p>Уже есть аккаунт?</p>
                <Link to="/sign-in">Войдите здесь</Link>
              </FormGroup>
            )}
          </AuthFormstyle>
        </AuthWrapper>
      </AuthModal>
    </AuthBg>
  );
};
