import React from "react";
import { MovieSlider } from "./MovieSlider";
import TrendMovie from "./TrendMovie";

const TopMoviePage = ({ allFilm }) => {
  return (
    <div className="top-movie-page">
      <MovieSlider allFilm={allFilm} />
      <TrendMovie allFilm={allFilm} />
    </div>
  );
};

export default TopMoviePage;
