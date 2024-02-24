import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import filmData from "./data/filmData";
import { SharedLayout } from "./components/SharedLayout";
import { HomePage } from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import WatchMoviePage from "./pages/WatchMoviePage";
import { ErrorPage } from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import DmcaPage from "./pages/DmcaPage";
import PrivacyPage from "./pages/PrivacyPage";
const App = () => {
  const [sideBar, setSideBar] = useState(false);
  const [allFilm, setAllFilm] = useState(filmData);
  const [mainMovieList, setMainMovieList] = useState(allFilm);
  const [asideSearchInput, SetAsideSearchInput] = useState("");

  function handleSideBar() {
    setSideBar(!sideBar);
    SetAsideSearchInput("");
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              handleSideBar={handleSideBar}
              sideBar={sideBar}
              setSideBar={setSideBar}
              allFilm={allFilm}
              asideSearchInput={asideSearchInput}
              SetAsideSearchInput={SetAsideSearchInput}
            />
          }
        >
          <Route index element={<HomePage allFilm={allFilm} />} />
          <Route
            path="home"
            element={
              <MoviePage
                allFilm={allFilm}
                mainMovieList={mainMovieList}
                setMainMovieList={setMainMovieList}
              />
            }
          />
          <Route
            path="home/:currentMovieId"
            element={<WatchMoviePage allFilm={allFilm} />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="dmca" element={<DmcaPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
