import React, { useState } from "react";

import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import filmData from "./data/filmData";
import { SharedLayout } from "./components/SharedLayout";
import { HomePage } from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import WatchMoviePage from "./pages/WatchMoviePage";
import { ErrorPage } from "./pages/ErrorPage";
const App = () => {
  const [sideBar, setSideBar] = useState(false);
  function handleSideBar() {
    setSideBar((prev) => !prev);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout handleSideBar={handleSideBar} />}
        >
          <Route
            index
            element={
              <HomePage handleSideBar={handleSideBar} sideBar={sideBar} />
            }
          />
          <Route path="home" element={<MoviePage />} />
          <Route path="home/:movieId" element={<WatchMoviePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
