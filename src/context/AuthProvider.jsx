import { useState, useCallback, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { signIn as apiSignIn, signUp as apiSignUp } from "../services/auth";

export const AuthProvider = ({ children }) => {
  // Изначально пытаемся получить состояние для хранении информации о пользователе из localStorage.
  // Если в localStorage есть токен, считаем пользователя авторизованным.
  const [user, setUser] = useState(() => {
    try {
      const storedUserInfo = localStorage.getItem("userInfo");
      const storedToken = localStorage.getItem("token"); // Проверяем и токен
      if (storedUserInfo && storedToken) {
        // Если есть и userInfo, и token, парсим userInfo
        const parsedUserInfo = JSON.parse(storedUserInfo);
        // Возвращаем объект пользователя, добавляя токен
        return { ...parsedUserInfo, token: storedToken };
      }
    } catch (error) {
      console.error(
        "Ошибка при загрузке данных пользователя из localStorage:",
        error
      );
    }
    return null; // Если нет данных или ошибка, пользователь не авторизован
  });

  // Новое состояние: флаг, который показывает, что проверка авторизации завершена
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  // Эффект для установки isAuthChecked в true после первой проверки user
  useEffect(() => {
    // Этот эффект сработает один раз после инициализации user из localStorage
    // или после первого рендера, когда user будет установлен в null.
    // Это гарантирует, что TaskProvider не начнет загрузку, пока AuthProvider не "определится"
    setIsAuthChecked(true);
  }, [user]); // Зависит от user, чтобы сработать после его инициализации

  // Функция для обновления информации о пользователе и сохранения в localStorage
  // Используем useCallback, чтобы функция не пересоздавалась при каждом рендере
  const updateUserInfo = useCallback((userData) => {
    setUser(userData); // Обновляем состояние пользователя в React
    if (userData && userData.token) {
      // Если userData есть и в нем есть токен, сохраняем в localStorage
      localStorage.setItem("userInfo", JSON.stringify(userData));
      localStorage.setItem("token", userData.token);
    } else {
      // Если userData нет (пользователь вышел), удаляем данные из localStorage
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
    }
  }, []); // Пустой массив зависимостей, так как функция не зависит от внешних переменных

  // Функция для входа пользователя
  const login = async ({ login: userLogin, password }) => {
    try {
      // Вызываем вашу функцию signIn из services/auth.js
      const data = await apiSignIn({ login: userLogin, password });
      // Обновляем информацию о пользователе через updateUserInfo
      updateUserInfo(data.user); // data.user содержит всю информацию, включая токен
      return true; // Возвращаем true при успешном входе
    } catch (error) {
      console.error("Ошибка входа:", error);
      updateUserInfo(null); // Сбрасываем пользователя при ошибке
      throw error; // Перебрасываем ошибку дальше
    }
  };

  // Функция для регистрации пользователя
  const register = async ({ name, login: userLogin, password }) => {
    try {
      // Вызываем вашу функцию signUp из services/auth.js
      const data = await apiSignUp({ name, login: userLogin, password });
      // Обновляем информацию о пользователе
      updateUserInfo(data.user);
      return true; // Возвращаем true при успешной регистрации
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      updateUserInfo(null); // Сбрасываем пользователя при ошибке
      throw error; // Перебрасываем ошибку дальше
    }
  };

  // Функция для выхода пользователя
  const logout = () => {
    updateUserInfo(null); // Сбрасываем информацию о пользователе
    return true; // Возвращаем true при успешном выходе
  };

  // Возвращаем AuthContext.Provider, который делает значения доступными для всех дочерних компонентов.
  // user: текущий объект пользователя (или null)
  // login: функция для входа
  // register: функция для регистрации (добавили, так как AuthForm ее использует)
  // logout: функция для выхода
  // updateUserInfo: функция для принудительного обновления user (если потребуется)
  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, updateUserInfo, isAuthChecked }}
    >
      {children}{" "}
      {/* children - это все компоненты, которые будут обернуты AuthProvider */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
