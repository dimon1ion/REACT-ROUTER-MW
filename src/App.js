import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="block">
          <Link to={"/templates"} className={"btn"}>
            Примеры работ
          </Link>
          <Link to={"/about"} className={"btn"}>
            О себе
          </Link>
          <Link to={"/сontacts"} className={"btn"}>
            Контактная информация
          </Link>
        </div>
        <div className="block">
          <Routes>
            <Route
              path="/templates"
              element={
                <div>
                  Примеры моих работ можно увидеть{" "}
                  <a href="https://github.com/dimon1ion">Здесь</a>
                </div>
              }
            />
            <Route
              path="/about"
              element={<div>О себе: Гений, миллиардер, плейбой, филантроп</div>}
            />
            <Route
              path="/сontacts"
              element={
                <div>
                  Контакты: позвоните по любому телефону, я вас найду :)
                </div>
              }
            />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
