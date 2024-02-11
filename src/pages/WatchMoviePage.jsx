import React from "react";
import WatchMovie from "../components/WatchMovie";

const WatchMoviePage = ({ allFilm }) => {
  return (
    <div>
      <WatchMovie allFilm={allFilm} />
    </div>
  );
};

export default WatchMoviePage;
