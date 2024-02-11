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

  console.log(currentMovieId);
  if (currentMovie) {
    console.log(currentMovie[0].src);
  }

  return currentMovie ? (
    <div>
      <iframe
        width="560"
        height="315"
        src={currentMovie[0].src}
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
