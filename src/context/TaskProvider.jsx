import { useState, useEffect, useCallback, useContext } from "react";
import { TaskContext } from "./TaskContext";
import {
  fetchTasks as apiFetchTasks, // Переименовываем, чтобы не конфликтовать с функцией getTasks внутри провайдера
  postTask as apiPostTask,
  editTask as apiEditTask,
  deleteTask as apiDeleteTask,
} from "../services/api";
// Импортируем AuthContext, чтобы получить токен пользователя
import { AuthContext } from "./AuthContext";

const TaskProvider = ({ children }) => {
  // Получаем user (и, соответственно, token) из AuthContext
  const { user } = useContext(AuthContext);
  const token = user?.token; // Извлекаем токен из объекта user

  const [tasks, setTasks] = useState([]); // Состояние для хранения списка задач
  const [loading, setLoading] = useState(false); // Состояние для отслеживания загрузки данных
  const [error, setError] = useState(null); // Состояние для хранения ошибок при работе с API

  // Функция для получения задач с API.
  // Используем useCallback, чтобы эта функция не пересоздавалась при каждом рендере TaskProvider.
  const getTasks = useCallback(async () => {
    // Если токена нет, значит пользователь не авторизован, и мы не можем загрузить задачи.
    if (!token) {
      setTasks([]); // Очищаем задачи
      setLoading(false); // Загрузка завершена
      setError("Пользователь не авторизован или токен отсутствует."); 
      return; 
    }
    try {
      setLoading(true); // Устанавливаем состояние загрузки в true
      setError(null); // Сбрасываем предыдущие ошибки
      const data = await apiFetchTasks({ token }); // Вызываем вашу функцию fetchTasks из services/api.js
      if (data) {
        setTasks(data); // Обновляем состояние задач полученными данными
      }
    } catch (err) {
      console.error("Ошибка загрузки задач:", err); 
      setError(err.message || "Не удалось загрузить задачи."); // Устанавливаем сообщение об ошибке
    } finally {
      setLoading(false); // В любом случае, после попытки загрузки, отключаем состояние загрузки
    }
  }, [token]); // Зависимость от токена: функция будет пересоздаваться только если токен изменится

  // Эффект для загрузки задач при монтировании компонента TaskProvider или при изменении токена.
  useEffect(() => {
    if (token) { // Загружаем задачи только если токен доступен
      getTasks();
    }
  }, [token, getTasks]); // Зависимости: token (для повторной загрузки при изменении авторизации) и getTasks (чтобы избежать бесконечного цикла, так как getTasks обернут в useCallback)

  // Функция для создания новой задачи
  const createTask = async (newTaskData) => {
    if (!token) {
      setError("Пользователь не авторизован.");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      await apiPostTask({ token, task: newTaskData }); // Вызываем функцию postTask
      await getTasks(); // Перезагружаем задачи после создания, чтобы обновить список
      return true;
    } catch (err) {
      console.error("Ошибка создания задачи:", err);
      setError(err.message || "Не удалось создать задачу.");
      throw err; // Перебрасываем ошибку, чтобы вызывающий код мог ее обработать
    } finally {
      setLoading(false);
    }
  };

  // Функция для редактирования задачи
  const updateTask = async (id, updatedTaskData) => {
    if (!token) {
      setError("Пользователь не авторизован.");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      await apiEditTask({ token, id, task: updatedTaskData }); // Вызываем функцию editTask
      await getTasks(); // Перезагружаем задачи после редактирования
      return true;
    } catch (err) {
      console.error("Ошибка редактирования задачи:", err);
      setError(err.message || "Не удалось обновить задачу.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Функция для удаления задачи
  const removeTask = async (id) => {
    if (!token) {
      setError("Пользователь не авторизован.");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      await apiDeleteTask({ token, id }); // Вызываем функцию deleteTask
      await getTasks(); // Перезагружаем задачи после удаления
      return true;
    } catch (err) {
      console.error("Ошибка удаления задачи:", err);
      setError(err.message || "Не удалось удалить задачу.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Значения, которые будут доступны через TaskContext для всех дочерних компонентов.
  // Мы предоставляем сам список задач, состояние загрузки, ошибки,
  // а также функции для взаимодействия с задачами.
  const contextValue = {
    tasks,
    loading,
    error,
    fetchTasks: getTasks, // Функция для получения/обновления списка задач
    createTask,          // Функция для создания задачи
    updateTask,          // Функция для редактирования задачи
    deleteTask: removeTask, // Функция для удаления задачи (переименована для ясности)
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children} {/* children - это все компоненты, которые будут обернуты TaskProvider */}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
