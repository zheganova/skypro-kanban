import { PopExit } from "../components/PopExit/PopExit";
import { useContext } from "react"; // Добавляем useContext
import { AuthContext } from "../context/AuthContext"; // Импортируем AuthContext

export const ExitPage = () => {
  const { logout } = useContext(AuthContext);
  return <PopExit onLogout={logout} />;
};
