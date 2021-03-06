import React, { useState } from "react";
import "./ContactList.scss";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../../../_global.scss";

let ContactList = ({ Contacts, setContacts }) => {


  const removeAddress = (index) => {
    const newAddresses = [...Contacts];
    newAddresses.splice(index, 1);
    setContacts(newAddresses);
  };

  return (
    <React.Fragment>
      <section>
        <div className="grid-container">
          <div className="grid-item">
            <h2>All Contacts</h2>
            <p>
              {" "}
              <i>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </i>
            </p>
            <button className="button primary-button">
              <Link to={"/contact/new"} className="remove-link">
                New
              </Link>
            </button>
          </div>
        </div>
      </section>
      <React.Fragment>
        <div className="styled-container">
          {Contacts.map((contact, index) => {
            return (
              <div className="styled-card" key={index} index={index}>
                {}
                <img
                  src={contact.photo.includes(".com") || contact.photo.includes(".net") || contact.photo.includes(".org") ? contact.photo : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  class="fit-picture"
                  alt={contact.photo} 
                ></img>
                <div className="mobile-list-view">
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-action">
                      Salutation:
                      <span>
                        <b> {contact.salutation}.</b>
                      </span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      First Name:
                      <span>
                        <b> {contact.firstname}</b>
                      </span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Last Name:
                      <span>
                        <b> {contact.lastname}</b>
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-action">
                      Company:
                      <span>
                        <b> {contact.company}</b>
                      </span>
                    </li>
                  </ul>

                  {contact.numbers.map((number, index) => {
                    return (
                      <ul className="list-group">
                        <div className={number.type === "Home" ? "green" : ""}>
                          <div
                            className={number.type === "Mobile" ? "blue" : ""}
                          >
                            <div
                              className={number.type === "Work" ? "red" : ""}
                            >
                              {index === 0 ? (
                                <>
                                  <p>
                                    {number.type}: <FaStar color={"orange"} />
                                  </p>
                                  <p>{number.number}</p>
                                </>
                              ) : (
                                <>
                                  <p>{number.type}:</p>
                                  <p>{number.number}</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </ul>
                    );
                  })}
                </div>
                <div className="mobile-button-view">
                  <button className="button button-view">
                    <Link
                      to="/contact/view"
                      state={{ contact: contact, index: index }}
                      className="standard-button"
                    >
                      <i class="white fa fa-eye fa-1x"></i>
                    </Link>
                  </button>
                </div>
                <button
                  className="button button-trash"
                  onClick={() => removeAddress(index)}
                >
                  <Link to={"/contactList"} className="standard-button">
                    <i class="white fa fa-trash fa-1x"></i>
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    </React.Fragment>
  );
};

export default ContactList;
