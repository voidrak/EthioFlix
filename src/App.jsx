import React from "react";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import filmData from "./data/filmData";
import { SharedLayout } from "./components/SharedLayout";
import { HomePage } from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import WatchMovie from "./pages/WatchMovie";
import { ErrorPage } from "./pages/ErrorPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<MoviePage />} />
          <Route path="home/:movieId" element={<WatchMovie />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
