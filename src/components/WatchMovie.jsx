import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WatchMovie = ({ allFilm }) => {
  const [currentMovie, setCurrentMovie] = useState(null);
  const { currentMovieId } = useParams();
  useEffect(() => {
    const filteredCurrent = allFilm.filter(
      (movie) => movie.id == currentMovieId
    );
    setCurrentMovie(filteredCurrent);
  }, [allFilm]);

  // const mappedCurrent= currentMovie.map((movie)=>(

  // ))
  // if (currentMovie && currentMovie.length() > 0) {
  //   console.log(currentMovie);
  // }
  return currentMovie ? (
    <div className="current-movie">
      <iframe
        src={`https://www.youtube.com/embed/${currentMovie[0].src}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default WatchMovie;
