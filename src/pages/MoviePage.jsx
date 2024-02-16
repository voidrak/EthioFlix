import React, { useState, useEffect } from "react";
import TopMoviePage from "../components/TopMoivePage/TopMoviePage";
import MovieFIlter from "../components/MovieFilter";
import MainMovieList from "../components/TopMoivePage/MainMovieList";
const MoviePage = ({ allFilm, setMainMovieList, mainMovieList }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // useEffect(() => {
  //   const backgroundImage = new Image();
  //   backgroundImage.src = "thumbnails/Manyazewal.jpg";
  //   backgroundImage.onload = () => {
  //     setImagesLoaded(true);
  //   };
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setImagesLoaded(true);
    }, 5000);
  }, []);

  return (
    <div className="movie-page">
      {imagesLoaded && (
        <>
          <TopMoviePage allFilm={allFilm} setImagesLoaded={setImagesLoaded} />
          <MovieFIlter
            allFilm={allFilm}
            setMainMovieList={setMainMovieList}
            mainMovieList={mainMovieList}
          />
          <MainMovieList mainMovieList={mainMovieList} />
        </>
      )}
      {!imagesLoaded && (
        <div className="loading">
          <h1>LOADING</h1>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
