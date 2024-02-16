import React, { useState, useEffect } from "react";
import TopMoviePage from "../components/TopMoivePage/TopMoviePage";
import MovieFIlter from "../components/MovieFilter";
import MainMovieList from "../components/TopMoivePage/MainMovieList";
import { Grid } from "react-loader-spinner";
const MoviePage = ({ allFilm, setMainMovieList, mainMovieList }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = "thumbnails/Manyazewal.jpg";
    backgroundImage.onload = () => {
      setImagesLoaded(true);
    };
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
        <Grid
          visible={true}
          height="250"
          width="250"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      )}
    </div>
  );
};

export default MoviePage;
