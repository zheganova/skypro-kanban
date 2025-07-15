import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GlobalStyle } from "../GlobalStyles.js";
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
import { signIn } from "../../services/auth.js";
import { signUp } from "../../services/auth.js";

export const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  // // Состояния для хранения значений полей ввода
  // const [username, setUsername] = useState("");
  // const [login, setLogin] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setIsAuth(true);
  //   navigate("/");
  // };

  // состояние полей
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние ошибок
  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние текста ошибки, чтобы показать её пользователю
  const [error, setError] = useState("");

  // функция валидации
  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // функция, которая отслеживает в полях изменения
  // и меняет состояние компонента
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  // функция отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // если у нас форма не прошла валидацию, то дальше не продолжаем
      return;
    }
    try {
      // чтобы не писать две разных функции, выберем нужный запрос через
      // тернарный оператор
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AuthBg>
        <AuthModal $isSignUp={isSignUp}>
          <AuthWrapper>
            <AuthTitle>{isSignUp ? "Регистрация" : "Вход"}</AuthTitle>
            <AuthFormstyle id="form" action="#" onSubmit={handleSubmit}>
              <InputWrapper>
                {isSignUp && (
                  <AuthInput
                    $error={errors.name}
                    type="text"
                    name="name"
                    id="formname"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={handleChange}
                    required // Добавлено, чтобы поле было обязательным
                  />
                )}
                {/* Два инпута, которые есть на обеих страницах */}
                <AuthInput
                  $error={errors.name}
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={handleChange}
                  required
                />
                <AuthInput
                  $error={errors.name}
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>

              {error && <p style={{ color: "red" }}>{error}</p>}

              <ButtonEnter type="secondary">
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </ButtonEnter>

              {!isSignUp && (
                <FormGroup $isSignUp={isSignUp}>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/sign-up">Регистрируйтесь здесь</Link>
                </FormGroup>
              )}

              {isSignUp && (
                <FormGroup $isSignUp={isSignUp}>
                  <p>Уже есть аккаунт?</p>
                  <Link to="/sign-in">Войдите здесь</Link>
                </FormGroup>
              )}
            </AuthFormstyle>
          </AuthWrapper>
        </AuthModal>
      </AuthBg>
    </>
  );
};
