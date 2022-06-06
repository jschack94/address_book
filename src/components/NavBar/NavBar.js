import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

let NavBar = ({ User }) => {
  let welcomeText;
  let settingsText;
  if (User.username) {
    welcomeText = "Welcome Back, " + User.username;
    settingsText = "Settings";
  } else {
    welcomeText = "";
    settingsText = "";
  }
  return (
    <React.Fragment>
      <header className="navbar">
        <div className="navbar__title navbar__item">
          <Link to={"/"} className="navbar__title">
            <i className="fa fa-mobile mobile_icon" />
            Contact Manager
          </Link>
        </div>
        <div className="navbar__item">
  
          <Link to={"/settings"} className="plain">{settingsText}</Link>
        </div>
        <div className="navbar__item"> {welcomeText} </div>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
