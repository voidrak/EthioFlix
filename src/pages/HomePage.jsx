import React from "react";
import HomeLanding from "../components/HomeLanding";
export const HomePage = ({ allFilm }) => {
  return (
    <div className="home-page">
      <HomeLanding allFilm={allFilm} />
    </div>
  );
};
