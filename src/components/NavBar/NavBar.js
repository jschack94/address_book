import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

let NavBar = ({ User }) => {
  return (
    <React.Fragment>
      <header className="navbar">
        <div className="navbar__title navbar__item">
          <Link to={"/"} className="navbar__title">
            <i className="fa fa-mobile mobile_icon" />
            Contact Manager
          </Link>
        </div>
        <div className="navbar__item">Settings</div>
        <div className="navbar__item">Welcome Back, {User.firstName} </div>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
