import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export const SharedLayout = ({ handleSideBar }) => {
  return (
    <div>
      <Header handleSideBar={handleSideBar} />
      <Outlet />
    </div>
  );
};
