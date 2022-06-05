import React from "react";
import "./ContactList.css";
import { Link } from "react-router-dom";

let ContactList = () => {
  const [contacts, setContacts] = React.useState([
    {
      photo:
        "https://pixabay.com/get/gae53fe03db8ac5db9c87c52efa14481d5757fea54eb917368fc98da6d6dc1558c39353a5f2ff527335162725dd448165df5047277ee3738da879a2385e882c9127e877a1ac2462e8837449299cc14ff7_640.png",
      salutation: "Mrs",
      firstName: "lizzy",
      lastName: "g",
      company: "google",
      phone: "+1 (719) 555-1212",
    },

  ]);

  const removeAddress = index => {
    const newAddresses = [...contacts];
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
            <button className="button button-warning">
              <Link to={"/contact/new"} className="standard-button">
                New
              </Link>
            </button>
          </div>
        </div>
      </section>
      <React.Fragment>
        <div className="styled-container">
          {contacts.map((contact, index) => {
            return (
              <div className="styled-card" key={index} index={index}>
                <img
                  src={contact.photo}
                  class="fit-picture"
                  alt="Grapefruit slice atop a pile of other slices"
                ></img>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-action">
                    Salutation:
                    <span>
                      <b> {contact.salutation}</b>
                    </span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    First Name:
                    <span>
                      <b> {contact.firstName}</b>
                    </span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Last Name:
                    <span>
                      <b> {contact.lastName}</b>
                    </span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Company:
                    <span>
                      <b> {contact.company}</b>
                    </span>
                  </li>

                  <li className="list-group-item list-group-item-action">
                    Phone Number:
                    <span>
                      <b> {contact.phone}</b>
                    </span>
                  </li>
                </ul>
                <button className="button button-view">
                  <Link
                    to={".contacts/view/:contactId"}
                    className="standard-button"
                  >
                    <i class="fa fa-eye fa-1x"></i>
                  </Link>
                </button>
                <button
                  className="button button-trash"
                  onClick={() => removeAddress(index)}
                >
                  <Link to={"/contactList"} className="standard-button">
                    <i class="fa fa-trash fa-1x"></i>
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
