import React, { useState } from "react";
import SideNav from "../components/SideNav";
import HomeLanding from "../components/HomeLanding";
export const HomePage = ({ handleSideBar, sideBar }) => {
  return (
    <div className="home-page">
      <SideNav handleSideBar={handleSideBar} sideBar={sideBar} />
      <HomeLanding />
    </div>
  );
};
