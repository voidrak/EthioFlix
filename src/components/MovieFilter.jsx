import React, { useMemo, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { debounce } from "lodash";

const MovieFilter = ({ allFilm, setMainMovieList }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [MainSearchInput, setMainSearchInput] = useState("");

  const MainSearchResult = useMemo(() => {
    if (MainSearchInput) {
      return allFilm.filter((item) => {
        return MainSearchInput.toLowerCase() === ""
          ? null
          : item.EnglishTitle.toLowerCase().includes(MainSearchInput);
      });
    }
  }, [allFilm, MainSearchInput]);

  const filterYear = [...new Set(allFilm.map((val) => val.releaseYear))].sort(
    (a, b) => a - b
  );

  const filterGenre = [...new Set(allFilm.map((val) => val.genre[0]))];

  const navigate = useNavigate();
  // function handleSearch() {
  //   setActiveSearch((prev) => !prev);
  //   console.log("key down");
  // }
  function handleFilterStyle(type) {
    setActiveFilter(type);
  }
  function handleYear(event, year) {
    event.stopPropagation();
    setActiveFilter("false");
    const filteredMovie = allFilm.filter((movie) => movie.releaseYear === year);
    console.log(filteredMovie);
    setMainMovieList(filteredMovie);
  }
  function handleGenre(event, genre) {
    event.stopPropagation();
    setActiveFilter("false");
    const filteredMovie = allFilm.filter((movie) =>
      movie.genre.includes(genre)
    );

    setMainMovieList(filteredMovie);
  }
  function handleRating(event, MinRating, MaxRating) {
    event.stopPropagation();
    setActiveFilter("false");
    const filteredMovie = allFilm.filter(
      (movie) => MinRating <= movie.rating && movie.rating < MaxRating
    );

    setMainMovieList(filteredMovie);
  }

  // const handleKeyDown = (event) => {
  //   if (event.keyCode === 13) {
  //     setActiveSearch(false);
  //     console.log("key down");
  //     event.preventDefault;
  //     // navigate("/");
  //   }
  // };

  return (
    <div className="movie-filter-outer">
      <div className="movie-filter-inner">
        <div className={`${activeSearch ? "disable-filter" : "filter-tags"}`}>
          <p
            className={`${activeFilter === "all" ? "active-filter" : " "}`}
            onClick={() => {
              handleFilterStyle("all");
              setMainMovieList(allFilm);
            }}
          >
            All Movies
          </p>

          <div
            className={`by-year ${
              activeFilter === "year" ? "active-filter" : " "
            }`}
            onClick={() => {
              handleFilterStyle("year");
            }}
          >
            <p>By Year</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
            <div className="year-btn">
              {filterYear.map((year) => (
                <button key={year} onClick={(event) => handleYear(event, year)}>
                  {year}
                </button>
              ))}
              <button
                className="close"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveFilter(false);
                }}
              >
                Close
              </button>
            </div>
          </div>

          <div
            className={`by-genre ${
              activeFilter === "genre" ? "active-filter" : " "
            }`}
            onClick={() => handleFilterStyle("genre")}
          >
            <p>By Genre</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
            <div className="genre-btn">
              {filterGenre.map((genre) => (
                <button
                  key={genre}
                  onClick={(event) => handleGenre(event, genre)}
                >
                  {genre}
                </button>
              ))}
              <button
                className="close"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveFilter(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
          <div
            className={`by-rating ${
              activeFilter === "rating" ? "active-filter" : " "
            }`}
            onClick={() => handleFilterStyle("rating")}
          >
            <p>By Rating</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
            <div className="rating-btn">
              {/* {filterRating.map((rating) => (
                <button
                  key={rating}
                  onClick={(event) => handleRating(event, rating)}
                >
                  {rating}
                </button>
              ))} */}
              <button onClick={(event) => handleRating(event, 6.5, 7.0)}>
                <span>&#8805;</span>6.5
              </button>
              <button onClick={(event) => handleRating(event, 7.0, 7.5)}>
                <span>&#8805;</span>7.0
              </button>
              <button onClick={(event) => handleRating(event, 7.5, 8.0)}>
                <span>&#8805;</span>7.5
              </button>
              <button onClick={(event) => handleRating(event, 8.0, 8.5)}>
                <span>&#8805;</span>8.0
              </button>
              <button onClick={(event) => handleRating(event, 8.5, 9.0)}>
                <span>&#8805;</span>8.5
              </button>
              <button onClick={(event) => handleRating(event, 9.0, 9.9)}>
                <span>&#8805;</span>9.0
              </button>
              <button
                className="close"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveFilter(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        <div
          className={`mobile-search ${activeSearch ? "active-search" : ""}`}
          onChange={(e) => {
            setMainSearchInput(e.target.value);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input type="text" />
        </div>
      </div>

      <div className="search-result-container">
        {MainSearchResult &&
          MainSearchResult.map((movie) => (
            <NavLink
              to={`/home/${movie.id}`}
              style={{ color: "white" }}
              key={movie.id}
            >
              <div className="result-row">
                <div
                  className="search-img"
                  style={{ backgroundImage: `url(${movie.image})` }}
                ></div>
                <div className="result-info">
                  <h3 className="title">{movie.amharicTitle}</h3>
                  <div className="rating-duration-genre">
                    <p className="year">{movie.releaseYear}</p>
                    <span>&#729;</span>
                    <p className="duration">{movie.duration}</p>
                    <span>&#729;</span>
                    <p className="rating">{movie.rating}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default MovieFilter;
