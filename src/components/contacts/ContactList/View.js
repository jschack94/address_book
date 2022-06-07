import React from "react";
import "./ContactList.scss";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const View = () => {
  const location = useLocation();
  const Contacts = location.state.contact;
  const index = location.state.index;
  return (
    <React.Fragment>
      <div className="styled-container">
        <div className="styled-card" key={index} index={index}>
          <img
            src={Contacts.photo}
            class="fit-picture"
            alt="Contacts Photo"
          ></img>
          <div className="mobile-list-view">
            <ul className="list-group">
              <li className="list-group-item list-group-item-action">
                Salutation:
                <span>
                  <b> {Contacts.salutation}.</b>
                </span>
              </li>
              <li className="list-group-item list-group-item-action">
                First Name:
                <span>
                  <b> {Contacts.firstname}</b>
                </span>
              </li>
              <li className="list-group-item list-group-item-action">
                Last Name:
                <span>
                  <b> {Contacts.lastname}</b>
                </span>
              </li>
            </ul>
          </div>

          <ul className="list-group">
            <li className="list-group-item list-group-item-action">
              Company:
              <span>
                <b> {Contacts.company}</b>
              </span>
            </li>
          </ul>

          {Contacts.numbers.map((number, index) => {
            return (
              <ul className="list-group">
                <div className={number.type === "Home" ? "green" : ""}>
                  <div className={number.type === "Mobile" ? "blue" : ""}>
                    <div className={number.type === "Work" ? "red" : ""}>
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
          <button className="button button-view">
            <Link to={"/contactList"} className="standard-button">
              <i class="fa fa-home white" aria-hidden="true"></i>
            </Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default View;
