import { Header } from "../components/header/header";
import { Main } from "../components/Main/Main";
import { PopNewCard } from "../components/PopNewCard/PopNewCard";
import "../App.css";
import { GlobalStyle } from "../components/GlobalStyles";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export const MainPage = ({ loading, setIsAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isNewCardOpen = location.pathname === "/new-card";
  const closeNewCard = () => navigate(-1);

  return (
    <div className="wrapper">
      <GlobalStyle />
      <Header setIsAuth={setIsAuth} />
      <Main loading={loading} />
      <Outlet />
      {isNewCardOpen && <PopNewCard onClose={closeNewCard} />}
    </div>
  );
};
