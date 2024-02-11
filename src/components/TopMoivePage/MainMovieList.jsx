import React from "react";

const MainMovieList = ({ mainMovieList }) => {
  const mappedMainMovie = mainMovieList
    .sort((a, b) => b.rating - a.rating)
    .map((movie) => (
      <div className="main-movie-card" key={movie.id}>
        <div
          className="thumbnail"
          style={{ backgroundImage: `url(${movie.image})` }}
        >
          {/* <img src={movie.image} alt={movie.EnglishTitle} /> */}
        </div>
        <div className="card-info">
          <h1>{movie.amharicTitle}</h1>

          <div className="svg-hd">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>

            <div className="hd-rating">
              <p className="rating">{movie.rating.toFixed(1)}</p>
              <p className="hd">HD</p>
              <p>{movie.releaseYear}</p>
            </div>
          </div>

          <button>
            <h2>WATCH NOW </h2>
          </button>
        </div>
      </div>
    ));
  return (
    <div className="main-movie">
      <div className="movie-section">{mappedMainMovie}</div>
    </div>
  );
};

export default MainMovieList;
