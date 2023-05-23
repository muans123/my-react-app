import { useState } from "react";
import { ApiConnect } from "../services/Api"

import { Header } from "../components/Header";
import { MainPage } from "../components/MainPage"
import { NewsPage } from "../components/NewsPage/NewsPage";

import './App.css';

export const App = () => {

  const [currentPage, setCurrentPage] = useState("main");

  const [response, setResponse] = useState({});

  const getResponse = () => {
    ApiConnect.sendRequest().then((response) => setResponse(response));
  }

  console.log(response);

  return (
    <>

      <Header />

      {currentPage != "main" ?
        <button className="prev" onClick={() => setCurrentPage("main")}>{"<"}</button> :
        <button className="refresher" onClick={getResponse}>Refresh</button>
      }
      {currentPage === "main" ?
        <MainPage setCurrentPage={setCurrentPage} response={response?.response?.articles} /> :
        <NewsPage currentNews={response?.response?.articles.filter(currentNews => currentNews.title === currentPage)} />}
    </>
  );
};