import React from "react";
import TopMoviePage from "../components/TopMoivePage/TopMoviePage";
const MoviePage = ({ allFilm }) => {
  return (
    <div className="movie-page">
      <TopMoviePage allFilm={allFilm} />
    </div>
  );
};

export default MoviePage;
