import { PopBrowse } from "../components/PopBrowse/PopBrowse";
import { useParams } from "react-router-dom";
import { useContext } from "react"; // Добавляем useContext
import { TaskContext } from "../context/TaskContext";

export const CardPage = () => {
  const { tasks, fetchTasks } = useContext(TaskContext);
  const { id } = useParams(); // получаем id из URL

  const task = tasks.find((t) => t._id === id); // ищем задачу по id

  if (!task) return <div>Задача не найдена</div>;
  return <PopBrowse task={task} onUpdate={fetchTasks} />;
};
