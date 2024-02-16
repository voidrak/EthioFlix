import React from "react";
import { MovieSlider } from "./MovieSlider";
import TrendMovie from "./TrendMovie";

const TopMoviePage = ({ allFilm, setImagesLoaded }) => {
  return (
    <div className="top-movie-page">
      <MovieSlider allFilm={allFilm} setImagesLoaded={setImagesLoaded} />
      <TrendMovie allFilm={allFilm} />
    </div>
  );
};

export default TopMoviePage;
