import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="header-menu"
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
      <Link to="/">
        <img src="weblogo.png" alt="ethioflix logo" />
      </Link>

      <div className="larger-screen-header">
        <input type="text" placeholder="Search Movies" />
        <ul>
          <li></li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
