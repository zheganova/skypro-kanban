import { Header } from "./components/header/header";
import { Main } from "./components/Main/Main";
import { PopBrowse } from "./components/PopBrowse/PopBrowse";
import { PopNewCard } from "./components/PopNewCard/PopNewCard";
import { PopExit } from "./components/PopExit/PopExit";
import "./App.css";
import { GlobalStyle } from "./components/GlobalStyles";

const App = () => {
  return (
    <div className="wrapper">
      <GlobalStyle />
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
};

export default App;
