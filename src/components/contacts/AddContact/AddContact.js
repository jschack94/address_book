import React, { useState } from "react";
import "./AddContact.css";
import { Link } from "react-router-dom";

let AddContact = ({addContact}) => {
  const initialFormState = {
    photo: "",
    salutation: "",
    firstname: "",
    lastName: "",
    company: "",
    phone: "",
  };
  const [contact, setContact] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContact({ ...contact, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault()
    addContact(contact)
    setContact(initialFormState)
  }

  return (
    <React.Fragment>
      <section>
        <div className="grid-container-create">
          <div className="grid-item-create">
            <h2>Create Contact</h2>
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
              <Link to={"/contactList"} className="standard-button">
                Cancel
              </Link>
            </button>
          </div>
          <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  class="icon"
                  alt="Contact Photo"
                ></img>
          <div className="add-form">
        
          <form onSubmit={submitHandler}>
            <div className="form-inner">
              <h2>Create Contact</h2>
              <div className="form-group">
                <label htmlFor="photo">Photo:</label>
                <input type="text" name="photo" id="photo" onChange={handleInputChange}
            value={contact.photo} required />
              </div>
              <div className="form-group">
                <label htmlFor="salutation">Salutation:</label>
                <input type="text" name="salutation" id="salutation" onChange={handleInputChange}
            value={contact.salutation} required />
              </div>
              <div className="form-group">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" name="firstname" id="firstname" onChange={handleInputChange}
            value={contact.firstname} required />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" name="lastname" id="lastname" onChange={handleInputChange}
            value={contact.lastname} required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company:</label>
                <input type="text" name="company" id="company" onChange={handleInputChange}
            value={contact.company} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="text" name="phone" id="phone" onChange={handleInputChange}
            value={contact.phone} required />
              </div>
              <input type="submit" value="Add Contact" />
            </div>
          </form>
        </div>
        </div>
      </section>
    </React.Fragment>
  );
  
};

export default AddContact;
