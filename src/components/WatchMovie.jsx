import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WatchMovie = ({ allFilm }) => {
  const [currentMovie, setCurrentMovie] = useState();
  const { currentMovieId } = useParams();
  useEffect(() => {
    const filteredCurrent = allFilm.filter(
      (movie) => movie.id == currentMovieId
    );
    setCurrentMovie(filteredCurrent);
  }, [allFilm]);

  // const mappedCurrent= currentMovie.map((movie)=>(

  // ))

  return currentMovie ? (
    <div className="current-movie">
      <iframe
        src={`https://www.youtube.com/embed/${currentMovie[0].src}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default WatchMovie;
