import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import { Footer } from "./Footer";
export const SharedLayout = ({
  handleSideBar,
  sideBar,
  allFilm,
  asideSearchInput,
  SetAsideSearchInput,
}) => {
  return (
    <div className="shared-layout">
      <Header handleSideBar={handleSideBar} allFilm={allFilm} />
      <SideNav
        handleSideBar={handleSideBar}
        sideBar={sideBar}
        allFilm={allFilm}
        asideSearchInput={asideSearchInput}
        SetAsideSearchInput={SetAsideSearchInput}
      />
      <Outlet />
      <Footer />
    </div>
  );
};
