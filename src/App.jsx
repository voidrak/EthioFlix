import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import filmData from "./data/filmData";
import { SharedLayout } from "./components/SharedLayout";
import { HomePage } from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import WatchMoviePage from "./pages/WatchMoviePage";
import { ErrorPage } from "./pages/ErrorPage";
const App = () => {
  const [sideBar, setSideBar] = useState(false);
  const [allFilm, setAllFilm] = useState(filmData);
  function handleSideBar() {
    setSideBar((prev) => !prev);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout handleSideBar={handleSideBar} sideBar={sideBar} />
          }
        >
          <Route
            index
            element={
              <HomePage handleSideBar={handleSideBar} sideBar={sideBar} />
            }
          />
          <Route path="home" element={<MoviePage allFilm={allFilm} />} />
          <Route path="home/:movieId" element={<WatchMoviePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
