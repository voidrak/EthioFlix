import React, { useState } from "react";
import SideNav from "../components/SideNav";
import HomeLanding from "../components/HomeLanding";
export const HomePage = ({ allFilm }) => {
  return (
    <div className="home-page">
      <HomeLanding allFilm={allFilm} />
    </div>
  );
};
