import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
export const SharedLayout = ({ handleSideBar, sideBar }) => {
  return (
    <div className="shared-layout">
      <Header handleSideBar={handleSideBar} />
      <SideNav handleSideBar={handleSideBar} sideBar={sideBar} />
      <Outlet />
    </div>
  );
};
