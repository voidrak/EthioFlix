import React from "react";
import TopMoviePage from "../components/TopMoivePage/TopMoviePage";
import MovieFIlter from "../components/MovieFilter";
const MoviePage = ({ allFilm }) => {
  return (
    <div className="movie-page">
      <TopMoviePage allFilm={allFilm} />
      <MovieFIlter allFilm={allFilm} />
    </div>
  );
};

export default MoviePage;
