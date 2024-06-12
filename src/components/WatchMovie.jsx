import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WatchMovie = ({ allFilm }) => {
  const [currentMovie, setCurrentMovie] = useState(null);
  const { currentMovieId } = useParams();
  useEffect(() => {
    const filteredCurrent = allFilm.filter(
      (movie) => movie._id == currentMovieId
    );
    setCurrentMovie(filteredCurrent);
  }, [allFilm]);
  return currentMovie ? (
    <div className="current-movie">
      <iframe
        src={`https://www.youtube.com/embed/${currentMovie[0].src}?start=00`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
      <div className="movie-info">
        <h1>{currentMovie[0].amharicTitle}</h1>
        <div className="rating-year-genre">
          <div className="rating">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <p>{currentMovie[0].rating}</p>
          </div>
          <p className="year">{currentMovie[0].releaseYear}</p>
          <div className="genre">
            <p>{currentMovie[0].genre[0]}</p>
            <p>{currentMovie[0].genre[1]}</p>
          </div>
        </div>
      </div>
      <div className="add-to">
        <button className="favorite">
          <p>Add to Favorite</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </button>
        <button className="list">
          <p>Add to List</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default WatchMovie;
