import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

const HomeLanding = ({ allFilm }) => {
  const [searchInput, setSearchInput] = useState("");
  const [testList, setTestList] = useState(null);
  useEffect(() => {
    const filteredList = allFilm.filter((movie) =>
      movie.genre.includes("Thriller")
    );
    setTestList(filteredList);
  }, [allFilm]);
  const handleChange = debounce((e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  }, 200);
  return (
    <div className="home-landing">
      <div className="top">
        <img src="weblogo.png" alt="ethioflix logo" />
        <div className="input-btn">
          <input
            type="text"
            placeholder="Search Movies"
            onChange={(e) => handleChange(e)}
          />
          <div className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>
        </div>
        <Link to="/home">
          <button>
            <h1>View Full Site</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
            </svg>
          </button>
        </Link>

        <div className="test">
          <table>
            <thead></thead>
            <tbody>
              {testList &&
                testList
                  .filter((item) => {
                    return searchInput.toLowerCase() === ""
                      ? null
                      : item.EnglishTitle.toLowerCase().includes(searchInput);
                  })
                  .map((movie) => (
                    <tr key={movie.id}>
                      <td>{movie.EnglishTitle}</td>
                      <td>{movie.genre}</td>
                      <td>{movie.rating}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
