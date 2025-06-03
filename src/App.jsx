import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { PopBrowse } from "./components/PopBrowse/PopBrowse";
import { PopNewCard } from "./components/PopNewCard/PopNewCard";
import { PopExit } from "./components/PopExit/PopExit";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
};

export default App;
