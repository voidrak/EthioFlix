import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ handleSideBar }) => {
  return (
    <div className="header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="header-menu"
        onClick={handleSideBar}
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
      <NavLink to="/">
        <img src="weblogo.png" alt="ethioflix logo" />
      </NavLink>
      <input
        type="text"
        placeholder="Search Movies"
        className="header-search"
      />

      <div className="larger-screen-header">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contactus"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
