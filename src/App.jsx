import React from "react";
import { useTranslation } from "react-i18next";
import Routing from "./routes";
import Header from "./container/Header";
import "./i18n";
import "./styles/main.scss";

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="app">
      <Header />
      <header className="App-header">
        <h1>{t("welcome")}</h1>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("fr")}>French</button>
        <button onClick={() => changeLanguage("de")}>German</button>
        <button onClick={() => changeLanguage("es")}>Spanish</button>
      </header>
      <Routing />
    </div>
  );
};

export default App;
