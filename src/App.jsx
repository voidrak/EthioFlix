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
const App = () => {
  const [sideBar, setSideBar] = useState(false);
  const [allFilm, setAllFilm] = useState(filmData);
  const [mainMovieList, setMainMovieList] = useState(allFilm);
  const [asideSearchInput, SetAsideSearchInput] = useState("");

  function handleSideBar() {
    setSideBar((prev) => !prev);
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
              allFilm={allFilm}
              asideSearchInput={asideSearchInput}
              SetAsideSearchInput={SetAsideSearchInput}
            />
          }
        >
          <Route
            index
            element={
              <HomePage
                handleSideBar={handleSideBar}
                sideBar={sideBar}
                allFilm={allFilm}
              />
            }
          />
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
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
