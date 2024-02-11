import React from "react";
import TopMoviePage from "../components/TopMoivePage/TopMoviePage";
import MovieFIlter from "../components/MovieFilter";
import MainMovieList from "../components/TopMoivePage/MainMovieList";
const MoviePage = ({ allFilm, setMainMovieList, mainMovieList }) => {
  return (
    <div className="movie-page">
      <TopMoviePage allFilm={allFilm} />
      <MovieFIlter
        allFilm={allFilm}
        setMainMovieList={setMainMovieList}
        mainMovieList={mainMovieList}
      />
      <MainMovieList mainMovieList={mainMovieList} />
    </div>
  );
};

export default MoviePage;
