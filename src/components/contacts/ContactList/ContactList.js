import React from "react";
import "./ContactList.css";
import { Link } from "react-router-dom";
import logo from './title.png'; 

let ContactList = ({User}) => {
  return (
    <React.Fragment>
      <section>
      <div className="grid-container">
        <div className="grid-item">
          <h2>All Contacts</h2>
          <button className="add_button">
              <i className="fa fa-plus-circle add_icon"></i>
              New Contact
          </button>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      </section>
      <div className="styled-container">
        <div className="styled-card">
        <img class="fit-picture"
     src={logo}
     alt="Grapefruit slice atop a pile of other slices">
</img>

          <h1>HELLO 1</h1>
          <p>HOWDYYYYY</p>
          <div className="styled-button">
          See Contact
            </div>
        </div>
        <div className="styled-card">
        <img class="fit-picture"
     src={logo}
     alt="Grapefruit slice atop a pile of other slices">
</img>

          <h1>HELLO 1</h1>
          <p>HOWDYYYYY</p>
          <div className="styled-button">
          See Contact
            </div>
        </div>
        <div className="styled-card">
        <img class="fit-picture"
     src={logo}
     alt="Grapefruit slice atop a pile of other slices">
</img>

          <h1>HELLO 1</h1>
          <p>HOWDYYYYY</p>
          <div className="styled-button">
          See Contact
            </div>
        </div>
        <div className="styled-card">
        <img class="fit-picture"
     src={logo}
     alt="Grapefruit slice atop a pile of other slices">
</img>

          <h1>HELLO 1</h1>
          <p>HOWDYYYYY</p>
          <div className="styled-button">
            See Contact
            </div>
        </div>


      </div>
      <section>

      </section>
    </React.Fragment>
  );
};

export default ContactList;
